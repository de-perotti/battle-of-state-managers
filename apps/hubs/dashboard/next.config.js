const withNx = require('@nrwl/next/plugins/with-nx');
const identity = require('lodash/identity');

module.exports = withNx({
  basePath: '/dashboard',
  async rewrites() {
    return [
      process.env.NODE_ENV !== 'production' && {
        source: '/apis/users/:slug*',
        destination: `http://localhost:${process.env.API_USER_PORT}/:slug*`,
      },
      process.env.NODE_ENV !== 'production' && {
        source: '/apis/forms/:slug*',
        destination: `http://localhost:${process.env.API_FORM_PORT}/:slug*`,
      },
    ].filter(identity);
  },
});
