'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const buffer = require('vinyl-buffer');
const merge = require('merge-stream');
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.root.src, cfg.static.src, cfg.img.src, cfg.sprite.src, '/**/*.png'),
  imgDest: path.join(cfg.root.dest, cfg.static.dest, cfg.img.dest, cfg.sprite.imgDest),
};

cfg.sprite.spritesmith.retinaSrcFilter = path.join(cfg.root.src, cfg.static.src, cfg.img.src,
  cfg.sprite.src, '/**/*@2x.png');

gulp.task('sprite', () => {
  const spriteData = gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.spritesmith(cfg.sprite.spritesmith));

  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe($.if(cfg.sprite.optimize, $.imagemin(cfg.imagemin)))
    .pipe(gulp.dest(paths.imgDest));

  const cssStream = spriteData.css
    .pipe(gulp.dest(cfg.tmp));

  return merge(imgStream, cssStream);
});
