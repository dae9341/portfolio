function __promSlider(wrapperId) {

    // interval function
    // page값 필요 (index x)
    console.log("aaa");
    var me = this;
    var $wrapper = $(wrapperId);
    var $page = $wrapper.find(".m-slipperPaging");
    var $pagePrev = $page.find(".m-slipperPaging__prevBtn");
    var $pageNext = $page.find(".m-slipperPaging__nextBtn");
    var $nowIdx = $page.find(".now");
    var $len = $page.find(".len");

    function initSlipper(){
        return new Promise(function (resolve) {
            me.$slider = new slipper( wrapperId+" .slipper-container", {
                initIdx: 0,
                speed:500,
                loop:true,
                autoPlay:false,
                delay:2000
            });

            resolve();
        })
    }

    initSlipper().then(function () {
        $nowIdx.text(me.$slider.index+1);
        $len.text(me.$slider.$slipper.len);

        $(".m-slipperPaging__nextBtn").on("click",function () {
            me.next();
        });

        $(".m-slipperPaging__prevBtn").on("click",function () {
            me.prev();
        });
    });


    console.log($nowIdx)

    me.autoPlay = function () {

    };

    me.prev=function () {
        me.$slider.prev();
    };

    me.next = function () {
        me.$slider.next();
    };

    return me;

}