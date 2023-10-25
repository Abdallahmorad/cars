/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.imagin.studio"],
  },
};
exports.nextConfig = nextConfig;
