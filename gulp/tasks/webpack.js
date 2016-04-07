'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

const wpcfg = require('../../webpack.config');

gulp.task('webpack', cb => {
  webpack(wpcfg, (err, stats) => {
    if (!err) {
      console.log('[webpack]', stats.toString({ colors: true }));
    }

    if (!wpcfg.watch && err) {
      cb(err);
    } else if (!cb.called) {
      cb.called = true;
      cb();
    }
  });
});
