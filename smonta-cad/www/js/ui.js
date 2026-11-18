// Piccole utilità per l'interfaccia: elementi, icone, avvisi, finestre, menu.
export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => [...root.querySelectorAll(s)];

export const icon = (name, cls = 'i') => `<svg class="${cls}"><use href="#i-${name}"/></svg>`;

export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === false || v === null || v === undefined) continue;
    if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'html') e.innerHTML = v;
    else if (k === 'class') e.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return e;
}

export function toast(msg, kind = '', ms = 2600) {
  const ic = kind === 'ok' ? 'check' : kind === 'err' || kind === 'warn' ? 'warn' : null;
  const t = h('div', { class: `toast ${kind}`, html: `${ic ? icon(ic) : ''}<span></span>` });
  t.querySelector('span').textContent = msg;
  $('#toasts').append(t);
  setTimeout(() => t.remove(), ms);
}

// ------------------------------------------------------------------ finestre
let modalResolve = null;
export function closeModal(v) {
  const m = $('#modal'); m.classList.add('hidden'); m.innerHTML = '';
  const r = modalResolve; modalResolve = null; if (r) r(v);
}
/** Finestra generica: build(dialog, done) costruisce il contenuto */
export function modal(title, build) {
  if (modalResolve) closeModal(null);
  return new Promise((resolve) => {
    modalResolve = resolve;
    const m = $('#modal');
    const d = h('div', { class: 'dialog', role: 'dialog' }, h('h3', {}, title));
    m.innerHTML = ''; m.append(d); m.classList.remove('hidden');
    m.onclick = (e) => { if (e.target === m) closeModal(null); };
    build(d, closeModal);
    const f = d.querySelector('input, select, textarea'); if (f) setTimeout(() => { f.focus(); if (f.select) f.select(); }, 60);
  });
}
export function confirmBox(title, text, okLabel = 'Conferma', danger = false) {
  return modal(title, (d, done) => {
    d.append(h('p', { style: { margin: 0 } }, text));
    d.append(h('div', { class: 'acts' },
      h('button', { class: 'btn', onclick: () => done(false) }, 'Annulla'),
      h('button', { class: `btn ${danger ? 'danger' : 'primary'}`, onclick: () => done(true) }, okLabel)));
  });
}
export function promptBox(title, label, value = '', opts = {}) {
  return modal(title, (d, done) => {
    const inp = h('input', { value, type: opts.type || 'text', inputmode: opts.inputmode || null, step: opts.step || null });
    const ok = () => done(opts.type === 'number' ? parseNum(inp.value) : inp.value.trim());
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); });
    d.append(h('div', { class: 'field' }, h('label', {}, label), h('div', { class: 'box' }, inp, opts.unit ? h('span', { class: 'u' }, opts.unit) : null)));
    d.append(h('div', { class: 'acts' }, h('button', { class: 'btn', onclick: () => done(null) }, 'Annulla'), h('button', { class: 'btn primary', onclick: ok }, opts.ok || 'OK')));
  });
}
/** Modulo con più campi: fields = [{key,label,value,unit,type:'number'|'text'|'select',options:[[v,l]]}] */
export function formBox(title, fields, okLabel = 'OK', note = '') {
  return modal(title, (d, done) => {
    if (note) d.append(h('p', { class: 'muted', style: { margin: 0 } }, note));
    const grid = h('div', { class: 'fields' });
    const inputs = {};
    for (const f of fields) {
      let inp;
      if (f.type === 'select') { inp = h('select', {}, ...f.options.map(([v, l]) => h('option', { value: v, selected: String(v) === String(f.value) }, l))); }
      else inp = h('input', { value: f.value ?? '', inputmode: f.type === 'text' ? null : 'decimal' });
      inputs[f.key] = inp;
      grid.append(h('div', { class: 'field', style: f.wide ? { gridColumn: '1 / -1' } : null }, h('label', {}, f.label), h('div', { class: 'box' }, inp, f.unit ? h('span', { class: 'u' }, f.unit) : null)));
    }
    d.append(grid);
    const ok = () => {
      const out = {};
      for (const f of fields) {
        const v = inputs[f.key].value;
        out[f.key] = f.type === 'select' || f.type === 'text' ? v : parseNum(v);
        if (f.type !== 'select' && f.type !== 'text' && (out[f.key] === null || isNaN(out[f.key]))) { inputs[f.key].focus(); toast(`Valore non valido: ${f.label}`, 'err'); return; }
      }
      done(out);
    };
    d.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); });
    d.append(h('div', { class: 'acts' }, h('button', { class: 'btn', onclick: () => done(null) }, 'Annulla'), h('button', { class: 'btn primary', onclick: ok }, okLabel)));
  });
}

export function parseNum(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim().replace(',', '.');
  if (s === '') return null;
  // semplici espressioni: 200/2, 100+25, 3*8
  if (/^[\d.+\-*/() ]+$/.test(s)) {
    try { const r = Function(`"use strict";return (${s})`)(); return typeof r === 'number' && isFinite(r) ? r : null; } catch { return null; }
  }
  return null;
}

// ------------------------------------------------------------------ menu a comparsa
export function popMenu(anchor, items) {
  closeMenus();
  const m = h('div', { class: 'menu' });
  for (const it of items) {
    if (!it) continue;
    m.append(h('button', { onclick: () => { closeMenus(); it.run(); } }, h('span', { html: icon(it.icon || 'chevron') }), h('div', {}, it.label, it.sub ? h('small', {}, it.sub) : null)));
  }
  document.body.append(m);
  const r = anchor.getBoundingClientRect();
  const mw = m.offsetWidth, mh = m.offsetHeight;
  m.style.left = Math.max(8, Math.min(window.innerWidth - mw - 8, r.right - mw)) + 'px';
  m.style.top = (r.bottom + 6 + mh > window.innerHeight ? Math.max(8, r.top - mh - 6) : r.bottom + 6) + 'px';
  setTimeout(() => document.addEventListener('pointerdown', onDocDown), 0);
}
function onDocDown(e) { if (!e.target.closest('.menu')) closeMenus(); }
export function closeMenus() { $$('.menu').forEach((m) => m.remove()); document.removeEventListener('pointerdown', onDocDown); }

export function numField(label, value, unit, onCommit, opts = {}) {
  const inp = h('input', { value: fmtIn(value), inputmode: 'decimal', 'aria-label': label });
  const commit = () => {
    const v = parseNum(inp.value);
    if (v === null || isNaN(v) || (opts.min !== undefined && v < opts.min) || (opts.max !== undefined && v > opts.max)) {
      toast(`${label}: valore non valido${opts.min !== undefined ? ` (minimo ${fmtIn(opts.min)}${opts.max !== undefined ? `, massimo ${fmtIn(opts.max)}` : ''})` : ''}`, 'err');
      inp.value = fmtIn(value); return;
    }
    if (Math.abs(v - value) > 1e-9) onCommit(v);
  };
  inp.addEventListener('change', commit);
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });
  return h('div', { class: 'field' }, h('label', {}, label), h('div', { class: 'box' }, inp, unit ? h('span', { class: 'u' }, unit) : null));
}
export const fmtIn = (v) => (v === undefined || v === null) ? '' : String(Math.round(v * 1000) / 1000).replace('.', ',');
