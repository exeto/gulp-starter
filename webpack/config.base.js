'use strict';

const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const cfg = require('config');

module.exports = {
  context: path.join(__dirname, '..', cfg.root.src),

  entry: {
    main: [
      `./${path.join(cfg.js.src, 'main.js')}`,
      `./${path.join(cfg.sass.src, 'main.scss')}`,
    ],
    head: `./${path.join(cfg.js.src, 'head.js')}`,
  },

  output: {
    path: path.join(__dirname, '..', cfg.root.dest, cfg.static),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|tmp)/,
        loader: 'babel',
      },
    ],
  },

  sassLoader: {
    includePaths: [
      path.join(__dirname, '..', cfg.tmp),
    ],
  },

  externals: {
    modernizr: 'Modernizr',
  },

  resolve: {
    alias: {
      head: path.join(__dirname, '..', cfg.tmp, cfg.jsHead),
    },
  },

  plugins: [
    new AssetsPlugin({
      filename: cfg.manifest,
      path: path.join(__dirname, '..', cfg.tmp),
    }),
  ],

  devtool: cfg.js.sourcemaps,
};
