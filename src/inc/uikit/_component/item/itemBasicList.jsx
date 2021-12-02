class ItemBasicList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props.props
        };
        this.setDisplayType = this.setDisplayType.bind(this);
        // console.log("this state::::",this.state);
    }


    setDisplayType(){
        this.setState(state=>{
            var type="";
            switch (state.displayType) {
                case "list": type="row"; break;
                case "row": type="list"; break;
                default: type="row"; break;
            }
            return{
                ...state,
                displayType:type
            }
        });
    }


    render(){
        return(
            <div>
                {this.state.isSwitchBtn ? <button className={`switch -${this.state.displayType}`} type={`button`} onClick={this.setDisplayType}>switch</button>:''}
                <div className={`c-itemBasicList -${this.state.displayType}`}>
                    {this.state.itemData.map( item =>{
                        return <ItemBasic itemData={item} displayType={this.state.displayType}/>;
                    })}
                </div>
            </div>

        );
    }


}