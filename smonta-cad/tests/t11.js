const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(600);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  await pg.evaluate(() => window.smonta.select(window.smonta.store.project.parts[3].id)); await pg.waitForTimeout(500);
  await pg.screenshot({ path: 't11_etichetta.png' });
  await pg.click('#btnHelp'); await pg.waitForTimeout(400); await pg.screenshot({ path: 't11_guida.png' });
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
