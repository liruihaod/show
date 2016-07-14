var gulp = require('gulp');//将最主要的glup给拉出来

//引入组件
var uglify = require('gulp-uglify'),//js压缩
    sass = require("gulp-sass") //Sass编译





//gulp.task('js',function () {
//    return  gulp.src('js/**/*.js')        //将js文件夹下的所有js都给找到
//        .pipe(uglify())                   //压缩js文件
//        .pipe(gulp.dest('dist/js'));
//});



gulp.task('sass', function () {
    gulp.src('./css/*.scss')
        .pipe(sass())
    //{outputStyle: 'compressed'}
        .pipe(gulp.dest('dist/css'));
})


//默认任务

gulp.task('build', function(){

    // 监听文件变化
    //gulp.watch('./js/*.js', function(){
    //    gulp.run('js');
    //});
    gulp.watch('./css/*.scss', function(){
        gulp.run('sass');
    });


});


gulp.task('init',['sass']);


