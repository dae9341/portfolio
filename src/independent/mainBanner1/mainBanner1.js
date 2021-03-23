function mainBanner1(wrapperId, option){

    var me = this;
    var $wrapperId = $(wrapperId);
    var $banner = $wrapperId.find(".mainBanner1__banner");
    var $tab = $wrapperId.find(".mainBanner1__tab");
    var bannerLength = $banner.find("li").length;

    var opt = $.extend({
        startIdx : 0,
        isPlay:true,
        delay:1000
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


    me.change = function (nowIdx, toIdx){

        if(bannerLength <= toIdx){
            toIdx = 0;
        }

        removeOn(nowIdx);
        activeOn(toIdx);

        me.index = toIdx;
    };


    me.init = function (){
        me.index = opt.startIdx;
        me.isPlay = opt.isPlay;

        $banner.find("li").eq(me.index).addClass("on");
        $tab.find("div").eq(me.index).addClass("on");

        setInterval(function (){
            if(me.isPlay){
                me.change(me.index, me.index+1);
            }else{
                return;
            }
        },opt.delay);

        $wrapperId.on("mouseenter",function (){
            me.isPlay = false;
            console.log(me.isPlay);
        });

        $wrapperId.on("mouseleave",function (){
            me.isPlay = true;
            console.log(me.isPlay);
        });

        $tab.find("div").each(function (){
            var $me = $(this);

            $me.find(">a").on("mouseover",function (){
                me.change(me.index, $me.index());
            });
        });
    };


    me.init();
}