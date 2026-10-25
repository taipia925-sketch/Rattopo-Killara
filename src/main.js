/* RATTOPO KILLARA — avvio, menu, ciclo di gioco, eventi, online */
import {CHARS,BODIES,WINS,KEYS} from './data.js';
import {G,createGame,setGame,resetRound,step,mk} from './sim.js';
import {aiIn} from './ai.js';
import {keys,latch,tin,humanMe,humanLocal,clearLatch,enc,dec,pads,initTouch} from './input.js';
import {sfx,say,musStart,musStop,musOn,snd,saveSnd} from './audio.js';
import {initView,setStage,ensureFighters,dropFighters,fighters,renderFrame,burst,dust,blood,boom,camS,MOBILE,stageName,stageCount} from './view.js';
import {initHUD,drawHUD,RS,banner,pop} from './hud.js';
import {ASSETS,loadCore} from './assets.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const rnd=Math.random,clamp=(v,a,b)=>v<a?a:v>b?b:v;

/* ---------------- avvio ---------------- */
try{initView($('#gl'));}catch(e){const el=$('#err');el.style.display='flex';el.textContent='Questo dispositivo/browser non supporta la grafica 3D (WebGL2). Prova con Chrome o Safari aggiornati.';$('#load').style.display='none';throw e;}
initHUD($('#hud'));initTouch();
let ready=false;
loadCore(p=>{$('#lfill').style.width=(p*100|0)+'%';}).then(()=>{ready=true;$('#load').style.display='none';startDemo();refocus();bgLoad();
 const qr=new URLSearchParams(location.search).get('room');if(qr&&/^[A-Za-z]{4}$/.test(qr)){$('#codeIn').value=qr.toUpperCase();sel.code=qr.toUpperCase();if(typeof Peer!=='undefined')openSelect('guest');}})
 .catch(e=>{console.error(e);$('#ltxt').textContent='ERRORE DI CARICAMENTO: ricarica la pagina';});
// carica gli altri corpi in sottofondo, uno alla volta
async function bgLoad(){for(let i=1;i<BODIES.length;i++){try{await ASSETS.loadBody(i);}catch(e){}}}

/* ---------------- partite ---------------- */
const playing=()=>!!G&&G.mode!=='demo';
let overShown=false;
async function newGame(mode,cs,lvl,stage,bs){
 const b=[bs&&bs[0]!=null?bs[0]:CHARS[cs[0]].body,bs&&bs[1]!=null?bs[1]:CHARS[cs[1]].body];
 if(mode!=='demo'){showVS(cs,stage,b);}
 if(!ASSETS.ready(b[0])||!ASSETS.ready(b[1])){$('#vsSt').textContent='CARICAMENTO…';try{await Promise.all([ASSETS.loadBody(b[0]),ASSETS.loadBody(b[1])]);}catch(e){toast('Errore nel caricare un corpo');}}
 const g=createGame(mode,cs,lvl,stage,b,stageCount);setGame(g);
 setStage(g.stage);ensureFighters(g.f,ASSETS);camS.init=false;camS.z=null;
 RS.reset();overShown=false;
 if(mode!=='demo'){$('#vsSt').textContent='— '+stageName(g.stage)+' —';hideP();$('#pVs').classList.add('show');clearTimeout(showVS.h);showVS.h=setTimeout(()=>$('#pVs').classList.remove('show'),1500);musStart();}
 updateTouch();}
function resetMatch(){G.round=1;G.f.forEach(f=>{f.wins=0;});resetRound();G.hold=0;overShown=false;const le=RS.lastEv;RS.reset();RS.lastEv=le;hideP();updateTouch();}
function startDemo(){const ok=BODIES.map((b,i)=>i).filter(i=>ASSETS.ready(i));const a=rnd()*CHARS.length|0;let c;do{c=rnd()*CHARS.length|0;}while(c===a);
 newGame('demo',[a,c],1+(rnd()<.4?1:0),undefined,[ok[rnd()*ok.length|0],ok[rnd()*ok.length|0]]);}
function showVS(cs,stage,b){$('#vsL').src=CHARS[cs[0]].cut;$('#vsR').src=CHARS[cs[1]].cut;$('#vsLn').textContent=CHARS[cs[0]].name.toUpperCase();$('#vsRn').textContent=CHARS[cs[1]].name.toUpperCase();
 $('#vsSt').textContent='';const p=$('#pVs');p.classList.remove('show');void p.offsetWidth;p.classList.add('show');clearTimeout(showVS.h);}

