import React from 'react';
import Item from './Item';


class ItemList extends React.Component {

    render() {
        let List = []
        for (let i = 0; i < 5; i++) {
            List.push(
                <Item />
            );
        }

        return (
            <div style={{paddingBottom:"50px"}}>
                <p>Video Games</p>
                    <div className="overflow-auto" style={{display: 'flex', flexDirection: 'row'}}>
                        { List }
                    </div>
            </div>
        );
    }

}

export default ItemList;