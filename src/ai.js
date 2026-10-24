/* IA del computer: reagisce agli attacchi (para, schiva, passo laterale), punisce, fa combo aeree */
import {MV} from './data.js';
import {G,mk} from './sim.js';
const rnd=Math.random,choice=a=>a[rnd()*a.length|0];
const AIL=[{rt:26,re:.22,pu:.12,ss:.05,ju:.3,dl:12,br:.05},{rt:14,re:.55,pu:.5,ss:.12,ju:.7,dl:7,br:.25},{rt:6,re:.85,pu:.9,ss:.22,ju:.95,dl:3,br:.5}];
function plan(id,F,B){const p=(i,n)=>[i,n];
 switch(id){
  case '1':case '2':case '3':case '4':return[p({[id]:1},2),p({},2)];
  case '12':return[p({1:1},2),p({},5),p({2:1},2),p({},3)];
  case '21':return[p({2:1},2),p({},6),p({1:1},2),p({},3)];
  case '112':return[p({1:1},2),p({},5),p({1:1},2),p({},6),p({2:1},2),p({},3)];
  case '124':return[p({1:1},2),p({},5),p({2:1},2),p({},6),p({4:1},2),p({},3)];
  case 'uf':return[p({d:1,[F]:1},2),p({d:1,[F]:1,2:1},2),p({},2)];
  case 'df1':return[p({d:1,[F]:1},2),p({d:1,[F]:1,1:1},2),p({},2)];
  case 'd1':case 'd3':case 'd4':return[p({d:1},2),p({d:1,[id[1]]:1},2),p({d:1},4),p({},2)];
  case 'f2':case 'f4':return[p({[F]:1},2),p({[F]:1,[id[1]]:1},2),p({},2)];
  case 'b4':return[p({[B]:1},2),p({[B]:1,4:1},2),p({},2)];
  case 'thr':return[p({t:1},2),p({},2)];case 'ra':return[p({x:1},2),p({},2)];
  case 'dash':return[p({[F]:1},2),p({},2),p({[F]:1},2),p({},8)];case 'bd':return[p({[B]:1},2),p({},2),p({[B]:1},2),p({},12)];
  case 'ssu':return[p({u:1},2),p({},14)];case 'ssd':return[p({d:1},2),p({},14)];
  case 'ssk':return[p({u:1},2),p({},4),p({3:1},2),p({},2)];}return[];}
const R=id=>MV[id]&&MV[id].reach||1;
export function aiIn(me,op){const c=mk();
 if(!me.ai)me.ai={q:[],w:0,seen:-1,pun:false,mov:null};const ai=me.ai;
 if(G&&G.phase==='finish'&&!G.fat&&me.idx===G.rw){if(op.st!=='dizzy')return c;const F=me.idx?'l':'r',d=Math.hypot(op.x-me.x,op.z-me.z);
  if(d>1.3){c[F]=1;return c;}if(ai.fd==null)ai.fd=rnd()<[.45,.75,.95][G.lvl];if(ai.fd){if(G.pt>40&&G.n%6<2)c.x=1;return c;}
  if(!ai.q.length&&G.pt>40)ai.q=plan(choice(['f2','uf','4']),F,me.idx?'r':'l');if(ai.q.length){const s=ai.q[0];Object.assign(c,s[0]);if(--s[1]<=0)ai.q.shift();}return c;}
 if(!G||G.phase!=='fight'||G.cin){ai.q=[];return c;}
 if(me.dummy)return c;
 const L=AIL[G.lvl],F=me.idx?'l':'r',B=me.idx?'r':'l',d=Math.hypot(op.x-me.x,op.z-me.z),free=me.st==='idle'||me.st==='walk'||me.st==='crouch';
 if(me.st==='thrown'){if(me.sf===L.dl+1&&rnd()<L.br)c[me.thk]=1;return c;}
 if(me.st==='knockdown'){if(me.sf>28&&rnd()<.1)c['3']=1;return c;}
 if(op.st==='attack'&&op.aid!==ai.seen&&op.mv&&op.mf>=L.dl){ai.seen=op.aid;const m=MV[op.mv];
  if(!m.thr&&d<R(op.mv)+.7&&(free||ai.q.length||me.st==='blockstun')&&rnd()<L.re){const rem=Math.max(4,m.su-op.mf+m.ac+6);
   if(m.lv==='l')ai.q=[[{d:1,[B]:1},rem]];
   else if(m.lv==='h'&&rnd()<.45)ai.q=[[{d:1},rem],[{d:1,[F]:1,2:1},2],[{},2]];
   else if(!m.home&&rnd()<L.ss*2&&op.mf<m.su-5)ai.q=plan(rnd()<.5?'ssu':'ssd',F,B);
   else ai.q=[[{[B]:1},rem]];}}
 if(me.st==='blockstun'){ai.pun=true;c[B]=1;if(me.grd===2)c.d=1;return c;}
 if(ai.pun&&free){ai.pun=false;if(op.st==='attack'&&op.mv){const m=MV[op.mv],rem=m.su+m.ac+m.rc-op.mf;if(rem>=11&&d<1.5&&rnd()<L.pu)ai.q=plan(rem>=15?'uf':'12',F,B);}}
 if(ai.q.length){const s=ai.q[0];Object.assign(c,s[0]);if(--s[1]<=0)ai.q.shift();return c;}
 if(!free)return c;
 if(op.st==='airborne'&&op.combo>0&&!op.ko&&op.y>.15){if(rnd()<L.ju){ai.q=d>1.3?plan('dash',F,B):plan(choice(op.vy>0?['12','1','112']:['1','4','d1']),F,B);ai.w=0;return c;}}
 if(ai.w>0){ai.w--;if(ai.mov)c[ai.mov]=1;return c;}
 const r=rnd(),near=Math.max(R('1'),R('2'))+.05,mid=Math.max(R('f2'),R('4'),R('b4'))+.05;
 if(me.rage&&!me.raUsed&&d<1.5&&r<.3)ai.q=plan('ra',F,B);
 else if(op.st==='knockdown'||op.st==='getup')ai.q=d<1.4&&r<.4?plan('d3',F,B):[[{[B]:1},8]];
 else if(d>mid+1)ai.q=r<.35?plan('dash',F,B):r<.35+L.ss?plan(choice(['ssu','ssd']),F,B):[[{[F]:1},10+rnd()*14|0]];
 else if(d>mid)ai.q=r<.3?plan('dash',F,B):r<.3+L.ss?plan(choice(['ssu','ssd']),F,B):r<.45?[[{[B]:1},8+rnd()*10|0]]:[[{[F]:1},6+rnd()*10|0]];
 else if(d>near)ai.q=r<.17?plan('f2',F,B):r<.3?plan('4',F,B):r<.38?plan('b4',F,B):r<.5?plan('f4',F,B):r<.6?plan('3',F,B):r<.66?plan('ssk',F,B):r<.66+L.ss?plan(choice(['ssu','ssd']),F,B):[[{[F]:1},5+rnd()*8|0]];
 else{const o=choice(['1','12','112','124','12','3','d3','d4','uf','df1','thr','d1','2','21','f4','bd','1']);ai.q=plan(o,F,B);}
 ai.w=Math.round(L.rt*(.4+rnd()));ai.mov=rnd()<.5?null:(rnd()<.55?B:F);return c;}
