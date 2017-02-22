const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const deploy = require('gulp-gh-pages');
const babel = require('babelify');
const merge = require('merge-stream');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');

const iconCSSPath = './node_modules/mdi/css/**/*';
const iconFontPath = './node_modules/mdi/fonts/**/*';

gulp.task('images', () => {
  return gulp
    .src('source/images/**/*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('icons', () => {
  const css = gulp
    .src(iconCSSPath)
    .pipe(gulp.dest('build/css'));

  const font = gulp
    .src(iconFontPath)
    .pipe(gulp.dest('build/fonts'));

  return merge(css, font);
});

gulp.task('cname', () => {
  return gulp
    .src('source/CNAME')
    .pipe(gulp.dest('build'));
});

gulp.task('copy', ['images', 'cname', 'icons']);

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

gulp.task('build', ['copy', 'pug', 'babel', 'sass']);
gulp.task('default', ['build']);
