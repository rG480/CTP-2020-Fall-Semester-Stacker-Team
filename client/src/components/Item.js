import React from 'react';


class Item extends React.Component {

    render () {
        return (
            <div className="" style={{minWidth: "225px", padding: "10px"}}>
            <div className="shadow" >
                <div className="card-body card-text">
                    <p>Castlevania</p>
                    <img alt="castle.jpg"></img>
                </div>
                <div className="card-footer small text-muted text-right">
                    <p>$10.00</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Item;