/* ---------------- eventi di gioco → effetti, suoni, scritte ---------------- */
function sideName(i){return 'PLAYER '+(i+1)+' WINS';}
function handleEv(e){const sh=s=>{camS.shake=Math.max(camS.shake,s);};
 switch(e.k){
  case 'hit':{const kind=e.ra?'ra':e.c?'ch':'n';burst(e.x,e.y,e.z,kind,e.p);const v=fighters[e.v];if(v){v.flash=1;v.fcol.set(e.c||e.ra?0xff5a10:0xffffff);}
   sfx(e.p>=15||e.thr||e.big?'heavy':'hit',e.p/10);sh(Math.min(.22,.04+e.p*.006));if(e.p>=14)camS.punch=Math.max(camS.punch,.35);
   if(e.c)pop('COUNTER HIT',1-e.v,'#ffa020');if(e.arm)pop('POWER CRUSH',e.v,'#ff6a3a');if(e.cn>=2)RS.side[1-e.v].cmb={n:e.cn,d:e.cd,t:0};if(e.la)pop('LAUNCH!',1-e.v,'#7affb0');
   if(!e.arm&&e.p>=6&&bloodOn)blood(e.x,e.y,e.z,Math.min(30,e.p*1.2|0),1);break;}
  case 'blk':burst(e.x,e.y,e.z,'blk',0);sfx('blk');{const v=fighters[e.v];if(v){v.flash=.5;v.fcol.set(0x4f8cff);}}break;
  case 'sw':sfx('sw',e.p);break;
  case 'land':dust(e.x,e.z,e.soft?5:12);if(!e.soft){sfx('land');sh(.06);}break;
  case 'grab':sfx('blk');break;
  case 'brk':pop('BREAK!',0,'#7ab0ff');pop('BREAK!',1,'#7ab0ff');sfx('brk');break;
  case 'rage':pop('RAGE',e.v,'#ff3a1c');sfx('rage');break;
  case 'ra':sfx('ra');RS.red=1;pop('RAGE ART',e.a,'#ff3a1c');break;
  case 'round':banner(e.fin?'FINAL ROUND':'ROUND '+e.r,70,'gold');say(e.fin?'Final round':'Round '+['one','two','three','four','five'][e.r-1]);break;
  case 'fight':banner('FIGHT!',34,'fight');say('Fight!');sfx('ok');break;
  case 'ko':banner('K.O.',100,'ko');RS.flash=.9;sfx('ko');say('K.O.!');sh(.3);break;
  case 'dko':banner('DOUBLE K.O.',100,'ko');RS.flash=.9;sfx('ko');say('Double K.O.!');break;
  case 'time':banner('TIME UP',90,'gold');say('Time up!');break;
  case 'perfect':setTimeout(()=>{if(playing()){banner('PERFECT',70,'gold');say('Perfect!');}},1300);break;
  case 'great':setTimeout(()=>{if(playing()){banner('GREAT',60,'gold');say('Great!');}},1300);break;
  case 'finish':banner(e.her?'FINISH HER!':'FINISH HIM!',150,'red');say(e.her?'Finish her!':'Finish him!');sfx('rage');break;
  case 'fatstart':sfx('ra');RS.red=1;break;
  case 'fatality':banner('FATALITY',160,'ko');say('Fatality!');sfx('ko');break;
  case 'blood':if(bloodOn)blood(e.x,e.y,e.z,e.n,1);break;
  case 'boom':RS.flash=1;sfx('ko');sfx('heavy');sh(.35);boom(e.x,e.y,e.z);if(bloodOn)blood(e.x,e.y,e.z,80,3);break;
  case 'winner':if(e.last){const w=G.f[e.w];banner(CHARS[w.ci].name.toUpperCase(),90,e.w?'blue':'red','WINS');setTimeout(()=>say(G&&G.mode==='cpu'?(e.w===0?'You win':'You lose'):sideName(e.w)),300);}break;
 }}
let bloodOn=true;try{bloodOn=localStorage.getItem('rk_blood')!=='0';}catch(e){}

