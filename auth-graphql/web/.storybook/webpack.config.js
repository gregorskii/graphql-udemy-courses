const merge = require('webpack-merge');
const webpackStorybookConfig = require('../build/webpack.storybook.conf.js');

/**
 * Pull in what is needed from the projects default webpack.storybook.config.js
 */
module.exports = (storybookBaseConfig) => {
  return merge(storybookBaseConfig, webpackStorybookConfig);
};
