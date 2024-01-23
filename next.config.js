/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
          },
            {
              protocol: 'https',
              hostname: 'auhdpekgze0aeok3.public.blob.vercel-storage.com',
              port: '',
            }]
      },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
