/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "photofolio.damienpierre.com",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
