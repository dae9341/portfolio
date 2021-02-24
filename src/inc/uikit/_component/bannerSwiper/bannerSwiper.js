function __bannerSwiper(wrapperId,option) {

    const me = this;
    const $componentId = $(wrapperId);
    const swiperLength = $componentId.find(".swiper-slide").length;

    const opt = $.extend({
        loop:true,
        initialSlide:0,
        autoplay: false,
        counter:true,
    },option);


    const $swiper = new Swiper(wrapperId +" .swiper-container",{
        loop:opt.loop,
        initialSlide:opt.initialSlide,
        autoplay:opt.autoplay,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            //이닛
            init: function () {
                $componentId.addClass("-swiperLoaded");
                if(opt.counter ){
                    $componentId.find(".m-swiperCounter__now").text(opt.initialSlide+1);
                    $componentId.find(".m-swiperCounter__total").text(swiperLength);
                }
            },
        },
    });


    /*슬라이드 변화 시 이벤트*/
    $swiper.on('slideChange', function () {
        /* 카운터 체인지 */
        if(opt.counter ){
            counterChange($swiper.activeIndex);
        }
    });



    /* 카운터 값 변경 함수 */
    function counterChange(activeIdx) {
        if(activeIdx > swiperLength ){
            $componentId.find(".m-swiperCounter__now").text(1)
        }else if(activeIdx < 1){
            $componentId.find(".m-swiperCounter__now").text(swiperLength);
        }else{
            $componentId.find(".m-swiperCounter__now").text(activeIdx);
        }

    }


    me.swiper = $swiper;

    return me;
};