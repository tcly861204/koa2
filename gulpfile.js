const gulp = require('gulp');
const babel = require("gulp-babel");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const cssmin = require('gulp-minify-css');
const uglify = require("gulp-uglify");
const stylus = require('gulp-stylus');

const uglifyOptions ={
  mangle: true,//类型：Boolean 默认：true 是否修改变量名
  compress: true,//类型：Boolean 默认：true 是否完全压缩
};

/*编译js*/
gulp.task('babelTask', function() {
    return gulp.src("./dev/*/*.js")
      .pipe(babel())
      .pipe(uglify(uglifyOptions))
      .pipe(gulp.dest("./"));
});
/*编译js*/
gulp.task("babelHomeTask",function(){
  return gulp.src("./dev/*.js")
      .pipe(babel())
      .pipe(uglify(uglifyOptions))
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