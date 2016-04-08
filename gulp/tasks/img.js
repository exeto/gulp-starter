'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const cfg = require('config');

const paths = {
  src: [
    path.join(cfg.root.src, cfg.static.src, cfg.img.src, '/**/*.{png,jpg,jpeg,JPG,JPEG,gif,svg}'),
    path.join(`!${cfg.root.src}`, cfg.static.src, cfg.img.src,
      `{${cfg.img.excludeFolders.join(',')}}`, '/**'),
  ],
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.img.dest),
};

gulp.task('img', () => (
  gulp.src(paths.src)
    .pipe($.if(cfg.img.optimize, $.imagemin(cfg.imagemin)))
    .pipe(gulp.dest(paths.dest))
));
