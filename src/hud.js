/* HUD 2D sopra la grafica 3D: barre della vita, timer, round, combo, scritte, banner */
import {CHARS,HPMAX,WINS} from './data.js';
import {G} from './sim.js';
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
let hc,hx,HS=1;export const portraits=CHARS.map(c=>{const i=new Image();i.src=c.cut;return i;});
export function initHUD(canvas){hc=canvas;hx=hc.getContext('2d');fitHUD();addEventListener('resize',fitHUD);}
function fitHUD(){const hp=Math.min(devicePixelRatio||1,2);hc.width=Math.round(innerWidth*hp);hc.height=Math.round(innerHeight*hp);HS=hc.height/540;}
export const RS={side:[{},{}],pops:[],ban:null,flash:0,lastEv:0,red:0,
 reset(){this.side=[{disp:HPMAX,cmb:null,hold:0},{disp:HPMAX,cmb:null,hold:0}];this.pops=[];this.ban=null;this.flash=0;this.lastEv=0;this.red=0;}};RS.reset();
export function banner(txt,dur,sty,sub){RS.ban={txt,t:0,dur,sty:sty||'gold',sub:sub||''};}
export function pop(txt,side,col){if(RS.pops.some(p=>p.txt===txt&&p.side===side&&p.t<20))return;RS.pops.push({txt,side,t:0,col:col||'#ffd23f'});if(RS.pops.length>4)RS.pops.shift();}
const FONT=(w,s)=>`${w} ${s}px Teko, Impact, 'Arial Narrow', sans-serif`;
function para(c,x,y,w,h,k){c.beginPath();c.moveTo(x+k,y);c.lineTo(x+w+k,y);c.lineTo(x+w,y+h);c.lineTo(x,y+h);c.closePath();}
function bigText(c,x,y,txt,size,sty,sc,alpha){c.save();c.globalAlpha=alpha==null?1:alpha;c.translate(x,y);c.scale(sc||1,sc||1);c.transform(1,0,-.2,1,0,0);
 c.font=FONT(700,size);c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';const g=c.createLinearGradient(0,-size*.42,0,size*.36);
 if(sty==='red'){g.addColorStop(0,'#fff');g.addColorStop(.42,'#ffb0a0');g.addColorStop(.5,'#ff2a10');g.addColorStop(.56,'#7a0400');g.addColorStop(1,'#ff6a3a');}
 else if(sty==='blue'){g.addColorStop(0,'#fff');g.addColorStop(.45,'#bcd0ff');g.addColorStop(.52,'#2f6bff');g.addColorStop(1,'#a0c0ff');}
 else{g.addColorStop(0,'#fff');g.addColorStop(.42,'#fff0a8');g.addColorStop(.5,'#ffb300');g.addColorStop(.56,'#8a4800');g.addColorStop(1,'#ffd76a');}
 c.shadowColor='rgba(0,0,0,.6)';c.shadowBlur=size*.2;c.lineWidth=size*.14;c.strokeStyle='#000';c.strokeText(txt,0,0);c.shadowBlur=0;c.lineWidth=size*.05;c.strokeStyle=sty==='red'?'#ffdd88':'#fff6d0';c.strokeText(txt,0,0);c.fillStyle=g;c.fillText(txt,0,0);c.restore();}
