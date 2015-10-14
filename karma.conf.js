module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'browserify'],
    files: ['test/**/*_test.js'],
    exclude: [],
    preprocessors: { 'test/**/*.js': ['browserify'] },
    reporters: ['progress'],
    browserify: { debug: true, transform: ['babelify'] },
    client: { mocha: { reporter: 'html' } },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
