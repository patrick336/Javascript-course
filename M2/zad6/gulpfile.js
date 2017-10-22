const gulp = require('gulp');
// const image = require('gulp-image');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// const minCss = require('gulp-clean-css');
// const rename = require('gulp-rename');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const prettify = require('gulp-jsbeautifier');

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
  .pipe(gulp.dest('./components/js'));
});

// gulp.task('check-format', function() {
//   return gulp.src('*.js')
//   .pipe(format.check())
//   .pipe(gulp.dest('./'));
// });

// gulp.task('format', function() {
//   return gulp.src('*.js')
//   .pipe(format())
//   .pipe(gulp.dest('./'));
// });

// gulp.task('images-optimization', function() {
//   gulp.src(config.srcImages)
//   .pipe(image())
//   .pipe(gulp.dest('./dest/images'));
// });

// gulp.task('build-css', function() {
//   gulp.src(config.srcScss)
//   .pipe(sass({
//     outputStyle: 'expanded'
//   }).on('error', sass.logError))
//   .pipe(autoprefixer())
//   .pipe(gulp.dest(config.buildCss))
//   .pipe(minCss())
//   .pipe(rename({
//     extname: '.min.css'
//   }))
//   .pipe(gulp.dest(config.buildCss))
// });

// gulp.task('build-js', function() {
//   return gulp.src(config.srcJs)
//   .pipe(concat('app.js'))
//   .pipe(gulp.dest(config.buildJs))
//   .pipe(rename('app.min.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest(config.buildJs));
// });

gulp.task('sync', function() {
  browserSync.init({
    server: "./"
  });
});

gulp.task('watch', function() {
  // gulp.watch(config.srcScss, ['build-css', browserSync.reload]);
  // gulp.watch(config.srcJs, ['build-js', browserSync.reload]);
  gulp.watch("styles.css").on('change', browserSync.reload);
  gulp.watch("./components/*.js").on('change', browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
});

// gulp.task('default', ['build-css', 'build-js', 'images-optimization', 'sync', 'watch']);
gulp.task('default', ['sync', 'watch']);
