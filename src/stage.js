/* Arene 3D procedurali nei luoghi della Lunigiana, con texture PBR generate (colore, rilievo, ruvidità) */
import * as THREE from 'three';
const rnd=Math.random;
let seed=1;const srnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
function canvas(s,h){const c=document.createElement('canvas');c.width=s;c.height=h||s;return c;}
function tex(c,rep,srgb){const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;if(rep)t.repeat.set(rep,rep);t.anisotropy=8;if(srgb)t.colorSpace=THREE.SRGBColorSpace;return t;}
// mappa normale dal rilievo (Sobel)
function normalFrom(hc,str){const s=hc.width,t=hc.height,h=hc.getContext('2d').getImageData(0,0,s,t).data,c=canvas(s,t),x=c.getContext('2d'),o=x.createImageData(s,t),d=o.data;
 const H=(i,j)=>h[(((j+t)%t)*s+((i+s)%s))*4]/255;
 for(let j=0;j<t;j++)for(let i=0;i<s;i++){const dx=(H(i-1,j)-H(i+1,j))*str,dy=(H(i,j-1)-H(i,j+1))*str,l=Math.hypot(dx,dy,1),k=(j*s+i)*4;
  d[k]=(dx/l*.5+.5)*255;d[k+1]=(dy/l*.5+.5)*255;d[k+2]=(1/l*.5+.5)*255;d[k+3]=255;}
 x.putImageData(o,0,0);return c;}
function noiseDots(x,s,n,c0,c1,r0,r1,a){for(let i=0;i<n;i++){x.globalAlpha=a*srnd();x.fillStyle=srnd()<.5?c0:c1;const r=r0+srnd()*(r1-r0);x.beginPath();x.arc(srnd()*s,srnd()*s,r,0,7);x.fill();}x.globalAlpha=1;}
function textCanvas(txt,w,h,col,font){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#000';x.fillRect(0,0,w,h);
 x.font=font;x.textAlign='center';x.textBaseline='middle';x.shadowColor=col;x.shadowBlur=h*.12;x.fillStyle=col;x.fillText(txt,w/2,h/2);x.shadowBlur=0;x.fillStyle='#fff';x.globalAlpha=.75;x.fillText(txt,w/2,h/2);return c;}
function skyTex(stops){const c=document.createElement('canvas');c.width=4;c.height=512;const x=c.getContext('2d'),g=x.createLinearGradient(0,0,0,512);stops.forEach(s=>g.addColorStop(s[0],s[1]));x.fillStyle=g;x.fillRect(0,0,4,512);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
export const glowTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);
 g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.25,'rgba(255,255,255,.7)');g.addColorStop(.6,'rgba(255,255,255,.12)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
const flameTex=(()=>{const c=document.createElement('canvas');c.width=64;c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(32,90,2,32,80,60);
 g.addColorStop(0,'rgba(255,250,220,1)');g.addColorStop(.25,'rgba(255,190,80,.9)');g.addColorStop(.6,'rgba(255,80,10,.35)');g.addColorStop(1,'rgba(120,0,0,0)');x.fillStyle=g;x.beginPath();x.ellipse(32,78,26,50,0,0,7);x.fill();
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();

export const STAGES=[
 {name:'AULLA · FORTEZZA DELLA BRUNELLA',build:buildBrunella},
 {name:'PALLERONE · PIAZZA DEL CASTELLO',build:buildPallerone},
 {name:'AULLA · GRETO DEL MAGRA',build:buildMagra},
 {name:'PONTREMOLI · CASTELLO DEL PIAGNARO',build:buildPiagnaro},
];
const M=(o)=>new THREE.MeshStandardMaterial(o);
const sr=(a,b)=>a+(b-a)*srnd();
function ctex(w,h,draw,o){o=o||{};const c=canvas(w,h),x=c.getContext('2d');draw(x,w,h);const t=new THREE.CanvasTexture(c);if(o.srgb!==false)t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;
 if(o.rep){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(o.rep[0],o.rep[1]);}return t;}
function addSky(grp,stops,stars){const sky=new THREE.Mesh(new THREE.SphereGeometry(400,48,24),new THREE.MeshBasicMaterial({map:skyTex(stops),side:THREE.BackSide,fog:false,depthWrite:false}));grp.add(sky);
 if(stars){const g=new THREE.BufferGeometry(),p=[];for(let i=0;i<1500;i++){const a=rnd()*6.28,e=.05+rnd()*1.4,r=380;p.push(Math.cos(a)*Math.cos(e)*r,Math.sin(e)*r,Math.sin(a)*Math.cos(e)*r);}
  g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));grp.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:1.4,map:glowTex,transparent:true,depthWrite:false,fog:false,blending:THREE.AdditiveBlending})));}}
function addFloor(grp,pbr,rep,size,extra){for(const k of['map','normalMap','roughnessMap'])if(pbr[k])pbr[k].repeat.set(rep,rep);
 const m=M(Object.assign({map:pbr.map,normalMap:pbr.normalMap,roughnessMap:pbr.roughnessMap,roughness:1,metalness:0,normalScale:new THREE.Vector2(1,1),envMapIntensity:1},extra||{}));
 const f=new THREE.Mesh(new THREE.PlaneGeometry(size,size),m);f.rotation.x=-Math.PI/2;f.receiveShadow=true;grp.add(f);return f;}
function fireAt(st,grp,x,y,z,s){const L=new THREE.PointLight(0xff7a2a,14*s,14,1.7);L.position.set(x,y+.6,z);grp.add(L);
 const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0xff8a30,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));glow.position.set(x,y+.5,z);glow.scale.setScalar(3*s);grp.add(glow);
 const fl=[];for(let i=0;i<9;i++){const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:flameTex,color:0xffffff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));sp.position.set(x,y,z);grp.add(sp);fl.push({sp,ph:rnd()*6.28,sp0:.6+rnd()*.5});}
 st.fires.push({L,glow,fl,x,y,z,s,base:14*s});}
function updFires(st,t){for(const F of st.fires){const k=.85+.15*Math.sin(t*.25+F.x)+.1*(rnd()-.5);F.L.intensity=F.base*k;F.glow.scale.setScalar(3*F.s*k);
 for(const q of F.fl){const u=((t*.035*q.sp0+q.ph)%1);q.sp.position.set(F.x+Math.sin(q.ph*3+t*.1)*.12*F.s,F.y+u*1.1*F.s,F.z+Math.cos(q.ph*2+t*.1)*.12*F.s);
  const sc=(1-u)*.9*F.s+.15;q.sp.scale.set(sc*.7,sc*1.3,1);q.sp.material.opacity=Math.min(1,(1-u)*1.4);}}}
function particles(grp,n,area,h,col,size,add){const g=new THREE.BufferGeometry(),p=new Float32Array(n*3),v=new Float32Array(n);
 for(let i=0;i<n;i++){p[i*3]=(rnd()-.5)*area;p[i*3+1]=rnd()*h;p[i*3+2]=(rnd()-.5)*area;v[i]=rnd();}g.setAttribute('position',new THREE.BufferAttribute(p,3));
 const pts=new THREE.Points(g,new THREE.PointsMaterial({color:col,size,map:glowTex,transparent:true,depthWrite:false,blending:add?THREE.AdditiveBlending:THREE.NormalBlending}));grp.add(pts);return{pts,p,v,n,h,area};}

