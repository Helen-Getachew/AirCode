const CACHE_NAME = 'aircode-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './js/app.js',
  './js/auth.js',
  './js/db.js',
  './js/lessons.js',
  './js/router.js',
  './js/ui.js',
  './js/editor.js',
  './libs/skulpt/skulpt.min.js',
  './libs/skulpt/skulpt-stdlib.js'
];

// Install — cache all assets (resilient: one failed asset won't break the rest)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(err =>
            console.warn('SW: failed to cache', url, err)
          )
        )
      )
    )
  );
  self.skipWaiting();
});

// Activate — delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
