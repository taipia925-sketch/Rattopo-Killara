// Sequenza di montaggio/smontaggio, vista esplosa e distinta materiali.
import * as THREE from 'three';
import { BOLTS, fmt, MATERIALS } from './iso.js';
import { mass, signature, bomDescription, uid } from './model.js';
import { isSheet } from './mates.js';
import { worldBox } from './geom.js';

const isMain = (p) => !p.stack;

/** Genera i passi di montaggio dal progetto (ordine di inserimento dei pezzi) */
export function autoSteps(project) {
  const mains = project.parts.filter(isMain);
  const steps = [];
  const placed = new Set();
  const stackDone = new Set();
  mains.forEach((p, i) => {
    placed.add(p.id);
    const st = { id: uid('st'), parts: [p.id], title: '', text: '', tools: [], warn: '', auto: true };
    // a cosa si appoggia: lastre già posate che condividono un pacco di fori
    const partners = new Set();
    for (const s of project.stacks) if (s.plates.includes(p.id)) for (const q of s.plates) if (q !== p.id && placed.has(q)) partners.add(q);
    const pname = (id) => (project.parts.find((x) => x.id === id) || {}).name;
    if (i === 0) {
      st.title = `Prepara ${p.name}`;
      st.text = `Appoggia ${p.name} sul banco: è la base dell'assieme. Controlla che sia pulita e sbavata.`;
    } else if (partners.size) {
      st.title = `Monta ${p.name}`;
      st.text = `Appoggia ${p.name} su ${[...partners].map(pname).join(' e ')} facendo coincidere i fori.`;
    } else {
      st.title = `Posiziona ${p.name}`;
      st.text = `Porta ${p.name} nella posizione mostrata.`;
    }
    // bulloneria che si può montare ora
    const ready = project.stacks.filter((s) => !stackDone.has(s.id) && s.plates.every((q) => placed.has(q)));
    const groups = new Map();
    for (const s of ready) {
      stackDone.add(s.id);
      st.parts.push(...s.members);
      const k = `${s.kind}|${s.size}|${s.L}|${s.threaded ? 1 : 0}`;
      groups.set(k, (groups.get(k) || { s, n: 0 }));
      groups.get(k).n++;
    }
    for (const { s, n } of groups.values()) {
      if (s.kind === 'pin') {
        st.text += ` Inserisci ${n} perno${n > 1 ? 'i' : ''} ${s.size}×${s.L} (accoppiamento stretto: aiutati con un martello in gomma).`;
        st.tools.push('Martello in gomma');
      } else {
        const b = BOLTS[s.size];
        st.text += s.threaded
          ? ` Avvita ${n} vit${n > 1 ? 'i' : 'e'} ${s.size}×${s.L} con rondella nei fori filettati e serra a ${fmt(b.torque)} Nm.`
          : ` Inserisci ${n} vit${n > 1 ? 'i' : 'e'} ${s.size}×${s.L} con una rondella sotto la testa e una sotto il dado; serra a ${fmt(b.torque)} Nm.`;
        st.tools.push(`Chiave ${b.s} mm`, s.threaded ? null : `Chiave ${b.s} mm (contro-dado)`, 'Chiave dinamometrica');
      }
    }
    st.tools = [...new Set(st.tools.filter(Boolean))];
    const m = mass(p);
    if (m > 15) st.warn = `${p.name} pesa ${fmt(m, 1)} kg: sollevalo in due o con un paranco.`;
    else if (p.params && p.params.t >= 10 && m > 5) st.warn = `${p.name} pesa ${fmt(m, 1)} kg: attenzione alle mani.`;
    steps.push(st);
  });
  // bulloneria rimasta (lastre non nella lista principale)
  const rest = project.stacks.filter((s) => !stackDone.has(s.id));
  if (rest.length) steps.push({ id: uid('st'), parts: rest.flatMap((s) => s.members), title: 'Bulloneria finale', text: 'Monta la bulloneria rimanente e serra alla coppia indicata.', tools: ['Chiave dinamometrica'], warn: '', auto: true });
  return steps;
}

/** Passi validi: usa quelli salvati se coprono ancora tutti i pezzi, altrimenti rigenera */
export function currentSteps(project) {
  const ids = new Set(project.parts.map((p) => p.id));
  if (project.steps && project.steps.length) {
    const covered = new Set(project.steps.flatMap((s) => s.parts));
    const stale = project.steps.some((s) => s.parts.some((id) => !ids.has(id)));
    if (!stale && project.parts.every((p) => covered.has(p.id))) return project.steps;
    // conserva i testi scritti a mano per i passi con lo stesso pezzo principale
    const fresh = autoSteps(project);
    for (const f of fresh) {
      const old = project.steps.find((s) => s.parts[0] === f.parts[0] && !s.auto);
      if (old) { f.title = old.title; f.text = old.text; f.warn = old.warn; f.tools = old.tools; f.video = old.video; f.auto = false; }
    }
    return fresh;
  }
  return autoSteps(project);
}

