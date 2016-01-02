'use strict';

const path = require('path');
const gulp = require('gulp');
const cfg  = require('config');

const paths = {
  html: path.join(cfg.path.src, cfg.html.src, '/**/*.{html,json}'),
};

gulp.task('watch', () => {
  gulp.watch(cfg.path.js.watch, ['webpack']);
  gulp.watch(`${cfg.path.headjs.src}/**/*.js`, ['js:head']);
  gulp.watch(cfg.path.scss.src, ['sass']);
  gulp.watch(cfg.path.sprite, ['sprite', 'sass']);
  gulp.watch(cfg.path.spriteSVG, ['sprite:svg']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(cfg.copy, ['copy']);
});
