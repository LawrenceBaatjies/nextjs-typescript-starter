if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise(async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()})),n.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},n=(n,s)=>{Promise.all(n.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(n)};self.define=(n,i,c)=>{s[n]||(s[n]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+n.slice(1)};return Promise.all(i.map(n=>{switch(n){case"exports":return s;case"module":return r;default:return e(n)}})).then(e=>{const n=c(...e);return s.default||(s.default=n),s})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GIfTn8ppFHQOYGBIl3nNA/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/GIfTn8ppFHQOYGBIl3nNA/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/GIfTn8ppFHQOYGBIl3nNA/pages/_app.js",revision:"863a99bcd60621010b4cf603960c9528"},{url:"/_next/static/GIfTn8ppFHQOYGBIl3nNA/pages/_error.js",revision:"7d7e9531965e5a68df767e7ba54345c3"},{url:"/_next/static/GIfTn8ppFHQOYGBIl3nNA/pages/index.js",revision:"3d2672d93265a8d237373f5e3f278e69"},{url:"/_next/static/chunks/4d70bb959e92d7267bbac3598461c274bc5aede2.90e7c089fc47e30f0408.js",revision:"502b957bace725c135ed6cc0ea58904f"},{url:"/_next/static/chunks/7664348a95e639996753f235e0f8f079203322fa.58e90d8c4b4ce1ae9cb5.js",revision:"5bbf71a5cd4692e1dc6fda656d3a9f73"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-c5f2e9b2202b8f82c386.js",revision:"aefa75d9f971191c27fc62a2f1e8d949"},{url:"/_next/static/runtime/polyfills-2f74f7d9820760171318.js",revision:"e44de39490a0cdd4e3715026287dba70"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/icons/icon-144x144.png",revision:"5b4b7437e0d29bc10c4a339d4b18cfc2"},{url:"/img/icons/icon-192x192.png",revision:"36908e7df6b6575d5a1ed4144486a230"},{url:"/img/icons/icon-256x256.png",revision:"62d335985befcddc16eccb067981f975"},{url:"/img/icons/icon-384x384.png",revision:"daf2c1493d1f5404967d22d55da6d697"},{url:"/img/icons/icon-48x48.png",revision:"7574ebd19fc2323f00e70a97a9adf166"},{url:"/img/icons/icon-512x512.png",revision:"7efe0c5cd429065cb144bcafb1053b5d"},{url:"/img/icons/icon-72x72.png",revision:"e3c5277ec324eab3f12525c31820263b"},{url:"/img/icons/icon-96x96.png",revision:"dac1f56555c31b9254acff97fbf9731e"},{url:"/img/logo-iceberg.svg",revision:"29d1d6bd79377b4049360e01bf93942c"},{url:"/manifest.json",revision:"086cbb554e6fd760e104d256a2a5d7b0"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
