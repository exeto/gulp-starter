'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', cb => {
  runSequence(
    'clean',
    ['sprite', 'sprite:svg', 'modernizr', 'copy'],
    'watch', 'dev-server', 'html', cb
  );
});
