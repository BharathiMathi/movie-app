const cacheData = 'MovieData';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        '/static/js/bundle.js',
        '/static/media/image_not_found.6e33a3c8cbe2cddf7375.png',
        '/logo.jpg',
        '/index.html',
        '/',
        '/favourites',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  // Use a network-first strategy for the lazy-loaded modules
  if (event.request.url.includes('/static/js/src_components_favourite-movies_index_tsx.chunk.js')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If fetch is successful, put the new file into the cache
          const responseToCache = response.clone();
          caches.open(cacheData).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If fetch fails (e.g. because we're offline), return the cached file
          return caches.match(event.request);
        })
    );
  } else {
    // Use the existing cache-first strategy for other requests
    if (!navigator.onLine) {
      event.respondWith(
        caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((response) => {
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(cacheData).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return response;
          });
        })
      );
    }
  }
});