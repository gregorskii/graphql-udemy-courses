const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');
const utils = require('./utils');

const conf = config.prod;
const env = conf.env;

const webpackConfig = merge(baseWebpackConfig, {
  devtool: conf.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      context: __dirname
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return utils.isVendor(module);
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: conf.indexOutputPath,
      template: conf.indexTemplatePath,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new FaviconsWebpackPlugin({
      logo: config.favicon,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/static' }
    ], {
      ignore: [
        config.favicon.split('/')[(config.favicon.split('/')).length - 1]
      ]
    })
  ]
});

// Export stats for debugging
if (process.env.DEBUG === 'true') {
  webpackConfig.plugins.push(new StatsPlugin('stats.json', {
    chunkModules: true,
    exclude: [/node_modules/]
  }));
}

if (conf.gzip) {
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(`\\.(${conf.gzipExtensions.join('|')})$`),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

module.exports = webpackConfig;
