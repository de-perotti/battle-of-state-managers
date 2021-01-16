const withNx = require('@nrwl/next/plugins/with-nx');
const withCompileNodeModules = require('@moxy/next-compile-node-modules');
const identity = require('lodash/identity');

module.exports = withCompileNodeModules({
  include: [/@hookform\/resolvers/],
})(
  withNx({
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
        process.env.NODE_ENV !== 'production' && {
          source: '/dashboard',
          destination: `http://localhost:${process.env.HUB_DASHBOARD_PORT}/dashboard`,
        },
        process.env.NODE_ENV !== 'production' && {
          source: '/dashboard/:slug*',
          destination: `http://localhost:${process.env.HUB_DASHBOARD_PORT}/dashboard/:slug*`,
        },
      ].filter(identity);
    },
  })
);
