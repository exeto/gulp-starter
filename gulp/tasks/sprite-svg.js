'use strict';

const path         = require('path');
const gulp         = require('gulp');
const _if          = require('gulp-if');
const plumber      = require('gulp-plumber');
const imagemin     = require('gulp-imagemin');
const svgstore     = require('gulp-svgstore');
const svg2string   = require('gulp-svg2string');
const cfg          = require('config');
const handleErrors = require('../handlers/error');

const paths = {
  src: path.join(cfg.root.src, cfg.static.src, cfg.img.src, cfg.spriteSvg.src,
    '/**/*.svg'),
  jsHeadSrc: path.join(cfg.root.src, cfg.static.src, cfg.js.src,
    cfg.js.head.src),
};

gulp.task('sprite:svg', () => {
  return gulp.src(paths.src)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(_if(cfg.spriteSvg.optimize, imagemin(cfg.imagemin)))
    .pipe(svgstore(cfg.spriteSvg.svgstore))
    .pipe(svg2string())
    .pipe(gulp.dest(paths.jsHeadSrc));
});
