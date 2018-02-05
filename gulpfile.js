const gulp = require('gulp');
const babel = require("gulp-babel");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const cssmin = require('gulp-minify-css');
const stylus = require('gulp-stylus');
/*编译js*/
gulp.task('babelTask', function() {
    return gulp.src("./dev/*/*.js")
      .pipe(babel())
      .pipe(gulp.dest("./"));
});
/*编译js*/
gulp.task("babelHomeTask",function(){
  return gulp.src("./dev/*.js")
      .pipe(babel())
      .pipe(gulp.dest("./"));
});

/*编译css*/
gulp.task('stylusTask', function() {
  var processors = [autoprefixer, cssnext, precss];
  gulp.src('./dev/public/*/*.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(gulp.dest('./public'));
});

/*监听变化*/
gulp.task("default", function() {
  //监听js
  gulp.watch("./dev/*/*.js", ["babelTask"]);
  gulp.watch("./dev/*.js", ["babelHomeTask"]);
  //css编译
  gulp.watch("./dev/public/*/*.styl", ["stylusTask"]);
});