!function(){"use strict";const t=["client/[page([0-9]+)].02f736a2.js","client/about.62d1fcc8.js","client/index.57639dbb.js","client/contact.12ba3c75.js","client/[slug].67790291.js","client/internal.2858004e.js","client/Breadcrumb.6bbc190a.js","client/client.4f11fad1.js"].concat(["service-worker-index.html","favicon.ico","favicon.png","fonts/merriweather-latin-300.woff","fonts/merriweather-latin-300.woff2","fonts/merriweather-latin-300italic.woff","fonts/merriweather-latin-300italic.woff2","fonts/merriweather-latin-400.woff","fonts/merriweather-latin-400.woff2","fonts/merriweather-latin-400italic.woff","fonts/merriweather-latin-400italic.woff2","fonts/merriweather-latin-700.woff","fonts/merriweather-latin-700.woff2","fonts/merriweather-latin-700italic.woff","fonts/merriweather-latin-700italic.woff2","fonts/merriweather-latin-900.woff","fonts/merriweather-latin-900.woff2","fonts/merriweather-latin-900italic.woff","fonts/merriweather-latin-900italic.woff2","fonts/rubik-latin-300.woff","fonts/rubik-latin-300.woff2","fonts/rubik-latin-300italic.woff","fonts/rubik-latin-300italic.woff2","fonts/rubik-latin-400.woff","fonts/rubik-latin-400.woff2","fonts/rubik-latin-400italic.woff","fonts/rubik-latin-400italic.woff2","fonts/rubik-latin-500.woff","fonts/rubik-latin-500.woff2","fonts/rubik-latin-500italic.woff","fonts/rubik-latin-500italic.woff2","fonts/rubik-latin-700.woff","fonts/rubik-latin-700.woff2","fonts/rubik-latin-700italic.woff","fonts/rubik-latin-700italic.woff2","fonts/rubik-latin-900.woff","fonts/rubik-latin-900.woff2","fonts/rubik-latin-900italic.woff","fonts/rubik-latin-900italic.woff2","fonts.css","global.css","highlight.css","images/blog/hello/hello001.webp","images/blog/hello/hello002.webp","images/blog/office/office001.webp","images/blog/office/office002.webp","images/blogmops.webp","logo-16.png","logo-192.png","logo-32.png","logo-512.png","logo.png","manifest.json"]),i=new Set(t);self.addEventListener("install",i=>{i.waitUntil(caches.open("cache1646774296205").then(i=>i.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const i of t)"cache1646774296205"!==i&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const e=new URL(t.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&i.has(e.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1646774296205").then(async i=>{try{const e=await fetch(t.request);return i.put(t.request,e.clone()),e}catch(e){const f=await i.match(t.request);if(f)return f;throw e}}))))})}();