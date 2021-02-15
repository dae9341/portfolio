const __bannerSwiper = function (wrapperId,option) {

    const $componentId = $(wrapperId);
    const opt = $.extend({
        loop:true
    },option);

    const $swiper = new Swiper(wrapperId +" .swiper-container",{
        loop:opt.loop,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}