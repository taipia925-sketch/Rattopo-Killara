/* Input: tastiera (2 giocatori), controller, levetta e tasti touch */
import {KEYS} from './data.js';
import {mk} from './sim.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
export const keys={},latch={},tin=mk(),tinL=mk();
const KB1={l:'KeyA',r:'KeyD',u:'KeyW',d:'KeyS','1':'KeyF','2':'KeyG','3':'KeyV','4':'KeyB',g:'KeyH',t:'KeyE',x:'KeyR'};
const KB2={l:'ArrowLeft',r:'ArrowRight',u:'ArrowUp',d:'ArrowDown','1':'KeyK','2':'KeyL','3':'Comma','4':'Period',g:'KeyJ',t:'KeyM',x:'KeyO'};
const KB3={'1':'Numpad4','2':'Numpad5','3':'Numpad1','4':'Numpad2',t:'Numpad3',x:'Numpad6',g:'Numpad0'};
const kbIn=m=>{const o=mk();for(const k in m)o[k]=(keys[m[k]]||latch[m[k]])?1:0;return o;};
export function clearLatch(){for(const k in latch)delete latch[k];for(const k of KEYS)tinL[k]=0;}
const orIn=(...a)=>{const o=mk();for(const i of a)for(const k of KEYS)o[k]=o[k]||(i[k]?1:0);return o;};
export const enc=i=>KEYS.reduce((a,k,j)=>a|(i[k]?1<<j:0),0);
export const dec=n=>{const o=mk();KEYS.forEach((k,j)=>o[k]=(n>>j)&1);return o;};
export function pads(){try{return navigator.getGamepads?[...navigator.getGamepads()].filter(g=>g&&g.connected):[];}catch(e){return[];}}
function padIn(gp){const o=mk();if(!gp)return o;const b=i=>!!(gp.buttons[i]&&gp.buttons[i].pressed),ax=gp.axes;
 o.l=b(14)||ax[0]<-.45;o.r=b(15)||ax[0]>.45;o.u=b(12)||ax[1]<-.55;o.d=b(13)||ax[1]>.55;
 o['1']=b(2);o['2']=b(3);o['3']=b(0);o['4']=b(1);o.t=b(5);o.g=b(4)||b(6);o.x=b(7);return o;}
export function humanMe(){const p=pads();return orIn(kbIn(KB1),kbIn(KB2),kbIn(KB3),tin,tinL,padIn(p[0]));}
export function humanLocal(i){const p=pads();return i===0?orIn(kbIn(KB1),tin,tinL,padIn(p[0])):orIn(kbIn(KB2),kbIn(KB3),padIn(p[1]));}
export function initTouch(){const joy=$('#joy'),knob=$('#knob');let jid=null;
 const setJ=e=>{const r=joy.getBoundingClientRect(),R=r.width/2;let dx=(e.clientX-r.left-R)/R,dy=(e.clientY-r.top-R)/R;const L=Math.hypot(dx,dy);if(L>1){dx/=L;dy/=L;}
  knob.style.transform=`translate(${dx*R*.55}px,${dy*R*.55}px)`;tin.l=dx<-.38?1:0;tin.r=dx>.38?1:0;tin.u=dy<-.45?1:0;tin.d=dy>.45?1:0;for(const k of'lrud')if(tin[k])tinL[k]=1;};
 const relJ=()=>{jid=null;knob.style.transform='';tin.l=tin.r=tin.u=tin.d=0;};
 joy.addEventListener('pointerdown',e=>{e.preventDefault();jid=e.pointerId;try{joy.setPointerCapture(e.pointerId);}catch(_){}setJ(e);});
 joy.addEventListener('pointermove',e=>{if(e.pointerId===jid)setJ(e);});
 ['pointerup','pointercancel','lostpointercapture'].forEach(k=>joy.addEventListener(k,e=>{if(e.pointerId===jid)relJ();}));
 const st={};
 const rel=id=>{const k=st[id];if(k){tin[k]=0;const e=$(`.tb[data-k="${k}"]`);e&&e.classList.remove('on');delete st[id];}};
 const set=(id,x,y)=>{const el=document.elementFromPoint(x,y),b=el&&el.closest&&el.closest('.tb'),k=b?b.dataset.k:null;if(st[id]===k)return;rel(id);if(k){st[id]=k;tin[k]=1;tinL[k]=1;b.classList.add('on');}};
 $$('[data-pad]').forEach(p=>{
  p.addEventListener('pointerdown',e=>{e.preventDefault();try{p.setPointerCapture(e.pointerId);}catch(_){}set(e.pointerId,e.clientX,e.clientY);});
  p.addEventListener('pointermove',e=>{if(e.pointerId in st||e.buttons)set(e.pointerId,e.clientX,e.clientY);});
  const up=e=>rel(e.pointerId);p.addEventListener('pointerup',up);p.addEventListener('pointercancel',up);p.addEventListener('lostpointercapture',up);
  p.addEventListener('contextmenu',e=>e.preventDefault());});}
addEventListener('keyup',e=>keys[e.code]=false);
addEventListener('blur',()=>{for(const k in keys)keys[k]=false;});
