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
  src: path.join(cfg.root.src, cfg.static.src, cfg.js.src, cfg.js.head.src,
    '/**/*.js'),
  dest: path.join(cfg.root.dest, cfg.static.dest, cfg.js.dest),
};

gulp.task('js:head', () => (
  gulp.src(paths.src)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(concat(cfg.js.head.filename))
    .pipe(_if(cfg.js.head.minify, uglify()))
    .pipe(gulp.dest(paths.dest))
));
