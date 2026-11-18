// Smonta Studio – CAD semplice per lastre, fori e bulloneria.
import * as THREE from 'three';
import { Viewer } from './viewer.js';
import { store, on, emit, mutate, checkpoint, commit, undo, redo, part, selectedParts, select, saveNow, listProjects, loadProject, deleteProject, setProject, createProject } from './store.js';
import { LIBRARY, PART_TYPES, newPart, describe, kindLabel, mass, area2D, addHole, holeInside, patternGrid, patternCircle, patternCorners, faces, clone, uid, holeAxes } from './model.js';
import { BOLTS, BOLT_SIZES, BOLT_LENGTHS, PIN_DIAMETERS, PIN_LENGTHS, MATERIALS, boltForHole, holeFit, fmt } from './iso.js';
import { pickHole, mateHoles, mateFaces, makeFastener, rebuildAllStacks, runChecks, isSheet, holeStack } from './mates.js';
import { holeMarker, worldBox } from './geom.js';
import { drawingSVG, partDXF, canDraw, holeGroups } from './drawing.js';
import { currentSteps, autoSteps, explodeVectors, bom, bomCSV } from './assembly.js';
import { saveFile, openFile, exportSTL, exportGLB, safeName } from './io.js';
import { buildExample } from './example.js';
import * as V from './videos.js';
import { $, $$, h, icon, toast, modal, confirmBox, promptBox, formBox, popMenu, numField, fmtIn, parseNum, closeModal } from './ui.js';

const app = {
  tab: 'design', tool: 'select',
  hole: { mode: 'bolt', size: 'M8', fit: 'medium', d: 9, thread: 'M8' },
  fast: { kind: 'bolt', size: 'auto' },
  mate: null,          // primo elemento scelto per Accoppia
  measure: [],          // punti della misura
  hover: null,
  explode: 0,
  showFasteners: true,
  checks: [],
  assy: { i: 0, t: 1, playing: false, reverse: false, steps: [], vectors: null },
};
let viewer;

const TOOLS = [
  ['select', 'Seleziona', 'select', 'Tocca un pezzo per selezionarlo. Trascina per girare la vista, con due dita sposti e ingrandisci.'],
  ['move', 'Sposta', 'move', 'Trascina le frecce per spostare il pezzo selezionato (aggancio alla griglia). Puoi anche scrivere le coordinate.'],
  ['rotate', 'Ruota', 'rotate', 'Trascina gli anelli per ruotare, oppure usa i pulsanti ±90° nel pannello a destra.'],
  ['hole', 'Foro', 'hole', 'Tocca una faccia di una lastra per fare un foro in quel punto. Misura e tipo si scelgono a destra.'],
  ['mate', 'Accoppia', 'mate', 'Tocca un foro (o una faccia) del pezzo fermo, poi quello del pezzo da spostare: si allineano da soli.'],
  ['bolt', 'Bullona', 'bolted', 'Tocca un foro: vite, rondelle e dado della misura giusta attraversano tutte le lastre allineate.'],
  ['measure', 'Misura', 'measure', 'Tocca due punti (o due fori) per misurare la distanza.'],
  ['explode', 'Esploso', 'explode', 'Sposta il cursore a destra per aprire l\'assieme e vedere come è fatto.'],
];

// ===================================================================== avvio
function init() {
  viewer = new Viewer($('#view'));
  renderToolbar(); renderChips();
  bindTop(); bindView(); bindKeys(); bindStatus();
  on((kind) => refresh(kind));
  const list = listProjects();
  showHome(true);
  if (!list.length) toast('Benvenuto! Crea un progetto o apri l\'esempio.', '', 3500);
  window.smonta = { app, store, viewer, mutate, select, setTool, setTab };   // per i collaudi
  window.addEventListener('beforeunload', () => { if (store.project) saveNow(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && store.project) saveNow(); });
}

// ===================================================================== aggiornamento generale
let checksTimer = null;
function refresh(kind = 'change') {
  const p = store.project;
  if (!p) return;
  if (kind === 'reload') { app.mate = null; app.measure = []; }
  if (kind !== 'selection' && kind !== 'saved') {
    app.assy.vectors = null;
    clearTimeout(checksTimer);
    checksTimer = setTimeout(() => { app.checks = runChecks(store.project); renderStatus(); if (!selectedParts().length && app.tab === 'design') renderRight(); updateStates(); }, 120);
  }
  if (kind === 'saved') { renderTitle(); return; }
  viewer.sync(p);
  applyVisibility();
  applyExplode();
  updateStates();
  renderLeft(); renderRight(); renderTitle(); renderStatus();
  if (kind === 'reload') viewer.fit(p, null, false);
  updateGizmo();
  drawOverlay();
  if (app.tab === 'sheet') renderSheet();
  if (app.tab === 'bom') renderBom();
  if (app.tab === 'assy' && kind !== 'selection') { app.assy.steps = currentSteps(p); renderAssy(); }
  $('#btnUndo').disabled = !store.undoStack.length; $('#btnRedo').disabled = !store.redoStack.length;
}

function updateStates() {
  const m = new Map();
  const errParts = new Set(app.checks.filter((c) => c.level === 'err').flatMap((c) => c.parts));
  for (const id of errParts) m.set(id, 'warn');
  if (app.tab === 'assy') { viewer.setStates(m); return; }
  for (const id of store.selection) m.set(id, 'selected');
  // selezionando una vite si evidenzia tutto il suo pacco
  for (const sp of selectedParts()) if (sp.stack) for (const q of store.project.parts) if (q.stack === sp.stack) m.set(q.id, 'selected');
  viewer.setStates(m);
}

function applyVisibility() {
  viewer.hidden.clear();
  for (const p of store.project.parts) {
    if (p.hidden) viewer.hidden.add(p.id);
    if (!app.showFasteners && p.stack) viewer.hidden.add(p.id);
  }
  for (const [id, ent] of viewer.objects) ent.obj.visible = !viewer.hidden.has(id);
}

// ===================================================================== barra superiore e schede
function bindTop() {
  $('#btnHome').onclick = () => { if (store.project) { saveWithThumb(); } showHome(true); };
  $('#projTitle').onclick = renameProject;
  $$('#tabs .tab').forEach((b) => b.onclick = () => setTab(b.dataset.tab));
  $('#btnUndo').onclick = () => { const r = undo(); if (r) toast(`Annullato${typeof r === 'string' && r ? ': ' + r : ''}`); };
  $('#btnRedo').onclick = () => { const r = redo(); if (r) toast(`Ripetuto${typeof r === 'string' && r ? ': ' + r : ''}`); };
  $('#btnSave').onclick = () => { saveWithThumb(); toast('Progetto salvato', 'ok'); };
  $('#btnExport').onclick = (e) => exportMenu(e.currentTarget);
  $('#btnExportM').onclick = (e) => exportMenu(e.currentTarget);
  $('#btnLeft').onclick = () => togglePanel('Left');
  $('#btnRight').onclick = () => togglePanel('Right');
  $('#scrim').onclick = () => togglePanel(null);
  $('#btnFit').onclick = () => viewer.fit(store.project, null);
}
function togglePanel(which) {
  const b = document.body;
  const was = which && b.classList.contains('show' + which);
  b.classList.remove('showLeft', 'showRight');
  if (which && !was) b.classList.add('show' + which);
  $('#scrim').classList.toggle('hidden', !b.classList.contains('showLeft') && !b.classList.contains('showRight'));
}
const isNarrow = () => window.innerWidth <= 860;

function setTab(tab) {
  app.tab = tab;
  $$('#tabs .tab').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  $('#sheetView').classList.toggle('hidden', tab !== 'sheet');
  $('#bomView').classList.toggle('hidden', tab !== 'bom');
  $('#assy').classList.toggle('hidden', tab !== 'assy');
  $('#toolbar').classList.toggle('hidden', tab !== 'design');
  $('#chips').classList.toggle('hidden', tab === 'sheet' || tab === 'bom');
  $('#btnFit').classList.toggle('hidden', tab === 'sheet' || tab === 'bom');
  if (tab !== 'assy') { stopAssy(); viewer.offsets.clear(); for (const p of store.project.parts) viewer.applyOffset(p.id); applyExplode(); }
  if (tab === 'assy') { setTool('select'); app.assy.steps = currentSteps(store.project); app.assy.i = 0; app.assy.t = 1; renderAssy(); applyAssy(); }
  setTip();
  togglePanel(null);
  refresh('tab');
}

function renderTitle() {
  const p = store.project; if (!p) return;
  $('#projName').textContent = p.name;
  const nMain = p.parts.filter((x) => !x.stack).length, nF = p.stacks.length;
  $('#projInfo').textContent = `${store.dirty ? 'Modifiche non salvate' : 'Salvato'} · ${nMain} pezz${nMain === 1 ? 'o' : 'i'}, ${nF} fissaggi${nF === 1 ? 'o' : ''}`;
  document.title = `${p.name} – Smonta Studio`;
}
async function renameProject() {
  const v = await promptBox('Rinomina il progetto', 'Nome del progetto', store.project.name);
  if (v) mutate('rinomina progetto', (p) => { p.name = v; });
}

// ===================================================================== barra strumenti
function renderToolbar() {
  const tb = $('#toolbar'); tb.innerHTML = '';
  for (const [id, label, ic] of TOOLS) {
    tb.append(h('button', { class: 'tool' + (app.tool === id ? ' on' : ''), 'data-tool': id, title: label, onclick: () => setTool(id), html: `${icon(ic)}<span>${label}</span>` }));
  }
}
function setTool(t) {
  app.tool = t; app.mate = null; if (t !== 'measure') app.measure = [];
  $$('#toolbar .tool').forEach((b) => b.classList.toggle('on', b.dataset.tool === t));
  if (t !== 'explode' && app.explode) { app.explode = 0; applyExplode(); }
  setTip(); updateGizmo(); drawOverlay(); renderRight();
  if (isNarrow() && ['hole', 'bolt', 'explode'].includes(t)) toast('Le opzioni dello strumento sono nel pannello a destra (icona in alto).', '', 2500);
}
function setTip(text) {
  const tip = $('#tip');
  if (app.tab === 'assy' || app.tab === 'sheet' || app.tab === 'bom') { tip.classList.add('off'); return; }
  const def = TOOLS.find((x) => x[0] === app.tool);
  let t = text || (def ? def[3] : '');
  if (!text && app.tool === 'mate' && app.mate) t = app.mate.kind === 'hole' ? 'Ora tocca il foro del pezzo da avvicinare: verrà spostato sopra questo.' : 'Ora tocca la faccia del pezzo da appoggiare.';
  if (!text && app.tool === 'measure' && app.measure.length === 1) t = 'Tocca il secondo punto.';
  tip.querySelector('span').textContent = t;
  tip.querySelector('use').setAttribute('href', '#i-' + (def ? def[2] : 'select'));
  tip.classList.toggle('off', !t);
}

function renderChips() {
  const c = $('#chips'); c.innerHTML = '';
  const views = [['iso', 'ISO'], ['front', 'Fronte'], ['top', 'Alto'], ['right', 'Destra']];
  const vb = h('button', { class: 'chip', html: `${icon('cube')}<span>Vista</span>` });
  vb.onclick = () => popMenu(vb, views.map(([k, l]) => ({ label: l, icon: 'cube', run: () => viewer.fit(store.project, k) })));
  c.append(vb);
  const fb = h('button', { class: 'chip' + (app.showFasteners ? ' on' : ''), html: `${icon('bolt')}<span>Viti</span>`, title: 'Mostra o nascondi la bulloneria' });
  fb.onclick = () => { app.showFasteners = !app.showFasteners; fb.classList.toggle('on', app.showFasteners); applyVisibility(); };
  c.append(fb);
  const xb = h('button', { class: 'chip', html: `${icon('layers')}<span>Trasparenza</span>`, title: 'Vedi attraverso i pezzi non selezionati' });
  xb.onclick = () => { app.xray = !app.xray; xb.classList.toggle('on', app.xray); applyXray(); };
  c.append(xb);
}
function applyXray() {
  const m = new Map();
  for (const p of store.project.parts) if (app.xray && !store.selection.includes(p.id)) m.set(p.id, 'ghost');
  for (const id of store.selection) m.set(id, 'selected');
  viewer.setStates(m);
}

