/* Logica di gioco: macchina a stati dei lottatori, colpi, round. Nessuna grafica qui.
   Ogni stato ha un'animazione (animOf) e le hitbox vengono dalle stesse animazioni campionate (frames.js). */
import {MV,HPMAX,WINS,ROUNDT,ARENA,BTN,BODIES,ST_CLIP,CHARS} from './data.js';
import {HB,clipDur,jointWorld,limbJoints,moveTime,FALL} from './frames.js';
import * as THREE from 'three';

export let G=null;
export const S={IDLE:'idle',WALK:'walk',CROUCH:'crouch',SIDESTEP:'sidestep',DASH:'dash',BACKDASH:'backdash',JUMP:'jump',
 ATTACK:'attack',BLOCKSTUN:'blockstun',HITSTUN:'hitstun',AIRBORNE:'airborne',KNOCKDOWN:'knockdown',GETUP:'getup',
 THROW:'throw',THROWN:'thrown',RAGEART:'rageart',RAGEHIT:'ragehit',WIN:'win',DIZZY:'dizzy',FATALITY:'fatality',FATAL:'fatal'};
/* MACCHINA A STATI: si cambia stato solo con setState(f,stato,causa)
   'input' scelta del giocatore (solo se lo stato dà il controllo) · 'end' lo stato finisce da solo
   'cancel' combo a catena · 'hit' colpito/parato/afferrato (vietato se invulnerabile) · 'sys' regole del round */
export const FSM={
 idle:{ctl:1,turn:1,guard:1},walk:{ctl:1,turn:1,guard:1},crouch:{ctl:1,turn:1,guard:1,low:1},
 sidestep:{ctl:f=>f.sf>=3,turn:1},dash:{ctl:1,turn:1},backdash:{ctl:f=>f.sf>=12,turn:1},jump:{ctl:f=>f.y>.12},
 attack:{ctl:0},blockstun:{ctl:0,turn:1,guard:1},hitstun:{ctl:0},airborne:{ctl:0},knockdown:{ctl:0,low:1},getup:{ctl:0,turn:1,inv:1},
 throw:{ctl:0,inv:1},thrown:{ctl:0,inv:1},rageart:{ctl:0,inv:1},ragehit:{ctl:0,inv:1},win:{ctl:0,inv:1},
 dizzy:{ctl:0},fatality:{ctl:0,inv:1},fatal:{ctl:0,inv:1}};
export const canAct=f=>{const c=FSM[f.st].ctl;return typeof c==='function'?c(f):!!c;};
export function setState(f,to,cause){const cur=FSM[f.st];
 if(cause==='input'&&!canAct(f))return false;if(cause==='hit'&&cur.inv)return false;if(cause==='cancel'&&f.st!==S.ATTACK)return false;
 if(f.st!==to||cause!=='input')f.sf=0;f.st=to;if(to!==S.ATTACK)f.mv=null;if(to!==S.BLOCKSTUN&&!FSM[to].guard)f.grd=0;return true;}

const mk=()=>({l:0,r:0,u:0,d:0,1:0,2:0,3:0,4:0,g:0,t:0,x:0});export {mk};
const clamp=(v,a,b)=>v<a?a:v>b?b:v,lerp=(a,b,t)=>a+(b-a)*t,rnd=Math.random;
const wrapA=a=>{while(a>Math.PI)a-=2*Math.PI;while(a<-Math.PI)a+=2*Math.PI;return a;};
export const angTo=(f,o)=>Math.atan2(o.x-f.x,o.z-f.z);
const turnTo=(a,b,k)=>a+wrapA(b-a)*k;

export function newF(ci,idx,body){return{ci,idx,body:body==null?CHARS[ci].body:body,x:idx?1.35:-1.35,z:0,y:0,vx:0,vz:0,vy:0,ang:idx?-Math.PI/2:Math.PI/2,hp:HPMAX,st:'idle',sf:0,mv:null,mf:0,
 hitd:false,chq:null,aid:0,stun:0,stun0:1,hl:'h',grd:0,wins:0,combo:0,cdmg:0,jug:0,rage:false,raUsed:false,ko:false,gone:0,ssd:0,wv:0,jd:0,jt:40,
 buf:{1:0,2:0,3:0,4:0,t:0,x:0},prev:mk(),lf:-99,lb:-99,dT:-99,dAtk:false,r0:1.5,thk:'1',dummy:false,isBlk:false,airT:0,winK:0};}
export function ev(k,o){const e=Object.assign({id:++G.eid,k},o||{});G.ev.push(e);if(G.ev.length>40)G.ev.shift();}
export function resetRound(){G.f.forEach((f,i)=>{Object.assign(f,{x:i?1.35:-1.35,z:0,y:0,vx:0,vz:0,vy:0,ang:i?-Math.PI/2:Math.PI/2,hp:HPMAX,st:'idle',sf:0,mv:null,mf:0,hitd:false,chq:null,stun:0,grd:0,
 combo:0,cdmg:0,jug:0,rage:false,raUsed:false,ko:false,gone:0,buf:{1:0,2:0,3:0,4:0,t:0,x:0},prev:mk(),ai:null,winK:(rnd()*2)|0});});
 G.timer=G.mode==='train'?99:ROUNDT;G.tick=0;G.phase='intro';G.pt=0;G.rw=-1;G.cin=null;G.fat=null;G.slow=0;G.freeze=0;}
