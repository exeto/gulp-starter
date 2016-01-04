'use strict';

const path = require('path');
const gulp = require('gulp');
const del  = require('del');
const cfg  = require('config');

const clean = [
  cfg.root.dest,
  path.join(cfg.root.src, cfg.static.src, cfg.sass.src, cfg.sprite.spritesmith.cssName),
  path.join(cfg.root.src, cfg.static.src, cfg.js.src, cfg.js.head.src),
];

gulp.task('clean', (done) => {
  del(clean).then(() => done());
});
