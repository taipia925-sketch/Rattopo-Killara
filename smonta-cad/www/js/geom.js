// Costruzione delle mesh 3D dai parametri dei pezzi.
import * as THREE from 'three';
import { BOLTS, MATERIALS } from './iso.js';
import { partMatrix } from './model.js';

const CURVE = 40;
const matCache = new Map();

export function materialFor(p, state = 'normal') {
  const base = (MATERIALS[p.material] || MATERIALS.s235).color;
  const key = `${base}|${state}|${p.type}`;
  if (matCache.has(key)) return matCache.get(key);
  const metal = !['pom', 'legno'].includes(p.material);
  const m = new THREE.MeshStandardMaterial({
    color: new THREE.Color(base),
    metalness: metal ? 0.2 : 0.0,
    roughness: metal ? 0.55 : 0.8,
    polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
  });
  if (state === 'selected') { m.emissive = new THREE.Color('#1f6feb'); m.emissiveIntensity = 0.28; }
  if (state === 'hover') { m.emissive = new THREE.Color('#1f6feb'); m.emissiveIntensity = 0.12; }
  if (state === 'ghost') { m.transparent = true; m.opacity = 0.25; m.depthWrite = false; }
  if (state === 'warn') { m.emissive = new THREE.Color('#d64545'); m.emissiveIntensity = 0.35; }
  matCache.set(key, m);
  return m;
}

const edgeMats = {
  normal: new THREE.LineBasicMaterial({ color: 0x3c4655, transparent: true, opacity: 0.55 }),
  selected: new THREE.LineBasicMaterial({ color: 0x1f6feb }),
  ghost: new THREE.LineBasicMaterial({ color: 0x3c4655, transparent: true, opacity: 0.15 }),
};

function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  r = Math.max(0, Math.min(r || 0, w / 2 - 0.01, h / 2 - 0.01));
  if (r <= 0) { s.moveTo(0, 0); s.lineTo(w, 0); s.lineTo(w, h); s.lineTo(0, h); s.lineTo(0, 0); return s; }
  s.moveTo(r, 0); s.lineTo(w - r, 0); s.absarc(w - r, r, r, -Math.PI / 2, 0, false);
  s.lineTo(w, h - r); s.absarc(w - r, h - r, r, 0, Math.PI / 2, false);
  s.lineTo(r, h); s.absarc(r, h - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(0, r); s.absarc(r, r, r, Math.PI, Math.PI * 1.5, false);
  return s;
}
function circlePath(x, y, r, clockwise = true) {
  const p = new THREE.Path();
  p.absarc(x, y, r, 0, Math.PI * 2, clockwise);
  return p;
}
function extrude(shape, depth) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: CURVE, steps: 1 });
  g.computeVertexNormals();
  return g;
}
function hexPrism(s, h) {
  const g = new THREE.CylinderGeometry(s / Math.sqrt(3), s / Math.sqrt(3), h, 6);
  g.rotateX(Math.PI / 2);
  g.rotateZ(Math.PI / 6);
  return g;
}
function ringLathe(rIn, rOut, h, seg = CURVE) {
  const pts = [new THREE.Vector2(rIn, 0), new THREE.Vector2(rOut, 0), new THREE.Vector2(rOut, h), new THREE.Vector2(rIn, h), new THREE.Vector2(rIn, 0)];
  const g = new THREE.LatheGeometry(pts, seg);
  g.rotateX(Math.PI / 2);
  return g;
}

