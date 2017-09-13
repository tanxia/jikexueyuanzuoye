var gulp=require('gulp');
var less=require('gulp-less');
gulp.task('default',function () {
	gulp.src('bus.less')
	.pipe(less())
	.pipe(gulp.dest('./css'));
})