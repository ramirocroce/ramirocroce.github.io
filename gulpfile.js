var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  gulp.src('less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
    }))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['less']);