'use strict';

const notifier = require('node-notifier');

module.exports = function (error) {
  notifier.notify({
    title: error.plugin,
    message: error.message,
  });

  console.error(`${error.plugin}: ${error.message}`);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};
