var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var csso = require('gulp-csso');
var useref = require('gulp-useref');
var revCollector = require('gulp-rev-collector');
var rev = require('gulp-rev');

gulp.task('default',['two'], function() {
    
    
});

gulp.task('one',function() {

    gulp.src('widget/**/*.js')
        .pipe(uglify()) 
        .pipe(rev())
        .pipe(concat('all.js'))         // 合并all.js文件
        .pipe(gulp.dest('./output/static/widget'));
        

    gulp.src('css/style.css')
        .pipe(csso())
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./output/static/css'))
        .pipe(rev.manifest('static/css'))                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内

});

gulp.task('two',['one'],function() {
    gulp.src(['./rev/rev-manifest.json','views/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./output/views'));

    gulp.src(['./rev/rev-manifest.json','views/*/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./output/views'));
});

