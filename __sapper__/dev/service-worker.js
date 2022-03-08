(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1646760835314;

	const files = [
		"service-worker-index.html",
		"favicon.ico",
		"favicon.png",
		"fonts/merriweather-latin-300.woff",
		"fonts/merriweather-latin-300.woff2",
		"fonts/merriweather-latin-300italic.woff",
		"fonts/merriweather-latin-300italic.woff2",
		"fonts/merriweather-latin-400.woff",
		"fonts/merriweather-latin-400.woff2",
		"fonts/merriweather-latin-400italic.woff",
		"fonts/merriweather-latin-400italic.woff2",
		"fonts/merriweather-latin-700.woff",
		"fonts/merriweather-latin-700.woff2",
		"fonts/merriweather-latin-700italic.woff",
		"fonts/merriweather-latin-700italic.woff2",
		"fonts/merriweather-latin-900.woff",
		"fonts/merriweather-latin-900.woff2",
		"fonts/merriweather-latin-900italic.woff",
		"fonts/merriweather-latin-900italic.woff2",
		"fonts/rubik-latin-300.woff",
		"fonts/rubik-latin-300.woff2",
		"fonts/rubik-latin-300italic.woff",
		"fonts/rubik-latin-300italic.woff2",
		"fonts/rubik-latin-400.woff",
		"fonts/rubik-latin-400.woff2",
		"fonts/rubik-latin-400italic.woff",
		"fonts/rubik-latin-400italic.woff2",
		"fonts/rubik-latin-500.woff",
		"fonts/rubik-latin-500.woff2",
		"fonts/rubik-latin-500italic.woff",
		"fonts/rubik-latin-500italic.woff2",
		"fonts/rubik-latin-700.woff",
		"fonts/rubik-latin-700.woff2",
		"fonts/rubik-latin-700italic.woff",
		"fonts/rubik-latin-700italic.woff2",
		"fonts/rubik-latin-900.woff",
		"fonts/rubik-latin-900.woff2",
		"fonts/rubik-latin-900italic.woff",
		"fonts/rubik-latin-900italic.woff2",
		"fonts.css",
		"global.css",
		"highlight.css",
		"images/blog/hello/hello001.webp",
		"images/blog/hello/hello002.webp",
		"images/blog/office/office001.webp",
		"images/blog/office/office002.webp",
		"images/blogmops.webp",
		"logo-16.png",
		"logo-192.png",
		"logo-32.png",
		"logo-512.png",
		"logo.png",
		"manifest.json"
	];

	const shell = [
		
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then(cache => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      }),
	  );
	});

	self.addEventListener('activate', event => {
	  event.waitUntil(
	    caches.keys().then(async keys => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    }),
	  );
	});

	self.addEventListener('fetch', event => {
	  if (event.request.method !== 'GET' || event.request.headers.has('range'))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  if (!url.protocol.startsWith('http')) return;

	  // ignore dev server requests
	  if (
	    url.hostname === self.location.hostname &&
	    url.port !== self.location.port
	  )
	    return;

	  // always serve static files and bundler-generated assets from cache
	  if (url.host === self.location.host && cached.has(url.pathname)) {
	    event.respondWith(caches.match(event.request));
	    return;
	  }

	  // for pages, you might want to serve a shell `service-worker-index.html` file,
	  // which Sapper has generated for you. It's not right for every
	  // app, but if it's right for yours then uncomment this section
	  /*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

	  if (event.request.cache === 'only-if-cached') return;

	  // for everything else, try the network first, falling back to
	  // cache if the user is offline. (If the pages never change, you
	  // might prefer a cache-first approach to a network-first one.)
	  event.respondWith(
	    caches.open(`offline${timestamp}`).then(async cache => {
	      try {
	        const response = await fetch(event.request);
	        cache.put(event.request, response.clone());
	        return response;
	      } catch (err) {
	        const response = await cache.match(event.request);
	        if (response) return response;

	        throw err;
	      }
	    }),
	  );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTY0Njc2MDgzNTMxNDtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJmYXZpY29uLmljb1wiLFxuXHRcImZhdmljb24ucG5nXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTMwMC53b2ZmXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTMwMC53b2ZmMlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi0zMDBpdGFsaWMud29mZlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi0zMDBpdGFsaWMud29mZjJcIixcblx0XCJmb250cy9tZXJyaXdlYXRoZXItbGF0aW4tNDAwLndvZmZcIixcblx0XCJmb250cy9tZXJyaXdlYXRoZXItbGF0aW4tNDAwLndvZmYyXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTQwMGl0YWxpYy53b2ZmXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTQwMGl0YWxpYy53b2ZmMlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi03MDAud29mZlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi03MDAud29mZjJcIixcblx0XCJmb250cy9tZXJyaXdlYXRoZXItbGF0aW4tNzAwaXRhbGljLndvZmZcIixcblx0XCJmb250cy9tZXJyaXdlYXRoZXItbGF0aW4tNzAwaXRhbGljLndvZmYyXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTkwMC53b2ZmXCIsXG5cdFwiZm9udHMvbWVycml3ZWF0aGVyLWxhdGluLTkwMC53b2ZmMlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi05MDBpdGFsaWMud29mZlwiLFxuXHRcImZvbnRzL21lcnJpd2VhdGhlci1sYXRpbi05MDBpdGFsaWMud29mZjJcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi0zMDAud29mZlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTMwMC53b2ZmMlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTMwMGl0YWxpYy53b2ZmXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tMzAwaXRhbGljLndvZmYyXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tNDAwLndvZmZcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi00MDAud29mZjJcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi00MDBpdGFsaWMud29mZlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTQwMGl0YWxpYy53b2ZmMlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTUwMC53b2ZmXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tNTAwLndvZmYyXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tNTAwaXRhbGljLndvZmZcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi01MDBpdGFsaWMud29mZjJcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi03MDAud29mZlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTcwMC53b2ZmMlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTcwMGl0YWxpYy53b2ZmXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tNzAwaXRhbGljLndvZmYyXCIsXG5cdFwiZm9udHMvcnViaWstbGF0aW4tOTAwLndvZmZcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi05MDAud29mZjJcIixcblx0XCJmb250cy9ydWJpay1sYXRpbi05MDBpdGFsaWMud29mZlwiLFxuXHRcImZvbnRzL3J1YmlrLWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiLFxuXHRcImZvbnRzLmNzc1wiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJoaWdobGlnaHQuY3NzXCIsXG5cdFwiaW1hZ2VzL2Jsb2cvaGVsbG8vaGVsbG8wMDEud2VicFwiLFxuXHRcImltYWdlcy9ibG9nL2hlbGxvL2hlbGxvMDAyLndlYnBcIixcblx0XCJpbWFnZXMvYmxvZy9vZmZpY2Uvb2ZmaWNlMDAxLndlYnBcIixcblx0XCJpbWFnZXMvYmxvZy9vZmZpY2Uvb2ZmaWNlMDAyLndlYnBcIixcblx0XCJpbWFnZXMvYmxvZ21vcHMud2VicFwiLFxuXHRcImxvZ28tMTYucG5nXCIsXG5cdFwibG9nby0xOTIucG5nXCIsXG5cdFwibG9nby0zMi5wbmdcIixcblx0XCJsb2dvLTUxMi5wbmdcIixcblx0XCJsb2dvLnBuZ1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvY29udGFjdFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC8oWzAtOV0rKVxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsLCByb3V0ZXMgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzXG4gICAgICAub3BlbihBU1NFVFMpXG4gICAgICAudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gICAgICB9KSxcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xuICAgICAgLy8gZGVsZXRlIG9sZCBjYWNoZXNcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gQVNTRVRTKSBhd2FpdCBjYWNoZXMuZGVsZXRlKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuY2xpZW50cy5jbGFpbSgpO1xuICAgIH0pLFxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG4gIGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSlcbiAgICByZXR1cm47XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cbiAgLy8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcbiAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm47XG5cbiAgLy8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcbiAgaWYgKFxuICAgIHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJlxuICAgIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnRcbiAgKVxuICAgIHJldHVybjtcblxuICAvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZVxuICBpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcbiAgICBldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcbiAgLy8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XG4gIC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuICAvKlxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Ki9cblxuICBpZiAoZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJykgcmV0dXJuO1xuXG4gIC8vIGZvciBldmVyeXRoaW5nIGVsc2UsIHRyeSB0aGUgbmV0d29yayBmaXJzdCwgZmFsbGluZyBiYWNrIHRvXG4gIC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3VcbiAgLy8gbWlnaHQgcHJlZmVyIGEgY2FjaGUtZmlyc3QgYXBwcm9hY2ggdG8gYSBuZXR3b3JrLWZpcnN0IG9uZS4pXG4gIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YCkudGhlbihhc3luYyBjYWNoZSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSksXG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsYUFBYTtDQUNkLENBQUMsYUFBYTtDQUNkLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzND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
