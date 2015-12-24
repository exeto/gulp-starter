'use strict';

const fs        = require('fs');
const gulp      = require('gulp');
const modernizr = require('modernizr');
const mkdirp    = require('mkdirp');
const path      = require('path');
const cfg       = require('config');

const dirname = path.dirname(cfg.path.modernizr);

gulp.task('modernizr', done => {
  modernizr.build(cfg.modernizr, result => {
    mkdirp(dirname, err => {
      if (err) { return console.error(err.toString()); }

      fs.writeFile(cfg.path.modernizr, result, err => {
        if (err) { return console.error(err.toString()); }

        done();
      });
    });
  });
});
