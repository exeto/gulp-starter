'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

const wpcfg = require('../../webpack/config.prod');

gulp.task('webpack', cb => {
  webpack(wpcfg, (err, stats) => {
    if (err) { cb(err); }
    console.log(stats.toString({ colors: true }));
    cb();
  });
});
