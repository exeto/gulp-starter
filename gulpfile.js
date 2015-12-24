'use strict';

process.env.NODE_CONFIG_DIR = './gulp/config';

const requireDir = require('require-dir');

requireDir('./gulp/tasks');
