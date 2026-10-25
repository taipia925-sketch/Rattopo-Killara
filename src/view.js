/* Grafica: renderer con post-processing (bloom), luci, arena, lottatori, effetti, telecamera stile Tekken */
import * as THREE from 'three';
import {EffectComposer} from '../lib/postprocessing/EffectComposer.js';
import {RenderPass} from '../lib/postprocessing/RenderPass.js';
import {UnrealBloomPass} from '../lib/postprocessing/UnrealBloomPass.js';
import {OutputPass} from '../lib/postprocessing/OutputPass.js';
import {buildStage,updStage,envScene,glowTex,STAGES} from './stage.js';
import {FighterView} from './fighter3d.js';
import {G} from './sim.js';
const rnd=Math.random,clamp=(v,a,b)=>v<a?a:v>b?b:v,lerp=(a,b,t)=>a+(b-a)*t;
export const MOBILE=matchMedia('(pointer:coarse)').matches,TEST=/[?&]test/.test(location.search);
export let renderer,scene,cam,composer,bloom;
let pmrem,stage=null,stageIdx=-1,VW=1,VH=1;
const hemi=new THREE.HemisphereLight(0xffffff,0x222222,.6),key=new THREE.DirectionalLight(0xffffff,2),rim=new THREE.DirectionalLight(0xffffff,1.5),rim2=new THREE.DirectionalLight(0xffffff,0);
export function initView(canvas){
 renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance',stencil:false});
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 scene=new THREE.Scene();cam=new THREE.PerspectiveCamera(30,16/9,.1,900);
 key.castShadow=true;const S=MOBILE?1024:2048;key.shadow.mapSize.set(S,S);const c=key.shadow.camera;c.left=-5;c.right=5;c.top=5;c.bottom=-5;c.near=.5;c.far=40;key.shadow.bias=-.0003;key.shadow.normalBias=.03;
 scene.add(hemi,key,key.target,rim,rim.target,rim2,rim2.target);
 pmrem=new THREE.PMREMGenerator(renderer);
 const rt=new THREE.WebGLRenderTarget(4,4,{type:THREE.HalfFloatType,samples:MOBILE||TEST?0:4});
 composer=new EffectComposer(renderer,rt);composer.addPass(new RenderPass(scene,cam));
 bloom=new UnrealBloomPass(new THREE.Vector2(256,256),.7,.5,.8);composer.addPass(bloom);composer.addPass(new OutputPass());
 fit();addEventListener('resize',fit);}
export function fit(){VW=innerWidth;VH=innerHeight;const pr=TEST?1:Math.min(devicePixelRatio||1,MOBILE?1.35:1.75);renderer.setPixelRatio(pr);renderer.setSize(VW,VH,false);composer.setPixelRatio(pr);composer.setSize(VW,VH);
 bloom.resolution.set(VW*pr/2,VH*pr/2);cam.aspect=VW/VH;cam.updateProjectionMatrix();}
export const viewSize=()=>[VW,VH];

export function setStage(i){if(stageIdx===i&&stage)return;stageIdx=i;
 if(stage){scene.remove(stage.grp);stage.grp.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){for(const m of[].concat(o.material)){['map','normalMap','roughnessMap','emissiveMap'].forEach(k=>m[k]&&m[k].dispose());m.dispose();}}});}
 stage=buildStage(i,MOBILE);scene.add(stage.grp);scene.fog=stage.fog;scene.background=new THREE.Color(stage.bg);
 const L=stage.light;hemi.color.set(L.hemi[0]);hemi.groundColor.set(L.hemi[1]);hemi.intensity=L.hemi[2];key.color.set(L.key[0]);key.intensity=L.key[1];rim.color.set(L.rim[0]);rim.intensity=L.rim[1];
 if(L.rim2){rim2.color.set(L.rim2[0]);rim2.intensity=L.rim2[1];}else rim2.intensity=0;renderer.toneMappingExposure=L.exp;bloom.strength=L.bloom[0];bloom.radius=L.bloom[1];bloom.threshold=L.bloom[2];
 const env=pmrem.fromScene(envScene(stage),.02).texture;if(scene.environment)scene.environment.dispose();scene.environment=env;}
export const stageName=i=>STAGES[i].name,stageCount=STAGES.length;

/* ---------------- lottatori ---------------- */
export const fighters=[null,null];
export function ensureFighters(fs,ASSETS){for(let i=0;i<2;i++){const f=fs[i],v=fighters[i];
 if(v&&v.ci===f.ci&&v.bi===f.body)continue;const src=ASSETS.body(f.body);if(!src){if(v){v.dispose();fighters[i]=null;}continue;}
 if(v)v.dispose();fighters[i]=new FighterView(src,ASSETS.face(f.ci),f.ci,f.body,scene);}}
