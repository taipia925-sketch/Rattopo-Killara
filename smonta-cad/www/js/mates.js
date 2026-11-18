// Accoppiamenti (foro su foro, faccia su faccia), bullonatura automatica e controlli.
import * as THREE from 'three';
import { BOLTS, PIN_DIAMETERS, PIN_LENGTHS, boltForHole, holeFit, stdLength, fmt } from './iso.js';
import { holeAxes, newPart, uid, PART_TYPES, partMatrix, holeInside, faces } from './model.js';
import { localBox } from './geom.js';

const v3 = (a) => new THREE.Vector3(...a);
const EPS_AXIS = 0.35;   // mm: tolleranza di coassialità

export function isSheet(p) { return PART_TYPES[p.type] && PART_TYPES[p.type].isSheet; }

// ------------------------------------------------------------------ ricerca fori
/** Dal punto colpito su un pezzo, trova il foro più vicino. Ritorna {axis, side} oppure null */
export function pickHole(p, point, normal) {
  let best = null, bestD = Infinity;
  for (const ax of holeAxes(p)) {
    const rel = point.clone().sub(ax.a);
    const t = rel.dot(ax.dir);
    if (t < -1.5 || t > ax.depth + 1.5) continue;
    const radial = rel.clone().addScaledVector(ax.dir, -t).length();
    const lim = ax.d / 2 + Math.max(3, ax.d * 0.6);
    if (radial < lim && radial < bestD) {
      bestD = radial;
      let side;
      if (normal && Math.abs(normal.dot(ax.dir)) > 0.5) side = normal.dot(ax.dir) > 0 ? 'b' : 'a';
      else side = t > ax.depth / 2 ? 'b' : 'a';
      best = { axis: ax, side };
    }
  }
  return best;
}

export function findAxis(p, holeId) {
  return holeAxes(p).find((a) => a.hole.id === holeId) || null;
}

// ------------------------------------------------------------------ trasformazioni
function applyRotTrans(p, R, pivotWorld, targetWorld) {
  // ruota il pezzo con R attorno all'origine del mondo e lo trasla in modo che pivot vada su target
  const q = new THREE.Quaternion(...p.quat);
  const nq = R.clone().multiply(q);
  const pos = v3(p.pos);
  const pv = pivotWorld.clone().sub(pos).applyQuaternion(R);   // pivot relativo dopo la rotazione
  const npos = targetWorld.clone().sub(pv);
  p.quat = nq.toArray();
  p.pos = npos.toArray().map((x) => Math.round(x * 1000) / 1000);
}

/** Accoppia un foro del pezzo mobile su un foro del pezzo fisso: assi coincidenti e facce a contatto.
 * Poi ruota attorno all'asse per far combaciare più fori possibile. Ritorna il numero di fori allineati. */
export function mateHoles(fixedPart, fixedSel, movePart, moveSel, others = null) {
  const A = fixedSel.axis, B = moveSel.axis;
  const pA = fixedSel.side === 'b' ? A.b.clone() : A.a.clone();
  const nA = fixedSel.side === 'b' ? A.dir.clone() : A.dir.clone().negate();
  const pB = moveSel.side === 'b' ? B.b.clone() : B.a.clone();
  const nB = moveSel.side === 'b' ? B.dir.clone() : B.dir.clone().negate();
  const R1 = new THREE.Quaternion().setFromUnitVectors(nB, nA.clone().negate());
  applyRotTrans(movePart, R1, pB, pA);
  // rotazione attorno all'asse per allineare altri fori
  const best = bestTwist(others && others.length ? others : [fixedPart], movePart, pA, nA, moveSel.axis.hole.id);
  if (best.angle) {
    const R2 = new THREE.Quaternion().setFromAxisAngle(nA, best.angle);
    applyRotTrans(movePart, R2, pA, pA);
  } else if (best.matches === 0) {
    // nessun altro foro: allinea almeno i bordi (rotazione a multipli di 90° più vicina)
    const snap = edgeSnapAngle(fixedPart, movePart, nA);
    if (snap) applyRotTrans(movePart, new THREE.Quaternion().setFromAxisAngle(nA, snap), pA, pA);
  }
  return 1 + best.matches;
}

