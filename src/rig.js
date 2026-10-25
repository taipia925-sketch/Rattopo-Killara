import * as THREE from 'three';
export const strip=n=>n.replace(/^.*?mixamorig\d*:?/,'').replace(/^.*:/,'').replace(/_\d+$/,'');
// informazioni sullo scheletro (tutte le copie dello stesso osso, se il modello ne ha più di una)
export function rigInfo(root){root.updateMatrixWorld(true);const bones={},all={};root.traverse(o=>{if(o.isBone){const k=strip(o.name);(all[k]=all[k]||[]).push(o);if(!bones[k])bones[k]=o;}});
 const inv=root.matrixWorld.clone().invert(),W=n=>bones[n].getWorldPosition(new THREE.Vector3()).applyMatrix4(inv);
 const legW=W('LeftUpLeg').distanceTo(W('LeftLeg'))+W('LeftLeg').distanceTo(W('LeftFoot'));
 const hips=all.Hips.map(h=>{const pm=inv.clone().multiply(h.parent.matrixWorld);const q=new THREE.Quaternion();pm.decompose(new THREE.Vector3(),q,new THREE.Vector3());return{b:h,pmi:pm.clone().invert(),qi:q.invert()};});
 return{bones,all,legW,hips,hipsW:W('Hips').y,headW:W('Head').y};}
// clip della libreria → AnimationClip per questo modello (bacino senza spostamento orizzontale)
export function buildClip(lib,key,rig){const c=lib.clips[key];if(!c)return null;const n=c.n,times=new Float32Array(n);for(let i=0;i<n;i++)times[i]=Math.min(c.d,i/lib.fps);
 const tracks=[],q=new THREE.Quaternion(),p=new THREE.Vector3();
 for(const b in c.q){const list=rig.all[b];if(!list)continue;
  if(b==='Hips'){for(const h of rig.hips){const v=new Float32Array(n*4);for(let i=0;i<n;i++){q.fromArray(c.q[b],i*4).premultiply(h.qi);q.toArray(v,i*4);}tracks.push(new THREE.QuaternionKeyframeTrack(h.b.name+'.quaternion',times,v));}}
  else for(const bone of list)tracks.push(new THREE.QuaternionKeyframeTrack(bone.name+'.quaternion',times,c.q[b]));}
 const hp=c.hp,L=rig.legW,x0=hp[0],z0=hp[2],x1=hp[(n-1)*3],z1=hp[(n-1)*3+2];
 for(const h of rig.hips){const v=new Float32Array(n*3);for(let i=0;i<n;i++){const k=n>1?i/(n-1):0;p.set((hp[i*3]-(x0+(x1-x0)*k))*L,hp[i*3+1]*L,(hp[i*3+2]-(z0+(z1-z0)*k))*L).applyMatrix4(h.pmi);p.toArray(v,i*3);}
  tracks.push(new THREE.VectorKeyframeTrack(h.b.name+'.position',times,v));}
 const cl=new THREE.AnimationClip(key,c.d,tracks);cl.adv=Math.hypot(x1-x0,z1-z0);return cl;}
/* testa 3D ricavata dalla foto ritagliata: stessa sagoma della foto, gonfiata con un po' di volume (davanti la foto, dietro i capelli).
   Va al posto della testa del modello (cappucci, maschere ed elmi spariscono con lei) e segue l'osso della testa in ogni animazione. */
