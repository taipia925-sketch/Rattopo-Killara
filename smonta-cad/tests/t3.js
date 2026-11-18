const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  for (const [name, opts] of [['tel', { ...devices['Pixel 7'] }], ['telOriz', { ...devices['Pixel 7 landscape'] }], ['tablet', { viewport: { width: 1024, height: 700 }, hasTouch: true, isMobile: true, deviceScaleFactor: 1 }]]) {
    const ctx = await b.newContext({ ...opts, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    const errs = []; pg.on('pageerror', e => errs.push(e.message));
    await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(800);
    await pg.screenshot({ path: `m_${name}_home.png` });
    await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(2000);
    await pg.screenshot({ path: `m_${name}_progetta.png` });
    if (name !== 'tablet') { await pg.click('#btnRight'); await pg.waitForTimeout(500); await pg.screenshot({ path: `m_${name}_destra.png` }); await pg.click('#scrim', { position: { x: 8, y: 120 } }); await pg.waitForTimeout(300); await pg.click('#btnLeft'); await pg.waitForTimeout(500); await pg.screenshot({ path: `m_${name}_sinistra.png` }); await pg.click('#scrim', { position: { x: 380, y: 120 } }); await pg.waitForTimeout(300); }
    await pg.click('[data-tab=assy]'); await pg.waitForTimeout(1800); await pg.screenshot({ path: `m_${name}_montaggio.png` });
    await pg.click('[data-tab=sheet]'); await pg.waitForTimeout(800); await pg.screenshot({ path: `m_${name}_tavola.png` });
    console.log(name, errs.join(' | ') || 'ok');
    await ctx.close();
  }
  await b.close();
})();
