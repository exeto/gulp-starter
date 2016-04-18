'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', cb => {
  runSequence(
    'clean',
    ['sprite', 'sprite:svg', 'modernizr', 'copy'],
    'webpack', 'html', cb
  );
});
