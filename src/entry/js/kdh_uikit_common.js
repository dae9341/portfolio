kdh.common={
    headerSticky : __headerSticky, // 공통 > 헤더 고정영역
    layer : __layer, // 공통 > 레이어
    priceComma:__priceComma, // 공통 > 금액 콤마표시
};

// 컨버터
kdh.convert={
    itemBasic:__itemBasicConvert // itemBasic 전용 컨버터
};

$(function (){
    kdh.common.headerSticky();
});