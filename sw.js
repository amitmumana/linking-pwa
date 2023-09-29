
const staticCache = "static-site-v28"
const dynamicCache = "dynamic-site-v28"

const resources = [
    '/',
    "index.html",
    "css/materialize.min.css",
    "css/style.css",
    "js/materialize.min.js",
    "js/db.js",
    "img/icons",
    "pages/about.html",
    "js/init.js",
    "img/link.png",
    "https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "pages/fallback.html"

]

// Cache size limit function

const limitCacheSize = (name, size) => {
  caches.open(name).then((caches) => {
    caches.keys().then((keys) => {
      if(keys.length > size) {
        caches.delete(keys[0]).then(limitCacheSize(name,size))
      }
    })
  })
} 

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(staticCache).then((cache) => {
            cache.addAll(resources)
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((key) => {
            return Promise.all(
                key.filter((key) => key !== staticCache && dynamicCache).map((item) => caches.delete(item))
            )
        })
    )
})

self.addEventListener("fetch", (event) => {
  if(event.request.url.indexOf("firestore.googleapis.com") === -1) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return ( res || fetch(event.request).then((fetchResponse) => {
          return caches.open(dynamicCache).then((cache) => {
            cache.put(event.request.url, fetchResponse.clone())
            limitCacheSize(dynamicCaches , 15)
            return fetchResponse
          })
        }))
      }).catch(() => {
        // conditional fallbacks
        if (event.request.url.indexOf(".html") > -1) {
          return caches.match("/pages/fallback.html")
        }
      })
      )
    }
  })