function bestTwist(fixedParts, movePart, pivot, axisN, skipHoleId) {
  const fa = fixedParts.flatMap((fp) => holeAxes(fp)), ma = holeAxes(movePart).filter((a) => a.hole.id !== skipHoleId);
  const radialOf = (pt) => { const r = pt.clone().sub(pivot); return r.addScaledVector(axisN, -r.dot(axisN)); };
  const cands = new Set([0]);
  for (const m of ma) {
    if (Math.abs(m.dir.dot(axisN)) < 0.999) continue;
    const rm = radialOf(m.a);
    if (rm.length() < 0.5) continue;
    for (const f of fa) {
      if (Math.abs(f.dir.dot(axisN)) < 0.999) continue;
      const rf = radialOf(f.a);
      if (Math.abs(rf.length() - rm.length()) > 0.5) continue;
      let ang = Math.atan2(rm.clone().cross(rf).dot(axisN), rm.dot(rf));
      cands.add(Math.round(ang * 1e6) / 1e6);
    }
  }
  let best = { angle: 0, matches: 0 };
  for (const ang of cands) {
    const R = new THREE.Quaternion().setFromAxisAngle(axisN, ang);
    let n = 0;
    for (const m of ma) {
      const pm = m.a.clone().sub(pivot).applyQuaternion(R).add(pivot);
      const dm = m.dir.clone().applyQuaternion(R);
      if (fa.some((f) => Math.abs(f.dir.dot(dm)) > 0.999 && lineDist(f.a, f.dir, pm) < 0.5)) n++;
    }
    if (n > best.matches || (n === best.matches && Math.abs(ang) < Math.abs(best.angle))) best = { angle: ang, matches: n };
  }
  return best;
}

function edgeSnapAngle(fixedPart, movePart, axisN) {
  const qa = new THREE.Quaternion(...fixedPart.quat), qb = new THREE.Quaternion(...movePart.quat);
  const ex = new THREE.Vector3(1, 0, 0).applyQuaternion(qa), ey = new THREE.Vector3(0, 1, 0).applyQuaternion(qa), ez = new THREE.Vector3(0, 0, 1).applyQuaternion(qa);
  const ref = [ex, ey, ez].map((e) => e.clone().addScaledVector(axisN, -e.dot(axisN))).filter((e) => e.length() > 0.5)[0];
  if (!ref) return 0;
  const bx = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)].map((e) => e.applyQuaternion(qb))
    .map((e) => e.clone().addScaledVector(axisN, -e.dot(axisN))).filter((e) => e.length() > 0.5)[0];
  if (!bx) return 0;
  ref.normalize(); bx.normalize();
  const ang = Math.atan2(bx.clone().cross(ref).dot(axisN), bx.dot(ref));
  const snapped = Math.round(ang / (Math.PI / 2)) * (Math.PI / 2);
  return Math.abs(ang - snapped) < 1e-4 ? 0 : (ang - snapped);
}

/** Faccia su faccia: il pezzo mobile si appoggia al piano del pezzo fisso (resta dov'è nel piano) */
export function mateFaces(fixedPoint, fixedNormal, movePart, movePoint, moveNormal) {
  const R1 = new THREE.Quaternion().setFromUnitVectors(moveNormal.clone().normalize(), fixedNormal.clone().normalize().negate());
  const pos = v3(movePart.pos);
  const pB1 = movePoint.clone().sub(pos).applyQuaternion(R1).add(pos);
  const shift = fixedNormal.clone().normalize().multiplyScalar(fixedPoint.clone().sub(pB1).dot(fixedNormal.clone().normalize()));
  applyRotTrans(movePart, R1, movePoint, pB1.clone().add(shift));
}

