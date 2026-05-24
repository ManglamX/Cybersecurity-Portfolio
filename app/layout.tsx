import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { CyberCursor } from '@/components/cyber-cursor'
import { ErrorBoundary } from '@/components/error-boundary'
import { ServiceWorkerRegister } from '@/components/service-worker-register'
import { SecurityMonitor } from '@/components/security-monitor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manglam Jaiswal - Full Stack Developer',
  description: 'Portfolio of Manglam Jaiswal - B.E. Electronics & Computer Science (Cybersecurity Honors) | IoT Lead & Full-Stack Developer',
  keywords: 'Manglam Jaiswal, Full Stack Developer, Cybersecurity, IoT, Portfolio, Web Developer',
  authors: [{ name: 'Manglam Jaiswal' }],
  creator: 'Manglam Jaiswal',
  manifest: '/manifest.json',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manglam.me',
    title: 'Manglam Jaiswal - Full Stack Developer',
    description: 'Portfolio of Manglam Jaiswal - Cybersecurity, IoT & Full-Stack Development',
    siteName: 'Manglam Jaiswal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manglam Jaiswal - Full Stack Developer',
    description: 'Portfolio of Manglam Jaiswal - Cybersecurity, IoT & Full-Stack Development',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00ff41',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'sha256-HASH_PLACEHOLDER' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data: https:; connect-src 'self' https://vercel.live https://*.vercel.app https://vitals.vercel-insights.com; frame-src 'self' https://vercel.live; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <SecurityMonitor />
            <ServiceWorkerRegister />
            <CyberCursor />
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>

  )
}