/* ---------------- menu ---------------- */
let fi=0;
const focusables=()=>$$('.panel.show .nav');
function refocus(){const l=focusables();$$('.foc').forEach(e=>e.classList.remove('foc'));if(!l.length)return;fi=clamp(fi,0,l.length-1);l[fi].classList.add('foc');if(l[fi].dataset.ci!=null)preview(+l[fi].dataset.ci);}
function moveFocus(d){const l=focusables();if(!l.length)return;fi=(fi+d+l.length)%l.length;refocus();sfx('ui');}
function showP(id){$$('.panel').forEach(p=>p.classList.toggle('show',p.id===id));fi=0;refocus();updateTouch();}
function hideP(){$$('.panel').forEach(p=>p.classList.remove('show'));updateTouch();}
const panelOpen=()=>!!$('.panel.show:not(.ov)');
function clickFocus(){const l=focusables();if(l[fi])l[fi].click();}
function backBtn(){const b=$('.panel.show [data-back]');if(b)b.click();else if($('#pSelect').classList.contains('show'))$('#selBack').click();else if($('#pPause').classList.contains('show'))$('#bResume').click();}
let touchMode=MOBILE;addEventListener('touchstart',()=>{touchMode=true;updateTouch();},{once:true,passive:true});
function updateTouch(){document.body.classList.toggle('ingame',playing());$('#touch').classList.toggle('show',playing()&&touchMode&&!panelOpen());$('#menuBtn').style.display=playing()?'block':'none';}
function toast(m){const t=$('#toast');t.textContent=m;t.style.display='block';clearTimeout(toast.h);toast.h=setTimeout(()=>t.style.display='none',2600);}
addEventListener('keydown',e=>{keys[e.code]=true;if(!e.repeat)latch[e.code]=1;if(!musOn()&&snd.music&&snd.on)musStart();
 if(e.target&&e.target.tagName==='INPUT'){if(e.code==='Enter')$('#bJoinGo').click();if(e.code==='Escape')backBtn();return;}
 if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
 if(panelOpen()){if(['ArrowUp','ArrowLeft','KeyW','KeyA'].includes(e.code))moveFocus(-1);else if(['ArrowDown','ArrowRight','KeyS','KeyD'].includes(e.code))moveFocus(1);else if(e.code==='Enter'||e.code==='Space'||e.code==='KeyF')clickFocus();else if(e.code==='Escape'||e.code==='Backspace')backBtn();}
 else if(playing()&&(e.code==='Escape'||e.code==='KeyP'))openPause();});
addEventListener('pointerdown',()=>{if(!musOn()&&snd.music&&snd.on)musStart();},{passive:true});
const padPrev={};
function padMenu(){const ps=pads();let up=0,dn=0,ok=0,bk=0,stt=0;
 for(const gp of ps){const b=i=>!!(gp.buttons[i]&&gp.buttons[i].pressed),ax=gp.axes,p=padPrev[gp.index]||(padPrev[gp.index]={});
  const cur={u:b(12)||ax[1]<-.6,d:b(13)||ax[1]>.6,l:b(14)||ax[0]<-.6,r:b(15)||ax[0]>.6,ok:b(0),bk:b(1),st:b(9)};
  if(cur.u&&!p.u||cur.l&&!p.l)up=1;if(cur.d&&!p.d||cur.r&&!p.r)dn=1;if(cur.ok&&!p.ok)ok=1;if(cur.bk&&!p.bk)bk=1;if(cur.st&&!p.st)stt=1;Object.assign(p,cur);}
 if(panelOpen()){if(up)moveFocus(-1);else if(dn)moveFocus(1);if(ok)clickFocus();if(bk)backBtn();if(stt&&$('#pPause').classList.contains('show'))$('#bResume').click();}
 else if(playing()&&stt)openPause();}
addEventListener('gamepadconnected',e=>{toast('🎮 Controller collegato: '+e.gamepad.id.slice(0,32));padInfo();});
addEventListener('gamepaddisconnected',()=>{toast('🎮 Controller scollegato');padInfo();});
function padInfo(){const n=pads().length;$('#padInfo').textContent=n?'🎮 '+n+' controller collegat'+(n>1?'i':'o'):'Collega un controller PlayStation, Xbox o Switch e premi un tasto per usarlo';}
padInfo();
function sndUI(){$('#snd').textContent=snd.on?'🔊':'🔇';$('#mus').textContent=snd.music?'🎵':'🚫';saveSnd();}
$('#snd').onclick=()=>{snd.on=!snd.on;if(!snd.on)musStop();else musStart();sndUI();};
$('#mus').onclick=()=>{snd.music=!snd.music;if(!snd.music)musStop();else musStart();sndUI();};sndUI();

