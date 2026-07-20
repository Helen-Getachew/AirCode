const CACHE_NAME = 'aircode-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './main.css',
  './app.js',
  './auth.js',
  './db.js',
  './lessons.js',
  './router.js',
  './ui.js',
  './editor.js',
  './skulpt.min.js',
  './skulpt-stdlib.js'
];

// Install — cache all assets (resilient: one failed asset won't break the rest)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(err => {
            console.warn('SW: failed to cache', url, err);
            // Don't fail the whole install if one asset fails
            return Promise.resolve();
          })
        )
      )
    ).then(() => {
      console.log('SW: all assets cached successfully');
    })
  );
  self.skipWaiting();
});

// Activate — delete old caches and claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('SW: deleting old cache', k);
            return caches.delete(k);
          })
      )
    ).then(() => {
      console.log('SW: activated, old caches cleaned');
      return self.clients.claim();
    })
  );
});

// Fetch — Cache First strategy with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (like Google auth)
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        // Return cached version immediately
        // But also try to update cache in background (stale-while-revalidate)
        fetch(request).then(networkResponse => {
          if (networkResponse && networkResponse.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkResponse.clone());
            });
          }
        }).catch(() => {
          // Network failed, we already have cached version
        });
        return cached;
      }

      // Not in cache — try network
      return fetch(request).then(networkResponse => {
        if (!networkResponse || !networkResponse.ok) {
          return networkResponse;
        }

        // Cache the new response
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });

        return networkResponse;
      }).catch(() => {
        // Network failed and not in cache
        // Return a friendly offline fallback for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }

        // For other requests, just fail
        console.warn('SW: fetch failed, no cache for', request.url);
        return new Response('Offline — content not available', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});

// Handle messages from the main app
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
