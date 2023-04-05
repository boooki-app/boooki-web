const environment = process.env.APP_ENV || 'production';

const siteUrls = {
  alpha: 'https://alpha.boooki.app',
  beta: 'https://beta.boooki.app',
  production: 'https://boooki.app',
};

const siteUrl = siteUrls[environment];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
};
