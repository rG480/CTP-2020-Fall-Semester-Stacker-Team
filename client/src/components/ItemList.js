import React from 'react';
import Item from './Item';


class ItemList extends React.Component {

    render() {
        let List = []
        for (let i = 0; i < 10; i++) {
            List.push(
                <Item />
            );
        }

        return (
            <div>
                <div>
                    <p>Video Games</p>
                </div>
                <div class="container-fluid ">
                    <div class="row flex-row flex-nowrap overflow-auto">
                        { List }
                    </div>
                </div>
            </div>
        )
    
    }

}

export default ItemList;