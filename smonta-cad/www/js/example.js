// Progetto di esempio "Supporto motore", costruito con gli stessi comandi dell'app.
import * as THREE from 'three';
import { newProject, newPart, addHole, patternCircle, holeAxes } from './model.js';
import { mateHoles, makeFastener, holeStack, isSheet } from './mates.js';
import { worldBox } from './geom.js';

const ax = (p, i) => holeAxes(p)[i];

/** Lato del foro rivolto lontano dal punto c */
function sideAway(axis, c) { return c.clone().sub(axis.a).dot(axis.dir) > 0 ? 'a' : 'b'; }

export function buildExample() {
  const pr = newProject('Supporto motore (esempio)');
  // 1. piastra di base con 4 fori di ancoraggio M10 e 2 fori per le squadrette
  const base = newPart(pr, 'plate', { w: 240, h: 160, t: 10, r: 8 }, { name: 'Piastra base' });
  for (const [x, y] of [[20, 20], [220, 20], [20, 140], [220, 140]]) addHole(base, x, y, 11);
  addHole(base, 70, 40, 9); addHole(base, 70, 120, 9);
  pr.parts.push(base);

  // 2. due squadrette a L, ognuna con un foro per ala
  const mkAngle = (name, baseHole) => {
    const a = newPart(pr, 'angle', { a: 50, b: 50, t: 5, L: 40 }, { name });
    addHole(a, 32, 20, 9, 'A'); addHole(a, 20, 32, 9, 'B');
    a.pos = [300, 0, 0];
    pr.parts.push(a);
    mateHoles(base, { axis: ax(base, baseHole), side: 'b' }, a, { axis: ax(a, 0), side: 'a' }, [base]);
    return a;
  };
  const a1 = mkAngle('Squadretta sinistra', 4);
  const a2 = mkAngle('Squadretta destra', 5);
  // le squadrette devono avere l'ala verticale dallo stesso lato: se la seconda è girata la allineo alla prima
  a2.quat = [...a1.quat];
  const d = new THREE.Vector3(...ax(base, 5).b.toArray()).sub(ax(base, 4).b);
  a2.pos = new THREE.Vector3(...a1.pos).add(d).toArray();

  // 3. piastra verticale avvitata alle ali delle squadrette, con foro per l'albero e 4 fori per la flangia
  const up = newPart(pr, 'plate', { w: 160, h: 150, t: 8, r: 4 }, { name: 'Piastra verticale' });
  addHole(up, 40, 32, 9); addHole(up, 120, 32, 9);
  addHole(up, 80, 92, 52);
  patternCircle(up, { n: 4, pcd: 90, start: 45, cx: 80, cy: 92, d: 9 });
  up.pos = [0, 300, 0];
  pr.parts.push(up);
  const a1B = ax(a1, 1);
  const a1Center = worldBox(a1).getCenter(new THREE.Vector3());
  const outSide = sideAway(a1B, a1Center);
  // prova le due facce della piastra: tengo quella che non entra nella base e allinea i due fori
  const tryMate = (side) => { mateHoles(a1, { axis: ax(a1, 1), side: outSide }, up, { axis: ax(up, 0), side }, [a1, a2]); };
  tryMate('a');
  if (worldBox(up).min.z < 9.9 || !aligned(pr, up, 1)) { tryMate('b'); }
  if (worldBox(up).min.z < 9.9 || !aligned(pr, up, 1)) { tryMate('a'); mateHoles(a1, { axis: ax(a1, 1), side: outSide }, up, { axis: ax(up, 1), side: 'a' }, [a1, a2]); }

  // 4. flangia del motore sul lato esterno della piastra verticale
  const fl = newPart(pr, 'disc', { d: 120, din: 50, t: 10 }, { name: 'Flangia motore' });
  patternCircle(fl, { n: 4, pcd: 90, start: 45, d: 9 });
  fl.pos = [0, -300, 0];
  pr.parts.push(fl);
  const upHole = ax(up, 3);
  const flSide = sideAway(upHole, a1Center);
  mateHoles(up, { axis: upHole, side: flSide }, fl, { axis: ax(fl, 0), side: 'a' }, [up]);

  // 5. bulloneria in tutti i fori allineati
  const done = new Set();
  for (const q of pr.parts.filter(isSheet)) for (const h of holeAxes(q)) {
    if (done.has(h.hole.id)) continue;
    const st = holeStack(pr, { axis: h, side: 'b' });
    if (!st) continue;
    st.segs.forEach((g) => done.add(g.axis.hole.id));
    if (new Set(st.segs.map((g) => g.part.id)).size < 2) continue;
    const top = st.dir.z >= 0 ? st.segs[st.segs.length - 1] : st.segs[0];
    const side = Math.abs(st.dir.z) > 0.5 ? (top.axis.dir.dot(st.dir) * (st.dir.z >= 0 ? 1 : -1) > 0 ? 'b' : 'a') : 'b';
    const res = makeFastener(pr, { axis: top.axis, side }, 'bolt');
    if (res.error) continue;
    pr.parts.push(...res.parts); pr.stacks.push(res.stack);
  }
  return pr;
}

function aligned(pr, part, holeIdx) {
  const h = holeAxes(part)[holeIdx];
  const st = holeStack(pr, { axis: h, side: 'a' });
  return st && new Set(st.segs.map((s) => s.part.id)).size > 1;
}
