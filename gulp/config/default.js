'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'production',
  path: {
    src: 'source',
    dest: 'public',
    sprite: 'source/img/sprite/**/*.png',
    spriteSVG: 'source/img/sprite-svg/**/*.svg',
    html: 'source/**/*.html',
    modernizr: 'public/js/modernizr.js',
    csscomb: 'source/scss',
    img: {
      src: 'public/img/**/*.{png,jpg,JPG,JPEG,jpeg,gif,svg}',
      dest: 'public/img',
    },
    js: {
      src: '/source/js',
      dest: '/public/js',
      watch: 'source/js/**/*.js',
    },
    scss: {
      src: 'source/scss/**/*.scss',
      dest: 'public/css',
    },
  },

  copy: [
    '!source/scss{,/**/*}',
    '!source/js{,/**/*}',
    '!source/img/sprite{,/**/*}',
    '!source/img/sprite-svg{,/**/*}',
    '!source/**/*.html',
    '!source/html',
    '!source/.eslintrc',
    'source/**/*',
  ],

  clean: [
    'public',
    'source/scss/_sprite.scss',
    'source/scss/_sprite-svg.scss',
    'source/img/sprite.png',
    'source/img/sprite@2x.png',
    'source/img/sprite-svg.svg',
    'source/img/sprite-svg.png',
    '.sass-cache',
  ],

  eslint: '--ext .js,.jsx ./source/js',
  imagemin: { progressive: true },
  sass: { outputStyle: 'expanded' },

  svg: {
    shape: {
      'spacing': {
        'padding': 2,
      },
    },
    mode: {
      css: {
        dest: '.',
        prefix: 'svg-icon--%s',
        sprite: 'img/sprite-svg.svg',
        bust: false,
        layout: 'horizontal',
        render: {
          scss: {
            template: 'gulp/templates/sprite-svg-template.scss',
            dest: 'scss/_sprite-svg.scss',
          },
        },
      },
    },
  },

  spritesmith: {
    retinaSrcFilter: 'source/img/sprite/*@2x.png',
    imgName: 'img/sprite.png',
    retinaImgName: 'img/sprite@2x.png',
    cssName: 'scss/_sprite.scss',
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
    root: 'source/html',
  },
};
