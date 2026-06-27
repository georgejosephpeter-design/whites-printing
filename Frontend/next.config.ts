import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // In modern Next.js, allowedDevOrigins sits directly in the root object
  allowedDevOrigins: ['127.0.0.1', 'localhost', '192.168.1.167'],
};

export default nextConfig;