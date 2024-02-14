/**
 * initialize variables.
 * @init  variables
 */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

/**
 * Gulp task to compile and minify SASS to CSS.
 * @task sass
 */
gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

/**
 * Gulp task to Minify main.js inside src/js and output to dist/js.
 * @task js-main
 */
gulp.task('js-main', function () {
  return gulp
    .src('src/js/main.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

/**
 * Gulp task to Copy all JavaScript files in src/js/modules to dist/js/modules.
 * @task js-modules
 */
gulp.task('js-modules', function () {
  return gulp
    .src('src/js/modules/**/*.js')
    .pipe(gulp.dest('dist/js/modules'));
});

/**
 * Gulp task to start gulp (run 'gulp' in the terminal)
 * @task gulp
 */
gulp.task('default', gulp.series('sass', 'js-main', 'js-modules'));

/**
 * Gulp task to Watch for changes in SASS and JavaScript files
 * @task watch
 */
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('src/js/main.js', gulp.series('js-main'))
  gulp.watch('src/js/modules/**/*.js', gulp.series('js-modules'))
});