/* selezione personaggio (anteprima 3D: i lottatori scelti combattono sullo sfondo) */
const grid=$('#grid');
CHARS.forEach((c,i)=>{const d=document.createElement('div');d.className='card nav';d.dataset.ci=i;d.innerHTML='<img src="'+c.img+'" alt="'+c.name+'">';d.onclick=()=>pick(i);d.onmouseenter=()=>preview(i);grid.appendChild(d);});
const sel={mode:null,step:0,p1:null,lvl:1,code:'',body:[-1,-1],stage:-1};
const bodyFor=(side,ci)=>sel.body[side]>=0?sel.body[side]:CHARS[ci].body;
function bodyUI(){[0,1].forEach(i=>{$(i?'#bodyR':'#bodyL').textContent='CORPO: '+(sel.body[i]<0?'AUTO':BODIES[sel.body[i]].name);});}
// scelta del luogo dell'incontro (−1 = a sorte); lo sfondo del menu cambia subito
function stageUI(){$('#stName').textContent='LUOGO: '+(sel.stage<0?'A SORTE':stageName(sel.stage));}
$$('.ssb').forEach(b=>b.onclick=()=>{const n=stageCount+1;sel.stage=((sel.stage+1+(+b.dataset.d))%n+n)%n-1;stageUI();sfx('ui');if(sel.stage>=0)setStage(sel.stage);});
const pickStage=()=>sel.stage<0?undefined:sel.stage;
$$('.bsb').forEach(b=>b.onclick=()=>{const i=+b.dataset.s,n=BODIES.length+1;sel.body[i]=((sel.body[i]+1+(+b.dataset.d))%n+n)%n-1;bodyUI();sfx('ui');previewBody(i);});
function bloodUI(){$('#bBlood small').textContent=bloodOn?'sì (stile Mortal Kombat)':'no';}
$('#bBlood').onclick=()=>{bloodOn=!bloodOn;try{localStorage.setItem('rk_blood',bloodOn?'1':'0');}catch(e){}bloodUI();sfx('ui');};bloodUI();
let lastPrev=[0,1];
function previewBody(side){if(!G||G.mode!=='demo')return;const f=G.f[side],b=bodyFor(side,f.ci);if(ASSETS.ready(b)){f.body=b;ensureFighters(G.f,ASSETS);}else ASSETS.loadBody(b).then(()=>{if(G&&G.mode==='demo'){G.f[side].body=bodyFor(side,G.f[side].ci);ensureFighters(G.f,ASSETS);}});}
function preview(i){const ch=CHARS[i],side=sel.mode==='local'&&sel.step===1?1:0;
 if(side===1){$('#bigR').src=ch.cut;$('#nameR').textContent=ch.name.toUpperCase();}else if(sel.step===0){$('#bigL').src=ch.cut;$('#nameL').textContent=ch.name.toUpperCase();}
 if(G&&G.mode==='demo'&&$('#pSelect').classList.contains('show')){const f=G.f[side];if(f.ci!==i){f.ci=i;if(G.f[1-side].ci===i)G.f[1-side].ci=(i+1)%CHARS.length;previewBody(side);previewBody(1-side);}}}
function openSelect(mode){sel.mode=mode;sel.step=0;sel.p1=null;$$('.card').forEach(c=>c.classList.remove('p0','p1'));
 $('#bigR').src='';$('#bigR').style.visibility=mode==='local'?'visible':'hidden';$('#nameR').textContent=mode==='local'?'?':mode==='cpu'?'CPU':mode==='train'?'MANICHINO':'ONLINE';$('#tagR').textContent=mode==='cpu'?'CPU':'2P';
 $('#bselR').style.visibility=(mode==='host'||mode==='guest')?'hidden':'visible';bodyUI();
 selTitle();showP('pSelect');fi=focusables().findIndex(e=>e.classList.contains('card'));refocus();tryFull();}
