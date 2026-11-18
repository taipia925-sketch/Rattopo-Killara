const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(700);
  await pg.click('text=Nuovo progetto'); await pg.fill('.dialog input', 'Sagome'); await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(400);
  await pg.click('[data-lib=gusset]'); await pg.waitForTimeout(400);
  await pg.click('[data-lib=lplate]'); await pg.waitForTimeout(400);
  // smusso sul vertice 2 del fazzoletto
  await pg.evaluate(() => window.smonta.select(window.smonta.store.project.parts[0].id)); await pg.waitForTimeout(300);
  await pg.click('#right >> text=Smusso'); await pg.waitForTimeout(200);
  await pg.evaluate(() => { const ins = document.querySelectorAll('.dialog input'); ins[0].value = '2'; ins[1].value = '15'; });
  await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(300);
  // foro nel fazzoletto
  await pg.click('#right >> text=Foro'); await pg.waitForTimeout(200);
  await pg.evaluate(() => { const ins = document.querySelectorAll('.dialog input'); ins[0].value = '30'; ins[1].value = '30'; });
  await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(300);
  console.log(JSON.stringify(await pg.evaluate(() => window.smonta.store.project.parts.map(p => ({ n: p.name, pts: p.params.pts, holes: p.holes.length })))));
  // serie della lastra a L
  await pg.evaluate(() => window.smonta.select(window.smonta.store.project.parts[1].id)); await pg.waitForTimeout(300);
  await pg.click('#right button[title="Serie di copie"]'); await pg.waitForTimeout(200);
  await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(500);
  console.log('pezzi', await pg.evaluate(() => window.smonta.store.project.parts.length));
  await pg.evaluate(() => { window.smonta.select([]); window.smonta.viewer.fit(window.smonta.store.project, 'iso', false); }); await pg.waitForTimeout(500);
  await pg.screenshot({ path: 't8_3d.png' });
  await pg.evaluate(() => window.smonta.select(window.smonta.store.project.parts[0].id)); await pg.waitForTimeout(200);
  await pg.click('[data-tab=sheet]'); await pg.waitForTimeout(800); await pg.screenshot({ path: 't8_tavola.png' });
  const dxf = await pg.evaluate(async () => { const m = await import('/js/drawing.js'); return m.partDXF(window.smonta.store.project.parts[0]); });
  require('fs').writeFileSync('fazzoletto.dxf', dxf);
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
