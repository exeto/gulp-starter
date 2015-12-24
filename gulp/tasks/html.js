'use strict';

const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const posthtml     = require('gulp-posthtml');
const bem          = require('posthtml-bem');
const include      = require('posthtml-include');
const bs           = require('browser-sync');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

gulp.task('html', () => {
  return gulp.src(cfg.path.html)
    .pipe(plumber(handleErrors))
    .pipe(posthtml([
      include(cfg.include),
      bem(cfg.bem),
    ]))
    .pipe(gulp.dest(cfg.path.dest))
    .pipe(bs.stream());
});
