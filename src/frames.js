/* Campionamento delle animazioni: posizioni delle ossa a 60 fotogrammi/s su uno scheletro di riferimento.
   Servono alla logica (hitbox sugli arti, capsule del corpo) e a ricavare dalle clip i tempi dei colpi. */
import * as THREE from 'three';
import {rigInfo,buildClip} from './rig.js';
import {JOINTS,MV,HIPY} from './data.js';
export const HB={};      // chiave clip → {n,dur,d:Float32Array(n*J*3)}
export const LIB={lib:null};
const J=JOINTS.length,JI={};JOINTS.forEach((n,i)=>JI[n]=i);
export const clipDur=k=>{const c=LIB.lib&&LIB.lib.clips[k];return c?c.d:1;};

export function sampleClips(refRoot,keys){
 const root=refRoot;root.position.set(0,0,0);root.rotation.set(0,0,0);root.scale.setScalar(1);
 const rig=rigInfo(root);root.scale.setScalar(HIPY/rig.hipsW);root.updateMatrixWorld(true);
 const mixer=new THREE.AnimationMixer(root),v=new THREE.Vector3(),bones=JOINTS.map(n=>rig.bones[n]);
 for(const k of keys){if(HB[k]||!LIB.lib.clips[k])continue;const clip=buildClip(LIB.lib,k,rig);
  mixer.stopAllAction();const a=mixer.clipAction(clip);a.play();
  const n=Math.ceil(clip.duration*60)+1,d=new Float32Array(n*J*3);
  for(let i=0;i<n;i++){mixer.setTime(Math.min(clip.duration,i/60));root.updateMatrixWorld(true);
   for(let j=0;j<J;j++){bones[j].getWorldPosition(v);d.set([v.x,v.y,v.z],(i*J+j)*3);}}
  HB[k]={n,dur:clip.duration,d,adv:clip.adv*rig.legW*(HIPY/rig.hipsW)};}
 mixer.stopAllAction();mixer.uncacheRoot(root);}

// posizione di un osso (in coordinate del lottatore: avanti = +Z) al tempo t della clip
export function jointLocal(k,t,name,out){const h=HB[k];if(!h){out.set(0,0,0);return out;}
 const f=Math.max(0,Math.min(h.n-1,t*60)),i=f|0,i2=Math.min(h.n-1,i+1),a=f-i,j=JI[name],o1=(i*J+j)*3,o2=(i2*J+j)*3;
 out.set(h.d[o1]+(h.d[o2]-h.d[o1])*a,h.d[o1+1]+(h.d[o2+1]-h.d[o1+1])*a,h.d[o1+2]+(h.d[o2+2]-h.d[o1+2])*a);return out;}
// in coordinate del mondo per il lottatore f
export function jointWorld(f,k,t,name,out){jointLocal(k,t,name,out);const c=Math.cos(f.ang),s=Math.sin(f.ang),x=out.x,z=out.z;
 out.set(f.x+x*c+z*s,f.y+out.y,f.z-x*s+z*c);return out;}

/* analisi delle clip d'attacco: istante di massima estensione dell'arto → fase attiva */
const END={la:['LeftForeArm','LeftHand'],ra:['RightForeArm','RightHand'],ll:['LeftLeg','LeftToeBase'],rl:['RightLeg','RightToeBase']};
export const limbJoints=l=>END[l];
export function analyzeMoves(){const a=new THREE.Vector3(),b=new THREE.Vector3(),hp=new THREE.Vector3();
 for(const id in MV){const m=MV[id],h=HB[m.clip];if(!h){m.T=null;continue;}
  const [j0,j1]=END[m.limb],n=h.n,ext=new Float32Array(n);let best=0,bi=0;
  for(let i=0;i<n;i++){const t=i/60;jointLocal(m.clip,t,j1,b);jointLocal(m.clip,t,'Hips',hp);
   ext[i]=b.z;if(i<n*.85&&ext[i]>best){best=ext[i];bi=i;}}
  // finestra attiva stretta attorno al picco di estensione (il colpo dell'animazione)
  const i0=Math.max(2,bi-1),i1=Math.min(n-1,Math.max(bi+2,i0+1)),ta0=i0/60,ta1=i1/60,k=ta0*60/m.su;
  m.ac=Math.max(2,Math.min(4,Math.round((ta1-ta0)*60/Math.max(.5,k))));
  m.T={ta0,ta1,dur:h.dur,tend:Math.min(h.dur,ta1+Math.max(.25,(h.dur-ta1)*.8))};
  jointLocal(m.clip,(ta0+ta1)/2,j1,b);m.reach=Math.max(.5,b.z+.1)+(m.adv||0);m.hgt=b.y;}}
// tempo della clip per il fotogramma mf della mossa (avvio → attivo → recupero, deformazione lineare a tratti)
export function moveTime(m,mf){const T=m.T;if(!T)return 0;
 if(mf<m.su)return T.ta0*(mf/m.su);
 if(mf<m.su+m.ac)return T.ta0+(T.ta1-T.ta0)*((mf-m.su)/m.ac);
 return Math.min(T.tend,T.ta1+(T.tend-T.ta1)*Math.min(1,(mf-m.su-m.ac)/m.rc));}

// analisi delle clip di caduta: istante in cui il corpo tocca terra
export const FALL={};
export function analyzeFall(k){const h=HB[k];if(!h)return;const v=new THREE.Vector3();let land=h.dur*.5,up=0;
 for(let i=0;i<h.n;i++){jointLocal(k,i/60,'Hips',v);if(i<6)up=Math.max(up,v.y);if(i>6&&v.y<.32){land=i/60;break;}}
 FALL[k]={land,dur:h.dur};}