export function createGame(mode,cs,lvl,stage,bs,nStages){bs=bs||[];
 G={mode,lvl:lvl==null?1:lvl,f:[newF(cs[0],0,bs[0]),newF(cs[1],1,bs[1])],phase:'intro',pt:0,timer:mode==='train'?99:ROUNDT,tick:0,round:1,rw:-1,why:'',n:0,freeze:0,
  hold:mode==='demo'?0:100,slow:0,slowc:0,paused:false,sendT:0,ev:[],eid:0,cin:null,fat:null,stage:stage==null?(rnd()*nStages|0):stage};
 if(mode==='train')G.f[1].dummy=true;G.f.forEach(f=>f.winK=(rnd()*2)|0);return G;}
export function setGame(g){G=g;}

function axisUnit(){const[a,b]=G.f;let dx=b.x-a.x,dz=b.z-a.z,d=Math.hypot(dx,dz)||1;return[dx/d,dz/d];}
function airPhys(f,g){f.y+=f.vy;f.vy-=g;f.x+=f.vx;f.z+=f.vz;}
function slide(f,k){f.x+=f.vx;f.z+=f.vz;f.vx*=k;f.vz*=k;}
function startMove(f,o,id,cause){const m=MV[id];if(!m||!m.T)return false;if(!setState(f,S.ATTACK,cause||'input'))return false;
 f.mv=id;f.mf=0;f.hitd=false;f.chq=null;f.aid++;f.isBlk=false;f.ang=angTo(f,o);if(!m.air){f.vx=f.vz=0;}for(const k of BTN)f.buf[k]=0;
 if(m.ra){f.rage=false;f.raUsed=true;ev('ra',{a:f.idx});}ev('sw',{p:m.snd==='P'||m.snd==='K'?2:1});return true;}
function cmd(f,I){const B=f.buf,pr=k=>B[k]>0;
 if(f.rage&&!f.raUsed&&(pr('x')||(I['1']&&I['2']&&I['3']&&I['4'])))return 'ra';
 if(pr('t')||(pr('1')&&pr('3')))return 'thr';if(pr('2')&&pr('4'))return 'thr2';
 const k=['1','2','3','4'].find(k=>B[k]>0&&B[k]<6);if(!k)return null;
 const D=f.bd||{};I={d:I.d||D.d,f:I.f||D.f,b:I.b||D.b};
 if(I.d){if(I.f&&k==='1')return 'df1';if(k==='1')return 'd1';if(k==='2')return 'uf';if(k==='3')return 'd3';return 'd4';}
 if(I.f){if(k==='2')return 'f2';if(k==='4')return 'f4';}if(I.b&&k==='4')return 'b4';return k;}
function startSS(f,o,dir){if(!setState(f,S.SIDESTEP,'input'))return;f.ssd=dir;f.r0=Math.max(.9,Math.hypot(o.x-f.x,o.z-f.z));}

function control(f,o,c){const{I,E,dx,dz,dist}=c,n=G.n;
 if(E('f')&&!I.d){if(n-f.lf<12&&f.st!==S.CROUCH){f.lf=-99;setState(f,S.DASH,'input');return;}f.lf=n;}
 if(E('b')&&!I.d){if(n-f.lb<12&&f.st!==S.CROUCH){f.lb=-99;setState(f,S.BACKDASH,'input');return;}f.lb=n;}
 if(E('d')){f.dT=n;f.dAtk=false;}
 const mv=cmd(f,I);if(mv){if(f.st===S.CROUCH)f.dAtk=true;startMove(f,o,mv);return;}
 if(I.d){if(f.st!==S.CROUCH)setState(f,S.CROUCH,'input');f.grd=(I.b||I.g)?2:0;f.isBlk=!!(I.b||I.g);return;}
 if(f.st===S.CROUCH){if(n-f.dT<=8&&!f.dAtk){startSS(f,o,1);return;}setState(f,S.IDLE,'input');}
 if(E('u')){setState(f,S.JUMP,'input');f.jd=I.f?1:I.b?-1:0;return;}
 let sp=0;if(I.f&&!I.b&&dist>.7)sp=.034;else if(I.b&&!I.f)sp=-.027;
 if(sp){f.x+=dx*sp;f.z+=dz*sp;f.wv=sp>0?1:-1;f.walkT=(f.walkT||0)+1;if(f.st!==S.WALK)setState(f,S.WALK,'input');}
 else if(f.st!==S.IDLE)setState(f,S.IDLE,'input');
 // indietro (o GUARDIA) = parata alta/media · giù+indietro = parata bassa
 f.grd=(I.b||I.g)?1:0;f.isBlk=!!(I.b||I.g);}

