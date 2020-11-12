import React from 'react';
import Item from './Item';


class ItemList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let List = []
        for (let i = 0; i < this.props.items.length; i++) {
            List.push(
                <Item itemContent={this.props.items[i]}/>
            );
        }
        
        return (
            <div>
                <div>
                    <p>Video Games</p>
                </div>
                <div class="container-fluid ">
                    <div class="row flex-nowrap overflow-auto">
                        { List }
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemList;