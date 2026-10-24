/* =====================================================================
   RATTOPO KILLARA — dati del gioco
   CHARS: le facce (stesso ordine delle foto). Cambia qui i nomi.
   body = corpo predefinito (indice in BODIES)
   ===================================================================== */
export const CHARS=[
 {name:'Lottatore 1',img:'f1.jpg',cut:'c1.webp',body:0},
 {name:'Lottatore 2',img:'f2.jpg',cut:'c2.webp',body:5},
 {name:'Lottatore 3',img:'f3.jpg',cut:'c3.webp',body:0},
 {name:'Lottatore 4',img:'f4.jpg',cut:'c4.webp',body:6},
 {name:'Lottatore 5',img:'f5.jpg',cut:'c5.webp',body:4},
 {name:'Lottatore 6',img:'f6.jpg',cut:'c6.webp',body:0},
 {name:'Lottatore 7',img:'f7.jpg',cut:'c7.webp',body:5},
 {name:'Lottatore 8',img:'f8.jpg',cut:'c8.webp',body:1},
];
// corpi 3D (modelli Mixamo con scheletro standard). her: per "FINISH HER"
export const BODIES=[
 {id:'brute',name:'BRUTE',file:'assets/chars/brute.glb'},
 {id:'mutant',name:'MUTANTE',file:'assets/chars/mutant.glb',beast:1},
 {id:'maw',name:'MAW',file:'assets/chars/maw.glb',beast:1},
 {id:'hulk',name:'ZUCCONE',file:'assets/chars/hulk.glb',beast:1},
 {id:'vampiro',name:'VAMPIRO',file:'assets/chars/vampiro.glb'},
 {id:'soldato',name:'SOLDATO',file:'assets/chars/soldato.glb'},
 {id:'demone',name:'DEMONE',file:'assets/chars/demone.glb'},
 {id:'michelle',name:'MICHELLE',file:'assets/chars/michelle.glb',her:1},
];
export const HPMAX=170,WINS=2,ROUNDT=60,ARENA=7.5,HIPY=.98;
export const KEYS=['l','r','u','d','1','2','3','4','g','t','x'],BTN=['1','2','3','4','t','x'];

/* ---------------- MOSSE ----------------
   clip: animazione (assets/anims.json) · limb: arto che colpisce (la/ra pugni, ll/rl calci)
   su: fotogrammi di avvio fino al colpo (il colpo dell'animazione viene sincronizzato qui) · rc: recupero
   lv: h alto, m medio, l basso, s medio speciale · dmg danno · ht/bt stordimento su colpito/parato
   eff: launch (lancia in aria), kd (atterra), blow (sbalza via) · ch: continuazioni a catena
   home: insegue il passo laterale · cr: posizione accucciata · adv: passo in avanti (m) */