/** Geometrie (in coordinate locali del pezzo) */
export function partGeometries(p) {
  const q = p.params;
  const list = [];
  switch (p.type) {
    case 'plate': {
      const s = roundedRectShape(q.w, q.h, q.r);
      for (const h of p.holes) s.holes.push(circlePath(h.x, h.y, h.d / 2));
      list.push(extrude(s, q.t));
      break;
    }
    case 'disc': {
      const s = new THREE.Shape(); s.absarc(0, 0, q.d / 2, 0, Math.PI * 2, false);
      if (q.din > 0) s.holes.push(circlePath(0, 0, q.din / 2));
      for (const h of p.holes) s.holes.push(circlePath(h.x, h.y, h.d / 2));
      list.push(extrude(s, q.t));
      break;
    }
    case 'angle': {
      const a = roundedRectShape(q.a, q.L, 0);
      for (const h of p.holes.filter((h) => (h.face || 'A') === 'A')) a.holes.push(circlePath(h.x, h.y, h.d / 2));
      list.push(extrude(a, q.t));
      // ala verticale: forma nel piano (L lungo y, altezza lungo z), da z = t a z = b
      const b = new THREE.Shape();
      b.moveTo(0, q.t); b.lineTo(q.L, q.t); b.lineTo(q.L, q.b); b.lineTo(0, q.b); b.lineTo(0, q.t);
      for (const h of p.holes.filter((h) => h.face === 'B')) b.holes.push(circlePath(h.x, h.y, h.d / 2));
      const gb = extrude(b, q.t);
      gb.applyMatrix4(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0)));
      list.push(gb);
      break;
    }
    case 'tube': {
      if (q.din > 0) list.push(ringLathe(q.din / 2, q.d / 2, q.L, 48));
      else { const g = new THREE.CylinderGeometry(q.d / 2, q.d / 2, q.L, 48); g.rotateX(Math.PI / 2); g.translate(0, 0, q.L / 2); list.push(g); }
      break;
    }
    case 'bolt': {
      const b = BOLTS[q.size];
      const head = hexPrism(b.s, b.k); head.translate(0, 0, b.k / 2); list.push(head);
      const shank = new THREE.CylinderGeometry(b.d / 2, b.d / 2, q.L, 28); shank.rotateX(Math.PI / 2); shank.translate(0, 0, -q.L / 2); list.push(shank);
      break;
    }
    case 'nut': {
      const b = BOLTS[q.size];
      const s = new THREE.Shape();
      for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3, R = b.s / Math.sqrt(3); i ? s.lineTo(Math.cos(a) * R, Math.sin(a) * R) : s.moveTo(Math.cos(a) * R, Math.sin(a) * R); }
      s.closePath(); s.holes.push(circlePath(0, 0, b.d / 2));
      list.push(extrude(s, b.m));
      break;
    }
    case 'washer': {
      const b = BOLTS[q.size];
      list.push(ringLathe(b.w[0] / 2, b.w[1] / 2, b.w[2]));
      break;
    }
    case 'pin': {
      const g = new THREE.CylinderGeometry(q.d / 2, q.d / 2, q.L, 28); g.rotateX(Math.PI / 2); g.translate(0, 0, q.L / 2); list.push(g);
      break;
    }
  }
  return list;
}

/** Crea il gruppo three.js del pezzo */
export function buildPartObject(p, state = 'normal') {
  const grp = new THREE.Group();
  grp.userData.partId = p.id;
  for (const g of partGeometries(p)) {
    const mesh = new THREE.Mesh(g, materialFor(p, state));
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.partId = p.id;
    grp.add(mesh);
    const eg = new THREE.EdgesGeometry(g, 28);
    const lines = new THREE.LineSegments(eg, edgeMats[state === 'selected' ? 'selected' : state === 'ghost' ? 'ghost' : 'normal']);
    lines.userData.partId = p.id; lines.userData.isEdge = true;
    lines.raycast = () => {};
    grp.add(lines);
  }
  applyTransform(grp, p);
  return grp;
}

export function applyTransform(obj, p) {
  obj.position.set(...p.pos);
  obj.quaternion.set(...p.quat);
  obj.updateMatrixWorld(true);
}

export function setObjectState(obj, p, state) {
  for (const c of obj.children) {
    if (c.isMesh) c.material = materialFor(p, state);
    else if (c.isLineSegments) c.material = edgeMats[state === 'selected' ? 'selected' : state === 'ghost' ? 'ghost' : 'normal'];
  }
}

/** Box del pezzo in coordinate del mondo */
export function worldBox(p) {
  const box = new THREE.Box3();
  const m = partMatrix(p);
  for (const g of partGeometries(p)) {
    g.computeBoundingBox();
    box.union(g.boundingBox.clone().applyMatrix4(m));
    g.dispose();
  }
  return box;
}

/** Box locale (non ruotata) del pezzo */
export function localBox(p) {
  const box = new THREE.Box3();
  for (const g of partGeometries(p)) { g.computeBoundingBox(); box.union(g.boundingBox); g.dispose(); }
  return box;
}

/** Anello di evidenziazione per un foro */
export function holeMarker(axis, color = 0x1f6feb) {
  const grp = new THREE.Group();
  const r = axis.d / 2;
  const pts = [];
  for (let i = 0; i <= 48; i++) { const a = i / 48 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0)); }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const mat = new THREE.LineBasicMaterial({ color, depthTest: false, transparent: true });
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis.dir);
  for (const at of [axis.a, axis.b]) {
    const l = new THREE.Line(geo, mat); l.position.copy(at); l.quaternion.copy(q); l.renderOrder = 10; grp.add(l);
  }
  const ax = new THREE.BufferGeometry().setFromPoints([axis.a.clone().addScaledVector(axis.dir, -axis.d * 1.5), axis.b.clone().addScaledVector(axis.dir, axis.d * 1.5)]);
  const al = new THREE.Line(ax, new THREE.LineDashedMaterial({ color, dashSize: 2, gapSize: 1.5, depthTest: false, transparent: true }));
  al.computeLineDistances(); al.renderOrder = 10; grp.add(al);
  return grp;
}
