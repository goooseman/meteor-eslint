Package.describe({
  name: 'goooseman:eslint',
  version: '2.1.0_1',
  summary: 'ESLint v2 for use with meteor lint',
  documentation: 'README.md',
  git: 'https://github.com/goooseman/meteor-eslint.git'
});

Package.registerBuildPlugin({
  name: "eslint",
  sources: [
    'plugin/eslint.js'
  ],
  npmDependencies: {
    "eslint": "2.1.0",
    "strip-json-comments": "1.0.4"
  }
});

Package.onUse(function(api) {
  api.use('isobuild:linter-plugin@1.0.0');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('goooseman:eslint');
});
