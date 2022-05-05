/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["randomuser.me"],
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
