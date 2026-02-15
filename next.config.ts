import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Hide the development indicator ("N" badge in corner) */
  devIndicators: false,

  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
