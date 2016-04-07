'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (done) => {
  runSequence(
    'clean',
    ['sprite', 'sprite:svg', 'modernizr',
    'html', 'img', 'copy', 'webpack'],
    ['sass', 'js:head'], 'watch', 'browser-sync', done
  );
});
