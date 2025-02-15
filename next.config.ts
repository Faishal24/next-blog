import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allow images from external sources
  images: {
    domains: ["fakeimg.pl"],
  },
};

export default nextConfig;
