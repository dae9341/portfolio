class ItemBasicList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.setDisplayType = this.setDisplayType.bind(this);
        // console.log(this.state.displayType);
        console.log(props, this.state);
    }


    setDisplayType =()=>{
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
            <div>
                <button className={`switch -${this.state.displayType}`} type={`button`} onClick={this.setDisplayType}>switch</button>
                <div className={`c-itemBasicList -${this.state.displayType}`}>
                    {this.state.itemData.map( item =>{
                        return <ItemBasic itemData={item} displayType={this.state.displayType}/>;
                    })}
                </div>
            </div>

        );
    }


}