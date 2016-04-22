'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const modernizr = require('modernizr');
const mkdirp = require('mkdirp');
const cfg = require('config');

const paths = {
  dirDest: path.join(cfg.tmp, cfg.jsHead),
  dest: path.join(cfg.tmp, cfg.jsHead, 'modernizr.js'),
};

gulp.task('modernizr', cb => {
  modernizr.build(cfg.modernizr, result => {
    mkdirp(paths.dirDest, err => {
      if (err) { return console.error(err); }

      fs.writeFile(paths.dest, result, err => {
        if (err) { return console.error(err); }

        cb();
      });
    });
  });
});
