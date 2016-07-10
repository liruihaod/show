var gulp = require('gulp');//将最主要的glup给拉出来

//引入组件
var minify = require('gulp-minify-css'), //css压缩
    concat = require('gulp-concat'), //合并文件
    imagemin = require('gulp-imagemin'), //图片压缩
    // optimize=require('amd-optimize'),   //requirejs插件
    uglify = require('gulp-uglify'); //js压缩
    minhtml = require('gulp-htmlmin'), //html压缩


//设置gulp需要做得task
//
//
//
gulp.task('html',function () {
    gulp.src('**/*.html')//确定要操作的目标文件
        .pipe(minhtml({collapseWhitespace:true})) //压缩html去掉里面的空白
        // .pipe(rename({                      //修改文件名
        //     suffix:'merge.min'
        // }))
        .pipe(gulp.dest('dist')); //将流做成文件，确定输出文件夹
});

gulp.task('css',function () {


    return  gulp.src('css/*.css')
        // .pipe(concat('index.css'))  //合并成一个名叫merge.min的css文件
        .pipe(minify())               //压缩css
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js',function () {
    return  gulp.src('js/**/*.js')        //将js文件夹下的所有js都给找到
        // .pipe(optimize('./js/main.min',{
        //   concat: './js/main.js',          //合并到main.js 这个文件中
        //   findNestedDependencies: true,
        //   include: false
        // }));
        // .pipe(concat('main.min.js'))     //合并js文件
        .pipe(uglify())                   //压缩js文件
        .pipe(gulp.dest('dist/js'));
});

gulp.task('img',function () {
    gulp.src('image/**/*')
        .pipe(imagemin())                 //压缩图片
        .pipe(gulp.dest('dist/img'));
});



gulp.task('build',['img','css','js','html']); //gulp build 就可以执行这四个任务
