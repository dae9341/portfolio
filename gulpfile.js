'use strict';

const {src,dest,watch, series, parallel} = require("gulp");
const sass = require("gulp-sass"); // sass 컴파일
const concat = require("gulp-concat"); // concat
const babel = require('gulp-babel'); // babel
const uncss = require('gulp-uncss'); // 사용하지않는 css

// var rev = require("gulp-rev"); // rev (hash값으로 리비전번호를 부여)

const path={
    root: "../portfolio/", //root
    src: "../portfolio/src/", // src
    entry: "../portfolio/src/entry/", // 엔트리 경로
    vendor: "../portfolio/src/entry/vendor/", // 벤더 경로
    uikit: "../portfolio/src/inc/uikit/", // uikit 경로
    page: "../portfolio/src/page/", //page 경로
    independent: "../portfolio/src/independent/", // independent 경로
};

const dist={
    css:"../portfolio/src/css/", //디스트CSS 경로
    js:"../portfolio/src/js/", //디스트CSS 경로
    independent_css: "../portfolio/src/independent/css/" // independent 디스트 CSS 경로
};

// sass 빌드
function sass_build(cb){
    src([path.entry+"scss/*.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(dist.css));
    cb();
}

// 벤더 css 통합,dist
function css_vendor(cb){
    src([path.vendor+"css/*.css"])
        .pipe(concat("kdh_vendor.css"))
        .pipe(dest(dist.css));
    cb();
}

function js_vendor(cb){
    src([path.vendor+"jQuery_3.5.1.js", path.vendor+"Swiper_6.4.10.js", path.vendor+"slipper.js" , path.vendor+"lodash_4.17.15.js" , path.vendor+"react.production.min.js", path.vendor+"react-dom.production.min.js"])
        .pipe(concat("kdh_vendor.js"))
        .pipe(dest(dist.js));
    cb();
}
function jsBuildFn(srcList,concatFile,destSrc){
    src(srcList)
        .pipe(concat(concatFile))
        .pipe(babel({
            presets:['@babel/preset-env'],
            plugins:['transform-react-jsx', "@babel/plugin-proposal-class-properties"]
        }))
        .pipe(dest(destSrc))
}

function js_build(cb){
    jsBuildFn([path.uikit+"common/**/*.js",path.entry+"js/kdh_uikit_common.js"],"kdh_uikit_common.js",dist.js);
    jsBuildFn([path.entry+"js/kdh_base.js"],"kdh_base.js",dist.js);
    jsBuildFn([path.uikit+"_atom/**/*.js",path.entry+"js/kdh_uikit_atom.js"],"kdh_uikit_atom.js",dist.js);
    jsBuildFn([path.uikit+"_module/**/*.js",path.uikit+"_module/**/*.jsx",path.entry+"js/kdh_uikit_module.js"],"kdh_uikit_module.js",dist.js);
    jsBuildFn([path.uikit+"_component/**/*.js",path.uikit+"_component/**/*.jsx",path.entry+"js/kdh_uikit_component.js"],"kdh_uikit_component.js",dist.js);
    jsBuildFn([path.uikit+"_template/**/*.js",path.entry+"js/kdh_uikit_template.js"],"kdh_uikit_template.js",dist.js);
    cb();
}

function sass_watch(cb){
    watch([path.entry+"scss/*.scss", path.uikit+"**/*.scss",path.page+"**/*.scss"],series(sass_build));
    cb();
}
function js_watch(cb){
    watch([path.entry+"js/*.js", path.uikit+"**/*.js",path.uikit+"**/*.jsx", path.page+"**/*.js"],series(js_build));
    cb();
}

exports.sassWatch = sass_watch;
exports.jsWatch = js_watch;

/* 실행부 */
exports.vendor = parallel([css_vendor,js_vendor]); //벤더 통합
exports.kdh = series([css_vendor,js_vendor,sass_build,js_build]); //빌드 통합
exports.w = series([css_vendor,js_vendor,sass_build,js_build], parallel([sass_watch,js_watch])); //전체 빌드 후 와치




/*독립모듈*/
function slipperSCSSDist (){
    return new Promise(function (res) {
        src(path.independent+"slipper/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(concat("slipper.css"))
            .pipe(dest(path.vendor+"css/"))
        res();
    });
}
function slipperJSDist (){
    return new Promise(function (res) {
        src(path.independent+"slipper/*.js")
            .pipe(concat("slipper.js"))
            .pipe(dest(path.vendor));
        res();
    });
}

function sassInde(cb){
    src([path.independent+"**/*.scss"])
        .pipe(sass().on("error",sass.logError))
        .pipe(concat("include.css"))
        .pipe(dest(dist.independent_css))
    cb();
}

function watchInde(cb){
    watch([path.independent+"**/*.scss"],series(sassInde));
    cb();
}

/*독립모듈 실행부*/
exports["sass:inde"]= series(sassInde);
exports["w:inde"]= series(sassInde,watchInde);
exports.slipperDist = series(slipperSCSSDist,slipperJSDist);

/*

gulp.task("uncss", function(){
    return gulp.src([independent+'slipper/slipper.scss', independent+'selectBox/selectBox.scss'])
        .pipe(uncss({
            html:[independent+'slipper/teete.html'],
            // ignore: ['.slipper-item.-cloneItem']
            ignore:[/\b-cloneItem\b/]
        }))
        .pipe(concat('scssTest.scss'))
        .pipe(gulp.dest(root+'test'));
})*/