export function dropFighters(){for(let i=0;i<2;i++)if(fighters[i]){fighters[i].dispose();fighters[i]=null;}}

/* ---------------- effetti ---------------- */
const FX=[];const tmpV=new THREE.Vector3();
const star=(()=>{const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');x.translate(128,128);const g=x.createRadialGradient(0,0,0,0,0,128);g.addColorStop(0,'#fff');g.addColorStop(.2,'rgba(255,255,255,.9)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;
 for(let i=0;i<16;i++){const a=i/16*Math.PI*2,L=(i%2?60:126)*(.7+((i*37)%10)/30);x.beginPath();x.moveTo(Math.cos(a-.07)*10,Math.sin(a-.07)*10);x.lineTo(Math.cos(a)*L,Math.sin(a)*L);x.lineTo(Math.cos(a+.07)*10,Math.sin(a+.07)*10);x.fill();}x.beginPath();x.arc(0,0,26,0,7);x.fill();
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const ring=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.strokeStyle='#fff';x.lineWidth=8;x.shadowColor='#fff';x.shadowBlur=14;x.beginPath();x.arc(64,64,48,0,7);x.stroke();const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const streak=(()=>{const c=document.createElement('canvas');c.width=128;c.height=16;const x=c.getContext('2d'),g=x.createLinearGradient(0,0,128,0);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.7,'rgba(255,255,255,1)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,4,128,8);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const smoke=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');for(let i=0;i<14;i++){const g=x.createRadialGradient(40+rnd()*48,40+rnd()*48,0,64,64,50);g.addColorStop(0,'rgba(255,255,255,.18)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const pool=[];
export function fxAdd(tex,x,y,z,o){let s=pool.pop();if(!s){s=new THREE.Sprite(new THREE.SpriteMaterial({transparent:true,depthWrite:false,fog:false}));}
 const m=s.material;m.map=tex;m.color.set(o.col??0xffffff);m.blending=o.norm?THREE.NormalBlending:THREE.AdditiveBlending;m.depthTest=!!o.dt;m.rotation=o.r0??rnd()*6.28;m.opacity=1;m.needsUpdate=true;
 s.position.set(x,y,z);s.renderOrder=5;s.scale.set(o.s0??.3,(o.s0??.3)*(o.ys||1),1);scene.add(s);
 FX.push({s,vx:o.vx||0,vy:o.vy||0,vz:o.vz||0,g:o.g||0,l:o.l||20,L:o.l||20,s0:o.s0??.3,s1:o.s1??o.s0??.3,a:o.a??1,rot:o.rot||0,ys:o.ys||1,drag:o.drag||1});}
function fxUpd(){for(let i=FX.length-1;i>=0;i--){const e=FX[i];e.l--;const k=1-e.l/e.L;e.s.position.x+=e.vx;e.s.position.y+=e.vy;e.s.position.z+=e.vz;e.vy-=e.g;e.vx*=e.drag;e.vz*=e.drag;e.vy*=e.drag;
 const sc=lerp(e.s0,e.s1,Math.sqrt(k));e.s.scale.set(sc,sc*e.ys,1);e.s.material.opacity=e.a*(1-k*k);e.s.material.rotation+=e.rot;
 if(e.l<=0){scene.remove(e.s);pool.push(e.s);FX.splice(i,1);}}}
export function burst(x,y,z,kind,pw){const big=pw>=15;
 if(kind==='blk'){fxAdd(ring,x,y,z,{col:0x7fb4ff,s0:.12,s1:1,l:12});fxAdd(glowTex,x,y,z,{col:0x4f8cff,s0:.9,s1:.2,l:10});
  for(let i=0;i<10;i++){const a=rnd()*6.28,v=.03+rnd()*.06;fxAdd(streak,x,y,z,{col:0xaad0ff,s0:.25,s1:.05,ys:.15,r0:a,l:10+rnd()*6,vx:Math.cos(a)*v*.6,vy:Math.sin(a)*v,vz:(rnd()-.5)*.05});}return;}
 const col=kind==='ch'?0xff9a20:kind==='ra'?0xff3a20:0xfff0c0;
 fxAdd(star,x,y,z,{col,s0:.3,s1:big?2.2:1.4,l:big?14:11,rot:.02});
 fxAdd(glowTex,x,y,z,{col:kind==='ch'?0xff6010:0xffc070,s0:big?2.2:1.4,s1:.3,l:12});
 fxAdd(ring,x,y,z,{col:0xffffff,s0:.15,s1:big?1.8:1,l:big?14:10,a:.55});
 for(let i=0;i<(big?22:13);i++){const a=rnd()*6.28,v=.05+rnd()*.09;fxAdd(streak,x,y,z,{col:i%3?col:0xffffff,s0:.35+rnd()*.3,s1:.05,ys:.12,r0:a,l:9+rnd()*8,vx:Math.cos(a)*v*.5,vy:Math.sin(a)*v,vz:(rnd()-.5)*.08,drag:.9});}
 for(let i=0;i<(big?14:7);i++){const a=rnd()*6.28,v=.03+rnd()*.07;fxAdd(glowTex,x,y,z,{col,s0:.09,s1:.02,l:18+rnd()*14,vx:Math.cos(a)*v,vy:Math.sin(a)*v+.03,vz:(rnd()-.5)*.08,g:.003});}}
export function dust(x,z,n){for(let i=0;i<n;i++){const a=rnd()*6.28;fxAdd(smoke,x+Math.cos(a)*.2,.15,z+Math.sin(a)*.2,{col:0xb8aca0,norm:1,dt:1,s0:.4,s1:1.6+rnd(),l:34+rnd()*16,vx:Math.cos(a)*.02,vy:.006,vz:Math.sin(a)*.02,a:.6});}}
export function blood(x,y,z,n,sp){n=Math.min(n,MOBILE?40:90);for(let i=0;i<n;i++){const a=rnd()*6.28,v=(.02+rnd()*.06)*sp;
 fxAdd(glowTex,x,y,z,{col:i%3?0x7a0006:0xb0101a,norm:1,dt:1,s0:.05+rnd()*.07,s1:.03,l:30+rnd()*25,vx:Math.cos(a)*v,vy:.02+rnd()*.06*sp,vz:Math.sin(a)*v,g:.0045,a:.95});}}
export function boom(x,y,z){for(let i=0;i<5;i++)fxAdd(glowTex,x,y,z,{col:i%2?0xff5a10:0xffd080,s0:1+i,s1:6+i*2,l:30+i*6});fxAdd(ring,x,y,z,{col:0xffffff,s0:1,s1:14,l:30});
 for(let i=0;i<30;i++){const a=rnd()*6.28,v=.08+rnd()*.15;fxAdd(streak,x,y,z,{col:0xffc060,s0:1,s1:.1,ys:.12,r0:a,l:20+rnd()*10,vx:Math.cos(a)*v,vy:Math.sin(a)*v,vz:(rnd()-.5)*.1});}}
export function rageAura(v){const p=v.hipsPos(tmpV);fxAdd(glowTex,p.x+(rnd()-.5)*.5,p.y-.6+rnd()*1.6,p.z+(rnd()-.5)*.5,{col:0xff2a10,s0:.3,s1:.05,l:26,vy:.02,a:.75});}

/* ---------------- telecamera stile Tekken ---------------- */
export const camS={p:new THREE.Vector3(0,1.4,6),l:new THREE.Vector3(0,1.1,0),init:false,shake:0,z:null,punch:0};
const _tp=new THREE.Vector3(),_tl=new THREE.Vector3(),_h=new THREE.Vector3();
function camUpdate(t){let k=.12;const asp=VW/VH,tanV=Math.tan(cam.fov*Math.PI/360),tanH=tanV*asp;
 if(!G||!fighters[0]||!fighters[1]){const a=t*.003;_tp.set(Math.sin(a)*5,1.5,Math.cos(a)*5);_tl.set(0,1.1,0);}
 else{const A=fighters[0],B=fighters[1];const mx=(A.px+B.px)/2,mz=(A.pz+B.pz)/2;let dx=B.px-A.px,dz=B.pz-A.pz;const d=Math.hypot(dx,dz)||1;dx/=d;dz/=d;
  let nx=-dz,nz=dx;
  // inquadratura: altezza fissa (lottatori grandi come in Tekken), si allarga solo se si allontanano
  const vNeed=2.55/(2*tanV),hNeed=(d+1.7)/(2*tanH),air=G.f.some(f=>f.st==='airborne')?.5:0;
  const zt=Math.max(vNeed,hNeed)+air;camS.z=camS.z==null||!camS.init?zt:camS.z+(zt-camS.z)*.06;
  let dist=camS.z-camS.punch,h=1.22,ly=1.12+Math.max(A.py,B.py)*.5,rot=0,cx=mx,cz=mz;camS.punch*=.85;
  if(G.mode==='demo'){rot=Math.sin(t*.003)*.45;dist*=1.05;}
  if(G.phase==='intro'&&G.pt<72){const who=G.pt<36?A:B,q=G.pt<36?G.pt/36:(G.pt-36)/36;
   if(G.round===1&&G.mode!=='demo'){cx=who.px;cz=who.pz;dist=2.4-q*.3;h=1.55;ly=1.5;rot=(who===A?-1:1)*(1.15-q*.25);k=.2;}
   else{const q2=1-G.pt/72;rot+=q2*q2*.9;dist+=q2*q2*2;}}
  if(G.phase==='ko'&&G.pt<120&&G.why==='ko'){const L=G.f.find(f=>f.ko);if(L){const m=fighters[L.idx];cx=lerp(mx,m.px,.5);cz=lerp(mz,m.pz,.5);dist*=.85;rot+=.4*Math.min(1,G.pt/60);}}
  if((G.phase==='ko'&&G.pt>=115&&G.rw<2)||G.phase==='over'){const w=G.rw<2?fighters[G.rw]:null;if(w){cx=w.px;cz=w.pz;dist=3.2;h=1.5;ly=1.35;rot+=(G.phase==='over'?G.pt*.004:0)+(G.rw?-.6:.6);k=.06;}}
  if(G.phase==='finish'&&!G.fat){dist*=.92;}
  if(G.fat){const Af=fighters[G.fat.a],Vf=fighters[1-G.fat.a],tt=G.fat.t,sg=G.fat.a?1:-1;
   if(tt<36){cx=lerp(Af.px,Vf.px,.4);cz=lerp(Af.pz,Vf.pz,.4);rot=sg*(.75+tt*.01);dist=3.2;h=1.2;ly=1.3;k=.15;}
   else{cx=Vf.px;cz=Vf.pz;rot=sg*.35;ly=Math.min(Vf.py+1.2,15);dist=6+Math.min(Vf.py,12)*.5;h=1+Math.min(Vf.py,12)*.3;k=.1;}}
  if(G.cin){const Ac=fighters[G.cin.a],Vc=fighters[1-G.cin.a];cx=lerp(Ac.px,Vc.px,.4);cz=lerp(Ac.pz,Vc.pz,.4);const sg=G.cin.a?1:-1;rot=sg*(.8+G.cin.t*.006);dist=3.2-G.cin.t*.006;h=1.25+Math.sin(G.cin.t*.05)*.2;ly=1.3;k=.15;}
  const cr=Math.cos(rot),sr=Math.sin(rot),rx=nx*cr-nz*sr,rz=nx*sr+nz*cr;
  _tp.set(cx+rx*dist,h,cz+rz*dist);_tl.set(cx,ly,cz);}
 if(!camS.init){camS.p.copy(_tp);camS.l.copy(_tl);camS.init=true;}
 camS.p.lerp(_tp,k);camS.l.lerp(_tl,k);cam.position.copy(camS.p);
 if(camS.shake>.002){cam.position.x+=(rnd()-.5)*camS.shake;cam.position.y+=(rnd()-.5)*camS.shake;camS.shake*=.85;}
 cam.lookAt(camS.l);
 // luci dei personaggi relative alla telecamera: principale davanti di 3/4, contorni da dietro (come nei picchiaduro)
 const L=stage?stage.light:null;if(L){const cx=cam.position.x-camS.l.x,cz=cam.position.z-camS.l.z,cl=Math.hypot(cx,cz)||1,ux=cx/cl,uz=cz/cl;
  const at=(ang,dist,h,o)=>{const c=Math.cos(ang),s=Math.sin(ang);o.position.set(camS.l.x+(ux*c-uz*s)*dist,h,camS.l.z+(ux*s+uz*c)*dist);o.target.position.copy(camS.l);};
  at(L.keyA??.65,7,L.keyH??7,key);at(Math.PI+(L.rimA??.55),6,L.rimH??3.5,rim);at(Math.PI-(L.rimA??.55),6,L.rimH??3.5,rim2);}}

export function renderFrame(t){updStage(stage,t);
 if(G){const smooth=G.mode==='guest';for(let i=0;i<2;i++){const v=fighters[i];if(!v)continue;v.update(G.f[i],smooth,cam);const f=G.f[i];if(f.rage&&!f.raUsed&&rnd()<.35)rageAura(v);}}
 fxUpd();camUpdate(t);composer.render();}
export function previewCam(){camS.init=false;}
