const path = require('path');

module.exports = {
    //...
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, 'retext-emoji')],
    },
  };
  