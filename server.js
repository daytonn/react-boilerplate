var browserSync = require('browser-sync')
browserSync.init({
  server: { baseDir: 'public' },
  open: false,
  notify: true,
  files: [
    'public/javascripts/app.js',
    'public/stylesheets/style.css'
  ]
})
