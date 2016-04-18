'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const posthtml = require('gulp-posthtml');
const bem = require('posthtml-bem');
const cfg = require('config');

const handleErrors = require('../handlers/error');

const paths = {
  src: [
    path.join(cfg.root.src, cfg.html.src, '/**/*.html'),
    path.join(`!${cfg.root.src}`, cfg.html.src, `{${cfg.html.excludeFolders.join(',')}}`, '/**'),
  ],
  dest: path.join(cfg.root.dest, cfg.html.dest),
  htmlFolder: path.join(cfg.root.src, cfg.html.src),
  dataFolder: path.join(cfg.root.src, cfg.html.src, cfg.html.dataFolder),
  dataGlobalFile: path.join(cfg.root.src, cfg.html.src, cfg.html.dataFolder,
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
  const pathParsed = path.parse(file.path);
  const diffPath = path.relative(paths.htmlFolder, pathParsed.dir);
  const pathLocalFile = path.join(paths.dataFolder, diffPath, `${pathParsed.name}.json`);

  return {
    global: fileExists(paths.dataGlobalFile)
      ? JSON.parse(fs.readFileSync(paths.dataGlobalFile, 'utf-8'))
      : {},
    local: fileExists(pathLocalFile)
      ? JSON.parse(fs.readFileSync(pathLocalFile, 'utf-8'))
      : {},
  };
}

gulp.task('html', () => (
  gulp.src(paths.src)
    .pipe($.if(!cfg.production, $.plumber(handleErrors)))
    .pipe($.data(getData))
    .pipe($.nunjucksRender({
      path: paths.htmlFolder,
      envOptions: {
        watch: false,
        autoescape: false,
      },
    }))
    .pipe(posthtml(bem(cfg.html.bem)))
    .pipe($.if(cfg.html.minify, $.htmlmin(cfg.html.htmlmin)))
    .pipe(gulp.dest(cfg.root.dest))
));
