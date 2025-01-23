/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/file-bucket/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'brian-trainer-api.onrender.com',
        port: '',
        pathname: '/file-bucket/**',
        search: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
