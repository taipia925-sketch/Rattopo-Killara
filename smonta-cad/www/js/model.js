// Modello dati del progetto: pezzi, fori, bulloneria. Nessuna dipendenza dalla grafica
// tranne i vettori di three.js per i calcoli nello spazio.
import * as THREE from 'three';
import { BOLTS, MATERIALS } from './iso.js';

let _seq = 1;
export const uid = (p = 'id') => `${p}${Date.now().toString(36)}${(_seq++).toString(36)}`;

export const PART_TYPES = {
  plate:  { label: 'Lastra',            icon: 'rect',   isSheet: true },
  disc:   { label: 'Disco / flangia',   icon: 'disc',   isSheet: true },
  angle:  { label: 'Angolare a L',      icon: 'angle',  isSheet: true },
  tube:   { label: 'Tubo / tondo',      icon: 'tube',   isSheet: false },
  bolt:   { label: 'Vite TE',           icon: 'bolt',   fastener: true },
  nut:    { label: 'Dado',              icon: 'nut',    fastener: true },
  washer: { label: 'Rondella',          icon: 'washer', fastener: true },
  pin:    { label: 'Perno cilindrico',  icon: 'pin',    fastener: true },
};

/** Voci della libreria: tipo + parametri iniziali */
export const LIBRARY = [
  { group: 'Lastre', items: [
    { key: 'sq',    name: 'Lastra quadrata',     type: 'plate', params: { w: 100, h: 100, t: 5, r: 0 }, sub: '100 × 100 × 5' },
    { key: 'rect',  name: 'Lastra rettangolare', type: 'plate', params: { w: 200, h: 100, t: 5, r: 0 }, sub: '200 × 100 × 5' },
    { key: 'disc',  name: 'Disco',               type: 'disc',  params: { d: 120, din: 0, t: 8 }, sub: 'Ø 120 × 8' },
    { key: 'ring',  name: 'Flangia forata',      type: 'disc',  params: { d: 120, din: 50, t: 8 }, sub: 'Ø 120 / Ø 50', pattern: { n: 4, pcd: 90, d: 9 } },
  ]},
  { group: 'Profili', items: [
    { key: 'flat',  name: 'Barra piatta',        type: 'plate', params: { w: 300, h: 40, t: 8, r: 0 }, sub: '300 × 40 × 8' },
    { key: 'angle', name: 'Angolare a L',        type: 'angle', params: { a: 40, b: 40, t: 4, L: 120 }, sub: '40 × 40 × 4 × 120' },
    { key: 'tube',  name: 'Tubo tondo',          type: 'tube',  params: { d: 40, din: 32, L: 200 }, sub: 'Ø 40 × 4 × 200' },
    { key: 'bar',   name: 'Tondo pieno',         type: 'tube',  params: { d: 20, din: 0, L: 150 }, sub: 'Ø 20 × 150' },
  ]},
  { group: 'Bulloneria e perni', items: [
    { key: 'bolt',  name: 'Vite TE',             type: 'bolt',   params: { size: 'M8', L: 30 }, sub: 'M8 × 30' },
    { key: 'nut',   name: 'Dado',                type: 'nut',    params: { size: 'M8' }, sub: 'M8' },
    { key: 'washer',name: 'Rondella',            type: 'washer', params: { size: 'M8' }, sub: 'M8' },
    { key: 'pin',   name: 'Perno cilindrico',    type: 'pin',    params: { d: 8, L: 40 }, sub: 'Ø 8 × 40' },
  ]},
];

export function newProject(name = 'Nuovo progetto') {
  return { version: 1, id: uid('prj'), name, created: Date.now(), modified: Date.now(),
    settings: { snap: 5, grid: 20, fit: 'medium', defaultMaterial: 's235' },
    parts: [], stacks: [], steps: [], video: null, counter: {} };
}

