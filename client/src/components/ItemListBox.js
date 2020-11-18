import React from 'react';
import ItemList from './ItemList';

class ItemListBox extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                <div>
                <ItemList items={this.props.list} />
                </div>
            </div>
        )
    }
}

export default ItemListBox;