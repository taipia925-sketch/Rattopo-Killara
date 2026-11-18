const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = [];
  pg.on('console', m => { if (m.type() === 'error' || m.type()==='warning') errs.push(m.type()+': '+m.text()); });
  pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  await pg.goto('http://127.0.0.1:8765/index.html');
  await pg.waitForTimeout(1500);
  await pg.screenshot({ path: 'home.png' });
  await pg.click('text=Apri l\'esempio');
  await pg.waitForTimeout(2500);
  await pg.screenshot({ path: 'ex.png' });
  const info = await pg.evaluate(() => { const p = window.smonta.store.project; return { parts: p.parts.length, stacks: p.stacks.map(s=>s.size+'x'+s.L+(s.warnings.length?'!':'')), checks: window.smonta.app.checks.map(c=>c.level+': '+c.text) }; });
  console.log(JSON.stringify(info, null, 1));
  console.log(errs.join('\n'));
  await b.close();
})();
