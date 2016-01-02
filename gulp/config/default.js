'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'production',

  path: {
    src: 'source',
    dest: 'public',
    sprite: 'source/static/img/sprite/**/*.png',
    spriteSVG: 'source/static/img/sprite-svg/**/*.svg',
    modernizr: 'source/static/js/head/modernizr.js',
    csscomb: 'source/static/scss',
    img: {
      src: [
        '!source/static/img/sprite/**',
        '!source/static/img/sprite-svg/**',
        'source/static/img/**/*.{png,jpg,JPG,JPEG,jpeg,gif,svg}',
      ],
      dest: 'public/static/img',
    },
    js: {
      src: '/source/static/js',
      dest: '/public/static/js',
      watch: 'source/static/js/**/*.js',
    },
    headjs: {
      src: 'source/static/js/head',
      dest: 'public/static/js',
      filename: 'head.js',
    },
    scss: {
      src: 'source/static/scss/**/*.scss',
      dest: 'public/static/css',
    },
  },

  html: {
    src: 'pages',
    dest: './',
    dataFolder: 'data',
    dataGlobalFile: 'global.json',
    excludeFolders: ['data', 'templates'],
    htmlmin: { collapseWhitespace: true },
  },

  copy: [
    'source/misc/**/*',
  ],

  clean: [
    'public',
    'source/static/scss/_sprite.scss',
    'source/static/scss/_sprite-svg.scss',
    'source/static/js/head',
  ],

  eslint: '--ext .js,.jsx ./source/static/js',
  imagemin: { progressive: true },
  sass: { outputStyle: 'expanded' },
  svgstore: { inlineSvg: true },

  spritesmith: {
    retinaSrcFilter: 'source/static/img/sprite/**/*@2x.png',
    retinaImgName: 'sprite@2x.png',
    retinaImgPath: '../img/sprite@2x.png',
    imgName: 'sprite.png',
    imgPath: '../img/sprite.png',
    cssName: '_sprite.scss',
    cssTemplate: 'gulp/templates/sprite-template.scss',
    padding: 1,
  },

  modernizr: {
    'minify': true,
    'classPrefix': 'm-',
    'options': [
      'html5shiv',
      'setClasses',
    ],
    'feature-detects': [
      'test/svg',
    ],
  },

  bs: {
    server: 'public',
    open: false,
  },

  bem: {
    elemPrefix: '__',
    modPrefix: '--',
    modDlmtr: '-',
  },

  include: {
    root: 'source/pages/templates',
  },
};
