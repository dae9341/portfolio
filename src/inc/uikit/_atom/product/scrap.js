function __scrap(obj) {
    var $objScrap  = $(obj);
    var isScrap = $objScrap.data("scrap");

    console.log(isScrap);

    if($("body").find(".a-scrapComment").length>0){
        console.log($("body").find(".a-scrapComment"))
    }else{
        $("body").append("<div class='a-scrapComment'></div>");
    }


    if(isScrap){
        $objScrap.removeClass("-on");
        $objScrap.data().scrap=false;
        appendComment(".a-scrapComment", "삭제되었습니다.");
    }else{
        $objScrap.addClass("-on");
        $objScrap.data().scrap=true;
        appendComment(".a-scrapComment", "스크랩되었습니다.");
    }


    function appendComment(id, comment) {
        var $addDiv = $(".a-scrapComment").find(">div");

        $(id).append("<div class='a-scrapComment__content'>" +
            "        <span>"+comment+"</span>" +
            "    </div>");


        setTimeout(function () {
            if($addDiv.length > 1){
                $addDiv.eq(0).remove()
            }
        });

    }

}

function __scrapInit() {
    const $btnScrap = $(".a-scrap");
    var me = this;

    $btnScrap.each(function () {
        var $me = $(this);
        var status = $me.data("scrap");
        if(status){
            $me.addClass("-on");
        }else{
            $me.removeClass("-on");
        }
    });
}