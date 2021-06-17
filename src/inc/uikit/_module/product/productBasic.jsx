class ProductBasic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className="m-productBasic">
                <a className="m-productBasic__link" href="#">
                    <div className="m-productBasic__thumb">
                        <img src="https://img.publichs.com/ECMCFO/mc_images/uikit/base/dot.gif" alt="[여수사나이] 파김치 1kg 국내산 당일생산" className=" b-error"/>
                    </div>
                    <div className="m-productBasic__info">
                        <div className="m-productBasic__info__name">
                            <span>[여수사나이] 파김치 1kg 국내산 당일생산</span>
                        </div>
                        <div className="m-productBasic__info__price">
                            <span>9,400</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
