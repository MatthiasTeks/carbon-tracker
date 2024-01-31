/** @type {import('next').NextConfig} */
require('dotenv').config(); 

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
}

module.exports = nextConfig
