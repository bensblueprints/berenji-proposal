import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.brandfetch.io" },
      { protocol: "https", hostname: "asset.brandfetch.io" },
      { protocol: "https", hostname: "img.logo.dev" },
      { protocol: "https", hostname: "www.berenjifamilylaw.com" },
    ],
  },
};

export default nextConfig;
