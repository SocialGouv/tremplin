const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "http://127.0.0.1:1337/api",
    NODE_ENV: process.env.NODE_ENV,
    PIWIK_SITE_ID: process.env.PIWIK_SITE_ID || 6,
    PIWIK_URL: process.env.PIWIK_URL || "stats.num.social.gouv.fr",
  }
});
