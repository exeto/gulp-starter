'use strict';

const path     = require('path');
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const _if      = require('gulp-if');
const cfg      = require('config');

const paths = {
  src: [
    path.join(cfg.root.src, cfg.static.src, cfg.img.src,
      '/**/*.{png,jpg,jpeg,JPG,JPEG,gif,svg}'),
    path.join(`!${cfg.root.src}`, cfg.static.src, cfg.img.src,
      `{${cfg.img.excludeFolders.join(',')}}`, '/**'),
  ],
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.img.dest),
};

gulp.task('img', () => (
  gulp.src(paths.src)
    .pipe(_if(cfg.img.optimize, imagemin(cfg.imagemin)))
    .pipe(gulp.dest(paths.dest))
));
