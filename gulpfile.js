const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const deploy = require('gulp-gh-pages');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('copy', () => {
    const cname = gulp.src('source/CNAME').pipe(gulp.dest('build'));
    const images = gulp.src('source/images/**/*').pipe(gulp.dest('build/images'));
});

gulp.task('pug', () => {
  return gulp
    .src('source/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build'));
});

gulp.task('sass', () => {
  return gulp
    .src('source/**/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});

gulp.task('babel', () => {
  const bundler = browserify('source/js/main.js');

  return bundler
    .transform(babel, { presets: ['es2015'] })
    .bundle()
    .pipe(source('js/main.js'))
    .pipe(buffer())
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
  gulp.watch('source/**/*.js', ['babel']);
});

gulp.task('default', ['copy', 'pug', 'babel', 'sass']);