import * as THREE from 'three';
import {DecalGeometry} from '../lib/geometries/DecalGeometry.js';
export const strip=n=>n.replace(/^.*?mixamorig\d*:?/,'').replace(/^.*:/,'').replace(/_\d+$/,'');
// informazioni sullo scheletro (tutte le copie dello stesso osso, se il modello ne ha più di una)
export function rigInfo(root){root.updateMatrixWorld(true);const bones={},all={};root.traverse(o=>{if(o.isBone){const k=strip(o.name);(all[k]=all[k]||[]).push(o);if(!bones[k])bones[k]=o;}});
 const inv=root.matrixWorld.clone().invert(),W=n=>bones[n].getWorldPosition(new THREE.Vector3()).applyMatrix4(inv);
 const legW=W('LeftUpLeg').distanceTo(W('LeftLeg'))+W('LeftLeg').distanceTo(W('LeftFoot'));
 const hips=all.Hips.map(h=>{const pm=inv.clone().multiply(h.parent.matrixWorld);const q=new THREE.Quaternion();pm.decompose(new THREE.Vector3(),q,new THREE.Vector3());return{b:h,pmi:pm.clone().invert(),qi:q.invert()};});
 return{bones,all,legW,hips,hipsW:W('Hips').y,headW:W('Head').y};}
// clip della libreria → AnimationClip per questo modello (bacino senza spostamento orizzontale)
export function buildClip(lib,key,rig){const c=lib.clips[key];if(!c)return null;const n=c.n,times=new Float32Array(n);for(let i=0;i<n;i++)times[i]=Math.min(c.d,i/lib.fps);
 const tracks=[],q=new THREE.Quaternion(),p=new THREE.Vector3();
 for(const b in c.q){const list=rig.all[b];if(!list)continue;
  if(b==='Hips'){for(const h of rig.hips){const v=new Float32Array(n*4);for(let i=0;i<n;i++){q.fromArray(c.q[b],i*4).premultiply(h.qi);q.toArray(v,i*4);}tracks.push(new THREE.QuaternionKeyframeTrack(h.b.name+'.quaternion',times,v));}}
  else for(const bone of list)tracks.push(new THREE.QuaternionKeyframeTrack(bone.name+'.quaternion',times,c.q[b]));}
 const hp=c.hp,L=rig.legW,x0=hp[0],z0=hp[2],x1=hp[(n-1)*3],z1=hp[(n-1)*3+2];
 for(const h of rig.hips){const v=new Float32Array(n*3);for(let i=0;i<n;i++){const k=n>1?i/(n-1):0;p.set((hp[i*3]-(x0+(x1-x0)*k))*L,hp[i*3+1]*L,(hp[i*3+2]-(z0+(z1-z0)*k))*L).applyMatrix4(h.pmi);p.toArray(v,i*3);}
  tracks.push(new THREE.VectorKeyframeTrack(h.b.name+'.position',times,v));}
 const cl=new THREE.AnimationClip(key,c.d,tracks);cl.adv=Math.hypot(x1-x0,z1-z0);return cl;}
// faccia proiettata sulla testa: decal calcolato sulla posa reale (dopo lo skinning) e riportato nello spazio dello scheletro
const comp=(a,i,k)=>k===0?a.getX(i):k===1?a.getY(i):k===2?a.getZ(i):a.getW(i);
const HIDE=/hair|moustache|earring|helmet|visor/i;
function skinMatrix(m,j,cache){let M=cache.get(j);if(M)return M;const si=m.geometry.attributes.skinIndex,sw=m.geometry.attributes.skinWeight,sk=m.skeleton;
 const S=new THREE.Matrix4().set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),B=new THREE.Matrix4();
 for(let k=0;k<4;k++){const w=comp(sw,j,k);if(!w)continue;const bi=comp(si,j,k);B.multiplyMatrices(sk.bones[bi].matrixWorld,sk.boneInverses[bi]);for(let e=0;e<16;e++)S.elements[e]+=B.elements[e]*w;}
 M=new THREE.Matrix4().multiplyMatrices(m.matrixWorld,m.bindMatrixInverse).multiply(S).multiply(m.bindMatrix);cache.set(j,M);return M;}
