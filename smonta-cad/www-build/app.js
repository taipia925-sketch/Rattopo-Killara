var Or="170",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cp=0,gu=1,Ip=2;var Cd=1,$l=2,ti=3,Ti=0,sn=1,un=2,wi=0,Cs=1,xu=2,_u=3,yu=4,Pp=5,qi=100,Lp=101,Dp=102,Up=103,Np=104,Op=200,Fp=201,zp=202,Bp=203,Sc=204,wc=205,kp=206,Hp=207,Vp=208,Gp=209,Wp=210,$p=211,Xp=212,qp=213,Yp=214,Ec=0,Tc=1,Ac=2,Us=3,Rc=4,Cc=5,Ic=6,Pc=7,Id=0,Zp=1,jp=2,Ei=0,Jp=1,Kp=2,Qp=3,Xl=4,tm=5,em=6,ql=7;var Pd=300,Ns=301,Os=302,Lc=303,Dc=304,ha=306,Sr=1e3,ei=1001,wr=1002,fn=1003,Yl=1004;var Ts=1005;var vn=1006,xr=1007;var ni=1008;var oi=1009,Ld=1010,Dd=1011,Er=1012,Zl=1013,Zi=1014,ii=1015,Fr=1016,jl=1017,Jl=1018,Fs=1020,Ud=35902,Nd=1021,Od=1022,dn=1023,Fd=1024,zd=1025,Is=1026,zs=1027,Bd=1028,Kl=1029,kd=1030,Ql=1031;var th=1033,Uo=33776,No=33777,Oo=33778,Fo=33779,Uc=35840,Nc=35841,Oc=35842,Fc=35843,zc=36196,Bc=37492,kc=37496,Hc=37808,Vc=37809,Gc=37810,Wc=37811,$c=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,jc=37817,Jc=37818,Kc=37819,Qc=37820,tl=37821,zo=36492,el=36494,nl=36495,Hd=36283,il=36284,sl=36285,rl=36286;var Bs=2300,Tr=2301,Wa=2302,vu=2400,Mu=2401,bu=2402;var nm=3200,im=3201;var Vd=0,sm=1,zn="",$e="srgb",Js="srgb-linear",ua="linear",fe="srgb";var us=7680;var Su=519,rm=512,om=513,am=514,Gd=515,cm=516,lm=517,hm=518,um=519,wu=35044;var Eu="300 es",si=2e3,Bo=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,Ps=Math.PI/180,Ar=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function eh(i,t){return(i%t+t)%t}function dm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fm(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function pm(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function mm(i,t=1){return t-Math.abs(eh(i,t*2)-t)}function gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _m(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ym(i,t){return i+Math.random()*(t-i)}function vm(i){return i*(.5-Math.random())}function Mm(i){i!==void 0&&(Tu=i);let t=Tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bm(i){return i*Ps}function Sm(i){return i*Ar}function wm(i){return(i&i-1)===0&&i!==0}function Em(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Am(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dn={DEG2RAD:Ps,RAD2DEG:Ar,generateUUID:ns,clamp:Le,euclideanModulo:eh,mapLinear:dm,inverseLerp:fm,lerp:_r,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:xm,randInt:_m,randFloat:ym,randFloatSpread:vm,seededRandom:Mm,degToRad:bm,radToDeg:Sm,isPowerOfTwo:wm,ceilPowerOfTwo:Em,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Am,normalize:Je,denormalize:Es},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],M=s[4],_=s[7],I=s[2],A=s[5],C=s[8];return r[0]=o*x+a*y+c*I,r[3]=o*m+a*M+c*A,r[6]=o*p+a*_+c*C,r[1]=l*x+h*y+u*I,r[4]=l*m+h*M+u*A,r[7]=l*p+h*_+u*C,r[2]=d*x+f*y+g*I,r[5]=d*m+f*M+g*A,r[8]=d*p+f*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$a=new qt;function Wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rm(){let i=ko("canvas");return i.style.display="block",i}var Au={};function mr(i){i in Au||(Au[i]=!0,console.warn(i))}function Cm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Im(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pm(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ru=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Iu=[.3127,.329],Pu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Js]:{primaries:Ru,whitePoint:Iu,transfer:ua,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:Ru,whitePoint:Iu,transfer:fe,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var ds,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=ko("canvas")),ds.width=t.width,ds.height=t.height;let n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ko("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lm=0,ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dm=0,pn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=vn,o=ni,a=dn,c=oi,l=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ns(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Pd;pn.DEFAULT_ANISOTROPY=1;var Te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(f+1)/2,I=(p+1)/2,A=(h+d)/4,C=(u+x)/4,U=(g+m)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=C/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=U/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ho=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),A=Math.atan2(I,p*y);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let _=a*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new S,Du=new Vt,be=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),ro.subVectors(this.max,hr),fs.subVectors(t.a,hr),ps.subVectors(t.b,hr),ms.subVectors(t.c,hr),xi.subVectors(ps,fs),_i.subVectors(ms,ps),ki.subVectors(fs,ms);let e=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-ki.z,ki.y,xi.z,0,-xi.x,_i.z,0,-_i.x,ki.z,0,-ki.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-ki.y,ki.x,0];return!Ya(e,fs,ps,ms,ro)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,fs,ps,ms,ro))?!1:(oo.crossVectors(xi,_i),e=[oo.x,oo.y,oo.z],Ya(e,fs,ps,ms,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new S,new S,new S,new S,new S,new S,new S,new S],Rn=new S,so=new be,fs=new S,ps=new S,ms=new S,xi=new S,_i=new S,ki=new S,hr=new S,ro=new S,oo=new S,Hi=new S;function Ya(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Um=new be,ur=new S,Za=new S,Hs=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Za)),this.expandByPoint(ur.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new S,ja=new S,ao=new S,yi=new S,Ja=new S,co=new S,Ka=new S,ji=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=yi.dot(this.direction),c=-yi.dot(ao),l=yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(ao,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){Ja.subVectors(e,t),co.subVectors(n,t),Ka.crossVectors(Ja,co);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let c=a*this.direction.dot(co.crossVectors(yi,co));if(c<0)return null;let l=a*this.direction.dot(Ja.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(Ka);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nm,t,Om)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),lo.crossVectors(cn,vi),s[0]=vi.x,s[4]=lo.x,s[8]=cn.x,s[1]=vi.y,s[5]=lo.y,s[9]=cn.y,s[2]=vi.z,s[6]=lo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],_=n[11],I=n[15],A=s[0],C=s[4],U=s[8],w=s[12],v=s[1],P=s[5],V=s[9],k=s[13],L=s[2],N=s[6],O=s[10],$=s[14],H=s[3],Q=s[7],et=s[11],ct=s[15];return r[0]=o*A+a*v+c*L+l*H,r[4]=o*C+a*P+c*N+l*Q,r[8]=o*U+a*V+c*O+l*et,r[12]=o*w+a*k+c*$+l*ct,r[1]=h*A+u*v+d*L+f*H,r[5]=h*C+u*P+d*N+f*Q,r[9]=h*U+u*V+d*O+f*et,r[13]=h*w+u*k+d*$+f*ct,r[2]=g*A+x*v+m*L+p*H,r[6]=g*C+x*P+m*N+p*Q,r[10]=g*U+x*V+m*O+p*et,r[14]=g*w+x*k+m*$+p*ct,r[3]=y*A+M*v+_*L+I*H,r[7]=y*C+M*P+_*N+I*Q,r[11]=y*U+M*V+_*O+I*et,r[15]=y*w+M*k+_*$+I*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,M=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,I=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,A=e*y+n*M+s*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=M*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=_*C,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,M=c*h,_=c*u,I=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-y)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,g,x;if(a===si)g=(o+r)*u,x=-2*u;else if(a===Bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new S,Cn=new jt,Nm=new S(0,0,0),Om=new S(1,1,1),vi=new S,lo=new S,cn=new S,Uu=new jt,Nu=new Vt,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fm=0,Ou=new S,xs=new Vt,Jn=new jt,ho=new S,dr=new S,zm=new S,Bm=new Vt,Fu=new S(1,0,0),zu=new S(0,1,0),Bu=new S(0,0,1),ku={type:"added"},km={type:"removed"},_s={type:"childadded",child:null},Qa={type:"childremoved",child:null},ve=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new S,e=new Mn,n=new Vt,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(dr,ho,this.up):Jn.lookAt(ho,dr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Jn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new S(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new S,Kn=new S,tc=new S,Qn=new S,ys=new S,vs=new S,Hu=new S,ec=new S,nc=new S,ic=new S,sc=new Te,rc=new Te,oc=new Te,Si=class i{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Kn.subVectors(n,e),tc.subVectors(t,e);let o=In.dot(In),a=In.dot(Kn),c=In.dot(tc),l=Kn.dot(Kn),h=Kn.dot(tc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Kn.subVectors(t,e),In.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),vs.subVectors(r,n),ec.subVectors(t,n);let c=ys.dot(ec),l=vs.dot(ec);if(c<=0&&l<=0)return e.copy(n);nc.subVectors(t,s);let h=ys.dot(nc),u=vs.dot(nc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ys,o);ic.subVectors(t,r);let f=ys.dot(ic),g=vs.dot(ic);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(vs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Hu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Hu,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=eh(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ac(o,r,t+1/3),this.g=ac(o,r,t),this.b=ac(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return oe.fromWorkingColorSpace(We.copy(this),t),Math.round(Le(We.r*255,0,255))*65536+Math.round(Le(We.g*255,0,255))*256+Math.round(Le(We.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=$e){oe.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(uo);let n=_r(Mi.h,uo.h,e),s=_r(Mi.s,uo.s,e),r=_r(Mi.l,uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Wt;Wt.NAMES=$d;var Hm=0,li=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=ns(),this.name="",this.blending=Cs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=wc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hi=class extends li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new S,fo=new rt,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wu&&(t.usage=this.usage),t}};var Vo=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Go=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vm=0,yn=new jt,cc=new ve,Ms=new S,ln=new be,fr=new be,Be=new S,Me=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?Go:Vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,fr.min),ln.expandByPoint(Be),Be.addVectors(ln.max,fr.max),ln.expandByPoint(Be)):(ln.expandByPoint(fr.min),ln.expandByPoint(fr.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(t,l),Be.add(Ms)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new S,c[U]=new S;let l=new S,h=new S,u=new S,d=new rt,f=new rt,g=new rt,x=new S,m=new S;function p(U,w,v){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[U].add(x),a[w].add(x),a[v].add(x),c[U].add(m),c[w].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,w=y.length;U<w;++U){let v=y[U],P=v.start,V=v.count;for(let k=P,L=P+V;k<L;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new S,_=new S,I=new S,A=new S;function C(U){I.fromBufferAttribute(s,U),A.copy(I);let w=a[U];M.copy(w),M.sub(I.multiplyScalar(I.dot(w))).normalize(),_.crossVectors(A,w);let P=_.dot(c[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,P)}for(let U=0,w=y.length;U<w;++U){let v=y[U],P=v.start,V=v.count;for(let k=P,L=P+V;k<L;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new jt,Vi=new ji,po=new Hs,Gu=new S,mo=new S,go=new S,xo=new S,lc=new S,_o=new S,Wu=new S,yo=new S,gt=class extends ve{constructor(t=new Me,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(lc.fromBufferAttribute(u,t),o?_o.addScaledVector(lc,h):_o.addScaledVector(lc.sub(e),h))}e.add(_o)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(po.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(po,Gu)===null||Vi.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(Vu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,I=M;_<I;_+=3){let A=a.getX(_),C=a.getX(_+1),U=a.getX(_+2);s=vo(this,p,t,n,l,h,u,A,C,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=vo(this,o,t,n,l,h,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,I=M;_<I;_+=3){let A=_,C=_+1,U=_+2;s=vo(this,p,t,n,l,h,u,A,C,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,M=m+1,_=m+2;s=vo(this,o,t,n,l,h,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gm(i,t,e,n,s,r,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ti,a),c===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(yo);return l<e.near||l>e.far?null:{distance:l,point:yo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,mo),i.getVertexPosition(c,go),i.getVertexPosition(l,xo);let h=Gm(i,t,e,n,mo,go,xo,Wu);if(h){let u=new S;Si.getBarycoord(Wu,mo,go,xo,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,c,l,u,new rt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,c,l,u,new rt)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new S,materialIndex:0};Si.getNormal(mo,go,xo,d.normal),h.face=d,h.barycoord=u}return h}var Ce=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(x,m,p,y,M,_,I,A,C,U,w){let v=_/C,P=I/U,V=_/2,k=I/2,L=A/2,N=C+1,O=U+1,$=0,H=0,Q=new S;for(let et=0;et<O;et++){let ct=et*P-k;for(let dt=0;dt<N;dt++){let It=dt*v-V;Q[x]=It*y,Q[m]=ct*M,Q[p]=L,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(dt/C),u.push(1-et/U),$+=1}}for(let et=0;et<U;et++)for(let ct=0;ct<C;ct++){let dt=d+ct+N*et,It=d+ct+N*(et+1),X=d+(ct+1)+N*(et+1),J=d+(ct+1)+N*et;c.push(dt,It,J),c.push(It,X,J),H+=6}a.addGroup(f,H,w),f+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Wm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var $m={clone:Vs,merge:Ke},Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wo=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new S,$u=new rt,Xu=new rt,Qe=class extends Wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Xu),e.subVectors(Xu,$u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,Ss=1,ll=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(bs,Ss,t,e);s.layers=this.layers,this.add(s);let r=new Qe(bs,Ss,t,e);r.layers=this.layers,this.add(r);let o=new Qe(bs,Ss,t,e);o.layers=this.layers,this.add(o);let a=new Qe(bs,Ss,t,e);a.layers=this.layers,this.add(a);let c=new Qe(bs,Ss,t,e);c.layers=this.layers,this.add(c);let l=new Qe(bs,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ce(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:wi});r.uniforms.tEquirect.value=e;let o=new gt(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=vn),new ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},hc=new S,Ym=new S,Zm=new qt,hn=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hc.subVectors(n,e).cross(Ym.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zm.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Hs,Mo=new S,Cr=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,o=new hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+y).normalize(),n[3].setComponents(c-o,d-h,m-g,_-y).normalize(),n[4].setComponents(c-a,d-u,m-x,_-M).normalize(),e===si)n[5].setComponents(c+a,d+u,m+x,_+M).normalize();else if(e===Bo)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ai=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let M=0;M<l;M++){let _=M*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let M=y+l*p,_=y+l*(p+1),I=y+1+l*(p+1),A=y+1+l*p;f.push(M,_,A),f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:Qm,alphamap_pars_fragment:tg,alphatest_fragment:eg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:cg,bsdfs:lg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:xg,color_pars_vertex:_g,color_vertex:yg,common:vg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Sg,displacementmap_vertex:wg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Dg,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Og,fog_pars_fragment:Fg,gradientmap_pars_fragment:zg,lightmap_pars_fragment:Bg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:$g,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:Zg,lights_fragment_begin:jg,lights_fragment_maps:Jg,lights_fragment_end:Kg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:c0,morphinstance_vertex:l0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:_0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:w0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:z0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:$0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:j0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:Q0,cube_vert:tx,cube_frag:ex,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:sx,distanceRGBA_frag:rx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:cx,linedashed_frag:lx,meshbasic_vert:hx,meshbasic_frag:ux,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:_x,meshphong_frag:yx,meshphysical_vert:vx,meshphysical_frag:Mx,meshtoon_vert:bx,meshtoon_frag:Sx,points_vert:wx,points_frag:Ex,shadow_vert:Tx,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Cx},_t={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Fn={basic:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ke([_t.common,_t.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ke([_t.lights,_t.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Fn.physical={uniforms:Ke([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var bo={r:0,b:0,g:0},Wi=new Mn,Ix=new jt;function Px(i,t,e,n,s,r,o){let a=new Wt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,_=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===ha)?(h===void 0&&(h=new gt(new Ce(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Vs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(M.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(Wi)),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new gt(new Ai(2,2),new Bn({name:"BackgroundMaterial",uniforms:Vs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(bo,Xd(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Lx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,P,V,k,L){let N=!1,O=u(k,V,P);r!==O&&(r=O,l(r.object)),N=f(v,k,V,L),N&&g(v,k,V,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(v,P,V,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,V){let k=V.wireframe===!0,L=n[v.id];L===void 0&&(L={},n[v.id]=L);let N=L[P.id];N===void 0&&(N={},L[P.id]=N);let O=N[k];return O===void 0&&(O=d(c()),N[k]=O),O}function d(v){let P=[],V=[],k=[];for(let L=0;L<e;L++)P[L]=0,V[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,P,V,k){let L=r.attributes,N=P.attributes,O=0,$=V.getAttributes();for(let H in $)if($[H].location>=0){let et=L[H],ct=N[H];if(ct===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;O++}return r.attributesNum!==O||r.index!==k}function g(v,P,V,k){let L={},N=P.attributes,O=0,$=V.getAttributes();for(let H in $)if($[H].location>=0){let et=N[H];et===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));let ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),L[H]=ct,O++}r.attributes=L,r.attributesNum=O,r.index=k}function x(){let v=r.newAttributes;for(let P=0,V=v.length;P<V;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){let V=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;V[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),L[v]!==P&&(i.vertexAttribDivisor(v,P),L[v]=P)}function y(){let v=r.newAttributes,P=r.enabledAttributes;for(let V=0,k=P.length;V<k;V++)P[V]!==v[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function M(v,P,V,k,L,N,O){O===!0?i.vertexAttribIPointer(v,P,V,L,N):i.vertexAttribPointer(v,P,V,k,L,N)}function _(v,P,V,k){x();let L=k.attributes,N=V.getAttributes(),O=P.defaultAttributeValues;for(let $ in N){let H=N[$];if(H.location>=0){let Q=L[$];if(Q===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){let et=Q.normalized,ct=Q.itemSize,dt=t.get(Q);if(dt===void 0)continue;let It=dt.buffer,X=dt.type,J=dt.bytesPerElement,ft=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===Zl;if(Q.isInterleavedBufferAttribute){let lt=Q.data,Ft=lt.stride,$t=Q.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)p(H.location+Ht,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Ht=0;Ht<H.locationSize;Ht++)M(H.location+Ht,ct/H.locationSize,X,et,Ft*J,($t+ct/H.locationSize*Ht)*J,ft)}else{if(Q.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,Q.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let lt=0;lt<H.locationSize;lt++)M(H.location+lt,ct/H.locationSize,X,et,ct*J,ct/H.locationSize*lt*J,ft)}}else if(O!==void 0){let et=O[$];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}y()}function I(){U();for(let v in n){let P=n[v];for(let V in P){let k=P[V];for(let L in k)h(k[L].object),delete k[L];delete P[V]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let V in P){let k=P[V];for(let L in k)h(k[L].object),delete k[L];delete P[V]}delete n[v.id]}function C(v){for(let P in n){let V=n[P];if(V[v.id]===void 0)continue;let k=V[v.id];for(let L in k)h(k[L].object),delete k[L];delete V[v.id]}}function U(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Dx(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ux(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let U=C===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!U)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function Nx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new hn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,M=y*4,_=p.clippingState||null;c.value=_,_=h(g,d,M,f);for(let I=0;I!==M;++I)_[I]=e[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ox(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=Ns:a===Dc&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lc||a===Dc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new hl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xo=class extends Wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},As=4,qu=[.125,.215,.35,.446,.526,.582],Yi=20,uc=new Xo,Yu=new Wt,dc=null,fc=0,pc=0,mc=!1,Xi=(1+Math.sqrt(5))/2,ws=1/Xi,Zu=[new S(-Xi,ws,0),new S(Xi,ws,0),new S(-ws,0,Xi),new S(ws,0,Xi),new S(0,Xi,-ws),new S(0,Xi,ws),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Fr,format:dn,colorSpace:Js,depthBuffer:!1},s=ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(r)),this._blurMaterial=zx(r,t,e)}return s}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,n,s){let a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ei,h.autoClear=!1;let f=new hi({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new gt(new Ce,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Yu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;So(s,y*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ns||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;So(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,uc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(s-r-1)%Zu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let p=[],y=0;for(let C=0;C<Yi;++C){let U=C/x,w=Math.exp(-U*U/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let _=this._sizeLods[s],I=3*_*(s>M-As?s-M+As:0),A=4*(this._cubeSize-_);So(e,I,A,3*_,2*_),c.setRenderTarget(e),c.render(u,uc)}};function Fx(i){let t=[],e=[],n=[],s=i,r=i-As+1+qu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=qu[o-i+As-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,U=A>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(w,x*g*A),M.set(d,m*g*A);let v=[A,A,A,A,A,A];_.set(v,p*g*A)}let I=new Me;I.setAttribute("position",new Re(y,x)),I.setAttribute("uv",new Re(M,m)),I.setAttribute("faceIndex",new Re(_,p)),t.push(I),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ju(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zx(i,t,e){let n=new Float32Array(Yi),s=new S(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ju(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ku(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lc||c===Dc,h=c===Ns||c===Os;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new qo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let I=y[M+0],A=y[M+1],C=y[M+2];d.push(I,A,A,C,C,I)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let I=M+0,A=M+1,C=M+2;d.push(I,A,A,C,C,I)}}else return;let m=new(Wd(d)?Go:Vo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Vx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wx(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*I*4*u),C=new Ho(A,_,I,u);C.type=ii,C.needsUpdate=!0;let U=M*4;for(let v=0;v<u;v++){let P=m[v],V=p[v],k=y[v],L=_*I*4*v;for(let N=0;N<P.count;N++){let O=N*U;f===!0&&(s.fromBufferAttribute(P,N),A[L+O+0]=s.x,A[L+O+1]=s.y,A[L+O+2]=s.z,A[L+O+3]=0),g===!0&&(s.fromBufferAttribute(V,N),A[L+O+4]=s.x,A[L+O+5]=s.y,A[L+O+6]=s.z,A[L+O+7]=0),x===!0&&(s.fromBufferAttribute(k,N),A[L+O+8]=s.x,A[L+O+9]=s.y,A[L+O+10]=s.z,A[L+O+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new rt(_,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Yo=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h=Is){if(h!==Is&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Zi),n===void 0&&h===zs&&(n=Fs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yd=new pn,Qu=new Yo(1,1),Zd=new Ho,jd=new cl,Jd=new $o,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Ue(e,n)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Ue(e,n)}}function Kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Ue(e,n)}}function Qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function a_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=Gd,r=Qu):r=Yd,e.setTexture2D(t||r,s)}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jd,s)}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jd,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zd,s)}function u_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return jx;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(i,t){i.uniform1fv(this.addr,t)}function f_(i,t){let e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function p_(i,t){let e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function m_(i,t){let e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function g_(i,t){let e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function x_(i,t){let e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function __(i,t){let e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y_(i,t){i.uniform1iv(this.addr,t)}function v_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function S_(i,t){i.uniform1uiv(this.addr,t)}function w_(i,t){i.uniform2uiv(this.addr,t)}function E_(i,t){i.uniform3uiv(this.addr,t)}function T_(i,t){i.uniform4uiv(this.addr,t)}function A_(i,t,e){let n=this.cache,s=t.length,r=da(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yd,r[o])}function R_(i,t,e){let n=this.cache,s=t.length,r=da(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function C_(i,t,e){let n=this.cache,s=t.length,r=da(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jd,r[o])}function I_(i,t,e){let n=this.cache,s=t.length,r=da(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zd,r[o])}function P_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return w_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return I_}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u_(e.type)}},dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function L_(i,t,e){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),o=gc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rd(e,l===void 0?new ul(a,i,t):new dl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fl(a),rd(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);L_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var D_=37297,U_=0;function N_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new qt;function O_(i){oe._getMatrix(ad,oe.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+N_(i.getShaderSource(t),o)}else return s}function F_(i,t){let e=O_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z_(i,t){let e;switch(t){case Jp:e="Linear";break;case Kp:e="Reinhard";break;case Qp:e="Cineon";break;case Xl:e="ACESFilmic";break;case em:e="AgX";break;case ql:e="Neutral";break;case tm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new S;function B_(){oe.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function H_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(G_,$_)}var W_=new Map;function $_(i,t){let e=Kt[t];if(e===void 0){let n=W_.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(X_,q_)}function q_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function J_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Id:t="ENVMAP_BLENDING_MULTIPLY";break;case Zp:t="ENVMAP_BLENDING_MIX";break;case jp:t="ENVMAP_BLENDING_ADD";break}return t}function K_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Y_(e),l=Z_(e),h=j_(e),u=J_(e),d=K_(e),f=k_(e),g=H_(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,F_("linearToOutputTexel",e.outputColorSpace),B_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=pl(o),o=ld(o,e),o=hd(o,e),a=pl(a),a=ld(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+o,_=y+p+a,I=od(s,s.VERTEX_SHADER,M),A=od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(I).trim(),L=s.getShaderInfoLog(A).trim(),N=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let $=cd(s,I,"vertex"),H=cd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+$+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||L==="")&&(O=!1);O&&(P.diagnostics={runnable:N,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(I),s.deleteShader(A),U=new Ds(s,x),w=V_(s,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,D_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var ty=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=ty++,this.code=t,this.usedTimes=0}};function ey(i,t,e,n,s,r,o){let a=new Rr,c=new ml,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,P,V,k){let L=V.fog,N=k.geometry,O=w.isMeshStandardMaterial?V.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),H=$&&$.mapping===ha?$.image.height:null,Q=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=et!==void 0?et.length:0,dt=0;N.morphAttributes.position!==void 0&&(dt=1),N.morphAttributes.normal!==void 0&&(dt=2),N.morphAttributes.color!==void 0&&(dt=3);let It,X,J,ft;if(Q){let he=Fn[Q];It=he.vertexShader,X=he.fragmentShader}else It=w.vertexShader,X=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),ft=c.getFragmentShaderID(w);let lt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),$t=k.isInstancedMesh===!0,Ht=k.isBatchedMesh===!0,re=!!w.map,nt=!!w.matcap,ht=!!$,D=!!w.aoMap,Ut=!!w.lightMap,ot=!!w.bumpMap,Tt=!!w.normalMap,mt=!!w.displacementMap,Bt=!!w.emissiveMap,wt=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,G=w.clearcoat>0,j=w.dispersion>0,st=w.iridescence>0,K=w.sheen>0,Ct=w.transmission>0,yt=b&&!!w.anisotropyMap,Et=G&&!!w.clearcoatMap,ee=G&&!!w.clearcoatNormalMap,at=G&&!!w.clearcoatRoughnessMap,At=st&&!!w.iridescenceMap,kt=st&&!!w.iridescenceThicknessMap,Gt=K&&!!w.sheenColorMap,Rt=K&&!!w.sheenRoughnessMap,ie=!!w.specularMap,Jt=!!w.specularColorMap,ge=!!w.specularIntensityMap,F=Ct&&!!w.transmissionMap,vt=Ct&&!!w.thicknessMap,Z=!!w.gradientMap,tt=!!w.alphaMap,St=w.alphaTest>0,Mt=!!w.alphaHash,Yt=!!w.extensions,Ee=Ei;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let Ve={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:It,fragmentShader:X,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&k._colorsTexture!==null,instancing:$t,instancingColor:$t&&k.instanceColor!==null,instancingMorph:$t&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Js,alphaToCoverage:!!w.alphaToCoverage,map:re,matcap:nt,envMap:ht,envMapMode:ht&&$.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Ut,bumpMap:ot,normalMap:Tt,displacementMap:d&&mt,emissiveMap:Bt,normalMapObjectSpace:Tt&&w.normalMapType===sm,normalMapTangentSpace:Tt&&w.normalMapType===Vd,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:yt,clearcoat:G,clearcoatMap:Et,clearcoatNormalMap:ee,clearcoatRoughnessMap:at,dispersion:j,iridescence:st,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:K,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:ie,specularColorMap:Jt,specularIntensityMap:ge,transmission:Ct,transmissionMap:F,thicknessMap:vt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Cs&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:St,alphaHash:Mt,combine:w.combine,mapUv:re&&x(w.map.channel),aoMapUv:D&&x(w.aoMap.channel),lightMapUv:Ut&&x(w.lightMap.channel),bumpMapUv:ot&&x(w.bumpMap.channel),normalMapUv:Tt&&x(w.normalMap.channel),displacementMapUv:mt&&x(w.displacementMap.channel),emissiveMapUv:Bt&&x(w.emissiveMap.channel),metalnessMapUv:wt&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:yt&&x(w.anisotropyMap.channel),clearcoatMapUv:Et&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(w.sheenRoughnessMap.channel),specularMapUv:ie&&x(w.specularMap.channel),specularColorMapUv:Jt&&x(w.specularColorMap.channel),specularIntensityMapUv:ge&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:vt&&x(w.thicknessMap.channel),alphaMapUv:tt&&x(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Tt||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(re||tt),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:re&&w.map.isVideoTexture===!0&&oe.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&oe.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===un,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Yt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&w.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function p(w){let v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(v,w),M(v,w),v.push(i.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let v=g[w.type],P;if(v){let V=Fn[v];P=$m.clone(V.uniforms)}else P=w.uniforms;return P}function I(w,v){let P;for(let V=0,k=h.length;V<k;V++){let L=h[V];if(L.cacheKey===v){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Q_(i,v,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){let v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function ny(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||iy),n.length>1&&n.sort(d||fd),s.length>1&&s.sort(d||fd)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function sy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new Wt};break;case"SpotLight":e={position:new S,direction:new S,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ay=0;function cy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ly(i){let t=new ry,e=oy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let s=new S,r=new jt,o=new jt;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,M=0,_=0,I=0,A=0,C=0;l.sort(cy);for(let w=0,v=l.length;w<v;w++){let P=l[w],V=P.color,k=P.intensity,L=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*k,u+=V.g*k,d+=V.b*k;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],k);C++}else if(P.isDirectionalLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=O,f++}else if(P.isSpotLight){let O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(V).multiplyScalar(k),O.distance=L,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[x]=O;let $=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,$.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=$.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=N,_++}x++}else if(P.isRectAreaLight){let O=t.get(P);O.color.copy(V).multiplyScalar(k),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=O,m++}else if(P.isPointLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=O,g++}else if(P.isHemisphereLight){let O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(k),O.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==y||U.numPointShadows!==M||U.numSpotShadows!==_||U.numSpotMaps!==I||U.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=y,U.numPointShadows=M,U.numSpotShadows=_,U.numSpotMaps=I,U.numLightProbes=C,n.version=ay++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let M=l[p];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function md(i){let t=new ly(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(i),t.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xl=class extends li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_l=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fy(i,t,e){let n=new Cr,s=new rt,r=new rt,o=new Te,a=new xl({depthPacking:im}),c=new _l,l={},h=e.maxTextureSize,u={[Ti]:sn,[sn]:Ti,[un]:un},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(wi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let k=p!==ti&&this.type===ti,L=p===ti&&this.type!==ti;for(let N=0,O=A.length;N<O;N++){let $=A[N],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();if(s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y)),H.map===null||k===!0||L===!0){let ct=this.type!==ti?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new ci(s.x,s.y,ct),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let et=H.getViewportCount();for(let ct=0;ct<et;ct++){let dt=H.getViewport(ct);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),V.viewport(o),H.updateMatrices($,ct),n=H.getFrustum(),_(C,U,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ti&&y(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,v,P)};function y(A,C){let U=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,U,f,x,null)}function M(A,C,U,w){let v=null,P=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=U.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let V=v.uuid,k=C.uuid,L=l[V];L===void 0&&(L={},l[V]=L);let N=L[k];N===void 0&&(N=v.clone(),L[k]=N,C.addEventListener("dispose",I)),v=N}if(v.visible=C.visible,v.wireframe=C.wireframe,w===ti?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=i.properties.get(v);V.light=U}return v}function _(A,C,U,w,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ti)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let k=t.update(A),L=A.material;if(Array.isArray(L)){let N=k.groups;for(let O=0,$=N.length;O<$;O++){let H=N[O],Q=L[H.materialIndex];if(Q&&Q.visible){let et=M(A,Q,w,v);A.onBeforeShadow(i,A,C,U,k,et,H),i.renderBufferDirect(U,null,k,et,A,H),A.onAfterShadow(i,A,C,U,k,et,H)}}}else if(L.visible){let N=M(A,L,w,v);A.onBeforeShadow(i,A,C,U,k,N,null),i.renderBufferDirect(U,null,k,N,A,null),A.onAfterShadow(i,A,C,U,k,N,null)}}let V=A.children;for(let k=0,L=V.length;k<L;k++)_(V[k],C,U,w,v)}function I(A){A.target.removeEventListener("dispose",I);for(let U in l){let w=l[U],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}var py={[Ec]:Tc,[Ac]:Ic,[Rc]:Pc,[Us]:Cc,[Tc]:Ec,[Ic]:Ac,[Pc]:Rc,[Cc]:Us};function my(i,t){function e(){let F=!1,vt=new Te,Z=null,tt=new Te(0,0,0,0);return{setMask:function(St){Z!==St&&!F&&(i.colorMask(St,St,St,St),Z=St)},setLocked:function(St){F=St},setClear:function(St,Mt,Yt,Ee,Ve){Ve===!0&&(St*=Ee,Mt*=Ee,Yt*=Ee),vt.set(St,Mt,Yt,Ee),tt.equals(vt)===!1&&(i.clearColor(St,Mt,Yt,Ee),tt.copy(vt))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,Z=null,tt=null,St=null;return{setReversed:function(Mt){if(vt!==Mt){let Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=St;St=null,this.setClear(Ee)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?lt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!F&&(i.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(vt&&(Mt=py[Mt]),tt!==Mt){switch(Mt){case Ec:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Mt}},setLocked:function(Mt){F=Mt},setClear:function(Mt){St!==Mt&&(vt&&(Mt=1-Mt),i.clearDepth(Mt),St=Mt)},reset:function(){F=!1,Z=null,tt=null,St=null,vt=!1}}}function s(){let F=!1,vt=null,Z=null,tt=null,St=null,Mt=null,Yt=null,Ee=null,Ve=null;return{setTest:function(he){F||(he?lt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!F&&(i.stencilMask(he),vt=he)},setFunc:function(he,Tn,qn){(Z!==he||tt!==Tn||St!==qn)&&(i.stencilFunc(he,Tn,qn),Z=he,tt=Tn,St=qn)},setOp:function(he,Tn,qn){(Mt!==he||Yt!==Tn||Ee!==qn)&&(i.stencilOp(he,Tn,qn),Mt=he,Yt=Tn,Ee=qn)},setLocked:function(he){F=he},setClear:function(he){Ve!==he&&(i.clearStencil(he),Ve=he)},reset:function(){F=!1,vt=null,Z=null,tt=null,St=null,Mt=null,Yt=null,Ee=null,Ve=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,I=null,A=null,C=new Wt(0,0,0),U=0,w=!1,v=null,P=null,V=null,k=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=$>=2);let Q=null,et={},ct=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),It=new Te().fromArray(ct),X=new Te().fromArray(dt);function J(F,vt,Z,tt){let St=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(F,Mt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Z;Yt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Mt}let ft={};ft[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Us),ot(!1),Tt(gu),lt(i.CULL_FACE),D(wi);function lt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ft(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function $t(F,vt){return u[F]!==vt?(i.bindFramebuffer(F,vt),u[F]=vt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ht(F,vt){let Z=f,tt=!1;if(F){Z=d.get(vt),Z===void 0&&(Z=[],d.set(vt,Z));let St=F.textures;if(Z.length!==St.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Yt=St.length;Mt<Yt;Mt++)Z[Mt]=i.COLOR_ATTACHMENT0+Mt;Z.length=St.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function re(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let nt={[qi]:i.FUNC_ADD,[Lp]:i.FUNC_SUBTRACT,[Dp]:i.FUNC_REVERSE_SUBTRACT};nt[Up]=i.MIN,nt[Np]=i.MAX;let ht={[Op]:i.ZERO,[Fp]:i.ONE,[zp]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Wp]:i.SRC_ALPHA_SATURATE,[Vp]:i.DST_COLOR,[kp]:i.DST_ALPHA,[Bp]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[Gp]:i.ONE_MINUS_DST_COLOR,[Hp]:i.ONE_MINUS_DST_ALPHA,[$p]:i.CONSTANT_COLOR,[Xp]:i.ONE_MINUS_CONSTANT_COLOR,[qp]:i.CONSTANT_ALPHA,[Yp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(F,vt,Z,tt,St,Mt,Yt,Ee,Ve,he){if(F===wi){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),F!==Pp){if(F!==m||he!==w){if((p!==qi||_!==qi)&&(i.blendEquation(i.FUNC_ADD),p=qi,_=qi),he)switch(F){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,I=null,A=null,C.set(0,0,0),U=0,m=F,w=he}return}St=St||vt,Mt=Mt||Z,Yt=Yt||tt,(vt!==p||St!==_)&&(i.blendEquationSeparate(nt[vt],nt[St]),p=vt,_=St),(Z!==y||tt!==M||Mt!==I||Yt!==A)&&(i.blendFuncSeparate(ht[Z],ht[tt],ht[Mt],ht[Yt]),y=Z,M=tt,I=Mt,A=Yt),(Ee.equals(C)===!1||Ve!==U)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Ve),C.copy(Ee),U=Ve),m=F,w=!1}function Ut(F,vt){F.side===un?Ft(i.CULL_FACE):lt(i.CULL_FACE);let Z=F.side===sn;vt&&(Z=!Z),ot(Z),F.blending===Cs&&F.transparent===!1?D(wi):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function Tt(F){F!==Cp?(lt(i.CULL_FACE),F!==P&&(F===gu?i.cullFace(i.BACK):F===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=F}function mt(F){F!==V&&(O&&i.lineWidth(F),V=F)}function Bt(F,vt,Z){F?(lt(i.POLYGON_OFFSET_FILL),(k!==vt||L!==Z)&&(i.polygonOffset(vt,Z),k=vt,L=Z)):Ft(i.POLYGON_OFFSET_FILL)}function wt(F){F?lt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+N-1),Q!==F&&(i.activeTexture(F),Q=F)}function b(F,vt,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+N-1:Z=Q);let tt=et[Z];tt===void 0&&(tt={type:void 0,texture:void 0},et[Z]=tt),(tt.type!==F||tt.texture!==vt)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(F,vt||ft[F]),tt.type=F,tt.texture=vt)}function G(){let F=et[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){It.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),It.copy(F))}function Rt(F){X.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function ie(F,vt){let Z=l.get(vt);Z===void 0&&(Z=new WeakMap,l.set(vt,Z));let tt=Z.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(vt,F.name),Z.set(F,tt))}function Jt(F,vt){let tt=l.get(vt).get(F);c.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,F.__bindingPointIndex),c.set(vt,tt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,et={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,I=null,A=null,C=new Wt(0,0,0),U=0,w=!1,v=null,P=null,V=null,k=null,L=null,It.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ft,bindFramebuffer:$t,drawBuffers:Ht,useProgram:re,setBlending:D,setMaterial:Ut,setFlipSided:ot,setCullFace:Tt,setLineWidth:mt,setPolygonOffset:Bt,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:At,texImage3D:kt,updateUBOMapping:ie,uniformBlockBinding:Jt,texStorage2D:ee,texStorage3D:at,texSubImage2D:K,texSubImage3D:Ct,compressedTexSubImage2D:yt,compressedTexSubImage3D:Et,scissor:Gt,viewport:Rt,reset:ge}}function gd(i,t,e,n){let s=gy(n);switch(e){case Nd:return i*t;case Fd:return i*t;case zd:return i*t*2;case Bd:return i*t/s.components*s.byteLength;case Kl:return i*t/s.components*s.byteLength;case kd:return i*t*2/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case Od:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case th:return i*t*4/s.components*s.byteLength;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(i,16)*Math.max(t,8)/4;case Uc:case Oc:return Math.max(i,8)*Math.max(t,8)/2;case zc:case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hd:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gy(i){switch(i){case oi:case Ld:return{byteLength:1,components:1};case Er:case Dd:case Fr:return{byteLength:2,components:1};case jl:case Jl:return{byteLength:2,components:4};case Zi:case Zl:case ii:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):ko("canvas")}function x(R,b,G){let j=1,st=wt(R);if((st.width>G||st.height>G)&&(j=G/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let K=Math.floor(j*st.width),Ct=Math.floor(j*st.height);u===void 0&&(u=g(K,Ct));let yt=b?g(K,Ct):u;return yt.width=K,yt.height=Ct,yt.getContext("2d").drawImage(R,0,0,K,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+K+"x"+Ct+")."),yt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,b,G,j,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),b===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let Ct=st?ua:oe.getTransfer(j);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Ct===fe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(R,b){let G;return R?b===null||b===Zi||b===Fs?G=i.DEPTH24_STENCIL8:b===ii?G=i.DEPTH32F_STENCIL8:b===Er&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Fs?G=i.DEPTH_COMPONENT24:b===ii?G=i.DEPTH_COMPONENT32F:b===Er&&(G=i.DEPTH_COMPONENT16),G}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),U(b),b.isVideoTexture&&h.delete(b)}function C(R){let b=R.target;b.removeEventListener("dispose",C),v(b)}function U(R){let b=n.get(R);if(b.__webglInit===void 0)return;let G=R.source,j=d.get(G);if(j){let st=j[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(R),Object.keys(j).length===0&&d.delete(G)}n.remove(R)}function w(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let G=R.source,j=d.get(G);delete j[b.__cacheKey],o.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let st=0;st<b.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[j][st]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=R.textures;for(let j=0,st=G.length;j<st;j++){let K=n.get(G[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(R)}let P=0;function V(){P=0}function k(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function L(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function N(R,b){let G=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,R,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function O(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){X(G,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function $(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){X(G,R,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function H(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let Q={[Sr]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},et={[fn]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},ct={[rm]:i.NEVER,[um]:i.ALWAYS,[om]:i.LESS,[Gd]:i.LEQUAL,[am]:i.EQUAL,[hm]:i.GEQUAL,[cm]:i.GREATER,[lm]:i.NOTEQUAL};function dt(R,b){if(b.type===ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===vn||b.magFilter===xr||b.magFilter===Ts||b.magFilter===ni||b.minFilter===vn||b.minFilter===xr||b.minFilter===Ts||b.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,et[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==Ts&&b.minFilter!==ni||b.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function It(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let j=b.source,st=d.get(j);st===void 0&&(st={},d.set(j,st));let K=L(b);if(K!==R.__cacheKey){st[K]===void 0&&(st[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[K].usedTimes++;let Ct=st[R.__cacheKey];Ct!==void 0&&(st[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(b)),R.__cacheKey=K,R.__webglTexture=st[K].texture}return G}function X(R,b,G){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);let st=It(R,b),K=b.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+G);let Ct=n.get(K);if(K.version!==Ct.__version||st===!0){e.activeTexture(i.TEXTURE0+G);let yt=oe.getPrimaries(oe.workingColorSpace),Et=b.colorSpace===zn?null:oe.getPrimaries(b.colorSpace),ee=b.colorSpace===zn||yt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let at=x(b.image,!1,s.maxTextureSize);at=Bt(b,at);let At=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Gt=M(b.internalFormat,At,kt,b.colorSpace,b.isVideoTexture);dt(j,b);let Rt,ie=b.mipmaps,Jt=b.isVideoTexture!==!0,ge=Ct.__version===void 0||st===!0,F=K.dataReady,vt=I(b,at);if(b.isDepthTexture)Gt=_(b.format===zs,b.type),ge&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Gt,at.width,at.height,0,At,kt,null));else if(b.isDataTexture)if(ie.length>0){Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Z=0,tt=ie.length;Z<tt;Z++)Rt=ie[Z],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,At,kt,Rt.data):e.texImage2D(i.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,At,kt,Rt.data);b.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,at.width,at.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,At,kt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,at.width,at.height,0,At,kt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,at.depth);for(let Z=0,tt=ie.length;Z<tt;Z++)if(Rt=ie[Z],b.format!==dn)if(At!==null)if(Jt){if(F)if(b.layerUpdates.size>0){let St=gd(Rt.width,Rt.height,b.format,b.type);for(let Mt of b.layerUpdates){let Yt=Rt.data.subarray(Mt*St/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Mt,Rt.width,Rt.height,1,At,Yt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,at.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Gt,Rt.width,Rt.height,at.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,at.depth,At,kt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Gt,Rt.width,Rt.height,at.depth,0,At,kt,Rt.data)}else{Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Z=0,tt=ie.length;Z<tt;Z++)Rt=ie[Z],b.format!==dn?At!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,At,kt,Rt.data):e.texImage2D(i.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,At,kt,Rt.data)}else if(b.isDataArrayTexture)if(Jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,at.width,at.height,at.depth),F)if(b.layerUpdates.size>0){let Z=gd(at.width,at.height,b.format,b.type);for(let tt of b.layerUpdates){let St=at.data.subarray(tt*Z/at.data.BYTES_PER_ELEMENT,(tt+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,At,kt,St)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,At,kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,at.width,at.height,at.depth,0,At,kt,at.data);else if(b.isData3DTexture)Jt?(ge&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,At,kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,at.width,at.height,at.depth,0,At,kt,at.data);else if(b.isFramebufferTexture){if(ge)if(Jt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,at.width,at.height);else{let Z=at.width,tt=at.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,Z,tt,0,At,kt,null),Z>>=1,tt>>=1}}else if(ie.length>0){if(Jt&&ge){let Z=wt(ie[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Z.width,Z.height)}for(let Z=0,tt=ie.length;Z<tt;Z++)Rt=ie[Z],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At,kt,Rt):e.texImage2D(i.TEXTURE_2D,Z,Gt,At,kt,Rt);b.generateMipmaps=!1}else if(Jt){if(ge){let Z=wt(at);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Z.width,Z.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,kt,at)}else e.texImage2D(i.TEXTURE_2D,0,Gt,At,kt,at);m(b)&&p(j),Ct.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,G){if(b.image.length!==6)return;let j=It(R,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let K=n.get(st);if(st.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+G);let Ct=oe.getPrimaries(oe.workingColorSpace),yt=b.colorSpace===zn?null:oe.getPrimaries(b.colorSpace),Et=b.colorSpace===zn||Ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ee=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,At=[];for(let tt=0;tt<6;tt++)!ee&&!at?At[tt]=x(b.image[tt],!0,s.maxCubemapSize):At[tt]=at?b.image[tt].image:b.image[tt],At[tt]=Bt(b,At[tt]);let kt=At[0],Gt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),ie=M(b.internalFormat,Gt,Rt,b.colorSpace),Jt=b.isVideoTexture!==!0,ge=K.__version===void 0||j===!0,F=st.dataReady,vt=I(b,kt);dt(i.TEXTURE_CUBE_MAP,b);let Z;if(ee){Jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,kt.width,kt.height);for(let tt=0;tt<6;tt++){Z=At[tt].mipmaps;for(let St=0;St<Z.length;St++){let Mt=Z[St];b.format!==dn?Gt!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,ie,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,ie,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{if(Z=b.mipmaps,Jt&&ge){Z.length>0&&vt++;let tt=wt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At[tt].width,At[tt].height,Gt,Rt,At[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ie,At[tt].width,At[tt].height,0,Gt,Rt,At[tt].data);for(let St=0;St<Z.length;St++){let Yt=Z[St].image[tt].image;Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Yt.width,Yt.height,Gt,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,ie,Yt.width,Yt.height,0,Gt,Rt,Yt.data)}}else{Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,Rt,At[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ie,Gt,Rt,At[tt]);for(let St=0;St<Z.length;St++){let Mt=Z[St];Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Gt,Rt,Mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,ie,Gt,Rt,Mt.image[tt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=st.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ft(R,b,G,j,st,K){let Ct=r.convert(G.format,G.colorSpace),yt=r.convert(G.type),Et=M(G.internalFormat,Ct,yt,G.colorSpace),ee=n.get(b),at=n.get(G);if(at.__renderTarget=b,!ee.__hasExternalTextures){let At=Math.max(1,b.width>>K),kt=Math.max(1,b.height>>K);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,K,Et,At,kt,b.depth,0,Ct,yt,null):e.texImage2D(st,K,Et,At,kt,0,Ct,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,at.__webglTexture,0,ot(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,at.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let j=b.depthTexture,st=j&&j.isDepthTexture?j.type:null,K=_(b.stencilBuffer,st),Ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ot(b);Tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,K,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let j=b.textures;for(let st=0;st<j.length;st++){let K=j[st],Ct=r.convert(K.format,K.colorSpace),yt=r.convert(K.type),Et=M(K.internalFormat,Ct,yt,K.colorSpace),ee=ot(b);G&&Tt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Et,b.width,b.height):Tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Et,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);let st=j.__webglTexture,K=ot(b);if(b.depthTexture.format===Is)Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(b.depthTexture.format===zs)Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function $t(R){let b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,R)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[j],R,!1);else{let st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,b,G){let j=n.get(R);b!==void 0&&ft(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$t(R)}function re(R){let b=R.texture,G=n.get(R),j=n.get(b);R.addEventListener("dispose",C);let st=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ct=st.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[yt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)G.__webglFramebuffer[yt][Et]=i.createFramebuffer()}else G.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let yt=0;yt<b.mipmaps.length;yt++)G.__webglFramebuffer[yt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let yt=0,Et=st.length;yt<Et;yt++){let ee=n.get(st[yt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Tt(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let yt=0;yt<st.length;yt++){let Et=st[yt];G.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[yt]);let ee=r.convert(Et.format,Et.colorSpace),at=r.convert(Et.type),At=M(Et.internalFormat,ee,at,Et.colorSpace,R.isXRRenderTarget===!0),kt=ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,G.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),dt(i.TEXTURE_CUBE_MAP,b);for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)ft(G.__webglFramebuffer[yt][Et],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Et);else ft(G.__webglFramebuffer[yt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let yt=0,Et=st.length;yt<Et;yt++){let ee=st[yt],at=n.get(ee);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),dt(i.TEXTURE_2D,ee),ft(G.__webglFramebuffer,R,ee,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,j.__webglTexture),dt(yt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)ft(G.__webglFramebuffer[Et],R,b,i.COLOR_ATTACHMENT0,yt,Et);else ft(G.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,yt,0);m(b)&&p(yt),e.unbindTexture()}R.depthBuffer&&$t(R)}function nt(R){let b=R.textures;for(let G=0,j=b.length;G<j;G++){let st=b[G];if(m(st)){let K=y(R),Ct=n.get(st).__webglTexture;e.bindTexture(K,Ct),p(K),e.unbindTexture()}}}let ht=[],D=[];function Ut(R){if(R.samples>0){if(Tt(R)===!1){let b=R.textures,G=R.width,j=R.height,st=i.COLOR_BUFFER_BIT,K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),yt=b.length>1;if(yt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let ee=n.get(b[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,st,i.NEAREST),c===!0&&(ht.length=0,D.length=0,ht.push(i.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(K),D.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let ee=n.get(b[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Bt(R,b){let G=R.colorSpace,j=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Js&&G!==zn&&(oe.getTransfer(G)===fe?(j!==dn||st!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ht,this.setupRenderTarget=re,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Tt}function _y(i,t){function e(n,s=zn){let r,o=oe.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return i.BYTE;if(n===Dd)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Nd)return i.ALPHA;if(n===Od)return i.RGB;if(n===dn)return i.RGBA;if(n===Fd)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===Bd)return i.RED;if(n===Kl)return i.RED_INTEGER;if(n===kd)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===th)return i.RGBA_INTEGER;if(n===Uo||n===No||n===Oo||n===Fo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Nc||n===Oc||n===Fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Bc||n===kc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===Bc)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc||n===$c||n===Xc||n===qc||n===Yc||n===Zc||n===jc||n===Jc||n===Kc||n===Qc||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xe=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},yy={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:vy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new vl,m=e.getContextAttributes(),p=null,y=null,M=[],_=[],I=new rt,A=null,C=new Qe;C.viewport=new Te;let U=new Qe;U.viewport=new Te;let w=[C,U],v=new yl,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=M[X];return J===void 0&&(J=new yr,M[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=M[X];return J===void 0&&(J=new yr,M[X]=J),J.getGripSpace()},this.getHand=function(X){let J=M[X];return J===void 0&&(J=new yr,M[X]=J),J.getHandSpace()};function k(X){let J=_.indexOf(X.inputSource);if(J===-1)return;let ft=M[J];ft!==void 0&&(ft.update(X.inputSource,X.frame,l||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",N);for(let X=0;X<M.length;X++){let J=_[X];J!==null&&(_[X]=null,M[X].disconnect(J))}P=null,V=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",L),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ci(f.framebufferWidth,f.framebufferHeight,{format:dn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ft=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?zs:Is,ft=m.stencil?Fs:Zi);let Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ci(d.textureWidth,d.textureHeight,{format:dn,type:oi,depthTexture:new Yo(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(X){for(let J=0;J<X.removed.length;J++){let ft=X.removed[J],lt=_.indexOf(ft);lt>=0&&(_[lt]=null,M[lt].disconnect(ft))}for(let J=0;J<X.added.length;J++){let ft=X.added[J],lt=_.indexOf(ft);if(lt===-1){for(let $t=0;$t<M.length;$t++)if($t>=_.length){_.push(ft),lt=$t;break}else if(_[$t]===null){_[$t]=ft,lt=$t;break}if(lt===-1)break}let Ft=M[lt];Ft&&Ft.connect(ft)}}let O=new S,$=new S;function H(X,J,ft){O.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);let lt=O.distanceTo($),Ft=J.projectionMatrix.elements,$t=ft.projectionMatrix.elements,Ht=Ft[14]/(Ft[10]-1),re=Ft[14]/(Ft[10]+1),nt=(Ft[9]+1)/Ft[5],ht=(Ft[9]-1)/Ft[5],D=(Ft[8]-1)/Ft[0],Ut=($t[8]+1)/$t[0],ot=Ht*D,Tt=Ht*Ut,mt=lt/(-D+Ut),Bt=mt*-D;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Bt),X.translateZ(mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ft[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let wt=Ht+mt,R=re+mt,b=ot-Bt,G=Tt+(lt-Bt),j=nt*re/R*wt,st=ht*re/R*wt;X.projectionMatrix.makePerspective(b,G,j,st,wt,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ft=X.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),v.near=U.near=C.near=J,v.far=U.far=C.far=ft,(P!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,V=v.far),C.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,v.layers.mask=C.layers.mask|U.layers.mask;let lt=X.parent,Ft=v.cameras;Q(v,lt);for(let $t=0;$t<Ft.length;$t++)Q(Ft[$t],lt);Ft.length===2?H(v,C,U):v.projectionMatrix.copy(C.projectionMatrix),et(X,v,lt)};function et(X,J,ft){ft===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ar*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ct=null;function dt(X,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let $t=0;$t<ft.length;$t++){let Ht=ft[$t],re=null;if(f!==null)re=f.getViewport(Ht);else{let ht=u.getViewSubImage(d,Ht);re=ht.viewport,$t===0&&(t.setRenderTargetTextures(y,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(y))}let nt=w[$t];nt===void 0&&(nt=new Qe,nt.layers.enable($t),nt.viewport=new Te,w[$t]=nt),nt.matrix.fromArray(Ht.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ht.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(re.x,re.y,re.width,re.height),$t===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(nt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let $t=u.getDepthInformation(ft[0]);$t&&$t.isValid&&$t.texture&&x.init(t,$t,s.renderState)}}for(let ft=0;ft<M.length;ft++){let lt=_[ft],Ft=M[ft];lt!==null&&Ft!==void 0&&Ft.update(lt,J,l||o)}ct&&ct(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let It=new qd;It.setAnimationLoop(dt),this.setAnimationLoop=function(X){ct=X},this.dispose=function(){}}},$i=new Mn,by=new jt;function Sy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,$i.copy(_),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler($i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let _=M.program;n.uniformBlockBinding(y,_)}function l(y,M){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let I=M.program;n.updateUBOMapping(y,I);let A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let M=u();y.__bindingPointIndex=M;let _=i.createBuffer(),I=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,C=_.length;A<C;A++){let U=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,v=U.length;w<v;w++){let P=U[w];if(f(P,A,w,I)===!0){let V=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],L=0;for(let N=0;N<k.length;N++){let O=k[N],$=x(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,V+L,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,_,I){let A=y.value,C=M+"_"+_;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let U=I[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return I[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(y){let M=y.uniforms,_=0,I=16;for(let C=0,U=M.length;C<U;C++){let w=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,P=w.length;v<P;v++){let V=w[v],k=Array.isArray(V.value)?V.value:[V.value];for(let L=0,N=k.length;L<N;L++){let O=k[L],$=x(O),H=_%I,Q=H%$.boundary,et=H+Q;_+=Q,et!==0&&I-et<$.storage&&(_+=I-et),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=$.storage}}}let A=_%I;return A>0&&(_+=I-A),y.__size=_,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Zo=class{constructor(t={}){let{canvas:e=Rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Ei,this.toneMappingExposure=1;let _=this,I=!1,A=0,C=0,U=null,w=-1,v=null,P=new Te,V=new Te,k=null,L=new Wt(0),N=0,O=e.width,$=e.height,H=1,Q=null,et=null,ct=new Te(0,0,O,$),dt=new Te(0,0,O,$),It=!1,X=new Cr,J=!1,ft=!1,lt=new jt,Ft=new jt,$t=new S,Ht=new Te,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ht(){return U===null?H:1}let D=n;function Ut(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Or}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){let z="webgl2";if(D=Ut(z,E),D===null)throw Ut(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ot,Tt,mt,Bt,wt,R,b,G,j,st,K,Ct,yt,Et,ee,at,At,kt,Gt,Rt,ie,Jt,ge,F;function vt(){ot=new kx(D),ot.init(),Jt=new _y(D,ot),Tt=new Ux(D,ot,t,Jt),mt=new my(D,ot),Tt.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Bt=new Gx(D),wt=new ny,R=new xy(D,ot,mt,wt,Tt,Jt,Bt),b=new Ox(_),G=new Bx(_),j=new jm(D),ge=new Lx(D,j),st=new Hx(D,j,Bt,ge),K=new $x(D,st,j,Bt),Gt=new Wx(D,Tt,R),at=new Nx(wt),Ct=new ey(_,b,G,ot,Tt,ge,at),yt=new Sy(_,wt),Et=new sy,ee=new hy(ot),kt=new Px(_,b,G,mt,K,f,c),At=new fy(_,K,Tt),F=new wy(D,Bt,Tt,mt),Rt=new Dx(D,ot,Bt),ie=new Vx(D,ot,Bt),Bt.programs=Ct.programs,_.capabilities=Tt,_.extensions=ot,_.properties=wt,_.renderLists=Et,_.shadowMap=At,_.state=mt,_.info=Bt}vt();let Z=new Ml(_,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(O,$,!1))},this.getSize=function(E){return E.set(O,$)},this.setSize=function(E,z,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,$=z,e.width=Math.floor(E*H),e.height=Math.floor(z*H),q===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(O*H,$*H).floor()},this.setDrawingBufferSize=function(E,z,q){O=E,$=z,H=q,e.width=Math.floor(E*q),e.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,z,q,Y){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,z,q,Y),mt.viewport(P.copy(ct).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,z,q,Y){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,z,q,Y),mt.scissor(V.copy(dt).multiplyScalar(H).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(E){mt.setScissorTest(It=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,z=!0,q=!0){let Y=0;if(E){let B=!1;if(U!==null){let ut=U.texture.format;B=ut===th||ut===Ql||ut===Kl}if(B){let ut=U.texture.type,bt=ut===oi||ut===Zi||ut===Er||ut===Fs||ut===jl||ut===Jl,Pt=kt.getClearColor(),Lt=kt.getClearAlpha(),Xt=Pt.r,Zt=Pt.g,Dt=Pt.b;bt?(g[0]=Xt,g[1]=Zt,g[2]=Dt,g[3]=Lt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Xt,x[1]=Zt,x[2]=Dt,x[3]=Lt,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),ee.dispose(),wt.dispose(),b.dispose(),G.dispose(),K.dispose(),ge.dispose(),F.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",cu),Z.removeEventListener("sessionend",lu),Bi.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=Bt.autoReset,z=At.enabled,q=At.autoUpdate,Y=At.needsUpdate,B=At.type;vt(),Bt.autoReset=E,At.enabled=z,At.autoUpdate=q,At.needsUpdate=Y,At.type=B}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){let z=E.target;z.removeEventListener("dispose",Yt),Ee(z)}function Ee(E){Ve(E),wt.remove(E)}function Ve(E){let z=wt.get(E).programs;z!==void 0&&(z.forEach(function(q){Ct.releaseProgram(q)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,Y,B,ut){z===null&&(z=re);let bt=B.isMesh&&B.matrixWorld.determinant()<0,Pt=Tp(E,z,q,Y,B);mt.setMaterial(Y,bt);let Lt=q.index,Xt=1;if(Y.wireframe===!0){if(Lt=st.getWireframeAttribute(q),Lt===void 0)return;Xt=2}let Zt=q.drawRange,Dt=q.attributes.position,ae=Zt.start*Xt,xe=(Zt.start+Zt.count)*Xt;ut!==null&&(ae=Math.max(ae,ut.start*Xt),xe=Math.min(xe,(ut.start+ut.count)*Xt)),Lt!==null?(ae=Math.max(ae,0),xe=Math.min(xe,Lt.count)):Dt!=null&&(ae=Math.max(ae,0),xe=Math.min(xe,Dt.count));let _e=xe-ae;if(_e<0||_e===1/0)return;ge.setup(B,Y,Pt,q,Lt);let nn,ce=Rt;if(Lt!==null&&(nn=j.get(Lt),ce=ie,ce.setIndex(nn)),B.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*ht()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(B.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*ht()),B.isLineSegments?ce.setMode(D.LINES):B.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else B.isPoints?ce.setMode(D.POINTS):B.isSprite&&ce.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ce.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ce.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Nt=B._multiDrawStarts,Yn=B._multiDrawCounts,le=B._multiDrawCount,An=Lt?j.get(Lt).bytesPerElement:1,hs=wt.get(Y).currentProgram.getUniforms();for(let an=0;an<le;an++)hs.setValue(D,"_gl_DrawID",an),ce.render(Nt[an]/An,Yn[an])}else if(B.isInstancedMesh)ce.renderInstances(ae,_e,B.count);else if(q.isInstancedBufferGeometry){let Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Yn=Math.min(q.instanceCount,Nt);ce.renderInstances(ae,_e,Yn)}else ce.render(ae,_e)};function he(E,z,q){E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,io(E,z,q),E.side=Ti,E.needsUpdate=!0,io(E,z,q),E.side=un):io(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),p=ee.get(q),p.init(z),M.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ut=B.material;if(ut)if(Array.isArray(ut))for(let bt=0;bt<ut.length;bt++){let Pt=ut[bt];he(Pt,q,B),Y.add(Pt)}else he(ut,q,B),Y.add(ut)}),M.pop(),p=null,Y},this.compileAsync=function(E,z,q=null){let Y=this.compile(E,z,q);return new Promise(B=>{function ut(){if(Y.forEach(function(bt){wt.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){B(E);return}setTimeout(ut,10)}ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Tn=null;function qn(E){Tn&&Tn(E)}function cu(){Bi.stop()}function lu(){Bi.start()}let Bi=new qd;Bi.setAnimationLoop(qn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Tn=E,Z.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},Z.addEventListener("sessionstart",cu),Z.addEventListener("sessionend",lu),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,U),p=ee.get(E,M.length),p.init(z),M.push(p),Ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(Ft),ft=this.localClippingEnabled,J=at.init(this.clippingPlanes,ft),m=Et.get(E,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ut=_.xr.getDepthSensingMesh();ut!==null&&Ga(ut,z,-1/0,_.sortObjects)}Ga(E,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,et),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&kt.addToRenderList(m,E),this.info.render.frame++,J===!0&&at.beginShadows();let q=p.state.shadowsArray;At.render(q,E,z),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ut=z.cameras;if(B.length>0)for(let bt=0,Pt=ut.length;bt<Pt;bt++){let Lt=ut[bt];uu(Y,B,E,Lt)}nt&&kt.render(E);for(let bt=0,Pt=ut.length;bt<Pt;bt++){let Lt=ut[bt];hu(m,E,Lt,Lt.viewport)}}else B.length>0&&uu(Y,B,E,z),nt&&kt.render(E),hu(m,E,z);U!==null&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(_,E,z),ge.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ga(E,z,q,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){Y&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);let bt=K.update(E),Pt=E.material;Pt.visible&&m.push(E,bt,Pt,q,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let bt=K.update(E),Pt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ht.copy(bt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){let Lt=bt.groups;for(let Xt=0,Zt=Lt.length;Xt<Zt;Xt++){let Dt=Lt[Xt],ae=Pt[Dt.materialIndex];ae&&ae.visible&&m.push(E,bt,ae,q,Ht.z,Dt)}}else Pt.visible&&m.push(E,bt,Pt,q,Ht.z,null)}}let ut=E.children;for(let bt=0,Pt=ut.length;bt<Pt;bt++)Ga(ut[bt],z,q,Y)}function hu(E,z,q,Y){let B=E.opaque,ut=E.transmissive,bt=E.transparent;p.setupLightsView(q),J===!0&&at.setGlobalState(_.clippingPlanes,q),Y&&mt.viewport(P.copy(Y)),B.length>0&&no(B,z,q),ut.length>0&&no(ut,z,q),bt.length>0&&no(bt,z,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function uu(E,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ci(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Fr:oi,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ut=p.state.transmissionRenderTarget[Y.id],bt=Y.viewport||P;ut.setSize(bt.z,bt.w);let Pt=_.getRenderTarget();_.setRenderTarget(ut),_.getClearColor(L),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),nt&&kt.render(q);let Lt=_.toneMapping;_.toneMapping=Ei;let Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),J===!0&&at.setGlobalState(_.clippingPlanes,Y),no(E,q,Y),R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Dt=0,ae=z.length;Dt<ae;Dt++){let xe=z[Dt],_e=xe.object,nn=xe.geometry,ce=xe.material,Nt=xe.group;if(ce.side===un&&_e.layers.test(Y.layers)){let Yn=ce.side;ce.side=sn,ce.needsUpdate=!0,du(_e,q,Y,nn,ce,Nt),ce.side=Yn,ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut))}_.setRenderTarget(Pt),_.setClearColor(L,N),Xt!==void 0&&(Y.viewport=Xt),_.toneMapping=Lt}function no(E,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ut=E.length;B<ut;B++){let bt=E[B],Pt=bt.object,Lt=bt.geometry,Xt=Y===null?bt.material:Y,Zt=bt.group;Pt.layers.test(q.layers)&&du(Pt,z,q,Lt,Xt,Zt)}}function du(E,z,q,Y,B,ut){E.onBeforeRender(_,z,q,Y,B,ut),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,z,q,Y,E,ut),B.transparent===!0&&B.side===un&&B.forceSinglePass===!1?(B.side=sn,B.needsUpdate=!0,_.renderBufferDirect(q,z,Y,B,E,ut),B.side=Ti,B.needsUpdate=!0,_.renderBufferDirect(q,z,Y,B,E,ut),B.side=un):_.renderBufferDirect(q,z,Y,B,E,ut),E.onAfterRender(_,z,q,Y,B,ut)}function io(E,z,q){z.isScene!==!0&&(z=re);let Y=wt.get(E),B=p.state.lights,ut=p.state.shadowsArray,bt=B.state.version,Pt=Ct.getParameters(E,B.state,ut,z,q),Lt=Ct.getProgramCacheKey(Pt),Xt=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",Yt),Xt=new Map,Y.programs=Xt);let Zt=Xt.get(Lt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===bt)return pu(E,Pt),Zt}else Pt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(Pt,_),Zt=Ct.acquireProgram(Pt,Lt),Xt.set(Lt,Zt),Y.uniforms=Pt.uniforms;let Dt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=at.uniform),pu(E,Pt),Y.needsLights=Rp(E),Y.lightsStateVersion=bt,Y.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function fu(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function pu(E,z){let q=wt.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Tp(E,z,q,Y,B){z.isScene!==!0&&(z=re),R.resetTextureUnits();let ut=z.fog,bt=Y.isMeshStandardMaterial?z.environment:null,Pt=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Js,Lt=(Y.isMeshStandardMaterial?G:b).get(Y.envMap||bt),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!q.morphAttributes.position,ae=!!q.morphAttributes.normal,xe=!!q.morphAttributes.color,_e=Ei;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_e=_.toneMapping);let nn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=nn!==void 0?nn.length:0,Nt=wt.get(Y),Yn=p.state.lights;if(J===!0&&(ft===!0||E!==v)){let _n=E===v&&Y.id===w;at.setState(Y,E,_n)}let le=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Yn.state.version||Nt.outputColorSpace!==Pt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Lt||Y.fog===!0&&Nt.fog!==ut||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==at.numPlanes||Nt.numIntersection!==at.numIntersection)||Nt.vertexAlphas!==Xt||Nt.vertexTangents!==Zt||Nt.morphTargets!==Dt||Nt.morphNormals!==ae||Nt.morphColors!==xe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Nt.__version=Y.version);let An=Nt.currentProgram;le===!0&&(An=io(Y,z,B));let hs=!1,an=!1,cr=!1,ye=An.getUniforms(),On=Nt.uniforms;if(mt.useProgram(An.program)&&(hs=!0,an=!0,cr=!0),Y.id!==w&&(w=Y.id,an=!0),hs||v!==E){mt.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),Im(lt),Pm(lt),ye.setValue(D,"projectionMatrix",lt)):ye.setValue(D,"projectionMatrix",E.projectionMatrix),ye.setValue(D,"viewMatrix",E.matrixWorldInverse);let mi=ye.map.cameraPosition;mi!==void 0&&mi.setValue(D,$t.setFromMatrixPosition(E.matrixWorld)),Tt.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ye.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,an=!0,cr=!0)}if(B.isSkinnedMesh){ye.setOptional(D,B,"bindMatrix"),ye.setOptional(D,B,"bindMatrixInverse");let _n=B.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ye.setValue(D,"boneTexture",_n.boneTexture,R))}B.isBatchedMesh&&(ye.setOptional(D,B,"batchingTexture"),ye.setValue(D,"batchingTexture",B._matricesTexture,R),ye.setOptional(D,B,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",B._indirectTexture,R),ye.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",B._colorsTexture,R));let lr=q.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Gt.update(B,q,An),(an||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,ye.setValue(D,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(On.envMap.value=Lt,On.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(On.envMapIntensity.value=z.environmentIntensity),an&&(ye.setValue(D,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Ap(On,cr),ut&&Y.fog===!0&&yt.refreshFogUniforms(On,ut),yt.refreshMaterialUniforms(On,Y,H,$,p.state.transmissionRenderTarget[E.id]),Ds.upload(D,fu(Nt),On,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ds.upload(D,fu(Nt),On,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ye.setValue(D,"center",B.center),ye.setValue(D,"modelViewMatrix",B.modelViewMatrix),ye.setValue(D,"normalMatrix",B.normalMatrix),ye.setValue(D,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let _n=Y.uniformsGroups;for(let mi=0,gi=_n.length;mi<gi;mi++){let mu=_n[mi];F.update(mu,An),F.bind(mu,An)}}return An}function Ap(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Rp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,z,q){wt.get(E.texture).__webglTexture=z,wt.get(E.depthTexture).__webglTexture=q;let Y=wt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let q=wt.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,q=0){U=E,A=z,C=q;let Y=!0,B=null,ut=!1,bt=!1;if(E){let Lt=wt.get(E);if(Lt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Lt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Lt.__hasExternalTextures)R.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Dt=E.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&wt.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);let Zt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[z])?B=Zt[z][q]:B=Zt[z],ut=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[q]:B=Zt,P.copy(E.viewport),V.copy(E.scissor),k=E.scissorTest}else P.copy(ct).multiplyScalar(H).floor(),V.copy(dt).multiplyScalar(H).floor(),k=It;if(mt.bindFramebuffer(D.FRAMEBUFFER,B)&&Y&&mt.drawBuffers(E,B),mt.viewport(P),mt.scissor(V),mt.setScissorTest(k),ut){let Lt=wt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Lt.__webglTexture,q)}else if(bt){let Lt=wt.get(E.texture),Xt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,q||0,Xt)}w=-1},this.readRenderTargetPixels=function(E,z,q,Y,B,ut,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){mt.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let Lt=E.texture,Xt=Lt.format,Zt=Lt.type;if(!Tt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&q>=0&&q<=E.height-B&&D.readPixels(z,q,Y,B,Jt.convert(Xt),Jt.convert(Zt),ut)}finally{let Lt=U!==null?wt.get(U).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,Y,B,ut,bt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){let Lt=E.texture,Xt=Lt.format,Zt=Lt.type;if(!Tt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-Y&&q>=0&&q<=E.height-B){mt.bindFramebuffer(D.FRAMEBUFFER,Pt);let Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(z,q,Y,B,Jt.convert(Xt),Jt.convert(Zt),0);let ae=U!==null?wt.get(U).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,ae);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cm(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(Dt),D.deleteSync(xe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let Y=Math.pow(2,-q),B=Math.floor(E.image.width*Y),ut=Math.floor(E.image.height*Y),bt=z!==null?z.x:0,Pt=z!==null?z.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,bt,Pt,B,ut),mt.unbindTexture()},this.copyTextureToTexture=function(E,z,q=null,Y=null,B=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],z=arguments[2],B=arguments[3]||0,q=null);let ut,bt,Pt,Lt,Xt,Zt,Dt,ae,xe,_e=E.isCompressedTexture?E.mipmaps[B]:E.image;q!==null?(ut=q.max.x-q.min.x,bt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Lt=q.min.x,Xt=q.min.y,Zt=q.isBox3?q.min.z:0):(ut=_e.width,bt=_e.height,Pt=_e.depth||1,Lt=0,Xt=0,Zt=0),Y!==null?(Dt=Y.x,ae=Y.y,xe=Y.z):(Dt=0,ae=0,xe=0);let nn=Jt.convert(z.format),ce=Jt.convert(z.type),Nt;z.isData3DTexture?(R.setTexture3D(z,0),Nt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),Nt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Yn=D.getParameter(D.UNPACK_ROW_LENGTH),le=D.getParameter(D.UNPACK_IMAGE_HEIGHT),An=D.getParameter(D.UNPACK_SKIP_PIXELS),hs=D.getParameter(D.UNPACK_SKIP_ROWS),an=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);let cr=E.isDataArrayTexture||E.isData3DTexture,ye=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let On=wt.get(E),lr=wt.get(z),_n=wt.get(On.__renderTarget),mi=wt.get(lr.__renderTarget);mt.bindFramebuffer(D.READ_FRAMEBUFFER,_n.__webglFramebuffer),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Pt;gi++)cr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,B,Zt+gi),E.isDepthTexture?(ye&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(z).__webglTexture,B,xe+gi),D.blitFramebuffer(Lt,Xt,ut,bt,Dt,ae,ut,bt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ye?D.copyTexSubImage3D(Nt,B,Dt,ae,xe+gi,Lt,Xt,ut,bt):D.copyTexSubImage2D(Nt,B,Dt,ae,xe+gi,Lt,Xt,ut,bt);mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ye?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Nt,B,Dt,ae,xe,ut,bt,Pt,nn,ce,_e.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,B,Dt,ae,xe,ut,bt,Pt,nn,_e.data):D.texSubImage3D(Nt,B,Dt,ae,xe,ut,bt,Pt,nn,ce,_e):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Dt,ae,ut,bt,nn,ce,_e.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Dt,ae,_e.width,_e.height,nn,_e.data):D.texSubImage2D(D.TEXTURE_2D,B,Dt,ae,ut,bt,nn,ce,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,Yn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),D.pixelStorei(D.UNPACK_SKIP_PIXELS,An),D.pixelStorei(D.UNPACK_SKIP_ROWS,hs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,an),B===0&&z.generateMipmaps&&D.generateMipmap(Nt),mt.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,Y=null,B=0){return E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],z=arguments[3],B=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,Y,B)},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){A=0,C=0,U=null,mt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Ji=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var tn=class extends li{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new S,Jo=new S,xd=new jt,pr=new ji,Eo=new Hs,xc=new S,_d=new S,ke=class extends ve{constructor(t=new Me,e=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jo.distanceTo(Jo);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;xd.copy(s).invert(),pr.copy(t.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),M=To(this,t,pr,c,p,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=To(this,t,pr,c,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=To(this,t,pr,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=To(this,t,pr,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function To(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(jo,Jo,xc,_d)>n)return;xc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xc);if(!(c<t.near||c>t.far))return{distance:c,point:_d.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var yd=new S,vd=new S,Gs=class extends ke{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yd.fromBufferAttribute(e,s),vd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(vd);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ws=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new rt:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new S,s=[],r=[],o=[],a=new S,c=new jt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ao=new S,_c=new ih,yc=new ih,vc=new ih,Sl=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),_c.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),yc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),vc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),vc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(_c.calc(c),yc.calc(c),vc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Md(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Ey(i,t){let e=1-i;return e*e*t}function Ty(i,t){return 2*(1-i)*i*t}function Ay(i,t){return i*i*t}function vr(i,t,e,n){return Ey(i,t)+Ty(i,e)+Ay(i,n)}function Ry(i,t){let e=1-i;return e*e*e*t}function Cy(i,t){let e=1-i;return 3*e*e*i*t}function Iy(i,t){return 3*(1-i)*i*i*t}function Py(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return Ry(i,t)+Cy(i,e)+Iy(i,n)+Py(i,s)}var Ko=class extends bn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wl=class extends bn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y),Mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends bn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends bn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends bn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends bn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y),vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Md(a,c.x,l.x,h.x,u.x),Md(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Al=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Sl,CubicBezierCurve:Ko,CubicBezierCurve3:wl,EllipseCurve:Ir,LineCurve:Qo,LineCurve3:El,QuadraticBezierCurve:ta,QuadraticBezierCurve3:Tl,SplineCurve:ea}),Rl=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Al[s.type]().fromJSON(s))}return this}},$s=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qo(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ta(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ko(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ir(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},na=class i extends Me{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new S,d=new rt,f=new S,g=new S,x=new S,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let M=n+y*h*s,_=Math.sin(M),I=Math.cos(M);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*I,o.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),a.push(d.x,d.y);let C=c[3*A+0]*_,U=c[3*A+1],w=c[3*A+0]*I;l.push(C,U,w)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let _=M+y*t.length,I=_,A=_+t.length,C=_+t.length+1,U=_+1;r.push(I,A,U),r.push(C,U,A)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ae=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){let _=new S,I=new S,A=0,C=(e-t)/n;for(let U=0;U<=r;U++){let w=[],v=U/r,P=v*(e-t)+t;for(let V=0;V<=s;V++){let k=V/s,L=k*c+a,N=Math.sin(L),O=Math.cos(L);I.x=P*N,I.y=-v*n+m,I.z=P*O,u.push(I.x,I.y,I.z),_.set(N,C,O).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-v),w.push(g++)}x.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){let v=x[w][U],P=x[w+1][U],V=x[w+1][U+1],k=x[w][U+1];(t>0||w!==0)&&(h.push(v,P,k),A+=3),(e>0||w!==r-1)&&(h.push(P,V,k),A+=3)}l.addGroup(p,A,0),p+=A}function M(_){let I=g,A=new rt,C=new S,U=0,w=_===!0?t:e,v=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let P=g;for(let V=0;V<=s;V++){let L=V/s*c+a,N=Math.cos(L),O=Math.sin(L);C.x=w*O,C.y=m*v,C.z=w*N,u.push(C.x,C.y,C.z),d.push(0,v,0),A.x=N*.5+.5,A.y=O*.5*v+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){let k=I+V,L=P+V;_===!0?h.push(L,L+1,k):h.push(L+1,L,k),U+=3}l.addGroup(p,U,_===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cl=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new S,_=new S,I=new S;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],_),f(e[A+2],I),c(M,_,I,y)}function c(y,M,_,I){let A=I+1,C=[];for(let U=0;U<=A;U++){C[U]=[];let w=y.clone().lerp(_,U/A),v=M.clone().lerp(_,U/A),P=A-U;for(let V=0;V<=P;V++)V===0&&U===A?C[U][V]=w:C[U][V]=w.clone().lerp(v,V/P)}for(let U=0;U<A;U++)for(let w=0;w<2*(A-U)-1;w++){let v=Math.floor(w/2);w%2===0?(d(C[U][v+1]),d(C[U+1][v]),d(C[U][v])):(d(C[U][v+1]),d(C[U+1][v+1]),d(C[U+1][v]))}}function l(y){let M=new S;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new S;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],_=o[y+2],I=o[y+4],A=Math.max(M,_,I),C=Math.min(M,_,I);A>.9&&C<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let y=new S,M=new S,_=new S,I=new S,A=new rt,C=new rt,U=new rt;for(let w=0,v=0;w<r.length;w+=9,v+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),U.set(o[v+4],o[v+5]),I.copy(y).add(M).add(_).divideScalar(3);let P=m(I);x(A,v+0,y,P),x(C,v+2,M,P),x(U,v+4,_,P)}}function x(y,M,_,I){I<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ro=new S,Co=new S,Mc=new S,Io=new Si,ia=class extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ps*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=Io;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Io.getNormal(Mc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let M=(y+1)%3,_=u[y],I=u[M],A=Io[h[y]],C=Io[h[M]],U=`${_}_${I}`,w=`${I}_${_}`;w in d&&d[w]?(Mc.dot(d[w].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),d[w]=null):U in d||(d[U]={index0:l[y],index1:l[M],normal:Mc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];Ro.fromBufferAttribute(a,x),Co.fromBufferAttribute(a,m),f.push(Ro.x,Ro.y,Ro.z),f.push(Co.x,Co.y,Co.z)}this.setAttribute("position",new se(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Ri=class extends $s{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $s().fromJSON(s))}return this}},Ly={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Kd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Fy(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Pr(r,o,e,a,c,f,0),o}};function Kd(i,t,e,n,s){let r,o;if(s===Yy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=bd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=bd(r,i[r],i[r+1],o);return o&&fa(o,o.next)&&(Dr(o),o=o.next),o}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fa(e,e.next)||we(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Vy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Uy(i,n,s,r):Dy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ny(Ki(i),t,e),Pr(i,t,e,n,s,r,2)):o===2&&Oy(i,t,e,n,s,r):Pr(Ki(i),t,e,n,s,r,1);break}}}function Dy(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Rs(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Uy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Il(f,g,t,e,n),y=Il(x,m,t,e,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Rs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Rs(a,h,c,u,l,d,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Rs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Rs(a,h,c,u,l,d,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ny(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!fa(s,r)&&Qd(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function Oy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$y(o,a)){let c=tf(o,a);o=Ki(o,o.next),c=Ki(c,c.next),Pr(o,t,e,n,s,r,0),Pr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fy(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Kd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Wy(l));for(s.sort(zy),r=0;r<s.length;r++)e=By(s[r],e);return e}function zy(i,t){return i.x-t.x}function By(i,t){let e=ky(i,t);if(!e)return t;let n=tf(e,i);return Ki(n,n.next),Ki(e,e.next)}function ky(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Rs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Lr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Hy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Hy(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Vy(i,t,e,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gy(s)}function Gy(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $y(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xy(i,t)&&(Lr(i,t)&&Lr(t,i)&&qy(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||fa(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fa(i,t){return i.x===t.x&&i.y===t.y}function Qd(i,t,e,n){let s=Lo(we(i,t,e)),r=Lo(we(i,t,n)),o=Lo(we(e,n,i)),a=Lo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Po(i,e,t)||r===0&&Po(i,n,t)||o===0&&Po(e,i,n)||a===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lo(i){return i>0?1:i<0?-1:0}function Xy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function qy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=new Pl(i.i,i.x,i.y),n=new Pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bd(i,t,e,n){let s=new Pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var br=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sd(t),wd(n,t);let o=t.length;e.forEach(Sd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,wd(n,e[c]);let a=Ly.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Sd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var sa=class i extends Me{constructor(t=new Ri([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Zy,M,_=!1,I,A,C,U;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),A=new S,C=new S,U=new S),d||(m=0,f=0,g=0,x=0);let w=a.extractPoints(l),v=w.shape,P=w.holes;if(!br.isClockWise(v)){v=v.reverse();for(let nt=0,ht=P.length;nt<ht;nt++){let D=P[nt];br.isClockWise(D)&&(P[nt]=D.reverse())}}let k=br.triangulateShape(v,P),L=v;for(let nt=0,ht=P.length;nt<ht;nt++){let D=P[nt];v=v.concat(D)}function N(nt,ht,D){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ht,D)}let O=v.length,$=k.length;function H(nt,ht,D){let Ut,ot,Tt,mt=nt.x-ht.x,Bt=nt.y-ht.y,wt=D.x-nt.x,R=D.y-nt.y,b=mt*mt+Bt*Bt,G=mt*R-Bt*wt;if(Math.abs(G)>Number.EPSILON){let j=Math.sqrt(b),st=Math.sqrt(wt*wt+R*R),K=ht.x-Bt/j,Ct=ht.y+mt/j,yt=D.x-R/st,Et=D.y+wt/st,ee=((yt-K)*R-(Et-Ct)*wt)/(mt*R-Bt*wt);Ut=K+mt*ee-nt.x,ot=Ct+Bt*ee-nt.y;let at=Ut*Ut+ot*ot;if(at<=2)return new rt(Ut,ot);Tt=Math.sqrt(at/2)}else{let j=!1;mt>Number.EPSILON?wt>Number.EPSILON&&(j=!0):mt<-Number.EPSILON?wt<-Number.EPSILON&&(j=!0):Math.sign(Bt)===Math.sign(R)&&(j=!0),j?(Ut=-Bt,ot=mt,Tt=Math.sqrt(b)):(Ut=mt,ot=Bt,Tt=Math.sqrt(b/2))}return new rt(Ut/Tt,ot/Tt)}let Q=[];for(let nt=0,ht=L.length,D=ht-1,Ut=nt+1;nt<ht;nt++,D++,Ut++)D===ht&&(D=0),Ut===ht&&(Ut=0),Q[nt]=H(L[nt],L[D],L[Ut]);let et=[],ct,dt=Q.concat();for(let nt=0,ht=P.length;nt<ht;nt++){let D=P[nt];ct=[];for(let Ut=0,ot=D.length,Tt=ot-1,mt=Ut+1;Ut<ot;Ut++,Tt++,mt++)Tt===ot&&(Tt=0),mt===ot&&(mt=0),ct[Ut]=H(D[Ut],D[Tt],D[mt]);et.push(ct),dt=dt.concat(ct)}for(let nt=0;nt<m;nt++){let ht=nt/m,D=f*Math.cos(ht*Math.PI/2),Ut=g*Math.sin(ht*Math.PI/2)+x;for(let ot=0,Tt=L.length;ot<Tt;ot++){let mt=N(L[ot],Q[ot],Ut);lt(mt.x,mt.y,-D)}for(let ot=0,Tt=P.length;ot<Tt;ot++){let mt=P[ot];ct=et[ot];for(let Bt=0,wt=mt.length;Bt<wt;Bt++){let R=N(mt[Bt],ct[Bt],Ut);lt(R.x,R.y,-D)}}}let It=g+x;for(let nt=0;nt<O;nt++){let ht=d?N(v[nt],dt[nt],It):v[nt];_?(C.copy(I.normals[0]).multiplyScalar(ht.x),A.copy(I.binormals[0]).multiplyScalar(ht.y),U.copy(M[0]).add(C).add(A),lt(U.x,U.y,U.z)):lt(ht.x,ht.y,0)}for(let nt=1;nt<=h;nt++)for(let ht=0;ht<O;ht++){let D=d?N(v[ht],dt[ht],It):v[ht];_?(C.copy(I.normals[nt]).multiplyScalar(D.x),A.copy(I.binormals[nt]).multiplyScalar(D.y),U.copy(M[nt]).add(C).add(A),lt(U.x,U.y,U.z)):lt(D.x,D.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let ht=nt/m,D=f*Math.cos(ht*Math.PI/2),Ut=g*Math.sin(ht*Math.PI/2)+x;for(let ot=0,Tt=L.length;ot<Tt;ot++){let mt=N(L[ot],Q[ot],Ut);lt(mt.x,mt.y,u+D)}for(let ot=0,Tt=P.length;ot<Tt;ot++){let mt=P[ot];ct=et[ot];for(let Bt=0,wt=mt.length;Bt<wt;Bt++){let R=N(mt[Bt],ct[Bt],Ut);_?lt(R.x,R.y+M[h-1].y,M[h-1].x+D):lt(R.x,R.y,u+D)}}}X(),J();function X(){let nt=s.length/3;if(d){let ht=0,D=O*ht;for(let Ut=0;Ut<$;Ut++){let ot=k[Ut];Ft(ot[2]+D,ot[1]+D,ot[0]+D)}ht=h+m*2,D=O*ht;for(let Ut=0;Ut<$;Ut++){let ot=k[Ut];Ft(ot[0]+D,ot[1]+D,ot[2]+D)}}else{for(let ht=0;ht<$;ht++){let D=k[ht];Ft(D[2],D[1],D[0])}for(let ht=0;ht<$;ht++){let D=k[ht];Ft(D[0]+O*h,D[1]+O*h,D[2]+O*h)}}n.addGroup(nt,s.length/3-nt,0)}function J(){let nt=s.length/3,ht=0;ft(L,ht),ht+=L.length;for(let D=0,Ut=P.length;D<Ut;D++){let ot=P[D];ft(ot,ht),ht+=ot.length}n.addGroup(nt,s.length/3-nt,1)}function ft(nt,ht){let D=nt.length;for(;--D>=0;){let Ut=D,ot=D-1;ot<0&&(ot=nt.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){let Bt=O*Tt,wt=O*(Tt+1),R=ht+Ut+Bt,b=ht+ot+Bt,G=ht+ot+wt,j=ht+Ut+wt;$t(R,b,G,j)}}}function lt(nt,ht,D){c.push(nt),c.push(ht),c.push(D)}function Ft(nt,ht,D){Ht(nt),Ht(ht),Ht(D);let Ut=s.length/3,ot=y.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);re(ot[0]),re(ot[1]),re(ot[2])}function $t(nt,ht,D,Ut){Ht(nt),Ht(ht),Ht(Ut),Ht(ht),Ht(D),Ht(Ut);let ot=s.length/3,Tt=y.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);re(Tt[0]),re(Tt[1]),re(Tt[3]),re(Tt[1]),re(Tt[2]),re(Tt[3])}function Ht(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function re(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Al[s.type]().fromJSON(s)),new i(n,t.options)}},Zy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,c),new rt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new rt(o,1-c),new rt(l,1-u),new rt(d,1-g),new rt(x,1-p)]:[new rt(a,1-c),new rt(h,1-u),new rt(f,1-g),new rt(m,1-p)]}};function jy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qi=class i extends Cl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Xs=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new S,d=new S,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],M=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-M),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=h[p][y+1],_=h[p][y],I=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(M,_,A),(p!==n-1||c<Math.PI)&&f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ra=class extends li{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Wt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var oa=class extends li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var qs=class extends tn{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Do(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:r=t,a=2*e-n;break;case bu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mu:o=t,c=2*n-e;break;case bu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+y*o[l+I]+M*o[c+I]+_*o[u+I];return r}},Dl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ul=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case Tr:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Tr;var ts=class extends Pn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Bs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Pn{};Nl.prototype.ValueTypeName="color";var Ol=class extends Pn{};Ol.prototype.ValueTypeName="number";var Fl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Vt.slerpFlat(r,0,o,l-a,o,l,c);return r}},aa=class extends Pn{InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Pn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Bs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Pn{};zl.prototype.ValueTypeName="vector";var Bl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ky=new Bl,kl=class{constructor(t){this.manager=t!==void 0?t:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},la=class extends ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bc=new jt,Ed=new S,Td=new S,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),Td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Td),e.updateMatrixWorld(),bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vl=class extends Hl{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var sh="\\[\\]\\.:\\/",Qy=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",tv="[^"+sh.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",rh),nv=/(WCOD+)?/.source.replace("WCOD",tv),iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),rv=new RegExp("^"+ev+nv+iv+sv+"$"),ov=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qy,"")}static parseTrackName(t){let e=rv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Gl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VM=new Float32Array(1);var Ad=new jt,Zs=class{constructor(t,e,n=0,s=1/0){this.ray=new ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wl(t[s],this,n,e);return n.sort(Rd),n}};function Rd(i,t){return i.distance-t.distance}function Wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wl(r[o],t,e,!0)}}var Nr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var js=class extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);var ef={type:"change"},ah={type:"start"},sf={type:"end"},pa=new ji,nf=new hn,av=Math.cos(70*Dn.DEG2RAD),Ne=new S,rn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,ma=class extends js{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new Vt,this._lastTargetPosition=new S,this._quat=new Vt().setFromUnitVectors(t.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nr,this._sphericalDelta=new Nr,this._scale=1,this._panOffset=new S,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new S,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lv.bind(this),this._onPointerDown=cv.bind(this),this._onPointerUp=hv.bind(this),this._onContextMenu=xv.bind(this),this._onMouseWheel=fv.bind(this),this._onKeyDown=pv.bind(this),this._onTouchStart=mv.bind(this),this._onTouchMove=gv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=dv.bind(this),this._interceptControlDown=_v.bind(this),this._interceptControlUp=yv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ef),this.update(),this.state=pe.NONE}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ne.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new S(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<av?this.object.lookAt(this.target):(nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(nf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function cv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=pe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pe.DOLLY;break;case Ln.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}break;case Ln.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(ah)}function dv(i){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fv(i){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(i.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sf))}function pv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function mv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pe.TOUCH_ROTATE;break;case kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pe.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(ah)}function gv(i){switch(this._trackPointer(i),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pe.NONE}}function xv(i){this.enabled!==!1&&i.preventDefault()}function _v(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var is=new Zs,qe=new S,Pi=new S,Se=new Vt,rf={X:new S(1,0,0),Y:new S(0,1,0),Z:new S(0,0,1)},ch={type:"change"},of={type:"mouseDown",mode:null},af={type:"mouseUp",mode:null},cf={type:"objectChange"},va=class extends js{constructor(t,e=null){super(void 0,e);let n=new hh(this);this._root=n;let s=new uh;this._gizmo=s,n.add(s);let r=new dh;this._plane=r,n.add(r);let o=this;function a(M,_){let I=_;Object.defineProperty(o,M,{get:function(){return I!==void 0?I:_},set:function(A){I!==A&&(I=A,r[M]=A,s[M]=A,o.dispatchEvent({type:M+"-changed",value:A}),o.dispatchEvent(ch))}}),o[M]=_,r[M]=_,s[M]=_}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new S,l=new S,h=new Vt,u=new Vt,d=new S,f=new Vt,g=new S,x=new S,m=new S,p=0,y=new S;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",m),a("rotationAngle",p),a("eye",y),this._offset=new S,this._startNorm=new S,this._endNorm=new S,this._cameraScale=new S,this._parentPosition=new S,this._parentQuaternion=new Vt,this._parentQuaternionInv=new Vt,this._parentScale=new S,this._worldScaleStart=new S,this._worldQuaternionInv=new Vt,this._worldScale=new S,this._positionStart=new S,this._quaternionStart=new Vt,this._scaleStart=new S,this._getPointer=vv.bind(this),this._onPointerDown=bv.bind(this),this._onPointerHover=Mv.bind(this),this._onPointerMove=Sv.bind(this),this._onPointerUp=wv.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&is.setFromCamera(t,this.camera);let e=lh(this._gizmo.picker[this.mode],is);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&is.setFromCamera(t,this.camera);let e=lh(this._plane,is,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,of.mode=this.mode,this.dispatchEvent(of)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&is.setFromCamera(t,this.camera);let o=lh(this._plane,is,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Se.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(qe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(qe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Pi.set(a,a,a)}else qe.copy(this.pointStart),Pi.copy(this.pointEnd),qe.applyQuaternion(this._worldQuaternionInv),Pi.applyQuaternion(this._worldQuaternionInv),Pi.divide(qe),e.search("X")===-1&&(Pi.x=1),e.search("Y")===-1&&(Pi.y=1),e.search("Z")===-1&&(Pi.z=1);s.scale.copy(this._scaleStart).multiply(Pi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(qe.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(qe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(rf[e]),qe.copy(rf[e]),r==="local"&&qe.applyQuaternion(this.worldQuaternion),qe.cross(this.eye),qe.length()===0?c=!0:this.rotationAngle=this._offset.dot(qe.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ch),this.dispatchEvent(cf)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(af.mode=this.mode,this.dispatchEvent(af)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ch),this.dispatchEvent(cf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return is}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}};function vv(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Mv(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function bv(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Sv(i){this.enabled&&this.pointerMove(this._getPointer(i))}function wv(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function lh(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var ga=new Mn,me=new S(0,1,0),lf=new S(0,0,0),hf=new jt,xa=new Vt,ya=new Vt,Hn=new S,uf=new jt,kr=new S(1,0,0),ss=new S(0,1,0),Hr=new S(0,0,1),_a=new S,zr=new S,Br=new S,hh=class extends ve{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},uh=class extends ve{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new hi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new tn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let c=t.clone();c.color.setHex(16711680),c.opacity=.5;let l=t.clone();l.color.setHex(65280),l.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let u=t.clone();u.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25,t.clone().color.setHex(16776960);let g=t.clone();g.color.setHex(7895160);let x=new Ae(0,.04,.1,12);x.translate(0,.05,0);let m=new Ce(.08,.08,.08);m.translate(0,.04,0);let p=new Me;p.setAttribute("position",new se([0,0,0,1,0,0],3));let y=new Ae(.0075,.0075,.5,3);y.translate(0,.25,0);function M(N,O){let $=new Ci(N,.0075,3,64,O*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function _(){let N=new Me;return N.setAttribute("position",new se([0,0,0,1,1,1],3)),N}let I={X:[[new gt(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new gt(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new gt(y,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new gt(x,o),[0,.5,0]],[new gt(x,o),[0,-.5,0],[Math.PI,0,0]],[new gt(y,o)]],Z:[[new gt(x,a),[0,0,.5],[Math.PI/2,0,0]],[new gt(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new gt(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new gt(new Qi(.1,0),u.clone()),[0,0,0]]],XY:[[new gt(new Ce(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new gt(new Ce(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new gt(new Ce(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new gt(new Ae(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new gt(new Ae(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new gt(new Ae(.2,0,.6,4),n),[0,.3,0]],[new gt(new Ae(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new gt(new Ae(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new gt(new Ae(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new gt(new Qi(.2,0),n)]],XY:[[new gt(new Ce(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new gt(new Ce(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new gt(new Ce(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new gt(new Qi(.01,2),s),null,null,null,"helper"]],END:[[new gt(new Qi(.01,2),s),null,null,null,"helper"]],DELTA:[[new ke(_(),s),null,null,null,"helper"]],X:[[new ke(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ke(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ke(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},U={XYZE:[[new gt(M(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new gt(M(.5,.5),r)]],Y:[[new gt(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new gt(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new gt(M(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new ke(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new gt(new Xs(.25,10,8),n)]],X:[[new gt(new Ci(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new gt(new Ci(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new gt(new Ci(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new gt(new Ci(.75,.1,2,24),n)]]},P={X:[[new gt(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new gt(y,r),[0,0,0],[0,0,-Math.PI/2]],[new gt(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new gt(m,o),[0,.5,0]],[new gt(y,o)],[new gt(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new gt(m,a),[0,0,.5],[Math.PI/2,0,0]],[new gt(y,a),[0,0,0],[Math.PI/2,0,0]],[new gt(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new gt(new Ce(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new gt(new Ce(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new gt(new Ce(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new gt(new Ce(.1,.1,.1),u.clone())]]},V={X:[[new gt(new Ae(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new gt(new Ae(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new gt(new Ae(.2,0,.6,4),n),[0,.3,0]],[new gt(new Ae(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new gt(new Ae(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new gt(new Ae(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new gt(new Ce(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new gt(new Ce(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new gt(new Ce(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new gt(new Ce(.2,.2,.2),n),[0,0,0]]]},k={X:[[new ke(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ke(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ke(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function L(N){let O=new ve;for(let $ in N)for(let H=N[$].length;H--;){let Q=N[$][H][0].clone(),et=N[$][H][1],ct=N[$][H][2],dt=N[$][H][3],It=N[$][H][4];Q.name=$,Q.tag=It,et&&Q.position.set(et[0],et[1],et[2]),ct&&Q.rotation.set(ct[0],ct[1],ct[2]),dt&&Q.scale.set(dt[0],dt[1],dt[2]),Q.updateMatrix();let X=Q.geometry.clone();X.applyMatrix4(Q.matrix),Q.geometry=X,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),O.add(Q)}return O}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=L(I)),this.add(this.gizmo.rotate=L(U)),this.add(this.gizmo.scale=L(P)),this.add(this.picker.translate=L(A)),this.add(this.picker.rotate=L(v)),this.add(this.picker.scale=L(V)),this.add(this.helper.translate=L(C)),this.add(this.helper.rotate=L(w)),this.add(this.helper.scale=L(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ya;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Se.setFromEuler(ga.set(0,0,0)),o.quaternion.copy(n).multiply(Se),Math.abs(me.copy(kr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Se.setFromEuler(ga.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Se),Math.abs(me.copy(ss).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Se.setFromEuler(ga.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Se),Math.abs(me.copy(Hr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Se.setFromEuler(ga.set(0,Math.PI/2,0)),me.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(hf.lookAt(lf,me,ss)),o.quaternion.multiply(Se),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),qe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),qe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(qe),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(me.copy(kr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(me.copy(ss).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(me.copy(Hr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(me.copy(Hr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(me.copy(kr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(me.copy(ss).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(xa.copy(n),me.copy(this.eye).applyQuaternion(Se.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(hf.lookAt(this.eye,lf,ss)),o.name==="X"&&(Se.setFromAxisAngle(kr,Math.atan2(-me.y,me.z)),Se.multiplyQuaternions(xa,Se),o.quaternion.copy(Se)),o.name==="Y"&&(Se.setFromAxisAngle(ss,Math.atan2(me.x,me.z)),Se.multiplyQuaternions(xa,Se),o.quaternion.copy(Se)),o.name==="Z"&&(Se.setFromAxisAngle(Hr,Math.atan2(me.y,me.x)),Se.multiplyQuaternions(xa,Se),o.quaternion.copy(Se))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}},dh=class extends gt{constructor(){super(new Ai(1e5,1e5,2,2),new hi({visible:!1,wireframe:!0,side:un,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),_a.copy(kr).applyQuaternion(e==="local"?this.worldQuaternion:ya),zr.copy(ss).applyQuaternion(e==="local"?this.worldQuaternion:ya),Br.copy(Hr).applyQuaternion(e==="local"?this.worldQuaternion:ya),me.copy(zr),this.mode){case"translate":case"scale":switch(this.axis){case"X":me.copy(this.eye).cross(_a),Hn.copy(_a).cross(me);break;case"Y":me.copy(this.eye).cross(zr),Hn.copy(zr).cross(me);break;case"Z":me.copy(this.eye).cross(Br),Hn.copy(Br).cross(me);break;case"XY":Hn.copy(Br);break;case"YZ":Hn.copy(_a);break;case"XZ":me.copy(Br),Hn.copy(zr);break;case"XYZ":case"E":Hn.set(0,0,0);break}break;case"rotate":default:Hn.set(0,0,0)}Hn.length()===0?this.quaternion.copy(this.cameraQuaternion):(uf.lookAt(qe.set(0,0,0),Hn,me),this.quaternion.setFromRotationMatrix(uf)),super.updateMatrixWorld(t)}};var Ma=class extends ve{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new rt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Qs=new S,df=new jt,ff=new jt,pf=new S,mf=new S,ba=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),df.copy(x.matrixWorldInverse),ff.multiplyMatrices(x.projectionMatrix,df),h(g,g,x),f(g)},this.setSize=function(g,x){n=g,s=x,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=x+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)l(g.children[x])}function h(g,x,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){Qs.setFromMatrixPosition(g.matrixWorld),Qs.applyMatrix4(ff);let p=Qs.z>=-1&&Qs.z<=1&&g.layers.test(m.layers)===!0,y=g.element;y.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(e,x,m),y.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Qs.x*r+r)+"px,"+(-Qs.y*o+o)+"px)",y.parentNode!==c&&c.appendChild(y),g.onAfterRender(e,x,m));let M={distanceToCameraSquared:u(m,g)};a.objects.set(g,M)}for(let p=0,y=g.children.length;p<y;p++)h(g.children[p],x,m)}function u(g,x){return pf.setFromMatrixPosition(g.matrixWorld),mf.setFromMatrixPosition(x.matrixWorld),pf.distanceToSquared(mf)}function d(g){let x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function f(g){let x=d(g).sort(function(p,y){if(p.renderOrder!==y.renderOrder)return y.renderOrder-p.renderOrder;let M=a.objects.get(p).distanceToCameraSquared,_=a.objects.get(y).distanceToCameraSquared;return M-_}),m=x.length;for(let p=0,y=x.length;p<y;p++)x[p].element.style.zIndex=m-p}}};var de={M3:{d:3,p:.5,s:5.5,k:2,m:2.4,w:[3.2,7,.5],tap:2.5,torque:1.3,clear:[3.2,3.4,3.6]},M4:{d:4,p:.7,s:7,k:2.8,m:3.2,w:[4.3,9,.8],tap:3.3,torque:3,clear:[4.3,4.5,4.8]},M5:{d:5,p:.8,s:8,k:3.5,m:4.7,w:[5.3,10,1],tap:4.2,torque:6,clear:[5.3,5.5,5.8]},M6:{d:6,p:1,s:10,k:4,m:5.2,w:[6.4,12,1.6],tap:5,torque:10,clear:[6.4,6.6,7]},M8:{d:8,p:1.25,s:13,k:5.3,m:6.8,w:[8.4,16,1.6],tap:6.8,torque:25,clear:[8.4,9,10]},M10:{d:10,p:1.5,s:16,k:6.4,m:8.4,w:[10.5,20,2],tap:8.5,torque:49,clear:[10.5,11,12]},M12:{d:12,p:1.75,s:18,k:7.5,m:10.8,w:[13,24,2.5],tap:10.2,torque:86,clear:[13,13.5,14.5]},M16:{d:16,p:2,s:24,k:10,m:14.8,w:[17,30,3],tap:14,torque:210,clear:[17,17.5,18.5]},M20:{d:20,p:2.5,s:30,k:12.5,m:18,w:[21,37,3],tap:17.5,torque:410,clear:[21,22,24]}},Li=Object.keys(de),Sa=[6,8,10,12,16,20,25,30,35,40,45,50,55,60,65,70,80,90,100,110,120,130,140,150,160,180,200,220,240,260,280,300],wa=[2,3,4,5,6,8,10,12,16,20],Ea=[8,10,12,16,20,25,30,35,40,45,50,60,70,80,90,100,120],Ye={s235:{name:"Acciaio S235",rho:7.85,color:"#b4bfcc",short:"S235"},s355:{name:"Acciaio S355",rho:7.85,color:"#a7b2c0",short:"S355"},inox:{name:"Inox AISI 304",rho:7.93,color:"#d6dde6",short:"AISI 304"},alu:{name:"Alluminio 6061",rho:2.7,color:"#e3e8ee",short:"Al 6061"},ottone:{name:"Ottone CW614N",rho:8.47,color:"#d4b25a",short:"Ottone"},pom:{name:"Plastica POM",rho:1.41,color:"#ece9e1",short:"POM"},legno:{name:"Multistrato betulla",rho:.68,color:"#d9b98c",short:"Multistrato"},zinc:{name:"Acciaio 8.8 zincato",rho:7.85,color:"#e0a35a",short:"8.8 zinc."}};function ui(i){let t=null;for(let e of Li){let n=de[e];i+1e-6>=n.clear[0]&&(t=e)}return t}function gf(i,t){let e=de[t];return e?i<e.clear[0]-1e-6?(i<e.d,"stretto"):i<=e.clear[0]+1e-6?"fine":i<=e.clear[1]+1e-6?"medio":i<=e.clear[2]+1e-6?"grossolano":"largo":"n/d"}function Ta(i,t=Sa){for(let e of t)if(e+1e-6>=i)return e;return Math.ceil(i/10)*10}var pt=(i,t=1)=>{if(i==null||isNaN(i))return"\u2013";let e=Math.round(i*10**t)/10**t;return String(e).replace(".",",")};var Ev=1,Un=(i="id")=>`${i}${Date.now().toString(36)}${(Ev++).toString(36)}`,di={plate:{label:"Lastra",icon:"rect",isSheet:!0},disc:{label:"Disco / flangia",icon:"disc",isSheet:!0},angle:{label:"Angolare a L",icon:"angle",isSheet:!0},tube:{label:"Tubo / tondo",icon:"tube",isSheet:!1},bolt:{label:"Vite TE",icon:"bolt",fastener:!0},nut:{label:"Dado",icon:"nut",fastener:!0},washer:{label:"Rondella",icon:"washer",fastener:!0},pin:{label:"Perno cilindrico",icon:"pin",fastener:!0}},_f=[{group:"Lastre",items:[{key:"sq",name:"Lastra quadrata",type:"plate",params:{w:100,h:100,t:5,r:0},sub:"100 \xD7 100 \xD7 5"},{key:"rect",name:"Lastra rettangolare",type:"plate",params:{w:200,h:100,t:5,r:0},sub:"200 \xD7 100 \xD7 5"},{key:"disc",name:"Disco",type:"disc",params:{d:120,din:0,t:8},sub:"\xD8 120 \xD7 8"},{key:"ring",name:"Flangia forata",type:"disc",params:{d:120,din:50,t:8},sub:"\xD8 120 / \xD8 50",pattern:{n:4,pcd:90,d:9}}]},{group:"Profili",items:[{key:"flat",name:"Barra piatta",type:"plate",params:{w:300,h:40,t:8,r:0},sub:"300 \xD7 40 \xD7 8"},{key:"angle",name:"Angolare a L",type:"angle",params:{a:40,b:40,t:4,L:120},sub:"40 \xD7 40 \xD7 4 \xD7 120"},{key:"tube",name:"Tubo tondo",type:"tube",params:{d:40,din:32,L:200},sub:"\xD8 40 \xD7 4 \xD7 200"},{key:"bar",name:"Tondo pieno",type:"tube",params:{d:20,din:0,L:150},sub:"\xD8 20 \xD7 150"}]},{group:"Bulloneria e perni",items:[{key:"bolt",name:"Vite TE",type:"bolt",params:{size:"M8",L:30},sub:"M8 \xD7 30"},{key:"nut",name:"Dado",type:"nut",params:{size:"M8"},sub:"M8"},{key:"washer",name:"Rondella",type:"washer",params:{size:"M8"},sub:"M8"},{key:"pin",name:"Perno cilindrico",type:"pin",params:{d:8,L:40},sub:"\xD8 8 \xD7 40"}]}];function Aa(i="Nuovo progetto"){return{version:1,id:Un("prj"),name:i,created:Date.now(),modified:Date.now(),settings:{snap:5,grid:20,fit:"medium",defaultMaterial:"s235"},parts:[],stacks:[],steps:[],video:null,counter:{}}}function mn(i,t,e={},n={}){let r=!!di[t].fastener;return{id:Un("p"),type:t,name:n.name||Av(i,t,e),material:n.material||(r?"zinc":i.settings.defaultMaterial||"s235"),pos:[0,0,0],quat:[0,0,0,1],params:{...Tv(t),...e},holes:[],stack:null}}function Tv(i){switch(i){case"plate":return{w:100,h:100,t:5,r:0};case"disc":return{d:120,din:0,t:8};case"angle":return{a:40,b:40,t:4,L:120};case"tube":return{d:40,din:32,L:200};case"bolt":return{size:"M8",L:30};case"nut":return{size:"M8"};case"washer":return{size:"M8"};case"pin":return{d:8,L:40}}return{}}function Av(i,t,e){let n={plate:"Lastra",disc:"Disco",angle:"Angolare",tube:"Tubo",bolt:"Vite",nut:"Dado",washer:"Rondella",pin:"Perno"}[t]||"Pezzo";return i.counter[n]=(i.counter[n]||0)+1,`${n} ${i.counter[n]}`}function Di(i){let t=i.params,e=n=>String(Math.round(n*10)/10).replace(".",",");switch(i.type){case"plate":return`${e(t.w)} \xD7 ${e(t.h)} \xD7 ${e(t.t)} mm`;case"disc":return t.din>0?`\xD8 ${e(t.d)} / \xD8 ${e(t.din)} \xD7 ${e(t.t)} mm`:`\xD8 ${e(t.d)} \xD7 ${e(t.t)} mm`;case"angle":return`L ${e(t.a)} \xD7 ${e(t.b)} \xD7 ${e(t.t)} \u2013 lungo ${e(t.L)} mm`;case"tube":return t.din>0?`\xD8 ${e(t.d)} \xD7 ${e((t.d-t.din)/2)} \u2013 lungo ${e(t.L)} mm`:`Tondo \xD8 ${e(t.d)} \u2013 lungo ${e(t.L)} mm`;case"bolt":return`${t.size} \xD7 ${t.L}`;case"nut":return`${t.size}`;case"washer":return`${t.size}`;case"pin":return`\xD8 ${e(t.d)} \xD7 ${e(t.L)}`}return""}function Vr(i){if(i.type==="plate"){let t=i.params;return Math.abs(t.w-t.h)<1e-6?"Lastra quadrata":Math.max(t.w,t.h)/Math.min(t.w,t.h)>=4?"Barra piatta":"Lastra rettangolare"}return i.type==="disc"?i.params.din>0?"Flangia / anello":"Disco":i.type==="tube"?i.params.din>0?"Tubo tondo":"Tondo pieno":di[i.type].label}function rs(i){let t=i.params,e=(n,s,r)=>new S(n,s,r);switch(i.type){case"plate":return[{id:"A",origin:e(0,0,0),u:e(1,0,0),v:e(0,1,0),n:e(0,0,1),depth:t.t,size:[t.w,t.h]}];case"disc":return[{id:"A",origin:e(0,0,0),u:e(1,0,0),v:e(0,1,0),n:e(0,0,1),depth:t.t,size:[t.d,t.d],centered:!0}];case"angle":return[{id:"A",origin:e(0,0,0),u:e(1,0,0),v:e(0,1,0),n:e(0,0,1),depth:t.t,size:[t.a,t.L]},{id:"B",origin:e(0,0,0),u:e(0,1,0),v:e(0,0,1),n:e(1,0,0),depth:t.t,size:[t.L,t.b]}]}return[]}function Oe(i){let t=[],e=Gr(i),n=new qt().setFromMatrix4(e),s=rs(i);for(let r of i.holes){let o=s.find(u=>u.id===(r.face||"A"))||s[0];if(!o)continue;let c=o.origin.clone().addScaledVector(o.u,r.x).addScaledVector(o.v,r.y).clone().applyMatrix4(e),l=o.n.clone().applyMatrix3(n).normalize(),h=c.clone().addScaledVector(l,o.depth);t.push({part:i,hole:r,a:c,b:h,dir:l,d:r.d,depth:o.depth})}return t}function Gr(i){let t=new jt;return t.compose(new S(...i.pos),new Vt(...i.quat),new S(1,1,1)),t}function en(i,t,e,n,s="A",r="pass",o=null){let a={id:Un("h"),x:fh(t),y:fh(e),d:fh(n),face:s,kind:r,thread:o};return i.holes.push(a),a}var fh=i=>Math.round(i*100)/100;function Ui(i,t){let e=i.params,n=t.d/2;if(i.type==="plate")return t.x-n>.5&&t.y-n>.5&&t.x+n<e.w-.5&&t.y+n<e.h-.5;if(i.type==="disc"){let s=Math.hypot(t.x,t.y);return s+n<e.d/2-.5&&(e.din<=0||s-n>e.din/2+.5)}return i.type==="angle"?(t.face||"A")==="A"?t.x-n>e.t+.5&&t.x+n<e.a-.5&&t.y-n>.5&&t.y+n<e.L-.5:t.x-n>.5&&t.x+n<e.L-.5&&t.y-n>e.t+.5&&t.y+n<e.b-.5:!0}function yf(i,{nx:t,ny:e,px:n,py:s,x0:r,y0:o,d:a,face:c="A"}){let l=[];for(let h=0;h<t;h++)for(let u=0;u<e;u++)l.push(en(i,r+h*n,o+u*s,a,c));return l}function tr(i,{n:t,pcd:e,start:n=0,cx:s=0,cy:r=0,d:o,face:a="A"}){let c=[];for(let l=0;l<t;l++){let h=(n+l*360/t)*Math.PI/180;c.push(en(i,s+Math.cos(h)*e/2,r+Math.sin(h)*e/2,o,a))}return c}function vf(i,{margin:t,d:e}){let n=i.params;return i.type!=="plate"?[]:[[t,t],[n.w-t,t],[t,n.h-t],[n.w-t,n.h-t]].map(([s,r])=>en(i,s,r,e))}function Wr(i){let t=i.params,e=i.holes.reduce((n,s)=>n+Math.PI*s.d*s.d/4,0);return i.type==="plate"?t.w*t.h-(4-Math.PI)*t.r*t.r-e:i.type==="disc"?Math.PI/4*(t.d*t.d-t.din*t.din)-e:0}function Rv(i){let t=i.params,e=i.holes.reduce((n,s)=>n+Math.PI*s.d*s.d/4,0);switch(i.type){case"plate":case"disc":return Wr(i)*t.t;case"angle":return(t.a*t.t+(t.b-t.t)*t.t)*t.L-e*t.t;case"tube":return Math.PI/4*(t.d*t.d-t.din*t.din)*t.L;case"bolt":{let n=de[t.size];return Math.PI/4*n.d*n.d*t.L*.92+xf(n.s)*n.k}case"nut":{let n=de[t.size];return(xf(n.s)-Math.PI/4*n.d*n.d)*n.m}case"washer":{let n=de[t.size];return Math.PI/4*(n.w[1]**2-n.w[0]**2)*n.w[2]}case"pin":return Math.PI/4*t.d*t.d*t.L}return 0}var xf=i=>Math.sqrt(3)/2*i*i;function Vn(i){let t=(Ye[i.material]||Ye.s235).rho;return Rv(i)*t/1e6}function Mf(i){let t=i.holes.map(e=>`${e.face||"A"}:${e.x},${e.y},${e.d},${e.kind}`).sort().join(";");return`${i.type}|${i.material}|${JSON.stringify(i.params)}|${t}`}function bf(i){let t=i.params;switch(i.type){case"bolt":return`Vite TE ISO 4017 ${t.size} \xD7 ${t.L} \u2013 cl. 8.8`;case"nut":return`Dado esagonale ISO 4032 ${t.size} \u2013 cl. 8`;case"washer":return`Rondella piana ISO 7089 ${t.size}`;case"pin":return`Perno cilindrico ISO 2338 \xD8 ${t.d} m6 \xD7 ${t.L}`}let e=i.holes.length;return`${Vr(i)} ${Di(i)}${e?` \u2013 ${e} for${e===1?"o":"i"}`:""}`}function Ni(i){return JSON.parse(JSON.stringify(i))}var Ef=40,ph=new Map;function Tf(i,t="normal"){let e=(Ye[i.material]||Ye.s235).color,n=`${e}|${t}|${i.type}`;if(ph.has(n))return ph.get(n);let s=!["pom","legno"].includes(i.material),r=new oa({color:new Wt(e),metalness:s?.2:0,roughness:s?.55:.8,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return t==="selected"&&(r.emissive=new Wt("#1f6feb"),r.emissiveIntensity=.28),t==="hover"&&(r.emissive=new Wt("#1f6feb"),r.emissiveIntensity=.12),t==="ghost"&&(r.transparent=!0,r.opacity=.25,r.depthWrite=!1),t==="warn"&&(r.emissive=new Wt("#d64545"),r.emissiveIntensity=.35),ph.set(n,r),r}var Af={normal:new tn({color:3950165,transparent:!0,opacity:.55}),selected:new tn({color:2060267}),ghost:new tn({color:3950165,transparent:!0,opacity:.15})};function Sf(i,t,e){let n=new Ri;return e=Math.max(0,Math.min(e||0,i/2-.01,t/2-.01)),e<=0?(n.moveTo(0,0),n.lineTo(i,0),n.lineTo(i,t),n.lineTo(0,t),n.lineTo(0,0),n):(n.moveTo(e,0),n.lineTo(i-e,0),n.absarc(i-e,e,e,-Math.PI/2,0,!1),n.lineTo(i,t-e),n.absarc(i-e,t-e,e,0,Math.PI/2,!1),n.lineTo(e,t),n.absarc(e,t-e,e,Math.PI/2,Math.PI,!1),n.lineTo(0,e),n.absarc(e,e,e,Math.PI,Math.PI*1.5,!1),n)}function er(i,t,e,n=!0){let s=new $s;return s.absarc(i,t,e,0,Math.PI*2,n),s}function $r(i,t){let e=new sa(i,{depth:t,bevelEnabled:!1,curveSegments:Ef,steps:1});return e.computeVertexNormals(),e}function Cv(i,t){let e=new Ae(i/Math.sqrt(3),i/Math.sqrt(3),t,6);return e.rotateX(Math.PI/2),e.rotateZ(Math.PI/6),e}function wf(i,t,e,n=Ef){let s=[new rt(i,0),new rt(t,0),new rt(t,e),new rt(i,e),new rt(i,0)],r=new na(s,n);return r.rotateX(Math.PI/2),r}function mh(i){let t=i.params,e=[];switch(i.type){case"plate":{let n=Sf(t.w,t.h,t.r);for(let s of i.holes)n.holes.push(er(s.x,s.y,s.d/2));e.push($r(n,t.t));break}case"disc":{let n=new Ri;n.absarc(0,0,t.d/2,0,Math.PI*2,!1),t.din>0&&n.holes.push(er(0,0,t.din/2));for(let s of i.holes)n.holes.push(er(s.x,s.y,s.d/2));e.push($r(n,t.t));break}case"angle":{let n=Sf(t.a,t.L,0);for(let o of i.holes.filter(a=>(a.face||"A")==="A"))n.holes.push(er(o.x,o.y,o.d/2));e.push($r(n,t.t));let s=new Ri;s.moveTo(0,t.t),s.lineTo(t.L,t.t),s.lineTo(t.L,t.b),s.lineTo(0,t.b),s.lineTo(0,t.t);for(let o of i.holes.filter(a=>a.face==="B"))s.holes.push(er(o.x,o.y,o.d/2));let r=$r(s,t.t);r.applyMatrix4(new jt().makeBasis(new S(0,1,0),new S(0,0,1),new S(1,0,0))),e.push(r);break}case"tube":{if(t.din>0)e.push(wf(t.din/2,t.d/2,t.L,48));else{let n=new Ae(t.d/2,t.d/2,t.L,48);n.rotateX(Math.PI/2),n.translate(0,0,t.L/2),e.push(n)}break}case"bolt":{let n=de[t.size],s=Cv(n.s,n.k);s.translate(0,0,n.k/2),e.push(s);let r=new Ae(n.d/2,n.d/2,t.L,28);r.rotateX(Math.PI/2),r.translate(0,0,-t.L/2),e.push(r);break}case"nut":{let n=de[t.size],s=new Ri;for(let r=0;r<6;r++){let o=Math.PI/6+r*Math.PI/3,a=n.s/Math.sqrt(3);r?s.lineTo(Math.cos(o)*a,Math.sin(o)*a):s.moveTo(Math.cos(o)*a,Math.sin(o)*a)}s.closePath(),s.holes.push(er(0,0,n.d/2)),e.push($r(s,n.m));break}case"washer":{let n=de[t.size];e.push(wf(n.w[0]/2,n.w[1]/2,n.w[2]));break}case"pin":{let n=new Ae(t.d/2,t.d/2,t.L,28);n.rotateX(Math.PI/2),n.translate(0,0,t.L/2),e.push(n);break}}return e}function Rf(i,t="normal"){let e=new Xe;e.userData.partId=i.id;for(let n of mh(i)){let s=new gt(n,Tf(i,t));s.castShadow=!0,s.receiveShadow=!0,s.userData.partId=i.id,e.add(s);let r=new ia(n,28),o=new Gs(r,Af[t==="selected"?"selected":t==="ghost"?"ghost":"normal"]);o.userData.partId=i.id,o.userData.isEdge=!0,o.raycast=()=>{},e.add(o)}return gh(e,i),e}function gh(i,t){i.position.set(...t.pos),i.quaternion.set(...t.quat),i.updateMatrixWorld(!0)}function Cf(i,t,e){for(let n of i.children)n.isMesh?n.material=Tf(t,e):n.isLineSegments&&(n.material=Af[e==="selected"?"selected":e==="ghost"?"ghost":"normal"])}function Fe(i){let t=new be,e=Gr(i);for(let n of mh(i))n.computeBoundingBox(),t.union(n.boundingBox.clone().applyMatrix4(e)),n.dispose();return t}function If(i){let t=new be;for(let e of mh(i))e.computeBoundingBox(),t.union(e.boundingBox),e.dispose();return t}function Ra(i,t=2060267){let e=new Xe,n=i.d/2,s=[];for(let h=0;h<=48;h++){let u=h/48*Math.PI*2;s.push(new S(Math.cos(u)*n,Math.sin(u)*n,0))}let r=new Me().setFromPoints(s),o=new tn({color:t,depthTest:!1,transparent:!0}),a=new Vt().setFromUnitVectors(new S(0,0,1),i.dir);for(let h of[i.a,i.b]){let u=new ke(r,o);u.position.copy(h),u.quaternion.copy(a),u.renderOrder=10,e.add(u)}let c=new Me().setFromPoints([i.a.clone().addScaledVector(i.dir,-i.d*1.5),i.b.clone().addScaledVector(i.dir,i.d*1.5)]),l=new ke(c,new qs({color:t,dashSize:2,gapSize:1.5,depthTest:!1,transparent:!0}));return l.computeLineDistances(),l.renderOrder=10,e.add(l),e}var Ca=class{constructor(t){this.container=t,this.objects=new Map,this.states=new Map,this.offsets=new Map,this.hidden=new Set,this.onTransform=null,this.onTransformEnd=null;let e=this.renderer=new Zo({antialias:!0,preserveDrawingBuffer:!0,alpha:!1});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=$e,e.toneMapping=ql||Xl,e.shadowMap.enabled=!0,e.shadowMap.type=$l,t.appendChild(e.domElement),e.domElement.classList.add("gl"),this.labels=new ba,this.labels.domElement.className="labels",t.appendChild(this.labels.domElement);let n=this.scene=new Ji;n.background=new Wt("#e6eaf0"),ve.DEFAULT_UP.set(0,0,1);let s=this.camera=new Qe(35,1,1,5e4);s.up.set(0,0,1),s.position.set(420,-520,380),n.add(new la(16777215,8950432,1.6));let r=this.sun=new Ur(16777215,1.6);r.position.set(300,-200,600),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let o=r.shadow.camera;o.left=o.bottom=-800,o.right=o.top=800,o.near=10,o.far=3e3,n.add(r),n.add(r.target);let a=new Ur(16777215,.6);a.position.set(-400,300,200),n.add(a),this.grid=this.makeGrid(20,60),n.add(this.grid);let c=this.ground=new gt(new Ai(8e3,8e3),new ra({opacity:.12}));c.receiveShadow=!0,c.position.z=-.05,c.raycast=()=>{},n.add(c),this.axes=this.makeAxes(),n.add(this.axes),this.root=new Xe,n.add(this.root),this.overlay=new Xe,n.add(this.overlay);let l=this.controls=new ma(s,e.domElement);l.enableDamping=!0,l.dampingFactor=.12,l.screenSpacePanning=!0,l.target.set(80,60,30),l.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.PAN,RIGHT:Ln.PAN},l.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN};let h=this.gizmo=new va(s,e.domElement);h.setSize(.9),h.addEventListener("dragging-changed",u=>{l.enabled=!u.value,!u.value&&this.onTransformEnd&&this.onTransformEnd(this.proxy)}),h.addEventListener("objectChange",()=>{this.onTransform&&this.onTransform(this.proxy)}),this.gizmoHelper=h.getHelper?h.getHelper():h,n.add(this.gizmoHelper),this.proxy=new ve,n.add(this.proxy),this.raycaster=new Zs,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this._loop=this._loop.bind(this),this.renderer.setAnimationLoop(this._loop)}makeGrid(t,e){let n=new Xe,s=[],r=[];for(let a=-e;a<=e;a++)(a%5===0?r:s).push(-e*t,a*t,0,e*t,a*t,0,a*t,-e*t,0,a*t,e*t,0);let o=(a,c,l)=>{let h=new Me;h.setAttribute("position",new se(a,3));let u=new Gs(h,new tn({color:c,transparent:!0,opacity:l,depthWrite:!1}));return u.raycast=()=>{},u};return n.add(o(s,10135220,.25)),n.add(o(r,8095638,.45)),n}setGrid(t){this.scene.remove(this.grid),this.grid=this.makeGrid(t,Math.round(1200/t)),this.scene.add(this.grid)}makeAxes(){let t=new Xe,e=(n,s)=>{let r=new Me().setFromPoints([new S,n]),o=new ke(r,new tn({color:s,depthTest:!1}));return o.renderOrder=5,o.raycast=()=>{},o};return t.add(e(new S(60,0,0),14042437),e(new S(0,60,0),2006618),e(new S(0,0,60),2060267)),t}resize(){let t=Math.max(10,this.container.clientWidth),e=Math.max(10,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.labels.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}_loop(){this.controls.update(),this.animFn&&this.animFn(performance.now()),this.renderer.render(this.scene,this.camera),this.labels.render(this.scene,this.camera)}sync(t){let e=new Set;for(let n of t.parts){e.add(n.id);let s=JSON.stringify([n.type,n.params,n.holes,n.material]),r=this.objects.get(n.id),o=this.states.get(n.id)||"normal";if(!r||r.key!==s){r&&(this.root.remove(r.obj),Pf(r.obj));let a=Rf(n,o);this.root.add(a),this.objects.set(n.id,{obj:a,key:s,part:n})}else r.part=n,gh(r.obj,n);this.applyOffset(n.id),this.objects.get(n.id).obj.visible=!this.hidden.has(n.id)&&!n.hidden}for(let[n,s]of this.objects)e.has(n)||(this.root.remove(s.obj),Pf(s.obj),this.objects.delete(n))}applyOffset(t){let e=this.objects.get(t);if(!e)return;let n=e.part,s=this.offsets.get(t);e.obj.position.set(...n.pos),s&&e.obj.position.add(s),e.obj.updateMatrixWorld(!0)}setStates(t){for(let[e,n]of this.objects){let s=t.get(e)||"normal";this.states.get(e)!==s&&(Cf(n.obj,n.part,s),this.states.set(e,s))}}ndc(t){let e=this.renderer.domElement.getBoundingClientRect();return new rt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}pick(t,e=null){this.raycaster.setFromCamera(this.ndc(t),this.camera);let n=[];for(let[u,d]of this.objects)d.obj.visible&&(!e||e(d.part))&&d.obj.traverse(f=>{f.isMesh&&n.push(f)});let s=this.raycaster.intersectObjects(n,!1);if(!s.length)return null;let r=s[0],o=r.object.userData.partId,a=this.objects.get(o),c=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld).normalize():null,l=this.offsets.get(o),h=r.point.clone();return l&&h.sub(l),{part:a.part,point:h,normal:c,distance:r.distance}}toScreen(t){let e=t.clone().project(this.camera),n=this.renderer.domElement.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height,z:e.z}}pxPerMm(t){let e=new S().setFromMatrixColumn(this.camera.matrixWorld,0).normalize(),n=this.toScreen(t),s=this.toScreen(t.clone().add(e));return Math.hypot(n.x-s.x,n.y-s.y)}pickGround(t,e=0){this.raycaster.setFromCamera(this.ndc(t),this.camera);let n=new hn(new S(0,0,1),-e),s=new S;return this.raycaster.ray.intersectPlane(n,s)?s:null}attachGizmo(t,e,n){if(!e.length){this.detachGizmo();return}let s=new be;for(let o of e)s.union(Fe(o));let r=e.length===1?new S(...e[0].pos):s.getCenter(new S);this.proxy.position.copy(r),this.proxy.quaternion.set(...e.length===1?e[0].quat:[0,0,0,1]),this.proxy.updateMatrixWorld(!0),this.gizmo.setMode(t),this.gizmo.setSpace(t==="rotate"?"local":"world"),this.gizmo.setTranslationSnap(n||null),this.gizmo.setRotationSnap(Dn.degToRad(15)),this.gizmo.attach(this.proxy),this.gizmoStart={pos:this.proxy.position.clone(),quat:this.proxy.quaternion.clone()}}detachGizmo(){this.gizmo.detach()}bounds(t){let e=new be;for(let n of t.parts)n.hidden||e.union(Fe(n));return e}fit(t,e=null,n=!0){let s=this.bounds(t);s.isEmpty()&&(s=new be(new S(0,0,0),new S(200,150,60)));let r=s.getCenter(new S),o=s.getSize(new S).length()||200,a={iso:[.62,-.78,.55],front:[0,-1,1e-4],top:[0,-1e-4,1],right:[1,0,1e-4],back:[0,1,1e-4]},c;e&&a[e]?c=new S(...a[e]).normalize():c=this.camera.position.clone().sub(this.controls.target).normalize();let l=Dn.degToRad(this.camera.fov),h=o/2/Math.tan(l/2)*(this.camera.aspect<1?1.08/this.camera.aspect:1.1),u=r.clone().addScaledVector(c,h);this.animateCamera(u,r,n?450:0);let d=this.sun.shadow.camera,f=Math.max(400,o);d.left=d.bottom=-f,d.right=d.top=f,d.updateProjectionMatrix(),this.sun.position.copy(r).add(new S(f*.5,-f*.35,f*1.2)),this.sun.target.position.copy(r)}animateCamera(t,e,n){let s=this.camera.position.clone(),r=this.controls.target.clone();if(!n){this.camera.position.copy(t),this.controls.target.copy(e);return}let o=performance.now(),a=()=>{let c=Math.min(1,(performance.now()-o)/n),l=1-Math.pow(1-c,3);this.camera.position.lerpVectors(s,t,l),this.controls.target.lerpVectors(r,e,l),c<1&&requestAnimationFrame(a)};a()}clearOverlay(){for(let t of[...this.overlay.children])this.overlay.remove(t),t.traverse(e=>{e.element&&e.element.remove()})}addOverlay(t){return this.overlay.add(t),t}label(t,e,n="tag"){let s=document.createElement("div");s.className=n,s.textContent=t;let r=new Ma(s);return r.position.copy(e),this.overlay.add(r),r}line(t,e,n=2060267,s=!1){let r=new Me().setFromPoints([t,e]),o=s?new qs({color:n,dashSize:4,gapSize:3,depthTest:!1}):new tn({color:n,depthTest:!1}),a=new ke(r,o);return s&&a.computeLineDistances(),a.renderOrder=20,this.overlay.add(a),a}dot(t,e=2060267,n=2.2){let s=new gt(new Xs(n,16,12),new hi({color:e,depthTest:!1}));return s.position.copy(t),s.renderOrder=21,this.overlay.add(s),s}screenshot(t=0,e=0){if(this.renderer.render(this.scene,this.camera),!t)return this.renderer.domElement.toDataURL("image/png");let n=document.createElement("canvas");n.width=t,n.height=e;let s=this.renderer.domElement,r=Math.max(t/s.width,e/s.height),o=t/r,a=e/r;return n.getContext("2d").drawImage(s,(s.width-o)/2,(s.height-a)/2,o,a,0,0,t,e),n.toDataURL("image/jpeg",.85)}};function Pf(i){i.traverse(t=>{t.geometry&&t.geometry.dispose()})}var Df="smonta.projects",_h="smonta.project.",xh=new Set,it={project:null,selection:[],undoStack:[],redoStack:[],dirty:!1};function Uf(i){return xh.add(i),()=>xh.delete(i)}function Ia(i="change",t={}){for(let e of xh)e(i,t)}function Iv(i=""){it.undoStack.push({label:i,data:JSON.stringify(it.project)}),it.undoStack.length>120&&it.undoStack.shift(),it.redoStack.length=0}function Xr(i="change",t={}){it.project.modified=Date.now(),it.dirty=!0,Lv(),Ia(i,t)}function Qt(i,t,e="change"){Iv(i);let n=t(it.project);return Xr(e),n}function Nf(){let i=it.undoStack.pop();return i?(it.redoStack.push({label:i.label,data:JSON.stringify(it.project)}),it.project=JSON.parse(i.data),it.selection=it.selection.filter(t=>it.project.parts.some(e=>e.id===t)),Xr("reload"),i.label||!0):!1}function Of(){let i=it.redoStack.pop();return i?(it.undoStack.push({label:i.label,data:JSON.stringify(it.project)}),it.project=JSON.parse(i.data),it.selection=it.selection.filter(t=>it.project.parts.some(e=>e.id===t)),Xr("reload"),i.label||!0):!1}var Gn=i=>it.project.parts.find(t=>t.id===i),Sn=()=>it.selection.map(Gn).filter(Boolean);function ze(i,t=!1){if(i=(Array.isArray(i)?i:[i]).filter(Boolean),t)for(let e of i){let n=it.selection.indexOf(e);n>=0?it.selection.splice(n,1):it.selection.push(e)}else it.selection=i;Ia("selection")}function Ff(i){try{return localStorage.getItem(i)}catch{return null}}function zf(i,t){try{return localStorage.setItem(i,t),!0}catch{return!1}}function Pv(i){try{localStorage.removeItem(i)}catch{}}function nr(){try{return JSON.parse(Ff(Df)||"[]")}catch{return[]}}function Bf(i){zf(Df,JSON.stringify(i))}var Lf=null;function Lv(){clearTimeout(Lf),Lf=setTimeout(Oi,600)}function Oi(){let i=it.project;if(!i)return!1;let t=zf(_h+i.id,JSON.stringify(i)),e=nr().filter(n=>n.id!==i.id);return e.unshift({id:i.id,name:i.name,modified:i.modified,parts:i.parts.filter(n=>!n.stack).length,fasteners:i.parts.filter(n=>n.stack).length}),Bf(e),it.dirty=!t,Ia("saved",{ok:t}),t}function kf(i){let t=Ff(_h+i);return t?(qr(JSON.parse(t)),!0):!1}function Hf(i){Pv(_h+i),Bf(nr().filter(t=>t.id!==i))}function qr(i){it.project=Dv(i),it.selection=[],it.undoStack=[],it.redoStack=[],it.dirty=!1,Ia("reload")}function Vf(i){qr(Aa(i)),Oi()}function Dv(i){i.settings={snap:5,grid:20,fit:"medium",defaultMaterial:"s235",...i.settings||{}},i.stacks=i.stacks||[],i.steps=i.steps||[],i.counter=i.counter||{};for(let t of i.parts)t.holes=t.holes||[],t.quat=t.quat||[0,0,0,1];return i}var Wf=i=>new S(...i),$f=.35;function Ze(i){return di[i.type]&&di[i.type].isSheet}function Uv(i,t){return Oe(i).find(e=>e.hole.id===t)||null}function Pa(i,t,e,n){let s=new Vt(...i.quat),r=t.clone().multiply(s),o=Wf(i.pos),a=e.clone().sub(o).applyQuaternion(t),c=n.clone().sub(a);i.quat=r.toArray(),i.pos=c.toArray().map(l=>Math.round(l*1e3)/1e3)}function os(i,t,e,n,s=null){let r=t.axis,o=n.axis,a=t.side==="b"?r.b.clone():r.a.clone(),c=t.side==="b"?r.dir.clone():r.dir.clone().negate(),l=o.dir.dot(c);Math.abs(l)>.05&&(n={...n,side:l<0?"b":"a"});let h=n.side==="b"?o.b.clone():o.a.clone(),u=n.side==="b"?o.dir.clone():o.dir.clone().negate(),d=new Vt().setFromUnitVectors(u,c.clone().negate());Pa(e,d,h,a);let f=Nv(s&&s.length?s:[i],e,a,c,n.axis.hole.id);if(f.angle){let g=new Vt().setFromAxisAngle(c,f.angle);Pa(e,g,a,a)}else if(f.matches===0){let g=Ov(i,e,c);g&&Pa(e,new Vt().setFromAxisAngle(c,g),a,a)}return 1+f.matches}function Nv(i,t,e,n,s){let r=i.flatMap(h=>Oe(h)),o=Oe(t).filter(h=>h.hole.id!==s),a=h=>{let u=h.clone().sub(e);return u.addScaledVector(n,-u.dot(n))},c=new Set([0]);for(let h of o){if(Math.abs(h.dir.dot(n))<.999)continue;let u=a(h.a);if(!(u.length()<.5))for(let d of r){if(Math.abs(d.dir.dot(n))<.999)continue;let f=a(d.a);if(Math.abs(f.length()-u.length())>.5)continue;let g=Math.atan2(u.clone().cross(f).dot(n),u.dot(f));c.add(Math.round(g*1e6)/1e6)}}let l={angle:0,matches:0};for(let h of c){let u=new Vt().setFromAxisAngle(n,h),d=0;for(let f of o){let g=f.a.clone().sub(e).applyQuaternion(u).add(e),x=f.dir.clone().applyQuaternion(u);r.some(m=>Math.abs(m.dir.dot(x))>.999&&yh(m.a,m.dir,g)<.5)&&d++}(d>l.matches||d===l.matches&&Math.abs(h)<Math.abs(l.angle))&&(l={angle:h,matches:d})}return l}function Ov(i,t,e){let n=new Vt(...i.quat),s=new Vt(...t.quat),r=new S(1,0,0).applyQuaternion(n),o=new S(0,1,0).applyQuaternion(n),a=new S(0,0,1).applyQuaternion(n),c=[r,o,a].map(d=>d.clone().addScaledVector(e,-d.dot(e))).filter(d=>d.length()>.5)[0];if(!c)return 0;let l=[new S(1,0,0),new S(0,1,0),new S(0,0,1)].map(d=>d.applyQuaternion(s)).map(d=>d.clone().addScaledVector(e,-d.dot(e))).filter(d=>d.length()>.5)[0];if(!l)return 0;c.normalize(),l.normalize();let h=Math.atan2(l.clone().cross(c).dot(e),l.dot(c)),u=Math.round(h/(Math.PI/2))*(Math.PI/2);return Math.abs(h-u)<1e-4?0:h-u}function Xf(i,t,e,n,s){let r=new Vt().setFromUnitVectors(s.clone().normalize(),t.clone().normalize().negate()),o=Wf(e.pos),a=n.clone().sub(o).applyQuaternion(r).add(o),c=t.clone().normalize().multiplyScalar(i.clone().sub(a).dot(t.clone().normalize()));Pa(e,r,n,a.clone().add(c))}var yh=(i,t,e)=>{let n=e.clone().sub(i);return n.addScaledVector(t,-n.dot(t)).length()};function Fi(i,t){let e=t.axis.a.clone(),n=t.axis.dir.clone(),s=[];for(let h of i.parts)if(Ze(h))for(let u of Oe(h)){if(Math.abs(u.dir.dot(n))<.999||yh(e,n,u.a)>$f)continue;let d=u.a.clone().sub(e).dot(n),f=u.b.clone().sub(e).dot(n);s.push({part:h,axis:u,t0:Math.min(d,f),t1:Math.max(d,f)})}s.sort((h,u)=>h.t0-u.t0);let r=s.findIndex(h=>h.axis.hole.id===t.axis.hole.id);if(r<0)return null;let o=r,a=r,c=[];for(;o>0&&s[o].t0-s[o-1].t1<25;){let h=s[o].t0-s[o-1].t1;h>.05&&c.push(h),o--}for(;a<s.length-1&&s[a+1].t0-s[a].t1<25;){let h=s[a+1].t0-s[a].t1;h>.05&&c.push(h),a++}let l=s.slice(o,a+1);return{o:e,dir:n,segs:l,tmin:l[0].t0,tmax:l[l.length-1].t1,gaps:c}}function ir(i,t,e="bolt",n={}){let s=Fi(i,t);if(!s)return{error:"Foro non trovato."};let r=[],o=Math.min(...s.segs.map(N=>N.axis.d)),a=s.tmax-s.tmin,c=t.side==="b"?t.axis.dir.dot(s.dir)>0:t.axis.dir.dot(s.dir)<0,l=c?s.tmax:s.tmin,h=c?s.tmin:s.tmax,u=c?s.dir.clone().negate():s.dir.clone(),d=N=>s.o.clone().addScaledVector(s.dir,N),f=[],g=Un("s"),x=(N,O)=>new Vt().setFromUnitVectors(N,O).toArray();if(s.gaps.length&&r.push(`Tra le lastre c'\xE8 uno spazio di ${pt(Math.max(...s.gaps))} mm: stringendo si deformano.`),e==="pin"){let N=wa.filter(et=>et<=o+.05).pop();if(!N)return{error:`Foro \xD8 ${pt(o)} troppo piccolo per un perno.`};let O=Ta(a,Ea),$=mn(i,"pin",{d:N,L:O},{name:`Perno \xD8${N}\xD7${O}`}),H=s.tmin-(O-a)/2;return $.pos=d(H).toArray(),$.quat=x(new S(0,0,1),s.dir),$.stack=g,f.push($),Math.abs(o-N)>.05&&r.push(`Foro \xD8 ${pt(o)} per perno \xD8 ${N}: per un accoppiamento preciso il foro va alesato \xD8 ${N} H7.`),{stack:{id:g,kind:"pin",size:`\xD8${N}`,L:O,members:f.map(et=>et.id),plates:[...new Set(s.segs.map(et=>et.part.id))],ref:{part:t.axis.part.id,hole:t.axis.hole.id,side:t.side},grip:a,warnings:r},parts:f,warnings:r}}let m=c?s.segs[0]:s.segs[s.segs.length-1],p=m.axis.hole.kind==="thread"&&s.segs.length>1,y=n.size||(p?m.axis.hole.thread:null),M=p?s.segs.filter(N=>N!==m):s.segs,_=Math.min(...M.map(N=>N.axis.d));if(y||(y=ui(_)),!y)return{error:`Il foro \xD8 ${pt(_)} \xE8 troppo piccolo per qualsiasi vite (minimo M3: \xD8 3,2).`};let I=de[y];for(let N of M){let O=gf(N.axis.d,y);O==="stretto"&&r.push(`${N.part.name}: foro \xD8 ${pt(N.axis.d)} troppo stretto per ${y} (serve almeno \xD8 ${pt(I.clear[0])}).`),O==="largo"&&r.push(`${N.part.name}: foro \xD8 ${pt(N.axis.d)} molto largo per ${y} (consigliato \xD8 ${pt(I.clear[1])}).`)}let A=I.w[2],C,U;if(p){let N=m.t1-m.t0,O=a-N,$=Math.min(N,["alu","pom","legno","ottone"].includes(m.part.material)?1.5*I.d:1*I.d);U=O+A+$,C=Ta(U),C>O+A+N+.01&&m.axis.hole.blind&&r.push(`La vite ${y}\xD7${C} tocca il fondo del foro cieco.`),$<.8*I.d&&r.push(`Filetto corto in ${m.part.name}: avvitati solo ${pt($)} mm (consigliati ${pt(I.d)} mm).`)}else U=a+2*A+I.m+2*I.p,C=Ta(U);n.L&&(C=n.L);let w=N=>x(new S(0,0,1),N),v=u.clone().negate(),P=d(l),V=mn(i,"washer",{size:y},{name:`Rondella ${y}`});V.pos=P.toArray(),V.quat=w(v),V.stack=g,f.push(V);let k=mn(i,"bolt",{size:y,L:C},{name:`Vite ${y}\xD7${C}`});if(k.pos=P.clone().addScaledVector(v,A).toArray(),k.quat=w(v),k.stack=g,f.push(k),!p){let N=d(h),O=mn(i,"washer",{size:y},{name:`Rondella ${y}`});O.pos=N.toArray(),O.quat=w(u),O.stack=g,f.push(O);let $=mn(i,"nut",{size:y},{name:`Dado ${y}`});$.pos=N.clone().addScaledVector(u,A).toArray(),$.quat=w(u),$.stack=g,f.push($);let H=C-(a+2*A+I.m);H<I.p&&r.push(`Vite ${y}\xD7${C} troppo corta: sporge ${pt(H)} mm dal dado (servono almeno ${pt(2*I.p)} mm).`)}return{stack:{id:g,kind:"bolt",size:y,L:C,threaded:p,members:f.map(N=>N.id),plates:[...new Set(s.segs.map(N=>N.part.id))],ref:{part:t.axis.part.id,hole:t.axis.hole.id,side:t.side},grip:a,torque:I.torque,warnings:r},parts:f,warnings:r}}function Fv(i,t){i.parts=i.parts.filter(o=>o.stack!==t.id);let e=i.parts.find(o=>o.id===t.ref.part),n=e&&Uv(e,t.ref.hole),s=i.stacks.indexOf(t);if(!n)return i.stacks.splice(s,1),null;let r=ir(i,{axis:n,side:t.ref.side},t.kind,t.kind==="bolt"&&t.manualL?{L:t.L,size:t.size}:{});if(r.error)return i.stacks.splice(s,1),null;r.stack.id=t.id,r.stack.manualL=t.manualL;for(let o of r.parts)o.stack=t.id;return r.stack.members=r.parts.map(o=>o.id),i.stacks[s]=r.stack,i.parts.push(...r.parts),r.stack}function on(i){for(let t of[...i.stacks])Fv(i,t)}function qf(i){let t=[],e=i.parts.filter(Ze);for(let r of e){for(let o of r.holes)if(!Ui(r,o))t.push({level:"err",text:`${r.name}: il foro \xD8 ${pt(o.d)} in (${pt(o.x)}; ${pt(o.y)}) esce dal pezzo o tocca il bordo.`,parts:[r.id]});else{let a=Bv(r,o);a!==null&&o.d<=30&&a<1.2*o.d-.01?t.push({level:"warn",text:`${r.name}: foro \xD8 ${pt(o.d)} vicino al bordo (${pt(a)} mm dal centro, per una vite ne servono almeno ${pt(1.2*o.d)}).`,parts:[r.id]}):a!==null&&o.d>30&&a-o.d/2<Math.max(2,zv(r))-.01&&t.push({level:"warn",text:`${r.name}: tra il foro \xD8 ${pt(o.d)} e il bordo restano solo ${pt(a-o.d/2)} mm di materiale.`,parts:[r.id]})}for(let o=0;o<r.holes.length;o++)for(let a=o+1;a<r.holes.length;a++){let c=r.holes[o],l=r.holes[a];if((c.face||"A")!==(l.face||"A"))continue;let h=Math.hypot(c.x-l.x,c.y-l.y);h<(c.d+l.d)/2+1&&t.push({level:"err",text:`${r.name}: due fori si sovrappongono o sono troppo vicini (interasse ${pt(h)} mm).`,parts:[r.id]})}}let n=e.flatMap(r=>Oe(r));for(let r=0;r<n.length;r++)for(let o=r+1;o<n.length;o++){let a=n[r],c=n[o];if(a.part.id===c.part.id||Math.abs(a.dir.dot(c.dir))<.999)continue;let l=yh(a.a,a.dir,c.a);if(l>$f&&l<Math.min(a.d,c.d)*.6){let h=[a.a,a.b].map(f=>f.clone().sub(a.a).dot(a.dir)),u=[c.a,c.b].map(f=>f.clone().sub(a.a).dot(a.dir));Math.max(Math.min(...u)-Math.max(...h),Math.min(...h)-Math.max(...u))<1&&t.push({level:"warn",text:`Fori di ${a.part.name} e ${c.part.name} disallineati di ${pt(l,2)} mm.`,parts:[a.part.id,c.part.id]})}}for(let r of i.stacks)for(let o of r.warnings||[])t.push({level:"warn",text:o,parts:r.members});let s=i.parts.filter(r=>Ze(r)||r.type==="tube");for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++){let a=kv(s[r],s[o]);a>.2&&t.push({level:"err",text:`${s[r].name} e ${s[o].name} si compenetrano (${pt(a)} mm).`,parts:[s[r].id,s[o].id]})}return t}var zv=i=>i.params.t||0;function Bv(i,t){let e=i.params;return i.type==="plate"?Math.min(t.x,t.y,e.w-t.x,e.h-t.y):i.type==="disc"?e.d/2-Math.hypot(t.x,t.y):i.type==="angle"?(t.face||"A")==="A"?Math.min(t.x-e.t,e.a-t.x,t.y,e.L-t.y):Math.min(t.x,e.L-t.x,t.y-e.t,e.b-t.y):null}function kv(i,t){let e=0;for(let n of Gf(i))for(let s of Gf(t))e=Math.max(e,Hv(n,s));return e}function Gf(i){let t=Gr(i),e=i.params,n;return i.type==="angle"?n=[new be(new S(0,0,0),new S(e.a,e.L,e.t)),new be(new S(0,0,e.t),new S(e.t,e.L,e.b))]:n=[If(i)],n.map(s=>{let r=s.getCenter(new S).applyMatrix4(t),o=s.getSize(new S).multiplyScalar(.5),a=new jt().extractRotation(t),c=[0,1,2].map(l=>new S().setFromMatrixColumn(a,l).normalize());return{c:r,h:[o.x,o.y,o.z],axes:c,round:i.type==="disc"||i.type==="tube"}})}function Hv(i,t){let e=[...i.axes,...t.axes];for(let r of i.axes)for(let o of t.axes){let a=r.clone().cross(o);a.lengthSq()>1e-6&&e.push(a.normalize())}let n=t.c.clone().sub(i.c),s=1/0;for(let r of e){let o=i.axes.reduce((l,h,u)=>l+Math.abs(h.dot(r))*i.h[u],0),a=t.axes.reduce((l,h,u)=>l+Math.abs(h.dot(r))*t.h[u],0),c=o+a-Math.abs(n.dot(r));if(c<=0)return 0;s=Math.min(s,c)}return(i.round||t.round)&&(s-=.15*Math.min(...i.h,...t.h)),Math.max(0,s)}var vh=[[5,1],[2,1],[1,1],[1,2],[1,2.5],[1,5],[1,10],[1,20],[1,50]],Vv=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;");function Yf(i){let t=i.params;return i.type==="plate"?[{title:"Vista in pianta",w:t.w,h:t.h,outline:"rect",r:t.r||0,holes:i.holes,t:t.t}]:i.type==="disc"?[{title:"Vista in pianta",w:t.d,h:t.d,outline:"circle",din:t.din,holes:i.holes,t:t.t,centered:!0}]:i.type==="angle"?[{title:"Ala A (orizzontale)",w:t.a,h:t.L,outline:"rect",r:0,holes:i.holes.filter(e=>(e.face||"A")==="A"),t:t.t,bendAt:"left"},{title:"Ala B (verticale)",w:t.L,h:t.b,outline:"rect",r:0,holes:i.holes.filter(e=>e.face==="B"),t:t.t,bendAt:"bottom"}]:[]}function Mh(i){let t=new Map;for(let e of i){let n=`${e.d}|${e.kind}|${e.thread||""}`;t.has(n)||t.set(n,{d:e.d,kind:e.kind,thread:e.thread,n:0}),t.get(n).n++}return[...t.values()].map(e=>{if(e.kind==="thread")return`${e.n}\xD7 ${e.thread} filettati (preforo \xD8 ${pt(de[e.thread]?de[e.thread].tap:e.d)})`;let n=ui(e.d);return`${e.n}\xD7 \xD8 ${pt(e.d)} passanti${n?` (per ${n})`:""}`})}function Zf(i,t,e={}){let n=Yf(i),s=297,r=210,o=10,a=30,c={x:o+4,y:o+4,w:s-2*o-8,h:r-2*o-a-12},l=n.reduce((L,N)=>L+N.w,0)+(n[0]?n[0].t*2:0),h=Math.max(...n.map(L=>L.h),1),u=c.w-60*n.length-30,d=c.h-50,f=vh.find(([L,N])=>l*L/N<=u&&h*L/N<=d)||vh[vh.length-1],g=f[0]/f[1],x=[];x.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${r}" width="${s}mm" height="${r}mm" font-family="Inter, Arial, sans-serif">`),x.push('<defs><marker id="ar" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1.5 L10 5 L0 8.5 z" fill="#111"/></marker></defs>'),x.push(`<rect x="0" y="0" width="${s}" height="${r}" fill="#fff"/>`),x.push(`<rect x="${o}" y="${o}" width="${s-2*o}" height="${r-2*o}" fill="none" stroke="#111" stroke-width="0.5"/>`);let m={thick:'stroke="#111" stroke-width="0.45" fill="none"',thin:'stroke="#111" stroke-width="0.18" fill="none"',center:'stroke="#c23" stroke-width="0.15" fill="none" stroke-dasharray="6 1.2 1 1.2"',hidden:'stroke="#111" stroke-width="0.18" fill="none" stroke-dasharray="1.5 1"'},p=(L,N,O,$=2.6,H="middle",Q=0,et=400)=>`<text x="${L.toFixed(2)}" y="${N.toFixed(2)}" font-size="${$}" text-anchor="${H}" font-weight="${et}" ${Q?`transform="rotate(${Q} ${L.toFixed(2)} ${N.toFixed(2)})"`:""} fill="#111">${Vv(O)}</text>`,y=(L,N,O,$,H)=>{let Q=[];return Q.push(`<path d="M${L} ${$} L${L} ${O+(O>$?1.5:-1.5)} M${N} ${$} L${N} ${O+(O>$?1.5:-1.5)}" ${m.thin}/>`),Q.push(`<path d="M${L} ${O} L${N} ${O}" ${m.thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`),Q.push(p((L+N)/2,O-.9,H)),Q.join("")},M=(L,N,O,$,H)=>{let Q=[];return Q.push(`<path d="M${$} ${L} L${O+(O>$?1.5:-1.5)} ${L} M${$} ${N} L${O+(O>$?1.5:-1.5)} ${N}" ${m.thin}/>`),Q.push(`<path d="M${O} ${L} L${O} ${N}" ${m.thin} marker-start="url(#ar)" marker-end="url(#ar)"/>`),Q.push(p(O-.9,(L+N)/2,H,2.6,"middle",-90)),Q.join("")},_=[],I=n.reduce((L,N)=>L+N.w*g+48,0)+(n[0]?n[0].t*g+20:0),A=c.x+22+Math.max(0,(c.w-75-I)/2),C="ABCDEFGH";if(n.forEach((L,N)=>{let O=L.w*g,$=L.h*g,H=A,Q=c.y+22+(d-$)/2+8,et=dt=>H+(L.centered?dt+L.w/2:dt)*g,ct=dt=>Q+$-(L.centered?dt+L.h/2:dt)*g;if(x.push(p(H+O/2,Q-16,`${L.title}  (scala ${f[0]}:${String(f[1]).replace(".",",")})`,3,"middle",0,600)),L.outline==="circle"){let dt=L.w/2*g,It=et(0),X=ct(0);x.push(`<circle cx="${It}" cy="${X}" r="${dt}" ${m.thick}/>`),L.din>0&&x.push(`<circle cx="${It}" cy="${X}" r="${L.din/2*g}" ${m.thick}/>`),x.push(`<path d="M${It-dt-3} ${X} L${It+dt+3} ${X} M${It} ${X-dt-3} L${It} ${X+dt+3}" ${m.center}/>`),x.push(y(It-dt,It+dt,ct(0)+dt+8,X,`\xD8 ${pt(L.w)}`)),L.din>0&&x.push(y(It-L.din/2*g,It+L.din/2*g,X-dt-6,X,`\xD8 ${pt(L.din)}`));let J=[...new Set(L.holes.map(ft=>Math.round(Math.hypot(ft.x,ft.y)*10)/10))];J.length===1&&J[0]>0&&(x.push(`<circle cx="${It}" cy="${X}" r="${J[0]*g}" ${m.center}/>`),x.push(p(It+J[0]*g*.72+2,X-J[0]*g*.72-2,`PCD \xD8 ${pt(J[0]*2)}`,2.4,"start")))}else{let dt=Math.min(L.r||0,L.w/2,L.h/2)*g;x.push(`<rect x="${et(0)}" y="${ct(L.h)}" width="${O}" height="${$}" rx="${dt}" ${m.thick}/>`),L.bendAt==="left"&&x.push(`<path d="M${et(L.t)} ${ct(0)} L${et(L.t)} ${ct(L.h)}" ${m.hidden}/>`),L.bendAt==="bottom"&&x.push(`<path d="M${et(0)} ${ct(L.t)} L${et(L.w)} ${ct(L.t)}" ${m.hidden}/>`),x.push(y(et(0),et(L.w),ct(0)+9,ct(0),pt(L.w))),x.push(M(ct(L.h),ct(0),et(0)-9,et(0),pt(L.h))),L.r>0&&x.push(p(et(L.w)-dt*.3+3,ct(L.h)-1.5,`R ${pt(L.r)}`,2.4,"start"));let It=[...new Set(L.holes.map(J=>J.x))].sort((J,ft)=>J-ft),X=[...new Set(L.holes.map(J=>J.y))].sort((J,ft)=>J-ft);It.length&&It.length<=6&&It.forEach((J,ft)=>x.push(y(et(0),et(J),ct(L.h)-6-ft*5.5,ct(L.h),pt(J)))),X.length&&X.length<=6&&X.forEach((J,ft)=>x.push(M(ct(0),ct(J),et(L.w)+6+ft*5.5,et(L.w),pt(J)))),x.push(`<circle cx="${et(0)}" cy="${ct(0)}" r="1" fill="#c23"/>`),x.push(p(et(0)-1.5,ct(0)+3.8,"0",2.2,"end"))}if(L.holes.forEach((dt,It)=>{let X=et(dt.x),J=ct(dt.y),ft=dt.d/2*g;x.push(`<circle cx="${X}" cy="${J}" r="${ft}" ${m.thick}/>`),dt.kind==="thread"&&x.push(`<path d="M${X+ft*1.18} ${J} A${ft*1.18} ${ft*1.18} 0 1 1 ${X} ${J-ft*1.18}" ${m.thin}/>`);let lt=ft+1.6;x.push(`<path d="M${X-lt} ${J} L${X+lt} ${J} M${X} ${J-lt} L${X} ${J+lt}" ${m.center}/>`);let Ft=`${C[N]}${It+1}`;x.push(p(X+ft+.8,J-ft-.6,Ft,2,"start")),_.push({id:Ft,x:dt.x,y:dt.y,d:dt.d,kind:dt.kind,thread:dt.thread})}),Mh(L.holes).forEach((dt,It)=>x.push(p(H+O/2,ct(L.centered?-L.h/2:0)+17+It*3.6,dt,2.5))),A+=O+48,N===n.length-1){let dt=A-26,It=L.t*g,X=(n[0].outline==="circle"?n[0].w:n[0].h)*g;x.push(p(dt+It/2,Q-16,"Spessore",3,"middle",0,600)),x.push(`<rect x="${dt}" y="${Q+($-X)/2}" width="${Math.max(It,.6)}" height="${X}" ${m.thick} fill="#e8edf3"/>`),x.push(y(dt,dt+It,Q+($-X)/2+X+9,Q+($-X)/2+X,pt(L.t))),A=dt+It+20}}),_.length){let L=s-o-70,N=o+6,O=3.6,$=_.slice(0,22);x.push(`<rect x="${L}" y="${N}" width="66" height="${($.length+1)*O+1.5}" fill="#fff" ${m.thin}/>`),x.push(p(L+2,N+2.8,"Foro",2.2,"start",0,600)+p(L+20,N+2.8,"X",2.2,"end",0,600)+p(L+34,N+2.8,"Y",2.2,"end",0,600)+p(L+36,N+2.8,"Diametro",2.2,"start",0,600)),$.forEach((H,Q)=>{let et=N+2.8+(Q+1)*O;x.push(p(L+2,et,H.id,2.2,"start")+p(L+20,et,pt(H.x),2.2,"end")+p(L+34,et,pt(H.y),2.2,"end")+p(L+36,et,H.kind==="thread"?H.thread:`\xD8 ${pt(H.d)}`,2.2,"start"))}),_.length>$.length&&x.push(p(L+2,N+($.length+2)*O+1,`\u2026 altri ${_.length-$.length} fori nel file DXF`,2,"start"))}let U=Ye[i.material]||Ye.s235,w=t.parts.filter(L=>L.type===i.type&&JSON.stringify(L.params)===JSON.stringify(i.params)&&L.holes.length===i.holes.length&&L.material===i.material).length,v=s-o-150,P=r-o-a;x.push(`<rect x="${v}" y="${P}" width="150" height="${a}" fill="#fff" ${m.thick}/>`),x.push(`<path d="M${v} ${P+10} L${v+150} ${P+10} M${v} ${P+20} L${v+150} ${P+20} M${v+75} ${P+10} L${v+75} ${P+30} M${v+112} ${P+20} L${v+112} ${P+30}" ${m.thin}/>`);let V=(L,N,O,$)=>p(L+1.5,N+3,O,1.9,"start")+p(L+1.5,N+8,$,3,"start",0,600);return x.push(V(v,P,"Pezzo",`${i.name} \u2013 ${Vr(i)}`)),x.push(V(v,P+10,"Materiale",U.name)),x.push(V(v+75,P+10,"Misure",Di(i))),x.push(V(v,P+20,"Progetto",t.name)),x.push(V(v+75,P+20,"Massa",`${pt(Vn(i),3)} kg`)),x.push(V(v+112,P+20,"Quantit\xE0 / scala",`${w} pz \u2013 ${f[0]}:${String(f[1]).replace(".",",")}`)),["Quote in mm. Tolleranze generali ISO 2768-mK.","Spigoli vivi smussati 0,5 \xD7 45\xB0. Sbavare i fori.",i.type==="angle"?"Angolare laminato: le ali sono viste distese, raggio interno da catalogo.":`Superficie: ${pt(Wr(i)/1e6*2,3)} m\xB2 (due facce).`].forEach((L,N)=>x.push(p(o+4,r-o-22+N*4,L,2.4,"start"))),x.push(p(o+4,r-o-4,`Smonta Studio \xB7 ${new Date().toLocaleDateString("it-IT")}`,2,"start")),x.push("</svg>"),x.join("")}function La(i){let t=[],e=(...c)=>t.push(...c.map(String));e(0,"SECTION",2,"HEADER",9,"$ACADVER",1,"AC1009",9,"$INSUNITS",70,4,0,"ENDSEC"),e(0,"SECTION",2,"TABLES",0,"TABLE",2,"LAYER",70,3);for(let[c,l]of[["TAGLIO",7],["FORI",1],["TESTO",3]])e(0,"LAYER",2,c,70,0,62,l,6,"CONTINUOUS");e(0,"ENDTAB",0,"ENDSEC",0,"SECTION",2,"ENTITIES");let n=(c,l,h,u,d="TAGLIO")=>e(0,"LINE",8,d,10,c,20,l,30,0,11,h,21,u,31,0),s=(c,l,h,u)=>e(0,"CIRCLE",8,u,10,c,20,l,30,0,40,h),r=(c,l,h,u,d,f="TAGLIO")=>e(0,"ARC",8,f,10,c,20,l,30,0,40,h,50,u,51,d),o=(c,l,h,u)=>e(0,"TEXT",8,"TESTO",10,c,20,l,30,0,40,h,1,u),a=0;for(let c of Yf(i)){if(c.outline==="circle"){s(a+c.w/2,c.w/2,c.w/2,"TAGLIO"),c.din>0&&s(a+c.w/2,c.w/2,c.din/2,"TAGLIO");for(let l of c.holes)s(a+c.w/2+l.x,c.w/2+l.y,(l.kind==="thread"?(de[l.thread]||{tap:l.d}).tap:l.d)/2,"FORI")}else{let l=Math.min(c.r||0,c.w/2,c.h/2),h=c.w,u=c.h,d=a;l>0?(n(d+l,0,d+h-l,0),n(d+h,l,d+h,u-l),n(d+h-l,u,d+l,u),n(d,u-l,d,l),r(d+h-l,l,l,270,360),r(d+h-l,u-l,l,0,90),r(d+l,u-l,l,90,180),r(d+l,l,l,180,270)):(n(d,0,d+h,0),n(d+h,0,d+h,u),n(d+h,u,d,u),n(d,u,d,0));for(let f of c.holes)s(d+f.x,f.y,(f.kind==="thread"?(de[f.thread]||{tap:f.d}).tap:f.d)/2,"FORI")}o(a,-8,4,`${i.name} - ${c.title} - sp. ${c.t} mm - ${(Ye[i.material]||Ye.s235).name}`),a+=c.w+30}return e(0,"ENDSEC",0,"EOF"),t.join(`\r
`)+`\r
`}function as(i){return["plate","disc","angle"].includes(i.type)}var Jf=i=>!i.stack;function jf(i){let t=i.parts.filter(Jf),e=[],n=new Set,s=new Set;t.forEach((o,a)=>{n.add(o.id);let c={id:Un("st"),parts:[o.id],title:"",text:"",tools:[],warn:"",auto:!0},l=new Set;for(let g of i.stacks)if(g.plates.includes(o.id))for(let x of g.plates)x!==o.id&&n.has(x)&&l.add(x);let h=g=>(i.parts.find(x=>x.id===g)||{}).name;a===0?(c.title=`Prepara ${o.name}`,c.text=`Appoggia ${o.name} sul banco: \xE8 la base dell'assieme. Controlla che sia pulita e sbavata.`):l.size?(c.title=`Monta ${o.name}`,c.text=`Appoggia ${o.name} su ${[...l].map(h).join(" e ")} facendo coincidere i fori.`):(c.title=`Posiziona ${o.name}`,c.text=`Porta ${o.name} nella posizione mostrata.`);let u=i.stacks.filter(g=>!s.has(g.id)&&g.plates.every(x=>n.has(x))),d=new Map;for(let g of u){s.add(g.id),c.parts.push(...g.members);let x=`${g.kind}|${g.size}|${g.L}|${g.threaded?1:0}`;d.set(x,d.get(x)||{s:g,n:0}),d.get(x).n++}for(let{s:g,n:x}of d.values())if(g.kind==="pin")c.text+=` Inserisci ${x} perno${x>1?"i":""} ${g.size}\xD7${g.L} (accoppiamento stretto: aiutati con un martello in gomma).`,c.tools.push("Martello in gomma");else{let m=de[g.size];c.text+=g.threaded?` Avvita ${x} vit${x>1?"i":"e"} ${g.size}\xD7${g.L} con rondella nei fori filettati e serra a ${pt(m.torque)} Nm.`:` Inserisci ${x} vit${x>1?"i":"e"} ${g.size}\xD7${g.L} con una rondella sotto la testa e una sotto il dado; serra a ${pt(m.torque)} Nm.`,c.tools.push(g.threaded?`Chiave da ${m.s} mm`:`2 chiavi da ${m.s} mm`,"Chiave dinamometrica")}c.tools=[...new Set(c.tools.filter(Boolean))];let f=Vn(o);f>15?c.warn=`${o.name} pesa ${pt(f,1)} kg: sollevalo in due o con un paranco.`:o.params&&o.params.t>=10&&f>5&&(c.warn=`${o.name} pesa ${pt(f,1)} kg: attenzione alle mani.`),e.push(c)});let r=i.stacks.filter(o=>!s.has(o.id));return r.length&&e.push({id:Un("st"),parts:r.flatMap(o=>o.members),title:"Bulloneria finale",text:"Monta la bulloneria rimanente e serra alla coppia indicata.",tools:["Chiave dinamometrica"],warn:"",auto:!0}),e}function Da(i){let t=new Set(i.parts.map(e=>e.id));if(i.steps&&i.steps.length){let e=new Set(i.steps.flatMap(r=>r.parts));if(!i.steps.some(r=>r.parts.some(o=>!t.has(o)))&&i.parts.every(r=>e.has(r.id)))return i.steps;let s=jf(i);for(let r of s){let o=i.steps.find(a=>a.parts[0]===r.parts[0]&&!a.auto);o&&(r.title=o.title,r.text=o.text,r.warn=o.warn,r.tools=o.tools,r.video=o.video,r.auto=!1)}return s}return jf(i)}function bh(i,t){let e=new be,n=i.parts.filter(Jf);for(let c of n)e.union(Fe(c));let s=e.isEmpty()?new S:e.getCenter(new S),r=e.isEmpty()?200:e.getSize(new S).length(),o=new Map,a=new Map;(t||[]).forEach((c,l)=>c.parts.forEach(h=>a.set(h,l)));for(let c of n){let l=null;for(let u of i.stacks){if(!u.plates.includes(c.id))continue;let d=i.parts.find(y=>y.stack===u.id&&(y.type==="bolt"||y.type==="pin"));if(!d)continue;let f=new S(0,0,1).applyQuaternion(new Vt(...d.quat)),g=Fe(c).getCenter(new S),x=u.plates.filter(y=>y!==c.id).map(y=>i.parts.find(M=>M.id===y)).filter(Boolean);if(!x.length)continue;let m=x.reduce((y,M)=>y.add(Fe(M).getCenter(new S)),new S).multiplyScalar(1/x.length),p=Math.sign(g.clone().sub(m).dot(f))||1;l=f.multiplyScalar(p);break}l||(l=Fe(c).getCenter(new S).sub(s),l.length()<1&&l.set(0,0,1),l.normalize());let h=a.get(c.id)||0;o.set(c.id,l.multiplyScalar(r*.35*(h===0?0:1)))}for(let c of i.parts.filter(l=>l.stack)){let l=new S(0,0,1).applyQuaternion(new Vt(...c.quat)),h=(()=>{let f=i.stacks.find(x=>x.id===c.stack),g=f&&i.parts.find(x=>x.id===f.plates[f.plates.length-1]);return g?o.get(g.id):null})(),u=c.type==="washer"?r*.18:r*.3,d=l.multiplyScalar(u);o.set(c.id,h?d.add(h.clone()):d)}return o}function Sh(i){let t=new Map,e=1;for(let r of i.parts){let o=Mf(r);t.has(o)||t.set(o,{pos:0,desc:bf(r),material:(Ye[r.material]||Ye.s235).name,qty:0,unit:Vn(r),names:[],ids:[],fastener:!!r.stack||["bolt","nut","washer","pin"].includes(r.type),type:r.type});let a=t.get(o);a.qty++,a.names.push(r.name),a.ids.push(r.id)}let n=[...t.values()].sort((r,o)=>r.fastener-o.fastener||o.unit-r.unit);for(let r of n)r.pos=e++,r.total=r.unit*r.qty;let s=n.reduce((r,o)=>r+o.total,0);return{rows:n,totalMass:s,count:i.parts.length}}function wh(i){let{rows:t,totalMass:e}=Sh(i),n=r=>`"${String(r).replace(/"/g,'""')}"`,s=[["Pos.","Q.t\xE0","Descrizione","Materiale","Massa unitaria kg","Massa totale kg","Pezzi"].map(n).join(";")];for(let r of t)s.push([r.pos,r.qty,r.desc,r.material,pt(r.unit,3),pt(r.total,3),r.names.join(", ")].map(n).join(";"));return s.push(["","","TOTALE","","",pt(e,3),""].map(n).join(";")),"\uFEFF"+s.join(`\r
`)}var Ua=class{parse(t,e={}){e=Object.assign({binary:!1},e);let n=e.binary,s=[],r=0;t.traverse(function(p){if(p.isMesh){let y=p.geometry,M=y.index,_=y.getAttribute("position");r+=M!==null?M.count/3:_.count/3,s.push({object3d:p,geometry:y})}});let o,a=80;if(n===!0){let p=r*2+r*3*4*4+80+4,y=new ArrayBuffer(p);o=new DataView(y),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;let c=new S,l=new S,h=new S,u=new S,d=new S,f=new S;for(let p=0,y=s.length;p<y;p++){let M=s[p].object3d,_=s[p].geometry,I=_.index,A=_.getAttribute("position");if(I!==null)for(let C=0;C<I.count;C+=3){let U=I.getX(C+0),w=I.getX(C+1),v=I.getX(C+2);g(U,w,v,A,M)}else for(let C=0;C<A.count;C+=3){let U=C+0,w=C+1,v=C+2;g(U,w,v,A,M)}}return n===!1&&(o+=`endsolid exported
`),o;function g(p,y,M,_,I){c.fromBufferAttribute(_,p),l.fromBufferAttribute(_,y),h.fromBufferAttribute(_,M),I.isSkinnedMesh===!0&&(I.applyBoneTransform(p,c),I.applyBoneTransform(y,l),I.applyBoneTransform(M,h)),c.applyMatrix4(I.matrixWorld),l.applyMatrix4(I.matrixWorld),h.applyMatrix4(I.matrixWorld),x(c,l,h),m(c),m(l),m(h),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function x(p,y,M){u.subVectors(M,y),d.subVectors(p,y),u.cross(d).normalize(),f.copy(u).normalize(),n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function m(p){n===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}};var Kf={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},cs=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){let r=new Ah,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,s).catch(n)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,s,r,e)})}},te={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Eh="KHR_mesh_quantization",gn={};gn[fn]=te.NEAREST;gn[Yl]=te.NEAREST_MIPMAP_NEAREST;gn[Ts]=te.NEAREST_MIPMAP_LINEAR;gn[vn]=te.LINEAR;gn[xr]=te.LINEAR_MIPMAP_NEAREST;gn[ni]=te.LINEAR_MIPMAP_LINEAR;gn[ei]=te.CLAMP_TO_EDGE;gn[Sr]=te.REPEAT;gn[wr]=te.MIRRORED_REPEAT;var Qf={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Gv=new Wt,tp=12,Wv=1179937895,$v=2,ep=8,Xv=1313821514,qv=5130562;function Yr(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function Yv(i){return new TextEncoder().encode(i).buffer}function Zv(i){return Yr(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function jv(i,t,e){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Dn.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function sp(i){return Math.ceil(i/4)*4}function Th(i,t=0){let e=sp(i.byteLength);if(e!==i.byteLength){let n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function np(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ip(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}var Ah=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Or}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(c);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=Th(d.result),g=new DataView(new ArrayBuffer(ep));g.setUint32(0,f.byteLength,!0),g.setUint32(4,qv,!0);let x=Th(Yv(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(ep));m.setUint32(0,x.byteLength,!0),m.setUint32(4,Xv,!0);let p=new ArrayBuffer(tp),y=new DataView(p);y.setUint32(0,Wv,!0),y.setUint32(4,$v,!0);let M=tp+m.byteLength+x.byteLength+g.byteLength+f.byteLength;y.setUint32(8,M,!0);let _=new Blob([p,m,x,g,f],{type:"application/octet-stream"}),I=new FileReader;I.readAsArrayBuffer(_),I.onloadend=function(){e(I.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(let o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;let n=new S;for(let s=0,r=t.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){let e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);let n=t.clone(),s=new S;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1,s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===$e?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}t instanceof Ws&&(t=await this.decompressTextureAsync(t)),e instanceof Ws&&(e=await this.decompressTextureAsync(e));let s=t?t.image:null,r=e?e.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=np();c.width=o,c.height=a;let l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);let h=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);let f=n(t),g=l.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}if(r){l.drawImage(r,0,0,o,a);let f=n(e),g=l.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}l.putImageData(h,0,0);let d=(t||e).clone();return d.source=new ks(c),d.colorSpace=zn,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){let e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case te.BYTE:case te.UNSIGNED_BYTE:a=1;break;case te.SHORT:case te.UNSIGNED_SHORT:a=2;break;default:a=4}let c=t.itemSize*a;r===te.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);let l=sp(s*c),h=new DataView(new ArrayBuffer(l)),u=0;for(let g=n;g<n+s;g++){for(let x=0;x<t.itemSize;x++){let m;t.itemSize>4?m=t.array[g*t.itemSize+x]:(x===0?m=t.getX(g):x===1?m=t.getY(g):x===2?m=t.getZ(g):x===3&&(m=t.getW(g)),t.normalized===!0&&(m=Dn.normalize(m,t.array))),e===te.FLOAT?h.setFloat32(u,m,!0):e===te.INT?h.setInt32(u,m,!0):e===te.UNSIGNED_INT?h.setUint32(u,m,!0):e===te.SHORT?h.setInt16(u,m,!0):e===te.UNSIGNED_SHORT?h.setUint16(u,m,!0):e===te.BYTE?h.setInt8(u,m):e===te.UNSIGNED_BYTE&&h.setUint8(u,m),u+=a}u%c!==0&&(u+=c-u%c)}let d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(d.target=r),r===te.ARRAY_BUFFER&&(d.byteStride=c),this.byteOffset+=l,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){let e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){let o=Th(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(t,e,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(t.array.constructor===Float32Array)a=te.FLOAT;else if(t.array.constructor===Int32Array)a=te.INT;else if(t.array.constructor===Uint32Array)a=te.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=te.SHORT;else if(t.array.constructor===Uint16Array)a=te.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=te.BYTE;else if(t.array.constructor===Uint8Array)a=te.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;let c=jv(t,n,s),l;e!==void 0&&(l=t===e.index?te.ELEMENT_ARRAY_BUFFER:te.ARRAY_BUFFER);let h=this.processBufferView(t,a,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(t,e,n,s="image/png"){if(t!==null){let r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(t)||o.images.set(t,{});let h=o.images.get(t),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let d={mimeType:s},f=np();f.width=Math.min(t.width,c.maxTextureSize),f.height=Math.min(t.height,c.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==dn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>c.maxTextureSize||t.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);let m=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=t.data[p+0],m[p+1]=t.data[p+1],m[p+2]=t.data[p+2],m[p+3]=t.data[p+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(ip(f,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(ip(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));let x=a.images.push(d)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){let e=this.json;e.samplers||(e.samplers=[]);let n={magFilter:gn[t.magFilter],minFilter:gn[t.minFilter],wrapS:gn[t.wrapS],wrapT:gn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(t))return s.textures.get(t);r.textures||(r.textures=[]),t instanceof Ws&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(a.name=t.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(t,a)});let c=r.textures.push(a)-1;return s.textures.set(t,c),c}async processMaterialAsync(t){let e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=t.color.toArray().concat([t.opacity]);if(Yr(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){let a=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(t.map){let a={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(a,t.map),s.pbrMetallicRoughness.baseColorTexture=a}if(t.emissive){let a=t.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){let l={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(l,t.emissiveMap),s.emissiveTexture=l}}if(t.normalMap){let a={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(a.scale=t.normalScale.x),this.applyTextureTransform(a,t.normalMap),s.normalTexture=a}if(t.aoMap){let a={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(a.strength=t.aoMapIntensity),this.applyTextureTransform(a,t.aoMap),s.occlusionTexture=a}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===un&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(t,s)});let o=n.materials.push(s)-1;return e.materials.set(t,o),o}async processMeshAsync(t){let e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,I=t.material.length;_<I;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);let r=s.join(":");if(e.meshes.has(r))return e.meshes.get(r);let o=t.geometry,a;t.isLineSegments?a=te.LINES:t.isLineLoop?a=te.LINE_LOOP:t.isLine?a=te.LINE_STRIP:t.isPoints?a=te.POINTS:a=t.material.wireframe?te.LINES:te.TRIANGLES;let c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let I=o.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(I))){l[_]=e.attributes.get(this.getUID(I));continue}g=null;let C=I.array;_==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Re(new Uint16Array(C),I.itemSize,I.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=cs.Utils.toFloat32BufferAttribute(I));let U=this.processAccessor(g||I,o);U!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,I),l[_]=U,e.attributes.set(this.getUID(I),U))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){let _=[],I=[],A={};if(t.morphTargetDictionary!==void 0)for(let C in t.morphTargetDictionary)A[t.morphTargetDictionary[C]]=C;for(let C=0;C<t.morphTargetInfluences.length;++C){let U={},w=!1;for(let v in o.morphAttributes){if(v!=="position"&&v!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let P=o.morphAttributes[v][C],V=v.toUpperCase(),k=o.attributes[v];if(e.attributes.has(this.getUID(P,!0))){U[V]=e.attributes.get(this.getUID(P,!0));continue}let L=P.clone();if(!o.morphTargetsRelative)for(let N=0,O=P.count;N<O;N++)for(let $=0;$<P.itemSize;$++)$===0&&L.setX(N,P.getX(N)-k.getX(N)),$===1&&L.setY(N,P.getY(N)-k.getY(N)),$===2&&L.setZ(N,P.getZ(N)-k.getZ(N)),$===3&&L.setW(N,P.getW(N)-k.getW(N));U[V]=this.processAccessor(L,o),e.attributes.set(this.getUID(k,!0),U[V])}u.push(U),_.push(t.morphTargetInfluences[C]),t.morphTargetDictionary!==void 0&&I.push(A[C])}c.weights=_,I.length>0&&(c.extras={},c.extras.targetNames=I)}let x=Array.isArray(t.material);if(x&&o.groups.length===0)return null;let m=!1;if(x&&o.index===null){let _=[];for(let I=0,A=o.attributes.position.count;I<A;I++)_[I]=I;o.setIndex(_),m=!0}let p=x?t.material:[t.material],y=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,I=y.length;_<I;_++){let A={mode:a,attributes:l};if(this.serializeUserData(o,A),u.length>0&&(A.targets=u),o.index!==null){let U=this.getUID(o.index);(y[_].start!==void 0||y[_].count!==void 0)&&(U+=":"+y[_].start+":"+y[_].count),e.attributes.has(U)?A.indices=e.attributes.get(U):(A.indices=this.processAccessor(o.index,o,y[_].start,y[_].count),e.attributes.set(U,A.indices)),A.indices===null&&delete A.indices}let C=await this.processMaterialAsync(p[y[_].materialIndex]);C!==null&&(A.material=C),h.push(A)}m===!0&&o.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,c)});let M=n.meshes.push(c)-1;return e.meshes.set(r,M),M}detectMeshQuantization(t,e){if(this.extensionsUsed[Eh])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");let s=t.split("_",1)[0];Kf[s]&&Kf[s].includes(n)&&(this.extensionsUsed[Eh]=!0,this.extensionsRequired[Eh]=!0)}processCamera(t){let e=this.json;e.cameras||(e.cameras=[]);let n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:Dn.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=cs.Utils.mergeMorphTargetTracks(t.clone(),e);let r=t.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let l=r[c],h=ue.parseTrackName(l.name),u=ue.findNode(e,h.nodeName),d=Qf[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}let f=1,g=l.values.length/l.times.length;d===Qf.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let x;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(x="CUBICSPLINE",g/=3):l.getInterpolation()===Bs?x="STEP":x="LINEAR",a.push({input:this.processAccessor(new Re(l.times,f)),output:this.processAccessor(new Re(l.values,g)),interpolation:x}),o.push({sampler:a.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(t){let e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],r=t.skeleton;if(r===void 0)return null;let o=t.skeleton.bones[0];if(o===void 0)return null;let a=[],c=new Float32Array(r.bones.length*16),l=new jt;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(t.bindMatrix).toArray(c,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Re(c,16)),joints:a,skeleton:n.get(o)}),s.skin=e.skins.length-1}async processNodeAsync(t){let e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);let r={};if(n.trs){let a=t.quaternion.toArray(),c=t.position.toArray(),l=t.scale.toArray();Yr(a,[0,0,0,1])||(r.rotation=a),Yr(c,[0,0,0])||(r.translation=c),Yr(l,[1,1,1])||(r.scale=l)}else t.matrixAutoUpdate&&t.updateMatrix(),Zv(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){let a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){let a=[];for(let c=0,l=t.children.length;c<l;c++){let h=t.children[c];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)});let o=e.nodes.push(r)-1;return s.set(t,o),o}async processSceneAsync(t){let e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);let s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);let r=[];for(let o=0,a=t.children.length;o<a;o++){let c=t.children[o];if(c.visible||n.onlyVisible===!1){let l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(t,s)}async processObjectsAsync(t){let e=new Ji;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){let e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});let n=[];for(let s=0;s<t.length;s++)t[s]instanceof Ji?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}},Rh=class{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}},Ch=class{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},Ih=class{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){let o={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){let o={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Ph=class{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Lh=class{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){let o={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){let o={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Dh=class{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){let o={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Uh=class{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){let o={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Nh=class{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Oh=class{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Gv)&&!t.specularIntensityMap&&!t.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(t.specularIntensityMap){let o={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){let o={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Fh=class{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(t.sheenRoughnessMap){let o={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){let o={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},zh=class{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(t.anisotropyMap){let o={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Bh=class{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},kh=class{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(t.bumpMap){let o={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Hh=class{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;let n=this.writer,s=t,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new jt,l=new S,h=new Vt,u=new S;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(r,f*3),h.toArray(o,f*4),u.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new Re(r,3)),ROTATION:n.processAccessor(new Re(o,4)),SCALE:n.processAccessor(new Re(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};cs.Utils={insertKeyframe:function(i,t){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=t;for(let c=0;c<n;c++)r[c]=0;a=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),r.set(o.evaluate(t),0),r.set(i.values,n),a=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(t),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-t)<.001)return c;if(i.times[c]<t&&i.times[c+1]>t){s.set(i.times.slice(0,c+1),0),s[c+1]=t,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(t),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,t){let e=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=ue.parseTrackName(o.name),c=ue.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Tr)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[c.uuid]===void 0){u=o.clone();let f=new u.ValueBufferType(l*u.times.length);for(let g=0;g<u.times.length;g++)f[g*l+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,e.push(u);continue}let d=o.createInterpolant(new o.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(u,o.times[f]);u.values[g*l+h]=o.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){let t=new Re(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};var Jv=()=>typeof window<"u"&&window.SmontaAndroid?window.SmontaAndroid:null;function Kv(i){let t="";for(let n=0;n<i.length;n+=32768)t+=String.fromCharCode.apply(null,i.subarray(n,n+32768));return btoa(t)}async function wn(i,t,e="application/octet-stream"){let n;typeof t=="string"?n=new TextEncoder().encode(t):t instanceof Blob?n=new Uint8Array(await t.arrayBuffer()):t instanceof ArrayBuffer?n=new Uint8Array(t):ArrayBuffer.isView(t)?n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):n=new TextEncoder().encode(JSON.stringify(t));let s=Jv();if(s&&s.saveFile){let c=s.saveFile(i,Kv(n),e);return{ok:!!c&&!String(c).startsWith("ERR"),where:String(c||"")}}let r=new Blob([n],{type:e}),o=URL.createObjectURL(r),a=document.createElement("a");return a.href=o,a.download=i,document.body.appendChild(a),a.click(),setTimeout(()=>{URL.revokeObjectURL(o),a.remove()},2e3),{ok:!0,where:"Download"}}function Vh(i="*/*"){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.accept=i,e.style.display="none",document.body.appendChild(e);let n=!1;e.addEventListener("change",()=>{n=!0,t(e.files&&e.files[0]?e.files[0]:null),e.remove()}),window.addEventListener("focus",()=>setTimeout(()=>{n||(t(null),e.remove())},1500),{once:!0}),e.click()})}function rp(i){let t=new Ua,e=i.clone(!0);return e.traverse(n=>{n.isLineSegments&&(n.visible=!1)}),t.parse(e,{binary:!0})}function op(i){return new Promise((t,e)=>{let n=new cs,s=i.clone(!0);s.traverse(o=>{o.isLineSegments&&o.parent&&o.parent.remove(o)});let r=new Xe;r.add(s),r.rotation.x=-Math.PI/2,r.scale.setScalar(.001),n.parse(r,o=>t(o),o=>e(o),{binary:!0})})}var xn=i=>String(i||"progetto").replace(/[^\w\-àèéìòù ]+/gi,"_").trim().replace(/\s+/g,"_")||"progetto";var Nn=(i,t)=>Oe(i)[t];function ap(i,t){return t.clone().sub(i.a).dot(i.dir)>0?"a":"b"}function Gh(){let i=Aa("Supporto motore (esempio)"),t=mn(i,"plate",{w:240,h:160,t:10,r:8},{name:"Piastra base"});for(let[x,m]of[[20,20],[220,20],[20,140],[220,140]])en(t,x,m,11);en(t,70,40,9),en(t,70,120,9),i.parts.push(t);let e=(x,m)=>{let p=mn(i,"angle",{a:50,b:50,t:5,L:40},{name:x});return en(p,32,20,9,"A"),en(p,20,32,9,"B"),p.pos=[300,0,0],i.parts.push(p),os(t,{axis:Nn(t,m),side:"b"},p,{axis:Nn(p,0),side:"a"},[t]),p},n=e("Squadretta sinistra",4),s=e("Squadretta destra",5);s.quat=[...n.quat];let r=new S(...Nn(t,5).b.toArray()).sub(Nn(t,4).b);s.pos=new S(...n.pos).add(r).toArray();let o=mn(i,"plate",{w:160,h:150,t:8,r:4},{name:"Piastra verticale"});en(o,40,32,9),en(o,120,32,9),en(o,80,92,52),tr(o,{n:4,pcd:90,start:45,cx:80,cy:92,d:9}),o.pos=[0,300,0],i.parts.push(o);let a=Nn(n,1),c=Fe(n).getCenter(new S),l=ap(a,c),h=x=>{os(n,{axis:Nn(n,1),side:l},o,{axis:Nn(o,0),side:x},[n,s])};h("a"),(Fe(o).min.z<9.9||!cp(i,o,1))&&h("b"),(Fe(o).min.z<9.9||!cp(i,o,1))&&(h("a"),os(n,{axis:Nn(n,1),side:l},o,{axis:Nn(o,1),side:"a"},[n,s]));let u=mn(i,"disc",{d:120,din:50,t:10},{name:"Flangia motore"});tr(u,{n:4,pcd:90,start:45,d:9}),u.pos=[0,-300,0],i.parts.push(u);let d=Nn(o,3),f=ap(d,c);os(o,{axis:d,side:f},u,{axis:Nn(u,0),side:"a"},[o]);let g=new Set;for(let x of i.parts.filter(Ze))for(let m of Oe(x)){if(g.has(m.hole.id))continue;let p=Fi(i,{axis:m,side:"b"});if(!p||(p.segs.forEach(I=>g.add(I.axis.hole.id)),new Set(p.segs.map(I=>I.part.id)).size<2))continue;let y=p.dir.z>=0?p.segs[p.segs.length-1]:p.segs[0],M=Math.abs(p.dir.z)>.5?y.axis.dir.dot(p.dir)*(p.dir.z>=0?1:-1)>0?"b":"a":"b",_=ir(i,{axis:y.axis,side:M},"bolt");_.error||(i.parts.push(..._.parts),i.stacks.push(_.stack))}return i}function cp(i,t,e){let n=Oe(t)[e],s=Fi(i,{axis:n,side:"a"});return s&&new Set(s.segs.map(r=>r.part.id)).size>1}var Qv="smonta-video",$h="videos",Wh=null;function tM(){return Wh||(Wh=new Promise((i,t)=>{if(!("indexedDB"in window)){t(new Error("archivio non disponibile"));return}let e=indexedDB.open(Qv,1);e.onupgradeneeded=()=>e.result.createObjectStore($h),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error||new Error("archivio non disponibile"))})),Wh}async function Xh(i,t){let e=await tM();return new Promise((n,s)=>{let r=e.transaction($h,i),o=r.objectStore($h),a=t(o);r.oncomplete=()=>n(a&&"result"in a?a.result:void 0),r.onerror=()=>s(r.error)})}var sr=new Map;async function lp(i,t){await Xh("readwrite",e=>e.put(t,i)),sr.has(i)&&(URL.revokeObjectURL(sr.get(i)),sr.delete(i))}async function qh(i){if(sr.has(i))return sr.get(i);try{let t=await Xh("readonly",n=>n.get(i));if(!t)return null;let e=URL.createObjectURL(t);return sr.set(i,e),e}catch{return null}}async function Yh(i){try{await Xh("readwrite",t=>t.delete(i))}catch{}}var zt=(i,t=document)=>t.querySelector(i),jr=(i,t=document)=>[...t.querySelectorAll(i)],Ot=(i,t="i")=>`<svg class="${t}"><use href="#i-${i}"/></svg>`;function T(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t||{}))r===!1||r===null||r===void 0||(s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):s==="html"?n.innerHTML=r:s==="class"?n.className=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s instanceof Node?s:document.createTextNode(String(s)));return n}function ne(i,t="",e=2600){let n=t==="ok"?"check":t==="err"||t==="warn"?"warn":null,s=T("div",{class:`toast ${t}`,html:`${n?Ot(n):""}<span></span>`});s.querySelector("span").textContent=i,zt("#toasts").append(s),setTimeout(()=>s.remove(),e)}var Na=null;function rr(i){let t=zt("#modal");t.classList.add("hidden"),t.innerHTML="";let e=Na;Na=null,e&&e(i)}function Zh(i,t){return Na&&rr(null),new Promise(e=>{Na=e;let n=zt("#modal"),s=T("div",{class:"dialog",role:"dialog"},T("h3",{},i));n.innerHTML="",n.append(s),n.classList.remove("hidden"),n.onclick=o=>{o.target===n&&rr(null)},t(s,rr);let r=s.querySelector("input, select, textarea");r&&setTimeout(()=>{r.focus(),r.select&&r.select()},60)})}function Oa(i,t,e="Conferma",n=!1){return Zh(i,(s,r)=>{s.append(T("p",{style:{margin:0}},t)),s.append(T("div",{class:"acts"},T("button",{class:"btn",onclick:()=>r(!1)},"Annulla"),T("button",{class:`btn ${n?"danger":"primary"}`,onclick:()=>r(!0)},e)))})}function jh(i,t,e="",n={}){return Zh(i,(s,r)=>{let o=T("input",{value:e,type:n.type||"text",inputmode:n.inputmode||null,step:n.step||null}),a=()=>r(n.type==="number"?Jh(o.value):o.value.trim());o.addEventListener("keydown",c=>{c.key==="Enter"&&a()}),s.append(T("div",{class:"field"},T("label",{},t),T("div",{class:"box"},o,n.unit?T("span",{class:"u"},n.unit):null))),s.append(T("div",{class:"acts"},T("button",{class:"btn",onclick:()=>r(null)},"Annulla"),T("button",{class:"btn primary",onclick:a},n.ok||"OK")))})}function Jr(i,t,e="OK",n=""){return Zh(i,(s,r)=>{n&&s.append(T("p",{class:"muted",style:{margin:0}},n));let o=T("div",{class:"fields"}),a={};for(let l of t){let h;l.type==="select"?h=T("select",{},...l.options.map(([u,d])=>T("option",{value:u,selected:String(u)===String(l.value)},d))):h=T("input",{value:l.value??"",inputmode:l.type==="text"?null:"decimal"}),a[l.key]=h,o.append(T("div",{class:"field",style:l.wide?{gridColumn:"1 / -1"}:null},T("label",{},l.label),T("div",{class:"box"},h,l.unit?T("span",{class:"u"},l.unit):null)))}s.append(o);let c=()=>{let l={};for(let h of t){let u=a[h.key].value;if(l[h.key]=h.type==="select"||h.type==="text"?u:Jh(u),h.type!=="select"&&h.type!=="text"&&(l[h.key]===null||isNaN(l[h.key]))){a[h.key].focus(),ne(`Valore non valido: ${h.label}`,"err");return}}r(l)};s.addEventListener("keydown",l=>{l.key==="Enter"&&c()}),s.append(T("div",{class:"acts"},T("button",{class:"btn",onclick:()=>r(null)},"Annulla"),T("button",{class:"btn primary",onclick:c},e)))})}function Jh(i){if(i==null)return null;let t=String(i).trim().replace(",",".");if(t==="")return null;if(/^[\d.+\-*/() ]+$/.test(t))try{let e=Function(`"use strict";return (${t})`)();return typeof e=="number"&&isFinite(e)?e:null}catch{return null}return null}function Kh(i,t){Zr();let e=T("div",{class:"menu"});for(let o of t)o&&e.append(T("button",{onclick:()=>{Zr(),o.run()}},T("span",{html:Ot(o.icon||"chevron")}),T("div",{},o.label,o.sub?T("small",{},o.sub):null)));document.body.append(e);let n=i.getBoundingClientRect(),s=e.offsetWidth,r=e.offsetHeight;e.style.left=Math.max(8,Math.min(window.innerWidth-s-8,n.right-s))+"px",e.style.top=(n.bottom+6+r>window.innerHeight?Math.max(8,n.top-r-6):n.bottom+6)+"px",setTimeout(()=>document.addEventListener("pointerdown",hp),0)}function hp(i){i.target.closest(".menu")||Zr()}function Zr(){jr(".menu").forEach(i=>i.remove()),document.removeEventListener("pointerdown",hp)}function Ie(i,t,e,n,s={}){let r=T("input",{value:je(t),inputmode:"decimal","aria-label":i}),o=()=>{let a=Jh(r.value);if(a===null||isNaN(a)||s.min!==void 0&&a<s.min||s.max!==void 0&&a>s.max){ne(`${i}: valore non valido${s.min!==void 0?` (minimo ${je(s.min)}${s.max!==void 0?`, massimo ${je(s.max)}`:""})`:""}`,"err"),r.value=je(t);return}Math.abs(a-t)>1e-9&&n(a)};return r.addEventListener("change",o),r.addEventListener("keydown",a=>{a.key==="Enter"&&r.blur()}),T("div",{class:"field"},T("label",{},i),T("div",{class:"box"},r,e?T("span",{class:"u"},e):null))}var je=i=>i==null?"":String(Math.round(i*1e3)/1e3).replace(".",",");var W={tab:"design",tool:"select",hole:{mode:"bolt",size:"M8",fit:"medium",d:9,thread:"M8"},fast:{kind:"bolt",size:"auto"},mate:null,measure:[],hover:null,explode:0,showFasteners:!0,checks:[],assy:{i:0,t:1,playing:!1,reverse:!1,steps:[],vectors:null}},xt,Ha=[["select","Seleziona","select","Tocca un pezzo per selezionarlo. Trascina per girare la vista, con due dita sposti e ingrandisci."],["move","Sposta","move","Trascina le frecce per spostare il pezzo selezionato (aggancio alla griglia). Puoi anche scrivere le coordinate."],["rotate","Ruota","rotate","Trascina gli anelli per ruotare, oppure usa i pulsanti \xB190\xB0 nel pannello a destra."],["hole","Foro","hole","Tocca una faccia di una lastra per fare un foro in quel punto. Misura e tipo si scelgono a destra."],["mate","Accoppia","mate","Tocca un foro (o una faccia) del pezzo fermo, poi quello del pezzo da spostare: si allineano da soli."],["bolt","Bullona","bolted","Tocca un foro: vite, rondelle e dado della misura giusta attraversano tutte le lastre allineate."],["measure","Misura","measure","Tocca due punti (o due fori) per misurare la distanza."],["explode","Esploso","explode","Sposta il cursore a destra per aprire l'assieme e vedere come \xE8 fatto."]];function nM(){document.body.dataset.tab="design",xt=new Ca(zt("#view")),rM(),oM(),iM(),vM(),BM(),zM(),Uf(t=>su(t));let i=nr();or(!0),i.length||ne("Benvenuto! Crea un progetto o apri l'esempio.","",3500),window.smonta={app:W,store:it,viewer:xt,mutate:Qt,select:ze,setTool:ls,setTab:zi},window.smontaBack=()=>zt("#modal").classList.contains("hidden")?zt(".menu")?(Zr(),!0):document.body.classList.contains("showLeft")||document.body.classList.contains("showRight")?(pi(null),!0):zt("#home").classList.contains("hidden")?W.tab!=="design"?(zi("design"),!0):W.tool!=="select"||W.mate||W.measure.length?(W.mate=null,W.measure=[],ls("select"),!0):(Va(),or(!0),!0):!1:(rr(null),!0),window.SmontaAndroid&&window.SmontaAndroid.print&&(window.print=()=>window.SmontaAndroid.print(document.title)),window.addEventListener("beforeunload",()=>{it.project&&Oi()}),document.addEventListener("visibilitychange",()=>{document.hidden&&it.project&&Oi()})}var up=null;function su(i="change"){let t=it.project;if(t){if(i==="reload"&&(W.mate=null,W.measure=[]),i!=="selection"&&i!=="saved"&&(W.assy.vectors=null,clearTimeout(up),up=setTimeout(()=>{W.checks=qf(it.project),_p(),!Sn().length&&W.tab==="design"&&He(),dp()},120)),i==="saved"){fp();return}xt.sync(t),yp(),eo(),dp(),cM(),He(),fp(),_p(),i==="reload"&&xt.fit(t,null,!1),au(),Xn(),W.tab==="sheet"&&Sp(),W.tab==="bom"&&LM(),W.tab==="assy"&&i!=="selection"&&(W.assy.steps=Da(t),to()),zt("#btnUndo").disabled=!it.undoStack.length,zt("#btnRedo").disabled=!it.redoStack.length}}function dp(){let i=new Map,t=new Set(W.checks.filter(e=>e.level==="err").flatMap(e=>e.parts));for(let e of t)i.set(e,"warn");if(W.tab==="assy"){xt.setStates(i);return}for(let e of it.selection)i.set(e,"selected");for(let e of Sn())if(e.stack)for(let n of it.project.parts)n.stack===e.stack&&i.set(n.id,"selected");xt.setStates(i)}function yp(){xt.hidden.clear();for(let i of it.project.parts)i.hidden&&xt.hidden.add(i.id),!W.showFasteners&&i.stack&&xt.hidden.add(i.id);for(let[i,t]of xt.objects)t.obj.visible=!xt.hidden.has(i)}function iM(){zt("#btnHome").onclick=()=>{it.project&&Va(),or(!0)},zt("#projTitle").onclick=sM,jr("#tabs .tab").forEach(i=>i.onclick=()=>zi(i.dataset.tab)),zt("#btnUndo").onclick=()=>{let i=Nf();i&&ne(`Annullato${typeof i=="string"&&i?": "+i:""}`)},zt("#btnRedo").onclick=()=>{let i=Of();i&&ne(`Ripetuto${typeof i=="string"&&i?": "+i:""}`)},zt("#btnSave").onclick=()=>{Va(),ne("Progetto salvato","ok")},zt("#btnExport").onclick=i=>xp(i.currentTarget),zt("#btnExportM").onclick=i=>xp(i.currentTarget),zt("#btnLeft").onclick=()=>pi("Left"),zt("#btnRight").onclick=()=>pi("Right"),zt("#scrim").onclick=()=>pi(null),zt("#btnFit").onclick=()=>xt.fit(it.project,null)}function pi(i){let t=document.body,e=i&&t.classList.contains("show"+i);t.classList.remove("showLeft","showRight"),i&&!e&&t.classList.add("show"+i),zt("#scrim").classList.toggle("hidden",!t.classList.contains("showLeft")&&!t.classList.contains("showRight"))}var ar=()=>window.innerWidth<=860||window.innerHeight<=500;function zi(i){if(W.tab=i,document.body.dataset.tab=i,jr("#tabs .tab").forEach(t=>t.classList.toggle("on",t.dataset.tab===i)),zt("#sheetView").classList.toggle("hidden",i!=="sheet"),zt("#bomView").classList.toggle("hidden",i!=="bom"),zt("#assy").classList.toggle("hidden",i!=="assy"),zt("#toolbar").classList.toggle("hidden",i!=="design"),zt("#chips").classList.toggle("hidden",i==="sheet"||i==="bom"),zt("#btnFit").classList.toggle("hidden",i==="sheet"||i==="bom"),i!=="assy"){NM(),xt.offsets.clear();for(let t of it.project.parts)xt.applyOffset(t.id);eo()}i==="assy"&&(ls("select"),W.assy.steps=Da(it.project),W.assy.i=0,W.assy.t=1,to(),Ep()),fi(),pi(null),su("tab")}function fp(){let i=it.project;if(!i)return;zt("#projName").textContent=i.name;let t=i.parts.filter(n=>!n.stack).length,e=i.stacks.length;zt("#projInfo").textContent=`${it.dirty?"Modifiche non salvate":"Salvato"} \xB7 ${t} pezz${t===1?"o":"i"}, ${e} fissaggi${e===1?"o":""}`,document.title=`${i.name} \u2013 Smonta Studio`}async function sM(){let i=await jh("Rinomina il progetto","Nome del progetto",it.project.name);i&&Qt("rinomina progetto",t=>{t.name=i})}function rM(){let i=zt("#toolbar");i.innerHTML="";for(let[t,e,n]of Ha)i.append(T("button",{class:"tool"+(W.tool===t?" on":""),"data-tool":t,title:e,onclick:()=>ls(t),html:`${Ot(n)}<span>${e}</span>`}))}function ls(i){W.tool=i,W.mate=null,i!=="measure"&&(W.measure=[]),jr("#toolbar .tool").forEach(t=>t.classList.toggle("on",t.dataset.tool===i)),i!=="explode"&&W.explode&&(W.explode=0,eo()),fi(),au(),Xn(),He(),ar()&&["hole","bolt","explode"].includes(i)&&ne("Le opzioni dello strumento sono nel pannello a destra (icona in alto).","",2500)}function fi(i){let t=zt("#tip");if(W.tab==="assy"||W.tab==="sheet"||W.tab==="bom"){t.classList.add("off");return}let e=Ha.find(s=>s[0]===W.tool),n=i||(e?e[3]:"");!i&&W.tool==="mate"&&W.mate&&(n=W.mate.kind==="hole"?"Ora tocca il foro del pezzo da avvicinare: verr\xE0 spostato sopra questo.":"Ora tocca la faccia del pezzo da appoggiare."),!i&&W.tool==="measure"&&W.measure.length===1&&(n="Tocca il secondo punto."),t.querySelector("span").textContent=n,t.querySelector("use").setAttribute("href","#i-"+(e?e[2]:"select")),t.classList.toggle("off",!n)}function oM(){let i=zt("#chips");i.innerHTML="";let t=[["iso","ISO"],["front","Fronte"],["top","Alto"],["right","Destra"]],e=T("button",{class:"chip",html:`${Ot("cube")}<span>Vista</span>`});e.onclick=()=>Kh(e,t.map(([r,o])=>({label:o,icon:"cube",run:()=>xt.fit(it.project,r)}))),i.append(e);let n=T("button",{class:"chip"+(W.showFasteners?" on":""),html:`${Ot("bolt")}<span>Viti</span>`,title:"Mostra o nascondi la bulloneria"});n.onclick=()=>{W.showFasteners=!W.showFasteners,n.classList.toggle("on",W.showFasteners),yp()},i.append(n);let s=T("button",{class:"chip",html:`${Ot("layers")}<span>Trasparenza</span>`,title:"Vedi attraverso i pezzi non selezionati"});s.onclick=()=>{W.xray=!W.xray,s.classList.toggle("on",W.xray),aM()},i.append(s)}function aM(){let i=new Map;for(let t of it.project.parts)W.xray&&!it.selection.includes(t.id)&&i.set(t.id,"ghost");for(let t of it.selection)i.set(t,"selected");xt.setStates(i)}function cM(){let i=zt("#left"),t=i.scrollTop;i.innerHTML="",ar()&&i.append(T("button",{class:"btn",style:{width:"100%",marginBottom:"12px",justifyContent:"center"},onclick:()=>{Va(),pi(null),or(!0)},html:`${Ot("home")}I tuoi progetti`})),i.append(T("h2",{},"Libreria"));for(let r of _f){i.append(T("div",{class:"secTitle"},r.group));for(let o of r.items){let a=["bolt","nut","washer","pin"].includes(o.type);i.append(T("button",{class:"libItem","data-lib":o.key,onclick:()=>hM(o)},T("span",{class:"tile"+(a?" orange":""),html:Ot(o.key==="sq"?"square":o.key==="ring"?"ring":o.key==="flat"?"bar":o.key==="bar"?"tube":di[o.type].icon)}),T("span",{},T("b",{},o.name),T("small",{},o.sub+" mm"))))}}let e=it.project,n=e.parts.filter(r=>!r.stack);i.append(T("div",{class:"secTitle"},`Assieme (${n.length})`));let s=T("div",{class:"tree"});n.length||s.append(T("div",{class:"muted",style:{padding:"4px 8px",fontSize:"12px"}},"Ancora vuoto: tocca un pezzo della libreria."));for(let r of n)s.append(lM(r));if(e.stacks.length){s.append(T("div",{class:"secTitle"},`Fissaggi (${e.stacks.length})`));for(let r of e.stacks){let o=e.parts.find(c=>c.id===r.members.find(l=>{let h=e.parts.find(u=>u.id===l);return h&&(h.type==="bolt"||h.type==="pin")}));if(!o)continue;let a=it.selection.some(c=>r.members.includes(c));s.append(T("div",{class:"treeItem sub"+(a?" on":""),onclick:()=>ze(o.id)},T("span",{html:Ot(r.kind==="pin"?"pin":"bolt")}),T("span",{class:"nm"},r.kind==="pin"?`Perno ${r.size}\xD7${r.L}`:`${r.size}\xD7${r.L}${r.threaded?" in filetto":" + dado"}`),(r.warnings||[]).length?T("span",{html:Ot("warn"),style:{color:"var(--warn)"}}):null))}}i.append(s),i.scrollTop=t}function lM(i){let t=it.selection.includes(i.id),e=T("div",{class:"treeItem"+(t?" on":"")+(i.hidden?" off":""),onclick:s=>{ze(i.id,s.shiftKey||s.ctrlKey||s.metaKey),ar()&&pi(null)}},T("span",{html:Ot(di[i.type].icon)}),T("span",{class:"nm"},i.name),T("small",{},Di(i).replace(" mm",""))),n=T("button",{class:"eye",title:i.hidden?"Mostra":"Nascondi",html:Ot(i.hidden?"eyeoff":"eye")});return n.onclick=s=>{s.stopPropagation(),Qt(i.hidden?"mostra":"nascondi",()=>{i.hidden=!i.hidden})},e.append(n),e}function hM(i){let t=it.project,e;Qt(`aggiungi ${i.name}`,n=>{let s=mn(n,i.type,Ni(i.params),{name:void 0});i.type==="plate"&&i.key==="flat"&&(s.name=s.name.replace("Lastra","Barra")),i.pattern&&tr(s,{n:i.pattern.n,pcd:i.pattern.pcd,d:i.pattern.d,start:45}),uM(n,s),n.parts.push(s),e=s}),ze(e.id),ar()&&pi(null),ne(`${e.name} aggiunto. ${Ze(e)?"Usa Foro per forarlo e Accoppia per unirlo agli altri pezzi.":""}`,"ok",3e3),t.parts.length<=1?xt.fit(t,"iso"):xt.fit(t)}function uM(i,t){let e=i.parts.filter(h=>!h.stack),n=new be;for(let h of e)n.union(Fe(h));let s=Fe(t),r=s.getSize(new S),o=0,a=0,c=0;n.isEmpty()||(o=n.max.x+30,a=n.min.y,c=0);let l=s.min.clone().negate();t.pos=[o+l.x,a+l.y,c+l.z],t.type==="bolt"&&(t.pos[2]=t.params.L)}function He(){let i=zt("#right"),t=i.scrollTop;if(i.innerHTML="",!it.project)return;if(W.tab==="assy"){OM(i),i.scrollTop=t;return}if(W.tab==="design"){let n=dM();n&&i.append(n)}let e=Sn();e.length===1&&e[0].stack?i.append(...xM(e[0])):e.length===1?i.append(...fM(e[0])):e.length>1?i.append(..._M(e)):i.append(...yM()),i.scrollTop=t}function eu(i,...t){return T("div",{},T("div",{class:"secTitle"},i),...t)}function En(i,t){return T("div",{class:"kv"},T("span",{},i),T("b",{},t))}function dM(){var t;let i=W.tool;if(i==="hole"){let e=W.hole,n=T("div",{class:"card blue"});n.append(T("b",{},"Nuovi fori"));let s=T("div",{class:"seg",style:{margin:"8px 0"}});for(let[o,a]of[["bolt","Per vite"],["thread","Filettato"],["free","Diametro"]])s.append(T("button",{class:e.mode===o?"on":"",onclick:()=>{e.mode=o,He()}},a));n.append(s);let r=T("div",{class:"fields"});return e.mode==="bolt"?(r.append($n("Vite",e.size,Li.map(o=>[o,o]),o=>{e.size=o,He()})),r.append($n("Gioco (ISO 273)",e.fit,[["fine","Fine"],["medium","Medio"],["coarse","Largo"]],o=>{e.fit=o,He()})),e.d=de[e.size].clear[{fine:0,medium:1,coarse:2}[e.fit]]):e.mode==="thread"?(r.append($n("Filetto",e.thread,Li.map(o=>[o,o]),o=>{e.thread=o,He()})),e.d=de[e.thread].d):r.append(Ie("Diametro",e.d,"mm",o=>{e.d=o,He()},{min:.5,max:500})),n.append(r),n.append(T("div",{style:{marginTop:"8px",fontSize:"12px"}},e.mode==="thread"?`Foro filettato ${e.thread}: preforo \xD8 ${pt(de[e.thread].tap)}`:`Foro \xD8 ${pt(e.d)} mm${ui(e.d)?` \u2013 adatto a ${ui(e.d)}`:""}`)),n.append(T("div",{class:"muted",style:{fontSize:"11px",marginTop:"4px"}},`Il punto si aggancia ogni ${it.project.settings.snap||"libero"} mm (cambia in basso). Per schemi regolari usa i pulsanti nella scheda del pezzo.`)),n}if(i==="mate"){let e=T("div",{class:"card blue"});return e.append(T("b",{},"Accoppia")),e.append(T("ol",{class:"steps",style:{marginTop:"8px"}},T("li",{},"Tocca un foro del pezzo che resta fermo."),T("li",{},"Tocca un foro del pezzo da spostare: va sopra il primo, con i fori in asse."),T("li",{},"Se ci sono altri fori alla stessa distanza, ruota da solo per farli combaciare."))),e.append(T("div",{class:"muted",style:{fontSize:"11px"}},"Toccando una faccia lontano dai fori le due facce si appoggiano l'una sull'altra.")),W.mate&&e.append(T("div",{class:"row",style:{marginTop:"8px"}},T("span",{class:"grow"},`Scelto: ${((t=Gn(W.mate.partId))==null?void 0:t.name)||""}`),T("button",{class:"btn small",onclick:()=>{W.mate=null,Xn(),He(),fi()}},"Annulla"))),e}if(i==="bolt"){let e=W.fast,n=T("div",{class:"card blue"});n.append(T("b",{},"Fissaggio"));let s=T("div",{class:"seg",style:{margin:"8px 0"}});for(let[r,o]of[["bolt","Vite e dado"],["pin","Perno"]])s.append(T("button",{class:e.kind===r?"on":"",onclick:()=>{e.kind=r,He()}},o));return n.append(s),e.kind==="bolt"&&n.append(T("div",{class:"fields"},$n("Misura",e.size,[["auto","Automatica"],...Li.map(r=>[r,r])],r=>{e.size=r}))),n.append(T("div",{class:"muted",style:{fontSize:"11px",margin:"6px 0 8px"}},"La lunghezza viene calcolata dallo spessore del pacco, con rondelle e almeno 2 filetti oltre il dado. Se l'ultimo foro \xE8 filettato non serve il dado.")),n.append(T("button",{class:"btn small",onclick:AM,html:`${Ot("bolted")}Fissa tutti i fori allineati`})),n}if(i==="measure"){let e=T("div",{class:"card blue"});if(e.append(T("b",{},"Misura")),W.measure.length===2){let[n,s]=W.measure,r=s.clone().sub(n);e.append(En("Distanza",`${pt(r.length(),2)} mm`),En("\u0394X",pt(Math.abs(r.x),2)),En("\u0394Y",pt(Math.abs(r.y),2)),En("\u0394Z",pt(Math.abs(r.z),2))),e.append(T("button",{class:"btn small",style:{marginTop:"6px"},onclick:()=>{W.measure=[],Xn(),He(),fi()}},"Nuova misura"))}else e.append(T("div",{style:{marginTop:"6px",fontSize:"12px"}},"Tocca due punti. Vicino a un foro la misura parte dal suo centro."));return e}if(i==="explode"){let e=T("div",{class:"card blue"});e.append(T("b",{},"Vista esplosa"));let n=T("input",{type:"range",min:0,max:100,value:Math.round(W.explode*100),style:{width:"100%",marginTop:"10px"}});return n.oninput=()=>{W.explode=n.value/100,eo()},e.append(n),e.append(T("div",{class:"row",style:{marginTop:"6px"}},T("button",{class:"btn small",onclick:()=>gp(1)},"Apri"),T("button",{class:"btn small",onclick:()=>gp(0)},"Chiudi"),T("button",{class:"btn small",onclick:()=>zi("assy"),html:`${Ot("play")}Montaggio`}))),e}return(i==="move"||i==="rotate")&&!Sn().filter(e=>!e.stack).length?T("div",{class:"card blue"},"Seleziona un pezzo per spostarlo o ruotarlo."):null}function $n(i,t,e,n){let s=T("select",{},...e.map(([r,o])=>T("option",{value:r,selected:String(r)===String(t)},o)));return s.onchange=()=>n(s.value),T("div",{class:"field"},T("label",{},i),T("div",{class:"box"},s))}function fM(i){let t=[],e=T("input",{value:i.name,"aria-label":"Nome del pezzo"});e.onchange=()=>{let h=e.value.trim();h&&Qt("rinomina",()=>{i.name=h})},t.push(T("div",{class:"head"},T("div",{class:"tile",html:Ot(di[i.type].icon)}),T("div",{class:"t"},e,T("small",{},`${Vr(i)} \xB7 ${Di(i)}`)),T("button",{class:"btn ghost icon",title:"Duplica",onclick:()=>ru([i]),html:Ot("copy")}),T("button",{class:"btn ghost icon danger",title:"Elimina",onclick:()=>ou([i]),html:Ot("trash")})));let n=T("select",{class:"select"},...Object.entries(Ye).map(([h,u])=>T("option",{value:h,selected:h===i.material},`${u.name} \xB7 ${pt(u.rho,2)} g/cm\xB3`)));n.onchange=()=>Qt("materiale",()=>{i.material=n.value}),t.push(eu("Materiale",n));let s=i.params,r=(h,u)=>d=>Qt(u,f=>{i.params[h]=d,h==="din"&&d>=i.params.d&&(i.params.din=0),on(f)}),o=T("div",{class:"fields"});i.type==="plate"&&o.append(Ie("Lunghezza",s.w,"mm",r("w","lunghezza"),{min:1}),Ie("Larghezza",s.h,"mm",r("h","larghezza"),{min:1}),Ie("Spessore",s.t,"mm",r("t","spessore"),{min:.3}),Ie("Raggio spigoli",s.r||0,"mm",r("r","raggio"),{min:0})),i.type==="disc"&&o.append(Ie("Diametro",s.d,"mm",r("d","diametro"),{min:2}),Ie("Foro centrale",s.din,"mm",r("din","foro centrale"),{min:0}),Ie("Spessore",s.t,"mm",r("t","spessore"),{min:.3})),i.type==="angle"&&o.append(Ie("Ala A",s.a,"mm",r("a","ala A"),{min:5}),Ie("Ala B",s.b,"mm",r("b","ala B"),{min:5}),Ie("Spessore",s.t,"mm",r("t","spessore"),{min:.5}),Ie("Lunghezza",s.L,"mm",r("L","lunghezza"),{min:5})),i.type==="tube"&&o.append(Ie("Diametro esterno",s.d,"mm",r("d","diametro"),{min:1}),Ie("Diametro interno",s.din,"mm",r("din","diametro interno"),{min:0}),Ie("Lunghezza",s.L,"mm",r("L","lunghezza"),{min:1})),i.type==="bolt"&&o.append($n("Misura",s.size,Li.map(h=>[h,h]),h=>Qt("misura",()=>{i.params.size=h})),$n("Lunghezza",s.L,Sa.map(h=>[h,`${h} mm`]),h=>Qt("lunghezza",()=>{i.params.L=+h}))),(i.type==="nut"||i.type==="washer")&&o.append($n("Misura",s.size,Li.map(h=>[h,h]),h=>Qt("misura",()=>{i.params.size=h}))),i.type==="pin"&&o.append($n("Diametro",s.d,wa.map(h=>[h,`\xD8 ${h}`]),h=>Qt("diametro",()=>{i.params.d=+h})),$n("Lunghezza",s.L,Ea.map(h=>[h,`${h} mm`]),h=>Qt("lunghezza",()=>{i.params.L=+h}))),t.push(eu("Misure",o)),Ze(i)&&t.push(mM(i)),t.push(Mp([i]));let a=T("div",{class:"card"});a.append(En("Massa",`${pt(Vn(i),3)} kg`)),(i.type==="plate"||i.type==="disc")&&a.append(En("Superficie (due facce)",`${pt(Wr(i)*2/1e6,3)} m\xB2`));let c=it.project.stacks.filter(h=>h.plates.includes(i.id));c.length&&a.append(En("Fissaggi",pM(c))),t.push(a);let l=W.checks.filter(h=>h.parts.includes(i.id));return l.length?t.push(...l.map(nu)):Ze(i)&&i.holes.length&&t.push(T("div",{class:"card ok row",html:`${Ot("check")}<span>Fori e distanze dai bordi a posto.</span>`})),as(i)&&t.push(T("button",{class:"btn",onclick:()=>zi("sheet"),html:`${Ot("drawing")}Tavola 2D quotata`})),t}function pM(i){let t=new Map;for(let e of i){let n=e.kind==="pin"?`perno ${e.size}\xD7${e.L}`:`${e.size}\xD7${e.L}`;t.set(n,(t.get(n)||0)+1)}return[...t].map(([e,n])=>`${n} \xD7 ${e}`).join(", ")}function mM(i){let t=T("div",{});t.append(T("div",{class:"secTitle"},`Fori (${i.holes.length})`));let e=rs(i);i.holes.forEach((s,r)=>{let o=!Ui(i,s),a=s.kind==="thread"?`filettato ${s.thread}`:ui(s.d)?`passante \xB7 per vite ${ui(s.d)}`:"passante",c=T("div",{class:"holeRow"+(s.kind==="thread"?" thread":"")+(o?" bad":"")},T("span",{class:"dot"}),T("div",{class:"t"},T("b",{},s.kind==="thread"?`${s.thread}  ${a}`:`\xD8 ${pt(s.d)}  ${a}`),T("small",{},`${e.length>1?`ala ${s.face||"A"} \xB7 `:""}x ${pt(s.x)} \xB7 y ${pt(s.y)}${o?" \xB7 fuori dal pezzo!":""}`)),T("button",{class:"btn ghost icon",title:"Modifica",onclick:()=>pp(i,s),html:Ot("sliders")}),T("button",{class:"btn ghost icon",title:"Elimina foro",onclick:()=>Qt("elimina foro",l=>{i.holes=i.holes.filter(h=>h.id!==s.id),on(l)}),html:Ot("x")}));t.append(c)});let n=T("div",{class:"row"},T("button",{class:"btn small",onclick:()=>pp(i,null),html:`${Ot("plus")}Foro`}),T("button",{class:"btn small",onclick:()=>Qh(i,"grid"),html:`${Ot("grid")}Griglia`}),T("button",{class:"btn small",onclick:()=>Qh(i,"circle"),html:`${Ot("ring")}Circonferenza`}));return i.type==="plate"&&n.append(T("button",{class:"btn small",onclick:()=>Qh(i,"corners"),html:`${Ot("square")}Agli angoli`})),i.holes.length&&n.append(T("button",{class:"btn small danger",onclick:async()=>{await Oa("Elimina i fori",`Togliere tutti i ${i.holes.length} fori di ${i.name}?`,"Elimina",!0)&&Qt("elimina fori",s=>{i.holes=[],on(s)})}},"Togli tutti")),t.append(n),t}function Fa(i){return[{key:"kind",label:"Tipo",type:"select",value:"pass",options:[["pass","Passante"],["thread","Filettato"]]},{key:"d",label:"Diametro (se passante)",value:je(i),unit:"mm"},{key:"thread",label:"Filetto (se filettato)",type:"select",value:"M8",options:Li.map(t=>[t,t])}]}function vp(i){return i.kind==="thread"?{d:de[i.thread].d,kind:"thread",thread:i.thread}:{d:i.d,kind:"pass",thread:null}}async function pp(i,t){let e=rs(i),n=t||{x:i.type==="disc"?0:e[0].size[0]/2,y:i.type==="disc"?0:e[0].size[1]/2,d:W.hole.d,kind:"pass",thread:"M8",face:"A"},s=[{key:"x",label:i.type==="disc"?"X dal centro":"X dallo spigolo",value:je(n.x),unit:"mm"},{key:"y",label:i.type==="disc"?"Y dal centro":"Y dallo spigolo",value:je(n.y),unit:"mm"},...Fa(n.d)];s[2].value=n.kind,s[4].value=n.thread||"M8",e.length>1&&s.push({key:"face",label:"Ala",type:"select",value:n.face||"A",options:[["A","Ala A"],["B","Ala B"]]});let r=await Jr(t?"Modifica foro":"Nuovo foro",s,t?"Applica":"Aggiungi",i.type==="disc"?"Le coordinate partono dal centro del disco.":"Le coordinate partono dallo spigolo in basso a sinistra.");if(!r)return;let o=vp(r),a={...o,x:r.x,y:r.y,face:r.face||"A"};if(!Ui(i,a)){ne("Il foro uscirebbe dal pezzo o toccherebbe il bordo.","err");return}Qt(t?"modifica foro":"nuovo foro",c=>{t?Object.assign(i.holes.find(l=>l.id===t.id),{x:r.x,y:r.y,...o,face:r.face||t.face||"A"}):en(i,r.x,r.y,o.d,r.face||"A",o.kind,o.thread),on(c)})}async function Qh(i,t){let e=rs(i),[n,s]=e[0].size,r;if(t==="grid"?r=await Jr("Fori a griglia",[{key:"nx",label:"Colonne",value:2},{key:"ny",label:"Righe",value:2},{key:"px",label:"Passo colonne",value:je(i.type==="disc"?60:Math.max(10,n-50)),unit:"mm"},{key:"py",label:"Passo righe",value:je(i.type==="disc"?60:Math.max(10,s-50)),unit:"mm"},{key:"x0",label:"Primo foro X",value:je(i.type==="disc"?-30:25),unit:"mm"},{key:"y0",label:"Primo foro Y",value:je(i.type==="disc"?-30:25),unit:"mm"},...Fa(W.hole.d)],"Crea fori"):t==="circle"?r=await Jr("Fori su circonferenza",[{key:"n",label:"Numero di fori",value:4},{key:"pcd",label:"Diametro della circonferenza",value:je(i.type==="disc"?Math.round((i.params.d+(i.params.din||0))/2):Math.round(Math.min(n,s)*.6)),unit:"mm"},{key:"start",label:"Angolo del primo foro",value:45,unit:"\xB0"},{key:"cx",label:"Centro X",value:je(i.type==="disc"?0:n/2),unit:"mm"},{key:"cy",label:"Centro Y",value:je(i.type==="disc"?0:s/2),unit:"mm"},...Fa(W.hole.d)],"Crea fori"):r=await Jr("Fori agli angoli",[{key:"margin",label:"Distanza dai bordi",value:je(Math.max(10,Math.round(W.hole.d*2.5))),unit:"mm"},...Fa(W.hole.d)],"Crea fori"),!r)return;let o=vp(r),a=Ni(i);t==="grid"?yf(a,{nx:Math.round(r.nx),ny:Math.round(r.ny),px:r.px,py:r.py,x0:r.x0,y0:r.y0,d:o.d}):t==="circle"?tr(a,{n:Math.round(r.n),pcd:r.pcd,start:r.start,cx:r.cx,cy:r.cy,d:o.d}):vf(a,{margin:r.margin,d:o.d});let c=a.holes.slice(i.holes.length);if(!c.length){ne("Nessun foro creato: controlla i numeri.","err");return}let l=c.filter(h=>!Ui(a,h)).length;if(l===c.length){ne("I fori uscirebbero tutti dal pezzo.","err");return}Qt("schema di fori",h=>{for(let u of c)Ui(a,u)&&(u.kind=o.kind,u.thread=o.thread,i.holes.push(u));on(h)}),ne(`Creati ${c.length-l} fori${l?` (${l} scartati perch\xE9 fuori dal pezzo)`:""}.`,l?"warn":"ok")}function Mp(i){let t=T("div",{});if(t.append(T("div",{class:"secTitle"},"Posizione")),i.length===1){let s=i[0],r=o=>a=>Qt("sposta",c=>{s.pos[o]=a,on(c)});t.append(T("div",{class:"fields three"},Ie("X",s.pos[0],"mm",r(0)),Ie("Y",s.pos[1],"mm",r(1)),Ie("Z",s.pos[2],"mm",r(2))))}let e=(s,r)=>Qt("ruota",o=>gM(i,s,r,o)),n=T("div",{class:"row",style:{marginTop:"8px"}});for(let[s,r]of[["x","X"],["y","Y"],["z","Z"]])n.append(T("button",{class:"btn small",title:`Ruota di 90\xB0 attorno all'asse ${r}`,onclick:()=>e(s,90),html:`${Ot("rotate")}${r}`}));return n.append(T("button",{class:"btn small",title:"Appoggia sul piano di lavoro",onclick:()=>Qt("appoggia",s=>{let r=new be;for(let o of i)r.union(Fe(o));for(let o of i)o.pos[2]-=r.min.z;on(s)})},"A terra")),t.append(n),t}function gM(i,t,e,n){let s=new be;for(let c of i)s.union(Fe(c));let r=s.getCenter(new S),o={x:new S(1,0,0),y:new S(0,1,0),z:new S(0,0,1)}[t],a=new Vt().setFromAxisAngle(o,Dn.degToRad(e));for(let c of i){let l=new Vt(...c.quat);c.quat=a.clone().multiply(l).toArray();let h=new S(...c.pos).sub(r).applyQuaternion(a).add(r);c.pos=h.toArray().map(u=>Math.round(u*1e3)/1e3)}on(n)}function xM(i){let t=it.project,e=t.stacks.find(a=>a.id===i.stack);if(!e)return[T("div",{},"Fissaggio")];let n=[],s=de[e.size];n.push(T("div",{class:"head"},T("div",{class:"tile",style:{color:"var(--accent)",background:"#fdf1e3"},html:Ot(e.kind==="pin"?"pin":"bolt")}),T("div",{class:"t"},T("b",{style:{fontSize:"15px"}},e.kind==="pin"?`Perno ${e.size} \xD7 ${e.L}`:`Vite ${e.size} \xD7 ${e.L}`),T("small",{},e.kind==="pin"?"Perno di centraggio ISO 2338":e.threaded?"Vite + rondella, avvitata nel foro filettato":"Vite + 2 rondelle + dado")),T("button",{class:"btn ghost icon danger",title:"Togli il fissaggio",onclick:()=>Qt("togli fissaggio",a=>{a.parts=a.parts.filter(c=>c.stack!==e.id),a.stacks=a.stacks.filter(c=>c.id!==e.id),it.selection=[]}),html:Ot("trash")})));let r=T("div",{class:"card"});r.append(En("Pacco da serrare",`${pt(e.grip,2)} mm`),En("Lastre attraversate",e.plates.map(a=>(t.parts.find(c=>c.id===a)||{}).name).join(", "))),e.kind==="bolt"&&r.append(En("Coppia di serraggio (8.8)",`${pt(s.torque)} Nm`),En("Chiave",`${s.s} mm`),En("Foro consigliato",`\xD8 ${pt(s.clear[1])} (medio)`)),n.push(r),e.kind==="bolt"&&n.push(eu("Lunghezza vite",T("div",{class:"fields"},$n("Lunghezza",e.L,Sa.map(a=>[a,`${a} mm`]),a=>Qt("lunghezza vite",c=>{let l=c.stacks.find(h=>h.id===e.id);l.L=+a,l.manualL=!0,on(c)})),T("div",{class:"field"},T("label",{}," "),T("button",{class:"btn small",onclick:()=>Qt("lunghezza automatica",a=>{let c=a.stacks.find(l=>l.id===e.id);c.manualL=!1,on(a)})},"Automatica")))));let o=e.warnings||[];return o.length?n.push(...o.map(a=>T("div",{class:"card warn row",html:`${Ot("warn")}<span>${Kr(a)}</span>`}))):n.push(T("div",{class:"card ok row",html:`${Ot("check")}<span>${e.kind==="pin"?"Perno della misura giusta.":"Vite, fori e lunghezza verificati."}</span>`})),n.push(T("button",{class:"btn",onclick:()=>ze(e.plates),html:`${Ot("select")}Seleziona le lastre`})),n}function _M(i){let t=[];t.push(T("div",{class:"head"},T("div",{class:"tile",html:Ot("layers")}),T("div",{class:"t"},T("b",{style:{fontSize:"15px"}},`${i.length} pezzi selezionati`),T("small",{},`Massa totale ${pt(i.reduce((n,s)=>n+Vn(s),0),3)} kg`))));let e=i.filter(n=>!n.stack);return e.length&&t.push(Mp(e)),t.push(T("div",{class:"row"},T("button",{class:"btn",onclick:()=>ru(e),html:`${Ot("copy")}Duplica`}),T("button",{class:"btn danger",onclick:()=>ou(i),html:`${Ot("trash")}Elimina`}))),t}function yM(){let i=it.project,t=[],e=i.parts.reduce((r,o)=>r+Vn(o),0);if(t.push(T("div",{class:"head"},T("div",{class:"tile",html:Ot("cube")}),T("div",{class:"t"},T("b",{style:{fontSize:"15px"}},i.name),T("small",{},`${i.parts.filter(r=>!r.stack).length} pezzi \xB7 ${i.stacks.length} fissaggi \xB7 ${pt(e,2)} kg`)))),!i.parts.length)return t.push(T("div",{class:"card blue"},T("b",{},"Come si costruisce"),T("ol",{class:"steps",style:{marginTop:"8px"}},T("li",{},"Tocca una lastra o un profilo nella libreria a sinistra."),T("li",{},"Con lo strumento Foro tocca la lastra dove vuoi forarla (o usa Griglia / Circonferenza)."),T("li",{},"Con Accoppia tocca un foro della prima lastra e uno della seconda: si allineano."),T("li",{},"Con Bullona tocca un foro: vite, rondelle e dado giusti vengono messi da soli."),T("li",{},"Guarda Tavola 2D, Distinta e Montaggio: sono gi\xE0 pronti.")))),t.push(T("button",{class:"btn",onclick:HM,html:`${Ot("cube")}Carica l'esempio qui`})),t;let n=W.checks.filter(r=>r.level==="err"),s=W.checks.filter(r=>r.level==="warn");return t.push(T("div",{class:"secTitle"},"Controlli")),W.checks.length||t.push(T("div",{class:"card ok row",html:`${Ot("check")}<span>Tutto a posto: fori, distanze dai bordi, allineamenti, viti e compenetrazioni.</span>`})),t.push(...n.map(nu),...s.map(nu)),t.push(T("div",{class:"muted",style:{fontSize:"12px"}},"Tocca un pezzo per modificarne misure, materiale e fori.")),t}function nu(i){let t=T("div",{class:`checkItem ${i.level}`,html:`${Ot("warn")}<span></span>`});return t.querySelector("span").textContent=i.text,t.onclick=()=>{let e=i.parts.filter(n=>Gn(n));e.length&&ze(e.filter(n=>!Gn(n).stack).length?e.filter(n=>!Gn(n).stack):e)},t}var Kr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function ru(i){if(!i.length)return;let t=[];Qt("duplica",e=>{let n=new be;for(let r of i)n.union(Fe(r));let s=n.getSize(new S).x+20;for(let r of i){let o=Ni(r);o.id=Un("p"),o.stack=null,o.name=r.name+" (copia)",o.holes=o.holes.map(a=>({...a,id:Un("h")})),o.pos[0]+=s,e.parts.push(o),t.push(o.id)}}),ze(t)}async function ou(i){let t=new Set(i.map(s=>s.id)),n=it.project.stacks.filter(s=>s.plates.some(r=>t.has(r))||s.members.some(r=>t.has(r)));(i.length>1||n.length)&&!await Oa("Elimina",`Eliminare ${i.length===1?i[0].name:i.length+" pezzi"}${n.length?` e ${n.length} fissaggi collegati`:""}?`,"Elimina",!0)||Qt("elimina",s=>{let r=new Set(n.map(o=>o.id));s.parts=s.parts.filter(o=>!t.has(o.id)&&!(o.stack&&r.has(o.stack))),s.stacks=s.stacks.filter(o=>!r.has(o.id)),it.selection=[]})}function vM(){let i=xt.renderer.domElement,t=null;i.addEventListener("pointerdown",s=>{t={x:s.clientX,y:s.clientY,t:performance.now(),id:s.pointerId,multi:!!t}}),i.addEventListener("pointerup",s=>{if(!t||t.id!==s.pointerId){t=null;return}let r=Math.hypot(s.clientX-t.x,s.clientY-t.y),o=performance.now()-t.t,a=t.multi;t=null,r<7&&o<600&&!a&&!xt.gizmo.dragging&&bM(s)}),i.addEventListener("pointercancel",()=>{t=null});let e=0;i.addEventListener("pointermove",s=>{s.pointerType!=="mouse"||t||!["hole","mate","bolt","measure"].includes(W.tool)||W.tab!=="design"||(cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let r=W.tool==="hole"?null:Qr(s),o=r?null:xt.pick(s,Ze),a=r?r.sel:null,c=a?a.axis.hole.id+a.side:o&&W.tool==="hole"?"f"+Math.round(o.point.x)+Math.round(o.point.y)+Math.round(o.point.z):null;c!==(W.hover&&W.hover.key)&&(W.hover=a?{key:c,sel:a}:o&&W.tool==="hole"?{key:c,hit:o}:null,Xn())}))}),i.addEventListener("pointerleave",()=>{W.hover&&(W.hover=null,Xn())}),i.addEventListener("dblclick",s=>{let r=xt.pick(s);r&&MM(r.part)});let n=null;xt.gizmo.addEventListener("dragging-changed",s=>{s.value&&(n={parts:Sn().filter(o=>!o.stack).map(o=>({id:o.id,pos:[...o.pos],quat:[...o.quat]})),pPos:xt.proxy.position.clone(),pQuat:xt.proxy.quaternion.clone(),snapshot:JSON.stringify(it.project)})}),xt.onTransform=s=>{if(!n)return;let r=s.quaternion.clone().multiply(n.pQuat.clone().invert());for(let o of n.parts){let a=Gn(o.id);if(!a)continue;let c=new S(...o.pos).sub(n.pPos).applyQuaternion(r),l=n.pPos.clone().add(c).add(s.position.clone().sub(n.pPos));a.pos=l.toArray().map(u=>Math.round(u*1e3)/1e3),a.quat=r.clone().multiply(new Vt(...o.quat)).toArray();let h=xt.objects.get(a.id);h&&(h.obj.position.set(...a.pos),h.obj.quaternion.set(...a.quat))}for(let o of it.project.stacks)if(o.plates.some(a=>n.parts.some(c=>c.id===a)))for(let a of o.members){let c=xt.objects.get(a);c&&(c.obj.visible=!1)}},xt.onTransformEnd=()=>{n&&(it.undoStack.push({label:W.tool==="rotate"?"ruota":"sposta",data:n.snapshot}),it.redoStack.length=0,on(it.project),n=null,Xr("change"))}}function MM(i){let t=Fe(i),e=t.getCenter(new S),n=t.getSize(new S).length()||50,s=xt.camera.position.clone().sub(xt.controls.target).normalize();xt.animateCamera(e.clone().addScaledVector(s,n*2.2),e,400)}function bM(i){if(W.tab==="assy"){let e=xt.pick(i);e&&ne(`${e.part.name} \u2013 ${Di(e.part)}`);return}if(W.tab!=="design")return;let t=W.tool;if(t==="select"||t==="move"||t==="rotate"||t==="explode"){let e=xt.pick(i);e?ze(e.part.id,i.shiftKey||i.ctrlKey||i.metaKey):i.shiftKey||ze([]),ar();return}if(t==="hole")return SM(i);if(t==="mate")return wM(i);if(t==="bolt")return EM(i);if(t==="measure")return RM(i)}function Qr(i,t=()=>!0){let e=xt.camera.position,n=xt.pick(i),s=null;for(let r of it.project.parts){if(!Ze(r)||r.hidden||!t(r)||xt.hidden.has(r.id))continue;let o=xt.offsets.get(r.id);for(let a of Oe(r))for(let c of["a","b"]){let l=(c==="b"?a.b:a.a).clone();o&&l.add(o);let h=c==="b"?a.dir:a.dir.clone().negate(),u=e.clone().sub(l),d=h.dot(u.clone().normalize());if(d<-.05)continue;let f=xt.toScreen(l);if(f.z>1)continue;let g=Math.hypot(f.x-i.clientX,f.y-i.clientY),x=a.d/2*xt.pxPerMm(l),m=Math.max(22,x+10);if(g>m||n&&n.part.id!==r.id&&n.distance<u.length()-3)continue;let p=g/m-d*.3;(!s||p<s.score)&&(s={score:p,part:r,sel:{axis:a,side:c}})}}return s}function bp(i,t,e){let n=new jt().compose(new S(...i.pos),new Vt(...i.quat),new S(1,1,1)).invert(),s=t.clone().applyMatrix4(n),r=e.clone().applyQuaternion(new Vt(...i.quat).invert());return i.type==="angle"?Math.abs(r.z)>.9&&s.z<=i.params.t+.01?{face:"A",x:s.x,y:s.y}:Math.abs(r.x)>.9&&s.x<=i.params.t+.01?{face:"B",x:s.y,y:s.z}:null:Math.abs(r.z)<.9?null:{face:"A",x:s.x,y:s.y}}function SM(i){let t=xt.pick(i,Ze);if(!t){ne("Tocca una faccia di una lastra o di un angolare.","warn");return}let e=t.part,n=bp(e,t.point,t.normal);if(!n){ne("Tocca la faccia grande della lastra, non il bordo.","warn");return}let s=it.project.settings.snap||0,r=u=>s?Math.round(u/s)*s:Math.round(u*10)/10,o=r(n.x),a=r(n.y),c=W.hole,l=c.mode==="thread"?de[c.thread].d:c.d,h={x:o,y:a,d:l,face:n.face};if(!Ui(e,h)){ne("L\xEC il foro uscirebbe dal pezzo: troppo vicino al bordo.","err");return}if(e.holes.some(u=>(u.face||"A")===n.face&&Math.hypot(u.x-o,u.y-a)<(u.d+l)/2+1)){ne("C'\xE8 gi\xE0 un foro in quel punto.","warn");return}Qt("foro",u=>{en(e,o,a,l,n.face,c.mode==="thread"?"thread":"pass",c.mode==="thread"?c.thread:null),on(u)}),it.selection.includes(e.id)||ze(e.id),ne(`Foro ${c.mode==="thread"?c.thread:"\xD8 "+pt(l)} in x ${pt(o)} \xB7 y ${pt(a)}`,"ok",1600)}function wM(i){let t=Qr(i,W.mate?l=>l.id!==W.mate.partId:void 0)||Qr(i),e=t?null:xt.pick(i,l=>!l.stack);if(!t&&!e){W.mate&&(W.mate=null,Xn(),He(),fi());return}let n=t?t.part:e.part,s=t?{kind:"hole",partId:n.id,holeId:t.sel.axis.hole.id,side:t.sel.side}:{kind:"face",partId:n.id,point:e.point.clone(),normal:e.normal.clone()};if(!W.mate){W.mate=s,ze(n.id),Xn(),He(),fi();return}if(W.mate.partId===n.id){W.mate=s,Xn(),fi(),ne("Scegli un foro su un altro pezzo.","warn");return}let r=W.mate,o=Gn(r.partId),a=n,c=0;Qt("accoppia",l=>{if(r.kind==="hole"&&s.kind==="hole"){let h=Oe(o).find(d=>d.hole.id===r.holeId),u=Oe(a).find(d=>d.hole.id===s.holeId);c=os(o,{axis:h,side:r.side},a,{axis:u,side:s.side},l.parts.filter(d=>Ze(d)&&d.id!==a.id))}else{let h=r.kind==="hole"?mp(o,r):{p:r.point,n:r.normal},u=s.kind==="hole"?mp(a,s):{p:s.point,n:s.normal};Xf(h.p,h.n,a,u.p,u.n)}on(l)}),W.mate=null,ze(a.id),fi(),ne(c?`${a.name} accoppiato a ${o.name}: ${c} for${c===1?"o":"i"} in asse.`:`${a.name} appoggiato su ${o.name}.`,"ok",3e3)}function mp(i,t){let e=Oe(i).find(n=>n.hole.id===t.holeId);return t.side==="b"?{p:e.b,n:e.dir.clone()}:{p:e.a,n:e.dir.clone().negate()}}function EM(i){let t=Qr(i);if(!t){ne("Tocca un foro di una lastra (anche al centro va bene).","warn");return}let e={part:t.part},n=t.sel,s=it.project,r=s.stacks.find(a=>a.plates.includes(e.part.id)&&(a.ref.hole===n.axis.hole.id||TM(s,a,n)));if(r){ze(r.members.find(a=>["bolt","pin"].includes(Gn(a).type))),ne("Questo foro \xE8 gi\xE0 fissato.","warn");return}let o;if(Qt("fissaggio",a=>{o=ir(a,n,W.fast.kind,W.fast.kind==="bolt"&&W.fast.size!=="auto"?{size:W.fast.size}:{}),!o.error&&(a.parts.push(...o.parts),a.stacks.push(o.stack))}),o.error){it.undoStack.pop(),ne(o.error,"err",4e3);return}ze(o.parts.find(a=>a.type==="bolt"||a.type==="pin").id),o.warnings.length?ne(o.warnings[0],"warn",5e3):ne(o.stack.kind==="pin"?`Perno ${o.stack.size}\xD7${o.stack.L} inserito.`:`Vite ${o.stack.size}\xD7${o.stack.L} con rondelle${o.stack.threaded?"":" e dado"}: serrare a ${pt(o.stack.torque)} Nm.`,"ok",3200)}function TM(i,t,e){let n=Fi(i,e);return n?n.segs.some(s=>s.axis.hole.id===t.ref.hole):!1}function AM(){let i=it.project,t=0,e=0;if(Qt("fissa tutti",n=>{let s=new Set;for(let r of n.stacks){let o=n.parts.find(c=>c.id===r.ref.part),a=o&&Oe(o).find(c=>c.hole.id===r.ref.hole);if(a){let c=Fi(n,{axis:a,side:"a"});c&&c.segs.forEach(l=>s.add(l.axis.hole.id))}}for(let r of n.parts.filter(Ze))for(let o of Oe(r)){if(s.has(o.hole.id))continue;let a=Fi(n,{axis:o,side:"b"});if(!a||(a.segs.forEach(u=>s.add(u.axis.hole.id)),new Set(a.segs.map(u=>u.part.id)).size<2))continue;let c=a.dir.z>=0?a.segs[a.segs.length-1]:a.segs[0],l=Math.abs(a.dir.z)>.5?c.axis.dir.dot(a.dir)*(a.dir.z>=0?1:-1)>0?"b":"a":"b",h=ir(n,{axis:c.axis,side:l},W.fast.kind,W.fast.kind==="bolt"&&W.fast.size!=="auto"?{size:W.fast.size}:{});if(h.error){e++;continue}n.parts.push(...h.parts),n.stacks.push(h.stack),t++,h.warnings.length&&e++}}),!t){it.undoStack.pop(),ne("Nessun foro allineato da fissare: prima accoppia le lastre.","warn",3500);return}ne(`Inseriti ${t} fissaggi${e?` (${e} con avvisi: guarda i Controlli)`:""}.`,e?"warn":"ok",3500)}function RM(i){let t=Qr(i),e=t?null:xt.pick(i),n=t?(t.sel.side==="b"?t.sel.axis.b:t.sel.axis.a).clone():e?e.point.clone():xt.pickGround(i);n&&(W.measure.length>=2&&(W.measure=[]),W.measure.push(n),Xn(),He(),fi())}function Xn(){if(xt.clearOverlay(),W.tab!=="design")return;let i=it.project;if(W.hover&&W.hover.sel&&xt.addOverlay(Ra(W.hover.sel.axis,15895592)),W.hover&&W.hover.hit&&W.tool==="hole"){let t=W.hover.hit.part;bp(t,W.hover.hit.point,W.hover.hit.normal)&&xt.dot(W.hover.hit.point,15895592,1.6)}if(W.mate){let t=Gn(W.mate.partId);if(t&&W.mate.kind==="hole"){let e=Oe(t).find(n=>n.hole.id===W.mate.holeId);e&&(xt.addOverlay(Ra(e,2060267)),xt.label("1",W.mate.side==="b"?e.b:e.a))}else t&&(xt.dot(W.mate.point,2060267,2.5),xt.label("1",W.mate.point))}if(W.measure.length){for(let t of W.measure)xt.dot(t,2060267,1.8);if(W.measure.length===2){let[t,e]=W.measure;xt.line(t,e,2060267),xt.label(`${pt(t.distanceTo(e),1)} mm`,t.clone().add(e).multiplyScalar(.5))}}if(["hole","mate","bolt"].includes(W.tool)){for(let t of Sn())if(Ze(t))for(let e of Oe(t))xt.addOverlay(Ra(e,2060267))}}function au(){let i=Sn().filter(t=>!t.stack);W.tab==="design"&&(W.tool==="move"||W.tool==="rotate")&&i.length?xt.attachGizmo(W.tool==="move"?"translate":"rotate",i,it.project.settings.snap||null):xt.detachGizmo()}function eo(){if(W.tab==="assy")return;let i=it.project;if(i){if(!W.explode){if(xt.offsets.size){xt.offsets.clear();for(let t of i.parts)xt.applyOffset(t.id)}return}W.assy.vectors||(W.assy.vectors=bh(i,Da(i)));for(let t of i.parts){let e=W.assy.vectors.get(t.id);e?xt.offsets.set(t.id,e.clone().multiplyScalar(W.explode)):xt.offsets.delete(t.id),xt.applyOffset(t.id)}}}function gp(i){let t=W.explode,e=performance.now(),n=()=>{let s=Math.min(1,(performance.now()-e)/700);W.explode=t+(i-t)*(1-Math.pow(1-s,3)),eo(),s<1?requestAnimationFrame(n):He()};n()}function Sp(){let i=zt("#sheetView");i.innerHTML="";let t=it.project,e=t.parts.filter(a=>as(a));if(!e.length){i.append(T("div",{class:"empty",html:`${Ot("drawing")}<h3>Nessuna lastra da disegnare</h3><p>Aggiungi lastre, dischi o angolari nella scheda Progetta: qui comparir\xE0 la tavola quotata, pronta per l'officina o per il taglio laser.</p>`}));return}let n=Sn().find(as)||e[0],s=T("select",{class:"select",style:{width:"auto",minWidth:"220px"}},...e.map(a=>T("option",{value:a.id,selected:a.id===n.id},`${a.name} \u2013 ${Di(a)}`)));s.onchange=()=>{ze(s.value),Sp()};let r=Zf(n,t);i.append(T("div",{class:"pageBar"},s,T("span",{class:"grow"}),T("button",{class:"btn",onclick:()=>wn(`${xn(n.name)}.dxf`,La(n),"application/dxf").then(Wn),html:`${Ot("export")}DXF per taglio`}),T("button",{class:"btn",onclick:()=>wn(`${xn(n.name)}.svg`,r,"image/svg+xml").then(Wn),html:`${Ot("drawing")}SVG`}),T("button",{class:"btn",onclick:()=>PM(r,n).then(Wn),html:`${Ot("save")}Immagine`}),T("button",{class:"btn",onclick:()=>IM(r),html:`${Ot("print")}Stampa / PDF`}),T("button",{class:"btn",onclick:CM,html:`${Ot("layers")}Tutte in DXF`}))),i.append(T("div",{class:"sheetWrap",html:r}));let o=Mh(n.holes);o.length&&i.append(T("div",{class:"pageBar",style:{marginTop:"12px"}},T("span",{class:"muted"},`Lavorazioni: ${o.join(" \xB7 ")}`)))}function Wn(i){i&&i.ok?ne(i.where&&i.where!=="Download"?`Salvato in ${i.where}`:"File salvato nei Download","ok",3500):ne("Salvataggio non riuscito","err")}async function CM(){let i=it.project,t=new Set,e=0;for(let n of i.parts.filter(as)){let s=JSON.stringify([n.type,n.params,n.holes.map(r=>[r.x,r.y,r.d,r.kind,r.face])]);t.has(s)||(t.add(s),await wn(`${xn(i.name)}_${xn(n.name)}.dxf`,La(n),"application/dxf"),e++,await new Promise(r=>setTimeout(r,250)))}ne(`${e} file DXF salvati (uno per ogni lastra diversa).`,"ok",3500)}function IM(i){let t=zt("#printArea");t.innerHTML=i,t.classList.remove("hidden");let e=t.querySelector("svg");e.setAttribute("width","100%"),e.setAttribute("height","100%"),wp(t)}function wp(i){let t=()=>{i.classList.add("hidden"),i.innerHTML=""};setTimeout(()=>{window.print(),window.SmontaAndroid?setTimeout(()=>document.addEventListener("pointerdown",t,{once:!0}),1500):setTimeout(t,500)},100)}function PM(i,t){return new Promise(e=>{let n=new Image;n.onload=()=>{let s=document.createElement("canvas");s.width=2970,s.height=2100;let r=s.getContext("2d");r.fillStyle="#fff",r.fillRect(0,0,s.width,s.height),r.drawImage(n,0,0,s.width,s.height),s.toBlob(o=>wn(`${xn(t.name)}_tavola.png`,o,"image/png").then(e),"image/png")},n.onerror=()=>e({ok:!1}),n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i.replace(/width="297mm" height="210mm"/,'width="2970" height="2100"'))})}function LM(){let i=zt("#bomView");i.innerHTML="";let t=it.project;if(!t.parts.length){i.append(T("div",{class:"empty",html:`${Ot("list")}<h3>Distinta vuota</h3><p>Aggiungi pezzi e fissaggi: la distinta materiali con quantit\xE0 e masse si compila da sola.</p>`}));return}let e=Sh(t);i.append(T("div",{class:"pageBar"},T("h2",{style:{margin:0}},`Distinta materiali \u2013 ${t.name}`),T("span",{class:"grow"}),T("button",{class:"btn",onclick:()=>wn(`${xn(t.name)}_distinta.csv`,wh(t),"text/csv").then(Wn),html:`${Ot("export")}Excel (CSV)`}),T("button",{class:"btn",onclick:()=>DM(e),html:`${Ot("print")}Stampa / PDF`})));let n=T("table",{class:"bomTable"});n.append(T("thead",{},T("tr",{},...["Pos.","Q.t\xE0","Descrizione","Materiale","Massa cad.","Massa tot."].map(c=>T("th",{},c)))));let s=T("tbody");for(let c of e.rows)s.append(T("tr",{onclick:()=>{ze(c.ids),zi("design")}},T("td",{class:"n"},c.pos),T("td",{class:"n"},c.qty),T("td",{},c.desc,T("div",{class:"muted",style:{fontSize:"11px"}},c.names.slice(0,6).join(", ")+(c.names.length>6?"\u2026":""))),T("td",{},c.material),T("td",{class:"n"},`${pt(c.unit,3)} kg`),T("td",{class:"n"},`${pt(c.total,3)} kg`)));n.append(s),n.append(T("tfoot",{},T("tr",{},T("td",{}),T("td",{class:"n"},e.count),T("td",{},"Totale"),T("td",{}),T("td",{}),T("td",{class:"n"},`${pt(e.totalMass,3)} kg`)))),i.append(n);let r=t.parts.filter(as),o=r.reduce((c,l)=>c+l.holes.length,0),a=t.stacks.filter(c=>c.kind==="bolt").map(c=>`${c.size}: ${pt(de[c.size].torque)} Nm`);i.append(T("div",{class:"pageBar",style:{marginTop:"14px",gap:"20px"}},T("span",{},T("b",{},"Lastre da tagliare: "),String(r.length)),T("span",{},T("b",{},"Fori da fare: "),String(o)),a.length?T("span",{},T("b",{},"Coppie di serraggio: "),[...new Set(a)].join(" \xB7 ")):null))}function DM(i){let t=it.project,e=i.rows.map(r=>`<tr><td>${r.pos}</td><td>${r.qty}</td><td>${Kr(r.desc)}</td><td>${Kr(r.material)}</td><td style="text-align:right">${pt(r.unit,3)}</td><td style="text-align:right">${pt(r.total,3)}</td></tr>`).join(""),n=`<div style="font-family:Inter,Arial;padding:14mm;color:#111"><h2 style="margin:0 0 4mm">Distinta materiali \u2013 ${Kr(t.name)}</h2><table style="width:100%;border-collapse:collapse;font-size:11pt" border="1" cellpadding="5"><tr style="background:#eee"><th>Pos.</th><th>Q.t\xE0</th><th>Descrizione</th><th>Materiale</th><th>kg cad.</th><th>kg tot.</th></tr>${e}<tr><td></td><td>${i.count}</td><td><b>Totale</b></td><td></td><td></td><td style="text-align:right"><b>${pt(i.totalMass,3)}</b></td></tr></table><p style="font-size:9pt;color:#555">Smonta Studio \xB7 ${new Date().toLocaleDateString("it-IT")}</p></div>`,s=zt("#printArea");s.innerHTML=n,s.classList.remove("hidden"),wp(s)}var iu=0;function to(){let i=W.assy,t=zt("#assy");t.innerHTML="";let e=i.steps;if(!e.length){t.append(T("div",{class:"stepCard"},T("h3",{},"Nessun passo"),T("p",{},"Aggiungi pezzi nella scheda Progetta: la sequenza di montaggio si crea da sola."))),He();return}i.i=Math.max(0,Math.min(i.i,e.length-1));let n=i.reverse?e.length-1-i.i:i.i,s=e[n],r=T("div",{class:"stepCard"}),o=T("div",{class:"bar"});e.forEach((l,h)=>{let u=T("i",{class:h<i.i?"done":h===i.i?"cur":""});u.onclick=()=>za(h),o.append(u)}),r.append(T("div",{class:"row"},T("small",{class:"muted",style:{fontWeight:600,letterSpacing:".05em"}},`${i.reverse?"SMONTAGGIO":"MONTAGGIO"} \xB7 PASSO ${i.i+1} DI ${e.length}`),T("span",{class:"grow"}),T("div",{class:"seg",style:{width:"210px"}},T("button",{class:i.reverse?"":"on",onclick:()=>{i.reverse=!1,i.i=0,i.t=0,to(),Ba()}},"Montaggio"),T("button",{class:i.reverse?"on":"",onclick:()=>{i.reverse=!0,i.i=0,i.t=0,to(),Ba()}},"Smontaggio")))),r.append(o);let a=i.reverse?s.title.replace(/^Monta|^Posiziona|^Prepara/,"Togli"):s.title;r.append(T("h3",{},a));let c=s.text;if(i.reverse&&(c=UM(s)),r.append(T("p",{},c)),s.tools&&s.tools.length&&r.append(T("div",{class:"toolsList"},...s.tools.map(l=>T("span",{},l)))),s.warn&&r.append(T("div",{class:"card warn row",style:{marginBottom:"8px"},html:`${Ot("warn")}<span>${Kr(s.warn)}</span>`})),r.append(T("div",{class:"row"},T("button",{class:"btn",disabled:i.i===0,onclick:()=>za(i.i-1),html:`${Ot("prev")}Indietro`}),T("button",{class:"btn",onclick:()=>{i.t=0,Ba()},html:`${Ot("play")}Rivedi`}),T("span",{class:"grow"}),T("button",{class:"btn primary",disabled:i.i>=e.length-1,onclick:()=>za(i.i+1),html:`Avanti${Ot("next")}`}))),t.append(r),s.video&&it.project.video){let l=T("video",{class:"stepVideo",muted:!0,playsinline:!0,controls:!0});qh(it.project.id).then(h=>{if(!h){l.remove();return}l.src=h,l.currentTime=s.video.start||0,l.play().catch(()=>{})}),l.ontimeupdate=()=>{s.video.end&&l.currentTime>=s.video.end&&(l.pause(),l.currentTime=s.video.start||0)},t.append(l)}He()}function UM(i){let t=it.project,e=t.parts.find(a=>a.id===i.parts[0]),n=i.parts.slice(1).map(a=>t.parts.find(c=>c.id===a)).filter(Boolean),s=n.filter(a=>a.type==="bolt"),r=n.filter(a=>a.type==="pin"),o="";return s.length&&(o+=`Svita ${s.length===1?"la vite":`le ${s.length} viti`} ${s[0].params.size} (chiave ${de[s[0].params.size].s} mm) e togli dadi e rondelle. `),r.length&&(o+=`Sfila ${r.length===1?"il perno":`i ${r.length} perni`} con un battitoio. `),e&&(o+=`Solleva e togli ${e.name}.`),o}function za(i){let t=W.assy;t.i=Math.max(0,Math.min(i,t.steps.length-1)),t.t=0,to(),Ba()}function Ba(){cancelAnimationFrame(iu);let i=W.assy,t=performance.now(),e=i.t,n=()=>{i.t=Math.min(1,e+(performance.now()-t)/1100),Ep(),i.t<1&&(iu=requestAnimationFrame(n))};n()}function NM(){cancelAnimationFrame(iu)}function Ep(){let i=W.assy,t=it.project;if(!i.steps.length)return;i.vectors||(i.vectors=bh(t,i.steps));let e=i.steps.length,n=new Map;i.steps.forEach((a,c)=>a.parts.forEach(l=>n.set(l,c)));let s=i.reverse?e-1-i.i:i.i,r=a=>1-Math.pow(1-a,3),o=new Map;for(let a of t.parts){let c=n.has(a.id)?n.get(a.id):0,l=!0,h=0;i.reverse?(c<s?h=0:c===s?h=r(i.t):l=!1,c===s&&i.t>=1&&(l=!1)):c<s?h=0:c===s?h=1-r(i.t):l=!1;let u=i.vectors.get(a.id),d=u?u.clone().multiplyScalar(h*1.2):new S(0,0,h*80);u&&u.length()<1&&h>0&&d.set(0,0,h*80),xt.offsets.set(a.id,d),xt.applyOffset(a.id);let f=xt.objects.get(a.id);f&&(f.obj.visible=l&&!a.hidden),c===s&&o.set(a.id,"selected")}xt.setStates(o)}function OM(i){let t=W.assy,e=it.project;i.append(T("h2",{},"Passi di montaggio")),i.append(T("div",{class:"muted",style:{fontSize:"12px"}},"Creati in automatico dall'ordine dei pezzi. Puoi riscrivere titolo e istruzioni di ogni passo e collegare un video.")),t.steps.forEach((c,l)=>{let h=(t.reverse?t.steps.length-1-t.i:t.i)===l,u=T("div",{class:"treeItem"+(h?" on":""),onclick:()=>za(t.reverse?t.steps.length-1-l:l)},T("b",{style:{width:"20px"}},String(l+1)),T("span",{class:"nm"},c.title));i.append(u)});let n=t.steps[t.reverse?t.steps.length-1-t.i:t.i];if(!n)return;i.append(T("div",{class:"secTitle"},"Modifica questo passo"));let s=T("input",{value:n.title,class:"select"}),r=T("textarea",{class:"select",rows:5},n.text),o=T("input",{value:n.warn||"",class:"select",placeholder:"Avvertenza (facoltativa)"}),a=()=>Qt("modifica passo",c=>{(!c.steps||!c.steps.length||c.steps!==t.steps)&&(c.steps=Ni(t.steps));let l=c.steps.find(h=>h.id===n.id)||c.steps[t.steps.indexOf(n)];l.title=s.value,l.text=r.value,l.warn=o.value,l.auto=!1});if(s.onchange=a,r.onchange=a,o.onchange=a,i.append(s,r,o),i.append(T("div",{class:"secTitle"},"Video (facoltativo)")),!e.video)i.append(T("button",{class:"btn",onclick:FM,html:`${Ot("video")}Collega un video dello smontaggio`}));else{i.append(T("div",{class:"muted",style:{fontSize:"12px"}},`Video: ${e.video.name}`));let c=n.video||{start:0,end:0};i.append(T("div",{class:"fields"},Ie("Inizio",c.start||0,"s",l=>tu(n,{...c,start:l}),{min:0}),Ie("Fine",c.end||0,"s",l=>tu(n,{...c,end:l}),{min:0}))),i.append(T("div",{class:"row"},T("button",{class:"btn small",onclick:()=>tu(n,null)},"Nessun video per questo passo"),T("button",{class:"btn small danger",onclick:()=>{Yh(e.id),Qt("togli video",l=>{l.video=null})}},"Togli video")))}i.append(T("div",{class:"row",style:{marginTop:"8px"}},T("button",{class:"btn small",onclick:()=>Qt("rigenera passi",c=>{c.steps=[]})},"Rigenera i passi")))}function tu(i,t){let e=W.assy;Qt("video del passo",n=>{(!n.steps||!n.steps.length)&&(n.steps=Ni(e.steps));let s=n.steps.find(r=>r.id===i.id);s&&(s.video=t,s.auto=!1)})}async function FM(){let i=await Vh("video/*");if(i)try{await lp(it.project.id,i),Qt("collega video",n=>{n.video={name:i.name,size:i.size},(!n.steps||!n.steps.length)&&(n.steps=Ni(W.assy.steps));let s=0;n.steps.forEach(r=>{r.video={start:0,end:s}})});let t=await qh(it.project.id),e=document.createElement("video");e.preload="metadata",e.src=t,e.onloadedmetadata=()=>{let n=e.duration||0,s=it.project.steps.length||1;Qt("tempi video",r=>{r.steps.forEach((o,a)=>{o.video={start:Math.round(n*a/s*10)/10,end:Math.round(n*(a+1)/s*10)/10}})}),ne("Video collegato: ogni passo ne mostra un pezzo. Aggiusta inizio e fine se serve.","ok",4e3)}}catch(t){ne("Non riesco a salvare il video: "+t.message,"err")}}function xp(i){let t=it.project;if(!t)return;let e=Sn().find(as);Kh(i,[{label:"Progetto (.smonta)",sub:"Da riaprire o dare a un collega",icon:"save",run:()=>wn(`${xn(t.name)}.smonta`,JSON.stringify(t),"application/json").then(Wn)},{label:"Modello 3D STL",sub:"Per stampa 3D o altri CAD",icon:"cube",run:()=>{let n=rp(xt.root);wn(`${xn(t.name)}.stl`,n,"model/stl").then(Wn)}},{label:"Modello 3D GLB",sub:"Per visualizzatori 3D e web",icon:"layers",run:()=>op(xt.root).then(n=>wn(`${xn(t.name)}.glb`,n,"model/gltf-binary")).then(Wn)},e?{label:`DXF di ${e.name}`,sub:"Profilo per taglio laser / plasma",icon:"drawing",run:()=>wn(`${xn(e.name)}.dxf`,La(e),"application/dxf").then(Wn)}:null,{label:"Distinta (Excel CSV)",icon:"list",run:()=>wn(`${xn(t.name)}_distinta.csv`,wh(t),"text/csv").then(Wn)},{label:"Immagine della vista",icon:"eye",run:()=>fetch(xt.screenshot()).then(n=>n.blob()).then(n=>wn(`${xn(t.name)}.png`,n,"image/png")).then(Wn)}])}function Va(){if(it.project){try{(W.tab==="design"||W.tab==="assy")&&(it.project.thumb=xt.screenshot(320,180))}catch{}Oi()}}function zM(){zt("#snapSel").onchange=i=>{Qt("aggancio",t=>{t.settings.snap=+i.target.value}),au()},zt("#gridSel").onchange=i=>{Qt("griglia",t=>{t.settings.grid=+i.target.value}),xt.setGrid(+i.target.value)},zt("#checksBtn").onclick=()=>{zi("design"),ze([]),ar()&&pi("Right")}}function _p(){let i=it.project;if(!i)return;zt("#snapSel").value=String(i.settings.snap??5),zt("#gridSel").value=String(i.settings.grid??20);let t=i.parts.reduce((r,o)=>r+Vn(o),0);zt("#stParts").textContent=`${i.parts.filter(r=>!r.stack).length} pezzi \xB7 ${i.stacks.length} fissaggi`,zt("#stMass").textContent=`Massa: ${pt(t,2)} kg`;let e=W.checks.filter(r=>r.level==="err").length,n=W.checks.filter(r=>r.level==="warn").length,s=zt("#checksBtn");s.className=e?"err":n?"warn":"ok",s.querySelector("use").setAttribute("href",e||n?"#i-warn":"#i-check"),s.querySelector("span").textContent=e?`${e} errori${n?`, ${n} avvisi`:""}`:n?`${n} avvis${n===1?"o":"i"}`:"Controlli: tutto a posto"}function BM(){window.addEventListener("keydown",i=>{if(i.target.closest("input, textarea, select"))return;if(!zt("#modal").classList.contains("hidden")){i.key==="Escape"&&rr(null);return}let t=i.key.toLowerCase();if((i.ctrlKey||i.metaKey)&&t==="z"){i.preventDefault(),i.shiftKey?zt("#btnRedo").click():zt("#btnUndo").click();return}if((i.ctrlKey||i.metaKey)&&t==="y"){i.preventDefault(),zt("#btnRedo").click();return}if((i.ctrlKey||i.metaKey)&&t==="s"){i.preventDefault(),zt("#btnSave").click();return}if((i.ctrlKey||i.metaKey)&&t==="d"){i.preventDefault(),ru(Sn().filter(n=>!n.stack));return}if(t==="delete"||t==="backspace"){let n=Sn();n.length&&ou(n);return}if(t==="escape"){W.mate=null,W.measure=[],ls("select"),ze([]);return}if(t==="f"){xt.fit(it.project);return}let e=parseInt(t,10);e>=1&&e<=Ha.length&&W.tab==="design"&&ls(Ha[e-1][0])})}function or(i){let t=zt("#home");if(!i){t.classList.add("hidden");return}t.innerHTML="";let e=T("div",{class:"homeIn"});e.append(T("h1",{html:`${Ot("cube")}Smonta Studio`})),e.append(T("p",{class:"muted",style:{margin:0,fontSize:"15px"}},"Progetta lastre, fori e bulloneria in modo semplice: tavole quotate, distinta e istruzioni di montaggio si fanno da sole."));let n=T("div",{class:"cards"}),s=(o,a,c,l,h)=>T("button",{class:"bigCard",onclick:h},T("span",{class:"tile",style:{background:a},html:Ot(o)}),T("b",{},c),T("small",{},l));n.append(s("plus","var(--primary)","Nuovo progetto","Parti da zero e costruisci con la libreria di lastre e viti.",async()=>{let o=await jh("Nuovo progetto","Come lo chiami?","Nuovo progetto");o&&(Vf(o),ka())})),n.append(s("cube","var(--ok)","Apri l'esempio","Un supporto motore gi\xE0 pronto: piastre, squadrette, flangia e 8 viti M8.",()=>{qr(Gh()),Oi(),ka()})),n.append(s("folder","var(--accent)","Apri un file","Un progetto .smonta ricevuto da un collega.",kM)),e.append(n);let r=nr();if(r.length){e.append(T("h2",{},"I tuoi progetti"));let o=T("div",{class:"projList"});for(let a of r){let c="";try{let h=localStorage.getItem("smonta.project."+a.id);c=h&&JSON.parse(h).thumb||""}catch{}let l=T("div",{class:"projCard"},T("div",{class:"thumb",style:{backgroundImage:c?`url(${c})`:"none"},onclick:()=>{kf(a.id)?ka():ne("Progetto non trovato","err")}}),T("div",{class:"pi"},T("div",{},T("b",{},a.name),T("small",{},`${a.parts} pezzi \xB7 ${a.fasteners} viti/dadi \xB7 ${new Date(a.modified).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}`)),T("button",{class:"btn ghost icon",title:"Elimina progetto",onclick:async()=>{await Oa("Elimina progetto",`Eliminare "${a.name}"? Non si pu\xF2 annullare.`,"Elimina",!0)&&(Hf(a.id),Yh(a.id),or(!0))},html:Ot("trash")})));o.append(l)}e.append(o)}e.append(T("p",{class:"muted",style:{marginTop:"30px",fontSize:"12px"}},"I progetti restano salvati su questo dispositivo. Per spostarli su un altro usa Esporta \u2192 Progetto (.smonta).")),t.append(e),t.classList.remove("hidden")}function ka(){or(!1),zi("design"),ls("select"),xt.setGrid(it.project.settings.grid||20),su("reload"),xt.fit(it.project,"iso",!1)}async function kM(){let i=await Vh(".smonta,.json,application/json");if(i)try{let t=JSON.parse(await i.text());if(!t.parts||!t.settings)throw new Error("non \xE8 un progetto Smonta Studio");nr().some(e=>e.id===t.id)&&(t.id="prj"+Date.now().toString(36),t.name+=" (importato)"),qr(t),Oi(),ka(),ne(`Aperto "${t.name}"`,"ok")}catch(t){ne("File non valido: "+t.message,"err",4e3)}}function HM(){let i=Gh();Qt("esempio",t=>{t.parts=i.parts,t.stacks=i.stacks,t.counter=i.counter,t.steps=[]}),xt.fit(it.project,"iso")}nM();
