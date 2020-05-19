const image = require('@rollup/plugin-image');
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.unshift(image());
    return config; // always return a config.
  },
};
