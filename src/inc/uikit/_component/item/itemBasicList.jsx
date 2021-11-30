class ItemBasicList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        console.log(props);;
        this.setDisplayType = this.setDisplayType.bind(this);
        // console.log("this state::::",this.state);
    }


    setDisplayType(){
        this.setState(state=>{
            var type="";
            switch (state.displayType) {
                case "list": type="row"; console.log(type); break;
                case "row": type="list"; console.log(type); break;
                default: type="row"; break;
            }
            console.log(type);
            return{
                ...state,
                displayType:type
            }
        });
    }


    render(){
        console.log(this.state.displayType);
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