if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>n(e,r),f={module:{uri:r},exports:o,require:c};a[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-efbd98cb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"949.bundle.js",revision:"2a8babbc0f3929c30e85764c74b3614e"},{url:"app.webmanifest",revision:"88fd36c39837e75932ac1b055636e368"},{url:"app~23e3893a.bundle.js",revision:"c25a316a9eb54a19d41dabdb00772f31"},{url:"app~23e3893a.css",revision:"bb343a09ca0896b4fd1d3049918be561"},{url:"app~49ea73a0.bundle.js",revision:"34c507e90749243a7fa4e3fab3182a93"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"650bbc87d8d61b70f1164a66f344f14b"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"70174baf9574ce8befc32a72e4131778"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon-small.png",revision:"e29eaab36bc13d40299610f7988373eb"},{url:"favicon.png",revision:"635220c8f01e4a546695ed0242902988"},{url:"index.html",revision:"c47e6d6f507a3b68c8d6283e64bb3f5f"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>"https://use.fontawesome.com"===e.origin),new e.StaleWhileRevalidate({cacheName:"icon",plugins:[]}),"GET"),e.registerRoute((({url:e})=>"https://fonts.googleapis.com"===e.origin),new e.StaleWhileRevalidate({cacheName:"font-poopins",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
