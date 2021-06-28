class ProductBasic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            prdList:this.props.listItem
        };

        console.log("test", this.state.prdList);
    }

    render(){
        return(
            <div className="m-productBasic">
                <span className="m-productBasic__num">{this.state.prdList.num}</span>
                <a className="m-productBasic__link" href="#">
                    <div className="m-productBasic__thumb">
                        <img src={this.state.prdList.thumnailUrl} alt="[여수사나이] 파김치 1kg 국내산 당일생산" className=" b-error"/>
                    </div>
                    <div className="m-productBasic__info">
                        <div className="m-productBasic__info__name">
                            <span>{this.state.prdList.goodsName}</span>
                        </div>
                        <div className="m-productBasic__info__price">
                            <span className="a-priceBasic">{this.state.prdList.goodsPrice}</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
