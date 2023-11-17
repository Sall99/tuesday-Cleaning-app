/**
 * @type {import('next-sitemap').IConfig}
 * @see
 */
module.exports = {
  siteUrl: 'https://tuesdaycleaning.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
