'use strict';

const webpack = require('webpack');
const cfg     = require('config');

module.exports = {
  context: __dirname + cfg.path.js.src,

  entry: './main.js',

  output: {
    path: __dirname + cfg.path.js.dest,
    filename: 'main.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },

  devtool: cfg.production ? null : 'eval',

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
};

if (cfg.production) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
