'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    svgJar: {
      sourceDirs: [
        'public/assets',
        './node_modules/@ember-eui/core/public',
        './node_modules/@ember-eui/core/vendor/icon',
      ],
    },
  });

  return app.toTree();
};