export function drawHUD(t,playing){const c=hx;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,hc.width,hc.height);
 // vignettatura cinematografica sempre presente
 const s=HS,Wl=hc.width/s,cx=Wl/2;c.setTransform(s,0,0,s,0,0);
 const vg=c.createRadialGradient(cx,270,Wl*.32,cx,270,Wl*.72);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=vg;c.fillRect(0,0,Wl,540);
 if(!playing||!G)return;
 if(G.cin||G.fat){c.fillStyle='rgba(0,0,0,.92)';c.fillRect(0,0,Wl,58);c.fillRect(0,540-58,Wl,58);}
 if(G.cin){c.fillStyle='rgba(255,40,10,.1)';c.fillRect(0,58,Wl,540-116);bigText(c,cx,502,'RAGE ART',44,'red',1,.9);}
 const bw=Math.min(420,Wl/2-112),bh=22,y0=22;
 if(!G.cin&&!G.fat)G.f.forEach((f,i)=>{const L=!i,sd=RS.side[i],x0=L?cx-58-bw:cx+58;
  if(f.hp>=sd.disp){sd.disp=f.hp;sd.hold=0;}else{if(++sd.hold>30)sd.disp=Math.max(f.hp,sd.disp-Math.max(.35,(sd.disp-f.hp)*.06));}
  c.save();para(c,x0-7,y0-6,bw+14,bh+12,L?11:-11);c.fillStyle='rgba(0,0,0,.65)';c.fill();c.lineWidth=2;
  const rg=f.rage&&!f.raUsed;c.strokeStyle=rg?`rgba(255,${60+60*Math.sin(t*.3)|0},40,1)`:'rgba(255,255,255,.45)';if(rg){c.shadowColor='#ff2010';c.shadowBlur=16+8*Math.sin(t*.3);}c.stroke();c.shadowBlur=0;
  para(c,x0,y0,bw,bh,L?7:-7);c.clip();c.fillStyle='#240a0c';c.fillRect(x0-12,y0,bw+24,bh);
  const v=clamp(f.hp/HPMAX,0,1),dv=clamp(sd.disp/HPMAX,0,1),seg=(p,st)=>{const w=bw*p;c.fillStyle=st;if(L)c.fillRect(x0-12,y0,w+12,bh);else c.fillRect(x0+bw-w,y0,w+12,bh);};
  seg(dv,'#ff3a1c');const g=c.createLinearGradient(0,y0,0,y0+bh);
  if(rg){g.addColorStop(0,'#ffd0c0');g.addColorStop(.45,'#ff4a2a');g.addColorStop(1,'#9a0c00');}else if(v<.3){g.addColorStop(0,'#fff0c0');g.addColorStop(.45,'#ffb020');g.addColorStop(1,'#b05000');}
  else{g.addColorStop(0,'#fffde0');g.addColorStop(.4,'#f6ee3a');g.addColorStop(1,'#b89000');}
  seg(v,g);c.fillStyle='rgba(255,255,255,.4)';c.fillRect(x0-12,y0+2,bw+24,3);c.fillStyle='rgba(0,0,0,.25)';c.fillRect(x0-12,y0+bh-5,bw+24,5);c.restore();
  const px=L?x0-40:x0+bw+40,py=y0+bh/2+6,pr=30,im=portraits[f.ci];
  c.save();c.beginPath();c.arc(px,py,pr,0,7);c.fillStyle=L?'#4a0a0e':'#0a1a4a';c.fill();c.clip();if(im.complete&&im.naturalWidth)c.drawImage(im,px-pr*1.05,py-pr*1.25,pr*2.1,pr*2.6);c.restore();
  c.lineWidth=3;c.strokeStyle=L?'#e3262f':'#2f6bff';c.beginPath();c.arc(px,py,pr,0,7);c.stroke();
  c.font=FONT(600,24);c.textAlign=L?'left':'right';c.textBaseline='alphabetic';const nm=CHARS[f.ci].name.toUpperCase(),nx=L?x0+6:x0+bw-6;
  c.fillStyle='#000';c.fillText(nm,nx+2,y0+bh+27);c.fillStyle='#fff';c.fillText(nm,nx,y0+bh+25);
  if(rg){c.font=FONT(700,22);c.fillStyle=Math.sin(t*.3)>0?'#ff3a1c':'#ffd23f';c.textAlign=L?'right':'left';c.fillText('RAGE',L?x0+bw-4:x0+4,y0+bh+25);}
  for(let k=0;k<WINS;k++){const rx=L?x0+bw-60-k*22:x0+60+k*22,ry=y0+bh+16;c.save();c.translate(rx,ry);c.rotate(Math.PI/4);c.fillStyle=k<f.wins?'#ffd23f':'rgba(255,255,255,.18)';c.fillRect(-6,-6,12,12);c.strokeStyle='#000';c.lineWidth=2;c.strokeRect(-6,-6,12,12);c.restore();}
  if(sd.cmb&&sd.cmb.t<110){const cb=sd.cmb;cb.t++;const a=cb.t>85?(110-cb.t)/25:1,sx=L?Math.min(Wl*.16,180):Wl-Math.min(Wl*.16,180),sl=Math.min(1,cb.t/5);
   c.save();c.globalAlpha=a;c.translate(sx+(L?-1:1)*(1-sl)*60,215);c.textAlign='center';c.font=FONT(700,66);c.lineWidth=7;c.strokeStyle='#000';c.lineJoin='round';
   c.strokeText(cb.n,0,0);const gg=c.createLinearGradient(0,-40,0,10);gg.addColorStop(0,'#fff');gg.addColorStop(1,L?'#ff7a5a':'#7ab0ff');c.fillStyle=gg;c.fillText(cb.n,0,0);
   c.font=FONT(700,28);c.strokeText('HITS',0,26);c.fillStyle='#fff';c.fillText('HITS',0,26);c.font=FONT(600,22);c.strokeText(cb.d+' DANNI',0,50);c.fillStyle='#ffd23f';c.fillText(cb.d+' DANNI',0,50);c.restore();}});
 if(!G.cin&&!G.fat){c.save();c.translate(cx,y0+18);c.beginPath();for(let k=0;k<6;k++){const a=k/6*Math.PI*2+Math.PI/6;c.lineTo(Math.cos(a)*44,Math.sin(a)*34);}c.closePath();
  c.fillStyle='rgba(0,0,0,.78)';c.fill();c.lineWidth=3;c.strokeStyle='#ffd23f';c.stroke();c.font=FONT(700,52);c.textAlign='center';c.textBaseline='middle';
  c.fillStyle=G.timer<=10&&G.mode!=='train'?(Math.sin(t*.4)>0?'#ff3a1c':'#fff'):'#fff';c.fillText(G.mode==='train'?'∞':Math.max(0,G.timer),0,5);c.restore();
  if(G.mode==='train'){c.font=FONT(600,20);c.textAlign='center';c.fillStyle='#cfd3e6';c.fillText('ALLENAMENTO',cx,y0+70);}
  else if(G.mode==='host'||G.mode==='guest'){c.font=FONT(600,18);c.textAlign='center';c.fillStyle='#9aa3c4';c.fillText('ONLINE',cx,y0+68);}}
 RS.pops=RS.pops.filter(p=>++p.t<70);RS.pops.forEach((p,k)=>{const a=p.t>50?(70-p.t)/20:1,sl=Math.min(1,p.t/6),x=p.side?Wl-Math.min(Wl*.2,230):Math.min(Wl*.2,230);
  c.save();c.globalAlpha=a;c.translate(x+(p.side?1:-1)*(1-sl)*80,140+k*36);c.transform(1,0,-.2,1,0,0);c.font=FONT(700,36);c.textAlign='center';c.lineWidth=6;c.strokeStyle='#000';c.lineJoin='round';c.strokeText(p.txt,0,0);c.fillStyle=p.col;c.fillText(p.txt,0,0);c.restore();});
 const b=RS.ban;if(b){b.t++;if(b.t>b.dur)RS.ban=null;else{const tin=Math.min(1,b.t/8),out=b.t>b.dur-10?(b.dur-b.t)/10:1,big=b.sty==='ko',sc=big?1+Math.max(0,(12-b.t)/12)*1.4:1+(1-tin)*.8;
  c.save();c.globalAlpha=out*.75;const bg=c.createLinearGradient(0,0,Wl,0);bg.addColorStop(0,'rgba(0,0,0,0)');bg.addColorStop(.25,'rgba(0,0,0,.75)');bg.addColorStop(.75,'rgba(0,0,0,.75)');bg.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=bg;const bh2=big?118:84;c.fillRect(0,250-bh2/2,Wl*tin,bh2);c.restore();
  bigText(c,cx,252,b.txt,big?120:b.sty==='fight'?86:66,big||b.sty==='fight'||b.sty==='red'?'red':b.sty==='blue'?'blue':'gold',sc,out);
  if(b.sub){c.save();c.globalAlpha=out;c.font=FONT(600,30);c.textAlign='center';c.fillStyle='#fff';c.fillText(b.sub,cx,330);c.restore();}}}
 if(RS.flash>0){c.fillStyle=`rgba(255,255,255,${RS.flash})`;c.fillRect(0,0,Wl,540);RS.flash*=.86;if(RS.flash<.02)RS.flash=0;}
 if(RS.red>0){const g=c.createRadialGradient(cx,270,Wl*.25,cx,270,Wl*.7);g.addColorStop(0,'rgba(255,0,0,0)');g.addColorStop(1,`rgba(255,20,0,${RS.red*.5})`);c.fillStyle=g;c.fillRect(0,0,Wl,540);RS.red*=.95;}}
