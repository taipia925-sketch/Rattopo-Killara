// Converte clip Mixamo (FBX e GLB) in una libreria JSON normalizzata: 30 fps, ossa principali, posizione del bacino in unità "lunghezza gamba"
import * as THREE from 'three';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import {MeshoptDecoder} from 'meshoptimizer';
import fs from 'fs';
const S=process.env.S,FPS=30;
const BONES=['Hips','Spine','Spine1','Spine2','Neck','Head','LeftShoulder','LeftArm','LeftForeArm','LeftHand','RightShoulder','RightArm','RightForeArm','RightHand','LeftUpLeg','LeftLeg','LeftFoot','LeftToeBase','RightUpLeg','RightLeg','RightFoot','RightToeBase'];
const strip=n=>n.replace(/^.*?mixamorig\d*:?/,'').replace(/^.*:/,'');
const out={fps:FPS,bones:BONES,clips:{}};
const r4=v=>Math.round(v*1e4)/1e4;
function store(key,dur,evalQ,evalP,legLen,src){
 const n=Math.max(2,Math.round(dur*FPS)+1),q={},hp=[];
 for(const b of BONES){const ev=evalQ[b];if(!ev)continue;const a=[];for(let i=0;i<n;i++){const v=ev(Math.min(dur,i/FPS));a.push(r4(v[0]),r4(v[1]),r4(v[2]),r4(v[3]));}q[b]=a;}
 for(let i=0;i<n;i++){const v=evalP(Math.min(dur,i/FPS));hp.push(r4(v[0]/legLen),r4(v[1]/legLen),r4(v[2]/legLen));}
 out.clips[key]={d:r4(dur),n,q,hp,src};}
// ---- FBX
const FBX=JSON.parse(fs.readFileSync('fbxmap.json'));
for(const [key,file] of Object.entries(FBX)){
 const buf=fs.readFileSync(`${S}/anim/${file}.fbx`);const o=new FBXLoader().parse(buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength),'');
 o.updateMatrixWorld(true);const bones={};o.traverse(b=>{if(b.isBone)bones[strip(b.name)]=b;});
 const wp=n=>bones[n].getWorldPosition(new THREE.Vector3());
 const leg=wp('LeftUpLeg').distanceTo(wp('LeftLeg'))+wp('LeftLeg').distanceTo(wp('LeftFoot'));
  const c=o.animations[0],evalQ={};let evalP=()=>[0,0,0];
 for(const t of c.tracks){const [bn,pr]=t.name.split('.');const b=strip(bn);if(!BONES.includes(b))continue;const it=t.createInterpolant();
  if(pr==='quaternion'){if(b==='Hips'){const pq=bones.Hips.parent.getWorldQuaternion(new THREE.Quaternion());evalQ[b]=tt=>{const q=new THREE.Quaternion().fromArray(it.evaluate(tt));return pq.clone().multiply(q).toArray();};}else evalQ[b]=tt=>Array.from(it.evaluate(tt));}
  if(pr==='position'&&b==='Hips'){const pm=bones.Hips.parent.matrixWorld.clone();evalP=tt=>new THREE.Vector3().fromArray(it.evaluate(tt)).applyMatrix4(pm).toArray();}}
 store(key,c.duration,evalQ,evalP,leg,file);console.log('fbx',key,c.duration.toFixed(2),'leg',leg.toFixed(1));}
// ---- GLB
await MeshoptDecoder.ready;const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
const GLBM=JSON.parse(fs.readFileSync('glbmap.json'));
const lerpQ=(a,b,t)=>{const qa=new THREE.Quaternion(...a),qb=new THREE.Quaternion(...b);return qa.slerp(qb,t).toArray();};
function sampler(s,isQ){const ti=s.getInput().getArray(),O=s.getOutput(),k=isQ?4:3,interp=s.getInterpolation();const vo=[];for(let i=0;i<O.getCount();i++)vo.push(...O.getElement(i,[]));
 return t=>{let i=0;while(i<ti.length-1&&ti[i+1]<t)i++;const j=Math.min(i+1,ti.length-1),f=j===i?0:clamp01((t-ti[i])/(ti[j]-ti[i]));
  const stride=interp==='CUBICSPLINE'?k*3:k,off=interp==='CUBICSPLINE'?k:0;const a=[...vo.slice(i*stride+off,i*stride+off+k)],b=[...vo.slice(j*stride+off,j*stride+off+k)];
  if(interp==='STEP')return a;return isQ?lerpQ(a,b,f):a.map((v,x)=>v+(b[x]-v)*f);};}
const clamp01=v=>v<0?0:v>1?1:v;
for(const [file,map] of Object.entries(GLBM)){
 const d=await io.read(`${S}/chars/${file}`);const r=d.getRoot();const nodes={};r.listNodes().forEach(n=>{nodes[strip(n.getName())]=n;});
 const W=n=>{const m=n.getWorldMatrix();return new THREE.Vector3(m[12],m[13],m[14]);};
 const leg=W(nodes.LeftUpLeg).distanceTo(W(nodes.LeftLeg))+W(nodes.LeftLeg).distanceTo(W(nodes.LeftFoot));
 const PM=new THREE.Matrix4();if(nodes.Hips.getParentNode())PM.fromArray(nodes.Hips.getParentNode().getWorldMatrix());
 for(const [key,an] of Object.entries(map)){const a=r.listAnimations().find(x=>x.getName()===an);if(!a){console.log('MISSING',file,an);continue;}
  const evalQ={};let evalP=()=>[0,0,0],dur=0;
  for(const ch of a.listChannels()){const s=ch.getSampler();const ti=s.getInput().getArray();dur=Math.max(dur,ti[ti.length-1]);
   const b=strip(ch.getTargetNode().getName());if(!BONES.includes(b))continue;const p=ch.getTargetPath();
   if(p==='rotation'){const f=sampler(s,true);if(b==='Hips'){const pq=new THREE.Quaternion();PM.decompose(new THREE.Vector3(),pq,new THREE.Vector3());evalQ[b]=t=>pq.clone().multiply(new THREE.Quaternion(...f(t))).toArray();}else evalQ[b]=f;}
   if(p==='translation'&&b==='Hips'){const f=sampler(s,false);evalP=t=>new THREE.Vector3(...f(t)).applyMatrix4(PM).toArray();}}
  store(key,dur,evalQ,evalP,leg,file+':'+an);console.log('glb',key,dur.toFixed(2),'leg',leg.toFixed(2));}}
fs.writeFileSync('anims.json',JSON.stringify(out));console.log('size',fs.statSync('anims.json').size);
