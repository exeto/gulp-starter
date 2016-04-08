'use strict';

const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const _if = require('gulp-if');
const cfg = require('config');
const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.tmp, cfg.jsHead.src, '/**/*.js'),
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.js.dest),
};

gulp.task('js:head', () => (
  gulp.src(paths.src)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(concat(cfg.jsHead.filename))
    .pipe(_if(cfg.jsHead.minify, uglify()))
    .pipe(gulp.dest(paths.dest))
));
