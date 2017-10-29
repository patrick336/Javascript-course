const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const prettify = require('gulp-jsbeautifier');
const format = require('gulp-format');

const config = {
  srcScss: './src/scss/main.scss',
  buildCss: './dest/css',
  srcImages: './src/images/*',
  buildImages: './dest/images',
  srcJs: './src/js/*.js',
  buildJs: './dest/js',
  srcHtml: './*html'
}

gulp.task('prettify', function() {
  gulp.src('./components/*.js')
  .pipe(prettify())
  .pipe(gulp.dest('./components/'));
});

gulp.task('sync', function() {
  browserSync.init({
    server: "./"
  });
});

gulp.task('watch', function() {
  gulp.watch("styles.css").on('change',browserSync.reload);
  gulp.watch("./components/*.js").on('change',browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['sync', 'watch']);
