'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const plumber      = require('gulp-plumber');
const _if          = require('gulp-if');
const bs           = require('browser-sync');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

gulp.task('sass', () => {
  const processors = [
    autoprefixer,
  ];

  if (cfg.production) {
    processors.push(cssnano);
  }

  return gulp.src(cfg.path.scss.src)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(_if(!cfg.production, sourcemaps.init()))
    .pipe(sass(cfg.sass))
    .pipe(postcss(processors))
    .pipe(_if(!cfg.production, sourcemaps.write()))
    .pipe(gulp.dest(cfg.path.scss.dest))
    .pipe(bs.stream());
});
