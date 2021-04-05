function __bannerSwiper(wrapperId,option) {
    const me = this; 
    const $componentId = $(wrapperId);
    const swiperLength = $componentId.find(".swiper-slide").length; // 슬라이드 개수

    const opt = $.extend({
        loop:true,
        initialSlide:0,
        slidesPerView:1,
        autoplay: false, 
        counter:true,
        bar : true
    },option);


    /* 스와이퍼 */
    const $swiper = new Swiper(wrapperId +" .swiper-container",{
        loop: opt.loop,
        initialSlide: opt.initialSlide,
        slidesPerView: opt.slidesPerView,
        autoplay: opt.autoplay,
        pagination: {
            el: wrapperId+' .swiper-pagination',
            clickable: false,
        },
        navigation: {
            nextEl: wrapperId + ' .swiper-button-next',
            prevEl: wrapperId + ' .swiper-button-prev',
        },

        on: {
            //이닛
            init: function () {
                $componentId.addClass("-swiperLoaded");
                if(opt.counter ){

                    //카운터 html 생성
                    var counterHTML='<div class="m-swiperCounter">\n' +
                                    '    <span class="m-swiperCounter__now"></span>\n' +
                                    '    <span class="m-swiperCounter__total"></span>\n' +
                                    '</div>'
                    $componentId.find(".c-bannerSwiper__counter").html(counterHTML);


                    $componentId.find(".m-swiperCounter__now").text(opt.initialSlide+1);
                    $componentId.find(".m-swiperCounter__total").text(swiperLength);
                };


                if(opt.bar){
                    var barHTML ='<div class="m-swiperBar">\n' +
                                 '    <div class="m-swiperBar__active">\n' +
                                 '        \n' +
                                 '    </div>\n' +
                                 '</div>'
                    $componentId.find(".c-bannerSwiper__bar").html(barHTML);

                    $(".m-swiperBar .m-swiperBar__active").css({
                        "width":(opt.initialSlide+1) / swiperLength * 100 + "%"
                    });
                }
            },

        },
    });


    /*슬라이드 변화 시 이벤트*/
    $swiper.on('slideChange', function () {
        /* 카운터 체인지 */
        if(opt.counter ){
            counterChange($swiper.realIndex);
        }

        if(opt.bar){
            $(".m-swiperBar .m-swiperBar__active").css({
                "width":($swiper.realIndex+1) / swiperLength * 100 + "%"
            })
        }
    });



    /* 카운터 값 변경 함수 */
    function counterChange(activeIdx) {
        $componentId.find(".m-swiperCounter__now").text(activeIdx+1);
    }


    me.swiper = $swiper;

    return me;
};