;
const CACHE_NAME = 'v1_cache_programador',
  urlsToCache = [
    './',
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    "https://use.fontawesome.com/releases/v5.0.7/css/all.css",
    "https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2",
    "https://kit.fontawesome.com/7027fa2602.js",
    './styles.css',
    './javascript.js',
    // './assets/favicon.png',
  ]
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          return res
        }
        return fetch(e.request)
      })
  )
})