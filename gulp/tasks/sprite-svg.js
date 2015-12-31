'use strict';

const gulp         = require('gulp');
const _if          = require('gulp-if');
const plumber      = require('gulp-plumber');
const imagemin     = require('gulp-imagemin');
const svgstore     = require('gulp-svgstore');
const svg2string   = require('gulp-svg2string');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

gulp.task('sprite:svg', () => {
  return gulp.src(cfg.path.spriteSVG)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(_if(cfg.production, imagemin(cfg.imagemin)))
    .pipe(svgstore(cfg.svgstore))
    .pipe(svg2string())
    .pipe(gulp.dest(cfg.path.headjs.src));
});
