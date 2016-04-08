'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.tmp, cfg.jsHead.src, '/**/*.js'),
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.js.dest),
};

gulp.task('js:head', () => (
  gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.concat(cfg.jsHead.filename))
    .pipe($.if(cfg.jsHead.minify, $.uglify()))
    .pipe(gulp.dest(paths.dest))
));
