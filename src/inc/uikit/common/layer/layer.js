function __layer() {
    var me = this;
    var $layer = $(".com-layer");


    //레이어 오픈
    me.open=function (wrapperId) {
        $(wrapperId).addClass("-open");
    };


    return me;
};