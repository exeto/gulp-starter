'use strict';

const path    = require('path');
const webpack = require('webpack');
const cfg     = require('config');

const paths = {
  context: path.join(__dirname, cfg.root.src, cfg.static.src, cfg.js.src),
  dest: path.join(__dirname, cfg.root.dest, cfg.static.dest, cfg.js.dest),
};

module.exports = {
  context: paths.context,

  entry: './main.js',

  output: {
    path: paths.dest,
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

  externals: {
    modernizr: 'Modernizr',
  },

  devtool: cfg.js.sourcemaps ? cfg.js.sourcemapsType : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};

if (cfg.js.minify) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    })
  );
}

if (cfg.production) {
  module.exports.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  );
}
