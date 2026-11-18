const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = []; pg.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  await pg.goto('http://127.0.0.1:8765/index.html'); await pg.waitForTimeout(600);
  await pg.click('text=Apri l\'esempio'); await pg.waitForTimeout(1500);
  await pg.click('[data-tab=assy]'); await pg.waitForTimeout(800);
  const [fc] = await Promise.all([pg.waitForEvent('filechooser'), pg.click('text=Collega un video dello smontaggio')]);
  await fc.setFiles('/tmp/claude-0/-home-user-Rattopo-Killara/8dd13f52-8f2b-59bf-afbb-dc14f28d5925/scratchpad/src/SmontaStudio/samples/demo_smontaggio.mp4');
  await pg.waitForTimeout(2500);
  console.log('video', JSON.stringify(await pg.evaluate(() => [window.smonta.store.project.video, window.smonta.store.project.steps.map(s => s.video)])));
  await pg.click('text=Avanti'); await pg.waitForTimeout(2000);
  console.log('elemento video', await pg.evaluate(() => { const v = document.querySelector('.stepVideo'); return v ? [!!v.src, v.currentTime.toFixed(1)] : null; }));
  await pg.screenshot({ path: 't12_video.png' });
  // modifica testo di un passo
  await pg.fill('#right textarea', 'Testo scritto a mano per il passo 2.'); await pg.press('#right textarea', 'Tab'); await pg.waitForTimeout(400);
  console.log('testo passo', await pg.evaluate(() => window.smonta.store.project.steps[1].text));
  console.log(errs.join('\n') || 'nessun errore');
  await b.close();
})();
