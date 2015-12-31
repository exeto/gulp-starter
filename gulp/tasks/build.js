'use strict';

const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', done => {
  runSequence(
    'clean',
    ['sprite', 'sprite:svg', 'modernizr',
    'html', 'img', 'copy', 'eslint', 'webpack'],
    ['sass', 'js:head'], done
  );
});
