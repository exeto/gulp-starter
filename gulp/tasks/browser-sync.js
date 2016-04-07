'use strict';

const path = require('path');
const gulp = require('gulp');
const bs = require('browser-sync').create();
const cfg = require('config');

const watch = path.join(cfg.root.dest, '**/*.*');
cfg.browserSync.server = cfg.root.dest;

gulp.task('browser-sync', (done) => {
  bs.watch(watch).on('change', bs.reload);
  bs.init(cfg.browserSync, () => done());
});
