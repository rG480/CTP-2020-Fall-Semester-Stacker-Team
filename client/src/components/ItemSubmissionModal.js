import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class AddItemModal extends React.Component{
    constructor(props){
         super(props)
         this.state={
          name:"",
          quantity:1,
          dateAdded: new Date(),
          pPrice:0.00,
          cPrice:0.00,
          desc:"",
          public:false
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
          Date Obtained:
          <br/>
          <DatePicker selected={this.state.dateAdded} onSelect={date=>this.setState({dateAdded:date})} ></DatePicker>
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
          <br/>
          Show publically? <input type="checkbox"></input>
        </form>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
        <Button variant="primary" onClick={e=>this.props.submission(this.state.name,this.state.quantity,
<<<<<<< HEAD
         this.state.pPrice,this.state.cPrice,this.state.dateAdded,this.state.desc  )} >Save changes</Button>
=======
         this.state.pPrice,this.state.cPrice,this.state.dateAdded,this.state.desc,this.state.public)}>Save changes</Button>
>>>>>>> 43e69b9cc14ab779f12271976e15508b1e0217a2
      </Modal.Footer>
    </Modal>
    );}
  }
  export default AddItemModal;