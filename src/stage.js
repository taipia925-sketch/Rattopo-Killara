/* Arene 3D procedurali con texture PBR generate (colore, rilievo, ruvidità) */
import * as THREE from 'three';
const rnd=Math.random;
let seed=1;const srnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
function canvas(s){const c=document.createElement('canvas');c.width=c.height=s;return c;}
function tex(c,rep,srgb){const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;if(rep)t.repeat.set(rep,rep);t.anisotropy=8;if(srgb)t.colorSpace=THREE.SRGBColorSpace;return t;}
// mappa normale dal rilievo (Sobel)
function normalFrom(hc,str){const s=hc.width,h=hc.getContext('2d').getImageData(0,0,s,s).data,c=canvas(s),x=c.getContext('2d'),o=x.createImageData(s,s),d=o.data;
 const H=(i,j)=>h[(((j+s)%s)*s+((i+s)%s))*4]/255;
 for(let j=0;j<s;j++)for(let i=0;i<s;i++){const dx=(H(i-1,j)-H(i+1,j))*str,dy=(H(i,j-1)-H(i,j+1))*str,l=Math.hypot(dx,dy,1),k=(j*s+i)*4;
  d[k]=(dx/l*.5+.5)*255;d[k+1]=(dy/l*.5+.5)*255;d[k+2]=(1/l*.5+.5)*255;d[k+3]=255;}
 x.putImageData(o,0,0);return c;}
