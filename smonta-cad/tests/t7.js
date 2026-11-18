const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1400, height: 1000 } });
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message)); pg.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(700);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  await pg.click('[data-tab=sheet]'); await pg.waitForTimeout(2500);
  await pg.screenshot({ path: 't7_assieme.png' });
  const svg = await pg.evaluate(() => document.querySelector('.sheetWrap').innerHTML.length);
  console.log('svg len', svg);
  await pg.selectOption('.pageBar select', { index: 4 }); await pg.waitForTimeout(800);
  await pg.screenshot({ path: 't7_flangia.png' });
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
