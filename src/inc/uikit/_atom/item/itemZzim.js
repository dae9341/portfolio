function __itemZzim() {
    var me =this;

    function zzimLayerSet(isOn) {
        var zzimLayer;
        if(!isOn){
            zzimLayer="<div class=\"a-itemZzimLayer -on\">\n" +
                "    <div class=\"a-itemZzimLayer__image\">\n" +
                "<span>찜하기 추가!!</span>"+
                "    </div>\n" +
                "</div>"
        }else{
            zzimLayer="<div class=\"a-itemZzimLayer -off\">\n" +
                "    <div class=\"a-itemZzimLayer__image\">\n" +
                "<span>찜하기 삭제!!</span>"+
                "    </div>\n" +
                "</div>"
        }
        return zzimLayer;
    }

    function zzimLayerFade($wrapper){
        $wrapper.fadeIn();
        setTimeout(function () {
            $wrapper.fadeOut(function () {
                $(this).remove();
            });
        },1000)
    }

    me.zzim=function(clickItem){
        var $btn =$(clickItem);
        var $zzimRoot = $btn.parent(".a-itemZzim");
        var zzimLayerEl;
        if($zzimRoot.find(".a-itemZzimLayer")){
            $zzimRoot.find(".a-itemZzimLayer").remove();
        }

        if(__isZzim($zzimRoot.data("zzim"))){ //현재상태 ON
            $zzimRoot.removeClass("-on");
            $zzimRoot.data("zzim","off");
            $zzimRoot.append(zzimLayerSet(true));
            zzimLayerEl = $zzimRoot.find(".a-itemZzimLayer.-off");
        }else{//현재상태 OFF
            $zzimRoot.addClass("-on");
            $zzimRoot.data("zzim","on");
            $zzimRoot.append(zzimLayerSet(false));
            zzimLayerEl = $zzimRoot.find(".a-itemZzimLayer.-on");
        }
        zzimLayerFade(zzimLayerEl);
    };
}
// 현재 찜상태 체크 "on"일경우 true, "off"일경우 false
function __isZzim(checkItem) {
    var isOn;
    switch (checkItem) {
        case "on": isOn=true; break;
        case "dff": isOn=false; break;
        default: break;
    }
    return isOn;
}

//찜 상태에따라 클래스부여
function __itemZzimInit(){
    const $itemZzims = $(".a-itemZzim");
    $itemZzims.each(function (i) {

        if(__isZzim($(this).data("zzim"))){
            $(this).addClass("-on");
        }else{
            $(this).removeClass("-on");
        }
    });
};