/* ---------- materiali e texture comuni ---------- */
// lastricato di pietra (arenaria) con colori a scelta
function flagstones(o){seed=o.seed||11;const S=1024,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 c.fillStyle=o.joint;c.fillRect(0,0,S,S);h.fillStyle='#202020';h.fillRect(0,0,S,S);r.fillStyle='#e8e8e8';r.fillRect(0,0,S,S);
 const rows=o.rows||6;for(let j=0;j<rows;j++){const y=j*S/rows,hh=S/rows;let x=-srnd()*S/4;
  while(x<S){const w=S/rows*(1+srnd()*1.2),g=5,v=o.v0+srnd()*o.dv|0,t=srnd()*o.warm|0;
   for(const ox of[0,S]){c.fillStyle=`rgb(${v+t},${v+t*.4|0},${v-t*.6|0})`;c.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);h.fillStyle=`rgb(${170+srnd()*50|0},0,0)`;h.fillStyle=`hsl(0,0%,${66+srnd()*20|0}%)`;h.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);
    r.fillStyle=`hsl(0,0%,${70+srnd()*20|0}%)`;r.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);}x+=w;}}
 for(let k=0;k<50;k++){let x=srnd()*S,y=srnd()*S;c.strokeStyle='rgba(20,16,12,.5)';h.strokeStyle='#404040';c.lineWidth=h.lineWidth=1+srnd()*1.5;c.beginPath();h.beginPath();c.moveTo(x,y);h.moveTo(x,y);
  for(let q=0;q<5;q++){x+=(srnd()-.5)*50;y+=(srnd()-.5)*50;c.lineTo(x,y);h.lineTo(x,y);}c.stroke();h.stroke();}
 noiseDots(c,S,12000,o.d0,o.d1,.5,2.2,.35);noiseDots(h,S,9000,'#909090','#e0e0e0',.5,2,.3);
 if(o.moss)noiseDots(c,S,1500,'#4a5a30','#3a4a28',2,7,.25);
 for(let k=0;k<(o.wet||0);k++){const x=srnd()*S,y=srnd()*S,R=40+srnd()*90,g=r.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,'rgba(40,40,40,1)');g.addColorStop(1,'rgba(40,40,40,0)');r.fillStyle=g;r.fillRect(x-R,y-R,2*R,2*R);}
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,6)),roughnessMap:tex(rou)};}
// "risseu": mosaico di ciottoli bianchi e neri alla ligure (sagrato di San Bartolomeo)
function floorRisseu(){seed=5;const S=MOB?1024:2048,R=S/2,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 c.fillStyle='#b8b0a0';c.fillRect(0,0,S,S);h.fillStyle='#303030';h.fillRect(0,0,S,S);r.fillStyle='#f0f0f0';r.fillRect(0,0,S,S);
 const m=S/17,step=S/(MOB?200:260);
 const pat=(x,y)=>{const dx=x-R,dy=y-R,rr=Math.hypot(dx,dy)/m,a=Math.atan2(dy,dx);
  if(rr>8.1){const u=(dx+dy)/m,v=(dx-dy)/m,fu=Math.abs(((u%2.4)+2.4)%2.4-1.2),fv=Math.abs(((v%2.4)+2.4)%2.4-1.2);return[fu<.16||fv<.16?1:0,Math.PI/4+(fu<fv?0:Math.PI/2)];}
  const tg=a+Math.PI/2;
  if(rr>7.7)return[1,tg];if(rr>7.45)return[0,tg];
  if(rr>6.9)return[rr-6.9<.28+.22*Math.sin(a*24)?1:0,tg];
  if(rr>6.6)return[0,tg];if(rr>6.35)return[1,tg];
  if(rr>3.9){const pet=Math.abs(Math.cos(a*8)),lim=1-(rr-3.9)/2.45;return[pet>lim*.9+.08&&pet<lim+.12?1:0,a];}
  if(rr>3.55)return[1,tg];if(rr>3.3)return[0,tg];
  const star=1.2+1.9*Math.pow(Math.abs(Math.cos(a*4)),3);return[rr<star&&rr>star-.38?1:rr<.5?1:0,tg];};
 for(let y=0;y<S;y+=step)for(let x=((y/step)%2)*step/2;x<S;x+=step){const px=x+(srnd()-.5)*step*.35,py=y+(srnd()-.5)*step*.35,[dark,ang]=pat(px,py),ca=Math.cos(ang),sa=Math.sin(ang),rx=step*.62,ry=step*.36;
  const v=dark?52+srnd()*24|0:206+srnd()*30|0,t=srnd()*10|0;
  for(const ctx of[c,h,r])ctx.setTransform(ca,sa,-sa,ca,px,py);
  c.fillStyle=`rgb(${v+t},${v+t*.6|0},${v})`;c.beginPath();c.ellipse(0,0,rx,ry,0,0,7);c.fill();
  c.fillStyle=dark?'rgba(255,255,255,.05)':'rgba(255,255,255,.12)';c.beginPath();c.ellipse(-rx*.2,-ry*.25,rx*.5,ry*.4,0,0,7);c.fill();
  h.fillStyle='#a0a0a0';h.beginPath();h.ellipse(0,0,rx,ry,0,0,7);h.fill();h.fillStyle='#e0e0e0';h.beginPath();h.ellipse(0,0,rx*.6,ry*.55,0,0,7);h.fill();
  r.fillStyle='#707070';r.beginPath();r.ellipse(0,0,rx,ry,0,0,7);r.fill();}
 for(const ctx of[c,h,r])ctx.setTransform(1,0,0,1,0,0);
 const t=tex(col,0,1);t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;return{map:t,normalMap:tex(normalFrom(hei,2.5)),roughnessMap:tex(rou)};}
// ghiaia di fiume
function floorGravel(){seed=9;const S=1024,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 c.fillStyle='#6e675c';c.fillRect(0,0,S,S);h.fillStyle='#404040';h.fillRect(0,0,S,S);r.fillStyle='#e6e6e6';r.fillRect(0,0,S,S);
 noiseDots(c,S,30000,'#5a544a','#8a8274',.6,2,.6);
 const pal=[[150,146,138],[178,170,156],[120,116,110],[200,194,182],[140,124,104],[96,92,88],[170,150,120]];
 for(let i=0;i<7000;i++){const x=srnd()*S,y=srnd()*S,rx=3+srnd()*srnd()*14,ry=rx*(.55+srnd()*.4),a=srnd()*3.14,p=pal[srnd()*pal.length|0],k=.8+srnd()*.35;
  const offs=[[0,0]];if(x<20)offs.push([S,0]);if(x>S-20)offs.push([-S,0]);if(y<20)offs.push([0,S]);if(y>S-20)offs.push([0,-S]);
  for(const[ox,oy]of offs){
   c.fillStyle=`rgb(${p[0]*k|0},${p[1]*k|0},${p[2]*k|0})`;c.beginPath();c.ellipse(x+ox,y+oy,rx,ry,a,0,7);c.fill();
   c.fillStyle='rgba(255,255,255,.18)';c.beginPath();c.ellipse(x+ox-rx*.2,y+oy-ry*.3,rx*.5,ry*.4,a,0,7);c.fill();
   h.fillStyle='#a8a8a8';h.beginPath();h.ellipse(x+ox,y+oy,rx,ry,a,0,7);h.fill();h.fillStyle='#e8e8e8';h.beginPath();h.ellipse(x+ox,y+oy,rx*.55,ry*.55,a,0,7);h.fill();
   r.fillStyle='#b8b8b8';r.beginPath();r.ellipse(x+ox,y+oy,rx,ry,a,0,7);r.fill();}}
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,5)),roughnessMap:tex(rou)};}
// increspature dell'acqua (onde che si ripetono senza cuciture)
function waterNormals(){seed=13;const S=256,hc=canvas(S),x=hc.getContext('2d'),im=x.createImageData(S,S),d=im.data,W=[];
 for(let k=0;k<9;k++)W.push([(srnd()*8|0)-4||1,(srnd()*8|0)-4||2,srnd()*6.28,.4+srnd()]);
 for(let j=0;j<S;j++)for(let i=0;i<S;i++){let v=0;for(const[a,b,p,amp]of W)v+=Math.sin((a*i+b*j)/S*6.283+p)*amp;const q=(j*S+i)*4,g=128+v*14;d[q]=d[q+1]=d[q+2]=g;d[q+3]=255;}
 x.putImageData(im,0,0);return tex(normalFrom(hc,3));}
const STONE_WARM={joint:'#4a4038',v0:112,dv:45,warm:22,d0:'#6a5a4a',d1:'#c8b8a0'};
function wallTex(o){seed=o.seed||21;const S=512,col=canvas(S),hei=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d');c.fillStyle=o.joint;c.fillRect(0,0,S,S);h.fillStyle='#303030';h.fillRect(0,0,S,S);
 // pietrame irregolare a corsi (muri della Lunigiana)
 let y=0;while(y<S){const hh=14+srnd()*22;let x=-srnd()*30;while(x<S){const w=hh*(1.2+srnd()*1.8),v=o.v0+srnd()*o.dv|0,t=srnd()*o.warm|0;
   for(const ox of[0,-S,S]){c.fillStyle=`rgb(${v+t},${v+t*.5|0},${v-t*.5|0})`;c.beginPath();c.roundRect(x+ox+2,y+2,w-4,hh-4,4);c.fill();h.fillStyle=`hsl(0,0%,${60+srnd()*25|0}%)`;h.beginPath();h.roundRect(x+ox+2,y+2,w-4,hh-4,5);h.fill();}x+=w;}y+=hh;}
 noiseDots(c,S,6000,o.d0||'#3a3430','#a09080',.5,2,.3);noiseDots(h,S,4000,'#8a8a8a','#dadada',.5,2,.3);
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,5))};}
function stoneMat(o,rx,ry){const w=wallTex(o);w.map.repeat.set(rx,ry);w.normalMap.repeat.set(rx,ry);return M({map:w.map,normalMap:w.normalMap,roughness:.93,color:o.tint||0xffffff});}
let ROOF=null;
function roofMat(){if(ROOF)return ROOF;seed=31;const t=ctex(128,128,(x)=>{x.fillStyle='#7a3a22';x.fillRect(0,0,128,128);
  for(let row=0;row<2;row++)for(let i=0;i<4;i++){const v=srnd()*40-20,g=x.createLinearGradient(i*32,0,i*32+32,0);g.addColorStop(0,`rgb(${110+v},${52+v*.5},${34})`);g.addColorStop(.5,`rgb(${178+v},${92+v*.6},${58})`);g.addColorStop(1,`rgb(${96+v},${44+v*.4},${30})`);
   x.fillStyle=g;x.fillRect(i*32+2,row*64,28,62);x.fillStyle='rgba(30,10,5,.5)';x.fillRect(i*32+2,row*64+58,28,5);}
  noiseDots(x,128,300,'#2a2a1a','#5a5a30',.5,2.5,.4);},{rep:[1,1]});
 return ROOF=M({map:t,roughness:.85});}
