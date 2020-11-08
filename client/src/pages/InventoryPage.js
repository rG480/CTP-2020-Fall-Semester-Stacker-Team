import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from '../components/Table'
import UserInfo from '../components/UserInfo'

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
        <input type="text" onChange={e=>this.setState({pPrice:e.target.value})}/>
      </form>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
      <Button variant="primary" onClick={e=>this.props.submission(this.state.name,this.state.quantity)}>Save changes</Button>
    </Modal.Footer>
  </Modal>
  );}
}



class InventoryPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
    this.toggleModal = this.handleSelect.bind(this)
    this.submit = this.handleSubmission.bind(this)
  }
  handleSelect(){
    console.log(this.state.showModal)
    this.setState({
      showModal: this.state.showModal ? false : true
    })
  }
  handleSubmission(s,x){
    
    let jsonToSend= {
      name:s,
      quantity:x,
      dateAdded: '11/4/2020',
      purchasePrice: 19.99,
      currentPrice: 37.23,
      description: "My first Gunpla model!",
    }
    console.log(JSON.stringify(jsonToSend))
    fetch("/api/inv/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonToSend),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
  
        throw new Error('Content validation');
      })
      .then(post => {
        alert("Success!")
      })
      .catch(err => {
        alert("error :3")
      });
  }
  componentDidMount() {
    fetch("/api/inv/")
      .then(res => res.json())
      .then(post => {
       alert(post[2].name)
      })
    }


  render() {
   
    return ( <div className="content">
    <div className="collection-title">
      <h2>Collection Title</h2>
    </div>
    <div className="float-left" style={{paddingRight:"25px"}}>
            <UserInfo />
    </div>
    <div className="inventory float-right" >
    
    <Table />
    </div>
    <div>
    <AddItemModal show={this.state.showModal} hide= {this.toggleModal} submission={this.submit}></AddItemModal>
      <button onClick={e=>this.handleSubmission(e)}>Click to add</button>
      <button onClick={this.toggleModal}>Toggle modal</button>
    </div>
</div>
);
  }
}

export default InventoryPage;