const config = require('../config');

exports.assetsPath = (_path) => {
  if (process.env.NODE_ENV === 'dev') {
    return _path;
  }
  return `${config[process.env.NODE_ENV].assetsPublicPath}${_path}`;
};

const vendorTest = (module) => {
  return module.resource &&
    /\.js$/.test(module.resource) &&
    /node_modules/.test(module.resource);
};

exports.isVendor = (module) => {
  const vendor = vendorTest(module);
  if (process.env.DEBUG === 'true') {
    if (vendor) {
      console.log(`Vendoring: ${module.resource}`);
    } else {
      console.log(module.resource);
    }
  }
  return vendor;
};