// ===================================================================== pannello sinistro
function renderLeft() {
  const L = $('#left'); const sc = L.scrollTop; L.innerHTML = '';
  L.append(h('h2', {}, 'Libreria'));
  for (const g of LIBRARY) {
    L.append(h('div', { class: 'secTitle' }, g.group));
    for (const it of g.items) {
      const orange = ['bolt', 'nut', 'washer', 'pin'].includes(it.type);
      L.append(h('button', { class: 'libItem', 'data-lib': it.key, onclick: () => addFromLibrary(it) },
        h('span', { class: 'tile' + (orange ? ' orange' : ''), html: icon(it.key === 'sq' ? 'square' : it.key === 'ring' ? 'ring' : it.key === 'flat' ? 'bar' : it.key === 'bar' ? 'tube' : PART_TYPES[it.type].icon) }),
        h('span', {}, h('b', {}, it.name), h('small', {}, it.sub + ' mm'))));
    }
  }
  const p = store.project;
  const mains = p.parts.filter((x) => !x.stack);
  L.append(h('div', { class: 'secTitle' }, `Assieme (${mains.length})`));
  const tree = h('div', { class: 'tree' });
  if (!mains.length) tree.append(h('div', { class: 'muted', style: { padding: '4px 8px', fontSize: '12px' } }, 'Ancora vuoto: tocca un pezzo della libreria.'));
  for (const x of mains) tree.append(treeRow(x));
  if (p.stacks.length) {
    tree.append(h('div', { class: 'secTitle' }, `Fissaggi (${p.stacks.length})`));
    for (const s of p.stacks) {
      const first = p.parts.find((q) => q.id === s.members.find((id) => { const pp = p.parts.find((z) => z.id === id); return pp && (pp.type === 'bolt' || pp.type === 'pin'); }));
      if (!first) continue;
      const on = store.selection.some((id) => s.members.includes(id));
      tree.append(h('div', { class: 'treeItem sub' + (on ? ' on' : ''), onclick: () => select(first.id) },
        h('span', { html: icon(s.kind === 'pin' ? 'pin' : 'bolt') }), h('span', { class: 'nm' }, s.kind === 'pin' ? `Perno ${s.size}×${s.L}` : `${s.size}×${s.L}${s.threaded ? ' in filetto' : ' + dado'}`),
        (s.warnings || []).length ? h('span', { html: icon('warn'), style: { color: 'var(--warn)' } }) : null));
    }
  }
  L.append(tree);
  L.scrollTop = sc;
}
function treeRow(x) {
  const on = store.selection.includes(x.id);
  const row = h('div', { class: 'treeItem' + (on ? ' on' : '') + (x.hidden ? ' off' : ''), onclick: (e) => { select(x.id, e.shiftKey || e.ctrlKey || e.metaKey); if (isNarrow()) togglePanel(null); } },
    h('span', { html: icon(PART_TYPES[x.type].icon) }), h('span', { class: 'nm' }, x.name), h('small', {}, describe(x).replace(' mm', '')));
  const eye = h('button', { class: 'eye', title: x.hidden ? 'Mostra' : 'Nascondi', html: icon(x.hidden ? 'eyeoff' : 'eye') });
  eye.onclick = (e) => { e.stopPropagation(); mutate(x.hidden ? 'mostra' : 'nascondi', () => { x.hidden = !x.hidden; }); };
  row.append(eye);
  return row;
}

function addFromLibrary(it) {
  const p = store.project;
  let made;
  mutate(`aggiungi ${it.name}`, (pr) => {
    const np = newPart(pr, it.type, clone(it.params), { name: undefined });
    if (it.type === 'plate' && it.key === 'flat') np.name = np.name.replace('Lastra', 'Barra');
    if (it.pattern) patternCircle(np, { n: it.pattern.n, pcd: it.pattern.pcd, d: it.pattern.d, start: 45 });
    placeNew(pr, np);
    pr.parts.push(np);
    made = np;
  });
  select(made.id);
  if (isNarrow()) togglePanel(null);
  toast(`${made.name} aggiunto. ${isSheet(made) ? 'Usa Foro per forarlo e Accoppia per unirlo agli altri pezzi.' : ''}`, 'ok', 3000);
  if (p.parts.length <= 1) viewer.fit(p, 'iso'); else viewer.fit(p);
}
/** Posiziona un pezzo nuovo vicino all'assieme senza sovrapporlo */
function placeNew(pr, np) {
  const others = pr.parts.filter((x) => !x.stack);
  const box = new THREE.Box3(); for (const o of others) box.union(worldBox(o));
  const nb = worldBox(np); const sz = nb.getSize(new THREE.Vector3());
  let x = 0, y = 0, z = 0;
  if (!box.isEmpty()) { x = box.max.x + 30; y = box.min.y; z = 0; }
  // il centro dei dischi è nell'origine del pezzo
  const off = nb.min.clone().negate();
  np.pos = [x + off.x, y + off.y, z + off.z];
  if (np.type === 'bolt') np.pos[2] = np.params.L;
  void sz;
}

// ===================================================================== pannello destro
function renderRight() {
  const R = $('#right'); const sc = R.scrollTop; R.innerHTML = '';
  if (!store.project) return;
  if (app.tab === 'assy') { renderAssyPanel(R); R.scrollTop = sc; return; }
  if (app.tab === 'design') { const opt = toolOptions(); if (opt) R.append(opt); }
  const sel = selectedParts();
  if (sel.length === 1 && sel[0].stack) R.append(...stackPanel(sel[0]));
  else if (sel.length === 1) R.append(...partPanel(sel[0]));
  else if (sel.length > 1) R.append(...multiPanel(sel));
  else R.append(...projectPanel());
  R.scrollTop = sc;
}

function section(title, ...kids) { return h('div', {}, h('div', { class: 'secTitle' }, title), ...kids); }
function kv(k, v) { return h('div', { class: 'kv' }, h('span', {}, k), h('b', {}, v)); }

function toolOptions() {
  const t = app.tool;
  if (t === 'hole') {
    const hp = app.hole;
    const wrap = h('div', { class: 'card blue' });
    wrap.append(h('b', {}, 'Nuovi fori'));
    const seg = h('div', { class: 'seg', style: { margin: '8px 0' } });
    for (const [m, l] of [['bolt', 'Per vite'], ['thread', 'Filettato'], ['free', 'Diametro']]) seg.append(h('button', { class: hp.mode === m ? 'on' : '', onclick: () => { hp.mode = m; renderRight(); } }, l));
    wrap.append(seg);
    const f = h('div', { class: 'fields' });
    if (hp.mode === 'bolt') {
      f.append(selField('Vite', hp.size, BOLT_SIZES.map((s) => [s, s]), (v) => { hp.size = v; renderRight(); }));
      f.append(selField('Gioco (ISO 273)', hp.fit, [['fine', 'Fine'], ['medium', 'Medio'], ['coarse', 'Largo']], (v) => { hp.fit = v; renderRight(); }));
      hp.d = BOLTS[hp.size].clear[{ fine: 0, medium: 1, coarse: 2 }[hp.fit]];
    } else if (hp.mode === 'thread') {
      f.append(selField('Filetto', hp.thread, BOLT_SIZES.map((s) => [s, s]), (v) => { hp.thread = v; renderRight(); }));
      hp.d = BOLTS[hp.thread].d;
    } else {
      f.append(numField('Diametro', hp.d, 'mm', (v) => { hp.d = v; renderRight(); }, { min: 0.5, max: 500 }));
    }
    wrap.append(f);
    wrap.append(h('div', { style: { marginTop: '8px', fontSize: '12px' } }, hp.mode === 'thread' ? `Foro filettato ${hp.thread}: preforo Ø ${fmt(BOLTS[hp.thread].tap)}` : `Foro Ø ${fmt(hp.d)} mm${boltForHole(hp.d) ? ` – adatto a ${boltForHole(hp.d)}` : ''}`));
    wrap.append(h('div', { class: 'muted', style: { fontSize: '11px', marginTop: '4px' } }, `Il punto si aggancia ogni ${store.project.settings.snap || 'libero'} mm (cambia in basso). Per schemi regolari usa i pulsanti nella scheda del pezzo.`));
    return wrap;
  }
  if (t === 'mate') {
    const wrap = h('div', { class: 'card blue' });
    wrap.append(h('b', {}, 'Accoppia'));
    wrap.append(h('ol', { class: 'steps', style: { marginTop: '8px' } },
      h('li', {}, 'Tocca un foro del pezzo che resta fermo.'),
      h('li', {}, 'Tocca un foro del pezzo da spostare: va sopra il primo, con i fori in asse.'),
      h('li', {}, 'Se ci sono altri fori alla stessa distanza, ruota da solo per farli combaciare.')));
    wrap.append(h('div', { class: 'muted', style: { fontSize: '11px' } }, 'Toccando una faccia lontano dai fori le due facce si appoggiano l\'una sull\'altra.'));
    if (app.mate) wrap.append(h('div', { class: 'row', style: { marginTop: '8px' } }, h('span', { class: 'grow' }, `Scelto: ${part(app.mate.partId)?.name || ''}`), h('button', { class: 'btn small', onclick: () => { app.mate = null; drawOverlay(); renderRight(); setTip(); } }, 'Annulla')));
    return wrap;
  }
  if (t === 'bolt') {
    const f = app.fast;
    const wrap = h('div', { class: 'card blue' });
    wrap.append(h('b', {}, 'Fissaggio'));
    const seg = h('div', { class: 'seg', style: { margin: '8px 0' } });
    for (const [m, l] of [['bolt', 'Vite e dado'], ['pin', 'Perno']]) seg.append(h('button', { class: f.kind === m ? 'on' : '', onclick: () => { f.kind = m; renderRight(); } }, l));
    wrap.append(seg);
    if (f.kind === 'bolt') wrap.append(h('div', { class: 'fields' }, selField('Misura', f.size, [['auto', 'Automatica'], ...BOLT_SIZES.map((s) => [s, s])], (v) => { f.size = v; })));
    wrap.append(h('div', { class: 'muted', style: { fontSize: '11px', margin: '6px 0 8px' } }, 'La lunghezza viene calcolata dallo spessore del pacco, con rondelle e almeno 2 filetti oltre il dado. Se l\'ultimo foro è filettato non serve il dado.'));
    wrap.append(h('button', { class: 'btn small', onclick: boltAll, html: `${icon('bolted')}Fissa tutti i fori allineati` }));
    return wrap;
  }
  if (t === 'measure') {
    const wrap = h('div', { class: 'card blue' });
    wrap.append(h('b', {}, 'Misura'));
    if (app.measure.length === 2) {
      const [a, b] = app.measure; const d = b.clone().sub(a);
      wrap.append(kv('Distanza', `${fmt(d.length(), 2)} mm`), kv('ΔX', fmt(Math.abs(d.x), 2)), kv('ΔY', fmt(Math.abs(d.y), 2)), kv('ΔZ', fmt(Math.abs(d.z), 2)));
      wrap.append(h('button', { class: 'btn small', style: { marginTop: '6px' }, onclick: () => { app.measure = []; drawOverlay(); renderRight(); setTip(); } }, 'Nuova misura'));
    } else wrap.append(h('div', { style: { marginTop: '6px', fontSize: '12px' } }, 'Tocca due punti. Vicino a un foro la misura parte dal suo centro.'));
    return wrap;
  }
  if (t === 'explode') {
    const wrap = h('div', { class: 'card blue' });
    wrap.append(h('b', {}, 'Vista esplosa'));
    const r = h('input', { type: 'range', min: 0, max: 100, value: Math.round(app.explode * 100), style: { width: '100%', marginTop: '10px' } });
    r.oninput = () => { app.explode = r.value / 100; applyExplode(); };
    wrap.append(r);
    wrap.append(h('div', { class: 'row', style: { marginTop: '6px' } },
      h('button', { class: 'btn small', onclick: () => animateExplode(1) }, 'Apri'), h('button', { class: 'btn small', onclick: () => animateExplode(0) }, 'Chiudi'),
      h('button', { class: 'btn small', onclick: () => setTab('assy'), html: `${icon('play')}Montaggio` })));
    return wrap;
  }
  if (t === 'move' || t === 'rotate') {
    if (!selectedParts().filter((x) => !x.stack).length) return h('div', { class: 'card blue' }, 'Seleziona un pezzo per spostarlo o ruotarlo.');
  }
  return null;
}

