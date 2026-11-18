const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message + ' ' + e.stack.split('\n')[1]));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(700);
  await pg.click('text=Nuovo progetto'); await pg.fill('.dialog input', 'Collaudo 2'); await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(400);
  const S = (fn, arg) => pg.evaluate(fn, arg);
  const scr = async (x,y,z) => S(([x,y,z]) => { const v = window.smonta.viewer; const T = v.camera.position.constructor; const p = new T(x,y,z).project(v.camera); const r = v.renderer.domElement.getBoundingClientRect(); return [r.left + (p.x+1)/2*r.width, r.top + (1-p.y)/2*r.height]; }, [x,y,z]);
  // disco con fori su circonferenza dal pannello
  await pg.click('[data-lib=disc]'); await pg.waitForTimeout(400);
  await pg.click('text=Circonferenza'); await pg.waitForTimeout(200);
  await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(300);
  console.log('disco fori', await S(() => window.smonta.store.project.parts[0].holes.map(h => [Math.round(h.x*10)/10, Math.round(h.y*10)/10, h.d])));
  // angolare + foro ala B con dialogo
  await pg.click('[data-lib=angle]'); await pg.waitForTimeout(400);
  await pg.click('#right >> text=Foro'); await pg.waitForTimeout(200);
  await pg.evaluate(() => { const d = document.querySelector('.dialog'); const ins = d.querySelectorAll('input'); ins[0].value='60'; ins[1].value='25'; const sels = d.querySelectorAll('select'); sels[sels.length-1].value='B'; });
  await pg.click('.dialog .btn.primary'); await pg.waitForTimeout(300);
  console.log('angolare fori', await S(() => window.smonta.store.project.parts[1].holes));
  // foro filettato via strumento su una lastra, poi lastra sopra con foro passante e bullonatura → niente dado
  await pg.click('[data-lib=rect]'); await pg.waitForTimeout(400);
  await pg.click('[data-lib=sq]'); await pg.waitForTimeout(400);
  const parts = await S(() => window.smonta.store.project.parts.map(p => ({id:p.id,pos:p.pos,params:p.params})));
  const [D, A, R, Q] = parts;
  await S(() => window.smonta.setTool('hole'));
  await pg.click('.seg >> text=Filettato'); await pg.waitForTimeout(200);
  await S(() => window.smonta.viewer.fit(window.smonta.store.project,'top',false)); await pg.waitForTimeout(400);
  let [sx,sy] = await scr(R.pos[0]+100, R.pos[1]+50, R.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(300);
  await pg.click('.seg >> text=Per vite'); await pg.waitForTimeout(200);
  [sx,sy] = await scr(Q.pos[0]+50, Q.pos[1]+50, Q.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(300);
  console.log('fori R,Q', await S(() => window.smonta.store.project.parts.slice(2).map(p => p.holes.map(h=>[h.x,h.y,h.d,h.kind,h.thread]))));
  // accoppia Q su R via API interna (foro su foro)
  await S(() => window.smonta.setTool('mate'));
  await S(() => window.smonta.viewer.fit(window.smonta.store.project,'iso',false)); await pg.waitForTimeout(300);
  [sx,sy] = await scr(R.pos[0]+100, R.pos[1]+50, R.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(200);
  [sx,sy] = await scr(Q.pos[0]+50, Q.pos[1]+50, Q.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(400);
  console.log('Q pos', await S((id) => window.smonta.store.project.parts.find(p=>p.id===id).pos, Q.id));
  await S(() => window.smonta.setTool('bolt')); await pg.click('text=Fissa tutti i fori allineati'); await pg.waitForTimeout(400);
  console.log('stack filettato', JSON.stringify(await S(() => window.smonta.store.project.stacks.map(s => ({k:s.kind,size:s.size,L:s.L,thr:s.threaded,n:s.members.length,w:s.warnings,plates:s.plates.map(id=>window.smonta.store.project.parts.find(p=>p.id===id).name)})))));
  // perno: altra coppia di fori
  // misura
  await S(() => window.smonta.setTool('measure'));
  [sx,sy] = await scr(R.pos[0]+5, R.pos[1]+5, R.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(150);
  [sx,sy] = await scr(R.pos[0]+195, R.pos[1]+5, R.params.t); await pg.mouse.click(sx,sy); await pg.waitForTimeout(250);
  console.log('misura', await S(() => window.smonta.app.measure.map(v => v.toArray().map(x=>Math.round(x)))));
  // esploso
  await S(() => window.smonta.setTool('explode')); await pg.click('#right >> text=Apri'); await pg.waitForTimeout(900);
  await pg.screenshot({ path: 't4_esploso.png' });
  await pg.click('#right >> text=Chiudi'); await pg.waitForTimeout(800);
  // rotazione ±90 e sposta numerico sull'angolare
  await S((id) => window.smonta.select(id), A.id); await S(() => window.smonta.setTool('rotate')); await pg.waitForTimeout(200);
  await pg.click('button[title*="asse X"]'); await pg.waitForTimeout(300);
  console.log('angolare quat', await S((id) => window.smonta.store.project.parts.find(p=>p.id===id).quat.map(v=>Math.round(v*100)/100), A.id));
  // trascina la maniglia di spostamento (freccia X)
  await S(() => window.smonta.setTool('move')); await pg.waitForTimeout(300);
  const before = await S((id) => window.smonta.store.project.parts.find(p=>p.id===id).pos, A.id);
  const h0 = await scr(before[0], before[1], before[2]); const h1 = await scr(before[0]+60, before[1], before[2]);
  const hx = h0[0] + (h1[0]-h0[0])*0.75, hy = h0[1] + (h1[1]-h0[1])*0.75;
  await pg.mouse.move(hx, hy); await pg.mouse.down(); await pg.mouse.move(hx+40, hy, { steps: 6 }); await pg.mouse.up(); await pg.waitForTimeout(300);
  const after = await S((id) => window.smonta.store.project.parts.find(p=>p.id===id).pos, A.id);
  console.log('sposta', before.map(v=>Math.round(v)), '->', after.map(v=>Math.round(v)));
  await pg.screenshot({ path: 't4_sposta.png' });
  // salva su file e riapri
  const proj = await S(() => JSON.stringify(window.smonta.store.project));
  console.log('json byte', proj.length);
  // controlli: buco fuori
  await S(() => { const p = window.smonta.store.project.parts[2]; window.smonta.mutate('t', () => { p.holes.push({id:'hx', x:2, y:2, d:9, face:'A', kind:'pass'}); }); });
  await pg.waitForTimeout(400);
  await pg.waitForTimeout(600);
  console.log('controlli', await S(() => window.smonta.app.checks.map(c => c.level + ' ' + c.text)));
  console.log('diretto', await S(async () => { try { const m = await import('/js/mates.js'); return m.runChecks(window.smonta.store.project).map(c=>c.text); } catch (e) { return 'ECC ' + e.message + ' ' + e.stack; } }));
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
