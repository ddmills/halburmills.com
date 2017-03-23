const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imgmin = require('gulp-imagemin');
const deploy = require('gulp-gh-pages');
const babel = require('babelify');
const merge = require('merge-stream');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');

gulp.task('clean', () => {
  return gulp
    .src('build', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('images', () => {
  return gulp
    .src('source/images/**/*')
    .pipe(imgmin())
    .pipe(gulp.dest('build/images'));
});

gulp.task('photoswipe', () => {
  return gulp
    .src('./node_modules/photoswipe/dist/**/*')
    .pipe(gulp.dest('build/vendor/photoswipe'));
});

gulp.task('icons', () => {
  const css = gulp
    .src('./node_modules/mdi/css/**/*')
    .pipe(gulp.dest('build/css'));

  const font = gulp
    .src('./node_modules/mdi/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));

  return merge(css, font);
});

gulp.task('cname', () => {
  return gulp
    .src('source/CNAME')
    .pipe(gulp.dest('build'));
});

gulp.task('copy', ['images', 'cname', 'icons', 'photoswipe']);

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
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass.sync({ includePaths: ['node_modules/']}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(uglifycss())
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
