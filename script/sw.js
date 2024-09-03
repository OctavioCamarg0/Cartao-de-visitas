const cacheName = 'Cartao-pessoal';

const filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './img/neymar.png',
    './script/main.js',
]

//instalar o Service Worker e armazenar em cache

self.addEventListener('install',event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    )
})

//Utiliza os Arquivos do cache quando estiver offline
self.addEventListener('fetch',event =>{
    event.respondWith(
        caches.match(event.request).then(response =>{
            return response || fetch(event.request);
        })
    )
})