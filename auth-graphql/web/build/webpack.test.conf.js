const aliases = require('./aliases');

/**
* This webpack config exists just to provide resolvers to babel-loader
*/
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: aliases.resolveAlias
  }
};
