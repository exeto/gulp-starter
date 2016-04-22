'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.root.src, cfg.img.src, cfg.sprite.src, '/**/*.png'),
  dest: path.join(cfg.tmp, cfg.sprite.dest),
};

gulp.task('sprite', () => (
  gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.spritesmith(cfg.sprite.spritesmith))
    .pipe(gulp.dest(paths.dest))
));
