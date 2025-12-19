const CACHE_NAME = 'metcon-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Pure network strategy for now to ensure we see the latest fixes
  event.respondWith(fetch(event.request));
});