const HEADS=new Map();
export function makeHead(tex){const img=tex.image;let H=HEADS.get(img);
 if(!H){const N=72,iw=img.width,ih=img.height,gw=N,gh=Math.round(N*ih/iw),c=document.createElement('canvas');c.width=gw+1;c.height=gh+1;const x=c.getContext('2d',{willReadFrequently:true});
  x.drawImage(img,0,0,gw+1,gh+1);const px=x.getImageData(0,0,gw+1,gh+1).data,A=(i,j)=>px[(j*(gw+1)+i)*4+3]/255;
  // distanza dal bordo della sagoma (passate avanti/indietro) → volume
  const W1=gw+1,D=new Float32Array(W1*(gh+1));for(let j=0;j<=gh;j++)for(let i=0;i<=gw;i++)D[j*W1+i]=A(i,j)>.5?1e9:0;
  for(let j=0;j<=gh;j++)for(let i=0;i<=gw;i++){const k=j*W1+i;if(i>0)D[k]=Math.min(D[k],D[k-1]+1);if(j>0)D[k]=Math.min(D[k],D[k-W1]+1);if(i>0&&j>0)D[k]=Math.min(D[k],D[k-W1-1]+1.414);if(i<gw&&j>0)D[k]=Math.min(D[k],D[k-W1+1]+1.414);}
  for(let j=gh;j>=0;j--)for(let i=gw;i>=0;i--){const k=j*W1+i;if(i<gw)D[k]=Math.min(D[k],D[k+1]+1);if(j<gh)D[k]=Math.min(D[k],D[k+W1]+1);if(i<gw&&j<gh)D[k]=Math.min(D[k],D[k+W1+1]+1.414);if(i>0&&j<gh)D[k]=Math.min(D[k],D[k+W1-1]+1.414);}
  let dm=1;for(const d of D)if(d<1e8)dm=Math.max(dm,d);
  // colore dei capelli: media dei pixel pieni nella parte alta della sagoma
  let r=0,g=0,b=0,n=0,top=gh;for(let j=0;j<=gh&&top===gh;j++)for(let i=0;i<=gw;i++)if(A(i,j)>.5){top=j;break;}
  for(let j=top;j<top+gh*.18;j++)for(let i=0;i<=gw;i++){const k=(j*W1+i)*4;if(px[k+3]>128){r+=px[k];g+=px[k+1];b+=px[k+2];n++;}}
  const hair=new THREE.Color().setRGB(r/n/255,g/n/255,b/n/255,THREE.SRGBColorSpace).multiplyScalar(.85);
  const mk=(front)=>{const pos=[],uv=[],idx=[],asp=ih/iw;
   for(let j=0;j<=gh;j++)for(let i=0;i<=gw;i++){const d=Math.min(D[j*W1+i],dm)/dm,z=Math.sqrt(d)*(front?.08:-.3);pos.push(i/gw-.5,(.5-j/gh)*asp,z);uv.push(i/gw,1-j/gh);}
   for(let j=0;j<gh;j++)for(let i=0;i<gw;i++){const a=j*W1+i,b2=a+1,c2=a+W1,d2=c2+1;if(Math.max(A(i,j),A(i+1,j),A(i,j+1),A(i+1,j+1))<.3)continue;front?idx.push(a,c2,b2,b2,c2,d2):idx.push(a,b2,c2,b2,d2,c2);}
   const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();return geo;};
  const mc=document.createElement('canvas');mc.width=img.width;mc.height=img.height;const mx=mc.getContext('2d');mx.drawImage(img,0,0);const md=mx.getImageData(0,0,mc.width,mc.height);
  for(let k=0;k<md.data.length;k+=4){const a=md.data[k+3];md.data[k]=md.data[k+1]=md.data[k+2]=a;md.data[k+3]=255;}mx.putImageData(md,0,0);
  H={front:mk(true),back:mk(false),hair,mask:new THREE.CanvasTexture(mc),asp:ih/iw,
   chin:(()=>{let bot=0;for(let j=gh;j>=0&&!bot;j--)for(let i=0;i<=gw;i++)if(A(i,j)>.5){bot=j;break;}return{top:top/gh,bot:bot/gh};})()};HEADS.set(img,H);}
 const fm=new THREE.MeshBasicMaterial({map:tex,alphaTest:.5,toneMapped:false,fog:false}); // colori identici alla foto
 const bm=new THREE.MeshStandardMaterial({color:H.hair,alphaMap:H.mask,alphaTest:.5,roughness:.85,metalness:0});
 const g=new THREE.Group(),f=new THREE.Mesh(H.front,fm),b=new THREE.Mesh(H.back,bm);f.castShadow=b.castShadow=true;g.add(f,b);
 return{g,mat:fm,mats:[fm,bm],asp:H.asp,top:H.chin.top,bot:H.chin.bot};}
