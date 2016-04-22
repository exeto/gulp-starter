'use strict';

const path = require('path');
const gulp = require('gulp');
const bs = require('browser-sync').create();
const webpack = require('webpack');
const notifier = require('node-notifier');
const cfg = require('config');

const wpcfg = require('../../webpack/config.dev');

const compiler = webpack(wpcfg);

gulp.task('dev-server', cb => {
  const bsConfig = {
    open: false,
    notify: false,

    server: {
      baseDir: cfg.root.dest,

      middleware: [
        require('webpack-dev-middleware')(compiler, {
          noInfo: true,
          publicPath: wpcfg.output.publicPath,
          stats: {
            colors: true,
          },
        }),
        require('webpack-hot-middleware')(compiler),
      ],
    },

    files: [
      path.join(cfg.root.dest, '/**'),
    ],
  };

  compiler.plugin('done', stats => {
    notifier.notify({
      title: 'webpack',
      message: stats.toJson().errors[0],
    });

    if (!bs.active) {
      bs.init(bsConfig, cb);
    }
  });
});
