// Tavola tecnica 2D quotata (SVG, foglio A4) ed esportazione DXF per taglio laser/plasma.
import { MATERIALS, BOLTS, boltForHole, fmt } from './iso.js';
import { kindLabel, describe, mass, area2D, faces, holeEnds } from './model.js';

const SCALES = [[5, 1], [2, 1], [1, 1], [1, 2], [1, 2.5], [1, 5], [1, 10], [1, 20], [1, 50]];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

/** Profilo piano di una faccia: {w, h, centered, outline: 'rect'|'circle', r, din, holes} */
function flatViews(p) {
  const q = p.params;
  if (p.type === 'plate') return [{ title: 'Vista in pianta', w: q.w, h: q.h, outline: 'rect', r: q.r || 0, holes: p.holes, t: q.t }];
  if (p.type === 'disc') return [{ title: 'Vista in pianta', w: q.d, h: q.d, outline: 'circle', din: q.din, holes: p.holes, t: q.t, centered: true }];
  if (p.type === 'angle') return [
    { title: 'Ala A (orizzontale)', w: q.a, h: q.L, outline: 'rect', r: 0, holes: p.holes.filter((h) => (h.face || 'A') === 'A'), t: q.t, bendAt: 'left' },
    { title: 'Ala B (verticale)', w: q.L, h: q.b, outline: 'rect', r: 0, holes: p.holes.filter((h) => h.face === 'B'), t: q.t, bendAt: 'bottom' },
  ];
  return [];
}

/** Gruppi di fori uguali: "4× Ø 9 passanti (M8)" */
export function holeGroups(holes) {
  const g = new Map();
  for (const h of holes) {
    const k = `${h.d}|${h.kind}|${h.thread || ''}|${h.len || 0}`;
    if (!g.has(k)) g.set(k, { d: h.d, kind: h.kind, thread: h.thread, len: h.len || 0, n: 0 });
    g.get(k).n++;
  }
  return [...g.values()].map((x) => {
    if (x.len) return `${x.n}× asol${x.n === 1 ? 'a' : 'e'} ${fmt(x.d)} × ${fmt(x.d + x.len)} (corsa ${fmt(x.len)} mm)`;
    if (x.kind === 'thread') return `${x.n}× ${x.thread} filettati (preforo Ø ${fmt(BOLTS[x.thread] ? BOLTS[x.thread].tap : x.d)})`;
    const b = boltForHole(x.d);
    return `${x.n}× Ø ${fmt(x.d)} passanti${b ? ` (per ${b})` : ''}`;
  });
}

