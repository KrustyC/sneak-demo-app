/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    alchemyProviderUrl: process.env.ALCHEMY_PROVIDER_URL || "http://localhost:8888",
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
