'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass"); // sass 컴파일

var root = "../dhroot/"; // root
var src = "src/";  // src
var entry = root+src+"entry/"; // 엔트리 경로
var uikit = root+src+"inc/uikit/"; // uikit 경로
var dist = root+src+"/css/"; //디스트 경로


gulp.task("sass", function () {
   return gulp.src(entry+"scss/*.scss")
       .pipe(sass().on("error", sass.logError))
       .pipe(gulp.dest(dist));
});

gulp.task("sass:watch",function () {
    return gulp.watch([entry+"scss/*.scss", uikit+"**/*.scss"],gulp.series("sass"));
});