const UPD={
 idle:control,walk:control,crouch:control,
 sidestep(f,o){if(f.sf>=18){setState(f,S.IDLE,'end');return;}
  const[ax,az]=axisUnit(),sp=.085*(1-f.sf/18);f.x+=-az*f.ssd*sp;f.z+=ax*f.ssd*sp;
  const rx=f.x-o.x,rz=f.z-o.z,rr=Math.hypot(rx,rz)||1;f.x=o.x+rx/rr*f.r0;f.z=o.z+rz/rr*f.r0;
  const kk=['1','2','3','4'].find(k=>f.buf[k]>0&&f.buf[k]<6);if(kk)startMove(f,o,'ssk');},
 dash(f,o,c){if(f.sf>=16){setState(f,S.IDLE,'end');return;}if(c.dist>.7){const sp=.1*(1-f.sf/16);f.x+=c.dx*sp;f.z+=c.dz*sp;}const mv=cmd(f,c.I);if(mv)startMove(f,o,mv);},
 backdash(f,o,c){if(f.sf>=22){setState(f,S.IDLE,'end');return;}const sp=.12*Math.pow(1-f.sf/22,1.5);f.x-=c.dx*sp;f.z-=c.dz*sp;const mv=cmd(f,c.I);if(mv)startMove(f,o,mv);},
 jump(f,o,c){const{I,dx,dz}=c;
  if(f.y<=0&&f.vy===0){if(f.sf<6){if(!I.u){setState(f,S.IDLE,'end');startSS(f,o,-1);}}else{f.vy=.118;f.y=.001;const s=f.jd*.045;f.vx=dx*s;f.vz=dz*s;}return;}
  airPhys(f,.0062);if(f.y<=0){f.y=0;f.vy=0;f.vx=f.vz=0;setState(f,S.IDLE,'end');ev('land',{x:f.x,z:f.z,v:f.idx,soft:1});return;}
  const kk=['1','2','3','4'].find(k=>f.buf[k]>0);if(kk)startMove(f,o,'jk');},
 attack(f,o,c){const m=MV[f.mv],{E}=c;f.mf++;f.grd=0;
  if(m.home&&f.mf<=m.su)f.ang=turnTo(f.ang,angTo(f,o),.4);
  if(m.adv&&f.mf<=m.su&&c.dist>.55){const s=m.adv/m.su;f.x+=Math.sin(f.ang)*s;f.z+=Math.cos(f.ang)*s;}
  if(m.air){airPhys(f,.0062);if(f.y<=0){f.y=0;f.vy=0;f.vx=f.vz=0;setState(f,S.IDLE,'end');}return;}
  if(m.ch){if(f.mf>=3)for(const k of['1','2','3','4'])if(E(k))f.chq=k;if(f.chq&&m.ch[f.chq]&&f.mf>=m.su+m.ac){startMove(f,o,m.ch[f.chq],'cancel');return;}}
  if(f.mf>=m.su+m.ac+m.rc){if(m.cr&&c.I.d){setState(f,S.CROUCH,'end');f.dAtk=true;}else setState(f,S.IDLE,'end');}},
 blockstun(f){f.stun--;slide(f,.82);f.grd=f.grd||1;if(f.stun<=0)setState(f,S.IDLE,'end');},
 hitstun(f){f.stun--;slide(f,.82);if(f.stun<=0)setState(f,S.IDLE,'end');},
 airborne(f){airPhys(f,.0062);f.vx*=.995;f.vz*=.995;f.airT++;
  if(f.y<=0&&f.vy<0){f.y=0;f.vy=0;setState(f,S.KNOCKDOWN,'end');f.vx*=.3;f.vz*=.3;ev('land',{x:f.x,z:f.z,v:f.idx});}},
 knockdown(f,o,c){slide(f,.8);if(!f.ko&&(f.sf>=60||(f.sf>=26&&c.any))){setState(f,S.GETUP,'end');f.combo=0;f.cdmg=0;f.jug=0;}},
 getup(f){if(f.sf>=40)setState(f,S.IDLE,'end');},
 throw(f,o){if(f.sf===44){const dm=Math.round(35*(f.rage?1.1:1));o.hp=Math.max(0,o.hp-dm);o.combo=1;o.cdmg=dm;ev('hit',{v:o.idx,x:o.x,y:.3,z:o.z,p:20,thr:1,cn:1,cd:dm,big:1});rageChk(o);G.freeze=6;}
  if(f.sf>=64)setState(f,S.IDLE,'end');},
 thrown(f,o,c){const{E,dx,dz}=c;
  if(o.st!==S.THROW&&f.sf<46){f.y=0;setState(f,S.IDLE,'end');return;}
  if(f.sf<=15&&(E(f.thk)||(f.sf<=2&&f.buf[f.thk]>0))){f.y=0;setState(f,S.BLOCKSTUN,'end');f.stun=16;setState(o,S.BLOCKSTUN,'end');o.stun=16;
   f.vx=dx*-.06;f.vz=dz*-.06;o.vx=dx*.06;o.vz=dz*.06;ev('brk',{x:(f.x+o.x)/2,z:(f.z+o.z)/2});return;}
  const fx=Math.sin(o.ang),fz=Math.cos(o.ang);f.ang=o.ang+Math.PI;f.y=0;
  const r=f.sf<16?.7:lerp(.7,1.0,Math.min(1,(f.sf-16)/30));f.x=o.x+fx*r;f.z=o.z+fz*r;
  if(f.sf>=50){setState(f,S.KNOCKDOWN,'end');f.sf=20;}},
 rageart(){},ragehit(){},win(){},fatality(){},fatal(){},
 dizzy(f){f.grd=0;slide(f,.8);},
};
export function updF(f,o,inp){
 const fk=f.idx?'l':'r',bk=f.idx?'r':'l';
 const I={f:inp[fk]?1:0,b:inp[bk]?1:0,u:inp.u?1:0,d:inp.d?1:0,'1':inp['1']?1:0,'2':inp['2']?1:0,'3':inp['3']?1:0,'4':inp['4']?1:0,g:inp.g?1:0,t:inp.t?1:0,x:inp.x?1:0};
 const Pv=f.prev,E=k=>I[k]&&!Pv[k];
 for(const k of BTN){if(E(k)){f.buf[k]=6;f.bd={d:I.d,f:I.f,b:I.b};}else if(f.buf[k]>0)f.buf[k]--;}
 f.prev=I;f.sf++;f.wv=0;
 let dx=o.x-f.x,dz=o.z-f.z;const dist=Math.hypot(dx,dz)||1e-4;dx/=dist;dz/=dist;
 const any=I.f||I.b||I.u||I.d||I['1']||I['2']||I['3']||I['4'];
 UPD[f.st](f,o,{I,E,dx,dz,dist,any});
 if(FSM[f.st].turn)f.ang=turnTo(f.ang,angTo(f,o),.3);
 if((f.st===S.IDLE||f.st===S.WALK||f.st===S.CROUCH)&&f.sf>2&&f.combo){f.combo=0;f.cdmg=0;f.jug=0;}
 const r=Math.hypot(f.x,f.z);if(r>ARENA){f.x*=ARENA/r;f.z*=ARENA/r;}}
