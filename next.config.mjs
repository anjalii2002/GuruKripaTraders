/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'customer-assets-m6fa6gv7.emergentagent.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