function selField(label, value, options, onChange) {
  const s = h('select', {}, ...options.map(([v, l]) => h('option', { value: v, selected: String(v) === String(value) }, l)));
  s.onchange = () => onChange(s.value);
  return h('div', { class: 'field' }, h('label', {}, label), h('div', { class: 'box' }, s));
}

function partPanel(p) {
  const out = [];
  const nameIn = h('input', { value: p.name, 'aria-label': 'Nome del pezzo' });
  nameIn.onchange = () => { const v = nameIn.value.trim(); if (v) mutate('rinomina', () => { p.name = v; }); };
  out.push(h('div', { class: 'head' }, h('div', { class: 'tile', html: icon(PART_TYPES[p.type].icon) }),
    h('div', { class: 't' }, nameIn, h('small', {}, `${kindLabel(p)} · ${describe(p)}`)),
    h('button', { class: 'btn ghost icon', title: 'Duplica', onclick: () => duplicate([p]), html: icon('copy') }),
    h('button', { class: 'btn ghost icon danger', title: 'Elimina', onclick: () => removeParts([p]), html: icon('trash') })));
  // materiale
  const ms = h('select', { class: 'select' }, ...Object.entries(MATERIALS).map(([k, m]) => h('option', { value: k, selected: k === p.material }, `${m.name} · ${fmt(m.rho, 2)} g/cm³`)));
  ms.onchange = () => mutate('materiale', () => { p.material = ms.value; });
  out.push(section('Materiale', ms));
  // misure
  const q = p.params;
  const set = (k, label) => (v) => mutate(label, (pr) => { p.params[k] = v; if (k === 'din' && v >= p.params.d) p.params.din = 0; rebuildAllStacks(pr); });
  const f = h('div', { class: 'fields' });
  if (p.type === 'plate') f.append(numField('Lunghezza', q.w, 'mm', set('w', 'lunghezza'), { min: 1 }), numField('Larghezza', q.h, 'mm', set('h', 'larghezza'), { min: 1 }), numField('Spessore', q.t, 'mm', set('t', 'spessore'), { min: 0.3 }), numField('Raggio spigoli', q.r || 0, 'mm', set('r', 'raggio'), { min: 0 }));
  if (p.type === 'disc') f.append(numField('Diametro', q.d, 'mm', set('d', 'diametro'), { min: 2 }), numField('Foro centrale', q.din, 'mm', set('din', 'foro centrale'), { min: 0 }), numField('Spessore', q.t, 'mm', set('t', 'spessore'), { min: 0.3 }));
  if (p.type === 'angle') f.append(numField('Ala A', q.a, 'mm', set('a', 'ala A'), { min: 5 }), numField('Ala B', q.b, 'mm', set('b', 'ala B'), { min: 5 }), numField('Spessore', q.t, 'mm', set('t', 'spessore'), { min: 0.5 }), numField('Lunghezza', q.L, 'mm', set('L', 'lunghezza'), { min: 5 }));
  if (p.type === 'tube') f.append(numField('Diametro esterno', q.d, 'mm', set('d', 'diametro'), { min: 1 }), numField('Diametro interno', q.din, 'mm', set('din', 'diametro interno'), { min: 0 }), numField('Lunghezza', q.L, 'mm', set('L', 'lunghezza'), { min: 1 }));
  if (p.type === 'bolt') f.append(selField('Misura', q.size, BOLT_SIZES.map((s) => [s, s]), (v) => mutate('misura', () => { p.params.size = v; })), selField('Lunghezza', q.L, BOLT_LENGTHS.map((s) => [s, `${s} mm`]), (v) => mutate('lunghezza', () => { p.params.L = +v; })));
  if (p.type === 'nut' || p.type === 'washer') f.append(selField('Misura', q.size, BOLT_SIZES.map((s) => [s, s]), (v) => mutate('misura', () => { p.params.size = v; })));
  if (p.type === 'pin') f.append(selField('Diametro', q.d, PIN_DIAMETERS.map((s) => [s, `Ø ${s}`]), (v) => mutate('diametro', () => { p.params.d = +v; })), selField('Lunghezza', q.L, PIN_LENGTHS.map((s) => [s, `${s} mm`]), (v) => mutate('lunghezza', () => { p.params.L = +v; })));
  out.push(section('Misure', f));
  // fori
  if (isSheet(p)) out.push(holesSection(p));
  // posizione
  out.push(placeSection([p]));
  // dati
  const card = h('div', { class: 'card' });
  card.append(kv('Massa', `${fmt(mass(p), 3)} kg`));
  if (p.type === 'plate' || p.type === 'disc') card.append(kv('Superficie (due facce)', `${fmt(area2D(p) * 2 / 1e6, 3)} m²`));
  const st = store.project.stacks.filter((s) => s.plates.includes(p.id));
  if (st.length) card.append(kv('Fissaggi', summarizeStacks(st)));
  out.push(card);
  // controlli del pezzo
  const mine = app.checks.filter((c) => c.parts.includes(p.id));
  if (mine.length) out.push(...mine.map(checkRow));
  else if (isSheet(p) && p.holes.length) out.push(h('div', { class: 'card ok row', html: `${icon('check')}<span>Fori e distanze dai bordi a posto.</span>` }));
  if (canDraw(p)) out.push(h('button', { class: 'btn', onclick: () => setTab('sheet'), html: `${icon('drawing')}Tavola 2D quotata` }));
  return out;
}

function summarizeStacks(st) {
  const m = new Map();
  for (const s of st) { const k = s.kind === 'pin' ? `perno ${s.size}×${s.L}` : `${s.size}×${s.L}`; m.set(k, (m.get(k) || 0) + 1); }
  return [...m].map(([k, n]) => `${n} × ${k}`).join(', ');
}

function holesSection(p) {
  const wrap = h('div', {});
  wrap.append(h('div', { class: 'secTitle' }, `Fori (${p.holes.length})`));
  const fs = faces(p);
  p.holes.forEach((ho, i) => {
    const bad = !holeInside(p, ho);
    const fit = ho.kind === 'thread' ? `filettato ${ho.thread}` : (boltForHole(ho.d) ? `passante · per vite ${boltForHole(ho.d)}` : 'passante');
    const row = h('div', { class: 'holeRow' + (ho.kind === 'thread' ? ' thread' : '') + (bad ? ' bad' : '') },
      h('span', { class: 'dot' }),
      h('div', { class: 't' }, h('b', {}, ho.kind === 'thread' ? `${ho.thread}  ${fit}` : `Ø ${fmt(ho.d)}  ${fit}`), h('small', {}, `${fs.length > 1 ? `ala ${ho.face || 'A'} · ` : ''}x ${fmt(ho.x)} · y ${fmt(ho.y)}${bad ? ' · fuori dal pezzo!' : ''}`)),
      h('button', { class: 'btn ghost icon', title: 'Modifica', onclick: () => editHole(p, ho), html: icon('sliders') }),
      h('button', { class: 'btn ghost icon', title: 'Elimina foro', onclick: () => mutate('elimina foro', (pr) => { p.holes = p.holes.filter((x) => x.id !== ho.id); rebuildAllStacks(pr); }), html: icon('x') }));
    wrap.append(row);
    void i;
  });
  const acts = h('div', { class: 'row' },
    h('button', { class: 'btn small', onclick: () => editHole(p, null), html: `${icon('plus')}Foro` }),
    h('button', { class: 'btn small', onclick: () => holePattern(p, 'grid'), html: `${icon('grid')}Griglia` }),
    h('button', { class: 'btn small', onclick: () => holePattern(p, 'circle'), html: `${icon('ring')}Circonferenza` }));
  if (p.type === 'plate') acts.append(h('button', { class: 'btn small', onclick: () => holePattern(p, 'corners'), html: `${icon('square')}Agli angoli` }));
  if (p.holes.length) acts.append(h('button', { class: 'btn small danger', onclick: async () => { if (await confirmBox('Elimina i fori', `Togliere tutti i ${p.holes.length} fori di ${p.name}?`, 'Elimina', true)) mutate('elimina fori', (pr) => { p.holes = []; rebuildAllStacks(pr); }); } }, 'Togli tutti'));
  wrap.append(acts);
  return wrap;
}

function holeDiamFields(defD) {
  return [
    { key: 'kind', label: 'Tipo', type: 'select', value: 'pass', options: [['pass', 'Passante'], ['thread', 'Filettato']] },
    { key: 'd', label: 'Diametro (se passante)', value: fmtIn(defD), unit: 'mm' },
    { key: 'thread', label: 'Filetto (se filettato)', type: 'select', value: 'M8', options: BOLT_SIZES.map((s) => [s, s]) },
  ];
}
function holeFromForm(r) {
  if (r.kind === 'thread') return { d: BOLTS[r.thread].d, kind: 'thread', thread: r.thread };
  return { d: r.d, kind: 'pass', thread: null };
}

async function editHole(p, ho) {
  const fs = faces(p);
  const def = ho || { x: p.type === 'disc' ? 0 : (fs[0].size[0] / 2), y: p.type === 'disc' ? 0 : (fs[0].size[1] / 2), d: app.hole.d, kind: 'pass', thread: 'M8', face: 'A' };
  const fields = [
    { key: 'x', label: p.type === 'disc' ? 'X dal centro' : 'X dallo spigolo', value: fmtIn(def.x), unit: 'mm' },
    { key: 'y', label: p.type === 'disc' ? 'Y dal centro' : 'Y dallo spigolo', value: fmtIn(def.y), unit: 'mm' },
    ...holeDiamFields(def.d),
  ];
  fields[2].value = def.kind; fields[4].value = def.thread || 'M8';
  if (fs.length > 1) fields.push({ key: 'face', label: 'Ala', type: 'select', value: def.face || 'A', options: [['A', 'Ala A'], ['B', 'Ala B']] });
  const r = await formBox(ho ? 'Modifica foro' : 'Nuovo foro', fields, ho ? 'Applica' : 'Aggiungi', p.type === 'disc' ? 'Le coordinate partono dal centro del disco.' : 'Le coordinate partono dallo spigolo in basso a sinistra.');
  if (!r) return;
  const hd = holeFromForm(r);
  const test = { ...hd, x: r.x, y: r.y, face: r.face || 'A' };
  if (!holeInside(p, test)) { toast('Il foro uscirebbe dal pezzo o toccherebbe il bordo.', 'err'); return; }
  mutate(ho ? 'modifica foro' : 'nuovo foro', (pr) => {
    if (ho) Object.assign(p.holes.find((x) => x.id === ho.id), { x: r.x, y: r.y, ...hd, face: r.face || ho.face || 'A' });
    else addHole(p, r.x, r.y, hd.d, r.face || 'A', hd.kind, hd.thread);
    rebuildAllStacks(pr);
  });
}

