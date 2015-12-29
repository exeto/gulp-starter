'use strict';

const gulp        = require('gulp');
const spritesmith = require('gulp.spritesmith');
const imagemin    = require('gulp-imagemin');
const buffer      = require('vinyl-buffer');
const merge       = require('merge-stream');
const _if         = require('gulp-if');
const cfg         = require('config');

gulp.task('sprite', () => {
  const spriteData = gulp.src(cfg.path.sprite)
    .pipe(spritesmith(cfg.spritesmith));

  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(_if(cfg.production, imagemin(cfg.imagemin)))
    .pipe(gulp.dest(cfg.path.img.dest));

  const cssStream = spriteData.css
    .pipe(gulp.dest('source/static/scss'));

  return merge(imgStream, cssStream);
});
