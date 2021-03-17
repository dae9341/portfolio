function heartAnimation(wrapperId,option){
    var me = this;
    var $wrapperId = $(wrapperId);
    var h_val =$wrapperId.height();
    var w_val =$wrapperId.width();

    var opt = $.extend({
        minSize:6,
        maxSize:12,
        speed:500,
        transition:"bottom 2s, left 2s, opacity 2s"
    },option);


    function getRandomValue(min,max) {
        return Math.floor(Math.random()*(max-min) +min);
    }

    function start() {
        var size = getRandomValue(opt.minSize, opt.maxSize); // 하트 크기 랜덤 생성(최소값, 최대값)
        var heartClass = "heart-"+getRandomValue(0,10000); // 하트의 독립적인 클래스 생성
        var bottom = h_val + size+2; // 영역 height 값에 하트 크기를 더함 (위로 이동할 값)
        var left = getRandomValue(0, w_val); // 0 ~ width 값 랜덤 생성 (좌,우측으로 이동할 값)


        $wrapperId.append("<span class='heart "+heartClass+"'></span>");

        //하트모양, 애니메이션 세팅

        $("."+heartClass).css({
            "width":size,
            "height":size,
            "bottom":0,
            "left":"50%",
            "margin-left":size*(-1) /2 ,
            "transition":opt.transition
        });
        
        // transition효과를 내기위해 목적지 css값을 나중에 삽입
        setTimeout(function () {
            move("."+heartClass,bottom,left);
        });
    };


    // 하트 이동
    function move(item,bottom,left) {
        $(item).css({
            "bottom":bottom,
            "left":left,
            "opacity":0
        })
    };


    //삭제 : opacity 0인 값을 전체 삭제
    function remove() {
        $(".heart").each(function () {
            if($(this).css("opacity")==0) {
                $(this).remove();
            }
        });
    };

    me.init = function () {
        setInterval(function () {
           start();
           remove();
        },opt.speed);
    };

    me.init();
}