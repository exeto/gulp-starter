'use strict';

const path         = require('path');
const fs           = require('fs');
const co           = require('co');
const pify         = require('pify');
const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const _if          = require('gulp-if');
const data         = require('gulp-data');
const render       = require('gulp-nunjucks-render');
const htmlmin      = require('gulp-htmlmin');
const posthtml     = require('gulp-posthtml');
const bem          = require('posthtml-bem');
const bs           = require('browser-sync');
const cfg          = require('config');
const handleErrors = require('../handlers/error');
const readFile     = pify(fs.readFile);

const paths = {
  src: [
    path.join(cfg.path.src, cfg.html.src, '/**/*.html'),
    path.join(`!${cfg.path.src}`, cfg.html.src,
      `{${cfg.html.excludeFolders.join(',')}}`, '/**'),
  ],
  dest: path.join(cfg.path.dest, cfg.html.dest),
  htmlFolder: path.join(cfg.path.src, cfg.html.src),
  dataFolder: path.join(cfg.path.src, cfg.html.src, cfg.html.dataFolder),
  dataGlobalFile: path.join(cfg.path.src, cfg.html.src, cfg.html.dataFolder,
    cfg.html.dataGlobalFile),
};

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

function getData(file) {
  return co(function* () {
    const pathParsed = path.parse(file.path);
    const diffPath = path.relative(paths.htmlFolder, pathParsed.dir);
    const pathLocalFile = path.join(paths.dataFolder, diffPath,
      `${pathParsed.name}.json`);

    return {
      global: fileExists(paths.dataGlobalFile) ?
        JSON.parse(yield readFile(paths.dataGlobalFile)) : {},
      local: fileExists(pathLocalFile) ?
        JSON.parse(yield readFile(pathLocalFile)) : {},
    };
  });
}

gulp.task('html', () => {
  render.nunjucks.configure([paths.htmlFolder], { watch: false });

  return gulp.src(paths.src)
    .pipe(_if(!cfg.production, plumber(handleErrors)))
    .pipe(data(getData))
    .pipe(render())
    .pipe(posthtml(bem(cfg.bem)))
    .pipe(_if(cfg.production, htmlmin(cfg.html.htmlmin)))
    .pipe(gulp.dest(cfg.path.dest))
    .pipe(bs.stream());
});