function rageChk(o){if(!o.rage&&!o.raUsed&&o.hp>0&&o.hp<=HPMAX*.3){o.rage=true;ev('rage',{v:o.idx});}}

/* ---------------- ANIMAZIONE DI OGNI STATO (usata sia per disegnare sia per le hitbox) ---------------- */
const pickHit=(f)=>{const arr=f.hl==='l'?ST_CLIP.hitL:(f.hl==='m'||f.hl==='s')?ST_CLIP.hitM:ST_CLIP.hitH;return arr[f.stun0<19?0:f.stun0<25?1:2];};
export function animOf(f){const st=f.st,sf=f.sf;
 if(G&&G.phase==='intro'&&G.pt<70&&st==='idle')return{k:ST_CLIP.intro[f.winK%2],t:(G.pt+(G.hold>0?0:0))/60*1.1,fade:.2};
 switch(st){
  case 'idle':return{k:'idle',t:((G?G.n:0)+f.idx*37)/60%clipDur('idle'),loop:1,fade:.18};
  case 'walk':{const k=f.wv>=0?ST_CLIP.walk:ST_CLIP.walkBack,d=clipDur(k),ph=((f.walkT||0)/60*1.1)%d;return{k,t:f.wv>=0?ph:d-ph,loop:1,fade:.15};}
  case 'crouch':return{k:'crouch',t:Math.min(sf/60*1.8,clipDur('crouch')*.95),fade:.12};
  case 'sidestep':{const k=f.ssd>0?ST_CLIP.ssR:ST_CLIP.ssL;return{k,t:sf/18*clipDur(k)*.85,fade:.08};}
  case 'dash':return{k:ST_CLIP.dash,t:sf/16*clipDur(ST_CLIP.dash),fade:.08};
  case 'backdash':return{k:ST_CLIP.backdash,t:sf/22*clipDur(ST_CLIP.backdash)*.9,fade:.08};
  case 'jump':return{k:'jump',t:f.y<=0&&f.vy===0?sf/60:.25+Math.min(.9,(f.sf-6)/40)*clipDur('jump')*.6,fade:.1};
  case 'attack':{const m=MV[f.mv];return{k:m.clip,t:moveTime(m,f.mf),fade:.05};}
  case 'blockstun':return f.grd===2?{k:'crouch',t:clipDur('crouch')*.95,fade:.05}:{k:'block',t:Math.min(.12+sf/60,clipDur('block')*.6),fade:.04};
  case 'hitstun':{const k=pickHit(f),d=clipDur(k);return{k,t:Math.min(d*.92,sf/f.stun0*d*.8),fade:.04};}
  case 'airborne':{const F=FALL[ST_CLIP.air]||{land:.6};return{k:ST_CLIP.air,t:Math.min(F.land*.92,.08+f.airT/60*.75),fade:.05};}
  case 'knockdown':{const F=FALL[ST_CLIP.down]||{land:.6,dur:2};return{k:ST_CLIP.down,t:Math.min(F.dur,F.land+sf/60),fade:.1};}
  case 'getup':return{k:'getup',t:sf/40*clipDur('getup'),fade:.1};
  case 'throw':return{k:ST_CLIP.throw,t:sf/64*clipDur(ST_CLIP.throw),fade:.06};
  case 'thrown':return{k:ST_CLIP.thrown,t:sf/50*clipDur(ST_CLIP.thrown)*.85,fade:.06};
  case 'rageart':return sf<88?{k:'combo',t:sf/88*clipDur('combo'),fade:.05}:{k:'uppercut',t:clipDur('uppercut')*.35+(sf-88)/60,fade:.05};
  case 'ragehit':{const k=(sf/10|0)%2?'hitHM':'hitMM';return{k,t:(sf%10)/60*1.5,fade:.03};}
  case 'win':{const k=ST_CLIP.win[f.winK%2];return{k,t:Math.min(sf/60,clipDur(k)-.01),fade:.25};}
  case 'dizzy':return{k:'dizzy',t:(sf/60)%clipDur('dizzy'),loop:1,fade:.3};
  case 'fatality':return{k:'uppercut',t:Math.min(clipDur('uppercut'),sf/60*(sf<30?.7:1)),fade:.1};
  case 'fatal':return{k:ST_CLIP.fatal,t:Math.min(.5,sf/60),fade:.05};
 }return{k:'idle',t:0,loop:1};}

