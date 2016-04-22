'use strict';

const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.root.src, cfg.img.src, cfg.spriteSvg.src, '/**/*.svg'),
  dest: path.join(cfg.tmp, cfg.jsHead),
};

gulp.task('sprite:svg', () => (
  gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.if(cfg.spriteSvg.optimize, $.svgmin()))
    .pipe($.svgstore(cfg.spriteSvg.svgstore))
    .pipe($.svg2string())
    .pipe(gulp.dest(paths.dest))
));
