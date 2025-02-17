const CACHE_NAME = "version-0"
const urlsToCache = ['index.html', 'offline.html']

self = this

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
    }))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then(() => {
        return fetch(event.request).catch(() => caches.match('offline.html'))
    }))
})

self.addEventListener('activate', (event) => {
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName)
            }
        })
    )))
})