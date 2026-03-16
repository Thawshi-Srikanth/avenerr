import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avenierrpharma.com",
      },
      {
        protocol: "https",
        hostname: "avenerr-nkpni.ondigitalocean.app",
      },
    ],
  },
};

export default nextConfig;
