var gulp = require('gulp');

gulp.task('copy', function(){
  gulp.src('./src/index.html')
      .pipe(gulp.dest('./dist/'))
})
