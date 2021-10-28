var kdh={
    html:"",
    body:"",
    scrollDirection:"",
    base:{
        scrollDirection:__scrollDirection,
    },
    value:__value()
};

/*로드시 실행*/
window.onload=function (){
    kdh.html = $("html");
    kdh.body = $("body");
    kdh.html.addClass(kdh.value.browser+" "+kdh.value.os);
    kdh.html.addClass("pageLoaded");
    kdh.base.scrollDirection();


    console.log(kdh.value);
}


/*스크롤 방향값 구하기*/
function __scrollDirection(){
    var lastScroll=0;

    $(window).scroll(function () {
        var now = $(this).scrollTop();

        if(now > lastScroll){
            kdh.scrollDirection="down"
        }else{
            kdh.scrollDirection="up"
        }

        lastScroll = now;
    });

}

/*userAgent로 필요한 값 추출*/
function __value(){
    var ua = navigator.userAgent.toLowerCase();
    var value = {};

    console.log(ua);
    /* browser */
    if(ua.indexOf("trident")>-1){
        value.browser = "IE"
    }else if(ua.indexOf("chrome")>-1){
        value.browser = "chrome"
    }else if(ua.indexOf("safari")>-1){
        value.browser = "safari"
    }else if(ua.indexOf("firefox")>-1){
        value.browser = "firefox"
    }else if(ua.indexOf("opera")>-1){
        value.browser = "opera"
    }else{
        value.browser = "browser-etc"
    }

    /* os */
    if(ua.indexOf("iphone")>-1 || ua.indexOf("ipod")>-1 || ua.indexOf("ipad")>-1 || ua.indexOf("mac")>-1){
        value.os = "ios"
    }else if(ua.indexOf("android")>-1){
        value.os = "android"
    }else if(ua.indexOf("windows")>-1){
        value.os = "windows"
    }else{
        value.os = "os-etc"
    }


    return value;
}