export function newPart(project, type, params = {}, extra = {}) {
  const base = PART_TYPES[type];
  const isFast = !!base.fastener;
  const p = {
    id: uid('p'), type,
    name: extra.name || autoName(project, type, params),
    material: extra.material || (isFast ? 'zinc' : project.settings.defaultMaterial || 's235'),
    pos: [0, 0, 0], quat: [0, 0, 0, 1],
    params: { ...defaultParams(type), ...params },
    holes: [], stack: null,
  };
  return p;
}

export function defaultParams(type) {
  switch (type) {
    case 'plate': return { w: 100, h: 100, t: 5, r: 0 };
    case 'disc': return { d: 120, din: 0, t: 8 };
    case 'angle': return { a: 40, b: 40, t: 4, L: 120 };
    case 'tube': return { d: 40, din: 32, L: 200 };
    case 'bolt': return { size: 'M8', L: 30 };
    case 'nut': return { size: 'M8' };
    case 'washer': return { size: 'M8' };
    case 'pin': return { d: 8, L: 40 };
  }
  return {};
}

function autoName(project, type, params) {
  const base = { plate: 'Lastra', disc: 'Disco', angle: 'Angolare', tube: 'Tubo', bolt: 'Vite', nut: 'Dado', washer: 'Rondella', pin: 'Perno' }[type] || 'Pezzo';
  project.counter[base] = (project.counter[base] || 0) + 1;
  return `${base} ${project.counter[base]}`;
}

/** Descrizione breve delle misure */
export function describe(p) {
  const q = p.params, f = (v) => String(Math.round(v * 10) / 10).replace('.', ',');
  switch (p.type) {
    case 'plate': return `${f(q.w)} × ${f(q.h)} × ${f(q.t)} mm`;
    case 'disc': return q.din > 0 ? `Ø ${f(q.d)} / Ø ${f(q.din)} × ${f(q.t)} mm` : `Ø ${f(q.d)} × ${f(q.t)} mm`;
    case 'angle': return `L ${f(q.a)} × ${f(q.b)} × ${f(q.t)} – lungo ${f(q.L)} mm`;
    case 'tube': return q.din > 0 ? `Ø ${f(q.d)} × ${f((q.d - q.din) / 2)} – lungo ${f(q.L)} mm` : `Tondo Ø ${f(q.d)} – lungo ${f(q.L)} mm`;
    case 'bolt': return `${q.size} × ${q.L}`;
    case 'nut': return `${q.size}`;
    case 'washer': return `${q.size}`;
    case 'pin': return `Ø ${f(q.d)} × ${f(q.L)}`;
  }
  return '';
}

export function kindLabel(p) {
  if (p.type === 'plate') {
    const q = p.params;
    if (Math.abs(q.w - q.h) < 1e-6) return 'Lastra quadrata';
    if (Math.max(q.w, q.h) / Math.min(q.w, q.h) >= 4) return 'Barra piatta';
    return 'Lastra rettangolare';
  }
  if (p.type === 'disc') return p.params.din > 0 ? 'Flangia / anello' : 'Disco';
  if (p.type === 'tube') return p.params.din > 0 ? 'Tubo tondo' : 'Tondo pieno';
  return PART_TYPES[p.type].label;
}

/** Spessore della lamiera (per pezzi in lastra) */
export function thicknessOf(p) {
  if (p.type === 'plate' || p.type === 'disc' || p.type === 'angle') return p.params.t;
  return 0;
}

// ------------------------------------------------------------------ fori
/** Le facce forabili di un pezzo, in coordinate locali.
 * Ogni faccia: { id, origin (punto x=0,y=0 della faccia), u, v (assi nel piano), n (normale uscente dal lato "sotto"), depth } */
