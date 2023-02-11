/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pl-PL'],
    defaultLocale: 'pl-PL',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
