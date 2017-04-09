const aliases = require('./aliases');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass'],
    fallback: [aliases.nodeRoot],
    alias: aliases.resolveAlias
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  }
};
