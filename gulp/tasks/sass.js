'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.root.src, cfg.static.src, cfg.sass.src, '/**/*.scss'),
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.sass.dest),
};

gulp.task('sass', () => {
  const processors = [
    autoprefixer,
  ];

  if (cfg.sass.minify) {
    processors.push(cssnano);
  }

  return gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.if(cfg.sass.sourcemaps, $.sourcemaps.init()))
    .pipe($.sass(cfg.sass.config))
    .pipe($.postcss(processors))
    .pipe($.if(cfg.sass.sourcemaps, cfg.sass.sourcemapsInline ?
      $.sourcemaps.write('.') : $.sourcemaps.write()))
    .pipe(gulp.dest(paths.dest));
});
