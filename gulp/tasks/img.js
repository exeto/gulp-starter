'use strict';

const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const cfg      = require('config');

gulp.task('img', () => {
  return gulp.src(cfg.path.img.src)
    .pipe(imagemin(cfg.imagemin))
    .pipe(gulp.dest(cfg.path.img.dest));
});
