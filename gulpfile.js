const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const deploy = require('gulp-gh-pages');

gulp.task('pug', () => {
  return gulp
    .src('source/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build'));
});

gulp.task('sass', () => {
  return gulp
    .src('source/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});

gulp.task('deploy', () => {
  return gulp
    .src('build/**/*')
    .pipe(deploy());
});

gulp.task('watch', () => {
  gulp.watch('source/**/*.pug', ['pug']);
  gulp.watch('source/**/*.scss', ['sass']);
});

gulp.task('default', ['pug', 'sass']);
