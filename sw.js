
const staticCache = "static-site-v2"
const dynamicCache = "dynamic-site-v1"

const resources = [
    '/',
    "index.html",
    "css/materialize.min.css",
    "css/style.css",
    "js/materialize.min.js",
    "js/categories.js",
    "js/db.js",
    "img/icons",
    "pages/about.html",
    "pages/contact.html",
    "pages/bookmarks.html",
    "js/init.js",
    "img/link.png",
    "https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "pages/fallback.html"

]

// self.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(staticCache).then((cache) => {
//             cache.addAll(resources)
//         })
//     )
// })

// self.addEventListener('activate', (event) => {
//     event.waitUntil(
//         caches.keys().then((key) => {
//             return Promise.all(
//                 key.filter((key) => key !== staticCache && dynamicCache).map((item) => caches.delete(item))

//             )
//         })
//     )
// })

// self.addEventListener('fetch', (event) => {
//     console.log('okoko')


// })