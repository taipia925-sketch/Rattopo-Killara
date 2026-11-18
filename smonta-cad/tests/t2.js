const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = [];
  pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  pg.on('console', m => { if (m.type() === 'error') errs.push('ERR: '+m.text()); });
  await pg.goto('http://127.0.0.1:8765/index.html');
  await pg.waitForTimeout(800);
  await pg.click('text=Nuovo progetto');
  await pg.fill('.dialog input', 'Prova bulloni');
  await pg.click('.dialog .btn.primary');
  await pg.waitForTimeout(500);
  await pg.click('[data-lib=rect]'); await pg.waitForTimeout(400);
  await pg.click('[data-lib=sq]'); await pg.waitForTimeout(600);
  // proietta un punto del mondo sullo schermo
  const scr = async (x,y,z) => pg.evaluate(([x,y,z]) => { const v = window.smonta.viewer; const T = v.camera.position.constructor; const p = new T(x,y,z).project(v.camera); const r = v.renderer.domElement.getBoundingClientRect(); return [r.left + (p.x+1)/2*r.width, r.top + (1-p.y)/2*r.height]; }, [x,y,z]);
  const parts = await pg.evaluate(() => window.smonta.store.project.parts.map(p => ({id:p.id, pos:p.pos, params:p.params, name:p.name})));
  console.log('parti', JSON.stringify(parts));
  const P1 = parts[0], P2 = parts[1];
  // tool foro: due fori su P1 e due su P2 (toccando la faccia superiore)
  await pg.evaluate(() => window.smonta.setTool('hole'));
  await pg.evaluate(() => window.smonta.viewer.fit(window.smonta.store.project,'top',false)); await pg.waitForTimeout(500);
  for (const [P, pts] of [[P1, [[30,50],[90,50]]], [P2, [[20,50],[80,50]]]]) {
    for (const [x,y] of pts) { const [sx,sy] = await scr(P.pos[0]+x, P.pos[1]+y, P.pos[2]+P.params.t); await pg.mouse.click(sx, sy); await pg.waitForTimeout(250); }
  }
  let holes = await pg.evaluate(() => window.smonta.store.project.parts.map(p => p.holes.map(h=>[h.x,h.y,h.d])));
  console.log('fori', JSON.stringify(holes));
  await pg.screenshot({ path: 't2_fori.png' });
  // accoppia: foro 1 di P1 (lato sopra), poi foro 1 di P2 (lato sotto)
  await pg.evaluate(() => window.smonta.setTool('mate'));
  await pg.evaluate(() => window.smonta.viewer.fit(window.smonta.store.project,'iso',false)); await pg.waitForTimeout(500);
  let [sx,sy] = await scr(P1.pos[0]+30, P1.pos[1]+50, P1.pos[2]+5); await pg.mouse.click(sx+4.5*0, sy); await pg.waitForTimeout(300);
  const p2now = await pg.evaluate((id) => window.smonta.store.project.parts.find(p=>p.id===id).pos, P2.id);
  [sx,sy] = await scr(p2now[0]+20+3.5, p2now[1]+50, p2now[2]+5); await pg.mouse.click(sx, sy); await pg.waitForTimeout(600);
  const after = await pg.evaluate(() => window.smonta.store.project.parts.map(p => ({n:p.name, pos:p.pos.map(v=>Math.round(v*10)/10), q:p.quat.map(v=>Math.round(v*100)/100)})));
  console.log('dopo accoppia', JSON.stringify(after));
  await pg.evaluate(() => window.smonta.viewer.fit(window.smonta.store.project,'iso',false)); await pg.waitForTimeout(400);
  await pg.screenshot({ path: 't2_accoppia.png' });
  // bullona tutti
  await pg.evaluate(() => window.smonta.setTool('bolt')); await pg.waitForTimeout(200);
  await pg.click('text=Fissa tutti i fori allineati'); await pg.waitForTimeout(700);
  const st = await pg.evaluate(() => ({ stacks: window.smonta.store.project.stacks.map(s=>s.size+'x'+s.L+' grip '+s.grip+' w:'+s.warnings.join('|')), checks: window.smonta.app.checks.map(c=>c.text) }));
  console.log('fissaggi', JSON.stringify(st));
  await pg.evaluate(() => window.smonta.select([])); await pg.waitForTimeout(300);
  await pg.screenshot({ path: 't2_bulloni.png' });
  // undo / redo
  await pg.keyboard.press('Control+z'); await pg.waitForTimeout(300);
  const nUndo = await pg.evaluate(() => window.smonta.store.project.stacks.length);
  await pg.keyboard.press('Control+y'); await pg.waitForTimeout(300);
  const nRedo = await pg.evaluate(() => window.smonta.store.project.stacks.length);
  console.log('undo/redo stacks', nUndo, nRedo);
  // schede
  await pg.click('[data-tab=sheet]'); await pg.waitForTimeout(600); await pg.screenshot({ path: 't2_tavola.png' });
  await pg.click('[data-tab=bom]'); await pg.waitForTimeout(500); await pg.screenshot({ path: 't2_distinta.png' });
  await pg.click('[data-tab=assy]'); await pg.waitForTimeout(1600); await pg.screenshot({ path: 't2_montaggio.png' });
  await pg.click('text=Avanti'); await pg.waitForTimeout(1500); await pg.screenshot({ path: 't2_montaggio2.png' });
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
