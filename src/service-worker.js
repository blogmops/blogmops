import { timestamp, files, shell } from '@sapper/service-worker';

const ASSETS = `cache${timestamp}`;
const to_cache = shell.concat(files);
const cached = new Set(to_cache);
const openCache = async (event, cache) => {
  try {
    const response = await fetch(event.request);
    cache.put(event.request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(event.request);
    if (response) return response;
    throw err;
  }
};

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(ASSETS)
			.then((cache) => cache.addAll(to_cache))
			.then(() => {
				self.skipWaiting();
			}),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(async (keys) => {
			// delete old caches
			for (const key of keys) {
				if (key !== ASSETS) await caches.delete(key);
			}
			self.clients.claim();
		}),
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

  const url = new URL(event.request.url);

  // don't try to handle e.g. data: URIs
	if (!url.protocol.startsWith('http')) return;

  // ignore dev server requests
	if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

  // always serve static files and bundler-generated assets from cache
	if (url.host === self.location.host && cached.has(url.pathname)) {
		event.respondWith(caches.match(event.request));
		return;
	}

	/* // or for github-pages (service-worker-index.html)
	if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
		event.respondWith(caches.match('/service-worker-index.html'));
		return;
	} */

  // else: try the network first, falling back to cache if the user is offline
	if (event.request.cache === 'only-if-cached') return;

	event.respondWith(caches.open(`offline${timestamp}`).then(openCache.bind(this, event));
});