// tetto a due falde (coppi), uv in metri
function roofGeo(w,d,rh,ov){const x=w/2+ov,z=d/2+ov,sl=Math.hypot(z,rh),g=new THREE.BufferGeometry();
 g.setAttribute('position',new THREE.Float32BufferAttribute([-x,0,z,x,0,z,x,rh,0,-x,rh,0, x,0,-z,-x,0,-z,-x,rh,0,x,rh,0, -w/2,0,-d/2,-w/2,0,d/2,-w/2,rh,0, w/2,0,d/2,w/2,0,-d/2,w/2,rh,0],3));
 g.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,2*x,0,2*x,sl,0,sl, 0,0,2*x,0,2*x,sl,0,sl, 0,0,d,0,d/2,rh, 0,0,d,0,d/2,rh],2));
 g.setIndex([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,11,12,13]);g.computeVertexNormals();return g;}
// facciata di una casa: intonaco o pietra, finestre con persiane, finestre accese la sera
const WALLS=['#dcc3a0','#e4b98c','#d29f78','#eadab4','#cba27e','#dbb48a','#e6cfa6','#d8a888','#c9b89a'];
function facade(wm,hm,o){const P=o.P||18,W=Math.max(16,Math.round(wm*P)),H=Math.max(16,Math.round(hm*P)),wins=[];
 const fl=Math.max(1,Math.floor((hm-.6)/3)),nc=Math.max(1,Math.floor(wm/2.7)),sp=wm/nc;
 for(let f=0;f<fl;f++)for(let i=0;i<nc;i++){const door=o.door&&f===0&&i===(nc>>1),ww=door?1.3:.9,wh=door?2.4:1.35,by=door?0:f*3+1.05;
  wins.push({x:(i+.5)*sp-ww/2,y:hm-by-wh,w:ww,h:wh,door,closed:!door&&srnd()<.5,lit:!door&&o.lit&&srnd()<o.lit,open:srnd()<.4});}
 let em=null;
 const map=ctex(W,H,(x)=>{x.fillStyle=o.wall;x.fillRect(0,0,W,H);
  if(o.stone){let y=0;while(y<H){const hh=(.25+srnd()*.25)*P;let xx=-srnd()*P*.5;while(xx<W){const w=hh*(1.2+srnd()*1.5),v=srnd()*50-25;x.fillStyle=`rgb(${120+v},${110+v},${96+v})`;x.fillRect(xx+1,y+1,w-2,hh-2);xx+=w;}y+=hh;}}
  else{for(let i=0;i<W*H/30;i++){x.globalAlpha=.04+srnd()*.07;x.fillStyle=srnd()<.5?'#000':'#fff';x.fillRect(srnd()*W,srnd()*H,1+srnd()*3,1+srnd()*3);}x.globalAlpha=1;
   for(let i=0;i<W/P;i++){const xx=srnd()*W,g=x.createLinearGradient(0,0,0,H*.7);g.addColorStop(0,'rgba(60,50,40,.18)');g.addColorStop(1,'rgba(60,50,40,0)');x.fillStyle=g;x.fillRect(xx,0,2+srnd()*P*.6,H*.7);}
   const g=x.createLinearGradient(0,H-1.2*P,0,H);g.addColorStop(0,'rgba(50,40,30,0)');g.addColorStop(1,'rgba(50,40,30,.35)');x.fillStyle=g;x.fillRect(0,H-1.2*P,W,1.2*P);
   if(o.quoin!==0)for(const ex of[0,W-.5*P])for(let y=0;y<H;y+=.45*P){x.fillStyle=`rgb(${150+srnd()*30|0},${140+srnd()*20|0},${120})`;x.fillRect(ex+(((y/(.45*P))|0)%2?0:.05*P),y+1,.45*P,.42*P);}
   x.fillStyle='rgba(90,80,70,.85)';x.fillRect(0,H-.55*P,W,.55*P);}
  x.fillStyle='rgba(40,30,25,.55)';x.fillRect(0,0,W,.25*P);
  for(const w of wins){const X=w.x*P,Y=w.y*P,WW=w.w*P,HH=w.h*P,b=.12*P;x.fillStyle='#d6ccb8';x.fillRect(X-b,Y-b,WW+2*b,HH+(w.door?b:2*b));
   if(w.door){x.fillStyle='#4a2e1c';x.fillRect(X,Y,WW,HH);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(X+WW/2-1,Y,2,HH);continue;}
   x.fillStyle='#1a1c22';x.fillRect(X,Y,WW,HH);
   if(w.closed){x.fillStyle=o.shut||'#3c5a3a';x.fillRect(X,Y,WW,HH);x.fillStyle='rgba(0,0,0,.3)';for(let yy=Y+2;yy<Y+HH;yy+=3)x.fillRect(X,yy,WW,1);x.fillRect(X+WW/2-.5,Y,1,HH);}
   else if(w.open){x.fillStyle=o.shut||'#3c5a3a';x.fillRect(X-WW/2-b,Y,WW/2,HH);x.fillRect(X+WW+b,Y,WW/2,HH);x.fillStyle='rgba(230,225,215,.35)';x.fillRect(X+2,Y+2,WW-4,HH*.6);}
   else{x.fillStyle='rgba(200,210,230,.18)';x.fillRect(X,Y,WW,HH);x.fillStyle='#d6ccb8';x.fillRect(X+WW/2-1,Y,2,HH);x.fillRect(X,Y+HH*.45,WW,2);}}});
 if(wins.some(w=>w.lit))em=ctex(W,H,(x)=>{x.fillStyle='#000';x.fillRect(0,0,W,H);
  for(const w of wins){if(!w.lit)continue;const X=w.x*P,Y=w.y*P,WW=w.w*P,HH=w.h*P;if(w.closed){x.fillStyle='rgba(255,170,80,.45)';for(let yy=Y+3;yy<Y+HH;yy+=3)x.fillRect(X,yy,WW,1);}else{x.fillStyle='#ffb45a';x.fillRect(X,Y,WW,HH);}}});
 return{map,em};}
function house(grp,o){const g=new THREE.Group();g.position.set(o.x,o.y||0,o.z);g.rotation.y=o.rot||0;
 const F=facade(o.w,o.h,o),S=facade(o.d,o.h,Object.assign({},o,{door:0,lit:o.lit*.5}));
 const mk=f=>M({map:f.map,roughness:.95,emissive:f.em?0xffffff:0x000000,emissiveMap:f.em||null,emissiveIntensity:f.em?(o.emi||1.4):0});
 const ms=mk(S),mf=mk(F),top=M({color:0x3a2a22,roughness:1});
 const box=new THREE.Mesh(new THREE.BoxGeometry(o.w,o.h,o.d),[ms,ms,top,top,mf,mf]);box.position.y=o.h/2;box.castShadow=box.receiveShadow=true;g.add(box);
 if(o.roof!==0){const r=new THREE.Mesh(roofGeo(o.w,o.d,o.d*.27,.4),roofMat());r.position.y=o.h;r.castShadow=true;g.add(r);}
 grp.add(g);return g;}
// paese lontano: case a istanze con finestre (accese di sera)
function town(grp,list,lit){seed=41;const wt=ctex(64,64,(x)=>{x.fillStyle='#d8c4a4';x.fillRect(0,0,64,64);x.fillStyle='#2a2a30';for(let j=0;j<2;j++)for(let i=0;i<3;i++)x.fillRect(6+i*20,10+j*28,9,14);});
 const et=lit?ctex(64,64,(x)=>{x.fillStyle='#000';x.fillRect(0,0,64,64);x.fillStyle='#ffb050';for(let j=0;j<2;j++)for(let i=0;i<3;i++)if(srnd()<lit)x.fillRect(6+i*20,10+j*28,9,14);}):null;
 const n=list.length,bm=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),M({map:wt,roughness:1,emissive:lit?0xffffff:0,emissiveMap:et,emissiveIntensity:lit?1.6:0}),n),
  rm=new THREE.InstancedMesh(roofGeo(1,1,.3,.06),roofMat(),n),o=new THREE.Object3D(),c=new THREE.Color();
 list.forEach((h,i)=>{o.position.set(h.x,h.y+h.h/2,h.z);o.rotation.set(0,h.r,0);o.scale.set(h.w,h.h,h.d);o.updateMatrix();bm.setMatrixAt(i,o.matrix);
  c.set(WALLS[srnd()*WALLS.length|0]).multiplyScalar(1.1);bm.setColorAt(i,c);o.position.y=h.y+h.h;o.scale.set(h.w,h.d,h.d);o.updateMatrix();rm.setMatrixAt(i,o.matrix);});
 grp.add(bm,rm);return bm;}
