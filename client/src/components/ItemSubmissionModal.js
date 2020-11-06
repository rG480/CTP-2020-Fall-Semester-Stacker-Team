import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class AddItemModal extends React.Component{
    constructor(props){
         super(props)
         this.state={
          name:"",
          quantity:1,
          pPrice:0.00,
          cPrice:0.00,
          desc:""
        }
    }
    
    alertText(){
      alert(this.state.quantity)
    }
    render(){
    return(<Modal show={this.props.show} onHide={this.props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Modal body text goes here.</p>
        <form>
          Item Name:
          <br/>
          <input type="text" onChange={e=>this.setState({name:e.target.value})} />
          <br/>
          Quantity:
          <br/>
          <input type="number" onChange={e=>this.setState({quantity:e.target.value})}/>
          <br/>
         Purchase Price:
          <br/>
          <input type="text" onChange={e=>this.setState({pPrice:parseFloat(e.target.value)})}/>
          <br/>
          Current Price:
          <br/>
          <input type="text" onChange={e=>this.setState({cPrice:parseFloat(e.target.value)})}/>
          <br/>
          Description:
          <br/>
          <textarea onChange={e=>this.setState({desc:e.target.value})}/>
          
        </form>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
        <Button variant="primary" onClick={e=>this.props.submission(this.state.name,this.state.quantity,
         this.state.pPrice,this.state.cPrice,'11/5/2020',this.state.desc   )}>Save changes</Button>
      </Modal.Footer>
    </Modal>
    );}
  }
  export default AddItemModal;