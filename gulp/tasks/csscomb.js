'use strict';

const gulp    = require('gulp');
const csscomb = require('gulp-csscomb');
const cfg     = require('config');

gulp.task('csscomb', () => {
  return gulp.src(cfg.path.scss.src)
    .pipe(csscomb())
    .pipe(gulp.dest(cfg.path.csscomb));
});
