const path = require('path');

const projectBase = path.resolve(__dirname, '..');
const projectRoot = projectBase;
const build = path.join(projectRoot, 'build');
const src = path.resolve(projectRoot, 'src');
const dist = path.join(projectBase, 'dist');
const test = path.join(projectRoot, 'test');
const nodeRoot = path.join(projectRoot, 'node_modules');

module.exports = {
  projectBase,
  projectRoot,
  nodeRoot,
  build,
  src,
  dist,
  test
};