/* ---------------- COLPI: segmento dell'arto (dalla clip) contro capsule del corpo avversario ---------------- */
const V=()=>new THREE.Vector3();
const A0=V(),A1=V(),HP=['Head','Neck','Spine2','Hips','LeftArm','LeftForeArm','LeftHand','RightArm','RightForeArm','RightHand','LeftUpLeg','LeftLeg','LeftFoot','RightUpLeg','RightLeg','RightFoot'],VP={};HP.forEach(n=>VP[n]=V());
const _d1=V(),_d2=V(),_r=V(),_c1=V(),_c2=V(),CP=V();
function segDist(p1,q1,p2,q2){_d1.subVectors(q1,p1);_d2.subVectors(q2,p2);_r.subVectors(p1,p2);
 const a=_d1.dot(_d1),e=_d2.dot(_d2),f=_d2.dot(_r);let s,t;
 if(a<1e-8&&e<1e-8){s=t=0;}else if(a<1e-8){s=0;t=clamp(f/e,0,1);}else{const c=_d1.dot(_r);if(e<1e-8){t=0;s=clamp(-c/a,0,1);}else{const b=_d1.dot(_d2),den=a*e-b*b;
  s=den>1e-8?clamp((b*f-c*e)/den,0,1):0;t=(b*s+f)/e;if(t<0){t=0;s=clamp(-c/a,0,1);}else if(t>1){t=1;s=clamp((b-c)/a,0,1);}}}
 _c1.copy(p1).addScaledVector(_d1,s);_c2.copy(p2).addScaledVector(_d2,t);CP.addVectors(_c1,_c2).multiplyScalar(.5);return _c1.distanceTo(_c2);}
export function limbHit(f,o,m){const [j0,j1]=limbJoints(m.limb),t=moveTime(m,f.mf);
 jointWorld(f,m.clip,t,j0,A0);jointWorld(f,m.clip,t,j1,A1);A1.addScaledVector(_d1.subVectors(A1,A0).normalize(),m.limb[1]==='a'?.09:.06);
 const ra=m.limb[1]==='a'?.08:.09,an=animOf(o);for(const n of HP)jointWorld(o,an.k,an.t,n,VP[n]);
 VP.Head.y+=.06;
 const caps=[[VP.Head,VP.Head,.15],[VP.Neck,VP.Head,.1],[VP.Spine2,VP.Neck,.17],[VP.Hips,VP.Spine2,.17],[VP.LeftArm,VP.LeftForeArm,.07],[VP.RightArm,VP.RightForeArm,.07],
  [VP.LeftForeArm,VP.LeftHand,.06],[VP.RightForeArm,VP.RightHand,.06],[VP.LeftUpLeg,VP.LeftLeg,.09],[VP.RightUpLeg,VP.RightLeg,.09],[VP.LeftLeg,VP.LeftFoot,.07],[VP.RightLeg,VP.RightFoot,.07]];
 let best=null,bd=1e9;for(const c of caps){const d=segDist(A0,A1,c[0],c[1])-(ra+c[2]);if(d<0&&d<bd){bd=d;best=CP.clone();}}return best;}