// creste di montagne/colline lontane, con foschia calcolata (le Apuane hanno le cime chiare di marmo)
function ridge(grp,o){seed=o.seed||51;const n=o.n||160,pos=[],col=[],idx=[],c0=new THREE.Color(o.col),c1=new THREE.Color(o.top||o.col),hz=new THREE.Color(o.haze),y0=o.y0??-60,tmp=new THREE.Color();
 const oc=[[3,.5],[7,.28],[15,.14],[31,.08]].map(([f,a])=>[f*(o.freq||1),a,srnd()*6.28]);
 for(let i=0;i<=n;i++){const t=i/n,a=o.a0+(o.a1-o.a0)*t;let v=0;for(const[f,am,ph]of oc){const s=Math.sin(t*f*(o.a1-o.a0)+ph);v+=am*(o.jag?Math.pow(1-Math.abs(s),1.6):s*.5+.5);}
  const edge=Math.min(1,Math.min(t,1-t)*(o.full?1e9:8)),h=o.base+o.amp*v*edge,x=Math.cos(a)*o.r,z=Math.sin(a)*o.r;pos.push(x,h,z,x,y0,z);
  const k=Math.max(0,Math.min(1,(v-(o.topAt??.62))*4));tmp.copy(c0).lerp(c1,o.top?k:0).lerp(hz,o.hz);col.push(tmp.r,tmp.g,tmp.b);tmp.copy(c0).multiplyScalar(.7).lerp(hz,Math.min(1,o.hz+.25));col.push(tmp.r,tmp.g,tmp.b);
  if(i<n){const b=i*2;idx.push(b,b+1,b+2,b+1,b+3,b+2);}}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);
 const m=new THREE.Mesh(g,new THREE.MeshBasicMaterial({vertexColors:true,fog:false,side:THREE.DoubleSide}));grp.add(m);return m;}
// alberi: lecci, castagni e cipressi a istanze
function trees(grp,list,kind){const n=list.length;if(!n)return;
 const geo=kind==='cypress'?new THREE.LatheGeometry([[0,0],[.42,.4],[.5,1.6],[.42,3.4],[.24,5],[0,6]].map(p=>new THREE.Vector2(p[0],p[1])),8):kind==='poplar'?new THREE.LatheGeometry([[0,0],[.6,1],[.8,3],[.6,6.5],[0,9]].map(p=>new THREE.Vector2(p[0],p[1])),7):new THREE.IcosahedronGeometry(1,1);
 const mat=M({color:kind==='cypress'?0x2e4a2e:kind==='poplar'?0x5a7a3a:0x2f4626,roughness:1,flatShading:true}),im=new THREE.InstancedMesh(geo,mat,n),o=new THREE.Object3D(),c=new THREE.Color();
 list.forEach((t,i)=>{o.position.set(t.x,t.y,t.z);o.rotation.set(0,rnd()*6,0);o.scale.set(t.s*(t.sx||1),t.s*(t.sy||1),t.s*(t.sx||1));o.updateMatrix();im.setMatrixAt(i,o.matrix);c.setHSL(.22+rnd()*.08,.35+rnd()*.2,.55+rnd()*.35);im.setColorAt(i,c);});
 im.castShadow=kind!=='far';grp.add(im);return im;}
function oak(grp,x,y,z,s){const tr=new THREE.Mesh(new THREE.CylinderGeometry(.18*s,.28*s,2.4*s,7),M({color:0x4a3626,roughness:1}));tr.position.set(x,y+1.2*s,z);tr.castShadow=true;grp.add(tr);
 const L=[];for(let i=0;i<6;i++)L.push({x:x+(rnd()-.5)*2*s,y:y+2.6*s+rnd()*1.4*s,z:z+(rnd()-.5)*2*s,s:(1+rnd()*.6)*s});trees(grp,L,'oak');}
// lampioni e lanterne
function lamp(st,grp,x,y,z,col,pl){const g=new THREE.Mesh(new THREE.SphereGeometry(.16,10,8),M({color:0xffe0b0,emissive:col,emissiveIntensity:3}));g.position.set(x,y,z);grp.add(g);
 const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:col,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.5}));sp.position.set(x,y,z);sp.scale.setScalar(1.2);grp.add(sp);
 if(pl){const L=new THREE.PointLight(col,pl,16,1.6);L.position.set(x,y,z);grp.add(L);}}
function glowPoints(grp,pts,col,size){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));
 const p=new THREE.Points(g,new THREE.PointsMaterial({color:col,size,map:glowTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true}));grp.add(p);return p;}
function sunAt(grp,az,el,col,size,disc){const r=330,x=Math.cos(az)*Math.cos(el)*r,y=Math.sin(el)*r,z=Math.sin(az)*Math.cos(el)*r;
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:col,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));s.position.set(x,y,z);s.scale.setScalar(size);grp.add(s);
 if(disc){const d=new THREE.Mesh(new THREE.CircleGeometry(disc,40),new THREE.MeshBasicMaterial({color:0xfff2d0,fog:false}));d.position.set(x*1.01,y*1.01,z*1.01);d.lookAt(0,0,0);grp.add(d);}}
// merli (guelfi, a coda rettangolare) lungo un segmento
function merlons(grp,mat,x0,z0,x1,z1,y,w,h,d,gap){const L=Math.hypot(x1-x0,z1-z0),n=Math.floor(L/(w+gap)),im=new THREE.InstancedMesh(new THREE.BoxGeometry(w,h,d),mat,n),o=new THREE.Object3D(),a=Math.atan2(z1-z0,x1-x0);
 for(let i=0;i<n;i++){const t=(i+.5)/n;o.position.set(x0+(x1-x0)*t,y+h/2,z0+(z1-z0)*t);o.rotation.set(0,-a,0);o.updateMatrix();im.setMatrixAt(i,o.matrix);}im.castShadow=true;grp.add(im);}
// statua stele della Lunigiana (testa "a cappello di carabiniere", braccia, pugnale)
function steleTex(fem,sd){seed=sd;const W=256,H=512,col=canvas(W,H),hei=canvas(W,H),c=col.getContext('2d'),h=hei.getContext('2d');
 c.fillStyle='#8e877a';c.fillRect(0,0,W,H);h.fillStyle='#b0b0b0';h.fillRect(0,0,W,H);noiseDots(c,W,3000,'#6a6458','#b0a898',.6,2.5,.5);
 // mappa: u=(x+.4)/.8, v=y/1.7 → pixel (u*W,(1-v)*H)
 const P=(x,y)=>[(x+.4)/.8*W,(1-y/1.7)*H];const groove=(pts,w)=>{for(const[ctx,st]of[[c,'rgba(40,36,30,.85)'],[h,'#303030']]){ctx.strokeStyle=st;ctx.lineWidth=w;ctx.lineCap='round';ctx.beginPath();pts.forEach((p,i)=>{const[q,r]=P(p[0],p[1]);i?ctx.lineTo(q,r):ctx.moveTo(q,r);});ctx.stroke();}};
 groove([[-.14,1.5],[-.1,1.36],[0,1.32],[.1,1.36],[.14,1.5]],7);groove([[0,1.5],[0,1.38]],6); // viso a U e naso
 for(const ex of[-.07,.07]){const[q,r]=P(ex,1.46);for(const ctx of[c,h]){ctx.fillStyle=ctx===c?'#2a2620':'#202020';ctx.beginPath();ctx.arc(q,r,6,0,7);ctx.fill();}}
 groove([[-.3,1.12],[-.32,.86],[-.12,.78],[0,.8]],8);groove([[.3,1.12],[.32,.86],[.12,.78],[0,.8]],8); // braccia
 if(fem){for(const ex of[-.1,.1]){const[q,r]=P(ex,1.0);for(const ctx of[c,h]){ctx.fillStyle=ctx===c?'#a49c8c':'#f0f0f0';ctx.beginPath();ctx.arc(q,r,13,0,7);ctx.fill();ctx.strokeStyle=ctx===c?'rgba(40,36,30,.7)':'#404040';ctx.lineWidth=3;ctx.stroke();}}}
 else{groove([[-.15,1.08],[.12,.86]],9);groove([[-.2,1.13],[-.12,1.06],[-.2,1.02]],6);} // pugnale con pomo a mezzaluna
 groove([[-.3,.6],[.3,.6]],5);
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,4))};}
let STELE=null;
function steleGeo(){if(STELE)return STELE;const s=new THREE.Shape();s.moveTo(-.33,0);s.lineTo(.33,0);s.lineTo(.37,1.02);s.quadraticCurveTo(.37,1.18,.18,1.2);s.lineTo(.13,1.25);s.lineTo(.3,1.3);
 s.absarc(0,1.3,.3,0,Math.PI,false);s.lineTo(-.13,1.25);s.lineTo(-.18,1.2);s.quadraticCurveTo(-.37,1.18,-.37,1.02);s.lineTo(-.33,0);
 const g=new THREE.ExtrudeGeometry(s,{depth:.22,bevelEnabled:true,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:14});g.translate(0,0,-.11);
 const uv=g.attributes.uv,p=g.attributes.position;for(let i=0;i<uv.count;i++)uv.setXY(i,(p.getX(i)+.4)/.8,p.getY(i)/1.7);STELE=g;return g;}
function stele(grp,x,z,rotY,fem,sd){const t=steleTex(fem,sd),m=new THREE.Mesh(steleGeo(),M({map:t.map,normalMap:t.normalMap,roughness:.95}));m.position.set(x,.5,z);m.rotation.y=rotY;m.rotation.z=(rnd()-.5)*.06;m.castShadow=m.receiveShadow=true;grp.add(m);
 const b=new THREE.Mesh(new THREE.BoxGeometry(1,.5,.7),M({color:0x5a554c,roughness:1}));b.position.set(x,.25,z);b.rotation.y=rotY;b.castShadow=b.receiveShadow=true;grp.add(b);}

