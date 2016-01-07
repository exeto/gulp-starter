'use strict';

module.exports = {
  production: process.env.NODE_ENV === 'production',

  root: {
    src: 'source',
    dest: 'public',
  },

  static: {
    src: 'static',
    dest: 'static',
  },

  copy: [
    'misc',
  ],

  img: {
    src: 'img',
    dest: 'img',
    excludeFolders: ['sprite', 'sprite-svg'],
    optimize: false,
  },

  sass: {
    src: 'scss',
    dest: 'css',
    minify: false,
    sourcemaps: true,
    sourcemapsInline: false,
    config: { outputStyle: 'expanded' },
  },

  html: {
    src: 'pages',
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
    minify: false,
    sourcemaps: true,
    sourcemapsType: 'eval',
    head: {
      src: 'head',
      filename: 'head.js',
      minify: false,
    },
  },

  sprite: {
    src: 'sprite',
    imgDest: './',
    scssDest: './',
    optimize: false,
    spritesmith: {
      retinaImgName: 'sprite@2x.png',
      retinaImgPath: '../img/sprite@2x.png',
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: '_sprite.scss',
      cssTemplate: 'gulp/templates/sprite-template.scss',
      padding: 1,
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
    filename: 'modernizr.js',
    config: {
      'minify': true,
      'classPrefix': 'm-',
      'options': [
        'html5shiv',
        'setClasses',
      ],
      'feature-detects': [],
    },
  },

  browserSync: {
    open: false,
  },

  imagemin: {
    progressive: true,
  },
};
