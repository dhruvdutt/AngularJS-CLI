'use strict';
// Karma configuration
// Generated on Sun Oct 02 2016 12:27:57 GMT-0400 (EDT)

var webpackConfig = require('./webpack.config.js'),
    path = require('path');

module.exports = function(config) {
    var angularPath = path.join('node_modules', 'angular', 'angular.js'),
        angularMock = path.join('node_modules', 'angular-mocks', 'angular-mocks.js');

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],

        // list of files / patterns to load in the browser
        files: [
            angularPath,
            angularMock,
            {
                pattern: 'client/scripts/{,*/}{,*/}spec/*.js',
                included: true,
                watched: false,
                served: true
            }
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            angularPath: ['webpack'],
            angularMock: ['webpack'],
            'client/scripts/{,*/}{,*/}spec/*.js': ['webpack']

        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots'],


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        plugins: [
            'karma-mocha-reporter',
            'karma-sinon-chai',
            'karma-junit-reporter',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-webpack',
            'istanbul-instrumenter-loader'
        ],

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true,
            lazy: false
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
