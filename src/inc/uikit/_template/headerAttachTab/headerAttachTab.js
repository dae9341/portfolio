function __headerAttachTab(wrapperId){
    var tabTop = $(wrapperId).offset().top; // top 값
    var tabHeight = $(wrapperId).height(); // height 값
    var $header = $(".l-header"); // 헤더영역
    var $appendItem = $(wrapperId).find(">div");
    
    var attach_value = tabTop - ($header.height() + parseInt($header.css("top")) );
    var detach_value = tabTop - ($header.height() + parseInt($header.css("top"))) + tabHeight;

    $(window).scroll(function () {
        var now = $(this).scrollTop();

        if(kdh.base.scrollDirection=="down" && now >= attach_value){
            $header.append($appendItem);
            console.log("attach!")
        }else if(kdh.base.scrollDirection=="up" && now < detach_value){
            $(wrapperId).parent.append($appendItem);
            console.log("detach!")
        }
    });
}