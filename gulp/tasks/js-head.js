'use strict';

const gulp         = require('gulp');
const concat       = require('gulp-concat');
const plumber      = require('gulp-plumber');
const uglify       = require('gulp-uglify');
const _if          = require('gulp-if');
const bs           = require('browser-sync');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

gulp.task('js:head', () => {
  return gulp.src(`${cfg.path.headjs.src}/**/*.js`)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(concat(cfg.path.headjs.filename))
    .pipe(_if(cfg.production, uglify()))
    .pipe(gulp.dest(cfg.path.headjs.dest))
    .pipe(bs.stream());
});
