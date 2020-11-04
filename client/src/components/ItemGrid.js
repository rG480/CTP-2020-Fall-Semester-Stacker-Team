import React from 'react';
import Item from './Item';


class ItemGrid extends React.Component {

    render() {
        let grid = []
        for (let i = 0; i < 4; i++) {
            grid.push(
                <Item />
            );
        }

        return (
            <div className="row" >
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div className="card mb-4 shadow">
                        <div className="card-body card-text">
                        <p>Video Games</p>
                        { grid }
                        </div>
                    </div>
                </div>
            </div>
       
        );
    }

}

export default ItemGrid