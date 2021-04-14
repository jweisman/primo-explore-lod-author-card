const path = require('path');

const config = {
  entry: {
    index: path.resolve('./', 'src/index.js'),
  },
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          /* transpile to ES5 as Primo Dev Env uses Uglifier which doesn't support ES6 */
          options: {
            presets: [
              '@babel/preset-env',
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ]
          }
        }
      }
    ]
  },
};

module.exports = config;