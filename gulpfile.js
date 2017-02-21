const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const deploy = require('gulp-gh-pages');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');

gulp.task('images', () => {
  return gulp
    .src('source/images/**/*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('copy', () => {
  return gulp
    .src('source/CNAME')
    .pipe(gulp.dest('build'));
});

gulp.task('pug', () => {
  const localsPath = './pug.locals.json';
  const locals = require(localsPath);
  delete require.cache[require.resolve(localsPath)];

  return gulp
    .src('source/index.pug')
    .pipe(plumber())
    .pipe(pug({ locals }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', () => {
  return gulp
    .src('source/**/main.scss')
    .pipe(plumber())
    .pipe(sass.sync({ includePaths: ['node_modules/susy/sass'] }))
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

gulp.task('watch', ['build'], () => {
  browserSync({
    server: {
      baseDir: 'build',
    },
    open: false,
  });

  gulp.watch('source/**/*.pug', ['pug', browserSync.reload]);
  gulp.watch('pug.locals.json', ['pug', browserSync.reload]);
  gulp.watch('source/**/*.scss', ['sass', browserSync.reload]);
  gulp.watch('source/**/*.js', ['babel', browserSync.reload]);
  gulp.watch('source/images/**/*', ['images', browserSync.reload]);
});

gulp.task('build', ['copy', 'images', 'pug', 'babel', 'sass']);
gulp.task('default', ['build']);