function selTitle(){$('#selTitle').textContent=sel.mode==='local'?(sel.step?'GIOCATORE 2: SCEGLI':'GIOCATORE 1: SCEGLI'):'SCEGLI IL LOTTATORE';}
function pick(i){sfx('ok');
 if(sel.mode==='cpu'||sel.mode==='train'){let o;do{o=rnd()*CHARS.length|0;}while(o===i);newGame(sel.mode,[i,o],sel.lvl,pickStage(),[bodyFor(0,i),bodyFor(1,o)]);}
 else if(sel.mode==='local'){if(!sel.step){sel.p1=i;sel.step=1;grid.children[i].classList.add('p0');$('#bigL').src=CHARS[i].cut;$('#nameL').textContent=CHARS[i].name.toUpperCase();selTitle();refocus();}else newGame('local',[sel.p1,i],1,pickStage(),[bodyFor(0,sel.p1),bodyFor(1,i)]);}
 else if(sel.mode==='host'){net.mb=bodyFor(0,i);hostRoom(i);}
 else if(sel.mode==='guest'){net.mb=bodyFor(0,i);joinRoom(sel.code,i);}}
function tryFull(){if(!touchMode)return;try{const d=document.documentElement;(d.requestFullscreen||d.webkitRequestFullscreen||(()=>{})).call(d);screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(()=>{});}catch(e){}}
$('#bCpu').onclick=()=>openSelect('cpu');$('#bLocal').onclick=()=>openSelect('local');$('#bTrain').onclick=()=>openSelect('train');
$('#bHost').onclick=()=>{if(typeof Peer==='undefined'){toast('Online non disponibile (connessione assente)');return;}openSelect('host');};
$('#bJoin').onclick=()=>{if(typeof Peer==='undefined'){toast('Online non disponibile (connessione assente)');return;}showP('pJoin');setTimeout(()=>$('#codeIn').focus(),50);};
let helpFrom='menu';$('#bHelp').onclick=()=>{helpFrom='menu';showP('pHelp');};
$('#lvlSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;sel.lvl=+b.dataset.l;$$('#lvlSeg button').forEach(x=>x.classList.toggle('on',x===b));sfx('ui');};
$('#selBack').onclick=()=>{if(sel.mode==='local'&&sel.step){sel.step=0;sel.p1=null;$$('.card').forEach(c=>c.classList.remove('p0'));$('#nameR').textContent='?';$('#bigR').src='';selTitle();}else showP('pMenu');};
$('#joinBack').onclick=()=>showP('pMenu');$('#helpBack').onclick=()=>{if(helpFrom==='pause')showP('pPause');else showP('pMenu');};
$('#bJoinGo').onclick=()=>{const c=$('#codeIn').value.trim().toUpperCase();if(c.length<4){toast('Scrivi il codice di 4 lettere');return;}sel.code=c;openSelect('guest');};
$('#waitBack').onclick=()=>{cleanup();showP('pMenu');};
$('#menuBtn').onclick=openPause;
function openPause(){if(!playing()||G.phase==='over')return;if(G.mode!=='host'&&G.mode!=='guest')G.paused=true;showP('pPause');}
$('#bResume').onclick=()=>{if(G)G.paused=false;hideP();};$('#bMoves').onclick=()=>{helpFrom='pause';showP('pHelp');};
$('#bQuit').onclick=()=>{cleanup();showP('pMenu');};$('#bOverMenu').onclick=()=>{cleanup();showP('pMenu');};
$('#bRematch').onclick=()=>{if(!G)return;if(G.mode==='cpu'||G.mode==='local'||G.mode==='train'){resetMatch();return;}
 $('#bRematch').textContent='⏳ IN ATTESA DELL\'ALTRO…';if(G.mode==='host'){net.hr=true;checkRematch();}else if(conn&&conn.open)conn.send({t:'rematch'});};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing()&&G.mode!=='host'&&G.mode!=='guest'&&!panelOpen())openPause();});
function cleanup(){try{conn&&conn.close();}catch(e){}try{peer&&peer.destroy();}catch(e){}conn=null;peer=null;net.role=null;net.gin=mk();for(const k of KEYS)tin[k]=0;overShown=false;startDemo();updateTouch();}
function showOver(){const[a,b]=G.f;const w=a.wins===b.wins?-1:a.wins>b.wins?0:1;
 $('#overT').textContent=w<0?'PAREGGIO':CHARS[G.f[w].ci].name.toUpperCase()+' VINCE!';
 $('#overS').textContent=(G.mode==='cpu'&&w===0)?'Hai battuto il computer!':(G.mode==='cpu'&&w===1)?'Il computer ha vinto. Riprova!':'';
 net.hr=net.gr=false;$('#bRematch').textContent='🔁 RIVINCITA';showP('pOver');}

