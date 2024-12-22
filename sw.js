const CACHE_NAME = 'dots-game-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/js/main.js',
  '/js/renderHtml.js',
  '/js/lodash.min.js',
  '/js/jquery-3.3.1.min.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
}); 