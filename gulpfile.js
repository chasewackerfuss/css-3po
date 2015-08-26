// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(""));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

// Default
gulp.task('default', ['sass', 'watch']);
