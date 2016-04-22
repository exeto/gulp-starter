'use strict';

module.exports = {
  production: process.env.NODE_ENV === 'production',

  tmp: 'tmp',
  static: 'static',
  fonts: 'fonts',
  manifest: 'assets.json',
  jsHead: 'head',

  root: {
    src: 'source',
    dest: 'public',
  },

  copy: [
    'to-root',
  ],

  img: {
    src: 'img',
    dest: 'img',
  },

  sass: {
    src: 'scss',
    dest: 'css',
  },

  html: {
    src: 'html',
    dest: './',
    dataFolder: 'data',
    dataGlobalFile: 'global.json',
    excludeFolders: ['data', 'templates'],
    minify: false,
    htmlmin: {
      collapseWhitespace: true,
      minifyCSS: true,
      removeComments: true,
    },
    bem: {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '-',
    },
  },

  js: {
    src: 'js',
    dest: 'js',
    sourcemaps: 'cheap-module-eval-source-map',
  },

  sprite: {
    src: 'sprite',
    dest: 'sprite',
    spritesmith: {
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      retinaSrcFilter: '**/*@2x.png',
      cssName: '_sprite.scss',
      cssTemplate: 'gulp/templates/sprite.scss',
    },
  },

  spriteSvg: {
    src: 'sprite-svg',
    optimize: false,
    svgstore: {
      inlineSvg: true,
    },
  },

  modernizr: {
    minify: true,
    classPrefix: 'm-',
    options: [
      'html5shiv',
      'setClasses',
    ],
    'feature-detects': [],
  },
};
