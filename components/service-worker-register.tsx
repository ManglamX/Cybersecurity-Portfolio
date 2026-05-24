"use client"

import { useEffect } from "react"

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production"
    ) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("[ServiceWorker] Registered successfully:", registration.scope)

            // Check for updates
            registration.addEventListener("updatefound", () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener("statechange", () => {
                  if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                    // New service worker available
                    console.log("[ServiceWorker] New version available")
                    
                    // Optionally show update notification
                    if (confirm("New version available! Reload to update?")) {
                      newWorker.postMessage({ type: "SKIP_WAITING" })
                      window.location.reload()
                    }
                  }
                })
              }
            })
          })
          .catch((error) => {
            console.error("[ServiceWorker] Registration failed:", error)
          })

        // Handle controller change
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          console.log("[ServiceWorker] Controller changed, reloading page")
          window.location.reload()
        })
      })
    }
  }, [])

  return null
}
