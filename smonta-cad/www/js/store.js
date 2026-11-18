// Stato dell'applicazione: progetto corrente, annulla/ripeti, salvataggio automatico.
import { newProject, clone } from './model.js';

const LS_INDEX = 'smonta.projects';
const LS_PREFIX = 'smonta.project.';

const listeners = new Set();
export const store = {
  project: null,
  selection: [],        // id dei pezzi selezionati
  undoStack: [],
  redoStack: [],
  dirty: false,
};

export function on(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function emit(kind = 'change', info = {}) { for (const fn of listeners) fn(kind, info); }

// ------------------------------------------------------------- storico
/** Da chiamare PRIMA di una modifica: salva lo stato per Annulla */
export function checkpoint(label = '') {
  store.undoStack.push({ label, data: JSON.stringify(store.project) });
  if (store.undoStack.length > 120) store.undoStack.shift();
  store.redoStack.length = 0;
}
/** Da chiamare DOPO una modifica */
export function commit(kind = 'change', info = {}) {
  store.project.modified = Date.now();
  store.dirty = true;
  scheduleSave();
  emit(kind, info);
}
/** Modifica completa: checkpoint + funzione + commit */
export function mutate(label, fn, kind = 'change') {
  checkpoint(label);
  const r = fn(store.project);
  commit(kind);
  return r;
}
export function undo() {
  const s = store.undoStack.pop();
  if (!s) return false;
  store.redoStack.push({ label: s.label, data: JSON.stringify(store.project) });
  store.project = JSON.parse(s.data);
  store.selection = store.selection.filter((id) => store.project.parts.some((p) => p.id === id));
  commit('reload');
  return s.label || true;
}
export function redo() {
  const s = store.redoStack.pop();
  if (!s) return false;
  store.undoStack.push({ label: s.label, data: JSON.stringify(store.project) });
  store.project = JSON.parse(s.data);
  store.selection = store.selection.filter((id) => store.project.parts.some((p) => p.id === id));
  commit('reload');
  return s.label || true;
}

// ------------------------------------------------------------- utilità di accesso
export const part = (id) => store.project.parts.find((p) => p.id === id);
export const selectedParts = () => store.selection.map(part).filter(Boolean);
export function select(ids, additive = false) {
  ids = (Array.isArray(ids) ? ids : [ids]).filter(Boolean);
  if (additive) {
    for (const id of ids) {
      const i = store.selection.indexOf(id);
      if (i >= 0) store.selection.splice(i, 1); else store.selection.push(id);
    }
  } else store.selection = ids;
  emit('selection');
}

// ------------------------------------------------------------- archivio locale
function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); return true; } catch { return false; } }
function safeDel(k) { try { localStorage.removeItem(k); } catch { /* niente */ } }

export function listProjects() {
  try { return JSON.parse(safeGet(LS_INDEX) || '[]'); } catch { return []; }
}
function writeIndex(list) { safeSet(LS_INDEX, JSON.stringify(list)); }

let saveTimer = null;
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 600);
}
export function saveNow() {
  const p = store.project;
  if (!p) return false;
  const ok = safeSet(LS_PREFIX + p.id, JSON.stringify(p));
  const list = listProjects().filter((x) => x.id !== p.id);
  list.unshift({ id: p.id, name: p.name, modified: p.modified, parts: p.parts.filter((x) => !x.stack).length,
    fasteners: p.parts.filter((x) => x.stack).length });
  writeIndex(list);
  store.dirty = !ok;
  emit('saved', { ok });
  return ok;
}
export function loadProject(id) {
  const raw = safeGet(LS_PREFIX + id);
  if (!raw) return false;
  setProject(JSON.parse(raw));
  return true;
}
export function deleteProject(id) {
  safeDel(LS_PREFIX + id);
  writeIndex(listProjects().filter((x) => x.id !== id));
}
export function setProject(p) {
  store.project = migrate(p);
  store.selection = [];
  store.undoStack = []; store.redoStack = [];
  store.dirty = false;
  emit('reload');
}
export function createProject(name) {
  setProject(newProject(name));
  saveNow();
}
export function duplicateProject(p, name) {
  const c = clone(p);
  c.id = 'prj' + Date.now().toString(36);
  c.name = name;
  return c;
}
function migrate(p) {
  p.settings = { snap: 5, grid: 20, fit: 'medium', defaultMaterial: 's235', ...(p.settings || {}) };
  p.stacks = p.stacks || [];
  p.steps = p.steps || [];
  p.counter = p.counter || {};
  for (const x of p.parts) { x.holes = x.holes || []; x.quat = x.quat || [0, 0, 0, 1]; }
  return p;
}