async function holePattern(p, kind) {
  const fs = faces(p);
  const [W, H] = fs[0].size;
  let r;
  if (kind === 'grid') {
    r = await formBox('Fori a griglia', [
      { key: 'nx', label: 'Colonne', value: 2 }, { key: 'ny', label: 'Righe', value: 2 },
      { key: 'px', label: 'Passo colonne', value: fmtIn(p.type === 'disc' ? 60 : Math.max(10, W - 50)), unit: 'mm' }, { key: 'py', label: 'Passo righe', value: fmtIn(p.type === 'disc' ? 60 : Math.max(10, H - 50)), unit: 'mm' },
      { key: 'x0', label: 'Primo foro X', value: fmtIn(p.type === 'disc' ? -30 : 25), unit: 'mm' }, { key: 'y0', label: 'Primo foro Y', value: fmtIn(p.type === 'disc' ? -30 : 25), unit: 'mm' },
      ...holeDiamFields(app.hole.d),
    ], 'Crea fori');
  } else if (kind === 'circle') {
    r = await formBox('Fori su circonferenza', [
      { key: 'n', label: 'Numero di fori', value: 4 }, { key: 'pcd', label: 'Diametro della circonferenza', value: fmtIn(p.type === 'disc' ? Math.round((p.params.d + (p.params.din || 0)) / 2) : Math.round(Math.min(W, H) * 0.6)), unit: 'mm' },
      { key: 'start', label: 'Angolo del primo foro', value: 45, unit: '°' },
      { key: 'cx', label: 'Centro X', value: fmtIn(p.type === 'disc' ? 0 : W / 2), unit: 'mm' }, { key: 'cy', label: 'Centro Y', value: fmtIn(p.type === 'disc' ? 0 : H / 2), unit: 'mm' },
      ...holeDiamFields(app.hole.d),
    ], 'Crea fori');
  } else {
    r = await formBox('Fori agli angoli', [{ key: 'margin', label: 'Distanza dai bordi', value: fmtIn(Math.max(10, Math.round(app.hole.d * 2.5))), unit: 'mm' }, ...holeDiamFields(app.hole.d)], 'Crea fori');
  }
  if (!r) return;
  const hd = holeFromForm(r);
  const trial = clone(p);
  if (kind === 'grid') patternGrid(trial, { nx: Math.round(r.nx), ny: Math.round(r.ny), px: r.px, py: r.py, x0: r.x0, y0: r.y0, d: hd.d });
  else if (kind === 'circle') patternCircle(trial, { n: Math.round(r.n), pcd: r.pcd, start: r.start, cx: r.cx, cy: r.cy, d: hd.d });
  else patternCorners(trial, { margin: r.margin, d: hd.d });
  const added = trial.holes.slice(p.holes.length);
  if (!added.length) { toast('Nessun foro creato: controlla i numeri.', 'err'); return; }
  const outside = added.filter((x) => !holeInside(trial, x)).length;
  if (outside === added.length) { toast('I fori uscirebbero tutti dal pezzo.', 'err'); return; }
  mutate('schema di fori', (pr) => {
    for (const a of added) { if (holeInside(trial, a)) { a.kind = hd.kind; a.thread = hd.thread; p.holes.push(a); } }
    rebuildAllStacks(pr);
  });
  toast(`Creati ${added.length - outside} fori${outside ? ` (${outside} scartati perché fuori dal pezzo)` : ''}.`, outside ? 'warn' : 'ok');
}

function placeSection(parts) {
  const wrap = h('div', {});
  wrap.append(h('div', { class: 'secTitle' }, 'Posizione'));
  if (parts.length === 1) {
    const p = parts[0];
    const setPos = (i) => (v) => mutate('sposta', (pr) => { p.pos[i] = v; rebuildAllStacks(pr); });
    wrap.append(h('div', { class: 'fields three' }, numField('X', p.pos[0], 'mm', setPos(0)), numField('Y', p.pos[1], 'mm', setPos(1)), numField('Z', p.pos[2], 'mm', setPos(2))));
  }
  const rot = (axis, deg) => mutate('ruota', (pr) => rotateParts(parts, axis, deg, pr));
  const r = h('div', { class: 'row', style: { marginTop: '8px' } });
  for (const [ax, lab] of [['x', 'X'], ['y', 'Y'], ['z', 'Z']]) r.append(h('button', { class: 'btn small', title: `Ruota di 90° attorno all'asse ${lab}`, onclick: () => rot(ax, 90), html: `${icon('rotate')}${lab}` }));
  r.append(h('button', { class: 'btn small', title: 'Appoggia sul piano di lavoro', onclick: () => mutate('appoggia', (pr) => { const b = new THREE.Box3(); for (const p of parts) b.union(worldBox(p)); for (const p of parts) p.pos[2] -= b.min.z; rebuildAllStacks(pr); }) }, 'A terra'));
  wrap.append(r);
  return wrap;
}
function rotateParts(parts, axis, deg, pr) {
  const b = new THREE.Box3(); for (const p of parts) b.union(worldBox(p));
  const c = b.getCenter(new THREE.Vector3());
  const ax = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) }[axis];
  const R = new THREE.Quaternion().setFromAxisAngle(ax, THREE.MathUtils.degToRad(deg));
  for (const p of parts) {
    const q = new THREE.Quaternion(...p.quat); p.quat = R.clone().multiply(q).toArray();
    const pos = new THREE.Vector3(...p.pos).sub(c).applyQuaternion(R).add(c);
    p.pos = pos.toArray().map((v) => Math.round(v * 1000) / 1000);
  }
  rebuildAllStacks(pr);
}

function stackPanel(fp) {
  const pr = store.project;
  const s = pr.stacks.find((x) => x.id === fp.stack);
  if (!s) return [h('div', {}, 'Fissaggio')];
  const out = [];
  const b = BOLTS[s.size];
  out.push(h('div', { class: 'head' }, h('div', { class: 'tile', style: { color: 'var(--accent)', background: '#fdf1e3' }, html: icon(s.kind === 'pin' ? 'pin' : 'bolt') }),
    h('div', { class: 't' }, h('b', { style: { fontSize: '15px' } }, s.kind === 'pin' ? `Perno ${s.size} × ${s.L}` : `Vite ${s.size} × ${s.L}`), h('small', {}, s.kind === 'pin' ? 'Perno di centraggio ISO 2338' : s.threaded ? 'Vite + rondella, avvitata nel foro filettato' : 'Vite + 2 rondelle + dado')),
    h('button', { class: 'btn ghost icon danger', title: 'Togli il fissaggio', onclick: () => mutate('togli fissaggio', (p) => { p.parts = p.parts.filter((x) => x.stack !== s.id); p.stacks = p.stacks.filter((x) => x.id !== s.id); store.selection = []; }), html: icon('trash') })));
  const card = h('div', { class: 'card' });
  card.append(kv('Pacco da serrare', `${fmt(s.grip, 2)} mm`), kv('Lastre attraversate', s.plates.map((id) => (pr.parts.find((x) => x.id === id) || {}).name).join(', ')));
  if (s.kind === 'bolt') card.append(kv('Coppia di serraggio (8.8)', `${fmt(b.torque)} Nm`), kv('Chiave', `${b.s} mm`), kv('Foro consigliato', `Ø ${fmt(b.clear[1])} (medio)`));
  out.push(card);
  if (s.kind === 'bolt') {
    out.push(section('Lunghezza vite', h('div', { class: 'fields' }, selField('Lunghezza', s.L, BOLT_LENGTHS.map((x) => [x, `${x} mm`]), (v) => mutate('lunghezza vite', (p) => { const st = p.stacks.find((x) => x.id === s.id); st.L = +v; st.manualL = true; rebuildAllStacks(p); })),
      h('div', { class: 'field' }, h('label', {}, ' '), h('button', { class: 'btn small', onclick: () => mutate('lunghezza automatica', (p) => { const st = p.stacks.find((x) => x.id === s.id); st.manualL = false; rebuildAllStacks(p); }) }, 'Automatica')))));
  }
  const w = s.warnings || [];
  if (w.length) out.push(...w.map((t) => h('div', { class: 'card warn row', html: `${icon('warn')}<span>${escapeHtml(t)}</span>` })));
  else out.push(h('div', { class: 'card ok row', html: `${icon('check')}<span>${s.kind === 'pin' ? 'Perno della misura giusta.' : 'Vite, fori e lunghezza verificati.'}</span>` }));
  out.push(h('button', { class: 'btn', onclick: () => select(s.plates), html: `${icon('select')}Seleziona le lastre` }));
  return out;
}

function multiPanel(sel) {
  const out = [];
  out.push(h('div', { class: 'head' }, h('div', { class: 'tile', html: icon('layers') }), h('div', { class: 't' }, h('b', { style: { fontSize: '15px' } }, `${sel.length} pezzi selezionati`), h('small', {}, `Massa totale ${fmt(sel.reduce((s, p) => s + mass(p), 0), 3)} kg`))));
  const mains = sel.filter((x) => !x.stack);
  if (mains.length) out.push(placeSection(mains));
  out.push(h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => duplicate(mains), html: `${icon('copy')}Duplica` }), h('button', { class: 'btn danger', onclick: () => removeParts(sel), html: `${icon('trash')}Elimina` })));
  return out;
}