function noiseDots(x,s,n,c0,c1,r0,r1,a){for(let i=0;i<n;i++){x.globalAlpha=a*srnd();x.fillStyle=srnd()<.5?c0:c1;const r=r0+srnd()*(r1-r0);x.beginPath();x.arc(srnd()*s,srnd()*s,r,0,7);x.fill();}x.globalAlpha=1;}
/* pavimenti */
function floorStone(){seed=11;const S=1024,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 c.fillStyle='#3d3a3c';c.fillRect(0,0,S,S);h.fillStyle='#202020';h.fillRect(0,0,S,S);r.fillStyle='#d8d8d8';r.fillRect(0,0,S,S);
 const rows=5;for(let j=0;j<rows;j++){const y=j*S/rows,hh=S/rows;let x0=(j%2)*S/10;const cols=4+(j%2);
  for(let i=0;i<cols+1;i++){const w=S/cols,x=x0+i*w-w;const g=6;const v=60+srnd()*40|0,tint=srnd()*12|0;
   for(const ox of[0,S,-S]){c.fillStyle=`rgb(${v+tint},${v},${v-tint/2|0})`;c.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);
    h.fillStyle=`rgb(${170+srnd()*40|0},0,0)`;h.fillStyle='#c0c0c0';h.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);
    r.fillStyle=`rgb(${190+srnd()*50|0},0,0)`;r.fillStyle='#c8c8c8';r.fillRect(x+g+ox,y+g,w-2*g,hh-2*g);}}}
 // crepe e usura
 for(let k=0;k<60;k++){let x=srnd()*S,y=srnd()*S;c.strokeStyle='rgba(15,12,12,.7)';h.strokeStyle='#303030';c.lineWidth=h.lineWidth=1+srnd()*2;c.beginPath();h.beginPath();c.moveTo(x,y);h.moveTo(x,y);
  for(let q=0;q<6;q++){x+=(srnd()-.5)*60;y+=(srnd()-.5)*60;c.lineTo(x,y);h.lineTo(x,y);}c.stroke();h.stroke();}
 noiseDots(c,S,9000,'#2a2626','#5a5452',.5,2.2,.35);noiseDots(h,S,9000,'#909090','#e0e0e0',.5,2,.3);
 // pozzanghere lucide
 for(let k=0;k<7;k++){const x=srnd()*S,y=srnd()*S,R=40+srnd()*90,g=r.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,'rgba(30,30,30,1)');g.addColorStop(1,'rgba(30,30,30,0)');r.fillStyle=g;r.fillRect(x-R,y-R,2*R,2*R);
  const g2=c.createRadialGradient(x,y,0,x,y,R);g2.addColorStop(0,'rgba(10,12,18,.45)');g2.addColorStop(1,'rgba(10,12,18,0)');c.fillStyle=g2;c.fillRect(x-R,y-R,2*R,2*R);}
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,6)),roughnessMap:tex(rou)};}
function floorWood(){seed=7;const S=1024,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 const n=8;for(let j=0;j<n;j++){const y=j*S/n,ph=S/n;let x=-srnd()*S;while(x<S){const w=S*(.35+srnd()*.4),v=srnd()*30|0;
  for(const ox of[0,S]){c.fillStyle=`rgb(${120+v},${72+v*.7|0},${40+v*.3|0})`;c.fillRect(x+ox,y,w,ph);h.fillStyle='#b0b0b0';h.fillRect(x+ox,y+2,w-3,ph-4);r.fillStyle=`rgb(${120+srnd()*50|0},0,0)`;r.fillStyle='#909090';r.fillRect(x+ox,y,w,ph);
   for(let k=0;k<26;k++){const yy=y+srnd()*ph;c.strokeStyle=`rgba(50,25,10,${.08+srnd()*.18})`;c.lineWidth=1+srnd()*1.5;c.beginPath();c.moveTo(x+ox,yy);c.bezierCurveTo(x+ox+w*.3,yy+(srnd()-.5)*8,x+ox+w*.7,yy+(srnd()-.5)*8,x+ox+w,yy);c.stroke();
    h.strokeStyle='rgba(120,120,120,.4)';h.beginPath();h.moveTo(x+ox,yy);h.lineTo(x+ox+w,yy);h.stroke();}}
  c.fillStyle='#1a0e06';c.fillRect(x,y,3,ph);h.fillStyle='#202020';h.fillRect(x,y,3,ph);x+=w;}
  c.fillStyle='#1a0e06';c.fillRect(0,y,S,3);h.fillStyle='#202020';h.fillRect(0,y,S,3);}
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,4)),roughnessMap:tex(rou)};}
function floorAsphalt(){seed=3;const S=1024,col=canvas(S),hei=canvas(S),rou=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d'),r=rou.getContext('2d');
 c.fillStyle='#232428';c.fillRect(0,0,S,S);h.fillStyle='#808080';h.fillRect(0,0,S,S);r.fillStyle='#b4b4b4';r.fillRect(0,0,S,S);
 noiseDots(c,S,30000,'#16171a','#3a3b40',.6,2.4,.5);noiseDots(h,S,30000,'#606060','#a0a0a0',.6,2,.5);
 // pozzanghere irregolari: tante macchie morbide sovrapposte (solo ruvidità e colore)
 for(let k=0;k<10;k++){const x0=srnd()*S,y0=srnd()*S;for(let q=0;q<12;q++){const x=x0+(srnd()-.5)*160,y=y0+(srnd()-.5)*90,R=20+srnd()*55;
  for(const[cx,cy]of[[x,y],[x-S,y],[x,y-S],[x-S,y-S],[x+S,y],[x,y+S]]){const g=r.createRadialGradient(cx,cy,0,cx,cy,R);g.addColorStop(0,'rgba(20,20,20,.55)');g.addColorStop(1,'rgba(20,20,20,0)');r.fillStyle=g;r.fillRect(cx-R,cy-R,2*R,2*R);
   const g2=c.createRadialGradient(cx,cy,0,cx,cy,R);g2.addColorStop(0,'rgba(6,6,12,.25)');g2.addColorStop(1,'rgba(6,6,12,0)');c.fillStyle=g2;c.fillRect(cx-R,cy-R,2*R,2*R);}}}
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,3)),roughnessMap:tex(rou)};}
function stoneWall(){seed=21;const S=512,col=canvas(S),hei=canvas(S),c=col.getContext('2d'),h=hei.getContext('2d');c.fillStyle='#2a2628';c.fillRect(0,0,S,S);h.fillStyle='#202020';h.fillRect(0,0,S,S);
 for(let j=0;j<8;j++)for(let i=-1;i<5;i++){const w=S/4,hh=S/8,x=i*w+(j%2)*w/2,y=j*hh,v=45+srnd()*35|0;c.fillStyle=`rgb(${v+4},${v},${v-3})`;c.fillRect(x+3,y+3,w-6,hh-6);h.fillStyle=`rgb(${150+srnd()*60|0},0,0)`;h.fillStyle='#b8b8b8';h.fillRect(x+3,y+3,w-6,hh-6);}
 noiseDots(c,S,5000,'#1d1a1a','#4d4744',.5,2,.4);noiseDots(h,S,4000,'#8a8a8a','#dadada',.5,2,.3);
 return{map:tex(col,0,1),normalMap:tex(normalFrom(hei,5))};}
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
 {name:'TEMPIO DEL DRAGO',build:buildTemple},
 {name:'DOJO AL TRAMONTO',build:buildDojo},
 {name:'TETTO AL NEON',build:buildNeon},
];
const M=(o)=>new THREE.MeshStandardMaterial(o);
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

