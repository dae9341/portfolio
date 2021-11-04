class ItemBasicList extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props;
    };

    render(){
        return(
            <div className={`c-itemBasicList -row`}>
                {this.state.map( item =>{
                    return <ItemBasic prop={item}/>;
                })}

            </div>

        );
    }


}