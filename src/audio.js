/* Audio generato: colpi, parate, K.O., musica di sottofondo e annunciatore (sintesi vocale) */
import {G} from './sim.js';
let AC=null,MG=null,NB=null,REV=null;
export const snd={on:true,music:true};
try{const s=localStorage.getItem('rk_snd');if(s)[snd.on,snd.music]=JSON.parse(s);}catch(e){}
const rnd=Math.random;
export function ac(){if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();MG=AC.createGain();MG.gain.value=.8;
  const comp=AC.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=4;MG.connect(comp);comp.connect(AC.destination);
  NB=AC.createBuffer(1,AC.sampleRate*.8,AC.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=rnd()*2-1;
  // riverbero corto da arena
  REV=AC.createConvolver();const L=AC.sampleRate*1.4,ir=AC.createBuffer(2,L,AC.sampleRate);for(let c=0;c<2;c++){const x=ir.getChannelData(c);for(let i=0;i<L;i++)x[i]=(rnd()*2-1)*Math.pow(1-i/L,3);}
  REV.buffer=ir;const rg=AC.createGain();rg.gain.value=.22;REV.connect(rg);rg.connect(comp);}
 if(AC.state==='suspended')AC.resume();return AC;}
function noise(t,dur,type,fq,q,vol,dest,rev){const s=AC.createBufferSource();s.buffer=NB;const f=AC.createBiquadFilter();f.type=type;f.frequency.setValueAtTime(fq,t);f.Q.value=q;const g=AC.createGain();
 g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f);f.connect(g);g.connect(dest||MG);if(rev)g.connect(REV);s.start(t);s.stop(t+dur+.02);return f;}
function tone(t,type,f0,f1,dur,vol,dest,rev){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(1,f1),t+dur);
 g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g);g.connect(dest||MG);if(rev)g.connect(REV);o.start(t);o.stop(t+dur+.02);}
export function sfx(k,p){if(!snd.on||(G&&G.mode==='demo'))return;try{ac();const t=AC.currentTime;p=p||1;
 switch(k){
  case 'hit':tone(t,'sine',120+60*p,36,.18,.85,0,1);noise(t,.09+.03*p,'bandpass',1500+rnd()*500,1.2,.95,0,1);noise(t,.035,'highpass',5000,.7,.4);tone(t,'square',420,90,.05,.12);break;
  case 'heavy':tone(t,'sine',110,26,.42,1.1,0,1);noise(t,.3,'lowpass',1400,1,1.1,0,1);noise(t,.08,'bandpass',2600,1,.8);tone(t,'sawtooth',160,40,.12,.25);break;
  case 'blk':noise(t,.08,'highpass',2400,1,.6,0,1);tone(t,'square',1200,620,.05,.12);noise(t,.04,'bandpass',800,2,.4);break;
  case 'sw':{const f=noise(t,.18,'bandpass',600,1.6,p>1?.34:.22);f.frequency.exponentialRampToValueAtTime(2800,t+.16);break;}
  case 'ko':tone(t,'sine',95,22,1.3,1.1,0,1);noise(t,1,'lowpass',700,1,1.1,0,1);noise(t,.2,'bandpass',2200,1,.6);break;
  case 'land':tone(t,'sine',80,28,.25,.8,0,1);noise(t,.2,'lowpass',500,1,.7,0,1);break;
  case 'ui':tone(t,'triangle',700,1000,.06,.18);break;
  case 'ok':tone(t,'triangle',520,1040,.14,.25);tone(t+.05,'triangle',780,1560,.12,.18);break;
  case 'ra':tone(t,'sawtooth',55,420,.7,.24,0,1);noise(t,.7,'bandpass',500,2,.55,0,1).frequency.exponentialRampToValueAtTime(3000,t+.6);break;
  case 'rage':tone(t,'sawtooth',80,160,.5,.16,0,1);noise(t,.5,'lowpass',400,1,.4);break;
  case 'brk':tone(t,'square',1300,700,.12,.18);noise(t,.1,'highpass',3000,1,.4);break;
  case 'fire':noise(t,.4,'lowpass',300,1,.05);break;
 }}catch(e){}}
/* musica di sottofondo generata */
const MUS={on:false,next:0,step:0,tm:null,g:null};
const BASS=[45,45,57,45,45,57,45,55,45,45,57,45,48,48,50,52],PROG=[0,0,-4,-2],LEAD=[69,72,76,72,69,72,76,79,77,76,72,69,71,72,74,76];
const hz=n=>440*Math.pow(2,(n-69)/12);
export function musStart(){if(!snd.music||!snd.on||MUS.on)return;try{ac();}catch(e){return;}MUS.on=true;MUS.next=AC.currentTime+.08;MUS.g=AC.createGain();MUS.g.gain.value=.17;MUS.g.connect(MG);MUS.tm=setInterval(musTick,40);}
export function musStop(){MUS.on=false;clearInterval(MUS.tm);if(MUS.g){const g=MUS.g;try{g.gain.setTargetAtTime(0,AC.currentTime,.1);setTimeout(()=>g.disconnect(),500);}catch(e){}MUS.g=null;}}
export const musOn=()=>MUS.on;
function musTick(){if(!MUS.on||!MUS.g)return;const D=MUS.g,spb=60/140/4;
 while(MUS.next<AC.currentTime+.16){const s=MUS.step%16,bar=(MUS.step>>4)%8,t=MUS.next,tr=PROG[bar%4];
  if(s%4===0||(s===14&&bar%2))tone(t,'sine',160,42,.22,.9,D);
  if(s===4||s===12){noise(t,.16,'bandpass',1900,.8,.55,D);tone(t,'triangle',230,160,.07,.25,D);}
  noise(t,s%2?.035:.06,'highpass',7500,1,s%4===2?.28:.14,D);
  {const o=AC.createOscillator(),f=AC.createBiquadFilter(),g=AC.createGain();o.type='sawtooth';o.frequency.value=hz(BASS[s]+tr);f.type='lowpass';f.frequency.setValueAtTime(900,t);f.frequency.exponentialRampToValueAtTime(220,t+spb);g.gain.setValueAtTime(.32,t);g.gain.exponentialRampToValueAtTime(.001,t+spb*.95);o.connect(f);f.connect(g);g.connect(D);o.start(t);o.stop(t+spb);}
  if(bar>=4&&s%2===0){const o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=hz(LEAD[(s+bar*3)%16]+tr);g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+spb*1.8);o.connect(g);g.connect(D);o.start(t);o.stop(t+spb*2);}
  MUS.next+=spb;MUS.step++;}}
let voice=null;
export function say(txt){if(!snd.on||!('speechSynthesis' in window)||(G&&G.mode==='demo'))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang='en-US';u.rate=.85;u.pitch=.3;u.volume=1;
 const vs=speechSynthesis.getVoices();voice=voice||vs.find(v=>/^en/i.test(v.lang)&&/(male|daniel|alex|fred|guy|david|mark)/i.test(v.name))||vs.find(v=>/^en/i.test(v.lang));if(voice)u.voice=voice;speechSynthesis.speak(u);}catch(e){}}
export function saveSnd(){try{localStorage.setItem('rk_snd',JSON.stringify([snd.on,snd.music]));}catch(e){}}
