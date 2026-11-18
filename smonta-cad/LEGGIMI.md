# Smonta Studio – CAD semplice per lastre, fori e bulloneria

App per progettare assiemi meccanici bullonati in modo molto più semplice di un CAD tradizionale:
si sceglie un pezzo dalla libreria, si fora toccando, si accoppia foro su foro, si bullona con un tocco.
Tavole quotate, file per il taglio laser, distinta e istruzioni di montaggio si preparano da sole.

Funziona come app Android (APK) e in qualsiasi browser moderno (PC, tablet, telefono).

## Cosa sa fare

**Pezzi**
- Lastre rettangolari e quadrate (con raggio sugli spigoli), barre piatte
- Dischi e flange (con foro centrale)
- Lastre sagomate: fazzoletti triangolari, sagome a L, qualsiasi contorno a vertici, con smussi
- Angolari a L (forabili su entrambe le ali), tubi e tondi pieni
- Bulloneria ISO: viti TE ISO 4017 (M3–M20), dadi ISO 4032, rondelle ISO 7089, perni ISO 2338
- Materiali con densità: S235, S355, inox AISI 304, alluminio 6061, ottone, POM, multistrato

**Fori**
- Passanti per vite con gioco ISO 273 (fine, medio, largo), filettati (con preforo), a diametro libero
- Asole di regolazione (orizzontali, verticali, a 45° o con angolo qualsiasi)
- Schemi: griglia, circonferenza (PCD), agli angoli
- Si fanno toccando la lastra, con aggancio alla griglia, o scrivendo le coordinate

**Montare**
- Accoppia foro su foro: il pezzo si sposta con i fori in asse e le facce a contatto, e ruota da solo
  per far coincidere gli altri fori alla stessa distanza
- Accoppia faccia su faccia
- Sposta e ruota con le maniglie, con i campi numerici o con i pulsanti ±90°
- Bullona: la vite giusta per il foro, lunga quanto serve (pacco + rondelle + dado + 2 filetti);
  nei fori filettati senza dado. Oppure perni. "Fissa tutti" per tutti i fori allineati.
- Serie di copie a passo costante, duplica, nascondi

**Controlli automatici**
- Fori fuori dal pezzo, troppo vicini al bordo (1,2·d), sovrapposti
- Fori di lastre accoppiate non allineati
- Fori troppo stretti o troppo larghi per la vite, viti troppo corte, filetto corto, lastre non a contatto
- Pezzi che si compenetrano

**Consegnare**
- Tavola d'assieme A4: viste frontale, laterale e dall'alto in scala, isometrica con i numeri di posizione,
  quote d'ingombro, distinta e cartiglio
- Tavola quotata di ogni lastra: quote, tabella fori, vertici, spessore, cartiglio con materiale e massa
- DXF (R12) per taglio laser/plasma, uno per lastra o tutti insieme
- Distinta materiali con quantità, masse e coppie di serraggio (CSV per Excel), stampa/PDF
- Montaggio e smontaggio passo-passo animati, con attrezzi, avvertenze e video collegabile
- Esportazione 3D STL e GLB, immagini, progetto .smonta da passare a un collega

## Struttura

| Cartella | Contenuto |
|---|---|
| `www/` | L'app (HTML, CSS, JavaScript a moduli, three.js) |
| `www-build/` | La stessa app impacchettata in un solo file (creata da `tools/build.mjs`) |
| `android/` | Progetto Android: WebView, salvataggio in Download/SmontaStudio, condivisione, stampa |
| `tools/` | Script di impacchettamento (esbuild) |
| `tests/` | Collaudi automatici con Playwright |

## Come si crea l'APK

Serve Node.js, un JDK 17 o più recente, Gradle 8.9+ e l'SDK Android:

```
ANDROID_HOME=/percorso/android-sdk ./build-apk.sh
```

L'APK esce in `android/app/build/outputs/apk/debug/app-debug.apk`.

## Come si prova sul PC

```
cd www && python3 -m http.server 8765
```

e si apre http://127.0.0.1:8765 nel browser.

## Licenze

three.js (MIT, vedi `www/lib/THREE-LICENSE.txt`), font Inter (SIL OFL, vedi `www/fonts`).
