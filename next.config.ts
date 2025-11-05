import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev build/activity badge in development
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
};

export default nextConfig;
