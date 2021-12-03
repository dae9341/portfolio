function __promSlider(wrapperId,option) {
    var me = this;
    var opt = $.extend({
        initIdx: 0, // 시작 index
        speed:500, // 변환 속도
        autoPlay:true, // 자동모드
        transition:"none", // 효과 "none" : none/block  "slide" : 슬라이드 
        delay:2000, // 자동모드시 딜레이
    },option);

    var $wrapper = $(wrapperId);
    var $page = $wrapper.find(".m-slipperPaging");
    var $pagePrev = $page.find(".m-slipperPaging__prevBtn"); // 이전버튼
    var $pageNext = $page.find(".m-slipperPaging__nextBtn"); // 다음버튼
    var $autoPlay = $page.find(".m-slipperPaging__toggleAuto"); // autoPlay 버튼
    var $nowIdx = $page.find(".m-slipperPaging__page__now"); // 현재 페이지 
    var $len = $page.find(".m-slipperPaging__page__len"); //전체 페이지

    function initSlipper(){
        me.$slider = new slipper( wrapperId+" .slipper-container", {
            initIdx: opt.initIdx,
            speed:opt.speed,
            loop:true,// 무한루프: true 불변값
            autoPlay:opt.autoPlay,
            transition:opt.transition,
            delay:opt.delay,
            transitionStart:function () {
                $nowIdx.text(me.$slider.page);
            }
        });

        // 자동모드 체크 후 세팅 
        if(opt.autoPlay){ 
            $autoPlay.addClass("playing");
            $autoPlay.text("stop");
        }else{
            $autoPlay.removeClass("playing");
            $autoPlay.text("play");
        }

        // 페이징 세팅
        function pageSet(){
            $nowIdx.text(me.$slider.page);
            $len.text(me.$slider.$slipper.len);
        }
        pageSet();

        $pageNext.on("click",function () {
            me.next();
        });

        $pagePrev.on("click",function () {
            me.prev();
        });

        $autoPlay.on("click",function(){
            me.togglePlay(this);
        })
    }

    me.prev=function () {
        me.$slider.prev();
    };

    me.next = function () {
        me.$slider.next();
    };

    me.autoPlay = function(clickItem){
        $(clickItem).addClass("playing");
        $autoPlay.text("stop");
        me.$slider.intervalFn.start();
    };

    me.autoPlayStop = function(clickItem){
        $(clickItem).removeClass("playing");
        $autoPlay.text("play");
        me.$slider.intervalFn.stop();
    };

    me.togglePlay = function(clickItem){
        if($(clickItem).hasClass("playing")){
            me.autoPlayStop($(clickItem));
        }else{
            me.autoPlay($(clickItem));

        }
    };

    initSlipper();

    return me;

}