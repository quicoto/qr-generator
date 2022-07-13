(()=>{var _e=Object.create;var Lt=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var ze=Object.getPrototypeOf,He=Object.prototype.hasOwnProperty;var d=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Ve=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ke(t))!He.call(n,o)&&o!==e&&Lt(n,o,{get:()=>t[o],enumerable:!(r=Fe(t,o))||r.enumerable});return n};var Ke=(n,t,e)=>(e=n!=null?_e(ze(n)):{},Ve(t||!n||!n.__esModule?Lt(e,"default",{value:n,enumerable:!0}):e,n));var qt=d((zn,xt)=>{xt.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var I=d(S=>{var st,Je=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];S.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};S.getSymbolTotalCodewords=function(t){return Je[t]};S.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};S.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');st=t};S.isKanjiModeEnabled=function(){return typeof st<"u"};S.toSJIS=function(t){return st(t)}});var $=d(m=>{m.L={bit:1};m.M={bit:0};m.Q={bit:3};m.H={bit:2};function Ye(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return m.L;case"m":case"medium":return m.M;case"q":case"quartile":return m.Q;case"h":case"high":return m.H;default:throw new Error("Unknown EC Level: "+n)}}m.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};m.from=function(t,e){if(m.isValid(t))return t;try{return Ye(t)}catch{return e}}});var _t=d((Kn,Ut)=>{function Dt(){this.buffer=[],this.length=0}Dt.prototype={get:function(n){let t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};Ut.exports=Dt});var kt=d((Jn,Ft)=>{function k(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}k.prototype.set=function(n,t,e,r){let o=n*this.size+t;this.data[o]=e,r&&(this.reservedBit[o]=!0)};k.prototype.get=function(n,t){return this.data[n*this.size+t]};k.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};k.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};Ft.exports=k});var zt=d(G=>{var Oe=I().getSymbolSize;G.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,r=Oe(t),o=r===145?26:Math.ceil((r-13)/(2*e-2))*2,i=[r-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-o;return i.push(6),i.reverse()};G.getPositions=function(t){let e=[],r=G.getRowColCoords(t),o=r.length;for(let i=0;i<o;i++)for(let s=0;s<o;s++)i===0&&s===0||i===0&&s===o-1||i===o-1&&s===0||e.push([r[i],r[s]]);return e}});var Kt=d(Vt=>{var $e=I().getSymbolSize,Ht=7;Vt.getPositions=function(t){let e=$e(t);return[[0,0],[e-Ht,0],[0,e-Ht]]}});var Jt=d(g=>{g.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var P={N1:3,N2:3,N3:40,N4:10};g.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};g.from=function(t){return g.isValid(t)?parseInt(t,10):void 0};g.getPenaltyN1=function(t){let e=t.size,r=0,o=0,i=0,s=null,u=null;for(let c=0;c<e;c++){o=i=0,s=u=null;for(let l=0;l<e;l++){let a=t.get(c,l);a===s?o++:(o>=5&&(r+=P.N1+(o-5)),s=a,o=1),a=t.get(l,c),a===u?i++:(i>=5&&(r+=P.N1+(i-5)),u=a,i=1)}o>=5&&(r+=P.N1+(o-5)),i>=5&&(r+=P.N1+(i-5))}return r};g.getPenaltyN2=function(t){let e=t.size,r=0;for(let o=0;o<e-1;o++)for(let i=0;i<e-1;i++){let s=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);(s===4||s===0)&&r++}return r*P.N2};g.getPenaltyN3=function(t){let e=t.size,r=0,o=0,i=0;for(let s=0;s<e;s++){o=i=0;for(let u=0;u<e;u++)o=o<<1&2047|t.get(s,u),u>=10&&(o===1488||o===93)&&r++,i=i<<1&2047|t.get(u,s),u>=10&&(i===1488||i===93)&&r++}return r*P.N3};g.getPenaltyN4=function(t){let e=0,r=t.data.length;for(let i=0;i<r;i++)e+=t.data[i];return Math.abs(Math.ceil(e*100/r/5)-10)*P.N4};function Ge(n,t,e){switch(n){case g.Patterns.PATTERN000:return(t+e)%2===0;case g.Patterns.PATTERN001:return t%2===0;case g.Patterns.PATTERN010:return e%3===0;case g.Patterns.PATTERN011:return(t+e)%3===0;case g.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case g.Patterns.PATTERN101:return t*e%2+t*e%3===0;case g.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case g.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}g.applyMask=function(t,e){let r=e.size;for(let o=0;o<r;o++)for(let i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,Ge(t,i,o))};g.getBestMask=function(t,e){let r=Object.keys(g.Patterns).length,o=0,i=1/0;for(let s=0;s<r;s++){e(s),g.applyMask(s,t);let u=g.getPenaltyN1(t)+g.getPenaltyN2(t)+g.getPenaltyN3(t)+g.getPenaltyN4(t);g.applyMask(s,t),u<i&&(i=u,o=s)}return o}});var ct=d(ut=>{var N=$(),j=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ut.getBlocksCount=function(t,e){switch(e){case N.L:return j[(t-1)*4+0];case N.M:return j[(t-1)*4+1];case N.Q:return j[(t-1)*4+2];case N.H:return j[(t-1)*4+3];default:return}};ut.getTotalCodewordsCount=function(t,e){switch(e){case N.L:return Q[(t-1)*4+0];case N.M:return Q[(t-1)*4+1];case N.Q:return Q[(t-1)*4+2];case N.H:return Q[(t-1)*4+3];default:return}}});var Yt=d(W=>{var z=new Uint8Array(512),v=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)z[e]=t,v[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)z[e]=z[e-255]})();W.log=function(t){if(t<1)throw new Error("log("+t+")");return v[t]};W.exp=function(t){return z[t]};W.mul=function(t,e){return t===0||e===0?0:z[v[t]+v[e]]}});var Ot=d(H=>{var lt=Yt();H.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=lt.mul(t[o],e[i]);return r};H.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let o=r[0];for(let s=0;s<e.length;s++)r[s]^=lt.mul(e[s],o);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r};H.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let r=0;r<t;r++)e=H.mul(e,new Uint8Array([1,lt.exp(r)]));return e}});var jt=d((vn,Gt)=>{var $t=Ot();function at(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}at.prototype.initialize=function(t){this.degree=t,this.genPoly=$t.generateECPolynomial(this.degree)};at.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=$t.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let i=new Uint8Array(this.degree);return i.set(r,o),i}return r};Gt.exports=at});var ft=d(Qt=>{Qt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var dt=d(B=>{var vt="[0-9]+",je="[A-Z $%*+\\-./:]+",V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");var Qe="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;B.KANJI=new RegExp(V,"g");B.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");B.BYTE=new RegExp(Qe,"g");B.NUMERIC=new RegExp(vt,"g");B.ALPHANUMERIC=new RegExp(je,"g");var ve=new RegExp("^"+V+"$"),We=new RegExp("^"+vt+"$"),Ze=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");B.testKanji=function(t){return ve.test(t)};B.testNumeric=function(t){return We.test(t)};B.testAlphanumeric=function(t){return Ze.test(t)}});var b=d(p=>{var Xe=ft(),gt=dt();p.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]};p.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]};p.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]};p.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]};p.MIXED={bit:-1};p.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!Xe.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};p.getBestModeForData=function(t){return gt.testNumeric(t)?p.NUMERIC:gt.testAlphanumeric(t)?p.ALPHANUMERIC:gt.testKanji(t)?p.KANJI:p.BYTE};p.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};p.isValid=function(t){return t&&t.bit&&t.ccBits};function tn(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return p.NUMERIC;case"alphanumeric":return p.ALPHANUMERIC;case"kanji":return p.KANJI;case"byte":return p.BYTE;default:throw new Error("Unknown mode: "+n)}}p.from=function(t,e){if(p.isValid(t))return t;try{return tn(t)}catch{return e}}});var ee=d(R=>{var Z=I(),en=ct(),Wt=$(),M=b(),ht=ft(),Xt=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,Zt=Z.getBCHDigit(Xt);function nn(n,t,e){for(let r=1;r<=40;r++)if(t<=R.getCapacity(r,e,n))return r}function te(n,t){return M.getCharCountIndicator(n,t)+4}function rn(n,t){let e=0;return n.forEach(function(r){e+=te(r.mode,t)+r.getBitsLength()}),e}function on(n,t){for(let e=1;e<=40;e++)if(rn(n,e)<=R.getCapacity(e,t,M.MIXED))return e}R.from=function(t,e){return ht.isValid(t)?parseInt(t,10):e};R.getCapacity=function(t,e,r){if(!ht.isValid(t))throw new Error("Invalid QR Code version");typeof r>"u"&&(r=M.BYTE);let o=Z.getSymbolTotalCodewords(t),i=en.getTotalCodewordsCount(t,e),s=(o-i)*8;if(r===M.MIXED)return s;let u=s-te(r,t);switch(r){case M.NUMERIC:return Math.floor(u/10*3);case M.ALPHANUMERIC:return Math.floor(u/11*2);case M.KANJI:return Math.floor(u/13);case M.BYTE:default:return Math.floor(u/8)}};R.getBestVersionForData=function(t,e){let r,o=Wt.from(e,Wt.M);if(Array.isArray(t)){if(t.length>1)return on(t,o);if(t.length===0)return 1;r=t[0]}else r=t;return nn(r.mode,r.getLength(),o)};R.getEncodedBits=function(t){if(!ht.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;Z.getBCHDigit(e)-Zt>=0;)e^=Xt<<Z.getBCHDigit(e)-Zt;return t<<12|e}});var ie=d(oe=>{var pt=I(),re=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,sn=1<<14|1<<12|1<<10|1<<4|1<<1,ne=pt.getBCHDigit(re);oe.getEncodedBits=function(t,e){let r=t.bit<<3|e,o=r<<10;for(;pt.getBCHDigit(o)-ne>=0;)o^=re<<pt.getBCHDigit(o)-ne;return(r<<10|o)^sn}});var ue=d((nr,se)=>{var un=b();function q(n){this.mode=un.NUMERIC,this.data=n.toString()}q.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(t){let e,r,o;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),o=parseInt(r,10),t.put(o,10);let i=this.data.length-e;i>0&&(r=this.data.substr(e),o=parseInt(r,10),t.put(o,i*3+1))};se.exports=q});var le=d((rr,ce)=>{var cn=b(),wt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(n){this.mode=cn.ALPHANUMERIC,this.data=n}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=wt.indexOf(this.data[e])*45;r+=wt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(wt.indexOf(this.data[e]),6)};ce.exports=D});var fe=d((or,ae)=>{"use strict";ae.exports=function(t){for(var e=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){e.push(i);continue}if(i<2048){e.push(i>>6|192),e.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){e.push(i>>12|224),e.push(i>>6&63|128),e.push(i&63|128);continue}if(i>=65536&&i<=1114111){e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(i&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}});var ge=d((ir,de)=>{var ln=fe(),an=b();function U(n){this.mode=an.BYTE,this.data=new Uint8Array(ln(n))}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};de.exports=U});var pe=d((sr,he)=>{var fn=b(),dn=I();function _(n){this.mode=fn.KANJI,this.data=n}_.getBitsLength=function(t){return t*13};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=dn.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};he.exports=_});var we=d((ur,mt)=>{"use strict";var K={single_source_shortest_paths:function(n,t,e){var r={},o={};o[t]=0;var i=K.PriorityQueue.make();i.push(t,0);for(var s,u,c,l,a,w,h,y,A;!i.empty();){s=i.pop(),u=s.value,l=s.cost,a=n[u]||{};for(c in a)a.hasOwnProperty(c)&&(w=a[c],h=l+w,y=o[c],A=typeof o[c]>"u",(A||y>h)&&(o[c]=h,i.push(c,h),r[c]=u))}if(typeof e<"u"&&typeof o[e]>"u"){var T=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(T)}return r},extract_shortest_path_from_predecessor_list:function(n,t){for(var e=[],r=t,o;r;)e.push(r),o=n[r],r=n[r];return e.reverse(),e},find_path:function(n,t,e){var r=K.single_source_shortest_paths(n,t,e);return K.extract_shortest_path_from_predecessor_list(r,e)},PriorityQueue:{make:function(n){var t=K.PriorityQueue,e={},r;n=n||{};for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e.queue=[],e.sorter=n.sorter||t.default_sorter,e},default_sorter:function(n,t){return n.cost-t.cost},push:function(n,t){var e={value:n,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof mt<"u"&&(mt.exports=K)});var Ie=d(F=>{var f=b(),Ce=ue(),Ee=le(),Be=ge(),Ae=pe(),J=dt(),X=I(),gn=we();function me(n){return unescape(encodeURIComponent(n)).length}function Y(n,t,e){let r=[],o;for(;(o=n.exec(e))!==null;)r.push({data:o[0],index:o.index,mode:t,length:o[0].length});return r}function Te(n){let t=Y(J.NUMERIC,f.NUMERIC,n),e=Y(J.ALPHANUMERIC,f.ALPHANUMERIC,n),r,o;return X.isKanjiModeEnabled()?(r=Y(J.BYTE,f.BYTE,n),o=Y(J.KANJI,f.KANJI,n)):(r=Y(J.BYTE_KANJI,f.BYTE,n),o=[]),t.concat(e,r,o).sort(function(s,u){return s.index-u.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function yt(n,t){switch(t){case f.NUMERIC:return Ce.getBitsLength(n);case f.ALPHANUMERIC:return Ee.getBitsLength(n);case f.KANJI:return Ae.getBitsLength(n);case f.BYTE:return Be.getBitsLength(n)}}function hn(n){return n.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function pn(n){let t=[];for(let e=0;e<n.length;e++){let r=n[e];switch(r.mode){case f.NUMERIC:t.push([r,{data:r.data,mode:f.ALPHANUMERIC,length:r.length},{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.ALPHANUMERIC:t.push([r,{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.KANJI:t.push([r,{data:r.data,mode:f.BYTE,length:me(r.data)}]);break;case f.BYTE:t.push([{data:r.data,mode:f.BYTE,length:me(r.data)}])}}return t}function wn(n,t){let e={},r={start:{}},o=["start"];for(let i=0;i<n.length;i++){let s=n[i],u=[];for(let c=0;c<s.length;c++){let l=s[c],a=""+i+c;u.push(a),e[a]={node:l,lastCount:0},r[a]={};for(let w=0;w<o.length;w++){let h=o[w];e[h]&&e[h].node.mode===l.mode?(r[h][a]=yt(e[h].lastCount+l.length,l.mode)-yt(e[h].lastCount,l.mode),e[h].lastCount+=l.length):(e[h]&&(e[h].lastCount=l.length),r[h][a]=yt(l.length,l.mode)+4+f.getCharCountIndicator(l.mode,t))}}o=u}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:e}}function ye(n,t){let e,r=f.getBestModeForData(n);if(e=f.from(t,r),e!==f.BYTE&&e.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+f.toString(e)+`.
 Suggested mode is: `+f.toString(r));switch(e===f.KANJI&&!X.isKanjiModeEnabled()&&(e=f.BYTE),e){case f.NUMERIC:return new Ce(n);case f.ALPHANUMERIC:return new Ee(n);case f.KANJI:return new Ae(n);case f.BYTE:return new Be(n)}}F.fromArray=function(t){return t.reduce(function(e,r){return typeof r=="string"?e.push(ye(r,null)):r.data&&e.push(ye(r.data,r.mode)),e},[])};F.fromString=function(t,e){let r=Te(t,X.isKanjiModeEnabled()),o=pn(r),i=wn(o,e),s=gn.find_path(i.map,"start","end"),u=[];for(let c=1;c<s.length-1;c++)u.push(i.table[s[c]].node);return F.fromArray(hn(u))};F.rawSplit=function(t){return F.fromArray(Te(t,X.isKanjiModeEnabled()))}});var be=d(Ne=>{var et=I(),Ct=$(),mn=_t(),yn=kt(),Cn=zt(),En=Kt(),At=Jt(),Tt=ct(),Bn=jt(),tt=ee(),An=ie(),Tn=b(),Et=Ie();function In(n,t){let e=n.size,r=En.getPositions(t);for(let o=0;o<r.length;o++){let i=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(let c=-1;c<=7;c++)s+c<=-1||e<=s+c||(u>=0&&u<=6&&(c===0||c===6)||c>=0&&c<=6&&(u===0||u===6)||u>=2&&u<=4&&c>=2&&c<=4?n.set(i+u,s+c,!0,!0):n.set(i+u,s+c,!1,!0))}}function Nn(n){let t=n.size;for(let e=8;e<t-8;e++){let r=e%2===0;n.set(e,6,r,!0),n.set(6,e,r,!0)}}function bn(n,t){let e=Cn.getPositions(t);for(let r=0;r<e.length;r++){let o=e[r][0],i=e[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?n.set(o+s,i+u,!0,!0):n.set(o+s,i+u,!1,!0)}}function Mn(n,t){let e=n.size,r=tt.getEncodedBits(t),o,i,s;for(let u=0;u<18;u++)o=Math.floor(u/3),i=u%3+e-8-3,s=(r>>u&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function Bt(n,t,e){let r=n.size,o=An.getEncodedBits(t,e),i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Sn(n,t){let e=n.size,r=-1,o=e-1,i=7,s=0;for(let u=e-1;u>0;u-=2)for(u===6&&u--;;){for(let c=0;c<2;c++)if(!n.isReserved(o,u-c)){let l=!1;s<t.length&&(l=(t[s]>>>i&1)===1),n.set(o,u-c,l),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||e<=o){o-=r,r=-r;break}}}function Pn(n,t,e){let r=new mn;e.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Tn.getCharCountIndicator(c.mode,n)),c.write(r)});let o=et.getSymbolTotalCodewords(n),i=Tt.getTotalCodewordsCount(n,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);let u=(s-r.getLengthInBits())/8;for(let c=0;c<u;c++)r.put(c%2?17:236,8);return Rn(r,n,t)}function Rn(n,t,e){let r=et.getSymbolTotalCodewords(t),o=Tt.getTotalCodewordsCount(t,e),i=r-o,s=Tt.getBlocksCount(t,e),u=r%s,c=s-u,l=Math.floor(r/s),a=Math.floor(i/s),w=a+1,h=l-a,y=new Bn(h),A=0,T=new Array(s),Pt=new Array(s),rt=0,Ue=new Uint8Array(n.buffer);for(let x=0;x<s;x++){let it=x<c?a:w;T[x]=Ue.slice(A,A+it),Pt[x]=y.encode(T[x]),A+=it,rt=Math.max(rt,it)}let ot=new Uint8Array(r),Rt=0,C,E;for(C=0;C<rt;C++)for(E=0;E<s;E++)C<T[E].length&&(ot[Rt++]=T[E][C]);for(C=0;C<h;C++)for(E=0;E<s;E++)ot[Rt++]=Pt[E][C];return ot}function Ln(n,t,e,r){let o;if(Array.isArray(n))o=Et.fromArray(n);else if(typeof n=="string"){let l=t;if(!l){let a=Et.rawSplit(n);l=tt.getBestVersionForData(a,e)}o=Et.fromString(n,l||40)}else throw new Error("Invalid data");let i=tt.getBestVersionForData(o,e);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);let s=Pn(t,e,o),u=et.getSymbolSize(t),c=new yn(u);return In(c,t),Nn(c),bn(c,t),Bt(c,e,0),t>=7&&Mn(c,t),Sn(c,s),isNaN(r)&&(r=At.getBestMask(c,Bt.bind(null,c,e))),At.applyMask(r,c),Bt(c,e,r),{modules:c,version:t,errorCorrectionLevel:e,maskPattern:r,segments:o}}Ne.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Ct.M,o,i;return typeof e<"u"&&(r=Ct.from(e.errorCorrectionLevel,Ct.M),o=tt.from(e.version),i=At.from(e.maskPattern),e.toSJISFunc&&et.setToSJISFunction(e.toSJISFunc)),Ln(t,o,r,i)}});var It=d(L=>{function Me(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let t=n.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+n);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(r){return[r,r]}))),t.length===6&&t.push("F","F");let e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+t.slice(0,6).join("")}}L.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=typeof t.margin>"u"||t.margin===null||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:Me(t.color.dark||"#000000ff"),light:Me(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}};L.getScale=function(t,e){return e.width&&e.width>=t+e.margin*2?e.width/(t+e.margin*2):e.scale};L.getImageWidth=function(t,e){let r=L.getScale(t,e);return Math.floor((t+e.margin*2)*r)};L.qrToImageData=function(t,e,r){let o=e.modules.size,i=e.modules.data,s=L.getScale(o,r),u=Math.floor((o+r.margin*2)*s),c=r.margin*s,l=[r.color.light,r.color.dark];for(let a=0;a<u;a++)for(let w=0;w<u;w++){let h=(a*u+w)*4,y=r.color.light;if(a>=c&&w>=c&&a<u-c&&w<u-c){let A=Math.floor((a-c)/s),T=Math.floor((w-c)/s);y=l[i[A*o+T]?1:0]}t[h++]=y.r,t[h++]=y.g,t[h++]=y.b,t[h]=y.a}}});var Se=d(nt=>{var Nt=It();function xn(n,t,e){n.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=e,t.width=e,t.style.height=e+"px",t.style.width=e+"px"}function qn(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}nt.render=function(t,e,r){let o=r,i=e;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),e||(i=qn()),o=Nt.getOptions(o);let s=Nt.getImageWidth(t.modules.size,o),u=i.getContext("2d"),c=u.createImageData(s,s);return Nt.qrToImageData(c.data,t,o),xn(u,i,s),u.putImageData(c,0,0),i};nt.renderToDataURL=function(t,e,r){let o=r;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),o||(o={});let i=nt.render(t,e,o),s=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(s,u.quality)}});var Le=d(Re=>{var Dn=It();function Pe(n,t){let e=n.a/255,r=t+'="'+n.hex+'"';return e<1?r+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function bt(n,t,e){let r=n+t;return typeof e<"u"&&(r+=" "+e),r}function Un(n,t,e){let r="",o=0,i=!1,s=0;for(let u=0;u<n.length;u++){let c=Math.floor(u%t),l=Math.floor(u/t);!c&&!i&&(i=!0),n[u]?(s++,u>0&&c>0&&n[u-1]||(r+=i?bt("M",c+e,.5+l+e):bt("m",o,0),o=0,i=!1),c+1<t&&n[u+1]||(r+=bt("h",s),s=0)):o++}return r}Re.render=function(t,e,r){let o=Dn.getOptions(e),i=t.modules.size,s=t.modules.data,u=i+o.margin*2,c=o.color.light.a?"<path "+Pe(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+Pe(o.color.dark,"stroke")+' d="'+Un(s,i,o.margin)+'"/>',a='viewBox="0 0 '+u+" "+u+'"',w=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",h='<svg xmlns="http://www.w3.org/2000/svg" '+w+a+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,h),h}});var qe=d(O=>{var _n=qt(),Mt=be(),xe=Se(),Fn=Le();function St(n,t,e,r,o){let i=[].slice.call(arguments,1),s=i.length,u=typeof i[s-1]=="function";if(!u&&!_n())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=r=void 0):s===2&&!t.getContext&&(r=e,e=t,t=void 0),new Promise(function(c,l){try{let a=Mt.create(e,r);c(n(a,t,r))}catch(a){l(a)}})}try{let c=Mt.create(e,r);o(null,n(c,t,r))}catch(c){o(c)}}O.create=Mt.create;O.toCanvas=St.bind(null,xe.render);O.toDataURL=St.bind(null,xe.renderToDataURL);O.toString=St.bind(null,function(n,t,e){return Fn.render(n,e)})});var De=Ke(qe(),1);$form=document.querySelector("form");$qrWrapper=document.querySelector(".qr-wrapper");$form.addEventListener("submit",n=>{n.preventDefault();let t=document.querySelector('button[type="submit"]'),e=document.querySelector(".spinner-wrapper");$qrWrapper.innerHTML="",t.textContent="Generando...",t.setAttribute("disabled",!0),t.setAttribute("hidden",!0),e.removeAttribute("hidden");let o=document.querySelector("input").value;setTimeout(()=>{De.default.toDataURL(o,{width:1200}).then(i=>{$qrWrapper.innerHTML=`<img src="${i}">`,t.textContent="\xA1Listo! \u{1F389}",t.removeAttribute("disabled"),t.removeAttribute("hidden"),e.setAttribute("hidden",!0),setTimeout(()=>{t.textContent="Generar imagen"},2e3)}).catch(i=>{console.error(i)})},1e3)});})();
