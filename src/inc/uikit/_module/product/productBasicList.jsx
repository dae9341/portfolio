class ProductBasicList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            prdList : this.props
        }

        console.log(this.state.prdList)
    }

    render(){
        const list = this.state.prdList.map((item)=> (<ProductBasic listItem={item} /> ));

        return(
            <div className="m-productBasicList">
                {list}
            </div>
        )
    }


}