/* ---------------- online (WebRTC via PeerJS) ---------------- */
let peer=null,conn=null;const net={role:null,gin:mk(),hr:false,gr:false,my:0,code:'',mb:0};
const genCode=()=>{const a='ABCDEFGHJKLMNPQRSTUVWXYZ';let s='';for(let i=0;i<4;i++)s+=a[rnd()*a.length|0];return s;};
function hostRoom(ci){net.role='host';net.my=ci;const code=genCode();net.code=code;
 $('#waitTitle').textContent='STANZA CREATA';$('#waitCode').textContent='…';$('#waitMsg').textContent='Connessione in corso…';showP('pWait');
 try{peer=new Peer('rkgt-'+code);}catch(e){toast('Errore di rete');showP('pMenu');return;}
 peer.on('open',()=>{$('#waitCode').textContent=code;$('#waitMsg').textContent='Dì all\'amico di scegliere "Online · entra in stanza" e scrivere questo codice, oppure manda il link. La partita parte da sola.';});
 peer.on('error',e=>{if(e.type==='unavailable-id'){try{peer.destroy();}catch(_){}hostRoom(ci);}else{toast('Errore di rete: '+e.type);cleanup();showP('pMenu');}});
 peer.on('connection',c=>{if(conn){c.close();return;}conn=c;bind(c);});}
function joinRoom(code,ci){net.role='guest';net.my=ci;$('#waitTitle').textContent='CONNESSIONE…';$('#waitCode').textContent=code;$('#waitMsg').textContent='Mi collego alla stanza…';showP('pWait');
 try{peer=new Peer();}catch(e){toast('Errore di rete');showP('pMenu');return;}
 peer.on('open',()=>{conn=peer.connect('rkgt-'+code,{reliable:true,serialization:'json'});bind(conn);
  setTimeout(()=>{if(conn&&!conn.open&&net.role==='guest'&&!playing()){toast('Stanza non trovata o rete bloccata');cleanup();showP('pMenu');}},12000);});
 peer.on('error',e=>{toast(e.type==='peer-unavailable'?'Stanza non trovata':'Errore di rete: '+e.type);cleanup();showP('pMenu');});}
function bind(c){c.on('open',()=>{if(net.role==='guest')c.send({t:'hello',ci:net.my,b:net.mb});});c.on('data',onNet);
 c.on('close',()=>{if(net.role&&(playing()||$('#pWait').classList.contains('show'))){toast('Connessione persa');cleanup();showP('pMenu');}});}
const FF=['ci','body','gone','x','z','y','ang','hp','st','sf','mv','mf','stun','stun0','hl','grd','wins','combo','cdmg','rage','raUsed','ko','ssd','wv','vy','isBlk','airT','walkT','winK'];
const r3=v=>typeof v==='number'?Math.round(v*1000)/1000:typeof v==='boolean'?(v?1:0):v;
function pack(){return{p:G.phase,pt:G.pt,tm:G.timer,r:G.round,rw:G.rw,y:G.why,n:G.n,hd:G.hold,c:G.cin?[G.cin.a,G.cin.t]:0,ft:G.fat?[G.fat.a,G.fat.t]:0,sl:G.slow,f:G.f.map(f=>FF.map(k=>r3(f[k]))),ev:G.ev.slice(-16)};}
function applyState(m){if(!G||G.mode!=='guest')return;G.phase=m.p;G.pt=m.pt;G.timer=m.tm;G.round=m.r;G.rw=m.rw;G.why=m.y;G.n=m.n;G.hold=m.hd;G.cin=m.c?{a:m.c[0],t:m.c[1]}:null;G.fat=m.ft?{a:m.ft[0],t:m.ft[1]}:null;G.slow=m.sl;
 m.f.forEach((a,i)=>{const f=G.f[i];FF.forEach((k,j)=>{f[k]=a[j];});f.rage=!!f.rage;f.raUsed=!!f.raUsed;f.ko=!!f.ko;});G.ev=m.ev;}
