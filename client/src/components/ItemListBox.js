import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import ItemList from './ItemList';
import TableViewModal from './TableViewModal';

class ItemListBox extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tableToggle:false,
          }
        this.toggle=this.toggleTable.bind(this)
    }
    toggleTable(){
        this.setState({
            tableToggle: this.state.tableToggle ? false : true
        })
        console.log(this.state.tableToggle)
    }
    render () {
        return (
            <div>
                <div>
                <ItemList items={this.props.list} user={this.props.user} />
                <TableViewModal show={this.state.tableToggle} hide={this.toggle}></TableViewModal>
                <Button onClick={this.toggle}>Table View</Button>
                </div>
            </div>
        )
    }
}

export default ItemListBox;