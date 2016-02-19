'use strict';

const gulp    = require('gulp');
const webpack = require('webpack');
const bs      = require('browser-sync');
const wpcfg   = require('../../webpack.config');

gulp.task('webpack', (done) => {
  webpack(wpcfg, (err, stats) => {
    if (err) { throw new Error('webpack', err); }

    console.log('[webpack]', stats.toString({ colors: true }));
    bs.reload();
    done();
  });
});
