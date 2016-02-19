'use strict';

const path         = require('path');
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const plumber      = require('gulp-plumber');
const _if          = require('gulp-if');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const cfg          = require('config');
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
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(_if(cfg.sass.sourcemaps, sourcemaps.init()))
    .pipe(sass(cfg.sass.config))
    .pipe(postcss(processors))
    .pipe(_if(cfg.sass.sourcemaps, cfg.sass.sourcemapsInline ?
      sourcemaps.write('.') : sourcemaps.write()))
    .pipe(gulp.dest(paths.dest));
});
