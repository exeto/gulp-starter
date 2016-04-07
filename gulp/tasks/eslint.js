'use strict';

const path = require('path');
const gulp = require('gulp');
const eslint = require('eslint/lib/cli');
const cfg = require('config');

const src = path.join(cfg.root.src, cfg.static.src, cfg.js.src);

gulp.task('eslint', (done) => {
  eslint.execute(`--ext .js,.jsx ${src}`);
  done();
});
