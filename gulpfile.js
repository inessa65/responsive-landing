const gulp = require('gulp');
const sass =require('gulp-sass');
const browserSync= require('browser-sync').create();


function style(){
    return gulp.src('./src/**/*.scss')
    // return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function watch(){
    browserSync.init({
        server:{
            baseDir: '/'
        }
    })
    gulp.watch('./src/**/*.scss', style);
  
}

exports.style= style;
exports.watch =watch;