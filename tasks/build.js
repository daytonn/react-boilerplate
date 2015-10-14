var gulp = require('gulp')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var babelify = require('babelify')

gulp.task('build', function() {
  return browserify({
    entries: 'src/javascripts/app.js',
    debug: true
  })
    .transform(babelify)
    .bundle().on('error', function(err) {
      console.log(err.message)
      this.emit('end')
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts'))
})
