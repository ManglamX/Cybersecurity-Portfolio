/**
 * Security utilities for input validation and sanitization
 */

// URL validation with whitelist
const ALLOWED_DOMAINS = [
  'manglam.me',
  'github.com',
  'linkedin.com',
  'tryhackme.com',
  'leetcode.com',
  'hackerrank.com',
  'drive.google.com',
  'vercel.app',
  'netlify.app',
  'images.unsplash.com'
]

/**
 * Validates if a URL is safe and from allowed domains
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    
    // Only allow HTTPS (except localhost for development)
    if (urlObj.protocol !== 'https:' && !urlObj.hostname.includes('localhost')) {
      return false
    }
    
    // Check against whitelist
    return ALLOWED_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    )
  } catch {
    return false
  }
}

/**
 * Sanitizes text input to prevent XSS
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000) // Limit length
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Validates phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/
  return phoneRegex.test(phone)
}

/**
 * Rate limiting for client-side actions
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map()
  
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now()
    const attempts = this.attempts.get(key) || []
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs)
    
    if (validAttempts.length >= maxAttempts) {
      return false
    }
    
    validAttempts.push(now)
    this.attempts.set(key, validAttempts)
    return true
  }
}

export const rateLimiter = new RateLimiter()

/**
 * Secure random string generator
 */
export function generateSecureId(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
  // Fallback for server-side
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Content Security Policy nonce generator
 */
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    return btoa(String.fromCharCode(...array))
  }
  return btoa(Math.random().toString()).substring(0, 16)
}