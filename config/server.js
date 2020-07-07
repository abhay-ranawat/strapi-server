module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://strapijs.glitch.me/',
  admin: {
      url: '/',
      serverAdminPanel: false
  }
});