const lineDist = (o, d, p) => { const r = p.clone().sub(o); return r.addScaledVector(d, -r.dot(d)).length(); };

// ------------------------------------------------------------------ pacchi di fori
/** Trova tutti i fori coassiali a quello scelto: ritorna i tratti ordinati lungo l'asse */
export function holeStack(project, sel) {
  const o = sel.axis.a.clone(), dir = sel.axis.dir.clone();
  const all = [];
  for (const p of project.parts) {
    if (!isSheet(p)) continue;
    for (const ax of holeAxes(p)) {
      if (Math.abs(ax.dir.dot(dir)) < 0.999) continue;
      if (lineDist(o, dir, ax.a) > EPS_AXIS) continue;
      const t1 = ax.a.clone().sub(o).dot(dir), t2 = ax.b.clone().sub(o).dot(dir);
      all.push({ part: p, axis: ax, t0: Math.min(t1, t2), t1: Math.max(t1, t2) });
    }
  }
  all.sort((a, b) => a.t0 - b.t0);
  // gruppo contiguo che contiene il foro scelto
  const idx = all.findIndex((x) => x.axis.hole.id === sel.axis.hole.id);
  if (idx < 0) return null;
  let lo = idx, hi = idx;
  const gaps = [];
  while (lo > 0 && all[lo].t0 - all[lo - 1].t1 < 25) { const g = all[lo].t0 - all[lo - 1].t1; if (g > 0.05) gaps.push(g); lo--; }
  while (hi < all.length - 1 && all[hi + 1].t0 - all[hi].t1 < 25) { const g = all[hi + 1].t0 - all[hi].t1; if (g > 0.05) gaps.push(g); hi++; }
  const segs = all.slice(lo, hi + 1);
  return { o, dir, segs, tmin: segs[0].t0, tmax: segs[segs.length - 1].t1, gaps };
}