function projectPanel() {
  const pr = store.project;
  const out = [];
  const tot = pr.parts.reduce((s, p) => s + mass(p), 0);
  out.push(h('div', { class: 'head' }, h('div', { class: 'tile', html: icon('cube') }), h('div', { class: 't' }, h('b', { style: { fontSize: '15px' } }, pr.name), h('small', {}, `${pr.parts.filter((x) => !x.stack).length} pezzi · ${pr.stacks.length} fissaggi · ${fmt(tot, 2)} kg`))));
  if (!pr.parts.length) {
    out.push(h('div', { class: 'card blue' }, h('b', {}, 'Come si costruisce'), h('ol', { class: 'steps', style: { marginTop: '8px' } },
      h('li', {}, 'Tocca una lastra o un profilo nella libreria a sinistra.'),
      h('li', {}, 'Con lo strumento Foro tocca la lastra dove vuoi forarla (o usa Griglia / Circonferenza).'),
      h('li', {}, 'Con Accoppia tocca un foro della prima lastra e uno della seconda: si allineano.'),
      h('li', {}, 'Con Bullona tocca un foro: vite, rondelle e dado giusti vengono messi da soli.'),
      h('li', {}, 'Guarda Tavola 2D, Distinta e Montaggio: sono già pronti.'))));
    out.push(h('button', { class: 'btn', onclick: loadExampleIntoCurrent, html: `${icon('cube')}Carica l'esempio qui` }));
    return out;
  }
  const errs = app.checks.filter((c) => c.level === 'err'), warns = app.checks.filter((c) => c.level === 'warn');
  out.push(h('div', { class: 'secTitle' }, 'Controlli'));
  if (!app.checks.length) out.push(h('div', { class: 'card ok row', html: `${icon('check')}<span>Tutto a posto: fori, distanze dai bordi, allineamenti, viti e compenetrazioni.</span>` }));
  out.push(...errs.map(checkRow), ...warns.map(checkRow));
  out.push(h('div', { class: 'muted', style: { fontSize: '12px' } }, 'Tocca un pezzo per modificarne misure, materiale e fori.'));
  return out;
}
function checkRow(c) {
  const r = h('div', { class: `checkItem ${c.level}`, html: `${icon('warn')}<span></span>` });
  r.querySelector('span').textContent = c.text;
  r.onclick = () => { const ids = c.parts.filter((id) => part(id)); if (ids.length) select(ids.filter((id) => !part(id).stack).length ? ids.filter((id) => !part(id).stack) : ids); };
  return r;
}
const escapeHtml = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ===================================================================== azioni sui pezzi
function duplicate(parts) {
  if (!parts.length) return;
  const made = [];
  mutate('duplica', (pr) => {
    const b = new THREE.Box3(); for (const p of parts) b.union(worldBox(p));
    const dx = b.getSize(new THREE.Vector3()).x + 20;
    for (const p of parts) {
      const c = clone(p); c.id = uid('p'); c.stack = null; c.name = p.name + ' (copia)';
      c.holes = c.holes.map((x) => ({ ...x, id: uid('h') }));
      c.pos[0] += dx; pr.parts.push(c); made.push(c.id);
    }
  });
  select(made);
}
async function removeParts(parts) {
  const ids = new Set(parts.map((p) => p.id));
  const pr = store.project;
  const stacks = pr.stacks.filter((s) => s.plates.some((id) => ids.has(id)) || s.members.some((id) => ids.has(id)));
  if (parts.length > 1 || stacks.length) {
    const ok = await confirmBox('Elimina', `Eliminare ${parts.length === 1 ? parts[0].name : parts.length + ' pezzi'}${stacks.length ? ` e ${stacks.length} fissaggi collegati` : ''}?`, 'Elimina', true);
    if (!ok) return;
  }
  mutate('elimina', (p) => {
    const sids = new Set(stacks.map((s) => s.id));
    p.parts = p.parts.filter((x) => !ids.has(x.id) && !(x.stack && sids.has(x.stack)));
    p.stacks = p.stacks.filter((s) => !sids.has(s.id));
    store.selection = [];
  });
}

// ===================================================================== vista: tocchi
function bindView() {
  const el = viewer.renderer.domElement;
  let down = null;
  el.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, multi: !!down }; });
  el.addEventListener('pointerup', (e) => {
    if (!down || down.id !== e.pointerId) { down = null; return; }
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const dt = performance.now() - down.t;
    const wasMulti = down.multi; down = null;
    if (moved < 7 && dt < 600 && !wasMulti && !viewer.gizmo.dragging) onTap(e);
  });
  el.addEventListener('pointercancel', () => { down = null; });
  let hoverRaf = 0;
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || down) return;
    if (!['hole', 'mate', 'bolt', 'measure'].includes(app.tool) || app.tab !== 'design') return;
    cancelAnimationFrame(hoverRaf);
    hoverRaf = requestAnimationFrame(() => {
      const hit = viewer.pick(e, isSheet);
      const sel = hit ? pickHole(hit.part, hit.point, hit.normal) : null;
      const key = sel ? sel.axis.hole.id + sel.side : (hit && app.tool === 'hole' ? 'f' + Math.round(hit.point.x) + Math.round(hit.point.y) + Math.round(hit.point.z) : null);
      if (key === (app.hover && app.hover.key)) return;
      app.hover = sel ? { key, sel } : (hit && app.tool === 'hole' ? { key, hit } : null);
      drawOverlay();
    });
  });
  el.addEventListener('pointerleave', () => { if (app.hover) { app.hover = null; drawOverlay(); } });
  el.addEventListener('dblclick', (e) => { const hit = viewer.pick(e); if (hit) focusPart(hit.part); });
  // maniglie
  let start = null;
  viewer.gizmo.addEventListener('dragging-changed', (e) => {
    if (e.value) {
      const parts = selectedParts().filter((x) => !x.stack);
      start = { parts: parts.map((p) => ({ id: p.id, pos: [...p.pos], quat: [...p.quat] })), pPos: viewer.proxy.position.clone(), pQuat: viewer.proxy.quaternion.clone(), snapshot: JSON.stringify(store.project) };
    }
  });
  viewer.onTransform = (proxy) => {
    if (!start) return;
    const dq = proxy.quaternion.clone().multiply(start.pQuat.clone().invert());
    for (const s of start.parts) {
      const p = part(s.id); if (!p) continue;
      const rel = new THREE.Vector3(...s.pos).sub(start.pPos).applyQuaternion(dq);
      const np = start.pPos.clone().add(rel).add(proxy.position.clone().sub(start.pPos));
      p.pos = np.toArray().map((v) => Math.round(v * 1000) / 1000);
      p.quat = dq.clone().multiply(new THREE.Quaternion(...s.quat)).toArray();
      const ent = viewer.objects.get(p.id); if (ent) { ent.obj.position.set(...p.pos); ent.obj.quaternion.set(...p.quat); }
    }
    // la bulloneria collegata segue
    for (const s of store.project.stacks) if (s.plates.some((id) => start.parts.some((x) => x.id === id))) for (const id of s.members) { const ent = viewer.objects.get(id); if (ent) ent.obj.visible = false; }
  };
  viewer.onTransformEnd = () => {
    if (!start) return;
    store.undoStack.push({ label: app.tool === 'rotate' ? 'ruota' : 'sposta', data: start.snapshot }); store.redoStack.length = 0;
    rebuildAllStacks(store.project);
    start = null;
    commit('change');
  };
}

function focusPart(p) {
  const b = worldBox(p);
  const c = b.getCenter(new THREE.Vector3()); const r = b.getSize(new THREE.Vector3()).length() || 50;
  const dir = viewer.camera.position.clone().sub(viewer.controls.target).normalize();
  viewer.animateCamera(c.clone().addScaledVector(dir, r * 2.2), c, 400);
}

function onTap(e) {
  if (app.tab === 'assy') { const hit = viewer.pick(e); if (hit) toast(`${hit.part.name} – ${describe(hit.part)}`); return; }
  if (app.tab !== 'design') return;
  const t = app.tool;
  if (t === 'select' || t === 'move' || t === 'rotate' || t === 'explode') {
    const hit = viewer.pick(e);
    if (hit) select(hit.part.id, e.shiftKey || e.ctrlKey || e.metaKey);
    else if (!e.shiftKey) select([]);
    if (isNarrow() && hit && t === 'select') { /* niente: il pannello si apre con il pulsante */ }
    return;
  }
  if (t === 'hole') return tapHole(e);
  if (t === 'mate') return tapMate(e);
  if (t === 'bolt') return tapBolt(e);
  if (t === 'measure') return tapMeasure(e);
}

function localFacePoint(p, point, normal) {
  const inv = new THREE.Matrix4().compose(new THREE.Vector3(...p.pos), new THREE.Quaternion(...p.quat), new THREE.Vector3(1, 1, 1)).invert();
  const lp = point.clone().applyMatrix4(inv);
  const ln = normal.clone().applyQuaternion(new THREE.Quaternion(...p.quat).invert());
  if (p.type === 'angle') {
    if (Math.abs(ln.z) > 0.9 && lp.z <= p.params.t + 0.01) return { face: 'A', x: lp.x, y: lp.y };
    if (Math.abs(ln.x) > 0.9 && lp.x <= p.params.t + 0.01) return { face: 'B', x: lp.y, y: lp.z };
    return null;
  }
  if (Math.abs(ln.z) < 0.9) return null;   // bordo della lastra
  return { face: 'A', x: lp.x, y: lp.y };
}

function tapHole(e) {
  const hit = viewer.pick(e, isSheet);
  if (!hit) { toast('Tocca una faccia di una lastra o di un angolare.', 'warn'); return; }
  const p = hit.part;
  const loc = localFacePoint(p, hit.point, hit.normal);
  if (!loc) { toast('Tocca la faccia grande della lastra, non il bordo.', 'warn'); return; }
  const snap = store.project.settings.snap || 0;
  const sn = (v) => snap ? Math.round(v / snap) * snap : Math.round(v * 10) / 10;
  const x = sn(loc.x), y = sn(loc.y);
  const hp = app.hole;
  const d = hp.mode === 'thread' ? BOLTS[hp.thread].d : hp.d;
  const test = { x, y, d, face: loc.face };
  if (!holeInside(p, test)) { toast('Lì il foro uscirebbe dal pezzo: troppo vicino al bordo.', 'err'); return; }
  if (p.holes.some((o) => (o.face || 'A') === loc.face && Math.hypot(o.x - x, o.y - y) < (o.d + d) / 2 + 1)) { toast('C\'è già un foro in quel punto.', 'warn'); return; }
  mutate('foro', (pr) => { addHole(p, x, y, d, loc.face, hp.mode === 'thread' ? 'thread' : 'pass', hp.mode === 'thread' ? hp.thread : null); rebuildAllStacks(pr); });
  if (!store.selection.includes(p.id)) select(p.id);
  toast(`Foro ${hp.mode === 'thread' ? hp.thread : 'Ø ' + fmt(d)} in x ${fmt(x)} · y ${fmt(y)}`, 'ok', 1600);
}

function tapMate(e) {
  const hit = viewer.pick(e, (p) => !p.stack);
  if (!hit) { if (app.mate) { app.mate = null; drawOverlay(); renderRight(); setTip(); } return; }
  const hs = isSheet(hit.part) ? pickHole(hit.part, hit.point, hit.normal) : null;
  const cur = hs ? { kind: 'hole', partId: hit.part.id, holeId: hs.axis.hole.id, side: hs.side } : { kind: 'face', partId: hit.part.id, point: hit.point.clone(), normal: hit.normal.clone() };
  if (!app.mate) { app.mate = cur; select(hit.part.id); drawOverlay(); renderRight(); setTip(); return; }
  if (app.mate.partId === hit.part.id) { app.mate = cur; drawOverlay(); setTip(); toast('Scegli un foro su un altro pezzo.', 'warn'); return; }
  const A = app.mate, fixed = part(A.partId), moving = hit.part;
  // la bulloneria che lega il pezzo mobile si ricalcola dopo lo spostamento
  let n = 0;
  mutate('accoppia', (pr) => {
    if (A.kind === 'hole' && cur.kind === 'hole') {
      const fa = holeAxes(fixed).find((x) => x.hole.id === A.holeId);
      const ma = holeAxes(moving).find((x) => x.hole.id === cur.holeId);
      n = mateHoles(fixed, { axis: fa, side: A.side }, moving, { axis: ma, side: cur.side }, pr.parts.filter((x) => isSheet(x) && x.id !== moving.id));
    } else {
      const fp = A.kind === 'hole' ? holeFacePoint(fixed, A) : { p: A.point, n: A.normal };
      const mp = cur.kind === 'hole' ? holeFacePoint(moving, cur) : { p: cur.point, n: cur.normal };
      mateFaces(fp.p, fp.n, moving, mp.p, mp.n);
    }
    rebuildAllStacks(pr);
  });
  app.mate = null;
  select(moving.id);
  setTip();
  toast(n ? `${moving.name} accoppiato a ${fixed.name}: ${n} for${n === 1 ? 'o' : 'i'} in asse.` : `${moving.name} appoggiato su ${fixed.name}.`, 'ok', 3000);
}
function holeFacePoint(p, sel) {
  const ax = holeAxes(p).find((x) => x.hole.id === sel.holeId);
  return sel.side === 'b' ? { p: ax.b, n: ax.dir.clone() } : { p: ax.a, n: ax.dir.clone().negate() };
}

