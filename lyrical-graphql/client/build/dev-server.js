const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');

const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const conf = config.dev;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

module.exports = (app) => {
  // proxy api requests
  Object.keys(proxyTable).forEach((context) => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
      options = { target: options };
    }
    app.use(proxyMiddleware(context, options));
  });

  // handle fallback for HTML5 history API
  app.use(history({
    verbose: process.env.DEBUG === 'true'
  }));

  // serve webpack bundle output
  app.use(devMiddleware);

  // enable hot-reload and state-preserving
  // compilation error display
  app.use(hotMiddleware);

  // serve pure static assets
  const staticPath = config.dev.assetsPublicPath;
  app.use(staticPath, express.static(conf.staticDirectory));

  const uri = `http://localhost:${conf.port}`;

  devMiddleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri} \n`);
  });
};