/** Crea vite + rondelle + dado (o perno) attraverso il pacco di fori. Ritorna {stack, parts, warnings} */
export function makeFastener(project, sel, kind = 'bolt', opts = {}) {
  const st = holeStack(project, sel);
  if (!st) return { error: 'Foro non trovato.' };
  const warnings = [];
  const dmin = Math.min(...st.segs.map((s) => s.axis.d));
  const grip = st.tmax - st.tmin;
  // lato della testa: dove l'utente ha toccato
  const headAtMax = sel.side === 'b' ? sel.axis.dir.dot(st.dir) > 0 : sel.axis.dir.dot(st.dir) < 0;
  const headT = headAtMax ? st.tmax : st.tmin, tailT = headAtMax ? st.tmin : st.tmax;
  const u = headAtMax ? st.dir.clone().negate() : st.dir.clone();     // direzione di infilata
  const P = (t) => st.o.clone().addScaledVector(st.dir, t);
  const made = [];
  const stackId = uid('s');
  const qFrom = (from, to) => new THREE.Quaternion().setFromUnitVectors(from, to).toArray();
  if (st.gaps.length) warnings.push(`Tra le lastre c'è uno spazio di ${fmt(Math.max(...st.gaps))} mm: stringendo si deformano.`);

  if (kind === 'pin') {
    const d = PIN_DIAMETERS.filter((x) => x <= dmin + 0.05).pop();
    if (!d) return { error: `Foro Ø ${fmt(dmin)} troppo piccolo per un perno.` };
    const L = stdLength(grip, PIN_LENGTHS);
    const pin = newPart(project, 'pin', { d, L }, { name: `Perno Ø${d}×${L}` });
    const start = st.tmin - (L - grip) / 2;
    pin.pos = P(start).toArray(); pin.quat = qFrom(new THREE.Vector3(0, 0, 1), st.dir);
    pin.stack = stackId; made.push(pin);
    if (Math.abs(dmin - d) > 0.05) warnings.push(`Foro Ø ${fmt(dmin)} per perno Ø ${d}: per un accoppiamento preciso il foro va alesato Ø ${d} H7.`);
    const stack = { id: stackId, kind: 'pin', size: `Ø${d}`, L, members: made.map((m) => m.id), plates: [...new Set(st.segs.map((s) => s.part.id))],
      ref: { part: sel.axis.part.id, hole: sel.axis.hole.id, side: sel.side }, grip, warnings };
    return { stack, parts: made, warnings };
  }

  // vite: filettata nell'ultimo pezzo?
  const tailSeg = headAtMax ? st.segs[0] : st.segs[st.segs.length - 1];
  const threaded = tailSeg.axis.hole.kind === 'thread' && st.segs.length > 1;
  let size = opts.size || (threaded ? tailSeg.axis.hole.thread : null);
  const clearSegs = threaded ? st.segs.filter((s) => s !== tailSeg) : st.segs;
  const dClear = Math.min(...clearSegs.map((s) => s.axis.d));
  if (!size) size = boltForHole(dClear);
  if (!size) return { error: `Il foro Ø ${fmt(dClear)} è troppo piccolo per qualsiasi vite (minimo M3: Ø 3,2).` };
  const b = BOLTS[size];
  for (const s of clearSegs) {
    const fit = holeFit(s.axis.d, size);
    if (fit === 'stretto') warnings.push(`${s.part.name}: foro Ø ${fmt(s.axis.d)} troppo stretto per ${size} (serve almeno Ø ${fmt(b.clear[0])}).`);
    if (fit === 'largo') warnings.push(`${s.part.name}: foro Ø ${fmt(s.axis.d)} molto largo per ${size} (consigliato Ø ${fmt(b.clear[1])}).`);
  }
  const wh = b.w[2];
  let L, need;
  if (threaded) {
    const tThread = tailSeg.t1 - tailSeg.t0;
    const gripClear = grip - tThread;
    const engage = Math.min(tThread, ['alu', 'pom', 'legno', 'ottone'].includes(tailSeg.part.material) ? 1.5 * b.d : 1.0 * b.d);
    need = gripClear + wh + engage;
    L = stdLength(need);
    if (L > gripClear + wh + tThread + 0.01 && tailSeg.axis.hole.blind) warnings.push(`La vite ${size}×${L} tocca il fondo del foro cieco.`);
    if (engage < 0.8 * b.d) warnings.push(`Filetto corto in ${tailSeg.part.name}: avvitati solo ${fmt(engage)} mm (consigliati ${fmt(b.d)} mm).`);
  } else {
    need = grip + 2 * wh + b.m + 2 * b.p;
    L = stdLength(need);
  }
  if (opts.L) L = opts.L;
  const qOut = (dirOut) => qFrom(new THREE.Vector3(0, 0, 1), dirOut);
  const out = u.clone().negate();
  const faceHead = P(headT);
  const w1 = newPart(project, 'washer', { size }, { name: `Rondella ${size}` });
  w1.pos = faceHead.toArray(); w1.quat = qOut(out); w1.stack = stackId; made.push(w1);
  const bolt = newPart(project, 'bolt', { size, L }, { name: `Vite ${size}×${L}` });
  bolt.pos = faceHead.clone().addScaledVector(out, wh).toArray(); bolt.quat = qOut(out); bolt.stack = stackId; made.push(bolt);
  if (!threaded) {
    const faceTail = P(tailT);
    const w2 = newPart(project, 'washer', { size }, { name: `Rondella ${size}` });
    w2.pos = faceTail.toArray(); w2.quat = qOut(u); w2.stack = stackId; made.push(w2);
    const nut = newPart(project, 'nut', { size }, { name: `Dado ${size}` });
    nut.pos = faceTail.clone().addScaledVector(u, wh).toArray(); nut.quat = qOut(u); nut.stack = stackId; made.push(nut);
    const protr = L - (grip + 2 * wh + b.m);
    if (protr < b.p) warnings.push(`Vite ${size}×${L} troppo corta: sporge ${fmt(protr)} mm dal dado (servono almeno ${fmt(2 * b.p)} mm).`);
  }
  const stack = { id: stackId, kind: 'bolt', size, L, threaded, members: made.map((m) => m.id), plates: [...new Set(st.segs.map((s) => s.part.id))],
    ref: { part: sel.axis.part.id, hole: sel.axis.hole.id, side: sel.side }, grip, torque: b.torque, warnings };
  return { stack, parts: made, warnings };
}

