var gulp=require('gulp');
var less=require('gulp-less');
var cssmin=require('gulp-cssmin');
var htmlmin=require('gulp-htmlmin');
var imagemin=require('gulp-imagemin');
gulp.task('default',['less','html','img','server'],function() {
	console.log('nihao');
})
gulp.task('less',function(){
	return gulp.src('myless.less')
	.pipe(less())
	.pipe(cssmin())
	.pipe(gulp.dest('./css'));
})
gulp.task('html',function(){
 var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
	gulp.src('text15.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('./'));
})
gulp.task('img',function(){
	gulp.src('img/*.{png,jpg,jif,ico}')
	.pipe(imagemin({
		   optimizationLevel: 5, //优化等级
            progressive: true, //无损压缩jpg图片
            interlaced: true, // 隔行扫描gif进行渲染
            multipass: true // 多次优化svg直到完全优化
	}))
	.pipe(gulp.dest('newimg/'));
})
gulp.task('server',function(){
	gulp.watch('img/*.{png,jpg,jif,ico}',['img']);
	gulp.watch('jkf/*.less',['less']);
	gulp.watch('jkf/*.html',['html']);
	
})