/** SVG del foglio A4 orizzontale (unità: mm del foglio) */
export function drawingSVG(p, project, opts = {}) {
  const views = flatViews(p);
  const W = 297, H = 210, M = 10;
  const titleH = 30;
  const area = { x: M + 4, y: M + 4, w: W - 2 * M - 8, h: H - 2 * M - titleH - 12 };
  // spazio per le viste: pianta (+ eventuale seconda vista) + vista laterale dello spessore
  const totalW = views.reduce((s, v) => s + v.w, 0) + (views[0] ? views[0].t * 2 : 0);
  const maxH = Math.max(...views.map((v) => v.h), 1);
  const roomW = area.w - 60 * views.length - 30, roomH = area.h - 50;
  let sc = SCALES.find(([a, b]) => totalW * a / b <= roomW && maxH * a / b <= roomH) || SCALES[SCALES.length - 1];
  const k = sc[0] / sc[1];
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}mm" height="${H}mm" font-family="Inter, Arial, sans-serif">`);
  out.push(`<defs><marker id="ar" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1.5 L10 5 L0 8.5 z" fill="#111"/></marker></defs>`);
  out.push(`<rect x="0" y="0" width="${W}" height="${H}" fill="#fff"/>`);
  out.push(`<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#111" stroke-width="0.5"/>`);
  const S = { thick: 'stroke="#111" stroke-width="0.45" fill="none"', thin: 'stroke="#111" stroke-width="0.18" fill="none"', center: 'stroke="#c23" stroke-width="0.15" fill="none" stroke-dasharray="6 1.2 1 1.2"', hidden: 'stroke="#111" stroke-width="0.18" fill="none" stroke-dasharray="1.5 1"' };
  const T = (x, y, s, size = 2.6, anchor = 'middle', rot = 0, weight = 400) =>
    `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" ${rot ? `transform="rotate(${rot} ${x.toFixed(2)} ${y.toFixed(2)})"` : ''} fill="#111">${esc(s)}</text>`;
  const dimH = (x1, x2, y, yRef, text) => {   // quota orizzontale tra x1 e x2, linea a quota y, riferimento a yRef
    const o = [];
    o.push(`<path d="M${x1} ${yRef} L${x1} ${y + (y > yRef ? 1.5 : -1.5)} M${x2} ${yRef} L${x2} ${y + (y > yRef ? 1.5 : -1.5)}" ${S.thin}/>`);
    o.push(`<path d="M${x1} ${y} L${x2} ${y}" ${S.thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`);
    o.push(T((x1 + x2) / 2, y - 0.9, text));
    return o.join('');
  };
  const dimV = (y1, y2, x, xRef, text) => {
    const o = [];
    o.push(`<path d="M${xRef} ${y1} L${x + (x > xRef ? 1.5 : -1.5)} ${y1} M${xRef} ${y2} L${x + (x > xRef ? 1.5 : -1.5)} ${y2}" ${S.thin}/>`);
    o.push(`<path d="M${x} ${y1} L${x} ${y2}" ${S.thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`);
    o.push(T(x - 0.9, (y1 + y2) / 2, text, 2.6, 'middle', -90));
    return o.join('');
  };
  const holeTable = [];
  const usedW = views.reduce((s, v) => s + v.w * k + 48, 0) + (views[0] ? views[0].t * k + 20 : 0);
  let cursorX = area.x + 22 + Math.max(0, (area.w - 75 - usedW) / 2);
  const letters = 'ABCDEFGH';
  views.forEach((v, vi) => {
    const vw = v.w * k, vh = v.h * k;
    const x0 = cursorX, y0 = area.y + 22 + (roomH - vh) / 2 + 8;   // angolo in alto a sinistra della vista
    // trasformazione: coordinate pezzo (origine in basso a sinistra, o al centro) -> foglio
    const X = (x) => x0 + (v.centered ? x + v.w / 2 : x) * k;
    const Y = (y) => y0 + vh - (v.centered ? y + v.h / 2 : y) * k;
    out.push(T(x0 + vw / 2, y0 - 16, `${v.title}  (scala ${sc[0]}:${String(sc[1]).replace('.', ',')})`, 3, 'middle', 0, 600));
    if (v.outline === 'circle') {
      const R = v.w / 2 * k, cx = X(0), cy = Y(0);
      out.push(`<circle cx="${cx}" cy="${cy}" r="${R}" ${S.thick}/>`);
      if (v.din > 0) out.push(`<circle cx="${cx}" cy="${cy}" r="${v.din / 2 * k}" ${S.thick}/>`);
      out.push(`<path d="M${cx - R - 3} ${cy} L${cx + R + 3} ${cy} M${cx} ${cy - R - 3} L${cx} ${cy + R + 3}" ${S.center}/>`);
      // quote diametri
      out.push(dimH(cx - R, cx + R, Y(0) + R + 8, cy, `Ø ${fmt(v.w)}`));
      if (v.din > 0) out.push(dimH(cx - v.din / 2 * k, cx + v.din / 2 * k, cy - R - 6, cy, `Ø ${fmt(v.din)}`));
      // circonferenza dei fori (se tutti sullo stesso raggio)
      const radii = [...new Set(v.holes.map((h) => Math.round(Math.hypot(h.x, h.y) * 10) / 10))];
      if (radii.length === 1 && radii[0] > 0) {
        out.push(`<circle cx="${cx}" cy="${cy}" r="${radii[0] * k}" ${S.center}/>`);
        out.push(T(cx + radii[0] * k * 0.72 + 2, cy - radii[0] * k * 0.72 - 2, `PCD Ø ${fmt(radii[0] * 2)}`, 2.4, 'start'));
      }
    } else {
      const r = Math.min(v.r || 0, v.w / 2, v.h / 2) * k;
      out.push(`<rect x="${X(0)}" y="${Y(v.h)}" width="${vw}" height="${vh}" rx="${r}" ${S.thick}/>`);
      if (v.bendAt === 'left') out.push(`<path d="M${X(v.t)} ${Y(0)} L${X(v.t)} ${Y(v.h)}" ${S.hidden}/>`);
      if (v.bendAt === 'bottom') out.push(`<path d="M${X(0)} ${Y(v.t)} L${X(v.w)} ${Y(v.t)}" ${S.hidden}/>`);
      out.push(dimH(X(0), X(v.w), Y(0) + 9, Y(0), fmt(v.w)));
      out.push(dimV(Y(v.h), Y(0), X(0) - 9, X(0), fmt(v.h)));
      if (v.r > 0) out.push(T(X(v.w) - r * 0.3 + 3, Y(v.h) - 1.5, `R ${fmt(v.r)}`, 2.4, 'start'));
      // quote dei fori: coordinate X sopra, Y a destra (a partire dall'origine)
      const xs = [...new Set(v.holes.map((h) => h.x))].sort((a, b) => a - b);
      const ys = [...new Set(v.holes.map((h) => h.y))].sort((a, b) => a - b);
      if (xs.length && xs.length <= 6) xs.forEach((x, i) => out.push(dimH(X(0), X(x), Y(v.h) - 6 - i * 5.5, Y(v.h), fmt(x))));
      if (ys.length && ys.length <= 6) ys.forEach((y, i) => out.push(dimV(Y(0), Y(y), X(v.w) + 6 + i * 5.5, X(v.w), fmt(y))));
      out.push(`<circle cx="${X(0)}" cy="${Y(0)}" r="1" fill="#c23"/>`);
      out.push(T(X(0) - 1.5, Y(0) + 3.8, '0', 2.2, 'end'));
    }
    // fori con assi
    v.holes.forEach((h, i) => {
      const cx = X(h.x), cy = Y(h.y), rr = h.d / 2 * k;
      if (h.len) {
        const [[x1, y1], [x2, y2]] = holeEnds(h).map(([x, y]) => [X(x), Y(y)]);
        const a = Math.atan2(y2 - y1, x2 - x1), nx = -Math.sin(a) * rr, ny = Math.cos(a) * rr;
        out.push(`<path d="M${x1 + nx} ${y1 + ny} L${x2 + nx} ${y2 + ny} A${rr} ${rr} 0 0 0 ${x2 - nx} ${y2 - ny} L${x1 - nx} ${y1 - ny} A${rr} ${rr} 0 0 0 ${x1 + nx} ${y1 + ny} Z" ${S.thick}/>`);
        out.push(`<path d="M${x1} ${y1} L${x2} ${y2}" ${S.center}/>`);
      } else out.push(`<circle cx="${cx}" cy="${cy}" r="${rr}" ${S.thick}/>`);
      if (h.kind === 'thread') out.push(`<path d="M${cx + rr * 1.18} ${cy} A${rr * 1.18} ${rr * 1.18} 0 1 1 ${cx} ${cy - rr * 1.18}" ${S.thin}/>`);
      const c = rr + 1.6;
      out.push(`<path d="M${cx - c} ${cy} L${cx + c} ${cy} M${cx} ${cy - c} L${cx} ${cy + c}" ${S.center}/>`);
      const id = `${letters[vi]}${i + 1}`;
      out.push(T(cx + rr + 0.8, cy - rr - 0.6, id, 2, 'start'));
      holeTable.push({ id, x: h.x, y: h.y, d: h.d, kind: h.kind, thread: h.thread, len: h.len || 0 });
    });
    // didascalia gruppi fori
    holeGroups(v.holes).forEach((g, i) => out.push(T(x0 + vw / 2, Y(v.centered ? -v.h / 2 : 0) + 17 + i * 3.6, g, 2.5)));
    cursorX += vw + 48;
    // vista laterale (spessore), solo dopo la prima vista piana
    if (vi === views.length - 1) {
      const sx = cursorX - 26, st = v.t * k;
      const hh = (views[0].outline === 'circle' ? views[0].w : views[0].h) * k;
      out.push(T(sx + st / 2, y0 - 16, 'Spessore', 3, 'middle', 0, 600));
      out.push(`<rect x="${sx}" y="${y0 + (vh - hh) / 2}" width="${Math.max(st, 0.6)}" height="${hh}" ${S.thick} fill="#e8edf3"/>`);
      out.push(dimH(sx, sx + st, y0 + (vh - hh) / 2 + hh + 9, y0 + (vh - hh) / 2 + hh, fmt(v.t)));
      cursorX = sx + st + 20;
    }
  });
  // tabella fori (in alto a destra) quando ci sono fori
  if (holeTable.length) {
    const tx = W - M - 70, ty = M + 6, rowH = 3.6, rows = holeTable.slice(0, 22);
    out.push(`<rect x="${tx}" y="${ty}" width="66" height="${(rows.length + 1) * rowH + 1.5}" fill="#fff" ${S.thin}/>`);
    out.push(T(tx + 2, ty + 2.8, 'Foro', 2.2, 'start', 0, 600) + T(tx + 20, ty + 2.8, 'X', 2.2, 'end', 0, 600) + T(tx + 34, ty + 2.8, 'Y', 2.2, 'end', 0, 600) + T(tx + 36, ty + 2.8, 'Diametro', 2.2, 'start', 0, 600));
    rows.forEach((h, i) => {
      const y = ty + 2.8 + (i + 1) * rowH;
      out.push(T(tx + 2, y, h.id, 2.2, 'start') + T(tx + 20, y, fmt(h.x), 2.2, 'end') + T(tx + 34, y, fmt(h.y), 2.2, 'end') + T(tx + 36, y, h.kind === 'thread' ? h.thread : h.len ? `asola ${fmt(h.d)}×${fmt(h.d + h.len)}` : `Ø ${fmt(h.d)}`, 2.2, 'start'));
    });
    if (holeTable.length > rows.length) out.push(T(tx + 2, ty + (rows.length + 2) * rowH + 1, `… altri ${holeTable.length - rows.length} fori nel file DXF`, 2, 'start'));
  }
  // cartiglio
  const mat = MATERIALS[p.material] || MATERIALS.s235;
  const qty = project.parts.filter((x) => x.type === p.type && JSON.stringify(x.params) === JSON.stringify(p.params) && x.holes.length === p.holes.length && x.material === p.material).length;
  const bx = W - M - 150, by = H - M - titleH;
  out.push(`<rect x="${bx}" y="${by}" width="150" height="${titleH}" fill="#fff" ${S.thick}/>`);
  out.push(`<path d="M${bx} ${by + 10} L${bx + 150} ${by + 10} M${bx} ${by + 20} L${bx + 150} ${by + 20} M${bx + 75} ${by + 10} L${bx + 75} ${by + 30} M${bx + 112} ${by + 20} L${bx + 112} ${by + 30}" ${S.thin}/>`);
  const cell = (x, y, lab, val) => T(x + 1.5, y + 3, lab, 1.9, 'start') + T(x + 1.5, y + 8, val, 3, 'start', 0, 600);
  out.push(cell(bx, by, 'Pezzo', `${p.name} – ${kindLabel(p)}`));
  out.push(cell(bx, by + 10, 'Materiale', mat.name));
  out.push(cell(bx + 75, by + 10, 'Misure', describe(p)));
  out.push(cell(bx, by + 20, 'Progetto', project.name));
  out.push(cell(bx + 75, by + 20, 'Massa', `${fmt(mass(p), 3)} kg`));
  out.push(cell(bx + 112, by + 20, 'Quantità / scala', `${qty} pz – ${sc[0]}:${String(sc[1]).replace('.', ',')}`));
  // note generali
  const notes = ['Quote in mm. Tolleranze generali ISO 2768-mK.', 'Spigoli vivi smussati 0,5 × 45°. Sbavare i fori.', p.type === 'angle' ? 'Angolare laminato: le ali sono viste distese, raggio interno da catalogo.' : `Superficie: ${fmt(area2D(p) / 1e6 * 2, 3)} m² (due facce).`];
  notes.forEach((n, i) => out.push(T(M + 4, H - M - 22 + i * 4, n, 2.4, 'start')));
  out.push(T(M + 4, H - M - 4, `Smonta Studio · ${new Date().toLocaleDateString('it-IT')}`, 2, 'start'));
  out.push('</svg>');
  return out.join('');
}

