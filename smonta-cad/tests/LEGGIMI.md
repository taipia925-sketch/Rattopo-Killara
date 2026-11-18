# Collaudi automatici

Script Playwright che aprono l'app in Chromium, simulano tocchi e controllano i risultati.

1. Avvia il server: `./avvia-server.sh` (porta 8765, cartella `www`).
2. Esegui un collaudo: `NODE_PATH=$(npm root -g) node t2.js` (serve Playwright installato).

| Script | Cosa prova |
|---|---|
| t1 | Apertura dell'esempio, pezzi, fissaggi e controlli |
| t2 | Lastre, fori col tocco, Accoppia, Bullona, annulla/ripeti, schede |
| t3 | Telefono verticale/orizzontale e tablet |
| t4 | Dischi, angolari, fori filettati, misura, esploso, rotazioni, maniglie |
| t6 | Asole (3D, tavola, DXF) |
| t7 | Tavola d'assieme |
| t8 | Lastre sagomate, smussi, serie |
| t9 | Salvataggio, ricarica, apertura da file, STL e GLB |
| t10 | Esportazione GLB |
| t11 | Etichetta misure e guida |
| dxfcheck | Scrive i DXF dell'esempio (da verificare con ezdxf) |
