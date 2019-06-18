

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulpNewer = require('gulp-newer');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');
const historyApiFallback = require('connect-history-api-fallback');
const webpackConfig = require('./webpack.config.js');

gulp.task('serv', () => {
  browserSync.init({
    server: {
      baseDir: './',
      middleware: [historyApiFallback()],
      index: 'index.html',
      hotOnly: true,
    },
  });
  browserSync.watch('*.html').on('change', browserSync.reload);
  browserSync.watch('src/img/*.*').on('all', browserSync.reload);
  browserSync.watch('src/js/**/**/*.js').on('change', gulp.series('webpack', 'reload'));
});


gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('clean', () => del('public'));

gulp.task('img', () => gulp.src('src/img/*.*', { since: gulp.lastRun('img') })
  .pipe(gulpNewer('build/src/img'))
  .pipe(imagemin([
    imagemin.gifsicle({ interlaced: true }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.optipng({ optimizationLevel: 5 }),
    imagemin.svgo({
      plugins: [
        { removeViewBox: true },
        { cleanupIDs: false },
      ],
    }),
  ]))
  .pipe(gulp.dest('build/src/img')));

gulp.task('html', () => gulp.src('*.html', { since: gulp.lastRun('html') })
  .pipe(gulpNewer('build'))
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build')));

gulp.task('webpack', () => gulp.src('./src/js/index.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('./src/js')));

gulp.task('fonts', () => gulp.src('src/fonts/**')
  .pipe(gulp.dest('build/src/fonts')));

gulp.task('js', () => gulp.src('src/js/main.js', { since: gulp.lastRun('js') })
  .pipe(gulpNewer('build/src/js'))
  .pipe(gulp.dest('build/src/js')));

gulp.task('build', gulp.series('clean', gulp.parallel('img', 'html'), 'fonts', 'webpack', 'js'));
gulp.task('dev', gulp.series('webpack', 'serv'));
