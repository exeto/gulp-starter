'use strict';

const gulp = require('gulp');
const del  = require('del');
const cfg  = require('config');

gulp.task('clean', (done) => {
  del(cfg.clean).then(() => done());
});
