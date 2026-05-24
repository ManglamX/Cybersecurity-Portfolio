// Service Worker for Manglam Jaiswal Portfolio - Security Enhanced
const CACHE_NAME = 'manglam-portfolio-v2-secure'
const OFFLINE_URL = '/offline.html'

// Whitelist of allowed origins for security
const ALLOWED_ORIGINS = [
  'https://manglam.me',
  'https://www.manglam.me',
  'http://localhost:3000', // Development only
  'https://vercel.app',
  'https://netlify.app'
]

// Assets to cache on install - only essential files
const STATIC_ASSETS = [
  '/',
  '/resume',
  '/offline.html',
  '/manifest.json',
]

// Security: Validate origin
function isAllowedOrigin(url) {
  try {
    const origin = new URL(url).origin
    return ALLOWED_ORIGINS.includes(origin)
  } catch {
    return false
  }
}

// Security: Validate request
function isValidRequest(request) {
  // Only allow GET requests
  if (request.method !== 'GET') return false
  
  // Only allow same-origin or whitelisted origins
  if (!isAllowedOrigin(request.url)) return false
  
  // Block potentially dangerous file types
  const url = new URL(request.url)
  const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.vbs', '.js.map']
  if (dangerousExtensions.some(ext => url.pathname.endsWith(ext))) return false
  
  return true
}

// Install event - cache static assets securely
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install - Security Enhanced')
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching static assets securely')
      // Only cache whitelisted assets
      const secureAssets = STATIC_ASSETS.filter(asset => {
        const fullUrl = new URL(asset, self.location.origin).href
        return isAllowedOrigin(fullUrl)
      })
      return cache.addAll(secureAssets)
    }).catch(error => {
      console.error('[ServiceWorker] Cache installation failed:', error)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches securely
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate - Security Enhanced')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Only delete caches that match our naming pattern for security
          if (cacheName.startsWith('manglam-portfolio-') && cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache with security checks
self.addEventListener('fetch', (event) => {
  // Security validation
  if (!isValidRequest(event.request)) {
    console.warn('[ServiceWorker] Blocked invalid request:', event.request.url)
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found and valid
      if (response) {
        return response
      }

      // Clone the request for security
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then((response) => {
          // Security checks on response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          // Additional security: Check response headers
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('text/html')) {
            // Only cache HTML from same origin
            if (!isAllowedOrigin(event.request.url)) {
              return response
            }
          }

          // Clone the response for caching
          const responseToCache = response.clone()

          // Cache the fetched response securely
          caches.open(CACHE_NAME).then((cache) => {
            // Only cache if URL is in our whitelist
            if (isAllowedOrigin(event.request.url)) {
              cache.put(event.request, responseToCache)
            }
          })

          return response
        })
        .catch((error) => {
          console.error('[ServiceWorker] Fetch failed:', error)
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL)
          }
          // Return a basic error response for other requests
          return new Response('Network error', { 
            status: 408, 
            statusText: 'Network timeout' 
          })
        })
    })
  )
})

// Message event - handle skip waiting securely
self.addEventListener('message', (event) => {
  // Validate message source
  if (!event.origin || !ALLOWED_ORIGINS.includes(event.origin)) {
    console.warn('[ServiceWorker] Blocked message from unauthorized origin:', event.origin)
    return
  }

  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[ServiceWorker] Skip waiting requested')
    self.skipWaiting()
  }
})

// Error handling
self.addEventListener('error', (event) => {
  console.error('[ServiceWorker] Error:', event.error)
})

self.addEventListener('unhandledrejection', (event) => {
  console.error('[ServiceWorker] Unhandled promise rejection:', event.reason)
})
