'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const modernizr = require('modernizr');
const mkdirp = require('mkdirp');
const cfg = require('config');

const paths = {
  dirDest: path.join(cfg.tmp, cfg.jsHead.src),
  dest: path.join(cfg.tmp, cfg.jsHead.src, 'modernizr.js'),
};

gulp.task('modernizr', (done) => {
  modernizr.build(cfg.modernizr, (result) => {
    mkdirp(paths.dirDest, err => {
      if (err) { return console.error(err.toString()); }

      fs.writeFile(paths.dest, result, err => {
        if (err) { return console.error(err.toString()); }

        done();
      });
    });
  });
});
