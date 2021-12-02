class ItemBasicListWrap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render(){
        return(
            <div className={`c-itemBasicListWrap`}>
                <ItemBasicList props={this.state}/>
            </div>

        );
    }


}