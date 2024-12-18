(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=i(a);fetch(a.href,u)}})();function Xr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w,Ee;function Hr(){if(Ee)return w;Ee=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return w=e,w}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $,Ie;function Kr(){if(Ie)return $;Ie=1;var e=Hr();function t(){try{return e({},"x",{}),!0}catch{return!1}}return $=t,$}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q,Pe;function Ur(){if(Pe)return q;Pe=1;var e=Object.defineProperty;return q=e,q}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S,Me;function Cr(){if(Me)return S;Me=1;function e(t){return typeof t=="number"}return S=e,S}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _,Oe;function Dr(){if(Oe)return _;Oe=1;function e(n){return n[0]==="-"}function t(n){var a="",u;for(u=0;u<n;u++)a+="0";return a}function i(n,a,u){var s=!1,o=a-n.length;return o<0||(e(n)&&(s=!0,n=n.substr(1)),n=u?n+t(o):t(o)+n,s&&(n="-"+n)),n}return _=i,_}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R,Te;function Qr(){if(Te)return R;Te=1;var e=Cr(),t=Dr(),i=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(u){var s,o,d;switch(u.specifier){case"b":s=2;break;case"o":s=8;break;case"x":case"X":s=16;break;case"d":case"i":case"u":default:s=10;break}if(o=u.arg,d=parseInt(o,10),!isFinite(d)){if(!e(o))throw new Error("invalid integer. Value: "+o);d=0}return d<0&&(u.specifier==="u"||s!==10)&&(d=4294967295+d+1),d<0?(o=(-d).toString(s),u.precision&&(o=t(o,u.precision,u.padRight)),o="-"+o):(o=d.toString(s),!d&&!u.precision?o="":u.precision&&(o=t(o,u.precision,u.padRight)),u.sign&&(o=u.sign+o)),s===16&&(u.alternate&&(o="0x"+o),o=u.specifier===n.call(u.specifier)?n.call(o):i.call(o)),s===8&&u.alternate&&o.charAt(0)!=="0"&&(o="0"+o),o}return R=a,R}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E,Le;function kr(){if(Le)return E;Le=1;function e(t){return typeof t=="string"}return E=e,E}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I,Ce;function et(){if(Ce)return I;Ce=1;var e=Cr(),t=Math.abs,i=String.prototype.toLowerCase,n=String.prototype.toUpperCase,a=String.prototype.replace,u=/e\+(\d)$/,s=/e-(\d)$/,o=/^(\d+)$/,d=/^(\d+)e/,m=/\.0$/,l=/\.0*e/,h=/(\..*[^0])0*e/;function c(r){var f,v,p=parseFloat(r.arg);if(!isFinite(p)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+v);p=r.arg}switch(r.specifier){case"e":case"E":v=p.toExponential(r.precision);break;case"f":case"F":v=p.toFixed(r.precision);break;case"g":case"G":t(p)<1e-4?(f=r.precision,f>0&&(f-=1),v=p.toExponential(f)):v=p.toPrecision(r.precision),r.alternate||(v=a.call(v,h,"$1e"),v=a.call(v,l,"e"),v=a.call(v,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return v=a.call(v,u,"e+0$1"),v=a.call(v,s,"e-0$1"),r.alternate&&(v=a.call(v,o,"$1."),v=a.call(v,d,"$1.e")),p>=0&&r.sign&&(v=r.sign+v),v=r.specifier===n.call(r.specifier)?n.call(v):i.call(v),v}return I=c,I}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P,De;function rt(){if(De)return P;De=1;function e(i){var n="",a;for(a=0;a<i;a++)n+=" ";return n}function t(i,n,a){var u=n-i.length;return u<0||(i=a?i+e(u):e(u)+i),i}return P=t,P}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M,Ae;function tt(){if(Ae)return M;Ae=1;var e=Qr(),t=kr(),i=et(),n=rt(),a=Dr(),u=String.fromCharCode,s=Array.isArray;function o(l){return l!==l}function d(l){var h={};return h.specifier=l.specifier,h.precision=l.precision===void 0?1:l.precision,h.width=l.width,h.flags=l.flags||"",h.mapping=l.mapping,h}function m(l){var h,c,r,f,v,p,g,y,b;if(!s(l))throw new TypeError("invalid argument. First argument must be an array. Value: `"+l+"`.");for(p="",g=1,y=0;y<l.length;y++)if(r=l[y],t(r))p+=r;else{if(h=r.precision!==void 0,r=d(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+r+"`.");for(r.mapping&&(g=r.mapping),c=r.flags,b=0;b<c.length;b++)switch(f=c.charAt(b),f){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=c.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+f)}if(r.width==="*"){if(r.width=parseInt(arguments[g],10),g+=1,o(r.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(h&&r.precision==="*"){if(r.precision=parseInt(arguments[g],10),g+=1,o(r.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,h=!1)}switch(r.arg=arguments[g],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":h&&(r.padZeros=!1),r.arg=e(r);break;case"s":r.maxWidth=h?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!o(r.arg)){if(v=parseInt(r.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=o(v)?String(r.arg):u(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":h||(r.precision=6),r.arg=i(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=a(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=n(r.arg,r.width,r.padRight)),p+=r.arg||"",g+=1}return p}return M=m,M}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O,Be;function nt(){if(Be)return O;Be=1;var e=tt();return O=e,O}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T,xe;function it(){if(xe)return T;xe=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function t(n){var a={mapping:n[1]?parseInt(n[1],10):void 0,flags:n[2],width:n[3],precision:n[5],specifier:n[6]};return n[4]==="."&&n[5]===void 0&&(a.precision="1"),a}function i(n){var a,u,s,o;for(u=[],o=0,s=e.exec(n);s;)a=n.slice(o,e.lastIndex-s[0].length),a.length&&u.push(a),u.push(t(s)),o=e.lastIndex,s=e.exec(n);return a=n.slice(o),a.length&&u.push(a),u}return T=i,T}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L,Ne;function at(){if(Ne)return L;Ne=1;var e=it();return L=e,L}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C,Fe;function ut(){if(Fe)return C;Fe=1;function e(t){return typeof t=="string"}return C=e,C}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D,Ge;function ot(){if(Ge)return D;Ge=1;var e=nt(),t=at(),i=ut();function n(a){var u,s;if(!i(a))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",a));for(u=[t(a)],s=1;s<arguments.length;s++)u.push(arguments[s]);return e.apply(null,u)}return D=n,D}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A,Ve;function Ar(){if(Ve)return A;Ve=1;var e=ot();return A=e,A}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B,Ye;function st(){if(Ye)return B;Ye=1;var e=Ar(),t=Object.prototype,i=t.toString,n=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,s=t.__lookupSetter__;function o(d,m,l){var h,c,r,f;if(typeof d!="object"||d===null||i.call(d)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",d));if(typeof l!="object"||l===null||i.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(c="value"in l,c&&(u.call(d,m)||s.call(d,m)?(h=d.__proto__,d.__proto__=t,delete d[m],d[m]=l.value,d.__proto__=h):d[m]=l.value),r="get"in l,f="set"in l,c&&(r||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return r&&n&&n.call(d,m,l.get),f&&a&&a.call(d,m,l.set),d}return B=o,B}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x,ze;function lt(){if(ze)return x;ze=1;var e=Kr(),t=Ur(),i=st(),n;return e()?n=t:n=i,x=n,x}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N,je;function vt(){if(je)return N;je=1;var e=lt();function t(i,n,a){e(i,n,{configurable:!1,enumerable:!1,writable:!1,value:a})}return N=t,N}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F,We;function Br(){if(We)return F;We=1;var e=vt();return F=e,F}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G,Ze;function xr(){if(Ze)return G;Ze=1;function e(t){return typeof t=="string"}return G=e,G}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V,Je;function ct(){if(Je)return V;Je=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return V=e,V}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y,Xe;function ft(){if(Xe)return Y;Xe=1;var e=ct();return Y=e,Y}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z,He;function dt(){if(He)return z;He=1;var e=ft(),t=e();function i(){return t&&typeof Symbol.toStringTag=="symbol"}return z=i,z}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j,Ke;function Re(){if(Ke)return j;Ke=1;var e=dt();return j=e,j}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W,Ue;function Nr(){if(Ue)return W;Ue=1;var e=Object.prototype.toString;return W=e,W}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z,Qe;function ht(){if(Qe)return Z;Qe=1;var e=Nr();function t(i){return e.call(i)}return Z=t,Z}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J,ke;function pt(){if(ke)return J;ke=1;var e=Object.prototype.hasOwnProperty;function t(i,n){return i==null?!1:e.call(i,n)}return J=t,J}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X,er;function Fr(){if(er)return X;er=1;var e=pt();return X=e,X}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H,rr;function gt(){if(rr)return H;rr=1;var e=typeof Symbol=="function"?Symbol:void 0;return H=e,H}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K,tr;function mt(){if(tr)return K;tr=1;var e=gt();return K=e,K}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U,nr;function yt(){if(nr)return U;nr=1;var e=mt(),t=typeof e=="function"?e.toStringTag:"";return U=t,U}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q,ir;function bt(){if(ir)return Q;ir=1;var e=Fr(),t=yt(),i=Nr();function n(a){var u,s,o;if(a==null)return i.call(a);s=a[t],u=e(a,t);try{a[t]=void 0}catch{return i.call(a)}return o=i.call(a),u?a[t]=s:delete a[t],o}return Q=n,Q}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k,ar;function Gr(){if(ar)return k;ar=1;var e=Re(),t=ht(),i=bt(),n;return e()?n=i:n=t,k=n,k}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,ur;function wt(){if(ur)return ee;ur=1;var e=String.prototype.valueOf;return ee=e,ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var re,or;function $t(){if(or)return re;or=1;var e=wt();function t(i){try{return e.call(i),!0}catch{return!1}}return re=t,re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var te,sr;function Vr(){if(sr)return te;sr=1;var e=Re(),t=Gr(),i=$t(),n=e();function a(u){return typeof u=="object"?u instanceof String?!0:n?i(u):t(u)==="[object String]":!1}return te=a,te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ne,lr;function qt(){if(lr)return ne;lr=1;var e=xr(),t=Vr();function i(n){return e(n)||t(n)}return ne=i,ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ie,vr;function Yr(){if(vr)return ie;vr=1;var e=Br(),t=qt(),i=xr(),n=Vr();return e(t,"isPrimitive",i),e(t,"isObject",n),ie=t,ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,cr;function zr(){if(cr)return ae;cr=1;function e(t){return typeof t=="boolean"}return ae=e,ae}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ue,fr;function St(){if(fr)return ue;fr=1;var e=Boolean;return ue=e,ue}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oe,dr;function _t(){if(dr)return oe;dr=1;var e=St();return oe=e,oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var se,hr;function Rt(){if(hr)return se;hr=1;var e=Boolean.prototype.toString;return se=e,se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var le,pr;function Et(){if(pr)return le;pr=1;var e=Rt();function t(i){try{return e.call(i),!0}catch{return!1}}return le=t,le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ve,gr;function jr(){if(gr)return ve;gr=1;var e=Re(),t=Gr(),i=_t(),n=Et(),a=e();function u(s){return typeof s=="object"?s instanceof i?!0:a?n(s):t(s)==="[object Boolean]":!1}return ve=u,ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce,mr;function It(){if(mr)return ce;mr=1;var e=zr(),t=jr();function i(n){return e(n)||t(n)}return ce=i,ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fe,yr;function Pt(){if(yr)return fe;yr=1;var e=Br(),t=It(),i=zr(),n=jr();return e(t,"isPrimitive",i),e(t,"isObject",n),fe=t,fe}const Mt={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},Ot=["xD"],Tt=["V_V"],Lt=["xDD"],Ct=["o_O"],Dt=["o_o"],At={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:Ot,V_V:Tt,";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:Lt,"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:Ct,";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:Dt,":((":[":(("],"=)":["=)"]},Bt=["ai","nt"],xt=["are","nt"],Nt=["ca","nt"],Ft=["can","not"],Gt=["Can","not"],Vt=["could","ve"],Yt=["could","nt"],zt=["could","nt","ve"],jt=["did","nt"],Wt=["does","nt"],Zt=["do","nt"],Jt=["had","nt"],Xt=["has","nt"],Ht=["have","nt"],Kt=["he","d"],Ut=["he","d","ve"],Qt=["he","s"],kt=["how","d"],en=["how","ll"],rn=["how","s"],tn=["I","m"],nn=["i","m"],an=["is","nt"],un=["it","ll"],on=["let","s"],sn=["that","s"],ln=["wo","nt"],vn={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:Bt,"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:xt,"Aren't":["Are","n't"],"can't":["ca","n't"],cant:Nt,"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:Ft,Cannot:Gt,"could've":["could","'ve"],couldve:Vt,"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:Yt,"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:zt,"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:jt,"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:Wt,"Doesn't":["Does","n't"],"don't":["do","n't"],dont:Zt,"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:Jt,"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:Xt,"haven't":["have","n't"],havent:Ht,"he'd":["he","'d"],hed:Kt,"he'd've":["he","'d","'ve"],hedve:Ut,"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:Qt,"how'd":["how","'d"],howd:kt,"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:en,"how's":["how","'s"],hows:rn,"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:tn,im:nn,"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:an,"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:un,"it's":["it","'s"],"let's":["let","'s"],lets:on,"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:sn,"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:ln,"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var de,br;function cn(){if(br)return de;br=1;var e=Pt().isPrimitive,t=Yr().isPrimitive,i=Fr(),n=Ar(),a=Mt,u=At,s=vn,o=/^([,([{*<"“'`‘]|\.{1,3})/gi,d=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function m(c,r){var f;for(f=0;f<r.length;f++)c.push(r[f]);return c}function l(c){var r=[],f=[],v,p,g;do!u[c]&&!a[c]&&!s[c]?(v=c.split(o),v.length>1?(r.push(v[1]),c=v[2]):(v=c.split(d),v.length>1?(c=v[0],f.unshift(v[1])):p=!0)):p=!0;while(!p);return g=r,c&&g.push(c),f[f.length-1]==="..."&&(f.pop(),f.unshift("...")),m(g,f),g}function h(c,r){var f,v,p,g,y,b;if(!t(c))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",c));if(arguments.length>1&&!e(r))throw new TypeError(n("invalid argument. Second argument must be a boolean. Value: `%s`.",r));if(!c)return[];for(r?v=c.split(/(\s+)/):v=c.split(/\s+/),y={},p=[],b=0;b<v.length;b++)g=v[b],i(y,g)?m(p,y[g]):(f=l(g),m(p,f),y[g]=f);return p}return de=h,de}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var he,wr;function fn(){if(wr)return he;wr=1;var e=cn();return he=e,he}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pe,$r;function dn(){if($r)return pe;$r=1;var e=typeof String.prototype.trim<"u";return pe=e,pe}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge,qr;function Wr(){if(qr)return ge;qr=1;var e=String.prototype.trim;return ge=e,ge}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var me,Sr;function hn(){if(Sr)return me;Sr=1;var e=Wr(),t=` 
	\r
\f\v            \u2028\u2029  　\uFEFF`,i="᠎";function n(){return e.call(t)===""&&e.call(i)===i}return me=n,me}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ye,_r;function pn(){if(_r)return ye;_r=1;function e(t,i,n){return t.replace(i,n)}return ye=e,ye}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var be,Rr;function gn(){if(Rr)return be;Rr=1;var e=pn();return be=e,be}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var we,Er;function mn(){if(Er)return we;Er=1;var e=gn(),t=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function i(n){return e(n,t,"$1")}return we=i,we}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e,Ir;function yn(){if(Ir)return $e;Ir=1;var e=Wr();function t(i){return e.call(i)}return $e=t,$e}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qe,Pr;function bn(){if(Pr)return qe;Pr=1;var e=dn(),t=hn(),i=mn(),n=yn(),a;return e&&t()?a=n:a=i,qe=a,qe}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Se,Mr;function wn(){if(Mr)return Se;Mr=1;var e=Yr().isPrimitive,t=fn(),i=bn(),n=/^[A-Z][a-z]{0,4}$/,a=/^([A-Z]\.)*[A-Z]$/,u=/^[0-9]$/,s=/^[{[(<:;"'”`]/,o=/[})\]>:;"'”`]$/;function d(l,h){var c,r=h-1,f=h+1;return c=l[h],!!(c==="."&&!n.test(l[r])&&!a.test(l[r])&&!u.test(l[r])&&!s.test(l[r])&&!o.test(l[f])||(c==="!"||c==="?")&&!s.test(l[r])&&!o.test(l[f])||o.test(c)&&(l[r]==="."||l[r]==="!"||l[r]==="?"))}function m(l){var h,c,r,f;if(!e(l))throw new TypeError("invalid argument. Must provide a string. Value: `"+l+"`.");for(c=t(l,!0),h="",r=[],f=0;f<c.length;f++)h+=c[f],d(c,f)&&(r.push(i(h)),h="");return h!==""&&r.push(i(h)),r}return Se=m,Se}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _e,Or;function $n(){if(Or)return _e;Or=1;var e=wn();return _e=e,_e}var qn=$n();const Sn=Xr(qn);function _n(e){if(typeof Intl<"u"&&Intl.Segmenter)return new Intl.Segmenter("en",{granularity:"sentence"}).segment(e);const t=/[^.!?]+(?:[.!?]+(?:[\s\n]+|$))/g,i=e.match(t)||[];return{[Symbol.iterator](){let n=0;return{next(){return n<i.length?{value:{segment:i[n++].trim()},done:!1}:{done:!0}}}}}}const Zr=document.getElementById("input-text"),Rn=document.getElementById("submit-btn"),En=document.getElementById("stdlib-output"),In=document.getElementById("segmenter-output"),Pn=document.getElementById("stdlib-count"),Mn=document.getElementById("segmenter-count");function On(){return`hsl(${Math.floor(Math.random()*360)}, 70%, 90%)`}function Tn(e){try{return Sn(e)}catch(t){return console.error("Stdlib processing error:",t),["Error processing text"]}}function Ln(e){try{const t=[];for(const{segment:i}of _n(e))i.trim().length>0&&t.push(i.trim());return t}catch(t){return console.error("Segmenter processing error:",t),["Error processing text"]}}function Tr(e,t){return e.map((i,n)=>`<span style="display: block; background-color: ${t[n]}; margin: 4px 0; padding: 4px;">${i}</span>`).join("")}function Lr(e,t){t.textContent=`${e} sentence${e===1?"":"s"}`}function Jr(){const e=Zr.value,t=Tn(e),i=Ln(e),n=Math.max(t.length,i.length),a=Array.from({length:n},()=>On());En.innerHTML=Tr(t,a),In.innerHTML=Tr(i,a),Lr(t.length,Pn),Lr(i.length,Mn)}Rn.addEventListener("click",Jr);Zr.addEventListener("keydown",e=>{e.key==="Enter"&&e.ctrlKey&&(e.preventDefault(),Jr())});
