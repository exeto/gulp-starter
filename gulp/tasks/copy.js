'use strict';

const gulp    = require('gulp');
const changed = require('gulp-changed');
const bs      = require('browser-sync');
const cfg     = require('config');

gulp.task('copy', () => {
  return gulp.src(cfg.copy)
    .pipe(changed(cfg.path.dest))
    .pipe(gulp.dest(cfg.path.dest))
    .pipe(bs.stream());
});