function onNet(m){
 if(net.role==='host'){
  if(m.t==='hello'){const st=rnd()*stageCount|0,bs=[net.mb,m.b==null?CHARS[m.ci].body:m.b];newGame('host',[net.my,m.ci],1,st,bs);conn.send({t:'start',c:[net.my,m.ci],s:st,b:bs});}
  else if(m.t==='in')net.gin=dec(m.i);else if(m.t==='rematch'){net.gr=true;checkRematch();}}
 else if(net.role==='guest'){if(m.t==='start')newGame('guest',m.c,1,m.s,m.b);else if(m.t==='s')applyState(m.s);else if(m.t==='rm')resetMatch();}}
function checkRematch(){if(net.hr&&net.gr){net.hr=net.gr=false;resetMatch();if(conn&&conn.open)conn.send({t:'rm'});}}
$('#bShare').onclick=async()=>{const url=location.origin+location.pathname+'?room='+net.code,txt='Sfidami a Rattopo Killara! Codice stanza: '+net.code;
 try{if(navigator.share){await navigator.share({title:'Rattopo Killara',text:txt,url});return;}}catch(e){}
 try{await navigator.clipboard.writeText(url);toast('Link copiato!');}catch(e){prompt('Copia questo link:',url);}};

/* ---------------- ciclo principale ---------------- */
let last=0,acc=0,ginAcc=0;
function tick(){const m=G.mode;
 if(m==='demo')step([aiIn(G.f[0],G.f[1]),aiIn(G.f[1],G.f[0])]);
 else if(m==='cpu'||m==='train')step([humanMe(),aiIn(G.f[1],G.f[0])]);
 else if(m==='local')step([humanLocal(0),humanLocal(1)]);
 else if(m==='host'){step([humanMe(),net.gin]);if(G.n%2===0&&conn&&conn.open)conn.send({t:'s',s:pack()});}
 else if(m==='guest'){ginAcc|=enc(humanMe());if(++G.sendT%2===0&&conn&&conn.open){conn.send({t:'in',i:ginAcc});ginAcc=0;}}
 if(G.mode==='demo'&&G.phase==='over'&&G.pt>200)startDemo();}
function loop(ts){requestAnimationFrame(loop);if(window.__rk&&window.__rk.manual)return;const dt=Math.min(100,ts-last);last=ts;acc+=dt;padMenu();
 if(ready&&G){const paused=G.paused||(panelOpen()&&G.mode!=='host'&&G.mode!=='guest'&&G.mode!=='demo'&&G.phase!=='over');
  if(!paused){while(acc>=16.667){acc-=16.667;if(G.slow>0&&G.mode!=='guest'){G.slow--;if((++G.slowc)%3)continue;}tick();clearLatch();if(!G)break;}}else{acc=0;clearLatch();}
  if(G.ev.length){for(const e of G.ev)if(e.id>RS.lastEv){RS.lastEv=e.id;handleEv(e);}}}
 const t=ts/16.67;if(ready){ensureFightersSafe();renderFrame(t);}drawHUD(t,playing());
 if(playing()){const my=G.mode==='guest'?1:0,f=G.f[my],fat=G.phase==='finish'&&!G.fat&&G.rw===my&&G.f[1-my].st==='dizzy',rb=$('.tb.ra');
  rb.classList.toggle('rdy',fat||!!(f.rage&&!f.raUsed&&G.phase==='fight'));rb.firstChild.textContent=fat?'FATAL':'RAGE';rb.lastChild.textContent=fat?'ITY':'ART';
  if(G.phase==='over'&&G.pt>40&&!overShown){overShown=true;showOver();}if(G.phase!=='over'&&overShown){overShown=false;if($('#pOver').classList.contains('show'))hideP();}}}
function ensureFightersSafe(){if(G)ensureFighters(G.f,ASSETS);}
requestAnimationFrame(loop);
window.__rk={get G(){return G;},step,aiIn,mk,newGame,fighters,camS,RS,
 run(inp,n){const r=[];for(let i=0;i<n;i++){const I=typeof inp==='function'?inp(i):inp;step([Object.assign(mk(),I[0]||{}),I[1]?Object.assign(mk(),I[1]):aiIn(G.f[1],G.f[0])]);if(G.ev.length){for(const e of G.ev)if(e.id>RS.lastEv){RS.lastEv=e.id;handleEv(e);}}}return G.f.map(f=>[f.st,f.mv,f.hp,+f.x.toFixed(2),+f.z.toFixed(2),+f.y.toFixed(2)]);},
 frame(n){for(let i=0;i<(n||1);i++)renderFrame(performance.now()/16.67);drawHUD(performance.now()/16.67,playing());}};