export function faces(p) {
  const q = p.params;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  switch (p.type) {
    case 'plate': return [{ id: 'A', origin: V(0, 0, 0), u: V(1, 0, 0), v: V(0, 1, 0), n: V(0, 0, 1), depth: q.t, size: [q.w, q.h] }];
    case 'disc': return [{ id: 'A', origin: V(0, 0, 0), u: V(1, 0, 0), v: V(0, 1, 0), n: V(0, 0, 1), depth: q.t, size: [q.d, q.d], centered: true }];
    case 'angle': return [
      { id: 'A', origin: V(0, 0, 0), u: V(1, 0, 0), v: V(0, 1, 0), n: V(0, 0, 1), depth: q.t, size: [q.a, q.L] },
      { id: 'B', origin: V(0, 0, 0), u: V(0, 1, 0), v: V(0, 0, 1), n: V(1, 0, 0), depth: q.t, size: [q.L, q.b] },
    ];
  }
  return [];
}

/** Assi dei fori nello spazio del mondo. Ritorna [{part, hole, a (ingresso), b (uscita), dir, d, depth}] */
export function holeAxes(p) {
  const out = [];
  const m = partMatrix(p);
  const rot = new THREE.Matrix3().setFromMatrix4(m);
  const fs = faces(p);
  for (const h of p.holes) {
    const f = fs.find((x) => x.id === (h.face || 'A')) || fs[0];
    if (!f) continue;
    const local = f.origin.clone().addScaledVector(f.u, h.x).addScaledVector(f.v, h.y);
    const a = local.clone().applyMatrix4(m);
    const dir = f.n.clone().applyMatrix3(rot).normalize();
    const b = a.clone().addScaledVector(dir, f.depth);
    out.push({ part: p, hole: h, a, b, dir, d: h.d, depth: f.depth });
  }
  return out;
}

export function partMatrix(p) {
  const m = new THREE.Matrix4();
  m.compose(new THREE.Vector3(...p.pos), new THREE.Quaternion(...p.quat), new THREE.Vector3(1, 1, 1));
  return m;
}

export function addHole(p, x, y, d, face = 'A', kind = 'pass', thread = null, len = 0, ang = 0) {
  const h = { id: uid('h'), x: round2(x), y: round2(y), d: round2(d), face, kind, thread };
  if (len > 0) { h.len = round2(len); h.ang = round2(ang); }
  p.holes.push(h);
  return h;
}
const round2 = (v) => Math.round(v * 100) / 100;

/** Verifica che un foro stia dentro la faccia e non tocchi il bordo */
/** Centri delle due estremità di un'asola (per un foro tondo coincidono) */
export function holeEnds(h) {
  const L = h.len || 0, a = (h.ang || 0) * Math.PI / 180;
  return [[h.x - Math.cos(a) * L / 2, h.y - Math.sin(a) * L / 2], [h.x + Math.cos(a) * L / 2, h.y + Math.sin(a) * L / 2]];
}
/** Area del foro o dell'asola */
export const holeArea = (h) => Math.PI * h.d * h.d / 4 + h.d * (h.len || 0);
export const isSlot = (h) => (h.len || 0) > 0;

/** Verifica che un foro (o asola) stia dentro la faccia e non tocchi il bordo */
export function holeInside(p, h) {
  return holeEnds(h).every(([x, y]) => circleInside(p, { ...h, x, y }));
}
function circleInside(p, h) {
  const q = p.params, r = h.d / 2;
  if (p.type === 'plate') {
    return h.x - r > 0.5 && h.y - r > 0.5 && h.x + r < q.w - 0.5 && h.y + r < q.h - 0.5;
  }
  if (p.type === 'disc') {
    const dist = Math.hypot(h.x, h.y);
    return dist + r < q.d / 2 - 0.5 && (q.din <= 0 || dist - r > q.din / 2 + 0.5);
  }
  if (p.type === 'angle') {
    if ((h.face || 'A') === 'A') return h.x - r > q.t + 0.5 && h.x + r < q.a - 0.5 && h.y - r > 0.5 && h.y + r < q.L - 0.5;
    return h.x - r > 0.5 && h.x + r < q.L - 0.5 && h.y - r > q.t + 0.5 && h.y + r < q.b - 0.5;
  }
  return true;
}