// ------------------------------------------------------------------ DXF (R12, unità mm)
export function partDXF(p) {
  const L = [];
  const add = (...a) => L.push(...a.map(String));
  add(0, 'SECTION', 2, 'HEADER', 9, '$ACADVER', 1, 'AC1009', 9, '$INSUNITS', 70, 4, 0, 'ENDSEC');
  add(0, 'SECTION', 2, 'TABLES', 0, 'TABLE', 2, 'LAYER', 70, 3);
  for (const [name, color] of [['TAGLIO', 7], ['FORI', 1], ['TESTO', 3]]) add(0, 'LAYER', 2, name, 70, 0, 62, color, 6, 'CONTINUOUS');
  add(0, 'ENDTAB', 0, 'ENDSEC', 0, 'SECTION', 2, 'ENTITIES');
  const line = (x1, y1, x2, y2, layer = 'TAGLIO') => add(0, 'LINE', 8, layer, 10, x1, 20, y1, 30, 0, 11, x2, 21, y2, 31, 0);
  const circle = (x, y, r, layer) => add(0, 'CIRCLE', 8, layer, 10, x, 20, y, 30, 0, 40, r);
  const arc = (x, y, r, a1, a2, layer = 'TAGLIO') => add(0, 'ARC', 8, layer, 10, x, 20, y, 30, 0, 40, r, 50, a1, 51, a2);
  const text = (x, y, h, s) => add(0, 'TEXT', 8, 'TESTO', 10, x, 20, y, 30, 0, 40, h, 1, s);
  const holeOut = (ox, oy, hh) => {
    const r = (hh.kind === 'thread' ? (BOLTS[hh.thread] || { tap: hh.d }).tap : hh.d) / 2;
    if (!hh.len) { circle(ox + hh.x, oy + hh.y, r, 'FORI'); return; }
    const [[x1, y1], [x2, y2]] = holeEnds(hh); const a = (hh.ang || 0), ar = a * Math.PI / 180;
    const nx = -Math.sin(ar) * r, ny = Math.cos(ar) * r;
    line(ox + x1 + nx, oy + y1 + ny, ox + x2 + nx, oy + y2 + ny, 'FORI'); line(ox + x1 - nx, oy + y1 - ny, ox + x2 - nx, oy + y2 - ny, 'FORI');
    arc(ox + x2, oy + y2, r, a - 90, a + 90, 'FORI'); arc(ox + x1, oy + y1, r, a + 90, a + 270, 'FORI');
  };
  let offX = 0;
  for (const v of flatViews(p)) {
    if (v.outline === 'circle') {
      circle(offX + v.w / 2, v.w / 2, v.w / 2, 'TAGLIO');
      if (v.din > 0) circle(offX + v.w / 2, v.w / 2, v.din / 2, 'TAGLIO');
      for (const h of v.holes) holeOut(offX + v.w / 2, v.w / 2, h);
    } else {
      const r = Math.min(v.r || 0, v.w / 2, v.h / 2), w = v.w, h = v.h, o = offX;
      if (r > 0) {
        line(o + r, 0, o + w - r, 0); line(o + w, r, o + w, h - r); line(o + w - r, h, o + r, h); line(o, h - r, o, r);
        arc(o + w - r, r, r, 270, 360); arc(o + w - r, h - r, r, 0, 90); arc(o + r, h - r, r, 90, 180); arc(o + r, r, r, 180, 270);
      } else { line(o, 0, o + w, 0); line(o + w, 0, o + w, h); line(o + w, h, o, h); line(o, h, o, 0); }
      for (const hh of v.holes) holeOut(o, 0, hh);
    }
    text(offX, -8, 4, `${p.name} - ${v.title} - sp. ${v.t} mm - ${(MATERIALS[p.material] || MATERIALS.s235).name}`);
    offX += v.w + 30;
  }
  add(0, 'ENDSEC', 0, 'EOF');
  return L.join('\r\n') + '\r\n';
}

