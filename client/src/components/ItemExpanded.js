import React from 'react';
import Modal from 'react-bootstrap/Modal'

class ItemExpanded extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
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
            </Modal.Body>
            </Modal>
        );
    }
}

export default ItemExpanded;