/* ---------------- TEMPIO DEL DRAGO (notte, fuochi, stile Mortal Kombat) ---------------- */
function buildTemple(st){const grp=st.grp;
 addSky(grp,[[0,'#04050c'],[.42,'#0b1028'],[.49,'#2a1f3c'],[.52,'#120c18'],[1,'#050508']],1);
 st.fog=new THREE.FogExp2(0x0a0c18,.026);st.bg=0x05060c;
 const fl=addFloor(grp,floorStone(),18,90,{color:0xb8b0b0});
 const wall=stoneWall();wall.map.repeat.set(1,3);wall.normalMap.repeat.set(1,3);
 const stoneM=M({map:wall.map,normalMap:wall.normalMap,roughness:.92,color:0x8a8080});
 // cerchio di colonne con bracieri
 for(let i=0;i<10;i++){const a=i/10*Math.PI*2,r=12.5,x=Math.cos(a)*r,z=Math.sin(a)*r;
  const col=new THREE.Mesh(new THREE.CylinderGeometry(.55,.65,6,16),stoneM);col.position.set(x,3,z);col.castShadow=true;col.receiveShadow=true;grp.add(col);
  const cap=new THREE.Mesh(new THREE.BoxGeometry(1.6,.5,1.6),stoneM);cap.position.set(x,6.2,z);grp.add(cap);const base=new THREE.Mesh(new THREE.BoxGeometry(1.6,.4,1.6),stoneM);base.position.set(x,.2,z);grp.add(base);
  const bowl=new THREE.Mesh(new THREE.CylinderGeometry(.6,.3,.45,16,1,true),M({color:0x2a2018,metalness:.7,roughness:.4,side:THREE.DoubleSide}));bowl.position.set(x,6.7,z);grp.add(bowl);
  if(i%2===0)fireAt(st,grp,x,6.6,z,1.3);}
 // tempio sullo sfondo: scalinata, porta, tetti
 const tz=-24;for(let k=0;k<6;k++){const s=new THREE.Mesh(new THREE.BoxGeometry(18-k*1.2,.45,3),stoneM);s.position.set(0,.22+k*.45,tz+6-k*.9);s.receiveShadow=true;grp.add(s);}
 const body=new THREE.Mesh(new THREE.BoxGeometry(14,9,8),stoneM);body.position.set(0,7,tz);grp.add(body);
 const door=new THREE.Mesh(new THREE.PlaneGeometry(3.4,5.2),new THREE.MeshBasicMaterial({color:0xff6a20}));door.position.set(0,5.3,tz+4.01);grp.add(door);
 const dg=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0xff7a30,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));dg.position.set(0,5.3,tz+4.3);dg.scale.set(9,9,1);grp.add(dg);
 const roofM=M({color:0x1a1416,roughness:.7});for(let k=0;k<3;k++){const rf=new THREE.Mesh(new THREE.ConeGeometry(11-k*2.6,2.4,4,1),roofM);rf.rotation.y=Math.PI/4;rf.scale.set(1,1,.6);rf.position.set(0,12.4+k*2.4,tz);grp.add(rf);}
 // stendardi rossi
 const banTex=(()=>{const c=document.createElement('canvas');c.width=128;c.height=512;const x=c.getContext('2d');x.fillStyle='#7a0a0a';x.fillRect(0,0,128,512);x.fillStyle='#d4a020';x.fillRect(8,8,112,6);x.fillRect(8,498,112,6);
  x.strokeStyle='#e8b830';x.lineWidth=7;x.beginPath();x.arc(64,150,38,0,7);x.stroke();x.beginPath();x.moveTo(30,150);x.quadraticCurveTo(64,90,98,150);x.quadraticCurveTo(64,210,30,150);x.stroke();
  x.font='bold 64px serif';x.fillStyle='#e8b830';x.textAlign='center';x.fillText('龍',64,330);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
 for(const sx of[-5.5,5.5]){const b=new THREE.Mesh(new THREE.PlaneGeometry(1.6,6,1,8),M({map:banTex,side:THREE.DoubleSide,roughness:.9}));b.position.set(sx,6.5,tz+4.05);grp.add(b);st.cloth.push(b);}
 // montagne
 const mM=M({color:0x0a0c16,roughness:1});for(let i=0;i<14;i++){const a=rnd()*6.28,r=90+rnd()*80,h=30+rnd()*50,m=new THREE.Mesh(new THREE.ConeGeometry(h*.9,h,7),mM);m.position.set(Math.cos(a)*r,h/2-4,Math.sin(a)*r);grp.add(m);}
 // luna
 const moon=new THREE.Mesh(new THREE.SphereGeometry(9,32,16),new THREE.MeshBasicMaterial({color:0xdde6ff,fog:false}));moon.position.set(-90,95,-260);grp.add(moon);
 const mg=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0x8aa0ff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));mg.position.copy(moon.position);mg.scale.setScalar(90);grp.add(mg);
 st.amb=particles(grp,MOB?140:300,30,9,0xff7a30,.09,1);st.ambKind='ember';
 st.light={hemi:[0x6a7ab8,0x2a1a14,.8],key:[0xc8d4ff,2.8],rim:[0xff7a30,2.4],rim2:[0x6080ff,1.4],exp:1.12,bloom:[.7,.55,.8]};
 st.env=[[0,'#0a0f24'],[.45,'#1a1830'],[.5,'#5a3020'],[.55,'#1a1010'],[1,'#0a0808']];st.envLights=[[0xff8030,6,[8,2,6]],[0xff8030,6,[-8,2,-6]],[0x8ab0ff,3,[-4,10,-8]]];}

