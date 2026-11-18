// Dati normati: bulloneria metrica ISO, giochi dei fori, materiali.
// Tutte le misure sono in millimetri.

// d: diametro nominale, p: passo, s: chiave (esagono), k: altezza testa (ISO 4017),
// m: altezza dado (ISO 4032), w: rondella ISO 7089 [foro, esterno, spessore],
// tap: foro da filettare (punta), coppia: Nm per classe 8.8 con attrito 0,14,
// fori di passaggio ISO 273: [fine, medio, grossolano].
export const BOLTS = {
  M3:  { d: 3,  p: 0.5,  s: 5.5, k: 2,   m: 2.4,  w: [3.2, 7, 0.5],  tap: 2.5,  torque: 1.3, clear: [3.2, 3.4, 3.6] },
  M4:  { d: 4,  p: 0.7,  s: 7,   k: 2.8, m: 3.2,  w: [4.3, 9, 0.8],  tap: 3.3,  torque: 3,   clear: [4.3, 4.5, 4.8] },
  M5:  { d: 5,  p: 0.8,  s: 8,   k: 3.5, m: 4.7,  w: [5.3, 10, 1],   tap: 4.2,  torque: 6,   clear: [5.3, 5.5, 5.8] },
  M6:  { d: 6,  p: 1,    s: 10,  k: 4,   m: 5.2,  w: [6.4, 12, 1.6], tap: 5,    torque: 10,  clear: [6.4, 6.6, 7] },
  M8:  { d: 8,  p: 1.25, s: 13,  k: 5.3, m: 6.8,  w: [8.4, 16, 1.6], tap: 6.8,  torque: 25,  clear: [8.4, 9, 10] },
  M10: { d: 10, p: 1.5,  s: 16,  k: 6.4, m: 8.4,  w: [10.5, 20, 2],  tap: 8.5,  torque: 49,  clear: [10.5, 11, 12] },
  M12: { d: 12, p: 1.75, s: 18,  k: 7.5, m: 10.8, w: [13, 24, 2.5],  tap: 10.2, torque: 86,  clear: [13, 13.5, 14.5] },
  M16: { d: 16, p: 2,    s: 24,  k: 10,  m: 14.8, w: [17, 30, 3],    tap: 14,   torque: 210, clear: [17, 17.5, 18.5] },
  M20: { d: 20, p: 2.5,  s: 30,  k: 12.5, m: 18,  w: [21, 37, 3],    tap: 17.5, torque: 410, clear: [21, 22, 24] },
};
export const BOLT_SIZES = Object.keys(BOLTS);

// Lunghezze unificate per viti a testa esagonale (ISO 4017 / 4014)
export const BOLT_LENGTHS = [6, 8, 10, 12, 16, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100,
  110, 120, 130, 140, 150, 160, 180, 200, 220, 240, 260, 280, 300];

// Perni cilindrici (ISO 2338): diametri e lunghezze comuni
export const PIN_DIAMETERS = [2, 3, 4, 5, 6, 8, 10, 12, 16, 20];
export const PIN_LENGTHS = [8, 10, 12, 16, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120];

export const MATERIALS = {
  s235:   { name: 'Acciaio S235',       rho: 7.85, color: '#b4bfcc', short: 'S235' },
  s355:   { name: 'Acciaio S355',       rho: 7.85, color: '#a7b2c0', short: 'S355' },
  inox:   { name: 'Inox AISI 304',      rho: 7.93, color: '#d6dde6', short: 'AISI 304' },
  alu:    { name: 'Alluminio 6061',     rho: 2.70, color: '#e3e8ee', short: 'Al 6061' },
  ottone: { name: 'Ottone CW614N',      rho: 8.47, color: '#d4b25a', short: 'Ottone' },
  pom:    { name: 'Plastica POM',       rho: 1.41, color: '#ece9e1', short: 'POM' },
  legno:  { name: 'Multistrato betulla', rho: 0.68, color: '#d9b98c', short: 'Multistrato' },
  zinc:   { name: 'Acciaio 8.8 zincato', rho: 7.85, color: '#e0a35a', short: '8.8 zinc.' },
};

/** Fori di passaggio consigliati per una vite: {fine, medio, grossolano} */
export function clearanceFor(size) {
  const b = BOLTS[size];
  return b ? { fine: b.clear[0], medium: b.clear[1], coarse: b.clear[2] } : null;
}

/** Vite più grande che passa in un foro di diametro d (con almeno il gioco fine). */
export function boltForHole(d) {
  let best = null;
  for (const k of BOLT_SIZES) {
    const b = BOLTS[k];
    if (d + 1e-6 >= b.clear[0]) best = k;
  }
  return best;
}

/** Giudizio sul foro rispetto a una vite: 'stretto' | 'fine' | 'medio' | 'grossolano' | 'largo' */
export function holeFit(d, size) {
  const b = BOLTS[size];
  if (!b) return 'n/d';
  if (d < b.clear[0] - 1e-6) return d < b.d ? 'stretto' : 'stretto';
  if (d <= b.clear[0] + 1e-6) return 'fine';
  if (d <= b.clear[1] + 1e-6) return 'medio';
  if (d <= b.clear[2] + 1e-6) return 'grossolano';
  return 'largo';
}

/** Lunghezza unificata minima >= l */
export function stdLength(l, list = BOLT_LENGTHS) {
  for (const v of list) if (v + 1e-6 >= l) return v;
  return Math.ceil(l / 10) * 10;
}

/** Foro filettato: descrizione e diametro di preforo */
export function tapInfo(size) {
  const b = BOLTS[size];
  return b ? `${size} (preforo Ø ${String(b.tap).replace('.', ',')})` : '';
}

export const fmt = (v, dec = 1) => {
  if (v === undefined || v === null || isNaN(v)) return '–';
  const r = Math.round(v * 10 ** dec) / 10 ** dec;
  return String(r).replace('.', ',');
};
