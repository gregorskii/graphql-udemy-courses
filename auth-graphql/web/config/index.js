const path = require('path');
const paths = require('../build/paths');
const devEnv = require('./dev.env');
const prodEnv = require('./prod.env');
const testEnv = require('./test.env');

const baseConf = {
  scriptsOutputPath: 'scripts',
  cssOutputPath: 'styles'
};

// The path that the browser will load chunks from
const publicPath = '/';

module.exports = {
  favicon: path.join(paths.src, 'static', 'favicon.png'),

  test: Object.assign({}, baseConf, {
    env: testEnv,
    outputPath: paths.dist,
    indexTemplatePath: path.join(paths.src, 'index.html'),
    indexOutputPath: path.join(paths.dist, 'index.html'),
    staticDirectory: path.join(paths.src, 'static'),
    assetsPublicPath: publicPath
  }),

  dev: Object.assign({}, baseConf, {
    // Which env.js file to use
    env: devEnv,
    // Where to put bundle assets
    outputPath: paths.dist,
    // Port for dev server
    port: 8080,
    // Where to find the index.html template
    indexTemplatePath: path.join(paths.src, 'index.html'),
    // Where to put it
    indexOutputPath: path.join(paths.dist, 'index.html'),
    // Where to find static assets
    staticDirectory: path.join(paths.src, 'assets'),
    // Public path to embed in the bundle, also used as route for express static assets
    assetsPublicPath: publicPath,
    // Proxy table for dev server loop-backs
    proxyTable: {},
    // Whether to use CSS sourcemaps
    cssSourceMap: false
  }),

  prod: Object.assign({}, baseConf, {
    env: prodEnv,
    outputPath: paths.dist,
    indexTemplatePath: path.join(paths.src, 'index.html'),
    indexOutputPath: path.join(paths.dist, 'index.html'),
    assetsPublicPath: publicPath,
    // Whether to enable source maps in production
    productionSourceMap: false,
    // Whether to gzip assets
    gzip: false,
    // Extensions to gzip
    gzipExtensions: ['js', 'css']
  })
};
