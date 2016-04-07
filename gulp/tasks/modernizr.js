'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const modernizr = require('modernizr');
const mkdirp = require('mkdirp');
const cfg = require('config');

const paths = {
  dirDest: path.join(cfg.root.src, cfg.static.src, cfg.js.src, cfg.js.head.src),
  dest: path.join(cfg.root.src, cfg.static.src, cfg.js.src, cfg.js.head.src,
    cfg.modernizr.filename),
};

gulp.task('modernizr', (done) => {
  modernizr.build(cfg.modernizr.config, (result) => {
    mkdirp(paths.dirDest, err => {
      if (err) { return console.error(err.toString()); }

      fs.writeFile(paths.dest, result, err => {
        if (err) { return console.error(err.toString()); }

        done();
      });
    });
  });
});
