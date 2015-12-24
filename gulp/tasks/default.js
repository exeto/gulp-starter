'use strict';

const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', done => {
  runSequence(
    'clean',
    ['sprite', 'sprite:svg', 'modernizr', 'html'],
    ['sass', 'webpack', 'copy'],
    'watch', 'browser-sync', done
  );
});
