'use strict';

const gulp = require('gulp');
const bs   = require('browser-sync');
const cfg  = require('config');

cfg.browserSync.server = cfg.root.dest;

gulp.task('browser-sync', (done) => {
  bs.init(cfg.browserSync, () => done());
});