/** Ricostruisce un pacco dopo che le lastre sono state spostate o modificate */
export function rebuildStack(project, stack) {
  project.parts = project.parts.filter((p) => p.stack !== stack.id);
  const pp = project.parts.find((p) => p.id === stack.ref.part);
  const ax = pp && findAxis(pp, stack.ref.hole);
  const i = project.stacks.indexOf(stack);
  if (!ax) { project.stacks.splice(i, 1); return null; }
  const res = makeFastener(project, { axis: ax, side: stack.ref.side }, stack.kind, stack.kind === 'bolt' && stack.manualL ? { L: stack.L, size: stack.size } : {});
  if (res.error) { project.stacks.splice(i, 1); return null; }
  res.stack.id = stack.id;
  res.stack.manualL = stack.manualL;
  for (const p of res.parts) p.stack = stack.id;
  res.stack.members = res.parts.map((p) => p.id);
  project.stacks[i] = res.stack;
  project.parts.push(...res.parts);
  return res.stack;
}
export function rebuildAllStacks(project) {
  for (const s of [...project.stacks]) rebuildStack(project, s);
}

// ------------------------------------------------------------------ controlli
export function runChecks(project) {
  const out = [];
  const sheets = project.parts.filter(isSheet);
  // fori: dentro il pezzo, distanza dal bordo, sovrapposti
  for (const p of sheets) {
    for (const h of p.holes) {
      if (!holeInside(p, h)) out.push({ level: 'err', text: `${p.name}: il foro Ø ${fmt(h.d)} in (${fmt(h.x)}; ${fmt(h.y)}) esce dal pezzo o tocca il bordo.`, parts: [p.id] });
      else {
        const e = edgeDistance(p, h);
        if (e !== null && h.d <= 30 && e < 1.2 * h.d - 0.01) out.push({ level: 'warn', text: `${p.name}: foro Ø ${fmt(h.d)} vicino al bordo (${fmt(e)} mm dal centro, per una vite ne servono almeno ${fmt(1.2 * h.d)}).`, parts: [p.id] });
        else if (e !== null && h.d > 30 && e - h.d / 2 < Math.max(2, thicknessOfSheet(p)) - 0.01) out.push({ level: 'warn', text: `${p.name}: tra il foro Ø ${fmt(h.d)} e il bordo restano solo ${fmt(e - h.d / 2)} mm di materiale.`, parts: [p.id] });
      }
    }
    for (let i = 0; i < p.holes.length; i++) for (let j = i + 1; j < p.holes.length; j++) {
      const a = p.holes[i], b = p.holes[j];
      if ((a.face || 'A') !== (b.face || 'A')) continue;
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < (a.d + b.d) / 2 + 1) out.push({ level: 'err', text: `${p.name}: due fori si sovrappongono o sono troppo vicini (interasse ${fmt(dist)} mm).`, parts: [p.id] });
    }
  }
  // fori quasi allineati ma non coassiali
  const axes = sheets.flatMap((p) => holeAxes(p));
  for (let i = 0; i < axes.length; i++) for (let j = i + 1; j < axes.length; j++) {
    const A = axes[i], B = axes[j];
    if (A.part.id === B.part.id || Math.abs(A.dir.dot(B.dir)) < 0.999) continue;
    const dl = lineDist(A.a, A.dir, B.a);
    if (dl > EPS_AXIS && dl < Math.min(A.d, B.d) * 0.6) {
      // solo se le lastre sono a contatto lungo l'asse
      const tA = [A.a, A.b].map((x) => x.clone().sub(A.a).dot(A.dir)), tB = [B.a, B.b].map((x) => x.clone().sub(A.a).dot(A.dir));
      const gap = Math.max(Math.min(...tB) - Math.max(...tA), Math.min(...tA) - Math.max(...tB));
      if (gap < 1) out.push({ level: 'warn', text: `Fori di ${A.part.name} e ${B.part.name} disallineati di ${fmt(dl, 2)} mm.`, parts: [A.part.id, B.part.id] });
    }
  }
  // pacchi di bulloneria
  for (const s of project.stacks) for (const w of s.warnings || []) out.push({ level: 'warn', text: w, parts: s.members });
  // compenetrazioni tra pezzi pieni
  const solids = project.parts.filter((p) => isSheet(p) || p.type === 'tube');
  for (let i = 0; i < solids.length; i++) for (let j = i + 1; j < solids.length; j++) {
    const depth = obbOverlap(solids[i], solids[j]);
    if (depth > 0.2) out.push({ level: 'err', text: `${solids[i].name} e ${solids[j].name} si compenetrano (${fmt(depth)} mm).`, parts: [solids[i].id, solids[j].id] });
  }
  return out;
}

