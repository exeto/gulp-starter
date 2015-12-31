'use strict';

const gulp = require('gulp');
const cfg  = require('config');

gulp.task('watch', () => {
  gulp.watch(cfg.path.js.watch, ['webpack']);
  gulp.watch(`${cfg.path.headjs.src}/**/*.js`, ['js:head']);
  gulp.watch(cfg.path.scss.src, ['sass']);
  gulp.watch(cfg.path.sprite, ['sprite', 'sass']);
  gulp.watch(cfg.path.spriteSVG, ['sprite:svg']);
  gulp.watch(cfg.path.html, ['html']);
  gulp.watch(cfg.copy, ['copy']);
});
