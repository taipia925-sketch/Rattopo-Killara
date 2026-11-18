// Video collegati ai progetti, salvati nel dispositivo (IndexedDB) perché sono troppo grandi per il resto.
const DB = 'smonta-video', STORE = 'videos';
let dbp = null;
function db() {
  if (!dbp) dbp = new Promise((res, rej) => {
    if (!('indexedDB' in window)) { rej(new Error('archivio non disponibile')); return; }
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error || new Error('archivio non disponibile'));
  });
  return dbp;
}
async function tx(mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const t = d.transaction(STORE, mode); const st = t.objectStore(STORE);
    const r = fn(st);
    t.oncomplete = () => res(r && 'result' in r ? r.result : undefined);
    t.onerror = () => rej(t.error);
  });
}
const urls = new Map();
export async function putVideo(id, blob) { await tx('readwrite', (s) => s.put(blob, id)); if (urls.has(id)) { URL.revokeObjectURL(urls.get(id)); urls.delete(id); } }
export async function getVideoURL(id) {
  if (urls.has(id)) return urls.get(id);
  try {
    const b = await tx('readonly', (s) => s.get(id));
    if (!b) return null;
    const u = URL.createObjectURL(b); urls.set(id, u); return u;
  } catch { return null; }
}
export async function deleteVideo(id) { try { await tx('readwrite', (s) => s.delete(id)); } catch { /* niente */ } }
