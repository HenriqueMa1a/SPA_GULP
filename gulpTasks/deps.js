const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(){
    return gulp.src('gulp/spa/node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifycss({"uglyComments": true})) // por causa da licença das dependências
    .pipe(concat('deps.min.js'))
}


function depsFonts(cb){
    return gulp.src('gulp/spa/node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('build/assets/fonts'))
}


module.exports={
    depsFonts,
    depsCSS
}