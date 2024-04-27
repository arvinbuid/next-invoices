/** @type {import('next').NextConfig} */
const nextConfig = {
  // image not loading code fix
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
