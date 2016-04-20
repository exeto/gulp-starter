'use strict';

const path = require('path');
const gulp = require('gulp');
const cfg = require('config');

const paths = {
  sprite: path.join(cfg.root.src, cfg.img.src, cfg.sprite.src, '/**/*.png'),
  spriteSvg: path.join(cfg.root.src, cfg.img.src, cfg.spriteSvg.src, '/**/*.svg'),
  html: path.join(cfg.root.src, cfg.html.src, '/**/*.{html,json}'),
  copy: cfg.copy.map(folder => path.join(cfg.root.src, folder, '/**/*')),
};

gulp.task('watch', () => {
  gulp.watch(paths.sprite, ['sprite']);
  gulp.watch(paths.spriteSvg, ['sprite:svg']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.copy, ['copy']);
});
