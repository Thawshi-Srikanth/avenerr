import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
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
