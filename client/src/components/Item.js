import React from 'react';


class Item extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
      //  console.log(this.props.itemContent.dateAdded)
        return (
            <div className="" style={{minWidth: "225px", padding: "10px"}}>
            <div className="shadow" >
                <div className="card-body card-text">
                    <p>{this.props.itemContent.name}</p>
                    <img alt="castle.jpg"></img>
                </div>
                <div className="card-footer small text-muted text-right">
                    <p>{this.props.itemContent.currentPrice}</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Item;