kdh.atom={
    input : __input, // 폼 > 인풋
    itemZzimInit:__itemZzimInit, // 찜하기 이닛
    itemZzim:__itemZzim ,// 찜하기
    itemZzimObj:"" // 찜하기 실행부
};

$(function () {
    // kdh.atom.scrapInit();
    kdh.atom.itemZzimObj = new kdh.atom.itemZzim();

})
