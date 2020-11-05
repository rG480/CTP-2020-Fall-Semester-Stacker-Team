import React from 'react';
import Item from './Item';


class ItemGrid extends React.Component {

    render() {
        let grid = []
        for (let i = 0; i < 5; i++) {
            grid.push(
                <Item />
            );
        }

        return (
            <div>
                <p>Video Games</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        { grid }
                    </div>
            </div>
        );
    }

}

export default ItemGrid