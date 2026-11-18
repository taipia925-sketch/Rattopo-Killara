// File: salvataggio, apertura, esportazioni (funziona nel browser e nell'app Android).
import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

const bridge = () => (typeof window !== 'undefined' && window.SmontaAndroid) ? window.SmontaAndroid : null;

function toBase64(bytes) {
  let s = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) s += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  return btoa(s);
}

/** Salva un file: nell'app Android va nella cartella Download/SmontaStudio, nel browser viene scaricato */
export async function saveFile(name, data, mime = 'application/octet-stream') {
  let bytes;
  if (typeof data === 'string') bytes = new TextEncoder().encode(data);
  else if (data instanceof Blob) bytes = new Uint8Array(await data.arrayBuffer());
  else if (data instanceof ArrayBuffer) bytes = new Uint8Array(data);
  else if (ArrayBuffer.isView(data)) bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  else bytes = new TextEncoder().encode(JSON.stringify(data));
  const b = bridge();
  if (b && b.saveFile) {
    const where = b.saveFile(name, toBase64(bytes), mime);
    return { ok: !!where && !String(where).startsWith('ERR'), where: String(where || '') };
  }
  const blob = new Blob([bytes], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 2000);
  return { ok: true, where: 'Download' };
}

/** Condivide un file (Android: menu Condividi) */
export async function shareFile(name, data, mime) {
  const b = bridge();
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : new Uint8Array(data);
  if (b && b.shareFile) { b.shareFile(name, toBase64(bytes), mime); return true; }
  if (navigator.canShare) {
    const f = new File([bytes], name, { type: mime });
    if (navigator.canShare({ files: [f] })) { try { await navigator.share({ files: [f], title: name }); return true; } catch { return false; } }
  }
  return (await saveFile(name, bytes, mime)).ok;
}

/** Chiede un file all'utente. Ritorna File oppure null */
export function openFile(accept = '*/*') {
  return new Promise((resolve) => {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = accept; inp.style.display = 'none';
    document.body.appendChild(inp);
    let done = false;
    inp.addEventListener('change', () => { done = true; resolve(inp.files && inp.files[0] ? inp.files[0] : null); inp.remove(); });
    window.addEventListener('focus', () => setTimeout(() => { if (!done) { resolve(null); inp.remove(); } }, 1500), { once: true });
    inp.click();
  });
}

export function exportSTL(root) {
  const ex = new STLExporter();
  const clone = root.clone(true);
  clone.traverse((o) => { if (o.isLineSegments) o.visible = false; });
  // three usa Z in alto come noi: le unità sono già millimetri
  return ex.parse(clone, { binary: true });
}

export function exportGLB(root) {
  return new Promise((resolve, reject) => {
    const ex = new GLTFExporter();
    const clone = root.clone(true);
    const lines = [];
    clone.traverse((o) => { if (o.isLineSegments) lines.push(o); });
    for (const l of lines) if (l.parent) l.parent.remove(l);
    // GLB usa Y in alto e metri
    const wrap = new THREE.Group(); wrap.add(clone); wrap.rotation.x = -Math.PI / 2; wrap.scale.setScalar(0.001);
    ex.parse(wrap, (r) => resolve(r), (e) => reject(e), { binary: true });
  });
}

export const safeName = (s) => String(s || 'progetto').replace(/[^\w\-àèéìòù ]+/gi, '_').trim().replace(/\s+/g, '_') || 'progetto';
