process.env.NODE_ENV = 'test';

const path = require('path');

module.exports = (wallaby) => {
  process.env.NODE_PATH += path.delimiter +
    path.join(wallaby.projectCacheDir, 'src') +
    path.delimiter +
    path.join(wallaby.projectCacheDir
  );

  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      'src/**/*.js?(x)',
      'src/**/*.scss',
      'src/**/*.sass',
      'src/**/*.css',
      'src/**/*.json',
      'test/unit/spec/helpers/**/*.js?(x)',
      '!src/**/*-spec.js?(x)',
      '!src/**/*-storybook.js?(x)'
    ],
    tests: [
      'src/**/*-spec.js?(x)'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },
    setup: () => {
      require.extensions['.css'] = () => {};
      require.extensions['.sass'] = () => {};
      require.extensions['.scss'] = () => {};
      // eslint-disable-next-line global-require
      require('./test/unit/spec/helpers');
    }
  };
};
