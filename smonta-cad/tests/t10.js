const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage();
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message)); pg.on('console', m => errs.push(m.type() + ' ' + m.text()));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(600);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  console.log(await pg.evaluate(async () => { try { const io = await import('/js/io.js'); const r = await Promise.race([io.exportGLB(window.smonta.viewer.root), new Promise(res => setTimeout(() => res('timeout'), 8000))]); return r === 'timeout' ? r : (r.byteLength || r); } catch (e) { return 'ERR ' + e.message + ' ' + e.stack; } }));
  console.log(errs.filter(x => !x.includes('GPU stall')).join('\n'));
  await b.close();
})();
