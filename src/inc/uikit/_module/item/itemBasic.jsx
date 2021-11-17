class ItemBasic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.item = this.state.itemData;
        console.log(this.state)
    }

    zzimClick = (e)=>{
        e.preventDefault();
        kdh.atom.itemZzimObj.zzim($(e.target).parent());
    };

    priceSet = () =>{
        const pmtDcRate = this.item.pmtDcRate; //할인율
        var prdPrc = this.item.prdPrc; //판매가
        var priceDom;

        if(pmtDcRate && parseInt(pmtDcRate) >0){
            var prdOrign=prdPrc;
            prdPrc = prdPrc - (prdPrc*pmtDcRate)/100;
            priceDom=
                <div className={`a-itemPrice`}>
                    <span className={`a-itemPrice__percent`}>{pmtDcRate}%</span>
                    <span className={`a-itemPrice__now`}>{kdh.common.priceComma(prdPrc)}</span>
                    <span className={`a-itemPrice__origin`}>{kdh.common.priceComma(prdOrign)}</span>
                </div>

        }else{
            priceDom=
                <div className={`a-itemPrice`}>
                    <span className={`a-itemPrice__now`}>{kdh.common.priceComma(prdPrc)}</span>
                </div>
        }

        return priceDom;
    };

    mediaQueryClassSet = () =>{
        var mediaClass= "";
        switch (this.state.displayType) {
            case "row": mediaClass = `col-md-3 col-sm-4 col-xs-6`; break;
            case "list": mediaClass = `col-md-6 col-sm-6 col-xs-12`; break;
            default: break;
        }

        return mediaClass;
    };


    test =()=>{
        this.setState(state=>{
            var type=state.displayType;
            switch (state.displayType) {
                case "list": type="row"; break;
                case "row": type="list"; break;
                default: break;
            }
            return{
                displayType:type
            }
        },()=>{console.log(this.state.displayType)})
    };

    render(){
        return(
            <div className={this.mediaQueryClassSet()}>
                <div className={`m-itemBasic -${this.state.displayType}`}>
                    <a href={`#`} className={`m-itemBasic__link`} onClick={this.test}></a>
                    <div className={`m-itemBasic__image`}>
                        <div className={`a-itemImage`}>
                            <img src={this.item.fileName} alt=""/>
                        </div>
                        <div className={`a-itemZzim`} data-zzim={this.item.zzimPrdYn == "Y" ? `on`:`off`}>
                            <a className={`a-itemZzim__btn`} href={`#`} onClick={()=> {this.zzimClick(event)}} ><span className={``}>찜하기</span></a>
                        </div>
                    </div>
                    <div className={`m-itemBasic__content`}>
                        <div className={`a-itemName`} >
                            {this.item.prdNm}
                        </div>
                        {this.priceSet()}
                      {/*  <div className={`a-itemStat`}>
                            <span className={`a-itemStat__star`}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1216.000000pt" viewBox="0 0 1280.000000 1216.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1216.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M5890 10598 c-332 -755 -736 -1674 -898 -2043 -161 -368 -295 -671 -297 -673 -2 -2 -308 -25 -682 -52 -373 -27 -1054 -76 -1513 -109 -459 -34 -1087 -79 -1395 -101 -308 -22 -585 -43 -615 -46 l-54 -6 49 -47 c28 -25 336 -300 684 -611 349 -311 806 -718 1016 -905 1267 -1130 1560 -1391 1572 -1400 17 -13 74 228 -542 -2265 -256 -1036 -464 -1887 -463 -1890 2 -4 869 499 1928 1117 1058 618 1931 1122 1940 1120 8 -2 398 -242 865 -532 468 -291 1165 -724 1550 -963 385 -239 811 -504 947 -588 135 -85 249 -154 253 -154 4 0 4 17 0 38 -6 34 -411 1897 -776 3568 -87 402 -159 738 -159 747 0 13 649 563 2997 2542 258 217 261 220 230 227 -18 4 -1011 104 -2207 223 -1196 119 -2184 220 -2196 225 -15 6 -62 111 -199 446 -98 242 -412 1013 -697 1714 -285 701 -564 1388 -620 1525 -56 138 -104 253 -108 258 -3 4 -278 -610 -610 -1365z"/></g></svg>
                            </span>
                            <span className={`a-itemStat__score`}>4.6</span>
                            <span className={`a-itemStat__review`}>리뷰 <span className={`a-itemStat__review__count`}>225</span>건</span>
                        </div>*/}

                        <div className={`a-itemBenefit`}>
                            {(this.item.dlvcdFreeYn == "Y") ? <div className={`a-itemBenefit__freeDeli`}>무료배송</div>: <div className={`a-itemBenefit__freeDeli`}>배송비 2,500원</div>}


                            <div className={`a-itemBenefit__card`}>
                                <span>{(this.item.dcCardNm)} {(this.item.dcCardRt)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}