/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'http',
            hostname: process.env.API_HOST,
            port: '5000',
            pathname: '/**',
        },
      ],
    },
  };
export default nextConfig;