function tapBolt(e) {
  const hit = viewer.pick(e, (p) => isSheet(p));
  if (!hit) { toast('Tocca un foro di una lastra.', 'warn'); return; }
  const hs = pickHole(hit.part, hit.point, hit.normal);
  if (!hs) { toast('Tocca proprio su un foro (anche il bordo del foro va bene).', 'warn'); return; }
  const pr = store.project;
  const exist = pr.stacks.find((s) => s.plates.includes(hit.part.id) && (s.ref.hole === hs.axis.hole.id || stackHasHole(pr, s, hs)));
  if (exist) { select(exist.members.find((id) => ['bolt', 'pin'].includes(part(id).type))); toast('Questo foro è già fissato.', 'warn'); return; }
  let res;
  mutate('fissaggio', (p) => {
    res = makeFastener(p, hs, app.fast.kind, app.fast.kind === 'bolt' && app.fast.size !== 'auto' ? { size: app.fast.size } : {});
    if (res.error) return;
    p.parts.push(...res.parts); p.stacks.push(res.stack);
  });
  if (res.error) { store.undoStack.pop(); toast(res.error, 'err', 4000); return; }
  select(res.parts.find((x) => x.type === 'bolt' || x.type === 'pin').id);
  if (res.warnings.length) toast(res.warnings[0], 'warn', 5000);
  else toast(res.stack.kind === 'pin' ? `Perno ${res.stack.size}×${res.stack.L} inserito.` : `Vite ${res.stack.size}×${res.stack.L} con rondelle${res.stack.threaded ? '' : ' e dado'}: serrare a ${fmt(res.stack.torque)} Nm.`, 'ok', 3200);
}
function stackHasHole(pr, s, hs) {
  const st = holeStack(pr, hs);
  if (!st) return false;
  return st.segs.some((seg) => seg.axis.hole.id === s.ref.hole);
}

/** Fissa ogni gruppo di fori coassiali che attraversa almeno due pezzi */
function boltAll() {
  const pr = store.project;
  let n = 0, warns = 0;
  mutate('fissa tutti', (p) => {
    const done = new Set();
    for (const s of p.stacks) { const pp = p.parts.find((x) => x.id === s.ref.part); const ax = pp && holeAxes(pp).find((a) => a.hole.id === s.ref.hole); if (ax) { const st = holeStack(p, { axis: ax, side: 'a' }); if (st) st.segs.forEach((g) => done.add(g.axis.hole.id)); } }
    for (const q of p.parts.filter(isSheet)) for (const ax of holeAxes(q)) {
      if (done.has(ax.hole.id)) continue;
      const st = holeStack(p, { axis: ax, side: 'b' });
      if (!st) continue;
      st.segs.forEach((g) => done.add(g.axis.hole.id));
      if (new Set(st.segs.map((g) => g.part.id)).size < 2) continue;
      // testa dal lato più alto (Z) o, se l'asse è orizzontale, dal lato del primo pezzo
      const top = st.dir.z >= 0 ? st.segs[st.segs.length - 1] : st.segs[0];
      const side = Math.abs(st.dir.z) > 0.5 ? (top.axis.dir.dot(st.dir) * (st.dir.z >= 0 ? 1 : -1) > 0 ? 'b' : 'a') : 'b';
      const res = makeFastener(p, { axis: top.axis, side }, app.fast.kind, app.fast.kind === 'bolt' && app.fast.size !== 'auto' ? { size: app.fast.size } : {});
      if (res.error) { warns++; continue; }
      p.parts.push(...res.parts); p.stacks.push(res.stack); n++; if (res.warnings.length) warns++;
    }
  });
  if (!n) { store.undoStack.pop(); toast('Nessun foro allineato da fissare: prima accoppia le lastre.', 'warn', 3500); return; }
  toast(`Inseriti ${n} fissaggi${warns ? ` (${warns} con avvisi: guarda i Controlli)` : ''}.`, warns ? 'warn' : 'ok', 3500);
  void pr;
}

function tapMeasure(e) {
  const hit = viewer.pick(e);
  let pt = hit ? hit.point.clone() : viewer.pickGround(e);
  if (!pt) return;
  if (hit && isSheet(hit.part)) { const hs = pickHole(hit.part, hit.point, hit.normal); if (hs) pt = (hs.side === 'b' ? hs.axis.b : hs.axis.a).clone(); }
  if (app.measure.length >= 2) app.measure = [];
  app.measure.push(pt);
  drawOverlay(); renderRight(); setTip();
}

// ===================================================================== sovrapposizioni 3D
function drawOverlay() {
  viewer.clearOverlay();
  if (app.tab !== 'design') return;
  const pr = store.project;
  if (app.hover && app.hover.sel) viewer.addOverlay(holeMarker(app.hover.sel.axis, 0xf28c28));
  if (app.hover && app.hover.hit && app.tool === 'hole') {
    const p = app.hover.hit.part; const loc = localFacePoint(p, app.hover.hit.point, app.hover.hit.normal);
    if (loc) viewer.dot(app.hover.hit.point, 0xf28c28, 1.6);
  }
  if (app.mate) {
    const p = part(app.mate.partId);
    if (p && app.mate.kind === 'hole') { const ax = holeAxes(p).find((x) => x.hole.id === app.mate.holeId); if (ax) { viewer.addOverlay(holeMarker(ax, 0x1f6feb)); viewer.label('1', app.mate.side === 'b' ? ax.b : ax.a); } }
    else if (p) { viewer.dot(app.mate.point, 0x1f6feb, 2.5); viewer.label('1', app.mate.point); }
  }
  if (app.measure.length) {
    for (const m of app.measure) viewer.dot(m, 0x1f6feb, 1.8);
    if (app.measure.length === 2) {
      const [a, b] = app.measure; viewer.line(a, b, 0x1f6feb);
      viewer.label(`${fmt(a.distanceTo(b), 1)} mm`, a.clone().add(b).multiplyScalar(0.5));
    }
  }
  // fori del pezzo selezionato (strumenti di foratura/accoppiamento)
  if (['hole', 'mate', 'bolt'].includes(app.tool)) {
    for (const p of selectedParts()) if (isSheet(p)) for (const ax of holeAxes(p)) viewer.addOverlay(holeMarker(ax, 0x1f6feb));
  }
  void pr;
}

function updateGizmo() {
  const parts = selectedParts().filter((x) => !x.stack);
  if (app.tab === 'design' && (app.tool === 'move' || app.tool === 'rotate') && parts.length) viewer.attachGizmo(app.tool === 'move' ? 'translate' : 'rotate', parts, store.project.settings.snap || null);
  else viewer.detachGizmo();
}

// ===================================================================== esploso
function applyExplode() {
  if (app.tab === 'assy') return;
  const pr = store.project; if (!pr) return;
  if (!app.explode) { if (viewer.offsets.size) { viewer.offsets.clear(); for (const p of pr.parts) viewer.applyOffset(p.id); } return; }
  if (!app.assy.vectors) app.assy.vectors = explodeVectors(pr, currentSteps(pr));
  for (const p of pr.parts) {
    const v = app.assy.vectors.get(p.id);
    if (v) viewer.offsets.set(p.id, v.clone().multiplyScalar(app.explode)); else viewer.offsets.delete(p.id);
    viewer.applyOffset(p.id);
  }
}
function animateExplode(to) {
  const from = app.explode, t0 = performance.now();
  const step = () => { const k = Math.min(1, (performance.now() - t0) / 700); app.explode = from + (to - from) * (1 - Math.pow(1 - k, 3)); applyExplode(); if (k < 1) requestAnimationFrame(step); else renderRight(); };
  step();
}

// ===================================================================== tavola 2D
function renderSheet() {
  const box = $('#sheetView'); box.innerHTML = '';
  const pr = store.project;
  const drawable = pr.parts.filter((p) => canDraw(p));
  if (!drawable.length) { box.append(h('div', { class: 'empty', html: `${icon('drawing')}<h3>Nessuna lastra da disegnare</h3><p>Aggiungi lastre, dischi o angolari nella scheda Progetta: qui comparirà la tavola quotata, pronta per l'officina o per il taglio laser.</p>` })); return; }
  let p = selectedParts().find(canDraw) || drawable[0];
  const sel = h('select', { class: 'select', style: { width: 'auto', minWidth: '220px' } }, ...drawable.map((x) => h('option', { value: x.id, selected: x.id === p.id }, `${x.name} – ${describe(x)}`)));
  sel.onchange = () => { select(sel.value); renderSheet(); };
  const svg = drawingSVG(p, pr);
  box.append(h('div', { class: 'pageBar' }, sel, h('span', { class: 'grow' }),
    h('button', { class: 'btn', onclick: () => saveFile(`${safeName(p.name)}.dxf`, partDXF(p), 'application/dxf').then(savedMsg), html: `${icon('export')}DXF per taglio` }),
    h('button', { class: 'btn', onclick: () => saveFile(`${safeName(p.name)}.svg`, svg, 'image/svg+xml').then(savedMsg), html: `${icon('drawing')}SVG` }),
    h('button', { class: 'btn', onclick: () => saveSheetPNG(svg, p).then(savedMsg), html: `${icon('save')}Immagine` }),
    h('button', { class: 'btn', onclick: () => printSVG(svg), html: `${icon('print')}Stampa / PDF` }),
    h('button', { class: 'btn', onclick: allDXF, html: `${icon('layers')}Tutte in DXF` })));
  box.append(h('div', { class: 'sheetWrap', html: svg }));
  const groups = holeGroups(p.holes);
  if (groups.length) box.append(h('div', { class: 'pageBar', style: { marginTop: '12px' } }, h('span', { class: 'muted' }, `Lavorazioni: ${groups.join(' · ')}`)));
}
function savedMsg(r) { if (r && r.ok) toast(r.where && r.where !== 'Download' ? `Salvato in ${r.where}` : 'File salvato nei Download', 'ok', 3500); else toast('Salvataggio non riuscito', 'err'); }
async function allDXF() {
  const pr = store.project;
  const seen = new Set(); let n = 0;
  for (const p of pr.parts.filter(canDraw)) {
    const sig = JSON.stringify([p.type, p.params, p.holes.map((x) => [x.x, x.y, x.d, x.kind, x.face])]);
    if (seen.has(sig)) continue; seen.add(sig);
    await saveFile(`${safeName(pr.name)}_${safeName(p.name)}.dxf`, partDXF(p), 'application/dxf'); n++;
    await new Promise((r) => setTimeout(r, 250));
  }
  toast(`${n} file DXF salvati (uno per ogni lastra diversa).`, 'ok', 3500);
}
function printSVG(svg) {
  const pa = $('#printArea'); pa.innerHTML = svg; pa.classList.remove('hidden');
  const svgEl = pa.querySelector('svg'); svgEl.setAttribute('width', '100%'); svgEl.setAttribute('height', '100%');
  setTimeout(() => { window.print(); setTimeout(() => { pa.classList.add('hidden'); pa.innerHTML = ''; }, 500); }, 100);
}
function saveSheetPNG(svg, p) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = 2970; c.height = 2100;
      const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
      c.toBlob((b) => saveFile(`${safeName(p.name)}_tavola.png`, b, 'image/png').then(resolve), 'image/png');
    };
    img.onerror = () => resolve({ ok: false });
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace(/width="297mm" height="210mm"/, 'width="2970" height="2100"'));
  });
}

