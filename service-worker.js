if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const f=e=>n(e,o),c={module:{uri:o},exports:s,require:f};i[o]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(t(...e),s)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.e3161792357acd28d5e2.js",revision:null},{url:"img/favicon.png",revision:"ad890dceebaec2b49ccecafa292f936f"},{url:"index.html",revision:"6398a983a0a212e0f7360e28260efb91"},{url:"manifest.webmanifest",revision:"9e915b91f16a8b287b1ffc446086a1f3"}],{})}));
