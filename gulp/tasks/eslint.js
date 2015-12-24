'use strict';

const gulp   = require('gulp');
const eslint = require('eslint/lib/cli');
const cfg    = require('config');

gulp.task('eslint', done => {
  eslint.execute(cfg.eslint);
  done();
});
