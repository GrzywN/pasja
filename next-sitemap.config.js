/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://studiofryzurpasja.pl',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
}
