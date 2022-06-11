/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    emotion: true,
    swcFileReading: false,
  },
};
