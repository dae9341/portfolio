class ItemBasicList extends React.Component{
    constructor(props,displayType) {
        super(props);
        this.state = {
            itemData:this.props,
            displayType:displayType
        };

        this.setDisplayType = this.setDisplayType.bind(this);
        console.log(this.state.displayType);
    };

    setDisplayType (){
        this.setState(state=>{
            if(state.displayType ==="row"){
                return{
                    ...state,
                    displayType: "list"
                }
            }else if(state.displayType==="list"){
                return{
                    ...state,
                    displayType: "row"
                }
            }else{
                return false;
            }
        })
    };

    render(){
        {console.log("test")}
        return(
            <div>
                <button type={`button`} onClick={this.setDisplayType}>switch</button>
                <div className={`c-itemBasicList -${this.state.displayType}`}>
                    {this.state.itemData.map( item =>{
                        return <ItemBasic itemData={item} displayType={this.state.displayType}/>;
                    })}
                </div>
            </div>

        );
    }


}