const thicknessOfSheet = (p) => p.params.t || 0;
function edgeDistance(p, h) {
  const q = p.params;
  if (p.type === 'plate') return Math.min(h.x, h.y, q.w - h.x, q.h - h.y);
  if (p.type === 'disc') return q.d / 2 - Math.hypot(h.x, h.y);
  if (p.type === 'angle') return (h.face || 'A') === 'A' ? Math.min(h.x - q.t, q.a - h.x, h.y, q.L - h.y) : Math.min(h.x, q.L - h.x, h.y - q.t, q.b - h.y);
  return null;
}

/** Profondità di sovrapposizione fra due box orientati (0 se non si toccano). Per gli angolari usa le due ali. */
function obbOverlap(a, b) {
  let worst = 0;
  for (const ba of boxesOf(a)) for (const bb of boxesOf(b)) worst = Math.max(worst, satDepth(ba, bb));
  return worst;
}
function boxesOf(p) {
  const m = partMatrix(p);
  const q = p.params;
  let locals;
  if (p.type === 'angle') locals = [new THREE.Box3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(q.a, q.L, q.t)), new THREE.Box3(new THREE.Vector3(0, 0, q.t), new THREE.Vector3(q.t, q.L, q.b))];
  else locals = [localBox(p)];
  return locals.map((bx) => {
    const c = bx.getCenter(new THREE.Vector3()).applyMatrix4(m);
    const h = bx.getSize(new THREE.Vector3()).multiplyScalar(0.5);
    const rot = new THREE.Matrix4().extractRotation(m);
    const axes = [0, 1, 2].map((k) => new THREE.Vector3().setFromMatrixColumn(rot, k).normalize());
    return { c, h: [h.x, h.y, h.z], axes, round: p.type === 'disc' || p.type === 'tube' };
  });
}
function satDepth(A, B) {
  const axes = [...A.axes, ...B.axes];
  for (const a of A.axes) for (const b of B.axes) { const c = a.clone().cross(b); if (c.lengthSq() > 1e-6) axes.push(c.normalize()); }
  const d = B.c.clone().sub(A.c);
  let minOv = Infinity;
  for (const ax of axes) {
    const ra = A.axes.reduce((s, e, i) => s + Math.abs(e.dot(ax)) * A.h[i], 0);
    const rb = B.axes.reduce((s, e, i) => s + Math.abs(e.dot(ax)) * B.h[i], 0);
    const ov = ra + rb - Math.abs(d.dot(ax));
    if (ov <= 0) return 0;
    minOv = Math.min(minOv, ov);
  }
  // i pezzi tondi sono approssimati dal box: riduco i falsi allarmi
  if (A.round || B.round) minOv -= 0.15 * Math.min(...A.h, ...B.h);
  return Math.max(0, minOv);
}

export { faces };
