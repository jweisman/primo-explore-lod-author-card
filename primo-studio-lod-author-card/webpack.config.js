const path = require('path');
const camelCase = require('lodash/camelCase');
const { name } = require('./package.json');

/* Change output to filename by convention */
let config = require('../webpack.config');
config.output = {
  path: path.resolve('./', 'js'),
  filename: `${camelCase(name)}.js`,
};

module.exports = config;