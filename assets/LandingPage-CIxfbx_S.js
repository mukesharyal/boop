import{j,r as Gn,C as sl,u as il}from"./index-D8dFMMA2.js";const ol="_navContainer_2izlb_1",al="_logo_2izlb_10",ul="_navList_2izlb_15",cl="_hamburger_2izlb_30",St={navContainer:ol,logo:al,navList:ul,hamburger:cl};function ll(){return j.jsxs("nav",{"aria-label":"Main Navigation",className:St.navContainer,children:[j.jsx("a",{href:"/",className:St.logo,"aria-label":"Homepage",children:"boop"}),j.jsx("a",{className:St.hamburger,"aria-label":"Expand for menu",children:j.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[j.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),j.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),j.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),j.jsxs("ul",{className:St.navList,children:[j.jsx("li",{className:St.navItem,children:j.jsx("a",{href:"#about",className:St.navLink,children:"About"})}),j.jsx("li",{className:St.navItem,children:j.jsx("a",{href:"#projects",className:St.navLink,children:"Policy"})}),j.jsx("li",{className:St.navItem,children:j.jsx("a",{href:"#contact",className:St.navLink,children:"Contact"})})]})]})}const hl="_mainContainer_15mr1_1",dl="_inputCard_15mr1_13",fl="_linkInput_15mr1_41",ml="_loaderWrapper_15mr1_71",pl="_loader_15mr1_71",sn={mainContainer:hl,inputCard:dl,linkInput:fl,loaderWrapper:ml,loader:pl},gl=()=>{};var Io={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_l=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|l>>4;let T=(l&15)<<2|f>>6,C=f&63;h||(C=64,a||(T=64)),r.push(e[m],e[E],e[T],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Na(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_l(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||E==null)throw new yl;const T=o<<2|l>>4;if(r.push(T),f!==64){const C=l<<4&240|f>>2;if(r.push(C),E!==64){const P=f<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(n){const t=Na(n);return ka.encodeByteArray(t,!0)},sr=function(n){return El(n).replace(/\./g,"")},Tl=function(n){try{return ka.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=()=>vl().__FIREBASE_DEFAULTS__,wl=()=>{if(typeof process>"u"||typeof Io>"u")return;const n=Io.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Al=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Tl(n[1]);return t&&JSON.parse(t)},js=()=>{try{return gl()||Il()||wl()||Al()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rl=n=>{var t,e;return(e=(t=js())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Cl=n=>{const t=Rl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},xa=()=>{var n;return(n=js())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){return n.endsWith(".cloudworkstations.dev")}async function bl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),""].join(".")}const ln={};function Vl(){const n={prod:[],emulator:[]};for(const t of Object.keys(ln))ln[t]?n.emulator.push(t):n.prod.push(t);return n}function Dl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let wo=!1;function Nl(n,t){if(typeof window>"u"||typeof document>"u"||!qs(window.location.host)||ln[n]===t||ln[n]||wo)return;ln[n]=t;function e(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=Vl().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function f(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{wo=!0,a()},T}function m(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=Dl(r),C=e("text"),P=document.getElementById(C)||document.createElement("span"),k=e("learnmore"),V=document.getElementById(k)||document.createElement("a"),H=e("preprendIcon"),B=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const G=T.element;l(G),m(V,k);const et=f();h(B,H),G.append(B,P,V,et),document.body.appendChild(G)}o?(P.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xl(){var n;const t=(n=js())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ol(){return!xl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ml(){try{return typeof indexedDB=="object"}catch{return!1}}function Ll(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="FirebaseError";class Me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Fl,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ul(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Me(s,l,r)}}function Ul(n,t){return n.replace(Bl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Bl=/\{\$([^}]+)}/g;function ir(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ao(o)&&Ao(a)){if(!ir(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ao(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Sl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($l(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ql(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ql(n){return n===de?void 0:n}function $l(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Hl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Gl=z.INFO,Kl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Ql=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Kl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ma{constructor(t){this.name=t,this._logLevel=Gl,this._logHandler=Ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Wl=(n,t)=>t.some(e=>n instanceof e);let Ro,Co;function Xl(){return Ro||(Ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yl(){return Co||(Co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,ys=new WeakMap,Fa=new WeakMap,ls=new WeakMap,$s=new WeakMap;function Jl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&La.set(e,n)}).catch(()=>{}),$s.set(t,n),t}function Zl(n){if(ys.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ys.set(n,t)}let Es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ys.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Fa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function th(n){Es=n(Es)}function eh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hs(this),t,...e);return Fa.set(r,t.sort?t.sort():[t]),Wt(r)}:Yl().includes(n)?function(...t){return n.apply(hs(this),t),Wt(La.get(this))}:function(...t){return Wt(n.apply(hs(this),t))}}function nh(n){return typeof n=="function"?eh(n):(n instanceof IDBTransaction&&Zl(n),Wl(n,Xl())?new Proxy(n,Es):n)}function Wt(n){if(n instanceof IDBRequest)return Jl(n);if(ls.has(n))return ls.get(n);const t=nh(n);return t!==n&&(ls.set(n,t),$s.set(t,n)),t}const hs=n=>$s.get(n);function rh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Wt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const sh=["get","getKey","getAll","getAllKeys","count"],ih=["put","add","delete","clear"],ds=new Map;function So(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ih.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sh.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ds.set(t,o),o}th(n=>({...n,get:(t,e,r)=>So(t,e)||n.get(t,e,r),has:(t,e)=>!!So(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ah(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ah(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ts="@firebase/app",bo="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Ma("@firebase/app"),uh="@firebase/app-compat",ch="@firebase/analytics-compat",lh="@firebase/analytics",hh="@firebase/app-check-compat",dh="@firebase/app-check",fh="@firebase/auth",mh="@firebase/auth-compat",ph="@firebase/database",gh="@firebase/data-connect",_h="@firebase/database-compat",yh="@firebase/functions",Eh="@firebase/functions-compat",Th="@firebase/installations",vh="@firebase/installations-compat",Ih="@firebase/messaging",wh="@firebase/messaging-compat",Ah="@firebase/performance",Rh="@firebase/performance-compat",Ch="@firebase/remote-config",Sh="@firebase/remote-config-compat",bh="@firebase/storage",Ph="@firebase/storage-compat",Vh="@firebase/firestore",Dh="@firebase/ai",Nh="@firebase/firestore-compat",kh="firebase",xh="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",Oh={[Ts]:"fire-core",[uh]:"fire-core-compat",[lh]:"fire-analytics",[ch]:"fire-analytics-compat",[dh]:"fire-app-check",[hh]:"fire-app-check-compat",[fh]:"fire-auth",[mh]:"fire-auth-compat",[ph]:"fire-rtdb",[gh]:"fire-data-connect",[_h]:"fire-rtdb-compat",[yh]:"fire-fn",[Eh]:"fire-fn-compat",[Th]:"fire-iid",[vh]:"fire-iid-compat",[Ih]:"fire-fcm",[wh]:"fire-fcm-compat",[Ah]:"fire-perf",[Rh]:"fire-perf-compat",[Ch]:"fire-rc",[Sh]:"fire-rc-compat",[bh]:"fire-gcs",[Ph]:"fire-gcs-compat",[Vh]:"fire-fst",[Nh]:"fire-fst-compat",[Dh]:"fire-vertex","fire-js":"fire-js",[kh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,Mh=new Map,Is=new Map;function Po(n,t){try{n.container.addComponent(t)}catch(e){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ar(n){const t=n.name;if(Is.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;Is.set(t,n);for(const e of or.values())Po(e,n);for(const e of Mh.values())Po(e,n);return!0}function Lh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Fh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Oa("app","Firebase",Uh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=xh;function Ua(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=xa()),!e)throw Xt.create("no-options");const o=or.get(s);if(o){if(ir(e,o.options)&&ir(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new zl(s);for(const h of Is.values())a.addComponent(h);const l=new Bh(e,r,a);return or.set(s,l),l}function qh(n=vs){const t=or.get(n);if(!t&&n===vs&&xa())return Ua();if(!t)throw Xt.create("no-app",{appName:n});return t}function Ce(n,t,e){var r;let s=(r=Oh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(l.join(" "));return}ar(new pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="firebase-heartbeat-database",zh=1,gn="firebase-heartbeat-store";let fs=null;function Ba(){return fs||(fs=rh($h,zh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),fs}async function Hh(n){try{const e=(await Ba()).transaction(gn),r=await e.objectStore(gn).get(ja(n));return await e.done,r}catch(t){if(t instanceof Me)Bt.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(e.message)}}}async function Vo(n,t){try{const r=(await Ba()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,ja(n)),await r.done}catch(e){if(e instanceof Me)Bt.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(r.message)}}}function ja(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1024,Kh=30;class Qh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Do();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Kh){const a=Yh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Do(),{heartbeatsToSend:r,unsentEntries:s}=Wh(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Bt.warn(e),""}}}function Do(){return new Date().toISOString().substring(0,10)}function Wh(n,t=Gh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),No(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),No(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ml()?Ll().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function No(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function Yh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n){ar(new pn("platform-logger",t=>new oh(t),"PRIVATE")),ar(new pn("heartbeat",t=>new Qh(t),"PRIVATE")),Ce(Ts,bo,n),Ce(Ts,bo,"esm2017"),Ce("fire-js","")}Jh("");var Zh="firebase",td="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(Zh,td,"app");var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,qa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(y,v,A){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],v=I.g[2];var A=I.g[3],g=p+(A^_&(v^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,y=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<p;)if(y[v++]=I.charCodeAt(A++),v==this.blockSize){s(this,y),v=0;break}}else for(;A<p;)if(y[v++]=I[A++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)I[_++]=this.g[p]>>>y&255;return I};function o(I,p){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],y=!0,v=I.length-1;0<=v;v--){var A=I[v]|0;y&&A==p||(_[v]=A,y=!1)}this.g=_}var l={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return V(f(-I));for(var p=[],_=1,y=0;I>=_;y++)p[y]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return V(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=E,v=0;v<I.length;v+=8){var A=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),T=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);I+=(0<=y?y:4294967296+y)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(k(this))return"-"+V(this).toString(I);for(var p=f(Math.pow(I,6)),_=this,y="";;){var v=et(_,p).g;_=H(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=v,P(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=H(this,I),k(I)?-1:P(I)?0:1};function V(I){for(var p=I.g.length,_=[],y=0;y<p;y++)_[y]=~I.g[y];return new a(_,~I.h).add(T)}n.abs=function(){return k(this)?V(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0,v=0;v<=p;v++){var A=y+(this.i(v)&65535)+(I.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);y=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(I,p){return I.add(V(p))}n.j=function(I){if(P(this)||P(I))return E;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(0>this.l(C)&&0>I.l(C))return f(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<I.g.length;v++){var A=this.i(y)>>>16,g=this.i(y)&65535,Ot=I.i(v)>>>16,je=I.i(v)&65535;_[2*y+2*v]+=g*je,B(_,2*y+2*v),_[2*y+2*v+1]+=A*je,B(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Ot,B(_,2*y+2*v+1),_[2*y+2*v+2]+=A*Ot,B(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function B(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function G(I,p){this.g=I,this.h=p}function et(I,p){if(P(p))throw Error("division by zero");if(P(I))return new G(E,E);if(k(I))return p=et(V(I),p),new G(V(p.g),V(p.h));if(k(p))return p=et(I,V(p)),new G(V(p.g),p.h);if(30<I.g.length){if(k(I)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=T,y=p;0>=y.l(I);)_=xt(_),y=xt(y);var v=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!P(y);){var g=A.add(y);0>=g.l(I)&&(v=v.add(_),A=g),y=at(y,1),_=at(_,1)}return p=H(I,v.j(p)),new G(v,p)}for(v=E;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(p);k(g)||0<g.l(I);)_-=y,A=f(_),g=A.j(p);P(A)&&(A=T),v=v.add(A),I=H(I,g)}return new G(v,I)}n.A=function(I){return et(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&I.i(y);return new a(_,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|I.i(y);return new a(_,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^I.i(y);return new a(_,this.h^I.h)};function xt(I){for(var p=I.g.length+1,_=[],y=0;y<p;y++)_[y]=I.i(y)<<1|I.i(y-1)>>>31;return new a(_,I.h)}function at(I,p){var _=p>>5;p%=32;for(var y=I.g.length-_,v=[],A=0;A<y;A++)v[A]=0<p?I.i(A+_)>>>p|I.i(A+_+1)<<32-p:I.i(A+_);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Yt=a}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $a,on,za,Jn,ws,Ha,Ga,Ka;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var w=i[d];if(!(w in c))break t;c=c[w]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,w={next:function(){if(!d&&c<i.length){var R=c++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,c){return i.call.apply(i.bind,arguments)}function E(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function T(i,u,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,T.apply(null,arguments)}function C(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function P(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,w,R){for(var D=Array(arguments.length-2),W=2;W<arguments.length;W++)D[W-2]=arguments[W];return u.prototype[w].apply(d,D)}}function k(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function V(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const w=i.length||0,R=d.length||0;i.length=w+R;for(let D=0;D<R;D++)i[w+D]=d[D]}else i.push(d)}}class H{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function et(i){return et[" "](i),i}et[" "]=function(){};var xt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function at(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function I(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function p(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let c,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(c in d)i[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function v(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function A(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Br;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ot{constructor(){this.h=this.g=null}add(u,c){const d=je.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var je=new H(()=>new wc,i=>i.reset());class wc{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,$e=!1,Br=new Ot,vi=()=>{const i=l.Promise.resolve(void 0);qe=()=>{i.then(Ac)}};var Ac=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){A(c)}var u=je;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}$e=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Rc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function ze(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{et(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Cc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ze.aa.h.call(this)}}P(ze,dt);var Cc={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),Sc=0;function bc(i,u,c,d,w){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=w,this.key=++Sc,this.da=this.fa=!1}function bn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Pn(i){this.src=i,this.g={},this.h=0}Pn.prototype.add=function(i,u,c,d,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=qr(i,u,d,w);return-1<D?(u=i[D],c||(u.fa=!1)):(u=new bc(u,this.src,R,!!d,w),u.fa=c,i.push(u)),u};function jr(i,u){var c=u.type;if(c in i.g){var d=i.g[c],w=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=w)&&Array.prototype.splice.call(d,w,1),R&&(bn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function qr(i,u,c,d){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==d)return w}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),zr={};function Ii(i,u,c,d,w){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ii(i,u[R],c,d,w);return null}return c=Ri(c),i&&i[Sn]?i.K(u,c,f(d)?!!d.capture:!1,w):Pc(i,u,c,!1,d,w)}function Pc(i,u,c,d,w,R){if(!u)throw Error("Invalid event type");var D=f(w)?!!w.capture:!!w,W=Gr(i);if(W||(i[$r]=W=new Pn(i)),c=W.add(u,c,d,D,R),c.proxy)return c;if(d=Vc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Rc||(w=D),w===void 0&&(w=!1),i.addEventListener(u.toString(),d,w);else if(i.attachEvent)i.attachEvent(Ai(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Vc(){function i(c){return u.call(i.src,i.listener,c)}const u=Dc;return i}function wi(i,u,c,d,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)wi(i,u[R],c,d,w);else d=f(d)?!!d.capture:!!d,c=Ri(c),i&&i[Sn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],c=qr(R,c,d,w),-1<c&&(bn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Gr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=qr(u,c,d,w)),(c=-1<i?u[i]:null)&&Hr(c))}function Hr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Sn])jr(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(Ai(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Gr(u))?(jr(c,i),c.h==0&&(c.src=null,u[$r]=null)):bn(i)}}}function Ai(i){return i in zr?zr[i]:zr[i]="on"+i}function Dc(i,u){if(i.da)i=!0;else{u=new ze(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&Hr(i),i=c.call(d,u)}return i}function Gr(i){return i=i[$r],i instanceof Pn?i:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ri(i){return typeof i=="function"?i:(i[Kr]||(i[Kr]=function(u){return i.handleEvent(u)}),i[Kr])}function ft(){$t.call(this),this.i=new Pn(this),this.M=this,this.F=null}P(ft,$t),ft.prototype[Sn]=!0,ft.prototype.removeEventListener=function(i,u,c,d){wi(this,i,u,c,d)};function Et(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var w=u;u=new dt(d,i),y(u,w)}if(w=!0,c)for(var R=c.length-1;0<=R;R--){var D=u.g=c[R];w=Vn(D,d,!0,u)&&w}if(D=u.g=i,w=Vn(D,d,!0,u)&&w,w=Vn(D,d,!1,u)&&w,c)for(R=0;R<c.length;R++)D=u.g=c[R],w=Vn(D,d,!1,u)&&w}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)bn(c[d]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},ft.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function Vn(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==c){var W=D.listener,ut=D.ha||D.src;D.fa&&jr(i.i,D),w=W.call(ut,d)!==!1&&w}}return w&&!d.defaultPrevented}function Ci(i,u,c){if(typeof i=="function")c&&(i=T(i,c));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Si(i){i.g=Ci(()=>{i.g=null,i.i&&(i.i=!1,Si(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Nc extends $t{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(i){$t.call(this),this.h=i,this.g={}}P(He,$t);var bi=[];function Pi(i){at(i.g,function(u,c){this.g.hasOwnProperty(c)&&Hr(u)},i),i.g={}}He.prototype.N=function(){He.aa.N.call(this),Pi(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=l.JSON.stringify,kc=l.JSON.parse,xc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Wr(){}Wr.prototype.h=null;function Vi(i){return i.h||(i.h=i.i())}function Di(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){dt.call(this,"d")}P(Xr,dt);function Yr(){dt.call(this,"c")}P(Yr,dt);var ue={},Ni=null;function Dn(){return Ni=Ni||new ft}ue.La="serverreachability";function ki(i){dt.call(this,ue.La,i)}P(ki,dt);function Ke(i){const u=Dn();Et(u,new ki(u))}ue.STAT_EVENT="statevent";function xi(i,u){dt.call(this,ue.STAT_EVENT,i),this.stat=u}P(xi,dt);function Tt(i){const u=Dn();Et(u,new xi(u,i))}ue.Ma="timingevent";function Oi(i,u){dt.call(this,ue.Ma,i),this.size=u}P(Oi,dt);function Qe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function Oc(i,u,c,d,w,R){i.info(function(){if(i.g)if(R)for(var D="",W=R.split("&"),ut=0;ut<W.length;ut++){var K=W[ut].split("=");if(1<K.length){var mt=K[0];K=K[1];var pt=mt.split("_");D=2<=pt.length&&pt[1]=="type"?D+(mt+"="+K+"&"):D+(mt+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+u+`
`+c+`
`+D})}function Mc(i,u,c,d,w,R,D){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+u+`
`+c+`
`+R+" "+D})}function ye(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fc(i,c)+(d?" "+d:"")})}function Lc(i,u){i.info(function(){return"TIMEOUT: "+u})}We.prototype.info=function(){};function Fc(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return Qr(c)}catch{return u}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function kn(){}P(kn,Wr),kn.prototype.g=function(){return new XMLHttpRequest},kn.prototype.i=function(){return{}},Jr=new kn;function zt(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var Fi={},Zr={};function ts(i,u,c){i.L=1,i.v=Ln(Mt(u)),i.m=c,i.P=!0,Ui(i,null)}function Ui(i,u){i.F=Date.now(),xn(i),i.A=Mt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Zi(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Li,i.g=yo(i.j,c?u:null,!i.m),0<i.O&&(i.M=new Nc(T(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(bi[0]=w.toString()),w=bi);for(var R=0;R<w.length;R++){var D=Ii(c,w[R],d||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Ke(),Oc(i.i,i.u,i.A,i.l,i.R,i.m)}zt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Lt(i)==3?u.j():this.Y(i)},zt.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Lt(this.g);var u=this.g.Ba();const ve=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||oo(this.g)))){this.J||pt!=4||u==7||(u==8||0>=ve?Ke(3):Ke(2)),es(this);var c=this.g.Z();this.X=c;e:if(Bi(this)){var d=oo(this.g);i="";var w=d.length,R=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),Xe(this);var D="";break e}this.h.i=new l.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==w-1)});d.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=c==200,Mc(this.i,this.u,this.A,this.l,this.R,pt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(W)){var K=W;break e}}K=null}if(c=K)ye(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ns(this,c);else{this.o=!1,this.s=3,Tt(12),ce(this),Xe(this);break t}}if(this.P){c=!0;let Ct;for(;!this.J&&this.C<D.length;)if(Ct=Uc(this,D),Ct==Zr){pt==4&&(this.s=4,Tt(14),c=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Fi){this.s=4,Tt(15),ye(this.i,this.l,D,"[Invalid Chunk]"),c=!1;break}else ye(this.i,this.l,Ct,null),ns(this,Ct);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||D.length!=0||this.h.h||(this.s=1,Tt(16),c=!1),this.o=this.o&&c,!c)ye(this.i,this.l,D,"[Invalid Chunked Response]"),ce(this),Xe(this);else if(0<D.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),us(mt),mt.M=!0,Tt(11))}}else ye(this.i,this.l,D,null),ns(this,D);pt==4&&ce(this),this.o&&!this.J&&(pt==4?mo(this.j,this):(this.o=!1,xn(this)))}else nl(this.g),c==400&&0<D.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ce(this),Xe(this)}}}catch{}finally{}};function Bi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Uc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?Zr:(c=Number(u.substring(c,d)),isNaN(c)?Fi:(d+=1,d+c>u.length?Zr:(u=u.slice(d,d+c),i.C=d+c,u)))}zt.prototype.cancel=function(){this.J=!0,ce(this)};function xn(i){i.S=Date.now()+i.I,ji(i,i.I)}function ji(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(T(i.ba,i),u)}function es(i){i.B&&(l.clearTimeout(i.B),i.B=null)}zt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Lc(this.i,this.A),this.L!=2&&(Ke(),Tt(17)),ce(this),this.s=2,Xe(this)):ji(this,this.S-i)};function Xe(i){i.j.G==0||i.J||mo(i.j,i)}function ce(i){es(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Pi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ns(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||rs(c.h,i))){if(!i.K&&rs(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)$n(c),jn(c);else break t;as(c),Tt(18)}}else c.za=w[1],0<c.za-c.T&&37500>w[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qe(T(c.Za,c),6e3));if(1>=zi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else he(c,11)}else if((i.K||c.g==i)&&$n(c),!B(u))for(w=c.Da.g.parse(u),u=0;u<w.length;u++){let K=w[u];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const mt=K[3];mt!=null&&(c.la=mt,c.j.info("VER="+c.la));const pt=K[4];pt!=null&&(c.Aa=pt,c.j.info("SVER="+c.Aa));const ve=K[5];ve!=null&&typeof ve=="number"&&0<ve&&(d=1.5*ve,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ct=i.g;if(Ct){const Hn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var R=d.h;R.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ss(R,R.h),R.h=null))}if(d.D){const cs=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(d.ya=cs,X(d.I,d.D,cs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var D=i;if(d.qa=_o(d,d.J?d.ia:null,d.W),D.K){Hi(d.h,D);var W=D,ut=d.L;ut&&(W.I=ut),W.B&&(es(W),xn(W)),d.g=D}else ho(d);0<c.i.length&&qn(c)}else K[0]!="stop"&&K[0]!="close"||he(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?he(c,7):os(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}Ke(4)}catch{}}var Bc=class{constructor(i,u){this.g=i,this.map=u}};function qi(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $i(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function zi(i){return i.h?1:i.g?i.g.size:0}function rs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ss(i,u){i.g?i.g.add(u):i.h=u}function Hi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}qi.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Gi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return k(i.i)}function jc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function qc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function Ki(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=qc(i),d=jc(i),w=d.length,R=0;R<w;R++)u.call(void 0,d[R],c&&c[R],i)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),w=null;if(0<=d){var R=i[c].substring(0,d);w=i[c].substring(d+1)}else R=i[c];u(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function le(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof le){this.h=i.h,On(this,i.j),this.o=i.o,this.g=i.g,Mn(this,i.s),this.l=i.l;var u=i.i,c=new Ze;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),Wi(this,c),this.m=i.m}else i&&(u=String(i).match(Qi))?(this.h=!1,On(this,u[1]||"",!0),this.o=Ye(u[2]||""),this.g=Ye(u[3]||"",!0),Mn(this,u[4]),this.l=Ye(u[5]||"",!0),Wi(this,u[6]||"",!0),this.m=Ye(u[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}le.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Je(u,Xi,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Je(u,Xi,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Je(c,c.charAt(0)=="/"?Gc:Hc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Je(c,Qc)),i.join("")};function Mt(i){return new le(i)}function On(i,u,c){i.j=c?Ye(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Mn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Wi(i,u,c){u instanceof Ze?(i.i=u,Wc(i.i,i.h)):(c||(u=Je(u,Kc)),i.i=new Ze(u,i.h))}function X(i,u,c){i.i.set(u,c)}function Ln(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ye(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Je(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,zc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function zc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Xi=/[#\/\?@]/g,Hc=/[#\?:]/g,Gc=/[#\?]/g,Kc=/[#\?@]/g,Qc=/#/g;function Ze(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Ht(i){i.g||(i.g=new Map,i.h=0,i.i&&$c(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Ze.prototype,n.add=function(i,u){Ht(this),this.i=null,i=Ee(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function Yi(i,u){Ht(i),u=Ee(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Ji(i,u){return Ht(i),u=Ee(i,u),i.g.has(u)}n.forEach=function(i,u){Ht(this),this.g.forEach(function(c,d){c.forEach(function(w){i.call(u,w,d,this)},this)},this)},n.na=function(){Ht(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const w=i[d];for(let R=0;R<w.length;R++)c.push(u[d])}return c},n.V=function(i){Ht(this);let u=[];if(typeof i=="string")Ji(this,i)&&(u=u.concat(this.g.get(Ee(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return Ht(this),this.i=null,i=Ee(this,i),Ji(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Zi(i,u,c){Yi(i,u),0<c.length&&(i.i=null,i.g.set(Ee(i,u),k(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const R=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var w=R;D[d]!==""&&(w+="="+encodeURIComponent(String(D[d]))),i.push(w)}}return this.i=i.join("&")};function Ee(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Wc(i,u){u&&!i.j&&(Ht(i),i.i=null,i.g.forEach(function(c,d){var w=d.toLowerCase();d!=w&&(Yi(this,d),Zi(this,w,c))},i)),i.j=u}function Xc(i,u){const c=new We;if(l.Image){const d=new Image;d.onload=C(Gt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=C(Gt,c,"TestLoadImage: error",!1,u,d),d.onabort=C(Gt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=C(Gt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function Yc(i,u){const c=new We,d=new AbortController,w=setTimeout(()=>{d.abort(),Gt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(w),R.ok?Gt(c,"TestPingServer: ok",!0,u):Gt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),Gt(c,"TestPingServer: error",!1,u)})}function Gt(i,u,c,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(c)}catch{}}function Jc(){this.g=new xc}function Zc(i,u,c){const d=c||"";try{Ki(i,function(w,R){let D=w;f(w)&&(D=Qr(w)),u.push(d+R+"="+encodeURIComponent(D))})}catch(w){throw u.push(d+"type="+encodeURIComponent("_badmap")),w}}function Fn(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Fn,Wr),Fn.prototype.g=function(){return new Un(this.l,this.j)},Fn.prototype.i=function(i){return function(){return i}}({});function Un(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Un,ft),n=Un.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,en(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;to(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function to(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?tn(this):en(this),this.readyState==3&&to(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,tn(this))},n.Qa=function(i){this.g&&(this.response=i,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,en(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function en(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function eo(i){let u="";return at(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function is(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=eo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):X(i,u,c))}function Z(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Z,ft);var tl=/^https?$/i,el=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Vi(this.o):Vi(Jr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){no(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)c.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(el,u,void 0))||d||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of c)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{io(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){no(this,R)}};function no(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,ro(i),Bn(i)}function ro(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},n.bb=function(){so(this)};function so(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)Ci(i.Ea,0,i);else if(Et(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=D===0){var w=String(i.D).match(Qi)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),d=!tl.test(w?w.toLowerCase():"")}c=d}if(c)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var R=2<Lt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ro(i)}}finally{Bn(i)}}}}function Bn(i,u){if(i.g){io(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Et(i,"ready");try{c.onreadystatechange=d}catch{}}}function io(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),kc(u)}};function oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(i){const u={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(B(i[d]))continue;var c=v(i[d]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[w]||[];u[w]=R,R.push(c)}I(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function ao(i){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,i),this.cb=nn("retryDelaySeedMs",1e4,i),this.Wa=nn("forwardChannelMaxRetries",2,i),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(i&&i.concurrentRequestLimit),this.Da=new Jc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ao.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,d){Tt(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=_o(this,null,this.W),qn(this)};function os(i){if(uo(i),i.G==3){var u=i.U++,c=Mt(i.I);if(X(c,"SID",i.K),X(c,"RID",u),X(c,"TYPE","terminate"),rn(i,c),u=new zt(i,i.j,u),u.L=2,u.v=Ln(Mt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=yo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xn(u)}go(i)}function jn(i){i.g&&(us(i),i.g.cancel(),i.g=null)}function uo(i){jn(i),i.u&&(l.clearTimeout(i.u),i.u=null),$n(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function qn(i){if(!$i(i.h)&&!i.s){i.s=!0;var u=i.Ga;qe||vi(),$e||(qe(),$e=!0),Br.add(u,i),i.B=0}}function rl(i,u){return zi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(T(i.Ga,i,u),po(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new zt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=lo(this,w,u),c=Mt(this.I),X(c,"RID",i),X(c,"CVER",22),this.D&&X(c,"X-HTTP-Session-Id",this.D),rn(this,c),R&&(this.O?u="headers="+encodeURIComponent(String(eo(R)))+"&"+u:this.m&&is(c,this.m,R)),ss(this.h,w),this.Ua&&X(c,"TYPE","init"),this.P?(X(c,"$req",u),X(c,"SID","null"),w.T=!0,ts(w,c,null)):ts(w,c,u),this.G=2}}else this.G==3&&(i?co(this,i):this.i.length==0||$i(this.h)||co(this))};function co(i,u){var c;u?c=u.l:c=i.U++;const d=Mt(i.I);X(d,"SID",i.K),X(d,"RID",c),X(d,"AID",i.T),rn(i,d),i.m&&i.o&&is(d,i.m,i.o),c=new zt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=lo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ss(i.h,c),ts(c,d,u)}function rn(i,u){i.H&&at(i.H,function(c,d){X(u,d,c)}),i.l&&Ki({},function(c,d){X(u,d,c)})}function lo(i,u,c){c=Math.min(i.i.length,c);var d=i.l?T(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const D=["count="+c];R==-1?0<c?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let W=!0;for(let ut=0;ut<c;ut++){let K=w[ut].g;const mt=w[ut].map;if(K-=R,0>K)R=Math.max(0,w[ut].g-100),W=!1;else try{Zc(mt,D,"req"+K+"_")}catch{d&&d(mt)}}if(W){d=D.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function ho(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;qe||vi(),$e||(qe(),$e=!0),Br.add(u,i),i.v=0}}function as(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(T(i.Fa,i),po(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,fo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),jn(this),fo(this))};function us(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function fo(i){i.g=new zt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Mt(i.qa);X(u,"RID","rpc"),X(u,"SID",i.K),X(u,"AID",i.T),X(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(u,"TO",i.ja),X(u,"TYPE","xmlhttp"),rn(i,u),i.m&&i.o&&is(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Ln(Mt(u)),c.m=null,c.P=!0,Ui(c,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),as(this),Tt(19))};function $n(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function mo(i,u){var c=null;if(i.g==u){$n(i),us(i),i.g=null;var d=2}else if(rs(i.h,u))c=u.D,Hi(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;d=Dn(),Et(d,new Oi(d,c)),qn(i)}else ho(i);else if(w=u.s,w==3||w==0&&0<u.X||!(d==1&&rl(i,u)||d==2&&as(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),w){case 1:he(i,5);break;case 4:he(i,10);break;case 3:he(i,6);break;default:he(i,2)}}}function po(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function he(i,u){if(i.j.info("Error code "+u),u==2){var c=T(i.fb,i),d=i.Xa;const w=!d;d=new le(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||On(d,"https"),Ln(d),w?Xc(d.toString(),c):Yc(d.toString(),c)}else Tt(2);i.G=0,i.l&&i.l.sa(u),go(i),uo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function go(i){if(i.G=0,i.ka=[],i.l){const u=Gi(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function _o(i,u,c){var d=c instanceof le?Mt(c):new le(c);if(d.g!="")u&&(d.g=u+"."+d.g),Mn(d,d.s);else{var w=l.location;d=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var R=new le(null);d&&On(R,d),u&&(R.g=u),w&&Mn(R,w),c&&(R.l=c),d=R}return c=i.D,u=i.ya,c&&u&&X(d,c,u),X(d,"VER",i.la),rn(i,d),d}function yo(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Z(new Fn({eb:c})):new Z(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eo(){}n=Eo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){ft.call(this),this.g=new ao(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Te(this)}P(At,ft),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){os(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Qr(i),i=c);u.i.push(new Bc(u.Ya++,i)),u.G==3&&qn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,os(this.g),delete this.g,At.aa.N.call(this)};function To(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}P(To,Xr);function vo(){Yr.call(this),this.status=1}P(vo,Yr);function Te(i){this.g=i}P(Te,Eo),Te.prototype.ua=function(){Et(this.g,"a")},Te.prototype.ta=function(i){Et(this.g,new To(i))},Te.prototype.sa=function(i){Et(this.g,new vo)},Te.prototype.ra=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ka=function(){return new zn},Ga=function(){return Dn()},Ha=ue,ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Jn=Nn,Mi.COMPLETE="complete",za=Mi,Di.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",ft.prototype.listen=ft.prototype.K,on=Di,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,$a=Z}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const xo="@firebase/firestore",Oo="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Ma("@firebase/firestore");function Ie(){return me.logLevel}function N(n,...t){if(me.logLevel<=z.DEBUG){const e=t.map(zs);me.debug(`Firestore (${Le}): ${n}`,...e)}}function jt(n,...t){if(me.logLevel<=z.ERROR){const e=t.map(zs);me.error(`Firestore (${Le}): ${n}`,...e)}}function be(n,...t){if(me.logLevel<=z.WARN){const e=t.map(zs);me.warn(`Firestore (${Le}): ${n}`,...e)}}function zs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Qa(n,r,e)}function Qa(n,t,e){let r=`FIRESTORE (${Le}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function Q(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Qa(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new Wa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class sd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class id{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new sd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class od{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Mo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Mo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ad(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function As(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=Xa(),a=ud(o.encode(Lo(n,e)),o.encode(Lo(t,e)));return a!==0?a:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Lo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function ud(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Pe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-62135596800,Uo=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Uo);return new st(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Fo)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Fo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new st(0,0))}static max(){return new L(new st(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=bt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),s=bt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?bt.extractNumericId(t).compare(bt.extractNumericId(e)):As(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class Y extends bt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends bt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return cd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bo}static keyField(){return new lt([Bo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new x(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new x(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=-1;function ld(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new te(s,O.empty(),t)}function hd(n){return new te(n.readTime,n.key,_n)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te(L.min(),O.empty(),_n)}static max(){return new te(L.max(),O.empty(),_n)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==fd)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function pd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ue(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Tr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=-1;function vr(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function gd(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="";function _d(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=jo(t)),t=yd(n.get(e),t);return jo(t)}function yd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Ja:e+="";break;default:e+=o}}return e}function jo(n){return n+Ja+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function oe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Za(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new it(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new tu("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Ed=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(Q(!!n,39018),typeof n=="string"){let t=0;const e=Ed.exec(n);if(Q(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ne(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="server_timestamp",nu="__type__",ru="__previous_value__",su="__local_write_time__";function Gs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[nu])===null||e===void 0?void 0:e.stringValue)===eu}function Ir(n){const t=n.mapValue.fields[ru];return Gs(t)?Ir(t):t}function yn(n){const t=ee(n.mapValue.fields[su].timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e,r,s,o,a,l,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const cr="(default)";class En{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new En("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof En&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="__type__",vd="__max__",Wn={mapValue:{}},ou="__vector__",lr="value";function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gs(n)?4:wd(n)?9007199254740991:Id(n)?10:11:M(28295,{value:n})}function Nt(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yn(n).isEqual(yn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ee(s.timestampValue),l=ee(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return tt(s.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return tt(s.integerValue)===tt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=tt(s.doubleValue),l=tt(o.doubleValue);return a===l?ur(a)===ur(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(qo(a)!==qo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Nt(a[h],l[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function Tn(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function Ve(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return zo(n.timestampValue,t.timestampValue);case 4:return zo(yn(n),yn(t));case 5:return As(n.stringValue,t.stringValue);case 6:return function(o,a){const l=ne(o),h=ne(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=U(l[f],h[f]);if(m!==0)return m}return U(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=U(tt(o.latitude),tt(a.latitude));return l!==0?l:U(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ho(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,m;const E=o.fields||{},T=a.fields||{},C=(l=E[lr])===null||l===void 0?void 0:l.arrayValue,P=(h=T[lr])===null||h===void 0?void 0:h.arrayValue,k=U(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Ho(C,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Wn.mapValue&&a===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(a===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const T=As(h[E],m[E]);if(T!==0)return T;const C=Ve(l[h[E]],f[m[E]]);if(C!==0)return C}return U(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function zo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ee(n),r=ee(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Ho(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ve(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function De(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ne(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Rs(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Zn(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ir(n);return t?16+Zn(t):16;case 5:return 2*n.stringValue.length;case 6:return ne(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Zn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return oe(r.fields,(o,a)=>{s+=o.length+Zn(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Cs(n){return!!n&&"integerValue"in n}function Ks(n){return!!n&&"arrayValue"in n}function Go(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function Id(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[iu])===null||e===void 0?void 0:e.stringValue)===ou}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return oe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function wd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=hn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){oe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(hn(this.value))}}function au(n){const t=[];return oe(n.fields,(e,r)=>{const s=new lt([e]);if(tr(r)){const o=au(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Qo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ad(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{}class rt extends uu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Cd(t,e,r):e==="array-contains"?new Pd(t,r):e==="in"?new Vd(t,r):e==="not-in"?new Dd(t,r):e==="array-contains-any"?new Nd(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sd(t,r):new bd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ve(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends uu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new kt(t,e)}matches(t){return cu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function cu(n){return n.op==="and"}function lu(n){return Rd(n)&&cu(n)}function Rd(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Ss(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+De(n.value);if(lu(n))return n.filters.map(t=>Ss(t)).join(",");{const t=n.filters.map(e=>Ss(e)).join(",");return`${n.op}(${t})`}}function hu(n,t){return n instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&hu(a,s.filters[l]),!0):!1}(n,t):void M(19439)}function du(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(du).join(" ,")+"}"}(n):"Filter"}class Cd extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sd extends rt{constructor(t,e){super(t,"in",e),this.keys=fu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bd extends rt{constructor(t,e){super(t,"not-in",e),this.keys=fu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Pd extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ks(e)&&Tn(e.arrayValue,this.value)}}class Vd extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class Dd extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class Nd extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ks(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Ie=null}}function Xo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new kd(n,t,e,r,s,o,a)}function Qs(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ss(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>De(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>De(r)).join(",")),t.Ie=e}return t.Ie}function Ws(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ad(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!hu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Wo(n.startAt,t.startAt)&&Wo(n.endAt,t.endAt)}function bs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function xd(n,t,e,r,s,o,a,l){return new wr(n,t,e,r,s,o,a,l)}function Ar(n){return new wr(n)}function Yo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Od(n){return n.collectionGroup!==null}function dn(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new dr(o,r))}),e.has(lt.keyField().canonicalString())||t.Ee.push(new dr(lt.keyField(),r))}return t.Ee}function Pt(n){const t=F(n);return t.de||(t.de=Md(t,dn(n))),t.de}function Md(n,t){if(n.limitType==="F")return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new dr(s.field,o)});const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ps(n,t,e){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Rr(n,t){return Ws(Pt(n),Pt(t))&&n.limitType===t.limitType}function mu(n){return`${Qs(Pt(n))}|lt:${n.limitType}`}function we(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>du(s)).join(", ")}]`),vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>De(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>De(s)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=Qo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,dn(r),s)||r.endAt&&!function(a,l,h){const f=Qo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,dn(r),s))}(n,t)}function Ld(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pu(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=Fd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Fd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Ve(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){oe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Za(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new J(O.comparator);function qt(){return Ud}const gu=new J(O.comparator);function an(...n){let t=gu;for(const e of n)t=t.insert(e.key,e);return t}function _u(n){let t=gu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fe(){return fn()}function yu(){return fn()}function fn(){return new ge(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bd=new J(O.comparator),jd=new it(O.comparator);function q(...n){let t=jd;for(const e of n)t=t.add(e);return t}const qd=new it(U);function $d(){return qd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function Eu(n){return{integerValue:""+n}}function zd(n,t){return gd(t)?Eu(t):Xs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this._=void 0}}function Hd(n,t,e){return n instanceof fr?function(s,o){const a={fields:{[nu]:{stringValue:eu},[su]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Gs(o)&&(o=Ir(o)),o&&(a.fields[ru]=o),{mapValue:a}}(e,t):n instanceof vn?vu(n,t):n instanceof In?Iu(n,t):function(s,o){const a=Tu(s,o),l=Jo(a)+Jo(s.Re);return Cs(a)&&Cs(s.Re)?Eu(l):Xs(s.serializer,l)}(n,t)}function Gd(n,t,e){return n instanceof vn?vu(n,t):n instanceof In?Iu(n,t):e}function Tu(n,t){return n instanceof mr?function(r){return Cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class fr extends Sr{}class vn extends Sr{constructor(t){super(),this.elements=t}}function vu(n,t){const e=wu(t);for(const r of n.elements)e.some(s=>Nt(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Sr{constructor(t){super(),this.elements=t}}function Iu(n,t){let e=wu(t);for(const r of n.elements)e=e.filter(s=>!Nt(s,r));return{arrayValue:{values:e}}}class mr extends Sr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Jo(n){return tt(n.integerValue||n.doubleValue)}function wu(n){return Ks(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Kd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof vn&&s instanceof vn||r instanceof In&&s instanceof In?Pe(r.elements,s.elements,Nt):r instanceof mr&&s instanceof mr?Nt(r.Re,s.Re):r instanceof fr&&s instanceof fr}(n.transform,t.transform)}class Qd{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class br{}function Au(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Cu(n.key,Vt.none()):new wn(n.key,n.data,Vt.none());{const e=n.data,r=It.empty();let s=new it(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ae(n.key,r,new Rt(s.toArray()),Vt.none())}}function Wd(n,t,e){n instanceof wn?function(s,o,a){const l=s.value.clone(),h=ta(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ae?function(s,o,a){if(!er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ta(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ru(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof wn?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=o.value.clone(),m=ea(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ae?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=ea(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ru(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Xd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Tu(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function Zo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pe(r,s,(o,a)=>Kd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends br{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ae extends br{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ru(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ta(n,t,e){const r=new Map;Q(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Gd(a,l,e[s]))}return r}function ea(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Hd(o,a,t))}return r}class Cu extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yd extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Wd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Au(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,r)=>Zo(e,r))&&Pe(this.baseMutations,t.baseMutations,(e,r)=>Zo(e,r))}}class Ys{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return Bd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ys(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,$;function ef(n){switch(n){case b.OK:return M(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Su(n){if(n===void 0)return jt("GRPC error has no .code"),b.UNKNOWN;switch(n){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return M(39323,{code:n})}}($=nt||(nt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Yt([4294967295,4294967295],0);function na(n){const t=Xa().encode(n),e=new qa;return e.update(t),new Uint8Array(e.digest())}function ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([s,o],0)]}class Js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Yt.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(Yt.fromNumber(r)));return s.compare(nf)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=na(t),[r,s]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Js(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const e=na(t),[r,s]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pr(L.min(),s,new J(U),qt(),q())}}class An{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new An(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class bu{constructor(t,e){this.targetId=t,this.Ce=e}}class Pu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class sa{constructor(){this.Fe=0,this.Me=ia(),this.xe=ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=q(),e=q(),r=q();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new An(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=ia()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Q(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class rf{constructor(t){this.ze=t,this.je=new Map,this.He=qt(),this.Je=Xn(),this.Ye=Xn(),this.Ze=new J(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(bs(o))if(r===0){const a=new O(o.path);this.tt(e,a,yt.newNoDocument(a,L.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const l=this.ct(t),h=l?this.lt(l,t,a):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ne(r).toUint8Array()}catch(h){if(h instanceof tu)return be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Js(a,s,o)}catch(h){return be(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.pe===0?null:l}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const l=this._t(a);if(l){if(o.current&&bs(l.target)){const h=new O(l.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,yt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=q();this.Ye.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new Pr(t,e,this.Ze,this.He,r);return this.He=qt(),this.Je=Xn(),this.Ye=Xn(),this.Ze=new J(U),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new sa,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new it(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new it(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new sa),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Xn(){return new J(O.comparator)}function ia(){return new J(O.comparator)}const sf={asc:"ASCENDING",desc:"DESCENDING"},of={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},af={and:"AND",or:"OR"};class uf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vs(n,t){return n.useProto3Json||vr(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function cf(n,t){return pr(n,t.toTimestamp())}function Dt(n){return Q(!!n,49232),L.fromTimestamp(function(e){const r=ee(e);return new st(r.seconds,r.nanos)}(n))}function Zs(n,t){return Ds(n,t).canonicalString()}function Ds(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Du(n){const t=Y.fromString(n);return Q(Mu(t),10190,{key:t.toString()}),t}function Ns(n,t){return Zs(n.databaseId,t.path)}function ms(n,t){const e=Du(t);if(e.get(1)!==n.databaseId.projectId)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(ku(e))}function Nu(n,t){return Zs(n.databaseId,t)}function lf(n){const t=Du(n);return t.length===4?Y.emptyPath():ku(t)}function ks(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ku(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oa(n,t,e){return{name:Ns(n,t),fields:e.value.mapValue.fields}}function hf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(Q(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const m=f.code===void 0?b.UNKNOWN:Su(f.code);return new x(m,f.message||"")}(a);e=new Pu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),l=new It({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];e=new nr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=yt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new nr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new tf(s,o),l=r.targetId;e=new bu(l,a)}}return e}function df(n,t){let e;if(t instanceof wn)e={update:oa(n,t.key,t.value)};else if(t instanceof Cu)e={delete:Ns(n,t.key)};else if(t instanceof ae)e={update:oa(n,t.key,t.data),updateMask:vf(t.fieldMask)};else{if(!(t instanceof Yd))return M(16599,{ft:t.type});e={verify:Ns(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof In)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mr)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:cf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function ff(n,t){return n&&n.length>0?(Q(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Dt(s.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new Qd(a,s.transformResults||[])}(e,t))):[]}function mf(n,t){return{documents:[Nu(n,t.path)]}}function pf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Nu(n,s);const o=function(f){if(f.length!==0)return Ou(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(T){return{field:Ae(T.field),direction:yf(T.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Vs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function gf(n){let t=lf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const T=xu(E);return T instanceof kt&&lu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(T=>function(P){return new dr(Re(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(e.orderBy));let l=null;e.limit&&(l=function(E){let T;return T=typeof E=="object"?E.value:E,vr(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(E){const T=!!E.before,C=E.values||[];return new hr(C,T)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const T=!E.before,C=E.values||[];return new hr(C,T)}(e.endAt)),xd(t,s,a,o,l,"F",h,f)}function _f(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Re(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Re(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Re(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>xu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function yf(n){return sf[n]}function Ef(n){return of[n]}function Tf(n){return af[n]}function Ae(n){return{fieldPath:n.canonicalString()}}function Re(n){return lt.fromServerFormat(n.fieldPath)}function Ou(n){return n instanceof rt?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(e.field),op:Ef(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>Ou(s));return r.length===1?r[0]:{compositeFilter:{op:Tf(e.op),filters:r}}}(n):M(54877,{filter:n})}function vf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,r,s,o=L.min(),a=L.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.wt=t}}function wf(n){const t=gf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Cn=new Rf}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(te.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new it(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Lu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ne(0)}static lr(){return new Ne(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="LruGarbageCollector",Cf=1048576;function ca([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class Sf{constructor(t){this.Er=t,this.buffer=new it(ca),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ca(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(ua,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ue(e)?N(ua,"Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.mr(3e5)})}}class Pf{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Tr.le);const r=new Sf(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(aa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),aa):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,l,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,l=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(f=Date.now(),Ie()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function Vf(n,t){return new Pf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.changes=new ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mn(r.mutation,s,Rt.empty(),st.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=fe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=an();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=qt();const a=fn(),l=function(){return fn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ae)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),mn(m.mutation,f,m.mutation.getFieldMask(),st.now())):a.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var E;return l.set(f,new Nf(m,(E=a.get(f))!==null&&E!==void 0?E:null))}),l))}recalculateAndSaveOverlays(t,e){const r=fn();let s=new J((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Rt.empty();m=l.applyToLocalView(f,m),r.set(h,m);const E=(s.get(l.batchId)||q()).add(h);s=s.insert(l.batchId,E)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,E=yu();m.forEach(T=>{if(!o.has(T)){const C=Au(e.get(T),r.get(T));C!==null&&E.set(T,C),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Od(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(fe());let l=_n,h=o;return a.next(f=>S.forEach(f,(m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(T=>{h=h.insert(m,T)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:l,changes:_u(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=an();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=an();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const f=function(E,T){return new wr(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((E,T)=>{a=a.insert(E,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,yt.newInvalidDocument(m)))});let l=an();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,f,Rt.empty(),st.now()),Cr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return S.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:wf(s.bundledQuery),readTime:Dt(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.overlays=new J(O.comparator),this.Qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fe();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=fe(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=fe(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return S.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zd(e,r));let o=this.Qr.get(e);o===void 0&&(o=q(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.$r=new it(ot.Ur),this.Kr=new it(ot.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new ot(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new ot(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new O(new Y([])),r=new ot(e,t),s=new ot(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new O(new Y([])),r=new ot(e,t),s=new ot(e,t+1);let o=q();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ot(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return O.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new it(ot.Ur)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jd(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new ot(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Hs:this.nr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),s=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(U);return e.forEach(s=>{const o=new ot(s,0),a=new ot(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],l=>{r=r.add(l.Zr)})}),S.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ot(new O(o),0);let l=new it(U);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Zr)),!0)},a),S.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return S.forEach(e.mutations,s=>{const o=new ot(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new ot(e,0),s=this.Xr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.ii=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||dd(hd(m),r)<=0||(s.has(m.key)||Cr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}si(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Uf(this)}getSize(t){return S.resolve(this.size)}}class Uf extends Df{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t){this.persistence=t,this.oi=new ge(e=>Qs(e),Ws),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new ti,this.targetCount=0,this.ui=Ne.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),S.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Tr(e),S.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this.ci={},this.overlays={},this.li=new Tr(0),this.hi=!1,this.hi=!0,this.Pi=new Mf,this.referenceDelegate=t(this),this.Ti=new Bf(this),this.indexManager=new Af,this.remoteDocumentCache=function(s){return new Ff(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new If(e),this.Ei=new xf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Of,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Lf(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new jf(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return S.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class jf extends md{constructor(t){super(),this.currentSequenceNumber=t}}class ei{constructor(t){this.persistence=t,this.Vi=new ti,this.mi=null}static fi(t){return new ei(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.gi,r=>{const s=O.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return S.or([()=>S.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.yi=new ge(r=>_d(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vf(this,e)}static fi(t,e){return new gr(t,e)}di(){}Ai(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return S.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(l=>{l||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),S.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}Dr(t,e,r){return S.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ni(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Ol()?8:pd(kl())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new qf;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,a,l.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(Ie()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",we(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),S.resolve()):(Ie()<=z.DEBUG&&N("QueryEngine","Query:",we(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Ie()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",we(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):S.resolve())}ws(t,e){if(Yo(e))return S.resolve(null);let r=Pt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ps(e,null,"F"),r=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.ys.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.vs(e,l);return this.Cs(e,f,a,h.readTime)?this.ws(t,Ps(e,null,"F")):this.Fs(t,f,e,h)}))})))}bs(t,e,r,s){return Yo(e)||s.isEqual(L.min())?S.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?S.resolve(null):(Ie()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),we(e)),this.Fs(t,a,e,ld(s,_n)).next(l=>l))})}vs(t,e){let r=new it(pu(t));return e.forEach((s,o)=>{Cr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Ie()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",we(e)),this.ys.getDocumentsMatchingQuery(t,e,te.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="LocalStore",zf=3e8;class Hf{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new J(U),this.Os=new ge(o=>Qs(o),Ws),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Gf(n,t,e,r){return new Hf(n,t,e,r)}async function Uu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:l}))})})}function Kf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,m){const E=f.batch,T=E.keys();let C=S.resolve();return T.forEach(P=>{C=C.next(()=>m.getEntry(h,P)).next(k=>{const V=f.docVersions.get(P);Q(V!==null,48541),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),m.addEntry(k)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=q();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Bu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Qf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const l=[];t.targetChanges.forEach((m,E)=>{const T=s.get(E);if(!T)return;l.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,E)));let C=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(E,C),function(k,V,H){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=zf?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(T,C,m)&&l.push(e.Ti.updateTargetData(o,C))});let h=qt(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Wf(o,a,t.documentUpdates).next(m=>{h=m.qs,f=m.Qs})),!r.isEqual(L.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(E=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=s,o))}function Wf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=qt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(ri,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function Xf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Hs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Yf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function xs(n,t,e){const r=F(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ue(a))throw a;N(ri,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function la(n,t,e){const r=F(n);let s=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const E=F(h),T=E.Os.get(m);return T!==void 0?S.resolve(E.xs.get(T)):E.Ti.getTargetData(f,m)}(r,a,Pt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:q())).next(l=>(Jf(r,Ld(t),l),{documents:l,$s:o})))}function Jf(n,t,e){let r=n.Ns.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class ha{constructor(){this.activeTargetIds=$d()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zf{constructor(){this.xo=new ha,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new ha,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="ConnectivityMonitor";class fa{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(da,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(da,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn=null;function Os(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RestConnection",em={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nm{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===cr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=Os(),l=this.jo(t,e.toUriEncodedString());N(ps,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:f}=new URL(l),m=qs(f);return this.Jo(t,l,h,r,m).then(E=>(N(ps,`Received RPC '${t}' ${a}: `,E),E),E=>{throw be(ps,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",r),E})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Le}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=em[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class sm extends nm{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Os();return new Promise((l,h)=>{const f=new $a;f.setWithCredentials(!0),f.listenOnce(za.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Jn.NO_ERROR:const E=f.getResponseJson();N(gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case Jn.TIMEOUT:N(gt,`RPC '${t}' ${a} timed out`),h(new x(b.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const T=f.getStatus();if(N(gt,`RPC '${t}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const k=function(H){const B=H.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(B)>=0?B:b.UNKNOWN}(P.status);h(new x(k,P.message))}else h(new x(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new x(b.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:t,streamId:a,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{N(gt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);N(gt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)})}I_(t,e,r){const s=Os(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ka(),l=Ga(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(gt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);this.E_(E);let T=!1,C=!1;const P=new rm({Zo:V=>{C?N(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(T||(N(gt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),T=!0),N(gt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},Xo:()=>E.close()}),k=(V,H,B)=>{V.listen(H,G=>{try{B(G)}catch(et){setTimeout(()=>{throw et},0)}})};return k(E,on.EventType.OPEN,()=>{C||(N(gt,`RPC '${t}' stream ${s} transport opened.`),P.__())}),k(E,on.EventType.CLOSE,()=>{C||(C=!0,N(gt,`RPC '${t}' stream ${s} transport closed`),P.u_(),this.d_(E))}),k(E,on.EventType.ERROR,V=>{C||(C=!0,be(gt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.u_(new x(b.UNAVAILABLE,"The operation could not be completed")))}),k(E,on.EventType.MESSAGE,V=>{var H;if(!C){const B=V.data[0];Q(!!B,16349);const G=B,et=(G==null?void 0:G.error)||((H=G[0])===null||H===void 0?void 0:H.error);if(et){N(gt,`RPC '${t}' stream ${s} received error:`,et);const xt=et.status;let at=function(_){const y=nt[_];if(y!==void 0)return Su(y)}(xt),I=et.message;at===void 0&&(at=b.INTERNAL,I="Unknown error status: "+xt+" with message "+et.message),C=!0,P.u_(new x(at,I)),E.close()}else N(gt,`RPC '${t}' stream ${s} received:`,B),P.c_(B)}}),k(l,Ha.STAT_EVENT,V=>{V.stat===ws.PROXY?N(gt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===ws.NOPROXY&&N(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){return new uf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="PersistentStream";class qu{constructor(t,e,r,s,o,a,l,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new ju(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new x(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return N(ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(N(ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class im extends qu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=hf(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=ks(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=bs(h)?{documents:mf(o,h)}:{query:pf(o,h).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Vu(o,a.resumeToken);const f=Vs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=pr(o,a.snapshotVersion.toTimestamp());const f=Vs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=_f(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=ks(this.serializer),e.removeTarget=t,this.Q_(e)}}class om extends qu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return Q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=ff(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=ks(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>df(this.serializer,r))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{}class um extends am{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,Ds(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(b.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(t,Ds(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(b.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class cm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(jt(e),this.ua=!1):N("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="RemoteStore";class lm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{_e(this)&&(N(pe,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.da.add(4),await Rn(f),f.Va.set("Unknown"),f.da.delete(4),await Dr(f)}(this))})}),this.Va=new cm(r,s)}}async function Dr(n){if(_e(n))for(const t of n.Aa)await t(!0)}async function Rn(n){for(const t of n.Aa)await t(!1)}function $u(n,t){const e=F(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),ai(e)?oi(e):Be(e).N_()&&ii(e,t))}function si(n,t){const e=F(n),r=Be(e);e.Ea.delete(t),r.N_()&&zu(e,t),e.Ea.size===0&&(r.N_()?r.k_():_e(e)&&e.Va.set("Unknown"))}function ii(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Be(n).Z_(t)}function zu(n,t){n.ma.Ke(t),Be(n).X_(t)}function oi(n){n.ma=new rf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Be(n).start(),n.Va.ca()}function ai(n){return _e(n)&&!Be(n).O_()&&n.Ea.size>0}function _e(n){return F(n).da.size===0}function Hu(n){n.ma=void 0}async function hm(n){n.Va.set("Online")}async function dm(n){n.Ea.forEach((t,e)=>{ii(n,t)})}async function fm(n,t){Hu(n),ai(n)?(n.Va.Pa(t),oi(n)):n.Va.set("Unknown")}async function mm(n,t,e){if(n.Va.set("Online"),t instanceof Pu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(n,t)}catch(r){N(pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _r(n,r)}else if(t instanceof nr?n.ma.Xe(t):t instanceof bu?n.ma.ot(t):n.ma.nt(t),!e.isEqual(L.min()))try{const r=await Bu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.ma.It(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(f);m&&o.Ea.set(f,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),zu(o,h);const E=new Qt(m.target,h,f,m.sequenceNumber);ii(o,E)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){N(pe,"Failed to raise snapshot:",r),await _r(n,r)}}async function _r(n,t,e){if(!Ue(t))throw t;n.da.add(1),await Rn(n),n.Va.set("Offline"),e||(e=()=>Bu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(pe,"Retrying IndexedDB access"),await e(),n.da.delete(1),await Dr(n)})}function Gu(n,t){return t().catch(e=>_r(n,e,t))}async function Nr(n){const t=F(n),e=se(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Hs;for(;pm(t);)try{const s=await Xf(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,gm(t,s)}catch(s){await _r(t,s)}Ku(t)&&Qu(t)}function pm(n){return _e(n)&&n.Ia.length<10}function gm(n,t){n.Ia.push(t);const e=se(n);e.N_()&&e.ea&&e.ta(t.mutations)}function Ku(n){return _e(n)&&!se(n).O_()&&n.Ia.length>0}function Qu(n){se(n).start()}async function _m(n){se(n).ia()}async function ym(n){const t=se(n);for(const e of n.Ia)t.ta(e.mutations)}async function Em(n,t,e){const r=n.Ia.shift(),s=Ys.from(r,t,e);await Gu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Nr(n)}async function Tm(n,t){t&&se(n).ea&&await async function(r,s){if(function(a){return ef(a)&&a!==b.ABORTED}(s.code)){const o=r.Ia.shift();se(r).L_(),await Gu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Nr(r)}}(n,t),Ku(n)&&Qu(n)}async function pa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N(pe,"RemoteStore received new credentials");const r=_e(e);e.da.add(3),await Rn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Dr(e)}async function vm(n,t){const e=F(n);t?(e.da.delete(2),await Dr(e)):t||(e.da.add(2),await Rn(e),e.Va.set("Unknown"))}function Be(n){return n.fa||(n.fa=function(e,r,s){const o=F(e);return o.oa(),new im(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:hm.bind(null,n),n_:dm.bind(null,n),i_:fm.bind(null,n),Y_:mm.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),ai(n)?oi(n):n.Va.set("Unknown")):(await n.fa.stop(),Hu(n))})),n.fa}function se(n){return n.ga||(n.ga=function(e,r,s){const o=F(e);return o.oa(),new om(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:_m.bind(null,n),i_:Tm.bind(null,n),na:ym.bind(null,n),ra:Em.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await Nr(n)):(await n.ga.stop(),n.Ia.length>0&&(N(pe,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new ui(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Ue(n))return new x(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static emptySet(t){return new Se(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=an(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.pa=new J(O.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class ke{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new ke(t,e,Se.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class wm{constructor(){this.queries=_a(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=_a(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new x(b.ABORTED,"Firestore shutting down"))}}function _a(){return new ge(n=>mu(n),Rr)}async function Wu(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new Im,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ci(a,`Initialization of query '${we(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&li(e)}async function Xu(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Am(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&li(e)}function Rm(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function li(n){n.Ca.forEach(t=>{t.next()})}var Ms,ya;(ya=Ms||(Ms={})).xa="default",ya.Cache="cache";class Yu{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ms.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class Cm{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.Za=pu(t),this.Xa=new Se(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new ga,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const T=s.get(m),C=Cr(this.query,E)?E:null,P=!!T&&this.mutatedKeys.has(T.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;T&&C?T.data.isEqual(C.data)?P!==k&&(r.track({type:3,doc:C}),V=!0):this.ru(T,C)||(r.track({type:2,doc:C}),V=!0,(h&&this.Za(C,h)>0||f&&this.Za(C,f)<0)&&(l=!0)):!T&&C?(r.track({type:0,doc:C}),V=!0):T&&!C&&(r.track({type:1,doc:T}),V=!0,(h||f)&&(l=!0)),V&&(C?(a=a.add(C),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:l,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,E)=>function(C,P){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:V})}};return k(C)-k(P)}(m.type,E.type)||this.Za(m.doc,E.doc)),this.iu(r),s=s!=null&&s;const l=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,f=h!==this.Ja;return this.Ja=h,a.length!==0||f?{snapshot:new ke(this.query,t.Xa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ga,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=q(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Zu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Ju(r))}),e}au(t){this.Ha=t.$s,this.Ya=q();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return ke.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const hi="SyncEngine";class Sm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bm{constructor(t){this.key=t,this.cu=!1}}class Pm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new ge(l=>mu(l),Rr),this.Pu=new Map,this.Tu=new Set,this.Iu=new J(O.comparator),this.Eu=new Map,this.du=new ti,this.Au={},this.Ru=new Map,this.Vu=Ne.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Vm(n,t,e=!0){const r=ic(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await tc(r,t,e,!0),s}async function Dm(n,t){const e=ic(n);await tc(e,t,!0,!1)}async function tc(n,t,e,r){const s=await Yf(n.localStore,Pt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Nm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&$u(n.remoteStore,s),l}async function Nm(n,t,e,r,s){n.fu=(E,T,C)=>async function(k,V,H,B){let G=V.view.tu(H);G.Cs&&(G=await la(k.localStore,V.query,!1).then(({documents:I})=>V.view.tu(I,G)));const et=B&&B.targetChanges.get(V.targetId),xt=B&&B.targetMismatches.get(V.targetId)!=null,at=V.view.applyChanges(G,k.isPrimaryClient,et,xt);return Ta(k,V.targetId,at.ou),at.snapshot}(n,E,T,C);const o=await la(n.localStore,t,!0),a=new Cm(t,o.$s),l=a.tu(o.documents),h=An.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Ta(n,e,f.ou);const m=new Sm(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),f.snapshot}async function km(n,t,e){const r=F(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Rr(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&si(r.remoteStore,s.targetId),Ls(r,s.targetId)}).catch(Fe)):(Ls(r,s.targetId),await xs(r.localStore,s.targetId,!0))}async function xm(n,t){const e=F(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),si(e.remoteStore,r.targetId))}async function Om(n,t,e){const r=qm(n);try{const s=await function(a,l){const h=F(a),f=st.now(),m=l.reduce((C,P)=>C.add(P.key),q());let E,T;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=qt(),k=q();return h.Bs.getEntries(C,m).next(V=>{P=V,P.forEach((H,B)=>{B.isValidDocument()||(k=k.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,P)).next(V=>{E=V;const H=[];for(const B of l){const G=Xd(B,E.get(B.key).overlayedDocument);G!=null&&H.push(new ae(B.key,G,au(G.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,H,l)}).next(V=>{T=V;const H=V.applyToLocalDocumentSet(E,k);return h.documentOverlayCache.saveOverlays(C,V.batchId,H)})}).then(()=>({batchId:T.batchId,changes:_u(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.Au[a.currentUser.toKey()];f||(f=new J(U)),f=f.insert(l,h),a.Au[a.currentUser.toKey()]=f}(r,s.batchId,e),await Cn(r,s.changes),await Nr(r.remoteStore)}catch(s){const o=ci(s,"Failed to persist write");e.reject(o)}}async function ec(n,t){const e=F(n);try{const r=await Qf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?Q(a.cu,14607):s.removedDocuments.size>0&&(Q(a.cu,42227),a.cu=!1))}),await Cn(e,r,t)}catch(r){await Fe(r)}}function Ea(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const l=a.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((m,E)=>{for(const T of E.Sa)T.Fa(l)&&(f=!0)}),f&&li(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,yt.newNoDocument(o,L.min()));const l=q().add(o),h=new Pr(L.min(),new Map,new J(U),a,l);await ec(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),di(r)}else await xs(r.localStore,t,!1).then(()=>Ls(r,t,e)).catch(Fe)}async function Lm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Kf(e.localStore,t);rc(e,r,null),nc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,s)}catch(s){await Fe(s)}}async function Fm(n,t,e){const r=F(n);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next(E=>(Q(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);rc(r,t,e),nc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,s)}catch(s){await Fe(s)}}function nc(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function rc(n,t,e){const r=F(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}function Ls(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||sc(n,r)})}function sc(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(si(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),di(n))}function Ta(n,t,e){for(const r of e)r instanceof Ju?(n.du.addReference(r.key,t),Um(n,r)):r instanceof Zu?(N(hi,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||sc(n,r.key)):M(19791,{pu:r})}function Um(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(N(hi,"New document in limbo: "+e),n.Tu.add(r),di(n))}function di(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new O(Y.fromString(t)),r=n.Vu.next();n.Eu.set(r,new bm(e)),n.Iu=n.Iu.insert(e,r),$u(n.remoteStore,new Qt(Pt(Ar(e.path)),r,"TargetPurposeLimboResolution",Tr.le))}}async function Cn(n,t,e){const r=F(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,h)=>{a.push(r.fu(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=ni.Rs(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>S.forEach(f,T=>S.forEach(T.ds,C=>m.persistence.referenceDelegate.addReference(E,T.targetId,C)).next(()=>S.forEach(T.As,C=>m.persistence.referenceDelegate.removeReference(E,T.targetId,C)))))}catch(E){if(!Ue(E))throw E;N(ri,"Failed to update sequence numbers: "+E)}for(const E of f){const T=E.targetId;if(!E.fromCache){const C=m.xs.get(T),P=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(P);m.xs=m.xs.insert(T,k)}}}(r.localStore,o))}async function Bm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N(hi,"User change. New user:",t.toKey());const r=await Uu(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(l=>{l.forEach(h=>{h.reject(new x(b.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.ks)}}function jm(n,t){const e=F(n),r=e.Eu.get(t);if(r&&r.cu)return q().add(r.key);{let s=q();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const l=e.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function ic(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ec.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mm.bind(null,t),t.lu.Y_=Am.bind(null,t.eventManager),t.lu.gu=Rm.bind(null,t.eventManager),t}function qm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fm.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Gf(this.persistence,new $f,t.initialUser,this.serializer)}Su(t){return new Fu(ei.fi,this.serializer)}bu(t){return new Zf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class $m extends yr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){Q(this.persistence.referenceDelegate instanceof gr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bf(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Fu(r=>gr.fi(r,e),this.serializer)}}class Fs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ea(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wm}()}createDatastore(t){const e=Vr(t.databaseInfo.databaseId),r=function(o){return new sm(o)}(t.databaseInfo);return function(o,a,l,h){return new um(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new lm(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ea(this.syncEngine,e,0),function(){return fa.C()?new fa:new tm}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,m){const E=new Pm(s,o,a,l,h,f);return m&&(E.mu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);N(pe,"RemoteStore shutting down."),o.da.add(5),await Rn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Fs.provider={build:()=>new Fs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="FirestoreClient";class zm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ie,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ie,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ci(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function _s(n,t){n.asyncQueue.verifyOperationInProgress(),N(ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Uu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function va(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Hm(n);N(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>pa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>pa(t.remoteStore,s)),n._onlineComponents=t}async function Hm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ie,"Using user provided OfflineComponentProvider");try{await _s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;be("Error using user provided cache. Falling back to memory cache: "+e),await _s(n,new yr)}}else N(ie,"Using default OfflineComponentProvider"),await _s(n,new $m(void 0));return n._offlineComponents}async function ac(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ie,"Using user provided OnlineComponentProvider"),await va(n,n._uninitializedComponentsProvider._online)):(N(ie,"Using default OnlineComponentProvider"),await va(n,new Fs))),n._onlineComponents}function Gm(n){return ac(n).then(t=>t.syncEngine)}async function Us(n){const t=await ac(n),e=t.eventManager;return e.onListen=Vm.bind(null,t.syncEngine),e.onUnlisten=km.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=xm.bind(null,t.syncEngine),e}function Km(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const m=new oc({next:T=>{m.xu(),a.enqueueAndForget(()=>Xu(o,E));const C=T.docs.has(l);!C&&T.fromCache?f.reject(new x(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&T.fromCache&&h&&h.source==="server"?f.reject(new x(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(T)},error:T=>f.reject(T)}),E=new Yu(Ar(l.path),m,{includeMetadataChanges:!0,Qa:!0});return Wu(o,E)}(await Us(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,t,e){if(!e)throw new x(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qm(n,t,e,r){if(t===!0&&r===!0)throw new x(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function wa(n){if(!O.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Aa(n){if(O.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Ft(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new x(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firestore.googleapis.com",Ra=!0;class Ca{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=Ra}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ra;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Lu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cf)throw new x(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ia.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ia.delete(e),r.terminate())}(this),Promise.resolve()}}function Wm(n,t,e,r={}){var s;n=Ft(n,kr);const o=qs(t),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(bl(`https://${h}`),Nl("Firestore",!0)),a.host!==lc&&a.host!==h&&be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!ir(f,l)&&(n._setSettings(f),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=_t.MOCK_USER;else{m=Pl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new x(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new _t(T)}n._authCredentials=new nd(new Wa(m,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xr(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Zt extends xr{constructor(t,e,r){super(t,e,Ar(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new O(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function Xm(n,t,...e){if(n=Ut(n),cc("collection","path",t),n instanceof kr){const r=Y.fromString(t,...e);return Aa(r),new Zt(n,null,r)}{if(!(n instanceof wt||n instanceof Zt))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Aa(r),new Zt(n.firestore,null,r)}}function Or(n,t,...e){if(n=Ut(n),arguments.length===1&&(t=Ya.newId()),cc("doc","path",t),n instanceof kr){const r=Y.fromString(t,...e);return wa(r),new wt(n,null,new O(r))}{if(!(n instanceof wt||n instanceof Zt))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return wa(r),new wt(n.firestore,n instanceof Zt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="AsyncQueue";class ba{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new ju(this,"async_queue_retry"),this.rc=()=>{const r=gs();r&&N(Sa,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Jt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!Ue(t))throw t;N(Sa,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,jt("INTERNAL UNHANDLED ERROR: ",Pa(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=ui.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&M(47125,{cc:Pa(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Pa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class xe extends kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ba,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ba(t),this._firestoreClient=void 0,await t}}}function Ym(n,t){const e=typeof n=="object"?n:qh(),r=typeof n=="string"?n:cr,s=Lh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Cl("firestore");o&&Wm(s,...o)}return s}function mi(n){if(n._terminated)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jm(n),n._firestoreClient}function Jm(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,m){return new Td(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,uc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oe(ht.fromBase64String(t))}catch(e){throw new x(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Oe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=/^__.*__$/;class tp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class hc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function dc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:n})}}class yi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Er(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(dc(this.Ic)&&Zm.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class ep{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Vr(t)}bc(t,e,r,s=!1){return new yi({Ic:t,methodName:e,wc:r,path:lt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fc(n){const t=n._freezeSettings(),e=Vr(n._databaseId);return new ep(n._databaseId,!!t.ignoreUndefinedProperties,e)}function np(n,t,e,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,t,e,s);Ei("Data must be an object, but it was:",a,r);const l=mc(r,a);let h,f;if(o.merge)h=new Rt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const T=Bs(t,E,e);if(!a.contains(T))throw new x(b.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);gc(m,T)||m.push(T)}h=new Rt(m),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new tp(new It(l),h,f)}class Lr extends pi{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}function rp(n,t,e,r){const s=n.bc(1,t,e);Ei("Data must be an object, but it was:",s,r);const o=[],a=It.empty();oe(r,(h,f)=>{const m=Ti(t,h,e);f=Ut(f);const E=s.mc(m);if(f instanceof Lr)o.push(m);else{const T=Fr(f,E);T!=null&&(o.push(m),a.set(m,T))}});const l=new Rt(o);return new hc(a,l,s.fieldTransforms)}function sp(n,t,e,r,s,o){const a=n.bc(1,t,e),l=[Bs(t,r,e)],h=[s];if(o.length%2!=0)throw new x(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)l.push(Bs(t,o[T])),h.push(o[T+1]);const f=[],m=It.empty();for(let T=l.length-1;T>=0;--T)if(!gc(f,l[T])){const C=l[T];let P=h[T];P=Ut(P);const k=a.mc(C);if(P instanceof Lr)f.push(C);else{const V=Fr(P,k);V!=null&&(f.push(C),m.set(C,V))}}const E=new Rt(f);return new hc(m,E,a.fieldTransforms)}function Fr(n,t){if(pc(n=Ut(n)))return Ei("Unsupported field value:",t,n),mc(n,t);if(n instanceof pi)return function(r,s){if(!dc(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Fr(l,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:pr(s.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(s.serializer,o)}}if(r instanceof gi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oe)return{bytesValue:Vu(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _i)return function(a,l){return{mapValue:{fields:{[iu]:{stringValue:ou},[lr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.gc("VectorValues must only contain numeric values.");return Xs(l.serializer,f)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${fi(r)}`)}(n,t)}function mc(n,t){const e={};return Za(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oe(n,(r,s)=>{const o=Fr(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function pc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof gi||n instanceof Oe||n instanceof wt||n instanceof pi||n instanceof _i)}function Ei(n,t,e){if(!pc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=fi(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function Bs(n,t,e){if((t=Ut(t))instanceof Mr)return t._internalPath;if(typeof t=="string")return Ti(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const ip=new RegExp("[~\\*/\\[\\]]");function Ti(n,t,e){if(t.search(ip)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Mr(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(b.INVALID_ARGUMENT,l+n+h)}function gc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class op extends _c{data(){return super.data()}}function yc(n,t){return typeof t=="string"?Ti(n,t):t instanceof Mr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return oe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[lr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>tt(a.doubleValue));return new _i(o)}convertGeoPoint(t){return new gi(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ir(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=ee(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);Q(Mu(r),9688,{name:t});const s=new En(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ec extends _c{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class rr extends Ec{data(t={}){return super.data(t)}}class lp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new cn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new rr(this._firestore,this._userDataWriter,r.key,r,new cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new cn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new cn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:hp(l.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){n=Ft(n,wt);const t=Ft(n.firestore,xe);return Km(mi(t),n._key).then(e=>Ic(t,n,e))}class Tc extends up{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function fp(n,t,e,...r){n=Ft(n,wt);const s=Ft(n.firestore,xe),o=fc(s);let a;return a=typeof(t=Ut(t))=="string"||t instanceof Mr?sp(o,"updateDoc",n._key,t,e,r):rp(o,"updateDoc",n._key,t),vc(s,[a.toMutation(n._key,Vt.exists(!0))])}function mp(n,t){const e=Ft(n.firestore,xe),r=Or(n),s=cp(n.converter,t);return vc(e,[np(fc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function pp(n,...t){var e,r,s;n=Ut(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Va(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Va(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,f,m;if(n instanceof wt)f=Ft(n.firestore,xe),m=Ar(n._key.path),h={next:E=>{t[a]&&t[a](Ic(f,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Ft(n,xr);f=Ft(E.firestore,xe),m=E._query;const T=new Tc(f);h={next:C=>{t[a]&&t[a](new lp(f,T,E,C))},error:t[a+1],complete:t[a+2]},ap(n._query)}return function(T,C,P,k){const V=new oc(k),H=new Yu(C,V,P);return T.asyncQueue.enqueueAndForget(async()=>Wu(await Us(T),H)),()=>{V.xu(),T.asyncQueue.enqueueAndForget(async()=>Xu(await Us(T),H))}}(mi(f),m,l,h)}function vc(n,t){return function(r,s){const o=new Jt;return r.asyncQueue.enqueueAndForget(async()=>Om(await Gm(r),s,o)),o.promise}(mi(n),t)}function Ic(n,t,e){const r=e.docs.get(t._key),s=new Tc(n);return new Ec(n,s,t._key,r,new cn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Le=s})(jh),ar(new pn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new xe(new rd(r.getProvider("auth-internal")),new od(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ce(xo,Oo,t),Ce(xo,Oo,"esm2017")})();const gp={apiKey:"AIzaSyA1YHZuK7xQzrGf2sVPo8Qax__FqLaFg_g",authDomain:"boop-chat.firebaseapp.com",projectId:"boop-chat",storageBucket:"boop-chat.firebasestorage.app",messagingSenderId:"86390385381",appId:"1:86390385381:web:899e240ed5dedab2a8c20c",measurementId:"G-R49YGVYMFQ"},_p=Ua(gp),Ur=Ym(_p),yp=async n=>(await mp(Xm(Ur,"sessions"),n)).id,Ep=async n=>{const t=await dp(Or(Ur,"sessions",n));return t.exists()?(console.log("The data has been found at Firestore!"),t.data()):(console.log("The data doesn't exist at Firestore!"),null)},Tp=async(n,t)=>{fp(Or(Ur,"sessions",n),t)},vp=async(n,t,e)=>{const r=Or(Ur,"sessions",n),s=pp(r,async o=>{var l;if(!o.exists())return;const a=o.data();a.receiverDescription&&((l=a.receiverCandidates)==null?void 0:l.length)>0&&(console.log("Receiver info available:",a),e.current=a.receiverName,t(a),s())});return s},Da=async(n,t,e,r,s,o,a,l,h)=>{t.current.onicecandidate=m=>{m.candidate?(console.log("Ice candidate found! Candidate = ",m.candidate),console.log(o.current),o.current.push(m.candidate.toJSON())):(console.log("The ice gathering state might have been completed by this time!"),console.log("State = ",t.current.iceGatheringState))},t.current.onicecandidateerror=m=>{console.warn("ICE candidate error:",m.errorCode,m.port,m.url)};const f=t.current.getConfiguration();if(console.log("ICE servers configured on this PC:",f.iceServers),n==="sender"){t.current.addTransceiver("video",{direction:"sendrecv"}),t.current.addTransceiver("audio",{direction:"sendrecv"}),e.current=t.current.createDataChannel("chat"),r.current=t.current.createDataChannel("image"),s.current=t.current.createDataChannel("video"),e.current.onopen=()=>{console.log("The data channel has been established!"),a(!0)},r.current.onopen=()=>{console.log("The image channel has been established!")},s.current.onopen=()=>{console.log("The video channel has been established!")};let m=await t.current.createOffer();console.log("The offer has been created!"),await t.current.setLocalDescription(m),console.log("The local description has been added!")}else{console.log(t.current);let m=await Ep(h);if(!m)return null;l.current=m.senderName,await Ip(t,m),console.log("The state of the peer connection = ",t.current.iceGatheringState)}console.log("The initial setup of the connection has been established.")},Ip=async(n,t)=>{console.log(t.senderDescription),await n.current.setRemoteDescription(t.senderDescription),console.log("The remote description has been added!"),n.current.getTransceivers().forEach(s=>{s.direction="sendrecv"});let r=await n.current.createAnswer();console.log("The answer has been created!"),await n.current.setLocalDescription(r),console.log("The local description has been added!");for(const s of t.senderCandidates)try{await n.current.addIceCandidate(s)}catch(o){console.error("Error adding ICE candidate:",o)}};async function wp(n,t,e,r){console.log("Starting the createLink function! At the beginning of the function, the state = ",n.iceGatheringState),console.log("The iceCandidate object looks like this: ",t.current);let s=await yp({senderName:e,senderDescription:{type:n.current.localDescription.type,sdp:n.current.localDescription.sdp},senderCandidates:t.current,receiverName:"",receiverDescription:"",receiverCandidates:""});return console.log("The session has been added to Firebase by the sender! Now, waiting for the receiver!"),vp(s,async o=>{await n.current.setRemoteDescription(new RTCSessionDescription(o.receiverDescription));for(const a of o.receiverCandidates)await n.current.addIceCandidate(new RTCIceCandidate(a))},r),s}async function Ap(n,t,e,r){return console.log("After the waiting, the state = ",n.current.iceGatheringState),await Tp(r,{receiverName:e,receiverDescription:{type:n.current.localDescription.type,sdp:n.current.localDescription.sdp},receiverCandidates:t.current}),"success"}const Rp=new URLSearchParams(window.location.search),Kt=Rp.get("link"),bp=()=>{const{peerConnection:n,iceCandidates:t,dataChannel:e,imageChannel:r,videoChannel:s,peerName:o,setConnected:a}=Gn.useContext(sl),{showNotification:l}=il(),[h,f]=Gn.useState(!1),m=Gn.useRef(null);function E(C){C.preventDefault(),navigator.clipboard.writeText(C.target.elements.link.value),l("The link has been copied!")}const T=async C=>{const P=new AudioContext;if(P.createBuffer(1,P.sampleRate*10,P.sampleRate),P.onstatechange=()=>{console.log("AudioContext state:",P.state)},C.preventDefault(),f(!0),Kt){let k=await Ap(n,t,m.current.value,Kt);console.log(k),k?k=="success"&&(n.current.ondatachannel=V=>{V.channel.label==="chat"&&(e.current=V.channel,console.log("The data channel has been established!"),a(!0)),V.channel.label==="image"&&(r.current=V.channel,console.log("The image channel has been established!")),V.channel.label==="video"&&(s.current=V.channel,console.log("The video channel has been established!"))}):alert("The link you gave doesn't exist.")}else{let k=await wp(n,t,m.current.value,o);m.current.value=`https://www.mukesharyal.com.np/boop?link=${k}`,m.current.disabled=!0,navigator.clipboard.writeText(m.current.value),l("The link has been copied!")}};return Gn.useEffect(()=>{Da(Kt?"receiver":"sender",n,e,r,s,t,a,o,Kt)},[]),j.jsxs(j.Fragment,{children:[j.jsx(ll,{}),j.jsx("main",{className:sn.mainContainer,children:j.jsx("section",{className:sn.inputCard,children:h?j.jsxs(j.Fragment,{children:[j.jsx("div",{className:sn.loaderWrapper,children:j.jsx("div",{className:sn.loader})}),j.jsx("h1",{children:Kt?"Joining the chat":"Waiting for other person to join"}),!Kt&&j.jsxs("form",{onSubmit:E,children:[j.jsx("input",{autoFocus:!0,spellCheck:!1,autoComplete:"off",name:"link",ref:m,title:"Copy this link",className:sn.linkInput}),j.jsx("br",{}),j.jsx("button",{name:"copyLinkButton",children:"Copy Link"})]})]}):j.jsxs(j.Fragment,{children:[j.jsxs("h1",{children:["Welcome to Boop.",j.jsx("br",{}),"Let's Get Started!"]}),j.jsxs("form",{onSubmit:T,children:[j.jsx("input",{name:"name",required:!0,minLength:2,maxLength:20,autoComplete:"off",type:"text",spellCheck:!1,placeholder:"Your Name",title:"Enter your name",id:"name",ref:m}),j.jsx("br",{}),Kt?j.jsx("button",{type:"submit",children:"Join Chat"}):j.jsx("button",{type:"submit",children:"Create Link"})]})]})})})]})};export{bp as default};
