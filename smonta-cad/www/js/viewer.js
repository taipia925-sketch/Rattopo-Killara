// Vista 3D: scena, telecamera, selezione col tocco, maniglie di spostamento, esploso.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { buildPartObject, applyTransform, setObjectState, worldBox } from './geom.js';

export class Viewer {
  constructor(container) {
    this.container = container;
    this.objects = new Map();      // partId -> {obj, key}
    this.states = new Map();       // partId -> stato visivo
    this.offsets = new Map();      // partId -> Vector3 (esploso/animazione)
    this.hidden = new Set();
    this.onTransform = null;       // callback dalle maniglie
    this.onTransformEnd = null;

    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping || THREE.ACESFilmicToneMapping;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(r.domElement);
    r.domElement.classList.add('gl');

    this.labels = new CSS2DRenderer();
    this.labels.domElement.className = 'labels';
    container.appendChild(this.labels.domElement);

    const s = this.scene = new THREE.Scene();
    s.background = new THREE.Color('#e6eaf0');
    THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
    const cam = this.camera = new THREE.PerspectiveCamera(35, 1, 1, 50000);
    cam.up.set(0, 0, 1);
    cam.position.set(420, -520, 380);

    s.add(new THREE.HemisphereLight(0xffffff, 0x8892a0, 1.6));
    const sun = this.sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(300, -200, 600); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = sc.bottom = -800; sc.right = sc.top = 800; sc.near = 10; sc.far = 3000;
    s.add(sun); s.add(sun.target);
    const fill = new THREE.DirectionalLight(0xffffff, 0.6); fill.position.set(-400, 300, 200); s.add(fill);

    this.grid = this.makeGrid(20, 60);
    s.add(this.grid);
    const ground = this.ground = new THREE.Mesh(new THREE.PlaneGeometry(8000, 8000), new THREE.ShadowMaterial({ opacity: 0.12 }));
    ground.receiveShadow = true; ground.position.z = -0.05; ground.raycast = () => {};
    s.add(ground);
    this.axes = this.makeAxes(); s.add(this.axes);

    this.root = new THREE.Group(); s.add(this.root);
    this.overlay = new THREE.Group(); s.add(this.overlay);

    const oc = this.controls = new OrbitControls(cam, r.domElement);
    oc.enableDamping = true; oc.dampingFactor = 0.12; oc.screenSpacePanning = true;
    oc.target.set(80, 60, 30);
    oc.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN };
    oc.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

    const tc = this.gizmo = new TransformControls(cam, r.domElement);
    tc.setSize(0.9);
    tc.addEventListener('dragging-changed', (e) => {
      oc.enabled = !e.value;
      if (!e.value && this.onTransformEnd) this.onTransformEnd(this.proxy);
    });
    tc.addEventListener('objectChange', () => { if (this.onTransform) this.onTransform(this.proxy); });
    this.gizmoHelper = tc.getHelper ? tc.getHelper() : tc;
    s.add(this.gizmoHelper);
    this.proxy = new THREE.Object3D(); s.add(this.proxy);