// ===================================================================== distinta
function renderBom() {
  const box = $('#bomView'); box.innerHTML = '';
  const pr = store.project;
  if (!pr.parts.length) { box.append(h('div', { class: 'empty', html: `${icon('list')}<h3>Distinta vuota</h3><p>Aggiungi pezzi e fissaggi: la distinta materiali con quantità e masse si compila da sola.</p>` })); return; }
  const b = bom(pr);
  box.append(h('div', { class: 'pageBar' }, h('h2', { style: { margin: 0 } }, `Distinta materiali – ${pr.name}`), h('span', { class: 'grow' }),
    h('button', { class: 'btn', onclick: () => saveFile(`${safeName(pr.name)}_distinta.csv`, bomCSV(pr), 'text/csv').then(savedMsg), html: `${icon('export')}Excel (CSV)` }),
    h('button', { class: 'btn', onclick: () => printBom(b), html: `${icon('print')}Stampa / PDF` })));
  const t = h('table', { class: 'bomTable' });
  t.append(h('thead', {}, h('tr', {}, ...['Pos.', 'Q.tà', 'Descrizione', 'Materiale', 'Massa cad.', 'Massa tot.'].map((x) => h('th', {}, x)))));
  const tb = h('tbody');
  for (const r of b.rows) tb.append(h('tr', { onclick: () => { select(r.ids); setTab('design'); } }, h('td', { class: 'n' }, r.pos), h('td', { class: 'n' }, r.qty), h('td', {}, r.desc, h('div', { class: 'muted', style: { fontSize: '11px' } }, r.names.slice(0, 6).join(', ') + (r.names.length > 6 ? '…' : ''))), h('td', {}, r.material), h('td', { class: 'n' }, `${fmt(r.unit, 3)} kg`), h('td', { class: 'n' }, `${fmt(r.total, 3)} kg`)));
  t.append(tb);
  t.append(h('tfoot', {}, h('tr', {}, h('td', {}), h('td', { class: 'n' }, b.count), h('td', {}, 'Totale'), h('td', {}), h('td', {}), h('td', { class: 'n' }, `${fmt(b.totalMass, 3)} kg`))));
  box.append(t);
  // riepilogo lavorazioni
  const sheets = pr.parts.filter(canDraw);
  const holes = sheets.reduce((s, p) => s + p.holes.length, 0);
  const torque = pr.stacks.filter((s) => s.kind === 'bolt').map((s) => `${s.size}: ${fmt(BOLTS[s.size].torque)} Nm`);
  box.append(h('div', { class: 'pageBar', style: { marginTop: '14px', gap: '20px' } },
    h('span', {}, h('b', {}, 'Lastre da tagliare: '), String(sheets.length)), h('span', {}, h('b', {}, 'Fori da fare: '), String(holes)),
    torque.length ? h('span', {}, h('b', {}, 'Coppie di serraggio: '), [...new Set(torque)].join(' · ')) : null));
}
function printBom(b) {
  const pr = store.project;
  const rows = b.rows.map((r) => `<tr><td>${r.pos}</td><td>${r.qty}</td><td>${escapeHtml(r.desc)}</td><td>${escapeHtml(r.material)}</td><td style="text-align:right">${fmt(r.unit, 3)}</td><td style="text-align:right">${fmt(r.total, 3)}</td></tr>`).join('');
  const html = `<div style="font-family:Inter,Arial;padding:14mm;color:#111"><h2 style="margin:0 0 4mm">Distinta materiali – ${escapeHtml(pr.name)}</h2><table style="width:100%;border-collapse:collapse;font-size:11pt" border="1" cellpadding="5"><tr style="background:#eee"><th>Pos.</th><th>Q.tà</th><th>Descrizione</th><th>Materiale</th><th>kg cad.</th><th>kg tot.</th></tr>${rows}<tr><td></td><td>${b.count}</td><td><b>Totale</b></td><td></td><td></td><td style="text-align:right"><b>${fmt(b.totalMass, 3)}</b></td></tr></table><p style="font-size:9pt;color:#555">Smonta Studio · ${new Date().toLocaleDateString('it-IT')}</p></div>`;
  const pa = $('#printArea'); pa.innerHTML = html; pa.classList.remove('hidden');
  setTimeout(() => { window.print(); setTimeout(() => { pa.classList.add('hidden'); pa.innerHTML = ''; }, 500); }, 100);
}

// ===================================================================== montaggio
let assyRaf = 0;
function renderAssy() {
  const A = app.assy, box = $('#assy'); box.innerHTML = '';
  const steps = A.steps;
  if (!steps.length) { box.append(h('div', { class: 'stepCard' }, h('h3', {}, 'Nessun passo'), h('p', {}, 'Aggiungi pezzi nella scheda Progetta: la sequenza di montaggio si crea da sola.'))); renderRight(); return; }
  A.i = Math.max(0, Math.min(A.i, steps.length - 1));
  const idx = A.reverse ? steps.length - 1 - A.i : A.i;
  const s = steps[idx];
  const card = h('div', { class: 'stepCard' });
  const bar = h('div', { class: 'bar' });
  steps.forEach((_, k) => { const i = h('i', { class: k < A.i ? 'done' : k === A.i ? 'cur' : '' }); i.onclick = () => goStep(k); bar.append(i); });
  card.append(h('div', { class: 'row' }, h('small', { class: 'muted', style: { fontWeight: 600, letterSpacing: '.05em' } }, `${A.reverse ? 'SMONTAGGIO' : 'MONTAGGIO'} · PASSO ${A.i + 1} DI ${steps.length}`), h('span', { class: 'grow' }),
    h('div', { class: 'seg', style: { width: '210px' } }, h('button', { class: A.reverse ? '' : 'on', onclick: () => { A.reverse = false; A.i = 0; A.t = 0; renderAssy(); playStep(); } }, 'Montaggio'), h('button', { class: A.reverse ? 'on' : '', onclick: () => { A.reverse = true; A.i = 0; A.t = 0; renderAssy(); playStep(); } }, 'Smontaggio'))));
  card.append(bar);
  const title = A.reverse ? s.title.replace(/^Monta|^Posiziona|^Prepara/, 'Togli') : s.title;
  card.append(h('h3', {}, title));
  let text = s.text;
  if (A.reverse) text = reverseText(s);
  card.append(h('p', {}, text));
  if (s.tools && s.tools.length) card.append(h('div', { class: 'toolsList' }, ...s.tools.map((t) => h('span', {}, t))));
  if (s.warn) card.append(h('div', { class: 'card warn row', style: { marginBottom: '8px' }, html: `${icon('warn')}<span>${escapeHtml(s.warn)}</span>` }));
  card.append(h('div', { class: 'row' },
    h('button', { class: 'btn', disabled: A.i === 0, onclick: () => goStep(A.i - 1), html: `${icon('prev')}Indietro` }),
    h('button', { class: 'btn', onclick: () => { A.t = 0; playStep(); }, html: `${icon('play')}Rivedi` }),
    h('span', { class: 'grow' }),
    h('button', { class: 'btn primary', disabled: A.i >= steps.length - 1, onclick: () => goStep(A.i + 1), html: `Avanti${icon('next')}` })));
  box.append(card);
  // video del passo (facoltativo)
  if (s.video && store.project.video) {
    const v = h('video', { class: 'stepVideo', muted: true, playsinline: true, controls: true });
    V.getVideoURL(store.project.id).then((url) => { if (!url) { v.remove(); return; } v.src = url; v.currentTime = s.video.start || 0; v.play().catch(() => {}); });
    v.ontimeupdate = () => { if (s.video.end && v.currentTime >= s.video.end) { v.pause(); v.currentTime = s.video.start || 0; } };
    box.append(v);
  }
  renderRight();
}
function reverseText(s) {
  const pr = store.project;
  const main = pr.parts.find((x) => x.id === s.parts[0]);
  const fast = s.parts.slice(1).map((id) => pr.parts.find((x) => x.id === id)).filter(Boolean);
  const bolts = fast.filter((x) => x.type === 'bolt'), pins = fast.filter((x) => x.type === 'pin');
  let t = '';
  if (bolts.length) t += `Svita ${bolts.length === 1 ? 'la vite' : `le ${bolts.length} viti`} ${bolts[0].params.size} (chiave ${BOLTS[bolts[0].params.size].s} mm) e togli dadi e rondelle. `;
  if (pins.length) t += `Sfila ${pins.length === 1 ? 'il perno' : `i ${pins.length} perni`} con un battitoio. `;
  if (main) t += `Solleva e togli ${main.name}.`;
  return t;
}
function goStep(k) { const A = app.assy; A.i = Math.max(0, Math.min(k, A.steps.length - 1)); A.t = 0; renderAssy(); playStep(); }
function playStep() {
  cancelAnimationFrame(assyRaf);
  const A = app.assy, t0 = performance.now(), from = A.t;
  const run = () => { A.t = Math.min(1, from + (performance.now() - t0) / 1100); applyAssy(); if (A.t < 1) assyRaf = requestAnimationFrame(run); };
  run();
}
function stopAssy() { cancelAnimationFrame(assyRaf); }
function applyAssy() {
  const A = app.assy, pr = store.project;
  if (!A.steps.length) return;
  if (!A.vectors) A.vectors = explodeVectors(pr, A.steps);
  const n = A.steps.length;
  const order = new Map(); A.steps.forEach((s, k) => s.parts.forEach((id) => order.set(id, k)));
  const curStep = A.reverse ? n - 1 - A.i : A.i;
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const st = new Map();
  for (const p of pr.parts) {
    const k = order.has(p.id) ? order.get(p.id) : 0;
    let vis = true, f = 0;
    if (!A.reverse) {
      if (k < curStep) f = 0; else if (k === curStep) f = 1 - ease(A.t); else vis = false;
    } else {
      if (k < curStep) f = 0; else if (k === curStep) f = ease(A.t); else vis = false;
      if (k === curStep && A.t >= 1) vis = false;
    }
    const v = A.vectors.get(p.id);
    const extra = v ? v.clone().multiplyScalar(f * 1.2) : new THREE.Vector3(0, 0, f * 80);
    if (v && v.length() < 1 && f > 0) extra.set(0, 0, f * 80);
    viewer.offsets.set(p.id, extra);
    viewer.applyOffset(p.id);
    const ent = viewer.objects.get(p.id); if (ent) ent.obj.visible = vis && !p.hidden;
    if (k === curStep) st.set(p.id, 'selected');
  }
  viewer.setStates(st);
}
function renderAssyPanel(R) {
  const A = app.assy, pr = store.project;
  R.append(h('h2', {}, 'Passi di montaggio'));
  R.append(h('div', { class: 'muted', style: { fontSize: '12px' } }, 'Creati in automatico dall\'ordine dei pezzi. Puoi riscrivere titolo e istruzioni di ogni passo e collegare un video.'));
  A.steps.forEach((s, k) => {
    const cur = (A.reverse ? A.steps.length - 1 - A.i : A.i) === k;
    const row = h('div', { class: 'treeItem' + (cur ? ' on' : ''), onclick: () => goStep(A.reverse ? A.steps.length - 1 - k : k) }, h('b', { style: { width: '20px' } }, String(k + 1)), h('span', { class: 'nm' }, s.title));
    R.append(row);
  });
  const s = A.steps[A.reverse ? A.steps.length - 1 - A.i : A.i];
  if (!s) return;
  R.append(h('div', { class: 'secTitle' }, 'Modifica questo passo'));
  const ti = h('input', { value: s.title, class: 'select' });
  const tx = h('textarea', { class: 'select', rows: 5 }, s.text);
  const tw = h('input', { value: s.warn || '', class: 'select', placeholder: 'Avvertenza (facoltativa)' });
  const saveStep = () => mutate('modifica passo', (p) => {
    if (!p.steps || !p.steps.length || p.steps !== A.steps) p.steps = clone(A.steps);
    const t = p.steps.find((x) => x.id === s.id) || p.steps[A.steps.indexOf(s)];
    t.title = ti.value; t.text = tx.value; t.warn = tw.value; t.auto = false;
  });
  ti.onchange = saveStep; tx.onchange = saveStep; tw.onchange = saveStep;
  R.append(ti, tx, tw);
  R.append(h('div', { class: 'secTitle' }, 'Video (facoltativo)'));
  if (!pr.video) R.append(h('button', { class: 'btn', onclick: attachVideo, html: `${icon('video')}Collega un video dello smontaggio` }));
  else {
    R.append(h('div', { class: 'muted', style: { fontSize: '12px' } }, `Video: ${pr.video.name}`));
    const vs = s.video || { start: 0, end: 0 };
    R.append(h('div', { class: 'fields' }, numField('Inizio', vs.start || 0, 's', (v) => setStepVideo(s, { ...vs, start: v }), { min: 0 }), numField('Fine', vs.end || 0, 's', (v) => setStepVideo(s, { ...vs, end: v }), { min: 0 })));
    R.append(h('div', { class: 'row' }, h('button', { class: 'btn small', onclick: () => setStepVideo(s, null) }, 'Nessun video per questo passo'), h('button', { class: 'btn small danger', onclick: () => { V.deleteVideo(pr.id); mutate('togli video', (p) => { p.video = null; }); } }, 'Togli video')));
  }
  R.append(h('div', { class: 'row', style: { marginTop: '8px' } }, h('button', { class: 'btn small', onclick: () => mutate('rigenera passi', (p) => { p.steps = []; }) }, 'Rigenera i passi')));
}
function setStepVideo(s, video) {
  const A = app.assy;
  mutate('video del passo', (p) => {
    if (!p.steps || !p.steps.length) p.steps = clone(A.steps);
    const t = p.steps.find((x) => x.id === s.id); if (t) { t.video = video; t.auto = false; }
  });
}
async function attachVideo() {
  const f = await openFile('video/*');
  if (!f) return;
  try {
    await V.putVideo(store.project.id, f);
    mutate('collega video', (p) => {
      p.video = { name: f.name, size: f.size };
      if (!p.steps || !p.steps.length) p.steps = clone(app.assy.steps);
      // distribuisce il video sui passi in parti uguali (poi si aggiusta a mano)
      const durGuess = 0;
      p.steps.forEach((s) => { s.video = { start: 0, end: durGuess }; });
    });
    // durata reale
    const url = await V.getVideoURL(store.project.id);
    const v = document.createElement('video'); v.preload = 'metadata'; v.src = url;
    v.onloadedmetadata = () => {
      const d = v.duration || 0, n = store.project.steps.length || 1;
      mutate('tempi video', (p) => { p.steps.forEach((s, k) => { s.video = { start: Math.round(d * k / n * 10) / 10, end: Math.round(d * (k + 1) / n * 10) / 10 }; }); });
      toast('Video collegato: ogni passo ne mostra un pezzo. Aggiusta inizio e fine se serve.', 'ok', 4000);
    };
  } catch (err) { toast('Non riesco a salvare il video: ' + err.message, 'err'); }
}

