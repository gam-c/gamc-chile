const nextI18NextConfig = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
};

module.exports = nextConfig;