/* ---------------- DOJO AL TRAMONTO (stile Tekken) ---------------- */
function buildDojo(st){const grp=st.grp;
 addSky(grp,[[0,'#1a2a5a'],[.3,'#6a4a7a'],[.45,'#e07a4a'],[.5,'#ffc070'],[.53,'#a05030'],[1,'#301810']],0);
 st.fog=new THREE.FogExp2(0x5a3020,.008);st.bg=0x301810;
 addFloor(grp,floorWood(),10,60,{color:0xd8c0a8});
 const woodM=M({color:0x3a2010,roughness:.6}),darkM=M({color:0x1c0f08,roughness:.7});
 const paper=(()=>{const c=document.createElement('canvas');c.width=256;c.height=256;const x=c.getContext('2d');x.fillStyle='#f2dcb4';x.fillRect(0,0,256,256);x.strokeStyle='#3a2010';x.lineWidth=10;
  for(let i=0;i<=4;i++){x.beginPath();x.moveTo(i*64,0);x.lineTo(i*64,256);x.stroke();x.beginPath();x.moveTo(0,i*64);x.lineTo(256,i*64);x.stroke();}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
 const shojiM=M({map:paper,emissive:0xff9040,emissiveMap:paper,emissiveIntensity:.28,roughness:.9,color:0xb09070});
 const R=11;
 // pareti su tre lati, il quarto aperto sul tramonto
 for(let side=0;side<3;side++){const a=side*Math.PI/2+Math.PI/2;
  for(let k=-4;k<=4;k++){const px=Math.cos(a)*R+Math.cos(a+Math.PI/2)*k*2.4,pz=Math.sin(a)*R+Math.sin(a+Math.PI/2)*k*2.4;
   const pan=new THREE.Mesh(new THREE.PlaneGeometry(2.3,3.6),shojiM);pan.position.set(px,1.9,pz);pan.lookAt(0,1.9,0);grp.add(pan);
   const post=new THREE.Mesh(new THREE.BoxGeometry(.28,4.2,.28),woodM);post.position.set(px+Math.cos(a+Math.PI/2)*1.2,2.1,pz+Math.sin(a+Math.PI/2)*1.2);post.castShadow=true;grp.add(post);}
  const beam=new THREE.Mesh(new THREE.BoxGeometry(22,.4,.5),darkM);beam.position.set(Math.cos(a)*R,4,Math.sin(a)*R);beam.rotation.y=-a+Math.PI/2;grp.add(beam);}
 // travi del soffitto e lanterne
 for(let k=-4;k<=4;k++){const b=new THREE.Mesh(new THREE.BoxGeometry(22,.35,.35),darkM);b.position.set(0,5.2,k*2.6);grp.add(b);}
 for(const [x,z] of[[-5,-5],[5,-5],[-5,4],[5,4]]){const l=new THREE.Mesh(new THREE.CylinderGeometry(.35,.35,.8,12),M({color:0xffd0a0,emissive:0xff9040,emissiveIntensity:2}));l.position.set(x,4.2,z);grp.add(l);
  const g=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0xffa050,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));g.position.copy(l.position);g.scale.setScalar(3);grp.add(g);
  const L=new THREE.PointLight(0xffa050,5,10,1.8);L.position.copy(l.position);grp.add(L);}
 // rotoli appesi
 const scroll=(()=>{const c=document.createElement('canvas');c.width=128;c.height=384;const x=c.getContext('2d');x.fillStyle='#efe2c4';x.fillRect(0,0,128,384);x.fillStyle='#111';x.font='bold 70px serif';x.textAlign='center';x.fillText('闘',64,120);x.fillText('魂',64,250);x.fillStyle='#a01010';x.fillRect(84,300,26,26);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
 for(const x of[-6,0,6]){const s=new THREE.Mesh(new THREE.PlaneGeometry(1.1,3.3),M({map:scroll,roughness:.9}));s.position.set(x,2.4,-R+.06);grp.add(s);}
 // sole e montagne sul lato aperto
 const sun=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0xffb060,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));sun.position.set(0,18,260);sun.scale.setScalar(150);grp.add(sun);
 const sd=new THREE.Mesh(new THREE.CircleGeometry(14,40),new THREE.MeshBasicMaterial({color:0xfff0c0,fog:false}));sd.position.set(0,18,262);sd.lookAt(0,18,0);grp.add(sd);
 const mM=M({color:0x3a2030,roughness:1});for(let i=0;i<10;i++){const x=(i-5)*40+rnd()*20,h=30+rnd()*40,m=new THREE.Mesh(new THREE.ConeGeometry(h,h,6),mM);m.position.set(x,h/2-6,160+rnd()*60);grp.add(m);}
 const deck=new THREE.Mesh(new THREE.BoxGeometry(24,.3,6),woodM);deck.position.set(0,-.15,R+3);grp.add(deck);
 st.amb=particles(grp,MOB?120:240,22,5,0xffe0b0,.05,1);st.ambKind='dust';
 st.light={hemi:[0xffd8b0,0x4a2a1a,.8],key:[0xffc890,3.2],rim:[0xff7030,2.2],rim2:[0xffb060,1.2],exp:.92,bloom:[.4,.45,.9]};
 st.env=[[0,'#3a4a7a'],[.4,'#d08060'],[.5,'#ffd090'],[.55,'#603020'],[1,'#2a1810']];st.envLights=[[0xffc080,8,[0,2,10]],[0xffa050,3,[0,5,-6]]];}