export const MV={
 '1':  {clip:'punchLm', limb:'la',su:10,rc:12,dmg:6, lv:'h',adv:.3,ht:18,bt:11,kb:.5,ch:{'1':'11','2':'12'},snd:'p'},
 '11': {clip:'punchLm', limb:'la',su:9, rc:12,dmg:6, lv:'h',adv:.25,ht:18,bt:11,kb:.5,ch:{'2':'112'},snd:'p'},
 '112':{clip:'hook',   limb:'ra',su:14,rc:22,dmg:14,lv:'m',ht:24,bt:14,kb:1,eff:'kd',adv:.15,snd:'P'},
 '12': {clip:'punchL', limb:'ra',su:11,rc:14,dmg:9, lv:'h',adv:.3,ht:20,bt:12,kb:.7,ch:{'4':'124'},snd:'p'},
 '124':{clip:'kickH',  limb:'rl',su:16,rc:22,dmg:18,lv:'h',ht:28,bt:14,kb:1,eff:'kd',home:1,snd:'K'},
 '2':  {clip:'punchL', limb:'ra',su:12,rc:14,dmg:10,lv:'h',adv:.35,ht:20,bt:12,kb:.8,ch:{'1':'21'},snd:'p'},
 '21': {clip:'punchLm',limb:'la',su:10,rc:14,dmg:8, lv:'h',adv:.25,ht:18,bt:12,kb:.6,snd:'p'},
 '3':  {clip:'kickL',  limb:'ll',su:14,rc:17,dmg:12,lv:'m',ht:22,bt:13,kb:.9,snd:'k'},
 '4':  {clip:'kickH',  limb:'rl',su:16,rc:20,dmg:16,lv:'h',ht:24,bt:13,kb:1,snd:'K'},
 'd1': {clip:'punchingL',limb:'ra',su:11,rc:11,dmg:5,lv:'s',adv:.25,ht:16,bt:10,kb:.4,cr:1,snd:'p'},
 'd3': {clip:'sweep',limb:'rl',su:14,rc:18,dmg:9, lv:'l',ht:22,bt:15,kb:.5,cr:1,low:1,snd:'k'},
 'd4': {clip:'sweep',  limb:'rl',su:18,rc:28,dmg:14,lv:'l',ht:0, bt:16,kb:.6,cr:1,eff:'kd',snd:'K'},
 'df1':{clip:'punchH', limb:'ra',su:13,rc:15,dmg:11,lv:'m',adv:.3,ht:20,bt:12,kb:.7,snd:'p'},
 'uf': {clip:'uppercut',limb:'ra',su:15,rc:25,dmg:15,lv:'m',ht:0,bt:16,kb:.3,eff:'launch',adv:.35,snd:'P'},
 'f2': {clip:'lunge',  limb:'ra',su:16,rc:22,dmg:20,lv:'m',ht:0, bt:15,kb:1.4,eff:'blow',snd:'P'},
 'f4': {clip:'kickM',  limb:'rl',su:14,rc:18,dmg:14,lv:'m',ht:22,bt:13,kb:1.2,snd:'k'},
 'b4': {clip:'spinHeel',limb:'rl',su:19,rc:24,dmg:22,lv:'m',ht:0,bt:15,kb:1.2,eff:'kd',home:1,snd:'K'},
 'ssk':{clip:'crescent',limb:'rl',su:15,rc:20,dmg:14,lv:'m',ht:22,bt:13,kb:1,home:1,snd:'k'},
 'jk': {clip:'kickL',  limb:'ll',su:8, rc:8, dmg:15,lv:'m',ht:24,bt:12,kb:1.1,air:1,snd:'K'},
 'thr':{clip:'grabSlam',limb:'ra',su:12,rc:30,lv:'h',thr:1,br:'1'},
 'thr2':{clip:'grabSlam',limb:'ra',su:12,rc:30,lv:'h',thr:1,br:'2'},
 'ra': {clip:'punchH', limb:'ra',su:20,rc:36,dmg:30,lv:'m',ht:30,bt:22,kb:1.6,armor:1,ra:1,home:1,adv:.5,snd:'P'},
};
// animazioni di stato (non di attacco)
export const ST_CLIP={idle:'idle',walk:'stepF',walkBack:'stepF',crouch:'crouch',block:'block',cblock:'crouch',
 ssL:'dodgeLeft',ssR:'dodgeRight',dash:'stepF',backdash:'dodgeBack',jump:'jump',
 hitH:['hitHL','hitHM','hitHH'],hitM:['hitML','hitMM','hitMH'],hitL:['hitLL','hitLM','hitLH'],
 air:'kdBack',down:'kdBack',getup:'getup',dizzy:'dizzy',throw:'grabSlam',thrown:'thrown',win:['taunt1','taunt2'],intro:['taunt2','insult'],
 rageart:'combo',fatality:'uppercut',fatal:'kdBack'};
// ossa campionate per le hitbox
export const JOINTS=['Head','Neck','Spine2','Hips','LeftArm','LeftForeArm','LeftHand','RightArm','RightForeArm','RightHand','LeftUpLeg','LeftLeg','LeftFoot','LeftToeBase','RightUpLeg','RightLeg','RightFoot','RightToeBase'];
