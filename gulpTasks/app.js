const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglify')
const concat = require('gulp-concat')
const gulp = require('gulp')
const babel = require('gulp-babel')


function appHTML(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({"UglyComments": true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}


function appJS(){
    return gulp.src('src/assets/js/navegacao.js')
    .pipe(babel({
        comments:false,
        presets: ["env"]}))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
}


function appIMG(){
    return gulp.src('src/assets/imgs/**')
    .pipe(gulp.dest('build/assets/imgs'))
}


module.exports.default={
    appHTML,
    appCSS,
    appJS,
    appIMG
}