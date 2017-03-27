// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-09-24 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/ExplorerCanvas/excanvas.js',
      'bower_components/respond/dest/respond.src.js',
      'bower_components/jquery-migrate/jquery-migrate.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
      'bower_components/slimScroll/jquery.slimscroll.js',
      'bower_components/blockUI/jquery.blockUI.js',
      'bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/crypto-js/crypto-js.js',
      'bower_components/jquery-backstretch/jquery.backstretch.js',
      'bower_components/select2/select2.js',
      'bower_components/angular-ui-select3/src/select3.js',
      'bower_components/ui-select/dist/select.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-validator/dist/angular-validator.js',
      'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
      'bower_components/jquery.pulsate/jquery.pulsate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/toastr/toastr.js',
      'bower_components/bootbox.js/bootbox.js',
      'bower_components/datatables.net/js/jquery.dataTables.js',
      'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
      'bower_components/underscore/underscore.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8081,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
