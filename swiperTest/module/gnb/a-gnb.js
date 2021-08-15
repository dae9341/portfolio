function gnbSwiper(wrapperId,option) {
    const opt = $.extend({
        pagination:true,
        navButtons:true,
        spaceBetween: 100,
        initialSlide:2,
        slidesPerView:5,
    },option);

    const $categoryBtns = $(wrapperId).find(".categoryBtn");
    var swiperWrapper = $(wrapperId).find(".swiper-wrapper");

    function init(){
        $categoryBtns.eq(opt.initialSlide).addClass("-on");


        // init Swiper:
        const swiper = new Swiper(wrapperId,{
            spaceBetween: opt.spaceBetween,
            slidesPerView:opt.slidesPerView,
            navigation: {
                nextEl: '.a-gnb__swiper__btns .swiper-button-next',
                prevEl: '.a-gnb__swiper__btns .swiper-button-prev',
            },
            transitionEnd: function(index, elem) {
                console.log(index, elem)
            }

        });


        var exceptTargetLength= opt.slidesPerView / opt.initialSlide;
        console.log(exceptTargetLength, $categoryBtns.length-exceptTargetLength)



        $categoryBtns.on("click", function () {
            $categoryBtns.removeClass("-on");
            $(this).addClass("-on");
            var idx  = $(this).parent(".swiper-slide").index();

            if(exceptTargetLength > idx){
                centerPos(Math.floor(exceptTargetLength));
            }else if($categoryBtns.length-exceptTargetLength < idx){
                centerPos(Math.floor($categoryBtns.length-exceptTargetLength));
            }else{
                centerPos(idx);
            }

        });
    }

    function centerPos(idx){
        console.log(idx);
        var activeWidth = $categoryBtns.eq(opt.initialSlide).width()+ opt.spaceBetween;

        var centerPos=(idx-opt.initialSlide) * activeWidth * (-1);
        console.log(centerPos);
        setTimeout(function () {
            swiperWrapper.css({
                "transform" : "translate3d("+centerPos+"px,0,0)",
                "transition-duration": "200ms"
            })

        },200)
    }


    init();




}