'use strict';

const gulp = require('gulp');
const bs   = require('browser-sync');
const cfg  = require('config');

gulp.task('browser-sync', () => {
  bs.init(cfg.bs);
});