/* ---------------- TETTO AL NEON (città di notte, pioggia) ---------------- */
function buildNeon(st){const grp=st.grp;
 addSky(grp,[[0,'#05040c'],[.4,'#140a24'],[.5,'#3a1a40'],[.53,'#140a1a'],[1,'#050408']],0);
 st.fog=new THREE.FogExp2(0x1a0c24,.022);st.bg=0x080510;
 addFloor(grp,floorAsphalt(),12,70,{color:0x5a5a66,metalness:.05,envMapIntensity:1.1});
 const concrete=M({color:0x4a4850,roughness:.9}),metal=M({color:0x6a6c74,roughness:.4,metalness:.7});
 for(let i=0;i<40;i++){const a=i/40*Math.PI*2,r=13;const b=new THREE.Mesh(new THREE.BoxGeometry(2.1,1,.45),concrete);b.position.set(Math.cos(a)*r,.5,Math.sin(a)*r);b.rotation.y=-a+Math.PI/2;b.receiveShadow=true;grp.add(b);}
 for(let i=0;i<6;i++){const a=rnd()*6.28,r=14.5+rnd()*3;const u=new THREE.Mesh(new THREE.BoxGeometry(1.8,1.2,1.4),metal);u.position.set(Math.cos(a)*r,.6,Math.sin(a)*r);u.rotation.y=rnd()*3;grp.add(u);}
 // insegne al neon
 const signs=[['RATTOPO','#ff2ad4',-6,7,-15,10,2.4],['KILLARA','#2af0ff',6,5.5,-15,10,2.4],['拳','#ffe02a',-14,6,-4,3,3],['闘','#ff3a2a',14,6,2,3,3]];
 for(const[t,c,x,y,z,w,h]of signs){const cv=textCanvas(t,512,128*h/w*4|0||128,c,`bold ${t.length>2?96:110}px Arial Black, Impact, sans-serif`);const tx=new THREE.CanvasTexture(cv);tx.colorSpace=THREE.SRGBColorSpace;
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tx,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));m.position.set(x,y,z);m.lookAt(0,y,0);grp.add(m);
  const frame=new THREE.Mesh(new THREE.BoxGeometry(w+.4,h+.4,.2),M({color:0x101014,roughness:.6}));frame.position.copy(m.position);frame.lookAt(0,y,0);frame.translateZ(-.15);grp.add(frame);
  let L=null;if(w>5){L=new THREE.PointLight(new THREE.Color(c),3.2,22,1.4);L.position.copy(m.position);L.position.y+=1.5;grp.add(L);}st.neons.push({m,L,base:3.2,ph:rnd()*9});}
 // grattacieli con finestre
 const win=(()=>{const c=document.createElement('canvas');c.width=64;c.height=128;const x=c.getContext('2d');x.fillStyle='#000';x.fillRect(0,0,64,128);for(let yy=4;yy<128;yy+=8)for(let xx=4;xx<64;xx+=8){if(rnd()<.45){const v=rnd();x.fillStyle=v<.6?'#ffcf8a':v<.8?'#8ae0ff':'#ff8ad8';x.globalAlpha=.4+rnd()*.6;x.fillRect(xx,yy,5,5);}}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;return t;})();
 for(let i=0;i<(MOB?30:45);i++){const a=rnd()*6.28,r=35+rnd()*90,w=6+rnd()*14,h=20+rnd()*70,d=6+rnd()*14,t=win.clone();t.repeat.set(Math.max(1,w/5|0),Math.max(1,h/8|0));t.needsUpdate=true;
  const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),M({color:0x0c0a14,emissive:0xffffff,emissiveMap:t,emissiveIntensity:1.2,roughness:.8}));b.position.set(Math.cos(a)*r,h/2-12,Math.sin(a)*r);b.rotation.y=rnd()*3;grp.add(b);}
 st.amb=particles(grp,MOB?300:600,26,14,0xa0b8ff,.05,0);st.ambKind='rain';
 st.light={hemi:[0x6a4aa0,0x100818,.7],key:[0xd8c8ff,2.2],rim:[0xff2ad4,1.9],rim2:[0x2af0ff,1.9],exp:1.05,bloom:[.6,.4,.92]};
 st.env=[[0,'#100820'],[.45,'#30184a'],[.5,'#a03080'],[.55,'#186080'],[1,'#080410']];st.envLights=[[0xff2ad4,5,[-6,4,-10]],[0x2af0ff,5,[6,4,-10]],[0xffe02a,2,[-12,5,-2]]];}

let MOB=false;
export function buildStage(i,mobile){MOB=mobile;const st={grp:new THREE.Group(),fires:[],cloth:[],neons:[],amb:null,name:STAGES[i].name};STAGES[i].build(st);return st;}
export function updStage(st,t){if(!st)return;updFires(st,t);
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