export const hurtPoints=VP;

function isLow(o){return FSM[o.st].low||(o.st===S.ATTACK&&MV[o.mv].cr)||(o.st===S.BLOCKSTUN&&o.grd===2)||(o.st===S.JUMP&&o.y<=0);}
function hittable(o,m){
 if(FSM[o.st].inv||o.ko)return false;if(G.phase==='finish')return o.st===S.DIZZY;if(o.st===S.DIZZY)return true;
 if(o.st===S.KNOCKDOWN)return m.lv==='l';if(m.lv==='h'&&isLow(o))return false;if(m.lv==='l'&&o.y>.25)return false;return true;}
function resolve(){
 for(let i=0;i<2;i++){const f=G.f[i],o=G.f[1-i];if(f.st!==S.ATTACK)continue;const m=MV[f.mv];if(f.hitd||f.mf<m.su||f.mf>=m.su+m.ac)continue;
  const fx=Math.sin(f.ang),fz=Math.cos(f.ang),dx=o.x-f.x,dz=o.z-f.z;
  if(m.thr){const al=dx*fx+dz*fz,lat=Math.abs(dx*fz-dz*fx);if(al<-.1||al>1.15||lat>.5)continue;f.hitd=true;const om=o.mv&&MV[o.mv];
   const ok=(o.st===S.IDLE||o.st===S.WALK||o.st===S.BLOCKSTUN||o.st===S.DASH||o.st===S.BACKDASH||(o.st===S.ATTACK&&om&&!om.cr&&o.mf>=om.su+om.ac))&&o.y<=0;
   if(ok&&setState(o,S.THROWN,'hit')){setState(f,S.THROW,'sys');o.thk=m.br;o.buf[m.br]=0;ev('grab',{a:f.idx});}continue;}
  if(Math.hypot(dx,dz)>2.8||!hittable(o,m))continue;
  const cp=limbHit(f,o,m);if(!cp)continue;f.hitd=true;hit(f,o,m,fx,fz,cp);}}
function hit(f,o,m,fx,fz,cp){
 const h=cp.y,px=cp.x,pz=cp.z;
 if(o.st===S.DIZZY){finishBlow(f,o,fx,fz,px,h,pz);return;}
 const canB=FSM[o.st].guard&&o.y<=0,blocked=canB&&o.grd>0&&(o.grd===1?m.lv!=='l':(m.lv==='l'||m.lv==='s')),kb=m.kb*.045;
 if(blocked){const g=o.grd;setState(o,S.BLOCKSTUN,'hit');o.grd=g;o.stun=m.bt;o.vx=fx*kb*.85;o.vz=fz*kb*.85;f.x-=fx*.04;f.z-=fz*.04;G.freeze=4;ev('blk',{x:px,y:h,z:pz,v:o.idx});return;}
 const om=o.st===S.ATTACK?MV[o.mv]:null;
 if(om&&om.armor&&o.mf<om.su){const dm=Math.round(m.dmg*.6);o.hp=Math.max(1,o.hp-dm);G.freeze=5;ev('hit',{v:o.idx,x:px,y:h,z:pz,p:dm,arm:1,cn:0,cd:0});return;}
 if(m.ra){setState(f,S.RAGEART,'sys');setState(o,S.RAGEHIT,'hit');o.y=0;o.vy=0;G.cin={a:f.idx,t:0};ev('hit',{v:o.idx,x:px,y:h,z:pz,p:20,ra:1,cn:1,cd:0});return;}
 const ch=!!om,air=o.st===S.AIRBORNE||o.y>.2,down=o.st===S.KNOCKDOWN;
 let dmg=m.dmg*(f.rage?1.1:1)*(ch?1.2:1);if(air)dmg*=Math.max(.3,.8-.1*o.jug);if(down)dmg*=.5;dmg=Math.max(1,Math.round(dmg));
 o.hp=Math.max(0,o.hp-dmg);o.combo++;o.cdmg+=dmg;const eff=m.eff;
 if(down){o.sf=Math.min(o.sf,18);}
 else if(air||eff){const jl=Math.max(.35,1-.13*o.jug),lift=eff==='launch'?.135:eff==='blow'?.085:eff==='kd'?.072:.06,vy=air?Math.max(.035,lift*.85*jl):lift;if(air)o.jug++;
  setState(o,S.AIRBORNE,'hit');o.airT=air?4:0;o.vy=vy;o.y=Math.max(o.y,.02);const push=eff==='blow'?.1:eff==='launch'?.012:air?.022:.04;o.vx=fx*push;o.vz=fz*push;}
 else{setState(o,S.HITSTUN,'hit');o.stun=m.ht+(ch?7:0);o.stun0=o.stun;o.hl=m.lv;o.vx=fx*kb;o.vz=fz*kb;}
 rageChk(o);G.freeze=(dmg>=15?8:5)+(ch?2:0);
 ev('hit',{v:o.idx,x:px,y:h,z:pz,p:dmg,c:ch?1:0,cn:o.combo,cd:o.cdmg,big:eff?1:0,lv:m.lv,la:eff==='launch'?1:0});}