// Schemi di foratura
export function patternGrid(p, { nx, ny, px, py, x0, y0, d, face = 'A' }) {
  const made = [];
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) made.push(addHole(p, x0 + i * px, y0 + j * py, d, face));
  return made;
}
export function patternCircle(p, { n, pcd, start = 0, cx = 0, cy = 0, d, face = 'A' }) {
  const made = [];
  for (let i = 0; i < n; i++) {
    const a = (start + i * 360 / n) * Math.PI / 180;
    made.push(addHole(p, cx + Math.cos(a) * pcd / 2, cy + Math.sin(a) * pcd / 2, d, face));
  }
  return made;
}
export function patternCorners(p, { margin, d }) {
  const q = p.params;
  if (p.type !== 'plate') return [];
  return [[margin, margin], [q.w - margin, margin], [margin, q.h - margin], [q.w - margin, q.h - margin]]
    .map(([x, y]) => addHole(p, x, y, d));
}

// ------------------------------------------------------------------ masse
export function area2D(p) {
  const q = p.params;
  const holesA = p.holes.reduce((s, h) => s + holeArea(h), 0);
  if (p.type === 'plate') return q.w * q.h - (4 - Math.PI) * q.r * q.r - holesA;
  if (p.type === 'disc') return Math.PI / 4 * (q.d * q.d - q.din * q.din) - holesA;
  return 0;
}
/** Volume in mm³ */
export function volume(p) {
  const q = p.params;
  const holesV = p.holes.reduce((s, h) => s + holeArea(h), 0);
  switch (p.type) {
    case 'plate': case 'disc': return area2D(p) * q.t;
    case 'angle': return ((q.a * q.t + (q.b - q.t) * q.t) * q.L) - holesV * q.t;
    case 'tube': return Math.PI / 4 * (q.d * q.d - q.din * q.din) * q.L;
    case 'bolt': { const b = BOLTS[q.size]; return Math.PI / 4 * b.d * b.d * q.L * 0.92 + hexArea(b.s) * b.k; }
    case 'nut': { const b = BOLTS[q.size]; return (hexArea(b.s) - Math.PI / 4 * b.d * b.d) * b.m; }
    case 'washer': { const b = BOLTS[q.size]; return Math.PI / 4 * (b.w[1] ** 2 - b.w[0] ** 2) * b.w[2]; }
    case 'pin': return Math.PI / 4 * q.d * q.d * q.L;
  }
  return 0;
}
const hexArea = (s) => Math.sqrt(3) / 2 * s * s;
/** Massa in kg */
export function mass(p) {
  const rho = (MATERIALS[p.material] || MATERIALS.s235).rho; // g/cm³
  return volume(p) * rho / 1e6;
}

/** Firma per raggruppare pezzi identici nella distinta */
export function signature(p) {
  const holes = p.holes.map((h) => `${h.face || 'A'}:${h.x},${h.y},${h.d},${h.kind},${h.len || 0},${h.ang || 0}`).sort().join(';');
  return `${p.type}|${p.material}|${JSON.stringify(p.params)}|${holes}`;
}

/** Descrizione per la distinta */
export function bomDescription(p) {
  const q = p.params;
  switch (p.type) {
    case 'bolt': return `Vite TE ISO 4017 ${q.size} × ${q.L} – cl. 8.8`;
    case 'nut': return `Dado esagonale ISO 4032 ${q.size} – cl. 8`;
    case 'washer': return `Rondella piana ISO 7089 ${q.size}`;
    case 'pin': return `Perno cilindrico ISO 2338 Ø ${q.d} m6 × ${q.L}`;
  }
  const nh = p.holes.length;
  const ns = p.holes.filter(isSlot).length, nr = nh - ns;
  const parts = [nr ? `${nr} for${nr === 1 ? 'o' : 'i'}` : '', ns ? `${ns} asol${ns === 1 ? 'a' : 'e'}` : ''].filter(Boolean).join(', ');
  return `${kindLabel(p)} ${describe(p)}${parts ? ` – ${parts}` : ''}`;
}

export function clone(o) { return JSON.parse(JSON.stringify(o)); }