/* ---------------- AULLA · FORTEZZA DELLA BRUNELLA (tramonto, giardino pensile sul forte) ---------------- */
function buildBrunella(st){const grp=st.grp;
 addSky(grp,[[0,'#1c2c60'],[.28,'#4a5590'],[.4,'#b7869a'],[.46,'#f0a07a'],[.495,'#ffd49a'],[.51,'#b88070'],[.6,'#4a4048'],[1,'#2a2a30']],0);
 st.fog=new THREE.FogExp2(0xb08478,.0018);st.bg=0x2a2a30;
 sunAt(grp,-2.3,.27,0xffb070,130,9);
 addFloor(grp,flagstones(Object.assign({seed:14,moss:1},STONE_WARM)),9,24.2,{color:0xffffff});
 const W={joint:'#6a5a4a',v0:120,dv:50,warm:24,seed:22},stoneM=stoneMat(W,8,2),capM=M({color:0xb8a68a,roughness:.85});
 // forte a pianta quadrata con muri a scarpa, cordone e parapetto
 const body=new THREE.Mesh(new THREE.CylinderGeometry(12.2*Math.SQRT2,14.8*Math.SQRT2,14,4,1,true),stoneMat(W,14,3));body.rotation.y=Math.PI/4;body.position.y=-7.1;body.receiveShadow=true;grp.add(body);
 for(let s=0;s<4;s++){const a=s*Math.PI/2,cx=Math.cos(a),cz=Math.sin(a);
  const par=new THREE.Mesh(new THREE.BoxGeometry(24.4,1.05,1.1),stoneM);par.position.set(cx*11.65,.52,cz*11.65);par.rotation.y=-a+Math.PI/2;par.castShadow=par.receiveShadow=true;grp.add(par);
  const cap=new THREE.Mesh(new THREE.BoxGeometry(24.6,.14,1.3),capM);cap.position.set(cx*11.65,1.1,cz*11.65);cap.rotation.y=-a+Math.PI/2;grp.add(cap);
  const cord=new THREE.Mesh(new THREE.CylinderGeometry(.32,.32,25,10),capM);cord.rotation.z=Math.PI/2;cord.position.set(cx*12.35,-1.4,cz*12.35);cord.rotation.y=-a+Math.PI/2;grp.add(cord);}
 // bastioni agli angoli con le garitte
 const bs=new THREE.Shape([[6,12.2],[8.5,19],[19.5,19.5],[19,8.5],[12.2,6]].map(p=>new THREE.Vector2(p[0],p[1])));
 const bg=new THREE.ExtrudeGeometry(bs,{depth:13,bevelEnabled:false});bg.rotateX(Math.PI/2);
 for(const[sx,sz]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const b=new THREE.Mesh(bg,stoneMat(W,3,2));b.scale.set(sx,1,sz);b.position.y=-1.6;b.receiveShadow=true;grp.add(b);
  const gx=19.2*sx,gz=19.2*sz,ga=new THREE.Mesh(new THREE.CylinderGeometry(.7,.55,2.2,12),stoneM);ga.position.set(gx,-.5,gz);grp.add(ga);
  const gc=new THREE.Mesh(new THREE.ConeGeometry(.85,1,12),capM);gc.position.set(gx,1.1,gz);grp.add(gc);
  merlons(grp,stoneM,8.5*sx,19*sz,19.5*sx,19.5*sz,-1.6,.9,.8,.7,.5);merlons(grp,stoneM,19.5*sx,19.5*sz,19*sx,8.5*sz,-1.6,.9,.8,.7,.5);}
 // giardino pensile: lecci, cipressi, siepi
 for(const[x,z]of[[-13.6,-13.6],[13.6,-13.6],[-13.8,13.8],[13.8,13.8]])oak(grp,x*.98,0,z*.98,1.25);
 trees(grp,[[-5,-15.5],[5,-15.5],[-15.5,5],[15.5,-5]].map(([x,z])=>({x,y:-1.6,z,s:1.4})),'cypress');
 // collina con il bosco e la valle di Aulla
 const hill=new THREE.Mesh(new THREE.CylinderGeometry(30,190,24,48,4,true),M({color:0x40502e,roughness:1}));hill.position.y=-26;grp.add(hill);const cap=new THREE.Mesh(new THREE.CircleGeometry(31,40),M({color:0x3e4c2c,roughness:1}));cap.rotation.x=-Math.PI/2;cap.position.y=-14;grp.add(cap);
 const hy=r=>r<30?-14:r>190?-38:-14-24*(r-30)/160;
 const val=new THREE.Mesh(new THREE.PlaneGeometry(1600,1600),M({color:0x4a5634,roughness:1}));val.rotation.x=-Math.PI/2;val.position.y=-38;grp.add(val);
 const wood=[];for(let i=0;i<(MOB?260:520);i++){const a=rnd()*6.28,r=34+rnd()*150;wood.push({x:Math.cos(a)*r,y:hy(r)+1,z:Math.sin(a)*r,s:2+rnd()*2.5,sy:.8});}trees(grp,wood,'far');
 const hs=[];for(let i=0;i<(MOB?140:240);i++){const a=.35+rnd()*1.3,r=110+rnd()*120,w=6+rnd()*8;hs.push({x:Math.cos(a)*r,y:hy(r),z:Math.sin(a)*r,w,d:5+rnd()*6,h:6+rnd()*9,r:-a+rnd()*.3});}town(grp,hs,.35);
 const lp=[];for(let i=0;i<180;i++){const a=.35+rnd()*1.3,r=110+rnd()*120;lp.push(Math.cos(a)*r,hy(r)+5,Math.sin(a)*r);}glowPoints(grp,lp,0xffc070,3.2);
 const ct=new THREE.Mesh(new THREE.BoxGeometry(5,24,5),M({color:0xd8c8a8,roughness:1}));ct.position.set(Math.cos(.9)*150,hy(150)+12,Math.sin(.9)*150);grp.add(ct); // campanile di San Caprasio
 // il Magra che scende verso il mare, con i riflessi del cielo
 const rv=[],ri=[];for(let i=0;i<=40;i++){const t=i/40,a=-.6+t*2.4,r=250+Math.sin(t*9)*20,x=Math.cos(a)*r,z=Math.sin(a)*r,nx=Math.cos(a),nz=Math.sin(a),w=9+Math.sin(t*5)*3;rv.push(x-nx*w,-37.8,z-nz*w,x+nx*w,-37.8,z+nz*w);if(i<40)ri.push(i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2);}
 const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.Float32BufferAttribute(rv,3));rg.setIndex(ri);rg.computeVertexNormals();grp.add(new THREE.Mesh(rg,M({color:0xb0a8b8,roughness:.12,metalness:.8,side:THREE.DoubleSide})));
 // Alpi Apuane (cime di marmo) e Appennino
 ridge(grp,{r:300,a0:-3.4,a1:-1.1,base:20,amp:120,jag:1,col:'#33304a',top:'#e8e0e4',haze:'#c89088',hz:.28,freq:1.4,seed:52});
 ridge(grp,{r:330,a0:-1.3,a1:2.2,base:10,amp:70,col:'#2e3c5e',haze:'#c09098',hz:.42,seed:53});
 ridge(grp,{r:250,a0:-3.5,a1:2.8,base:-6,amp:24,col:'#26321f',haze:'#b08880',hz:.25,full:1,seed:54});
 st.amb=particles(grp,MOB?100:200,26,6,0xffe0b0,.05,1);st.ambKind='dust';
 st.light={hemi:[0x98a4d0,0x3a2e22,.6],key:[0xffc890,2.7],rim:[0xff7a50,2.2],rim2:[0x8aa0ff,1.1],exp:.9,bloom:[.45,.5,.86]};
 st.env=[[0,'#2a3a70'],[.38,'#8a8aa8'],[.48,'#ffc890'],[.55,'#5a5040'],[1,'#3a3430']];st.envLights=[[0xffb070,8,[-8,1,-14]],[0x8aa0ff,2,[6,8,6]]];}