export function applyFace(root,tex,opts={}){root.updateMatrixWorld(true);
 const meshes=[];root.traverse(o=>{if(o.isSkinnedMesh)meshes.push(o);});
 const B=rigInfo(root).bones,wp=b=>b.getWorldPosition(new THREE.Vector3());
 const head=wp(B.Head),top=B.HeadTop_End?wp(B.HeadTop_End):null,neck=wp(B.Neck);
 const v=new THREE.Vector3(),pts=[];let topY=top?top.y:-1e9,maxZ=-1e9,minX=1e9,maxX=-1e9;
 const world=new Map();
 for(const m of meshes){if(HIDE.test(m.name))continue;const pos=m.geometry.attributes.position,arr=new Float32Array(pos.count*3);world.set(m,arr);
  for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i);m.applyBoneTransform(i,v);v.applyMatrix4(m.matrixWorld);arr[i*3]=v.x;arr[i*3+1]=v.y;arr[i*3+2]=v.z;
   if(v.y<neck.y||Math.abs(v.x-head.x)>.3*(head.y-neck.y+.3))continue;pts.push({m,i,p:v.clone()});if(!top)topY=Math.max(topY,v.y);}}
 const hh=topY-head.y,chin=head.y-hh*(opts.chin??.3);
 for(const q of pts){if(q.p.y<chin||q.p.y>topY)continue;maxZ=Math.max(maxZ,q.p.z);if(q.p.y>head.y&&q.p.y<head.y+hh*.6){minX=Math.min(minX,q.p.x);maxX=Math.max(maxX,q.p.x);}}
 if(maxZ<-1e8)return null;
 const H=(topY-chin)*(opts.h??1.12),W=Math.max(H*.8,(maxX-minX)*(opts.w??1.05)),D=Math.max(.05,(maxX-minX)*.75);
 const pos=new THREE.Vector3(head.x,(chin+topY)/2+(opts.dy??0)*H,maxZ-D*.45);
 const mat=new THREE.MeshStandardMaterial({map:tex,transparent:true,alphaTest:.45,roughness:.6,metalness:0,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-4});
 const out=[];
 for(const m of meshes){if(HIDE.test(m.name)){m.visible=false;continue;}const mine=pts.filter(p=>p.m===m);if(!mine.length)continue;
  const tg=new THREE.BufferGeometry();tg.setAttribute('position',new THREE.BufferAttribute(world.get(m),3));tg.setAttribute('normal',m.geometry.attributes.normal);if(m.geometry.index)tg.setIndex(m.geometry.index);
  const tm=new THREE.Mesh(tg);tm.updateMatrixWorld(true);
  const g=new DecalGeometry(tm,pos,new THREE.Euler(0,0,0),new THREE.Vector3(W,H,D));if(!g.attributes.position.count)continue;
  const P=g.attributes.position,n=P.count,SI=new Uint16Array(n*4),SW=new Float32Array(n*4),N=new Float32Array(n*3),cache=new Map(),Mi=new THREE.Matrix4();
  const si=m.geometry.attributes.skinIndex,sw=m.geometry.attributes.skinWeight,sn=m.geometry.attributes.normal,nv=new THREE.Vector3();
  for(let i=0;i<n;i++){v.fromBufferAttribute(P,i);let bd=1e9,bi=0;for(const q of mine){const dd=q.p.distanceToSquared(v);if(dd<bd){bd=dd;bi=q.i;}}
   for(let k=0;k<4;k++){SI[i*4+k]=comp(si,bi,k);SW[i*4+k]=comp(sw,bi,k);}
   nv.fromBufferAttribute(sn,bi);N[i*3]=nv.x;N[i*3+1]=nv.y;N[i*3+2]=nv.z;
   Mi.copy(skinMatrix(m,bi,cache)).invert();v.applyMatrix4(Mi);P.setXYZ(i,v.x,v.y,v.z);}
  g.setAttribute('skinIndex',new THREE.BufferAttribute(SI,4));g.setAttribute('skinWeight',new THREE.BufferAttribute(SW,4));g.setAttribute('normal',new THREE.BufferAttribute(N,3));
  const dm=new THREE.SkinnedMesh(g,mat);dm.position.copy(m.position);dm.quaternion.copy(m.quaternion);dm.scale.copy(m.scale);dm.frustumCulled=false;dm.renderOrder=2;
  m.parent.add(dm);dm.bind(m.skeleton,m.bindMatrix);out.push(dm);}
 return{meshes:out,mat};}