const LOCKED=s=>s===S.THROW||s===S.THROWN||s===S.RAGEART||s===S.RAGEHIT||s===S.FATALITY||s===S.FATAL;
function pushApart(){const[a,b]=G.f;if(G.cin||G.fat||LOCKED(a.st)||LOCKED(b.st))return;
 let dx=b.x-a.x,dz=b.z-a.z,d=Math.hypot(dx,dz);const R=(a.st===S.KNOCKDOWN||b.st===S.KNOCKDOWN)?.45:.56;
 if(d<R){if(d<1e-4){dx=1;dz=0;d=1;}const ov=(R-d)/2;dx/=d;dz/=d;a.x-=dx*ov;a.z-=dz*ov;b.x+=dx*ov;b.z+=dz*ov;}}
function cinStep(){const c=G.cin,A=G.f[c.a],Vf=G.f[1-c.a];c.t++;A.sf++;Vf.sf++;
 const fx=Math.sin(A.ang),fz=Math.cos(A.ang);Vf.x=A.x+fx*.78;Vf.z=A.z+fz*.78;Vf.y=0;Vf.ang=A.ang+Math.PI;
 if(c.t>=12&&c.t<=82&&c.t%10===2){Vf.hp=Math.max(0,Vf.hp-4);Vf.combo++;Vf.cdmg+=4;ev('hit',{v:Vf.idx,x:Vf.x-fx*.2,y:1.2+rnd()*.4,z:Vf.z-fz*.2,p:6,cn:Vf.combo,cd:Vf.cdmg,ra:1});}
 if(c.t===100){Vf.hp=Math.max(0,Vf.hp-23);Vf.combo++;Vf.cdmg+=23;setState(Vf,S.AIRBORNE,'sys');Vf.airT=0;Vf.vy=.13;Vf.vx=fx*.05;Vf.vz=fz*.05;Vf.y=.02;Vf.jug=9;
  setState(A,S.IDLE,'end');G.cin=null;G.freeze=10;ev('hit',{v:Vf.idx,x:Vf.x-fx*.2,y:1.3,z:Vf.z-fz*.2,p:30,big:1,cn:Vf.combo,cd:Vf.cdmg,ra:1});rageChk(Vf);}}
function endRound(){const[a,b]=G.f;let rw;
 if(a.hp<=0&&b.hp<=0)rw=2;else if(a.hp<=0)rw=1;else if(b.hp<=0)rw=0;else rw=a.hp===b.hp?2:a.hp>b.hp?0:1;
 const ko=a.hp<=0||b.hp<=0;G.why=ko?'ko':'time';G.rw=rw;if(rw===2){a.wins++;b.wins++;}else G.f[rw].wins++;
 const last=G.f.some(f=>f.wins>=WINS);
 if(ko&&last&&rw<2&&G.mode!=='train'){const W=G.f[rw],L=G.f[1-rw];L.hp=0;W.rage=false;if(W.st===S.RAGEART)setState(W,S.IDLE,'sys');
  if(L.st!==S.AIRBORNE&&L.st!==S.KNOCKDOWN&&L.st!==S.THROWN){setState(L,S.DIZZY,'sys');L.vx*=.3;L.vz*=.3;}
  G.cin=null;G.phase='finish';G.pt=0;G.why='ko';ev('finish',{her:BODIES[L.body]&&BODIES[L.body].her?1:0,w:rw});return;}
 G.phase='ko';G.pt=0;G.cin=null;
 G.f.forEach(f=>{if(f.hp<=0){f.hp=0;f.ko=true;if(f.st!==S.AIRBORNE&&f.st!==S.THROWN&&f.st!==S.KNOCKDOWN){setState(f,S.AIRBORNE,'sys');f.airT=0;f.vy=.1;f.vx=-Math.sin(f.ang)*.06;f.vz=-Math.cos(f.ang)*.06;f.y=Math.max(f.y,.02);}}
  else if(f.st===S.RAGEART||f.st===S.RAGEHIT)setState(f,S.IDLE,'sys');});
 G.slow=ko?(last?110:60):0;ev(ko?(rw===2?'dko':'ko'):'time',{last:last?1:0});
 if(rw<2){const w=G.f[rw];ev(w.hp>=HPMAX?'perfect':w.hp<HPMAX*.12?'great':'none',{w:rw});}}
/* FINISH HIM / FATALITY */
function finishBlow(f,o,fx,fz,px,h,pz){o.ko=true;setState(o,S.AIRBORNE,'sys');o.airT=0;o.vy=.12;o.y=.02;o.vx=fx*.1;o.vz=fz*.1;
 G.phase='ko';G.pt=0;G.slow=100;G.freeze=10;ev('hit',{v:o.idx,x:px,y:h,z:pz,p:30,big:1,cn:1,cd:0});ev('ko',{last:1});}
