'use strict';

const path = require('path');
const merge = require('lodash.mergewith');
const webpack = require('webpack');
const cfg = require('config');

const baseConfig = require('./config.base');
const customizer = require('./utils/mergeCustomizer');

module.exports = merge({
  entry: {
    main: ['webpack-hot-middleware/client?reload=true'],
  },

  output: {
    filename: path.join(cfg.js.dest, '[name].js?[hash:15]'),
    publicPath: `http://localhost:3000/${cfg.static}/`,
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!resolve-url!sass?sourceMap',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: `file?name=${cfg.img.dest}/[name]-[hash:5].[ext]`,
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: `file?name=${cfg.fonts}/[name]-[hash:5].[ext]`,
      },
    ],
  },

  postcss: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}, baseConfig, customizer);
