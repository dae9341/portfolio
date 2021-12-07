function __tabBanner(wrapperId, option){

    var me = this;
    var $wrapperId = $(wrapperId);
    var $banner = $wrapperId.find(".t-tabBanner__banner");
    var $tab = $wrapperId.find(".t-tabBanner__tab");
    var bannerLength = $banner.find("li").length;

    var opt = $.extend({
        startIdx : 0,
        autoplay:false,
        delay:3000
    },option);

    //활성화 제거
    function removeOn(idx){
        $banner.find("li").eq(idx).removeClass("on");
        $tab.find("div").eq(idx).removeClass("on");
    }

    //활성화
    function activeOn(idx){
        $banner.find("li").eq(idx).addClass("on");
        $tab.find("div").eq(idx).addClass("on");
    }


    me.change = function (gotoIdx){
        if(bannerLength <= gotoIdx){
            gotoIdx = 0;
        }
        removeOn(me.index);
        activeOn(gotoIdx);
        me.index = gotoIdx;
    };


    me.init = function (){
        me.index = opt.startIdx;
        me.autoplay = opt.autoplay;

        activeOn(me.index);
        if(me.autoplay){
            me.intervalFn.start();
        }


        $wrapperId.on("mouseenter",function (){
            console.log("mouseenter");
            if(me.autoplay) {
                me.intervalFn.stop();
            }
        });

        $wrapperId.on("mouseleave",function (){
            console.log("mouseleave");
            if(me.autoplay) {
                me.intervalFn.start();
            }
        });

        $tab.find("div").each(function (){
            var $me = $(this);

            $me.find(">a").on("mouseover",function (){
                me.change($me.index());
            });
        });
    };

    me.intervalFn = {
        start:function(){
            me.interval = setInterval(function (){
                me.change(me.index+1);
            },opt.delay);
        },
        stop:function(){
            clearInterval(me.interval);
        },
        restart:function(){
            me.intervalFn.stop();
            me.intervalFn.start();
        }
    };


    me.init();
}