function finishStep(inp){const g=G,W=g.f[g.rw],L=g.f[1-g.rw];if(g.fat){fatStep();return;}g.pt++;
 const wi=inp[g.rw]||mk(),d=Math.hypot(L.x-W.x,L.z-W.z),fatIn=(wi.x&&!W.prev.x)||(wi['1']&&wi['2']&&wi['3']&&wi['4']);
 if(fatIn&&L.st===S.DIZZY&&canAct(W)&&d<2&&W.y<=0){setState(W,S.FATALITY,'sys');setState(L,S.FATAL,'sys');g.fat={a:W.idx,t:0};W.prev=Object.assign(mk(),wi);ev('fatstart',{a:W.idx});return;}
 updF(W,L,Object.assign({},wi,{x:0}));updF(L,W,mk());pushApart();
 if((L.st===S.KNOCKDOWN&&L.sf>30)||L.st===S.IDLE||L.st===S.HITSTUN||L.st===S.BLOCKSTUN||L.st===S.GETUP)setState(L,S.DIZZY,'sys');
 resolve();
 if(g.phase==='finish'&&g.pt>=420){L.ko=true;setState(L,S.AIRBORNE,'sys');L.airT=0;L.vy=.03;L.y=.02;g.phase='ko';g.pt=0;g.slow=40;ev('ko',{last:1});}}
function fatStep(){const F=G.fat,A=G.f[F.a],Vf=G.f[1-F.a];F.t++;A.sf++;Vf.sf++;const fx=Math.sin(A.ang),fz=Math.cos(A.ang);
 if(F.t<34){Vf.x=lerp(Vf.x,A.x+fx*.7,.25);Vf.z=lerp(Vf.z,A.z+fz*.7,.25);Vf.y=0;Vf.ang=A.ang+Math.PI;Vf.sf=0;}
 if(F.t===34){Vf.vy=.32;Vf.vx=fx*.015;Vf.vz=fz*.015;G.freeze=12;ev('hit',{v:Vf.idx,x:Vf.x-fx*.2,y:1.6,z:Vf.z-fz*.2,p:40,big:1,cn:1,cd:0});ev('blood',{x:Vf.x,y:1.6,z:Vf.z,n:45});}
 if(F.t>34&&!Vf.gone){Vf.y+=Vf.vy;Vf.vy-=.004;Vf.x+=Vf.vx;Vf.z+=Vf.vz;if(F.t%5===0)ev('blood',{x:Vf.x,y:Vf.y+1,z:Vf.z,n:5});}
 if(F.t===99){Vf.gone=1;ev('boom',{x:Vf.x,y:Vf.y+1,z:Vf.z});}
 if(F.t===118)ev('fatality');
 if(F.t>=205){G.fat=null;Vf.ko=true;G.phase='ko';G.pt=100;}}

export function step(inp){const g=G;
 if(g.hold>0){g.hold--;return;}if(g.freeze>0){g.freeze--;return;}
 g.n++;const[a,b]=g.f,E0=mk();
 if(g.phase==='intro'){g.pt++;if(g.pt===1)ev('round',{r:g.round,fin:(a.wins===WINS-1&&b.wins===WINS-1)?1:0});
  updF(a,b,E0);updF(b,a,E0);pushApart();if(g.pt===72)ev('fight');if(g.pt>=92){g.phase='fight';g.pt=0;}return;}
 if(g.phase==='fight'){if(g.cin){cinStep();return;}
  updF(a,b,inp[0]);updF(b,a,inp[1]);pushApart();resolve();
  if(g.mode==='train'){g.f.forEach(f=>{if((f.st===S.IDLE||f.st===S.CROUCH)&&f.sf>50&&f.hp<HPMAX){f.hp=HPMAX;if(f.idx===1)f.rage=false;}});const p=g.f[0];if(!p.rage&&p.st!==S.RAGEART){p.rage=true;p.raUsed=false;}}
  else if(++g.tick>=60){g.tick=0;g.timer--;}
  if(a.hp<=0||b.hp<=0||g.timer<=0)endRound();return;}
 if(g.phase==='finish'){finishStep(inp);return;}
 if(g.phase==='ko'){g.pt++;updF(a,b,E0);updF(b,a,E0);pushApart();
  if(g.pt===115&&g.rw<2){const w=g.f[g.rw];if(!w.ko)setState(w,S.WIN,'sys');ev('winner',{w:g.rw,last:w.wins>=WINS?1:0});}
  if(g.pt>=230){if(a.wins>=WINS||b.wins>=WINS){g.phase='over';g.pt=0;}else{g.round++;resetRound();}}return;}
 g.pt++;updF(a,b,E0);updF(b,a,E0);}
