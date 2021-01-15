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
          source: '/something/user/:slug*',
          destination: 'http://localhost:3333/:slug*',
        },
      ].filter(identity);
    },
  })
);
