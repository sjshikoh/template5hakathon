import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    
    domains: ['cdn.sanity.io'], // Add Sanity's CDN here
    
  },
};

export default nextConfig;
