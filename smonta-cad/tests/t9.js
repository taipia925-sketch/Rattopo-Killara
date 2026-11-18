const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true });
  const pg = await ctx.newPage();
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(700);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  await pg.click('#btnSave'); await pg.waitForTimeout(500);
  // esporta .smonta
  const [dl] = await Promise.all([pg.waitForEvent('download'), (async () => { await pg.click('#btnExport'); await pg.waitForTimeout(200); await pg.click('.menu >> text=Progetto (.smonta)'); })()]);
  const path = '/root/cadtest/esportato.smonta'; await dl.saveAs(path);
  console.log('scaricato', dl.suggestedFilename(), require('fs').statSync(path).size);
  // ricarica la pagina: lista progetti con miniatura
  await pg.reload(); await pg.waitForTimeout(1200);
  console.log('progetti in lista', await pg.evaluate(() => document.querySelectorAll('.projCard').length), 'miniatura', await pg.evaluate(() => (document.querySelector('.projCard .thumb').style.backgroundImage || '').slice(0, 30)));
  await pg.screenshot({ path: 't9_home.png' });
  // apri da file
  const [fc] = await Promise.all([pg.waitForEvent('filechooser'), pg.click('text=Apri un file')]);
  await fc.setFiles(path); await pg.waitForTimeout(1500);
  console.log('aperto', await pg.evaluate(() => [window.smonta.store.project.name, window.smonta.store.project.parts.length]));
  // rinomina
  await pg.click('#projTitle'); await pg.fill('.dialog input', 'Supporto rinominato'); await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(300);
  console.log('nome', await pg.evaluate(() => document.querySelector('#projName').textContent));
  // STL e GLB
  for (const lab of ['Modello 3D STL', 'Modello 3D GLB']) {
    const [d2] = await Promise.all([pg.waitForEvent('download'), (async () => { await pg.click('#btnExport'); await pg.waitForTimeout(200); await pg.click(`.menu >> text=${lab}`); })()]);
    const pth = '/root/cadtest/' + d2.suggestedFilename(); await d2.saveAs(pth); console.log(lab, d2.suggestedFilename(), require('fs').statSync(pth).size);
  }
  // torna alla home: deve esserci anche il progetto importato
  await pg.click('#btnHome'); await pg.waitForTimeout(600);
  console.log('progetti in lista', await pg.evaluate(() => [...document.querySelectorAll('.projCard b')].map(x => x.textContent)));
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
