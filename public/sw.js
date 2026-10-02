/**
 * RAWAN Service Worker — v1.0.0
 *
 * Caching Strategy:
 *  - Cache First  : JS/CSS/fonts/images (hashed assets — immutable)
 *  - Network First: HTML & external API calls (BMKG, USGS earthquake data)
 *  - Stale-While-Revalidate: Google Fonts, map tiles
 */

const CACHE_NAME = 'rawan-v1';
const STATIC_CACHE = 'rawan-static-v1';
const TILE_CACHE   = 'rawan-tiles-v1';

// ── Core shell files to precache on install ──────────────────────────
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/logo_rawan.png',
];

// ── Install: precache app shell ──────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ──────────────────────────────────────
self.addEventListener('activate', (event) => {
  const KEEP_CACHES = [CACHE_NAME, STATIC_CACHE, TILE_CACHE];
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !KEEP_CACHES.includes(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ── Fetch: route requests through caching strategies ─────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and Chrome extension requests
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // 1. Map tiles → Stale-While-Revalidate (cache 7 days)
  if (
    url.hostname.includes('tile.openstreetmap.org') ||
    url.hostname.includes('openstreetmap.fr')
  ) {
    event.respondWith(staleWhileRevalidate(request, TILE_CACHE));
    return;
  }

  // 2. Google Fonts → Stale-While-Revalidate
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  // 3. External APIs (BMKG, USGS) → Network First, fallback cached
  if (
    url.hostname.includes('bmkg.go.id') ||
    url.hostname.includes('usgs.gov') ||
    url.hostname.includes('magma.esdm.go.id')
  ) {
    event.respondWith(networkFirst(request, CACHE_NAME));
    return;
  }

  // 4. Hashed assets (/assets/*.js, /assets/*.css) → Cache First (immutable)
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // 5. Textures & 3D models → Cache First (large binary, rarely changes)
  if (url.pathname.startsWith('/textures/')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // 6. App shell HTML → Network First (always fresh if online)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, CACHE_NAME));
    return;
  }

  // 7. Everything else → Stale-While-Revalidate
  event.respondWith(staleWhileRevalidate(request, CACHE_NAME));
});

// ── Strategy helpers ─────────────────────────────────────────────────

/** Cache First: return cached copy immediately; fetch & update in background */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    if (fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    return new Response('Offline — resource not cached', { status: 503 });
  }
}

/** Network First: try network; fall back to cache on failure */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(request);
    if (fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Offline fallback: serve app shell for navigation requests
    if (request.mode === 'navigate') {
      const shell = await cache.match('/');
      if (shell) return shell;
    }
    return new Response(
      JSON.stringify({ error: 'Offline — data tidak tersedia' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/** Stale-While-Revalidate: return cache immediately, then update in background */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((fresh) => {
      if (fresh.ok) cache.put(request, fresh.clone());
      return fresh;
    })
    .catch(() => null);

  return cached || fetchPromise;
}
