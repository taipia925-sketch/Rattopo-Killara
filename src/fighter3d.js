/* Lottatore 3D: modello con scheletro, faccia proiettata sulla testa, animazioni guidate dallo stato logico */
import * as THREE from 'three';
import * as SkeletonUtils from '../lib/utils/SkeletonUtils.js';
import {rigInfo,buildClip,makeHead} from './rig.js';
import {LIB} from './frames.js';
import {animOf} from './sim.js';
import {HIPY,BODIES} from './data.js';

const _q1=new THREE.Quaternion(),_q2=new THREE.Quaternion(),_q3=new THREE.Quaternion(),_v1=new THREE.Vector3(),_v2=new THREE.Vector3(),_up=new THREE.Vector3(0,1,0);
export class FighterView{
 constructor(src,faceTex,ci,bi,scene){
  this.ci=ci;this.bi=bi;this.scene=scene;
  const root=SkeletonUtils.clone(src);root.position.set(0,0,0);root.rotation.set(0,0,0);root.scale.setScalar(1);root.updateMatrixWorld(true);
  this.mats=[];
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
   const fix=m=>{m=m.clone();if(m.isMeshStandardMaterial){m.envMapIntensity=.9;if(m.roughness<.35)m.roughness=.35;}this.mats.push(m);return m;};
   o.material=Array.isArray(o.material)?o.material.map(fix):fix(o.material);}});
  const rig0=rigInfo(root);this.sc=HIPY/rig0.hipsW;
  this.holder=new THREE.Group();this.holder.add(root);root.scale.setScalar(this.sc);scene.add(this.holder);
  this.root=root;this.rig=rigInfo(root);this.mixer=new THREE.AnimationMixer(root);this.actions={};
  this.cur=null;this.prev=null;this.fadeT=1;this.fadeD=1;this.flash=0;this.fcol=new THREE.Color();this.px=0;this.pz=0;this.py=0;this.init=false;
  this.head=this.rig.bones.Head;this.hips=this.rig.bones.Hips;
  // testa con la foto dell'amico al posto di quella del modello: l'ancora (figlia del collo) copia a ogni fotogramma l'osso della testa,
  // che invece viene ridotto a zero insieme a capelli, cappucci ed elmi
  // orientamento calcolato sulla posa di guardia (alcuni modelli a riposo guardano all'indietro)
  if(faceTex&&faceTex.image){const ia=this.action('idle');if(ia){ia.time=0;ia.setEffectiveWeight(1);this.mixer.update(0);}root.updateMatrixWorld(true);const neck=this.head.parent;this.anchor=new THREE.Object3D();neck.add(this.anchor);this.anchor.position.copy(this.head.position);this.anchor.quaternion.copy(this.head.quaternion);this.anchor.updateMatrixWorld(true);
   const hd=makeHead(faceTex),qa=this.anchor.getWorldQuaternion(new THREE.Quaternion()),qr=root.getWorldQuaternion(new THREE.Quaternion()),ws=this.anchor.getWorldScale(new THREE.Vector3()).x,HM=.46;
   const inv=qa.clone().invert();hd.g.quaternion.copy(inv).multiply(qr);hd.g.scale.setScalar(HM/hd.asp/ws);
   // il mento della foto poco sotto l'osso della testa, un filo in avanti
   const off=new THREE.Vector3(0,HM*(hd.bot-.6)+(BODIES[bi]&&BODIES[bi].headUp||0),.035).applyQuaternion(qr).applyQuaternion(inv).multiplyScalar(1/ws);hd.g.position.copy(off);
   this.anchor.add(hd.g);this.hg=hd.g;this.hq0=hd.g.quaternion.clone();this.faceMat=hd.mat;this.mats.push(...hd.mats);
   for(const h of this.rig.all.Head||[])h.scale.setScalar(1e-4);}}
 action(k){let a=this.actions[k];if(a)return a;const cl=buildClip(LIB.lib,k,this.rig);if(!cl)return null;a=this.mixer.clipAction(cl);a.play();a.paused=true;a.setEffectiveWeight(0);a.clampWhenFinished=true;this.actions[k]=a;return a;}
 update(f,smooth,cam){
  if(!this.init||!smooth){this.px=f.x;this.pz=f.z;this.py=f.y;this.init=true;}else{this.px+=(f.x-this.px)*.5;this.pz+=(f.z-this.pz)*.5;this.py+=(f.y-this.py)*.5;}
  this.holder.position.set(this.px,this.py,this.pz);this.holder.rotation.y=f.ang;this.holder.visible=!f.gone;
  const an=animOf(f),a=this.action(an.k)||this.action('idle');
  // dissolvenza a tempo reale; senza clip precedente il peso è pieno (mai mescolare con la posa di riposo)
  const now=performance.now();
  if(a!==this.cur){if(this.prev&&this.prev!==a)this.prev.setEffectiveWeight(0);this.prev=this.cur;this.cur=a;this.fadeT=now;this.fadeD=Math.max(16,(an.fade||.1)*1000);}
  const w=this.prev?Math.min(1,(now-this.fadeT)/this.fadeD):1;
  a.time=Math.max(0,Math.min(an.t,a.getClip().duration-1e-3));a.setEffectiveWeight(w);
  if(this.prev){if(w>=1){this.prev.setEffectiveWeight(0);this.prev=null;}else this.prev.setEffectiveWeight(1-w);}
  this.mixer.update(0);if(this.anchor){this.anchor.position.copy(this.head.position);this.anchor.quaternion.copy(this.head.quaternion);
   // la foto è piatta: la testa si gira per buona parte verso la telecamera, così la faccia si vede anche di profilo
   if(cam&&this.hg){this.holder.updateMatrixWorld(true);const aw=this.anchor.getWorldQuaternion(_q1),w0=_q2.copy(aw).multiply(this.hq0),fw=_v1.set(0,0,1).applyQuaternion(w0),hp=this.anchor.getWorldPosition(_v2);
    let d=Math.atan2(cam.position.x-hp.x,cam.position.z-hp.z)-Math.atan2(fw.x,fw.z);d=Math.atan2(Math.sin(d),Math.cos(d));
    _q3.setFromAxisAngle(_up,Math.max(-1.2,Math.min(1.2,d*.7))).multiply(w0);this.hg.quaternion.copy(aw.invert()).multiply(_q3);}}
  const dt=Math.min(.1,(now-(this.lastNow||now))/1000);this.lastNow=now;this.flash*=Math.pow(.75,dt*60);const fl=this.flash,rg=f.rage&&!f.raUsed?(.18+.12*Math.sin(performance.now()*.012)):0;
  for(const m of this.mats){if(!m.emissive)continue;m.emissive.copy(this.fcol).multiplyScalar(fl*.2);m.emissive.r+=rg;if(m===this.faceMat)m.emissive.multiplyScalar(.6).addScalar(1);}}
 headPos(out){return this.head.getWorldPosition(out);}
 hipsPos(out){return this.hips.getWorldPosition(out);}
 dispose(){this.scene.remove(this.holder);this.mixer.stopAllAction();this.mixer.uncacheRoot(this.root);this.mats.forEach(m=>m.dispose());}
}
