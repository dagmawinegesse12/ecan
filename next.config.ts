// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow Next.js Image Optimization for these Facebook CDN domains
    domains: [
      "scontent-atl3-1.xx.fbcdn.net",
      "scontent-atl3-2.xx.fbcdn.net",
      "www.ecantn.org",
    ],
  },
  // You can add other Next.js config options here as needed
};

export default nextConfig;
