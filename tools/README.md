# Pipeline degli asset

Script (Node) usati per preparare `assets/`. Le sorgenti originali (FBX Mixamo, GLB dei personaggi) non sono nel repository: la cartella si passa con la variabile `S`.

- `npm install` (three, @gltf-transform, meshoptimizer, sharp)
- `S=<cartella sorgenti> node chars.mjs` → `assets/chars/*.glb`: dequantizza, toglie armi, animazioni incorporate e compressione meshopt, texture webp 1024.
- `S=<cartella sorgenti> node conv.mjs` → `assets/anims.json`: clip Mixamo (elenco in `fbxmap.json` e `glbmap.json`) a 30 fps, 22 ossa, bacino in coordinate del mondo e normalizzato sulla lunghezza della gamba, spostamento orizzontale tolto (riportato in `adv`).