// ===================================================================== esportazioni
function exportMenu(anchor) {
  const pr = store.project; if (!pr) return;
  const sel = selectedParts().find(canDraw);
  popMenu(anchor, [
    { label: 'Progetto (.smonta)', sub: 'Da riaprire o dare a un collega', icon: 'save', run: () => saveFile(`${safeName(pr.name)}.smonta`, JSON.stringify(pr), 'application/json').then(savedMsg) },
    { label: 'Modello 3D STL', sub: 'Per stampa 3D o altri CAD', icon: 'cube', run: () => { const d = exportSTL(viewer.root); saveFile(`${safeName(pr.name)}.stl`, d, 'model/stl').then(savedMsg); } },
    { label: 'Modello 3D GLB', sub: 'Per visualizzatori 3D e web', icon: 'layers', run: () => exportGLB(viewer.root).then((d) => saveFile(`${safeName(pr.name)}.glb`, d, 'model/gltf-binary')).then(savedMsg) },
    sel ? { label: `DXF di ${sel.name}`, sub: 'Profilo per taglio laser / plasma', icon: 'drawing', run: () => saveFile(`${safeName(sel.name)}.dxf`, partDXF(sel), 'application/dxf').then(savedMsg) } : null,
    { label: 'Distinta (Excel CSV)', icon: 'list', run: () => saveFile(`${safeName(pr.name)}_distinta.csv`, bomCSV(pr), 'text/csv').then(savedMsg) },
    { label: 'Immagine della vista', icon: 'eye', run: () => fetch(viewer.screenshot()).then((r) => r.blob()).then((b) => saveFile(`${safeName(pr.name)}.png`, b, 'image/png')).then(savedMsg) },
  ]);
}

function saveWithThumb() {
  if (!store.project) return;
  try { if (app.tab === 'design' || app.tab === 'assy') store.project.thumb = viewer.screenshot(320, 180); } catch { /* niente */ }
  saveNow();
}

// ===================================================================== barra di stato e tasti
function bindStatus() {
  $('#snapSel').onchange = (e) => { mutate('aggancio', (p) => { p.settings.snap = +e.target.value; }); updateGizmo(); };
  $('#gridSel').onchange = (e) => { mutate('griglia', (p) => { p.settings.grid = +e.target.value; }); viewer.setGrid(+e.target.value); };
  $('#checksBtn').onclick = () => { setTab('design'); select([]); if (isNarrow()) togglePanel('Right'); };
}
function renderStatus() {
  const pr = store.project; if (!pr) return;
  $('#snapSel').value = String(pr.settings.snap ?? 5);
  $('#gridSel').value = String(pr.settings.grid ?? 20);
  const tot = pr.parts.reduce((s, p) => s + mass(p), 0);
  $('#stParts').textContent = `${pr.parts.filter((x) => !x.stack).length} pezzi · ${pr.stacks.length} fissaggi`;
  $('#stMass').textContent = `Massa: ${fmt(tot, 2)} kg`;
  const e = app.checks.filter((c) => c.level === 'err').length, w = app.checks.filter((c) => c.level === 'warn').length;
  const b = $('#checksBtn'); b.className = e ? 'err' : w ? 'warn' : 'ok';
  b.querySelector('use').setAttribute('href', e || w ? '#i-warn' : '#i-check');
  b.querySelector('span').textContent = e ? `${e} errori${w ? `, ${w} avvisi` : ''}` : w ? `${w} avvis${w === 1 ? 'o' : 'i'}` : 'Controlli: tutto a posto';
}
function bindKeys() {
  window.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select')) return;
    if (!$('#modal').classList.contains('hidden')) { if (e.key === 'Escape') closeModal(null); return; }
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === 'z') { e.preventDefault(); e.shiftKey ? $('#btnRedo').click() : $('#btnUndo').click(); return; }
    if ((e.ctrlKey || e.metaKey) && k === 'y') { e.preventDefault(); $('#btnRedo').click(); return; }
    if ((e.ctrlKey || e.metaKey) && k === 's') { e.preventDefault(); $('#btnSave').click(); return; }
    if ((e.ctrlKey || e.metaKey) && k === 'd') { e.preventDefault(); duplicate(selectedParts().filter((x) => !x.stack)); return; }
    if (k === 'delete' || k === 'backspace') { const s = selectedParts(); if (s.length) removeParts(s); return; }
    if (k === 'escape') { app.mate = null; app.measure = []; setTool('select'); select([]); return; }
    if (k === 'f') { viewer.fit(store.project); return; }
    const n = parseInt(k, 10); if (n >= 1 && n <= TOOLS.length && app.tab === 'design') setTool(TOOLS[n - 1][0]);
  });
}

// ===================================================================== schermata progetti
function showHome(show) {
  const H = $('#home');
  if (!show) { H.classList.add('hidden'); return; }
  H.innerHTML = '';
  const inn = h('div', { class: 'homeIn' });
  inn.append(h('h1', { html: `${icon('cube')}Smonta Studio` }));
  inn.append(h('p', { class: 'muted', style: { margin: 0, fontSize: '15px' } }, 'Progetta lastre, fori e bulloneria in modo semplice: tavole quotate, distinta e istruzioni di montaggio si fanno da sole.'));
  const cards = h('div', { class: 'cards' });
  const big = (ic, color, title, sub, fn) => h('button', { class: 'bigCard', onclick: fn }, h('span', { class: 'tile', style: { background: color }, html: icon(ic) }), h('b', {}, title), h('small', {}, sub));
  cards.append(big('plus', 'var(--primary)', 'Nuovo progetto', 'Parti da zero e costruisci con la libreria di lastre e viti.', async () => {
    const name = await promptBox('Nuovo progetto', 'Come lo chiami?', 'Nuovo progetto');
    if (!name) return; createProject(name); afterOpen();
  }));
  cards.append(big('cube', 'var(--ok)', 'Apri l\'esempio', 'Un supporto motore già pronto: piastre, squadrette, flangia e 8 viti M8.', () => { setProject(buildExample()); saveNow(); afterOpen(); }));
  cards.append(big('folder', 'var(--accent)', 'Apri un file', 'Un progetto .smonta ricevuto da un collega.', openProjectFile));
  inn.append(cards);
  const list = listProjects();
  if (list.length) {
    inn.append(h('h2', {}, 'I tuoi progetti'));
    const grid = h('div', { class: 'projList' });
    for (const it of list) {
      let thumb = '';
      try { const raw = localStorage.getItem('smonta.project.' + it.id); thumb = raw ? (JSON.parse(raw).thumb || '') : ''; } catch { /* niente */ }
      const card = h('div', { class: 'projCard' },
        h('div', { class: 'thumb', style: { backgroundImage: thumb ? `url(${thumb})` : 'none' }, onclick: () => { if (loadProject(it.id)) afterOpen(); else toast('Progetto non trovato', 'err'); } }),
        h('div', { class: 'pi' }, h('div', {}, h('b', {}, it.name), h('small', {}, `${it.parts} pezzi · ${it.fasteners} viti/dadi · ${new Date(it.modified).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' })}`)),
          h('button', { class: 'btn ghost icon', title: 'Elimina progetto', onclick: async () => { if (await confirmBox('Elimina progetto', `Eliminare "${it.name}"? Non si può annullare.`, 'Elimina', true)) { deleteProject(it.id); V.deleteVideo(it.id); showHome(true); } }, html: icon('trash') })));
      grid.append(card);
    }
    inn.append(grid);
  }
  inn.append(h('p', { class: 'muted', style: { marginTop: '30px', fontSize: '12px' } }, 'I progetti restano salvati su questo dispositivo. Per spostarli su un altro usa Esporta → Progetto (.smonta).'));
  H.append(inn);
  H.classList.remove('hidden');
}
function afterOpen() {
  showHome(false);
  setTab('design'); setTool('select');
  viewer.setGrid(store.project.settings.grid || 20);
  refresh('reload');
  viewer.fit(store.project, 'iso', false);
}
async function openProjectFile() {
  const f = await openFile('.smonta,.json,application/json');
  if (!f) return;
  try {
    const p = JSON.parse(await f.text());
    if (!p.parts || !p.settings) throw new Error('non è un progetto Smonta Studio');
    if (listProjects().some((x) => x.id === p.id)) { p.id = 'prj' + Date.now().toString(36); p.name += ' (importato)'; }
    setProject(p); saveNow(); afterOpen();
    toast(`Aperto "${p.name}"`, 'ok');
  } catch (err) { toast('File non valido: ' + err.message, 'err', 4000); }
}
function loadExampleIntoCurrent() {
  const ex = buildExample();
  mutate('esempio', (p) => { p.parts = ex.parts; p.stacks = ex.stacks; p.counter = ex.counter; p.steps = []; });
  viewer.fit(store.project, 'iso');
}

init();
