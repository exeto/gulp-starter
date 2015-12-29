'use strict';

const gulp         = require('gulp');
const _if          = require('gulp-if');
const svgSprite    = require('gulp-svg-sprite');
const svg2png      = require('gulp-svg2png');
const filter       = require('gulp-filter');
const plumber      = require('gulp-plumber');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

gulp.task('sprite:svg', () => {
  return gulp.src(cfg.path.spriteSVG)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(svgSprite(cfg.svg))
    .pipe(gulp.dest('.'))
    .pipe(filter('**/*.svg'))
    .pipe(svg2png())
    .pipe(gulp.dest('.'));
});
