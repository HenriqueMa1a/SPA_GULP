const {series, parallel} = require('gulp')
const gulp = require('gulp')
const { appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/server')


gulp.task('app.js')
gulp.task('server.js')
gulp.task('deps.js')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)