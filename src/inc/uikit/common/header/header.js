function __headerSticky (){

    var $header = $("#header");
    var $search = $("#header > .l-header__search");
    var $subTitle = $("#header > .l-header__subTitle");
    var tabList;
    var isTabListExist = false;


    $(window).scroll(function () {
/*
        /!* 탭 리스트 존재시 *!/
        if(isTabListExist){
            var attach_value = tabList.top - ($header.height() + parseInt($header.css("top")) );
            var detach_value = tabList.top - ($header.height() + parseInt($header.css("top"))) + tabList.height;
            if(direction=="down" && now >= attach_value){
                $header.append(tabList.appendItem);
                console.log("attach!")
            }else if(direction=="up" && now < detach_value){
                tabList.parent.append(tabList.appendItem);
                console.log("detach!")
            }
        }*/


        upAndDownAdd(kdh.body,kdh.scrollDirection);

    });


    function upAndDownAdd(wrapperId, direction) {
        switch (direction) {
            case "up":
                wrapperId.addClass("-up").removeClass("-down");
                break;
            case "down":
                wrapperId.addClass("-down").removeClass("-up");
                break;
            default:
                break;
        }
    }

}