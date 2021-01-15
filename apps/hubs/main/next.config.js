const withNx = require('@nrwl/next/plugins/with-nx');
const withCompileNodeModules = require('@moxy/next-compile-node-modules');

module.exports = withCompileNodeModules({
  include: [/@hookform\/resolvers/],
})(withNx({}));
