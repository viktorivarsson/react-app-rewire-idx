const { injectBabelPlugin } = require('react-app-rewired');

function rewireIdx(config, env) {
  config = injectBabelPlugin('idx', config);
  return config;
}

module.exports = rewireIdx;