    this.raycaster = new THREE.Raycaster();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.resize();
    this._loop = this._loop.bind(this);
    this.renderer.setAnimationLoop(this._loop);
  }

  makeGrid(step, n) {
    const g = new THREE.Group();
    const minor = [], major = [];
    for (let i = -n; i <= n; i++) {
      const arr = i % 5 === 0 ? major : minor;
      arr.push(-n * step, i * step, 0, n * step, i * step, 0, i * step, -n * step, 0, i * step, n * step, 0);
    }
    const mk = (arr, color, op) => {
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
      const l = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false }));
      l.raycast = () => {}; return l;
    };
    g.add(mk(minor, 0x9aa6b4, 0.25)); g.add(mk(major, 0x7b8796, 0.45));
    return g;
  }
  setGrid(step) { this.scene.remove(this.grid); this.grid = this.makeGrid(step, Math.round(1200 / step)); this.scene.add(this.grid); }

  makeAxes() {
    const g = new THREE.Group();
    const mk = (to, c) => { const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), to]); const l = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: c, depthTest: false })); l.renderOrder = 5; l.raycast = () => {}; return l; };
    g.add(mk(new THREE.Vector3(60, 0, 0), 0xd64545), mk(new THREE.Vector3(0, 60, 0), 0x1e9e5a), mk(new THREE.Vector3(0, 0, 60), 0x1f6feb));
    return g;
  }

  resize() {
    const w = Math.max(10, this.container.clientWidth), h = Math.max(10, this.container.clientHeight);
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = w + 'px'; this.renderer.domElement.style.height = h + 'px';
    this.labels.setSize(w, h);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
  }

  _loop() {
    this.controls.update();
    if (this.animFn) this.animFn(performance.now());
    this.renderer.render(this.scene, this.camera);
    this.labels.render(this.scene, this.camera);
  }

  // ------------------------------------------------------------ sincronizzazione col modello
  sync(project) {
    const seen = new Set();
    for (const p of project.parts) {
      seen.add(p.id);
      const key = JSON.stringify([p.type, p.params, p.holes, p.material]);
      const ent = this.objects.get(p.id);
      const st = this.states.get(p.id) || 'normal';
      if (!ent || ent.key !== key) {
        if (ent) { this.root.remove(ent.obj); disposeObj(ent.obj); }
        const obj = buildPartObject(p, st);
        this.root.add(obj);
        this.objects.set(p.id, { obj, key, part: p });
      } else {
        ent.part = p;
        applyTransform(ent.obj, p);
      }
      this.applyOffset(p.id);
      this.objects.get(p.id).obj.visible = !this.hidden.has(p.id) && !p.hidden;
    }
    for (const [id, ent] of this.objects) if (!seen.has(id)) { this.root.remove(ent.obj); disposeObj(ent.obj); this.objects.delete(id); }
  }

  applyOffset(id) {
    const ent = this.objects.get(id);
    if (!ent) return;
    const p = ent.part, off = this.offsets.get(id);
    ent.obj.position.set(...p.pos);
    if (off) ent.obj.position.add(off);
    ent.obj.updateMatrixWorld(true);
  }

  setStates(map) {
    // map: partId -> stato
    for (const [id, ent] of this.objects) {
      const st = map.get(id) || 'normal';
      if (this.states.get(id) !== st) { setObjectState(ent.obj, ent.part, st); this.states.set(id, st); }
    }
  }

  // ------------------------------------------------------------ tocco
  ndc(ev) {
    const r = this.renderer.domElement.getBoundingClientRect();
    return new THREE.Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  }
  pick(ev, filter = null) {
    this.raycaster.setFromCamera(this.ndc(ev), this.camera);
    const meshes = [];
    for (const [id, ent] of this.objects) if (ent.obj.visible && (!filter || filter(ent.part))) ent.obj.traverse((c) => { if (c.isMesh) meshes.push(c); });
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    const h = hits[0];
    const id = h.object.userData.partId;
    const ent = this.objects.get(id);
    const normal = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize() : null;
    // il punto nel modello (senza esploso)
    const off = this.offsets.get(id);
    const point = h.point.clone(); if (off) point.sub(off);
    return { part: ent.part, point, normal, distance: h.distance };
  }
  /** Coordinate sullo schermo (pixel della pagina) di un punto 3D, considerando l'esploso */
  toScreen(v) {
    const p = v.clone().project(this.camera);
    const r = this.renderer.domElement.getBoundingClientRect();
    return { x: r.left + (p.x + 1) / 2 * r.width, y: r.top + (1 - p.y) / 2 * r.height, z: p.z };
  }
  /** Lunghezza in pixel di un segmento di 'len' mm attorno al punto v (per il raggio dei fori) */
  pxPerMm(v) {
    const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0).normalize();
    const a = this.toScreen(v), b = this.toScreen(v.clone().add(right));
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
  /** Punto sul piano del pavimento (z = 0) */
  pickGround(ev, z = 0) {
    this.raycaster.setFromCamera(this.ndc(ev), this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -z);
    const out = new THREE.Vector3();
    return this.raycaster.ray.intersectPlane(plane, out) ? out : null;
  }

  // ------------------------------------------------------------ maniglie
  attachGizmo(mode, parts, snap) {
    if (!parts.length) { this.detachGizmo(); return; }
    const box = new THREE.Box3();
    for (const p of parts) box.union(worldBox(p));
    const c = parts.length === 1 ? new THREE.Vector3(...parts[0].pos) : box.getCenter(new THREE.Vector3());
    this.proxy.position.copy(c);
    this.proxy.quaternion.set(...(parts.length === 1 ? parts[0].quat : [0, 0, 0, 1]));
    this.proxy.updateMatrixWorld(true);
    this.gizmo.setMode(mode);
    this.gizmo.setSpace(mode === 'rotate' ? 'local' : 'world');
    this.gizmo.setTranslationSnap(snap || null);
    this.gizmo.setRotationSnap(THREE.MathUtils.degToRad(15));
    this.gizmo.attach(this.proxy);
    this.gizmoStart = { pos: this.proxy.position.clone(), quat: this.proxy.quaternion.clone() };
  }
  detachGizmo() { this.gizmo.detach(); }

  // ------------------------------------------------------------ inquadratura
  bounds(project) {
    const box = new THREE.Box3();
    for (const p of project.parts) if (!p.hidden) box.union(worldBox(p));
    return box;
  }
  fit(project, view = null, animate = true) {
    let box = this.bounds(project);
    if (box.isEmpty()) box = new THREE.Box3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(200, 150, 60));
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3()).length() || 200;
    const dirs = { iso: [0.62, -0.78, 0.55], front: [0, -1, 0.0001], top: [0, -0.0001, 1], right: [1, 0, 0.0001], back: [0, 1, 0.0001] };
    let dir;
    if (view && dirs[view]) dir = new THREE.Vector3(...dirs[view]).normalize();
    else dir = this.camera.position.clone().sub(this.controls.target).normalize();
    const fov = THREE.MathUtils.degToRad(this.camera.fov);
    const dist = (size / 2) / Math.tan(fov / 2) * (this.camera.aspect < 1 ? 1.08 / this.camera.aspect : 1.1);
    const toPos = c.clone().addScaledVector(dir, dist);
    this.animateCamera(toPos, c, animate ? 450 : 0);
    // ombre proporzionate al modello
    const sc = this.sun.shadow.camera, R = Math.max(400, size);
    sc.left = sc.bottom = -R; sc.right = sc.top = R; sc.updateProjectionMatrix();
    this.sun.position.copy(c).add(new THREE.Vector3(R * 0.5, -R * 0.35, R * 1.2)); this.sun.target.position.copy(c);
  }
  animateCamera(toPos, toTarget, ms) {
    const fromPos = this.camera.position.clone(), fromT = this.controls.target.clone();
    if (!ms) { this.camera.position.copy(toPos); this.controls.target.copy(toTarget); return; }
    const t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      this.camera.position.lerpVectors(fromPos, toPos, e); this.controls.target.lerpVectors(fromT, toTarget, e);
      if (k < 1) requestAnimationFrame(step);
    };
    step();
  }

  // ------------------------------------------------------------ disegni sovrapposti
  clearOverlay() {
    for (const c of [...this.overlay.children]) { this.overlay.remove(c); c.traverse((o) => { if (o.element) o.element.remove(); }); }
  }
  addOverlay(obj) { this.overlay.add(obj); return obj; }
  label(text, pos, cls = 'tag') {
    const el = document.createElement('div'); el.className = cls; el.textContent = text;
    const o = new CSS2DObject(el); o.position.copy(pos); this.overlay.add(o); return o;
  }
  line(a, b, color = 0x1f6feb, dashed = false) {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const mat = dashed ? new THREE.LineDashedMaterial({ color, dashSize: 4, gapSize: 3, depthTest: false }) : new THREE.LineBasicMaterial({ color, depthTest: false });
    const l = new THREE.Line(geo, mat); if (dashed) l.computeLineDistances(); l.renderOrder = 20; this.overlay.add(l); return l;
  }
  dot(p, color = 0x1f6feb, r = 2.2) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), new THREE.MeshBasicMaterial({ color, depthTest: false }));
    m.position.copy(p); m.renderOrder = 21; this.overlay.add(m); return m;
  }

  screenshot(w = 0, h = 0) {
    this.renderer.render(this.scene, this.camera);
    if (!w) return this.renderer.domElement.toDataURL('image/png');
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const src = this.renderer.domElement;
    const k = Math.max(w / src.width, h / src.height);
    const sw = w / k, sh = h / k;
    c.getContext('2d').drawImage(src, (src.width - sw) / 2, (src.height - sh) / 2, sw, sh, 0, 0, w, h);
    return c.toDataURL('image/jpeg', 0.85);
  }
}

function disposeObj(o) {
  o.traverse((c) => { if (c.geometry) c.geometry.dispose(); });
}
