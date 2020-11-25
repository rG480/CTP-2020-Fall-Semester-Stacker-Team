import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddItemModal from './ItemSubmissionModal';


class ItemExpanded extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showModal:false,
        }
        this.toggleModal = this.handleSelect.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    handleSelect(){
        this.setState({
          showModal: this.state.showModal ? false : true
        })
    }

    confirmDelete() {
        let deleteItem = window.confirm("Are you sure you want to delete " + this.props.list.name  + "?" );
        if (deleteItem) {this.itemDeleted()};
    }

    itemDeleted() {
        fetch("/api/inv/" + this.props.list.id, {
            method: 'DELETE',
    })
    .then(post => {
        this.props.refreshPage();
        this.props.hide();
    })
    }

    itemEdit() {
        fetch("/api/inv/" + this.props.list.id, {
            method: 'PUT',
    })
}
    


    render () {
       let addedButtons;
        if (this.props.user && this.props.user.id === this.props.list.OwnderId) {
            addedButtons = (
                <div >
                    <button className="btn btn-primary" style={{margin: "5px"}} onClick={this.toggleModal}>Edit</button>
                    <button className="btn btn-primary" style={{margin: "5px"}} onClick={this.confirmDelete}>Delete</button>
                </div>
            );
        }
        let currPrice = this.props.list.currentPrice;
        let purPrice = this.props.list.purchasePrice;
        let profit = currPrice - purPrice;
        let currentMoneyStanding;
        if (profit > 0) {
            currentMoneyStanding = 'You are up ';
        } else if (profit === 0){
            currentMoneyStanding = 'You are dead even.';
        } else {
            currentMoneyStanding = 'Sorry you are down ';
        }
        profit = Math.abs(profit);
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
            <Modal.Header closeButton>
                <Modal.Title>{ this.props.list.name }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ul className="list-group list-group-flush">
                       <li className="list-group-item text-left">Date Added: { this.props.list.dateAdded }</li>
                       <li className="list-group-item text-left">Purchase Price: { this.props.list.purchasePrice }</li>
                       <li className="list-group-item text-left">Current Prive: { this.props.list.currentPrice }</li>
                       <li className="list-group-item text-left"> { currentMoneyStanding + profit } </li>
                       <li className="list-group-item text-left">Description: { this.props.list.description }</li>    
            </ul>
            <div className="d-flex justify-content-end" style={{paddingTop: "15px"}}>
                { addedButtons }
                <AddItemModal reloadContent={this.props.reloadContent} edit={true} values={this.props.list} show={this.state.showModal} hide= {this.toggleModal}></AddItemModal>
            </div>
            </Modal.Body>
            </Modal>
        );
    }
}

export default ItemExpanded;

