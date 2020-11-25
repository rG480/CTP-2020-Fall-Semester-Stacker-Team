import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class AddItemModal extends React.Component{
    constructor(props){
         super(props)
        
      if(this.props.edit===false){
         this.state={
          name:"",
          quantity:1,
          dateAdded: new Date(),
          image:'',
          pPrice:'',
          cPrice:'',
          desc:"",
          pub: false
        }
       
      }
      else if (this.props.edit===true) {
        this.state={
          name:props.values.name,
          quantity:props.values.quantity,
          dateAdded: new Date(props.values.dateAdded),
          pPrice:props.values.purchasePrice,
          cPrice:props.values.currentPrice,
          desc:props.values.description,
          pub: props.values.public
        }
      
      } 
    }
    addItem(){
      let jsonToSend= {
        name:this.state.name,
        quantity:this.state.quantity,
        dateAdded: this.state.dateAdded,
        purchasePrice: parseFloat(this.state.pPrice),
        currentPrice: parseFloat(this.state.cPrice),
        description: this.state.desc,
        pub: this.state.pub
      } 
      const formData = new FormData();
      console.log(this.state.image[0])
      formData.append("image", this.state.image[0]);
      formData.append("json",JSON.stringify(jsonToSend));
      fetch("/api/inv/", {
        method: 'POST',
        credentials: 'include',
        headers: {
      
        },
        body: formData,
      })
        .then(res => {
          if(res.ok) {
            return res.json()
          }
    
          throw new Error('Content validation');
        })
        .then(post => {
          alert("Success!")
          this.props.reloadContent();
         
         
        })
        .catch(err => {
          alert("error :3")
        });
        
    }
   

    editItem(){
      let jsonToSend= {
        id:this.props.values.id,
        name:this.state.name,
        quantity:this.state.quantity,
        dateAdded: this.state.dateAdded,
        purchasePrice: parseFloat(this.state.pPrice),
        currentPrice: parseFloat(this.state.cPrice),
        description: this.state.desc,
        pub: this.state.pub
      } 
      fetch("/api/inv/:edit",{
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonToSend),
      }).then(post => {
        alert("Success!")
        this.props.reloadContent();
       
      })
      .catch(err => {
        alert("error :3")
      });

      
    }
    render(){
      let button; 
     
      if(this.props.edit===false){
        button= ( <Button variant="primary" onClick={e=>this.addItem()} >Add Item</Button>)
      }
      else if (this.props.edit===true){
        button =(<Button variant="primary" onClick={e=>this.editItem()} >Save changes</Button>)
      }

    return(<Modal show={this.props.show} onHide={this.props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Modal body text goes here.</p>
        <form>
          Image:
          <br/>
          <input type="file" name="files" onChange={e=>{this.setState({image:e.target.files})}} ></input>
          <br/>
          Item Name:
          <br/>
          <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
          <br/>
          Quantity:
          <br/>
          <input type="number" value={this.state.quantity} onChange={e=>this.setState({quantity:e.target.value})}/>
          <br/>
          Date Obtained:
          <br/>
          <DatePicker selected={this.state.dateAdded} onSelect={date=>this.setState({dateAdded:date})} ></DatePicker>
          <br/>
         Purchase Price:
          <br/>
          <input type="text" value={this.state.pPrice} onChange={e=>this.setState({pPrice:e.target.value})}/>
          <br/>
          Current Price:
          <br/>
          <input type="text" value={this.state.cPrice}  onChange={e=>this.setState({cPrice:e.target.value})}/>
          <br/>
          Description:
          <br/>
          <textarea value={this.state.desc} onChange={e=>this.setState({desc:e.target.value})}/>
          <br/>
          Show publically? <input type="checkbox" checked={this.state.pub} onChange={e=>this.setState({pub: this.state.pub? false : true })}></input>
        </form>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
        {button}
      </Modal.Footer>
    </Modal>
    );}
  }
  export default AddItemModal;