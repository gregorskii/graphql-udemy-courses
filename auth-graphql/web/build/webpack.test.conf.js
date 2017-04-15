const webpack = require('webpack');

const aliases = require('./aliases');
const config = require('../config');

const conf = config.test;

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: aliases.resolveAlias
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      context: __dirname
    }),
    new webpack.DefinePlugin({
      'process.env': conf.env
    })
  ]
};