/* ---------------- PALLERONE · PIAZZA DEL CASTELLO (sera d'estate, luminarie) ---------------- */
function buildPallerone(st){const grp=st.grp;
 addSky(grp,[[0,'#0a1430'],[.3,'#1a2c5c'],[.43,'#3a5088'],[.475,'#a07a88'],[.495,'#f0a070'],[.51,'#5a3a40'],[1,'#141018']],1);
 st.fog=new THREE.FogExp2(0x2a2a40,.006);st.bg=0x141018;
 addFloor(grp,flagstones({seed:16,joint:'#3a342e',v0:92,dv:40,warm:14,d0:'#4a4038',d1:'#9a8a78',rows:10}),12,80,{color:0xffffff});
 const ris=floorRisseu(),mz=new THREE.Mesh(new THREE.PlaneGeometry(17,17),M({map:ris.map,normalMap:ris.normalMap,roughnessMap:ris.roughnessMap,roughness:1,polygonOffset:true,polygonOffsetFactor:-2}));
 mz.rotation.x=-Math.PI/2;mz.position.y=.01;mz.receiveShadow=true;grp.add(mz);
 const border=M({color:0xb8ae9c,roughness:.8});for(const[x,z,w,d]of[[0,-8.6,17.4,.3],[0,8.6,17.4,.3],[-8.6,0,.3,17.4],[8.6,0,.3,17.4]]){const b=new THREE.Mesh(new THREE.BoxGeometry(w,.06,d),border);b.position.set(x,.03,z);b.receiveShadow=true;grp.add(b);}
 // il castello-palazzo dei Malaspina (rifatto da Alderano nel Seicento) davanti alla piazza
 seed=61;house(grp,{x:0,z:-27,w:34,d:12,h:15,wall:'#d8b08a',lit:.3,door:1,shut:'#4a5a3a',P:16,emi:1.6});
 const portal=new THREE.Mesh(new THREE.BoxGeometry(4.2,5.2,.5),M({color:0xc8bca4,roughness:.8}));portal.position.set(0,2.6,-20.9);grp.add(portal);
 const pd=new THREE.Mesh(new THREE.BoxGeometry(2.8,4.2,.3),M({color:0x3a2416,roughness:.7}));pd.position.set(0,2.1,-20.65);grp.add(pd);
 const stem=ctex(128,160,(x)=>{x.fillStyle='#c8bca4';x.fillRect(0,0,128,160);x.fillStyle='#2a4a8a';x.beginPath();x.moveTo(14,10);x.lineTo(114,10);x.lineTo(114,90);x.quadraticCurveTo(114,140,64,152);x.quadraticCurveTo(14,140,14,90);x.fill();
  x.strokeStyle='#d4b040';x.lineWidth=7;x.stroke();x.fillStyle='#e8e0d0';x.font='bold 70px serif';x.textAlign='center';x.fillText('♣',64,100);}); // stemma Malaspina (spino fiorito)
 const sm=new THREE.Mesh(new THREE.PlaneGeometry(1.4,1.75),M({map:stem,roughness:.8}));sm.position.set(0,6.2,-20.95);grp.add(sm);
 // torre medievale in rovina accanto al castello
 const towerM=stoneMat({joint:'#4a4238',v0:95,dv:45,warm:16,seed:62},2,5);
 const tw=new THREE.Mesh(new THREE.BoxGeometry(5.5,20,5.5),towerM);tw.position.set(19.5,10,-26);tw.castShadow=true;grp.add(tw);merlons(grp,towerM,16.9,-23.4,22.1,-23.4,20,.8,1.1,.6,.7);merlons(grp,towerM,16.9,-28.6,22.1,-28.6,20,.8,1.1,.6,.7);
 // chiesa di San Bartolomeo e campanile
 const ch=ctex(256,300,(x)=>{x.fillStyle='#e6dcc8';x.fillRect(0,0,256,300);noiseDots(x,256,2000,'#c8bca8','#f4ecdc',.5,2,.4);x.fillStyle='#cbbfa8';for(const px of[18,226])x.fillRect(px-10,40,20,260);x.fillRect(0,40,256,14);
  x.fillStyle='#3a2416';x.beginPath();x.moveTo(98,300);x.lineTo(98,215);x.arc(128,215,30,Math.PI,0);x.lineTo(158,300);x.fill();x.strokeStyle='#c8bca4';x.lineWidth=8;x.stroke();
  x.fillStyle='#2a2a40';x.beginPath();x.arc(128,120,26,0,7);x.fill();x.strokeStyle='#bdb09a';x.lineWidth=7;x.stroke();for(let k=0;k<8;k++){x.beginPath();x.moveTo(128,120);x.lineTo(128+Math.cos(k*.785)*26,120+Math.sin(k*.785)*26);x.lineWidth=2;x.stroke();}});
 const che=ctex(256,300,(x)=>{x.fillStyle='#000';x.fillRect(0,0,256,300);x.fillStyle='#ffb860';x.beginPath();x.arc(128,120,22,0,7);x.fill();});
 const chM=M({map:ch,emissive:0xffffff,emissiveMap:che,emissiveIntensity:1.2,roughness:.9}),chS=M({color:0xd8ccb4,roughness:.95}),chT=M({color:0x3a2a22});
 const nave=new THREE.Group();nave.position.set(27,0,2);nave.rotation.y=-Math.PI/2;grp.add(nave);
 const nb=new THREE.Mesh(new THREE.BoxGeometry(11,12,22),[chS,chS,chT,chT,chM,chS]);nb.position.set(0,6,-11+11);nb.castShadow=true;nave.add(nb);
 const nr=new THREE.Mesh(roofGeo(22,11,3.4,.3),roofMat());nr.rotation.y=Math.PI/2;nr.position.set(0,12,0);nave.add(nr);
 const bell=new THREE.Group();bell.position.set(17.5,0,-7);grp.add(bell);
 const bt=new THREE.Mesh(new THREE.BoxGeometry(4.2,22,4.2),stoneMat({joint:'#5a5048',v0:120,dv:40,warm:18,seed:63},2,6));bt.position.y=11;bt.castShadow=true;bell.add(bt);
 const bel=new THREE.Mesh(new THREE.BoxGeometry(4.6,4,4.6),M({color:0xe0d4bc,roughness:.9}));bel.position.y=24;bell.add(bel);
 for(let k=0;k<4;k++){const a=k*Math.PI/2,op=new THREE.Mesh(new THREE.PlaneGeometry(1.6,2.6),M({color:0x15100c,emissive:0xff9a40,emissiveIntensity:.25}));op.position.set(Math.sin(a)*2.31,23.8,Math.cos(a)*2.31);op.rotation.y=a;bell.add(op);}
 const cap=new THREE.Mesh(new THREE.ConeGeometry(3.4,4.2,4),roofMat());cap.rotation.y=Math.PI/4;cap.position.y=28.1;bell.add(cap);
 const clk=ctex(128,128,(x)=>{x.fillStyle='#f4ecd8';x.beginPath();x.arc(64,64,60,0,7);x.fill();x.strokeStyle='#222';x.lineWidth=5;x.stroke();x.lineWidth=6;x.beginPath();x.moveTo(64,64);x.lineTo(64,26);x.moveTo(64,64);x.lineTo(92,72);x.stroke();});
 const cm=new THREE.Mesh(new THREE.CircleGeometry(1.1,24),M({map:clk,emissive:0xffe0b0,emissiveMap:clk,emissiveIntensity:.5,transparent:true}));cm.position.set(-2.12,19,0);cm.rotation.y=-Math.PI/2;bell.add(cm);
 // case del paese attorno alla piazza
 seed=64;const rows=[[-17,-9,Math.PI/2],[-17,-1,Math.PI/2],[-18,7,Math.PI/2],[-17,15,Math.PI/2],[-8,19,Math.PI],[1,20,Math.PI],[10,19,Math.PI],[18,17,Math.PI]];
 rows.forEach(([x,z,r],i)=>{const w=6.5+srnd()*3;house(grp,{x,z,w,d:7+srnd()*3,h:8+srnd()*5,rot:r,wall:WALLS[i%WALLS.length],stone:i%3===2,lit:.45,door:1,shut:i%2?'#3c5a3a':'#5a3a26',emi:1.6});});
 // luminarie della festa
 const bulbs=[];for(let k=0;k<5;k++){const z=-10+k*5,x0=-13.5,x1=17;for(let i=0;i<=60;i++){const t=i/60;bulbs.push(x0+(x1-x0)*t,7.4-Math.sin(t*Math.PI)*1.3,z+Math.sin(t*Math.PI)*.4);}}
 const bg=new THREE.InstancedMesh(new THREE.SphereGeometry(.07,6,4),new THREE.MeshBasicMaterial({color:0xffe6b0}),bulbs.length/3),o=new THREE.Object3D();
 for(let i=0;i<bulbs.length/3;i++){o.position.set(bulbs[i*3],bulbs[i*3+1],bulbs[i*3+2]);o.updateMatrix();bg.setMatrixAt(i,o.matrix);}grp.add(bg);glowPoints(grp,bulbs,0xffc070,.9);
 lamp(st,grp,-6,4.6,-20.6,0xffb060,9);lamp(st,grp,6,4.6,-20.6,0xffb060,9);lamp(st,grp,-16.2,4.2,3,0xffb060,6);lamp(st,grp,15.4,4.2,9,0xffb060,0);
 // colline coi castagni e i paesi lontani
 ridge(grp,{r:120,a0:-3.3,a1:3.1,base:6,amp:26,col:'#1a2420',haze:'#2a3048',hz:.3,full:1,seed:65});
 ridge(grp,{r:300,a0:-3,a1:-.4,base:10,amp:90,jag:1,col:'#2a2a48',top:'#8a8aa8',haze:'#3a4060',hz:.4,freq:1.3,seed:66});
 const far=[];for(let i=0;i<120;i++){const a=rnd()*6.28,r=110+rnd()*20;far.push(Math.cos(a)*r,5+rnd()*18,Math.sin(a)*r);}glowPoints(grp,far,0xffc070,2.2);
 st.amb=particles(grp,MOB?60:120,24,8,0xfff0a0,.06,1);st.ambKind='dust';
 st.light={hemi:[0x5a70b0,0x3a2a20,.9],key:[0xffc890,2.6],rim:[0x6a8aff,1.7],rim2:[0xffa060,1.3],exp:1.05,bloom:[.55,.45,.85]};
 st.env=[[0,'#0e1a3a'],[.4,'#3a5088'],[.49,'#f0a070'],[.55,'#4a3830'],[1,'#1a1410']];st.envLights=[[0xffb060,6,[-6,4,-12]],[0xffb060,6,[6,4,-12]],[0xffc070,3,[0,7,0]]];}

