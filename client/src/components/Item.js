import React from 'react';


class Item extends React.Component {

    render () {
        return (
            <div className="col-lg-3 col-md-4 col-sm-5">
            <div className="card mb-3 shadow" >
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