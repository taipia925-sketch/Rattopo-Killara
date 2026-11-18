const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage();
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(600);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  const files = await pg.evaluate(async () => { const m = await import('/js/drawing.js'); const mo = await import('/js/model.js'); const pr = window.smonta.store.project;
    const p0 = pr.parts[0]; mo.addHole(p0, 120, 80, 9, 'A', 'pass', null, 20, 90);
    return pr.parts.filter(m.canDraw).map(p => [p.name, m.partDXF(p)]); });
  for (const [n, d] of files) require('fs').writeFileSync('dxf_' + n.replace(/\W+/g,'_') + '.dxf', d);
  console.log(files.map(f=>f[0]).join(', '));
  await b.close();
})();
