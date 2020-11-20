import React from 'react';
import Modal from 'react-bootstrap/Modal'

class ItemExpanded extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
       let addedButtons;
        if (this.props.user && this.props.user.id === this.props.list.OwnderId) {
            addedButtons = (
                <div >
                    <button className="btn btn-primary" style={{margin: "5px"}}>Edit</button>
                    <button  className="btn btn-primary" style={{margin: "5px"}}>Delete</button>
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
            </div>
          
            </Modal.Body>
            </Modal>
        );
    }
}

export default ItemExpanded;

