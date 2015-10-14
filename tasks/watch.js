var gulp = require('gulp')

gulp.task('watch', function () {
  gulp.watch('src/stylesheets/**/*.scss', ['sass'])
  gulp.watch('src/javascripts/**/*.js', ['build'])
})
