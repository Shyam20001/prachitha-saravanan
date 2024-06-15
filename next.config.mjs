/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_Gmail: process.env.VITE_Gmail,
    VITE_GPWD: process.env.VITE_GPWD,
    VITE_Rceiv: process.env.VITE_Rceiv,
  },
  images: {
    domains: ['media.licdn.com'],
  },
};

export default nextConfig;
