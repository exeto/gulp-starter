'use strict';

const gulp        = require('gulp');
const spritesmith = require('gulp.spritesmith');
const cfg         = require('config');

gulp.task('sprite', () => {
  return gulp.src(cfg.path.sprite)
    .pipe(spritesmith(cfg.spritesmith))
    .pipe(gulp.dest(cfg.path.src));
});
