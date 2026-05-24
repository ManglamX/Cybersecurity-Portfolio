/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Note: headers() don't apply to static exports (output: 'export').
  // Security headers are instead set via <meta> tags in app/layout.tsx
  // and via _headers file for Netlify / Vercel deployments.
}

export default nextConfig