/* ---------------- AULLA · GRETO DEL MAGRA (mattina, fiume, ponte ad archi) ---------------- */
function buildMagra(st){const grp=st.grp;
 addSky(grp,[[0,'#4a78c0'],[.32,'#86aee0'],[.46,'#d0dceb'],[.5,'#eee6d4'],[.52,'#8a9a88'],[1,'#4a5040']],0);
 st.fog=new THREE.FogExp2(0xb8c6d0,.0026);st.bg=0x8a9aa0;
 sunAt(grp,-1.2,.42,0xfff0d0,90,0);
 // isolotto di ghiaia dal contorno irregolare
 const gv=floorGravel();for(const k of['map','normalMap','roughnessMap']){gv[k].repeat.set(.18,.18);}
 const sh=new THREE.Shape();for(let i=0;i<=64;i++){const a=i/64*6.283,r=16+Math.sin(a*3+1)*2.2+Math.sin(a*7)*1.1,x=Math.cos(a)*r*1.25,y=Math.sin(a)*r;i?sh.lineTo(x,y):sh.moveTo(x,y);}
 const isl=new THREE.Mesh(new THREE.ShapeGeometry(sh,8),M({map:gv.map,normalMap:gv.normalMap,roughnessMap:gv.roughnessMap,roughness:1}));isl.rotation.x=-Math.PI/2;isl.receiveShadow=true;grp.add(isl);
 const wet=new THREE.Mesh(new THREE.ShapeGeometry(sh,8),M({color:0x4a463e,roughness:.35}));wet.rotation.x=-Math.PI/2;wet.scale.set(1.06,1.06,1);wet.position.y=-.05;grp.add(wet);
 // acqua che scorre
 const wn=waterNormals();wn.repeat.set(40,40);
 const water=new THREE.Mesh(new THREE.PlaneGeometry(900,900),M({color:0x1e3834,roughness:.22,metalness:0,normalMap:wn,normalScale:new THREE.Vector2(.5,.5),envMapIntensity:.35}));water.rotation.x=-Math.PI/2;water.position.y=-.12;grp.add(water);
 st.upd.push(t=>{wn.offset.y=t*.0015;wn.offset.x=Math.sin(t*.003)*.05;});
 // massi e tronchi portati dalle piene
 const rockM=M({color:0x6a665c,roughness:.9,flatShading:true});for(let i=0;i<16;i++){const a=rnd()*6.28,r=17+rnd()*4,g=new THREE.IcosahedronGeometry(.5+rnd()*1.1,1),p=g.attributes.position;
  for(let k=0;k<p.count;k++)p.setXYZ(k,p.getX(k)*(1+rnd()*.25),p.getY(k)*(.6+rnd()*.2),p.getZ(k)*(1+rnd()*.25));g.computeVertexNormals();const m=new THREE.Mesh(g,rockM);m.position.set(Math.cos(a)*r*1.2,0,Math.sin(a)*r);m.castShadow=m.receiveShadow=true;grp.add(m);}
 const log=new THREE.Mesh(new THREE.CylinderGeometry(.25,.3,5,8),M({color:0x7a6a58,roughness:1}));log.rotation.set(0,.6,Math.PI/2);log.position.set(-13,.2,9);grp.add(log);
 // argini con pioppi, salici e le case di Aulla
 const bankM=M({color:0x5a6a3a,roughness:1});for(const sx of[-1,1]){const b=new THREE.Mesh(new THREE.BoxGeometry(80,6,700),bankM);b.position.set(sx*(48+40),1,0);b.rotation.z=sx*.0;grp.add(b);
  const wallb=new THREE.Mesh(new THREE.BoxGeometry(1.5,4.2,700),stoneMat({joint:'#5a5448',v0:120,dv:40,warm:12,seed:70+sx},120,1));wallb.position.set(sx*48.6,1.9,0);grp.add(wallb);
  const pl=[];for(let i=0;i<70;i++)pl.push({x:sx*(51+rnd()*8),y:4,z:-300+i*9+rnd()*4,s:1.3+rnd()*.6,sx:1});trees(grp,pl,'poplar');
  const ok=[];for(let i=0;i<120;i++)ok.push({x:sx*(60+rnd()*60),y:4+rnd()*2,z:(rnd()-.5)*600,s:2.2+rnd()*2});trees(grp,ok,'far');}
 seed=71;for(let i=0;i<7;i++)house(grp,{x:-54-(i%2)*9,y:4,z:-60+i*9-(i%2)*4,w:7+srnd()*2,d:8,h:9+srnd()*6,rot:Math.PI/2,wall:WALLS[(i+2)%WALLS.length],lit:0,door:1,shut:i%2?'#3c5a3a':'#6a4a2a'});
 const sc=new THREE.Mesh(new THREE.BoxGeometry(4,20,4),M({color:0xd8ccb0,roughness:.9}));sc.position.set(-62,14,-30);grp.add(sc);const scp=new THREE.Mesh(new THREE.ConeGeometry(3.2,4,4),roofMat());scp.rotation.y=Math.PI/4;scp.position.set(-62,26,-30);grp.add(scp);
 // ponte in pietra ad archi sul Magra
 const bsh=new THREE.Shape([[-50,-.5],[50,-.5],[50,10],[-50,10]].map(p=>new THREE.Vector2(p[0],p[1])));
 for(let k=0;k<5;k++){const cx=-36+k*18,hp=new THREE.Path();hp.moveTo(cx-7,-.5);hp.lineTo(cx-7,3);hp.absarc(cx,3,7,Math.PI,0,true);hp.lineTo(cx+7,-.5);hp.lineTo(cx-7,-.5);bsh.holes.push(hp);}
 const brg=new THREE.ExtrudeGeometry(bsh,{depth:7,bevelEnabled:false,curveSegments:16});
 const brM=stoneMat({joint:'#6a6050',v0:130,dv:40,warm:18,seed:72},.12,.12);const br=new THREE.Mesh(brg,brM);br.position.set(0,-.3,-78);br.castShadow=true;grp.add(br);
 const deck=new THREE.Mesh(new THREE.BoxGeometry(101,1,8),M({color:0xa89a84,roughness:.9}));deck.position.set(0,10,-74.5);grp.add(deck);
 // la Brunella sulla collina sopra Aulla, Apuane e Appennino
 ridge(grp,{r:220,a0:-2.6,a1:-.5,base:4,amp:55,col:'#3a5a34',haze:'#b8c6d0',hz:.3,seed:73});
 ridge(grp,{r:220,a0:.5,a1:2.6,base:4,amp:50,col:'#3a5a34',haze:'#b8c6d0',hz:.3,seed:74});
 ridge(grp,{r:320,a0:-3.3,a1:-.2,base:20,amp:110,jag:1,col:'#6a7088',top:'#f4f2f0',haze:'#d0d8e0',hz:.5,freq:1.3,seed:75});
 ridge(grp,{r:330,a0:.2,a1:3.1,base:10,amp:70,col:'#5a7090',haze:'#d0d8e0',hz:.6,seed:76});
 const fz=new THREE.Group();fz.position.set(-70,38,-200);grp.add(fz);const fM=M({color:0xb0a090,roughness:1});
 const fb=new THREE.Mesh(new THREE.BoxGeometry(14,7,14),fM);fz.add(fb);for(const[x,z]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const t=new THREE.Mesh(new THREE.ConeGeometry(4,7,3),fM);t.position.set(x*7,0,z*7);t.rotation.set(Math.PI,Math.atan2(x,z),0);fz.add(t);}
 const fh=new THREE.Mesh(new THREE.ConeGeometry(30,40,8),M({color:0x4a6a44,roughness:1}));fh.position.set(-70,15,-200);grp.add(fh);
 st.amb=particles(grp,MOB?80:160,26,4,0xfffff0,.04,1);st.ambKind='dust';
 st.light={hemi:[0xa8bce0,0x4a4234,.8],key:[0xfff0d8,3.0],rim:[0xffe0b0,1.2],rim2:[0x9ab8ff,.8],exp:.88,bloom:[.3,.4,.93]};
 st.env=[[0,'#5a86c8'],[.42,'#c0d4ea'],[.5,'#f4ead0'],[.56,'#6a7860'],[1,'#3a4030']];st.envLights=[[0xfff0d0,8,[-4,10,-8]],[0x88a0b0,3,[0,-1,10]]];}

