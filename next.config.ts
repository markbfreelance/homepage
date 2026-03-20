import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    qualities: [75],
  },
  // Reduce JS bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Compress responses
  compress: true,
}

export default nextConfig