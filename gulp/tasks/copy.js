'use strict';

const path    = require('path');
const gulp    = require('gulp');
const changed = require('gulp-changed');
const bs      = require('browser-sync');
const cfg     = require('config');

const copy = cfg.copy.map(folder => path.join(cfg.root.src, folder, '/**/*'));

gulp.task('copy', () => (
  gulp.src(copy)
    .pipe(changed(cfg.root.dest))
    .pipe(gulp.dest(cfg.root.dest))
    .pipe(bs.stream())
));