// ------------------------------------------------------------------ esploso
/** Spostamenti dell'esploso: Map partId -> Vector3 (per fattore 1) */
export function explodeVectors(project, steps) {
  const box = new THREE.Box3();
  const mains = project.parts.filter(isMain);
  for (const p of mains) box.union(worldBox(p));
  const center = box.isEmpty() ? new THREE.Vector3() : box.getCenter(new THREE.Vector3());
  const size = box.isEmpty() ? 200 : box.getSize(new THREE.Vector3()).length();
  const out = new Map();
  const order = new Map(); (steps || []).forEach((s, i) => s.parts.forEach((id) => order.set(id, i)));
  // pezzi principali: lungo l'asse dei fori che li collegano al pezzo precedente, altrimenti dal centro
  for (const p of mains) {
    let dir = null;
    for (const s of project.stacks) {
      if (!s.plates.includes(p.id)) continue;
      const bolt = project.parts.find((x) => x.stack === s.id && (x.type === 'bolt' || x.type === 'pin'));
      if (!bolt) continue;
      const ax = new THREE.Vector3(0, 0, 1).applyQuaternion(new THREE.Quaternion(...bolt.quat));
      const pc = worldBox(p).getCenter(new THREE.Vector3());
      const others = s.plates.filter((q) => q !== p.id).map((q) => project.parts.find((x) => x.id === q)).filter(Boolean);
      if (!others.length) continue;
      const oc = others.reduce((acc, q) => acc.add(worldBox(q).getCenter(new THREE.Vector3())), new THREE.Vector3()).multiplyScalar(1 / others.length);
      const sgn = Math.sign(pc.clone().sub(oc).dot(ax)) || 1;
      dir = ax.multiplyScalar(sgn);
      break;
    }
    if (!dir) { dir = worldBox(p).getCenter(new THREE.Vector3()).sub(center); if (dir.length() < 1) dir.set(0, 0, 1); dir.normalize(); }
    const k = (order.get(p.id) || 0);
    out.set(p.id, dir.multiplyScalar(size * 0.35 * (k === 0 ? 0 : 1)));
  }
  // bulloneria: lungo il proprio asse, verso l'esterno
  for (const p of project.parts.filter((x) => x.stack)) {
    const ax = new THREE.Vector3(0, 0, 1).applyQuaternion(new THREE.Quaternion(...p.quat));
    const base = (() => { const s = project.stacks.find((x) => x.id === p.stack); const pl = s && project.parts.find((x) => x.id === s.plates[s.plates.length - 1]); return pl ? out.get(pl.id) : null; })();
    const dist = p.type === 'washer' ? size * 0.18 : size * 0.3;
    const v = ax.multiplyScalar(dist);
    out.set(p.id, base ? v.add(base.clone()) : v);
  }
  return out;
}

// ------------------------------------------------------------------ distinta
export function bom(project) {
  const rows = new Map();
  let pos = 1;
  for (const p of project.parts) {
    const sig = signature(p);
    if (!rows.has(sig)) rows.set(sig, { pos: 0, desc: bomDescription(p), material: (MATERIALS[p.material] || MATERIALS.s235).name, qty: 0, unit: mass(p), names: [], ids: [], fastener: !!p.stack || ['bolt', 'nut', 'washer', 'pin'].includes(p.type), type: p.type });
    const r = rows.get(sig); r.qty++; r.names.push(p.name); r.ids.push(p.id);
  }
  const list = [...rows.values()].sort((a, b) => (a.fastener - b.fastener) || (b.unit - a.unit));
  for (const r of list) { r.pos = pos++; r.total = r.unit * r.qty; }
  const totalMass = list.reduce((s, r) => s + r.total, 0);
  return { rows: list, totalMass, count: project.parts.length };
}

export function bomCSV(project) {
  const { rows, totalMass } = bom(project);
  const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const lines = [['Pos.', 'Q.tà', 'Descrizione', 'Materiale', 'Massa unitaria kg', 'Massa totale kg', 'Pezzi'].map(q).join(';')];
  for (const r of rows) lines.push([r.pos, r.qty, r.desc, r.material, fmt(r.unit, 3), fmt(r.total, 3), r.names.join(', ')].map(q).join(';'));
  lines.push(['', '', 'TOTALE', '', '', fmt(totalMass, 3), ''].map(q).join(';'));
  return '﻿' + lines.join('\r\n');
}

export { isSheet };
