'use strict';

const path    = require('path');
const gulp    = require('gulp');
const csscomb = require('gulp-csscomb');
const cfg     = require('config');

const paths = {
  src: path.join(cfg.root.src, cfg.static.src, cfg.sass.src, '/**/*.scss'),
  dest: path.join(cfg.root.src, cfg.static.src, cfg.sass.src),
};

gulp.task('csscomb', () => (
  gulp.src(paths.src)
    .pipe(csscomb())
    .pipe(gulp.dest(paths.dest))
));
