import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",

        pathname: "/dl5irqaz6/**",
      },
    ],
  },
};
export default nextConfig;
