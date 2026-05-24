"use client"

import { useEffect } from "react"
import { rateLimiter } from "@/lib/security"

export function SecurityMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor for suspicious activity
    const monitorSecurity = () => {
      // Rate limiting for page loads
      if (!rateLimiter.isAllowed('page-load', 10, 60000)) {
        console.warn('[Security] Rate limit exceeded for page loads')
      }

      // Monitor for XSS attempts
      const checkForXSS = () => {
        const suspiciousPatterns = [
          /<script/i,
          /javascript:/i,
          /on\w+=/i,
          /<iframe/i,
          /eval\(/i,
          /document\.write/i
        ]

        const checkElement = (element: Element) => {
          const content = element.innerHTML + element.outerHTML
          return suspiciousPatterns.some(pattern => pattern.test(content))
        }

        // Check all elements
        const allElements = document.querySelectorAll('*')
        for (const element of allElements) {
          if (checkElement(element)) {
            console.error('[Security] Potential XSS detected:', element)
            // In production, you might want to report this to a security service
          }
        }
      }

      // Monitor for console tampering
      const originalConsole = { ...console }
      const monitorConsole = () => {
        if (console.log !== originalConsole.log) {
          console.warn('[Security] Console tampering detected')
        }
      }

      // Check for developer tools
      const checkDevTools = () => {
        const threshold = 160
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          console.info('[Security] Developer tools may be open')
        }
      }

      // Run security checks
      checkForXSS()
      monitorConsole()
      checkDevTools()
    }

    // Initial security check
    monitorSecurity()

    // Periodic security monitoring
    const securityInterval = setInterval(monitorSecurity, 30000) // Every 30 seconds

    // Monitor for suspicious events
    const handleSuspiciousActivity = (event: Event) => {
      if (!rateLimiter.isAllowed('suspicious-activity', 5, 60000)) {
        console.warn('[Security] Suspicious activity rate limit exceeded')
        return
      }

      console.info('[Security] Monitoring event:', event.type)
    }

    // Add event listeners for security monitoring
    document.addEventListener('contextmenu', handleSuspiciousActivity)
    document.addEventListener('selectstart', handleSuspiciousActivity)
    document.addEventListener('dragstart', handleSuspiciousActivity)

    // Cleanup
    return () => {
      clearInterval(securityInterval)
      document.removeEventListener('contextmenu', handleSuspiciousActivity)
      document.removeEventListener('selectstart', handleSuspiciousActivity)
      document.removeEventListener('dragstart', handleSuspiciousActivity)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}