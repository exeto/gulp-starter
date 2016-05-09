'use strict';

const path = require('path');
const merge = require('lodash.mergewith');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cfg = require('config');

const baseConfig = require('./config.base');
const customizer = require('./utils/mergeCustomizer');

module.exports = merge({
  output: {
    filename: path.join(cfg.js.dest, '[chunkhash:15].js'),
    publicPath: `/${cfg.static}/`,
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?-minimize!postcss!resolve-url!sass?sourceMap',
          { publicPath: '../' }
        ),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loaders: [
          `file?name=${cfg.img.dest}/[hash:15].[ext]`,
          'image-webpack?{progressive:true,svgo:{plugins:[{removeUselessDefs:false}]}}',
        ],
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: `file?name=${cfg.fonts}/[hash:15].[ext]`,
      },
    ],
  },

  postcss: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
    require('postcss-csso')({ comments: false }),
  ],

  plugins: [
    new ExtractTextPlugin(`${cfg.sass.dest}/[contenthash:15].css`, { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}, baseConfig, customizer);
