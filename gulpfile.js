const gulp = require('gulp'),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync");

sass.compiler = require('node-sass');

function buildStyle() {
    return gulp.src('src/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/style/'))
        .pipe(browserSync.stream());
}

function buildImg() {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('build/img/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/style/*.scss", buildStyle);
    gulp.watch("./src/img/*.*", buildStyle);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.buildStyle = buildStyle;
exports.buildImg = buildImg;
exports.default = watch;
