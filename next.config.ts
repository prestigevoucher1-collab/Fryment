import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.razorpay.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/pte/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/det/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/gre/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/toefl/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/pte/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/det/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/gre/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/toefl/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
