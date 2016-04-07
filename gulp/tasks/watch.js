'use strict';

const path = require('path');
const gulp = require('gulp');
const cfg = require('config');

const paths = {
  js: [
    path.join(cfg.root.src, cfg.static.src, cfg.js.src, '/**/*.js'),
    path.join(`!${cfg.root.src}`, cfg.static.src, cfg.js.src, cfg.js.head.src,
      '/**/*'),
  ],
  jsHead: path.join(cfg.root.src, cfg.static.src, cfg.js.src, cfg.js.head.src,
    '/**/*.js'),
  sass: path.join(cfg.root.src, cfg.static.src, cfg.sass.src, '/**/*.scss'),
  sprite: path.join(cfg.root.src, cfg.static.src, cfg.img.src, cfg.sprite.src,
    '/**/*.png'),
  spriteSvg: path.join(cfg.root.src, cfg.static.src, cfg.img.src,
    cfg.spriteSvg.src, '/**/*.svg'),
  html: path.join(cfg.root.src, cfg.html.src, '/**/*.{html,json}'),
  img: [
    path.join(cfg.root.src, cfg.static.src, cfg.img.src,
      '/**/*.{png,jpg,jpeg,JPG,JPEG,gif,svg}'),
    path.join(`!${cfg.root.src}`, cfg.static.src, cfg.img.src,
      `{${cfg.img.excludeFolders.join(',')}}`, '/**'),
  ],
  copy: cfg.copy.map(folder => path.join(cfg.root.src, folder, '/**/*')),
};

gulp.task('watch', () => {
  gulp.watch(paths.js, ['webpack']);
  gulp.watch(paths.jsHead, ['js:head']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.sprite, ['sprite', 'sass']);
  gulp.watch(paths.spriteSvg, ['sprite:svg']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.img, ['img']);
  gulp.watch(paths.copy, ['copy']);
});
