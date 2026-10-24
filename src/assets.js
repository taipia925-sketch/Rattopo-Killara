/* Caricamento: libreria animazioni, corpi 3D (su richiesta), facce; campionamento delle hitbox */
import * as THREE from 'three';
import {GLTFLoader} from '../lib/loaders/GLTFLoader.js';
import * as SkeletonUtils from '../lib/utils/SkeletonUtils.js';
import {BODIES,CHARS} from './data.js';
import {LIB,sampleClips,analyzeMoves,analyzeFall} from './frames.js';
const loader=new GLTFLoader(),tl=new THREE.TextureLoader();
const bodies={},pending={},faces={};
export const ASSETS={
 body(i){return bodies[i]||null;},
 face(ci){if(!faces[ci]){const t=tl.load(CHARS[ci].cut);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;faces[ci]=t;}return faces[ci];},
 loadBody(i,onProg){if(bodies[i])return Promise.resolve(bodies[i]);if(pending[i])return pending[i];
  pending[i]=new Promise((res,rej)=>loader.load(BODIES[i].file,g=>{bodies[i]=g.scene;res(g.scene);},e=>{if(onProg&&e.total)onProg(e.loaded/e.total);},err=>{delete pending[i];rej(err);}));return pending[i];},
 ready:i=>!!bodies[i],
};
// carica le facce prima di usarle (servono già pronte quando si proietta la faccia sul modello)
export function preloadFaces(){return Promise.all(CHARS.map((c,ci)=>new Promise(r=>{const t=tl.load(c.cut,()=>r(),undefined,()=>r());t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;faces[ci]=t;})));}
export async function loadCore(onProg){
 const prog={a:0,b:0};const upd=()=>onProg&&onProg(prog.a*.5+prog.b*.5);
 const animP=fetch('assets/anims.json').then(async r=>{const tot=+r.headers.get('content-length')||0;if(!r.body||!tot){prog.a=1;upd();return r.json();}
  const rd=r.body.getReader();let got=0;const parts=[];for(;;){const{done,value}=await rd.read();if(done)break;parts.push(value);got+=value.length;prog.a=Math.min(1,got/tot);upd();}
  return JSON.parse(new TextDecoder().decode(await new Blob(parts).arrayBuffer()));});
 const [lib]=await Promise.all([animP,ASSETS.loadBody(0,p=>{prog.b=p;upd();}),preloadFaces()]);
 LIB.lib=lib;prog.a=prog.b=1;upd();
 // scheletro di riferimento (Brute) per le hitbox e i tempi delle mosse
 const ref=SkeletonUtils.clone(bodies[0]);sampleClips(ref,Object.keys(lib.clips));analyzeMoves();analyzeFall('kdBack');analyzeFall('fallBack');}
