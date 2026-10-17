// Bird Collage offline cache.
// Big files (model, illustrations, TensorFlow.js) are cached after the first load,
// so the iPad doesn't download ~60 MB again. The page itself is checked online first,
// so updates you upload to GitHub still reach every iPad.
// If you ever replace the model or birds.json, change VERSION so iPads refetch them.
const VERSION = 'bc-v1';
const BIG = /\/(model\.json|area-model\.json|[^/]+\.bin|birds\.json|tf\.min\.js|en_us\.txt)(\?|$)/;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // weather goes straight out
  if (BIG.test(req.url)) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) c.put(req, res.clone());
      return res;
    }));
  } else {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) caches.open(VERSION).then(c => c.put(req, res.clone()));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })));
  }
});
