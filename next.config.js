/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  }, eslint: {
    ignoreDuringBuilds: true, // تجاهل أخطاء ESLint أثناء الـ build
  },
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء TypeScript أثناء الـ build
  },
};

module.exports = nextConfig;