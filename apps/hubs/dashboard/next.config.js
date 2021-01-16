const withNx = require('@nrwl/next/plugins/with-nx');
const identity = require('lodash/identity');

module.exports = withNx({
  basePath: '/dashboard',
  async rewrites() {
    return [
      process.env.NODE_ENV !== 'production' && {
        source: '/apis/users/:slug*',
        destination: 'http://localhost:3333/:slug*',
      },
    ].filter(identity);
  },
});