/* ---------------- PONTREMOLI · CASTELLO DEL PIAGNARO (notte, bracieri, statue stele) ---------------- */
function buildPiagnaro(st){const grp=st.grp;
 addSky(grp,[[0,'#03050e'],[.4,'#0a1230'],[.48,'#1e2448'],[.51,'#0e1020'],[1,'#050508']],1);
 st.fog=new THREE.FogExp2(0x0c1024,.012);st.bg=0x05060c;
 addFloor(grp,flagstones({seed:17,joint:'#2e2a26',v0:88,dv:38,warm:8,d0:'#3a3430',d1:'#8a8078',wet:5}),9,40,{color:0xffffff});
 const W={joint:'#3a342c',v0:92,dv:48,warm:14,seed:81},wM=stoneMat(W,8,2),R=13.5;
 // mura del cortile su tre lati, merli guelfi; a sud il parapetto aperto sulla città
 for(const[x,z,w,d,h]of[[0,-R,2*R+2,1.6,9],[-R,0,1.6,2*R,9],[R,0,1.6,2*R,9]]){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),wM);m.position.set(x,h/2,z);m.castShadow=m.receiveShadow=true;grp.add(m);}
 merlons(grp,wM,-R,-R-.2,R,-R-.2,9,.9,1.2,1.2,.7);merlons(grp,wM,-R-.2,-R,-R-.2,R,9,.9,1.2,1.2,.7);merlons(grp,wM,R+.2,-R,R+.2,R,9,.9,1.2,1.2,.7);
 const par=new THREE.Mesh(new THREE.BoxGeometry(2*R,1.1,1),wM);par.position.set(0,.55,R);par.receiveShadow=true;grp.add(par);merlons(grp,wM,-R,R,R,R,1.1,.9,.8,1,.9);
 // il mastio
 const ms=new THREE.Mesh(new THREE.BoxGeometry(7,24,7),stoneMat(W,3,6));ms.position.set(-10,12,-17);ms.castShadow=true;grp.add(ms);
 for(const[a,b,c,d]of[[-13.5,-13.5,-6.5,-13.5],[-13.5,-20.5,-6.5,-20.5],[-13.5,-20.5,-13.5,-13.5],[-6.5,-20.5,-6.5,-13.5]])merlons(grp,wM,a,b,c,d,24,.8,1.1,.8,.6);
 const sl=M({color:0x080606,emissive:0xff8a30,emissiveIntensity:.6});for(const y of[8,14,19]){const s=new THREE.Mesh(new THREE.PlaneGeometry(.35,1.4),sl);s.position.set(-10,y,-13.48);grp.add(s);}
 // portale con il portone e le torce
 const arch=new THREE.Shape();arch.moveTo(-2,0);arch.lineTo(-2,3.4);arch.absarc(0,3.4,2,Math.PI,0,true);arch.lineTo(2,0);arch.lineTo(-2,0);
 const door=new THREE.Mesh(new THREE.ShapeGeometry(arch,12),M({color:0x3a2414,roughness:.7}));door.position.set(5,0,-R+.82);grp.add(door);
 fireAt(st,grp,1.8,3.6,-R+1.1,.55);fireAt(st,grp,8.2,3.6,-R+1.1,.55);
 // le statue stele attorno all'arena, illuminate dai bracieri
 const SA=[-2.6,-2.1,-1.05,-.55,.55,1.05,2.1,2.6,-1.57,1.57];SA.forEach((a,i)=>{const x=Math.cos(a)*10.6,z=Math.sin(a)*10.6;stele(grp,x,z,-a-Math.PI/2,i%3===1,90+i);});
 const ironM=M({color:0x1a1612,metalness:.7,roughness:.45});for(const a of[-2.36,-.79,.79,2.36]){const x=Math.cos(a)*11.4,z=Math.sin(a)*11.4;
  const leg=new THREE.Mesh(new THREE.CylinderGeometry(.08,.14,1.6,6),ironM);leg.position.set(x,.8,z);grp.add(leg);const bowl=new THREE.Mesh(new THREE.CylinderGeometry(.55,.25,.4,14,1,true),ironM);bowl.position.set(x,1.75,z);grp.add(bowl);fireAt(st,grp,x,1.7,z,.9);}
 // Pontremoli di notte sotto il castello: case, il Campanone, il duomo
 const hy=-26;const below=new THREE.Mesh(new THREE.PlaneGeometry(1400,1400),M({color:0x141a14,roughness:1}));below.rotation.x=-Math.PI/2;below.position.y=hy;grp.add(below);
 const slope=new THREE.Mesh(new THREE.CylinderGeometry(20,60,26,32,1,true),stoneMat({joint:'#2a2620',v0:60,dv:30,warm:8,seed:82},20,3));slope.position.y=-13.2;grp.add(slope);
 const hs=[];for(let i=0;i<(MOB?160:280);i++){const a=.2+rnd()*2.7,r=55+rnd()*130;hs.push({x:Math.cos(a)*r,y:hy,z:Math.sin(a)*r,w:6+rnd()*7,d:5+rnd()*6,h:7+rnd()*9,r:-a+rnd()*.3});}town(grp,hs,.5);
 const lp=[];for(let i=0;i<220;i++){const a=.2+rnd()*2.7,r=55+rnd()*130;lp.push(Math.cos(a)*r,hy+4,Math.sin(a)*r);}glowPoints(grp,lp,0xffb050,2.6);
 const cpX=12,cpZ=80,cp=new THREE.Mesh(new THREE.BoxGeometry(6,34,6),M({color:0xc8b898,roughness:.9,emissive:0xff9a40,emissiveIntensity:.08}));cp.position.set(cpX,hy+17,cpZ);grp.add(cp);
 const cpc=new THREE.Mesh(new THREE.BoxGeometry(6.6,3,6.6),M({color:0xd8c8a8}));cpc.position.set(cpX,hy+35,cpZ);grp.add(cpc);
 const ck=new THREE.Mesh(new THREE.CircleGeometry(1.6,24),new THREE.MeshBasicMaterial({color:0xffe0a0}));ck.position.set(cpX,hy+30,cpZ-3.05);ck.rotation.y=Math.PI;grp.add(ck);
 const dm=new THREE.Mesh(new THREE.SphereGeometry(6,24,12,0,6.283,0,Math.PI/2),M({color:0x8a8a90,roughness:.5,metalness:.3}));dm.position.set(-25,hy+16,95);grp.add(dm);const dmb=new THREE.Mesh(new THREE.CylinderGeometry(6,6,16,24),M({color:0xd0c4a8}));dmb.position.set(-25,hy+8,95);grp.add(dmb);
 // Appennino al chiaro di luna
 ridge(grp,{r:300,a0:-3.4,a1:3,base:10,amp:85,jag:1,col:'#1a2238',top:'#7a86a8',haze:'#0c1024',hz:.3,full:1,topAt:.7,seed:83});
 ridge(grp,{r:200,a0:-3.4,a1:3,base:-14,amp:30,col:'#0e140e',haze:'#0c1024',hz:.25,full:1,seed:84});
 const moon=new THREE.Mesh(new THREE.SphereGeometry(8,32,16),new THREE.MeshBasicMaterial({color:0xe4ecff,fog:false}));moon.position.set(80,110,250);grp.add(moon);
 const mg=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0x8aa0ff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));mg.position.copy(moon.position);mg.scale.setScalar(80);grp.add(mg);
 st.amb=particles(grp,MOB?140:280,28,8,0xff7a30,.08,1);st.ambKind='ember';
 st.light={hemi:[0x5a6aa8,0x20140c,.75],key:[0xb4c4ff,2.4],rim:[0xff8a40,2.4],rim2:[0x6a80ff,1.3],exp:1.12,bloom:[.65,.5,.8]};
 st.env=[[0,'#0a0f24'],[.45,'#1a1e38'],[.5,'#5a3420'],[.55,'#1a1010'],[1,'#0a0808']];st.envLights=[[0xff8030,6,[8,2,6]],[0xff8030,6,[-8,2,-6]],[0x8ab0ff,3,[6,10,8]]];}

let MOB=false;
export function buildStage(i,mobile){MOB=mobile;const st={grp:new THREE.Group(),fires:[],cloth:[],neons:[],upd:[],amb:null,name:STAGES[i].name};STAGES[i].build(st);return st;}
export function updStage(st,t){if(!st)return;updFires(st,t);for(const u of st.upd)u(t);
 for(const c of st.cloth){const p=c.geometry.attributes.position;if(!c.userData.b)c.userData.b=Float32Array.from(p.array);const b=c.userData.b;for(let i=0;i<p.count;i++){const y=b[i*3+1];p.array[i*3+2]=b[i*3+2]+Math.sin(t*.06+y*1.3)*.12*(1-(y+3)/6);}p.needsUpdate=true;}
 for(const n of st.neons){const fl=Math.sin(t*.9+n.ph)>.97?.25:1;if(n.L)n.L.intensity=n.base*fl;n.m.material.opacity=fl;}
 const A=st.amb;if(A){const{p,v,n,h,area}=A;for(let i=0;i<n;i++){const k=i*3;
  if(st.ambKind==='rain'){p[k+1]-=.35+v[i]*.2;p[k]+=.02;if(p[k+1]<0){p[k+1]+=h;}}
  else if(st.ambKind==='ember'){p[k+1]+=.015+v[i]*.02;p[k]+=Math.sin(t*.02+v[i]*20)*.01;if(p[k+1]>h)p[k+1]-=h;}
  else{p[k+1]+=Math.sin(t*.01+v[i]*30)*.003;p[k]+=Math.cos(t*.008+v[i]*20)*.004;}}A.pts.geometry.attributes.position.needsUpdate=true;}}
// scena semplificata per la mappa d'ambiente (riflessi su pelle, metallo, pozzanghere)
export function envScene(st){const s=new THREE.Scene();const sky=new THREE.Mesh(new THREE.SphereGeometry(50,32,16),new THREE.MeshBasicMaterial({map:skyTex(st.env),side:THREE.BackSide}));s.add(sky);
 for(const[c,i,p]of st.envLights||[]){const m=new THREE.Mesh(new THREE.SphereGeometry(1.5,12,8),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(...p).multiplyScalar(2);s.add(m);}
 return s;}
