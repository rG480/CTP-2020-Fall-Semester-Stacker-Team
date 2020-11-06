import React from 'react';
import ItemList from './ItemList';

class ItemListBox extends React.Component {

    render () {
        return (
            <div >
                <div>
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                </div>
            </div>
        )
    }
}

export default ItemListBox;