export function canDraw(p) { return ['plate', 'disc', 'angle'].includes(p.type); }
export { faces };

// ------------------------------------------------------------------ tavola d'assieme
/** Foglio A4 con viste ortogonali (fronte, lato, pianta), vista isometrica con i numeri di posizione,
 * quote d'ingombro e distinta. viewer: la vista 3D (per disegnare le immagini), b: risultato di bom(). */
export function assemblySVG(project, viewer, b, worldBox, THREE) {
  const W = 297, H = 210, M = 10;
  const box = new THREE.Box3();
  for (const p of project.parts) if (!p.hidden) box.union(worldBox(p));
  if (box.isEmpty()) return null;
  const sz = box.getSize(new THREE.Vector3());
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const views = {
    front: { dir: V(0, -1, 0), up: V(0, 0, 1), title: 'Vista frontale', hor: ['x', sz.x], ver: ['z', sz.z] },
    side: { dir: V(1, 0, 0), up: V(0, 0, 1), title: 'Vista laterale (da destra)', hor: ['y', sz.y], ver: ['z', sz.z] },
    top: { dir: V(0, 0, 1), up: V(0, 1, 0), title: 'Vista dall\'alto', hor: ['x', sz.x], ver: ['y', sz.y] },
  };
  // celle: colonna sinistra fronte/pianta, colonna destra lato/isometrica
  const cellW = 92, cellH = 78, x0 = M + 6, y0 = M + 8;
  const cells = { front: [x0, y0], side: [x0 + cellW + 6, y0], top: [x0, y0 + cellH + 8], iso: [x0 + cellW + 6, y0 + cellH + 8] };
  // scala unificata comune alle tre viste
  const need = (v) => [(v.hor[1]) * 1.12, (v.ver[1]) * 1.12];
  let sc = SCALES[SCALES.length - 1];
  for (const s of SCALES) {
    const k = s[0] / s[1];
    if (Object.values(views).every((v) => { const [a, c] = need(v); return a * k <= cellW - 16 && c * k <= cellH - 18; })) { sc = s; break; }
  }
  const k = sc[0] / sc[1];
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${W} ${H}" width="${W}mm" height="${H}mm" font-family="Inter, Arial, sans-serif">`);
  out.push(`<defs><marker id="ar" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1.5 L10 5 L0 8.5 z" fill="#111"/></marker></defs>`);
  out.push(`<rect width="${W}" height="${H}" fill="#fff"/><rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#111" stroke-width="0.5"/>`);
  const thin = 'stroke="#111" stroke-width="0.18" fill="none"';
  const T = (x, y, s, size = 2.5, anchor = 'middle', rot = 0, weight = 400) =>
    `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" ${rot ? `transform="rotate(${rot} ${x.toFixed(2)} ${y.toFixed(2)})"` : ''} fill="#111">${esc(s)}</text>`;
  for (const [key, v] of Object.entries(views)) {
    const img = viewer.renderOrtho(v.dir, v.up, box, 700, 0.02);
    const iw = img.w * k, ih = img.h * k;
    const [cx, cy] = cells[key];
    const ix = cx + (cellW - iw) / 2 + 4, iy = cy + 6 + (cellH - 18 - ih) / 2;
    out.push(T(cx + cellW / 2, cy + 2, v.title, 2.8, 'middle', 0, 600));
    out.push(`<image x="${ix.toFixed(2)}" y="${iy.toFixed(2)}" width="${iw.toFixed(2)}" height="${ih.toFixed(2)}" xlink:href="${img.url}" href="${img.url}" preserveAspectRatio="none"/>`);
    // quote d'ingombro dagli spigoli del box
    const P = (pt) => { const [u, w] = img.map(pt); return [ix + u * iw, iy + w * ih]; };
    const cH = [P(box.min), P(box.max)];
    const xs = [cH[0][0], cH[1][0]].sort((a, b) => a - b), ys = [cH[0][1], cH[1][1]].sort((a, b) => a - b);
    const yd = ys[1] + 6, xd = xs[0] - 6;
    out.push(`<path d="M${xs[0]} ${ys[1]} L${xs[0]} ${yd + 1.5} M${xs[1]} ${ys[1]} L${xs[1]} ${yd + 1.5}" ${thin}/><path d="M${xs[0]} ${yd} L${xs[1]} ${yd}" ${thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`);
    out.push(T((xs[0] + xs[1]) / 2, yd - 0.9, fmt(v.hor[1])));
    out.push(`<path d="M${xs[0]} ${ys[0]} L${xd - 1.5} ${ys[0]} M${xs[0]} ${ys[1]} L${xd - 1.5} ${ys[1]}" ${thin}/><path d="M${xd} ${ys[0]} L${xd} ${ys[1]}" ${thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`);
    out.push(T(xd - 0.9, (ys[0] + ys[1]) / 2, fmt(v.ver[1]), 2.5, 'middle', -90));
  }
  // vista isometrica con i numeri di posizione
  {
    const [cx, cy] = cells.iso;
    const img = viewer.renderOrtho(V(0.62, -0.78, 0.55), V(0, 0, 1), box, 900, 0.04);
    const fit = Math.min((cellW - 8) / img.w, (cellH - 12) / img.h);
    const iw = img.w * fit, ih = img.h * fit, ix = cx + (cellW - iw) / 2 + 2, iy = cy + 6 + (cellH - 10 - ih) / 2;
    out.push(T(cx + cellW / 2, cy + 2, 'Vista isometrica (non in scala)', 2.8, 'middle', 0, 600));
    out.push(`<image x="${ix.toFixed(2)}" y="${iy.toFixed(2)}" width="${iw.toFixed(2)}" height="${ih.toFixed(2)}" xlink:href="${img.url}" href="${img.url}" preserveAspectRatio="none"/>`);
    const mid = [ix + iw / 2, iy + ih / 2];
    const used = [];
    for (const r of b.rows) {
      const p = project.parts.find((x) => x.id === r.ids[0]);
      if (!p || p.hidden) continue;
      const c = worldBox(p).getCenter(new THREE.Vector3());
      const [u, w] = img.map(c); const px = ix + u * iw, py = iy + w * ih;
      let dx = px - mid[0], dy = py - mid[1]; const L = Math.hypot(dx, dy) || 1; dx /= L; dy /= L;
      let bx = px + dx * 11, by = py + dy * 9;
      for (let t = 0; t < 8 && used.some(([ux, uy]) => Math.hypot(ux - bx, uy - by) < 7); t++) { bx += dx * 4 - dy * 3; by += dy * 4 + dx * 3; }
      bx = Math.max(cx + 4, Math.min(cx + cellW - 2, bx)); by = Math.max(cy + 7, Math.min(cy + cellH - 2, by));
      used.push([bx, by]);
      out.push(`<path d="M${px.toFixed(2)} ${py.toFixed(2)} L${bx.toFixed(2)} ${by.toFixed(2)}" stroke="#111" stroke-width="0.15"/><circle cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="0.5" fill="#111"/>`);
      out.push(`<circle cx="${bx.toFixed(2)}" cy="${by.toFixed(2)}" r="3.1" fill="#fff" stroke="#111" stroke-width="0.25"/>` + T(bx, by + 1, String(r.pos), 2.6, 'middle', 0, 600));
    }
  }
  // distinta
  const tx = W - M - 84, ty = M + 4, rowH = 4.1;
  const rows = b.rows.slice(0, 26);
  out.push(T(tx, ty + 3, 'Distinta materiali', 3, 'start', 0, 600));
  out.push(`<rect x="${tx}" y="${ty + 5}" width="82" height="${(rows.length + 1) * rowH + 1}" fill="#fff" ${thin}/>`);
  out.push(T(tx + 1.5, ty + 8.2, 'Pos.', 2.1, 'start', 0, 600) + T(tx + 13, ty + 8.2, 'Q.tà', 2.1, 'end', 0, 600) + T(tx + 15, ty + 8.2, 'Descrizione', 2.1, 'start', 0, 600) + T(tx + 81, ty + 8.2, 'kg', 2.1, 'end', 0, 600));
  rows.forEach((r, i) => {
    const y = ty + 8.2 + (i + 1) * rowH;
    const d = r.desc.length > 46 ? r.desc.slice(0, 45) + '…' : r.desc;
    out.push(`<path d="M${tx} ${y - 3.1} L${tx + 82} ${y - 3.1}" stroke="#111" stroke-width="0.08"/>`);
    out.push(T(tx + 1.5, y, String(r.pos), 2.1, 'start') + T(tx + 13, y, String(r.qty), 2.1, 'end') + T(tx + 15, y, d, 1.9, 'start') + T(tx + 81, y, fmt(r.total, 2), 2.1, 'end'));
  });
  if (b.rows.length > rows.length) out.push(T(tx + 1.5, ty + 8.2 + (rows.length + 1.6) * rowH, `… altre ${b.rows.length - rows.length} righe nella scheda Distinta`, 2, 'start'));
  // cartiglio
  const bx = W - M - 150, by = H - M - 26;
  out.push(`<rect x="${bx}" y="${by}" width="150" height="26" fill="#fff" stroke="#111" stroke-width="0.45"/>`);
  out.push(`<path d="M${bx} ${by + 13} L${bx + 150} ${by + 13} M${bx + 90} ${by} L${bx + 90} ${by + 26} M${bx + 120} ${by + 13} L${bx + 120} ${by + 26}" ${thin}/>`);
  const cell = (x, y, lab, val) => T(x + 1.5, y + 3, lab, 1.9, 'start') + T(x + 1.5, y + 9, val, 3, 'start', 0, 600);
  out.push(cell(bx, by, 'Assieme', project.name.length > 40 ? project.name.slice(0, 39) + '…' : project.name));
  out.push(cell(bx + 90, by, 'Ingombro (L × P × H)', `${fmt(sz.x, 0)} × ${fmt(sz.y, 0)} × ${fmt(sz.z, 0)}`));
  out.push(cell(bx, by + 13, 'Pezzi / fissaggi', `${project.parts.filter((p) => !p.stack).length} pezzi, ${project.stacks.length} fissaggi`));
  out.push(cell(bx + 90, by + 13, 'Massa', `${fmt(b.totalMass, 2)} kg`));
  out.push(cell(bx + 120, by + 13, 'Scala viste', `${sc[0]}:${String(sc[1]).replace('.', ',')}`));
  out.push(T(M + 4, H - M - 4, `Quote d'ingombro in mm · Smonta Studio · ${new Date().toLocaleDateString('it-IT')}`, 2, 'start'));
  out.push('</svg>');
  return out.join('');
}
