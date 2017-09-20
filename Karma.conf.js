module.exports = function(config) {
    config.set({
      basePath: './src/app',

      frameworks: ['jasmine'],

      files: [
        '../vendor/js/angular.min.js',
        '../vendor/js/angular-mocks.js',
        '*.js'
      ],

      port: 8080,

      logLevel: config.LOG_INFO,

      autoWatch: true,

      browsers: ['Chrome'],
      
      singleRun: false
    });
  };