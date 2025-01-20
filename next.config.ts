import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN here
  },
};

export default nextConfig;
