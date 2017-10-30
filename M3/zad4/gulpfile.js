const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const config = {
  srcScss: './src/scss/main.scss',
  buildCss: './dest/css',
  srcImages: './src/images/*',
  buildImages: './dest/images',
  srcJs: './src/js/*.js',
  buildJs: './dest/js',
  srcHtml: './*html'
}

gulp.task('sync', function() {
  browserSync.init({
    server: "./"
  });
});

gulp.task('watch', function() {
  gulp.watch("styles.css").on('change',browserSync.reload);
  gulp.watch("script-compiled.js").on('change',browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('default', ['sync', 'watch']);
