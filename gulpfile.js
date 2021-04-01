'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass"); // sass 컴파일
var concat = require("gulp-concat"); // concat
// var rev = require("gulp-rev"); // rev (hash값으로 리비전번호를 부여)
var babel = require('gulp-babel'); // babel


var root = "../sample/"; // root
var src = "src/";  // src
var entry = root+src+"entry/"; // 엔트리 경로
var uikit = root+src+"inc/uikit/"; // uikit 경로
var page = root+src+"page/"; // page 경로
var dist_css = root+src+"css/"; //디스트CSS 경로
var dist_js = root+src+"js/"; //디스트CSS 경로


//독립모듈
var independent = root+src+"independent/"; // independent 경로
var independent_dist_css = independent+"/css/"; //디스트 CSS 경로


/* sass 컴파일 */
gulp.task("sass", function () {
   return gulp.src(entry+"scss/*.scss")
       .pipe(sass().on("error", sass.logError))
       .pipe(gulp.dest(dist_css));
});

/* js_vendor 컨캣 */
gulp.task("js:vendor",function () {
    return gulp.src([entry+"vendor/jQuery_3.5.1.js", entry+"vendor/Swiper_6.4.10.js"])
        .pipe(concat("kdh_vendor.js"))
        .pipe(gulp.dest(dist_js))
});

/* css_vendor 컨캣 */
gulp.task("css:vendor", function () {
    return gulp.src(entry+"vendor/css/*.css")
        .pipe(concat("kdh_vendor.css"))
        .pipe(gulp.dest(dist_css));
});

gulp.task("js:base" , function () {
    return gulp.src([entry+"js/kdh_base.js"])
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js));
});

/*js uikit atom 컨캣*/
gulp.task("js:atom",function () {
    return gulp.src([uikit+"_atom/**/*.js",entry+"js/kdh_uikit_atom.js"])
        .pipe(concat("kdh_uikit_atom.js"))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js))
});

/*js uikit module 컨캣*/
gulp.task("js:module",function () {
    return gulp.src([uikit+"_module/**/*.js",entry+"js/kdh_uikit_module.js"])
        .pipe(concat("kdh_uikit_module.js"))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js))
});

/*js uikit component 컨캣*/
gulp.task("js:component",function () {
    return gulp.src([uikit+"_component/**/*.js",entry+"js/kdh_uikit_component.js"])
        .pipe(concat("kdh_uikit_component.js"))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js))
});

/*js uikit template 컨캣*/
gulp.task("js:template",function () {
    return gulp.src([uikit+"_template/**/*.js",entry+"js/kdh_uikit_template.js"])
        .pipe(concat("kdh_uikit_template.js"))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js))
});

/*js uikit common 컨캣*/
gulp.task("js:common",function () {
    return gulp.src([uikit+"common/**/*.js",entry+"js/kdh_uikit_common.js"])
        .pipe(concat("kdh_uikit_common.js"))
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js))
});

gulp.task("js" , function () {
    return gulp.src([uikit+"**/*.js",entry+"js/*.js"])
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest(dist_js));
});

/* sass 와치 */
gulp.task("sass:watch",function () {
    return gulp.watch([entry+"scss/*.scss", uikit+"**/*.scss",page+"**/*.scss"],gulp.series("sass"));
});

/* js 와치 */
gulp.task("js:watch", function () {
    return gulp.watch([entry+"js/*.js", uikit+"**/*.js",page+"**/*.js"],gulp.parallel(["js:atom","js:module","js:component","js:template","js:base","js:common"]));
});


/* 실행부 */

/* 벤더 통합 */
gulp.task("vendor", gulp.parallel(["js:vendor","css:vendor"]));

/* 빌드 통합 */
gulp.task("kdh", gulp.series(["vendor","sass","js:base","js:common","js:atom","js:module","js:component","js:template"]));

/* 와치 통합 */
gulp.task("w" , gulp.series(["kdh"], gulp.parallel(["sass:watch","js:watch"])) );




/*임시*/

/* sass 컴파일 */
gulp.task("sass:inde", function () {
    return gulp.src(independent+"scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(independent_dist_css))
});

gulp.task("w:inde", function () {
    return gulp.watch([independent+"**/*.scss"],gulp.series("sass:inde"));
});



