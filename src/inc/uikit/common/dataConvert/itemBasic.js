function __itemBasicConvert(itemList) {
    console.log(itemList);
    var item = itemList.tvOtherPrdList;

    var DATA = [];
    var VO={
        goodsNo:"", // 상품코드
        prdNm:"", // 상품명
        prdPrc:"", // 판매가
        dlvcdFreeYn:"", // 배송비 
        zzimPrdYn:"", // 찜
        pmtDcRate:"", // 상품 할인율
        dcCardNm: "농협", // 할인카드
        dcCardRt: "7", //  할인카드의 할인율
        fileName: "/18/71/50/14029098_SIZE_.jpg", // https://img.publichs.com/ECMCFO/share/product/ "썸네일 url"
        intfInttMms: 0, // 무이자 할부 개월수
        intfInttYn: "N" // 무이자 할수 여부
    };

    item.forEach( i =>{
        var imgUrl = i.fileName.replace("SIZE_","600x600");
        VO={
            goodsNo:i.goodsNo,
            prdNm:i.prdNm,
            dlvcdFreeYn:i.dlvcdFreeYn,
            zzimPrdYn:i.zzimPrdYn,
            prdPrc:i.prdPrc,
            pmtDcRate:i.pmtDcRate,
            dcCardNm: i.dcCardNm,
            dcCardRt: i.dcCardRt,
            fileName: "https://img.publichs.com/ECMCFO/share/product"+ imgUrl,
            intfInttMms: i.intfInttMms,
            intfInttYn: i.intfInttYn
        };

        DATA.push(VO);
    });



    return DATA;
}