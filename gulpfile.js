var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var harp = require('harp');
var minify = require('gulp-minify');

var source  = {
  ejs: 'public/**/*.ejs',
  scss: 'public/css/**/*.scss',
  js: 'public/scripts/**/*.js'
}

gulp.task('serve', function () {
  harp.server('.', {
    port: 9000
  }, function () {
    browserSync({
      proxy: 'localhost:9000',
      port: '3000',
      open: false,
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
  });
});

gulp.task('watch', function () {
  gulp.watch(source.ejs, function () {
    reload();
  });
  gulp.watch(source.scss, function () {
    reload('/public/css/main.css', { stream: true });
  });
  gulp.watch(source.js, function () {
    reload();
    // gulp.src(source.js)
    // .pipe(plumber())
    // .pipe(minify({}))
    // .pipe(gulp.dest('public/scripts/'))
  })
});

gulp.task('default', ['serve', 'watch']);
