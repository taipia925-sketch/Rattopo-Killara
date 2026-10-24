// Prepara i personaggi GLB per il gioco (vedi README.md)
import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {prune,dedup,textureCompress,meshopt,weld,dequantize} from '@gltf-transform/functions';
import {MeshoptDecoder,MeshoptEncoder} from 'meshoptimizer';import sharp from 'sharp';import fs from 'fs';
const S=process.env.S;await MeshoptDecoder.ready;await MeshoptEncoder.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
const ONLY=process.env.ONLY?process.env.ONLY.split(','):null;const LIST0=[['chars/Brute.glb','brute'],['chars/ag_fenrik.glb','mutant'],['chars/ag_maw.glb','maw'],['chars/ag_hollowjack.glb','hulk'],['chars/ag_vex.glb','vampiro'],['chars/ag_erika.glb','erika'],['chars/ag_ozrel.glb','demone'],['models/Soldier.glb','soldato'],['models/Michelle.glb','michelle']];
const LIST=ONLY?LIST0.filter(x=>ONLY.includes(x[1])):LIST0;
fs.mkdirSync('out',{recursive:true});
for(const [src,dst] of LIST){const d=await io.read(`${S}/${src}`);const r=d.getRoot();
 for(const a of r.listAnimations())a.dispose();
 for(const n of r.listNodes()){if(n.getMesh()&&/axe|sword|shield|bow|arrow/i.test(n.getName())){n.getMesh().dispose();n.dispose();}}
 await d.transform(dequantize(),prune(),dedup(),textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024],quality:82}));
 for(const e of r.listExtensionsUsed())if(/meshopt|quantization/i.test(e.extensionName))e.dispose();
 const f=`out/${dst}.glb`;await io.write(f,d);
 const meshes=r.listNodes().filter(n=>n.getMesh()).map(n=>n.getName());console.log(dst,fs.statSync(f).size,meshes.join(','));}
