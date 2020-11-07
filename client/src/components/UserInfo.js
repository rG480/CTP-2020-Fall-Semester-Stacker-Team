import React from 'react';
import AddItemModal from '../components/ItemSubmissionModal';

class UserInfo extends React.Component {

  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
    this.toggleModal = this.handleSelect.bind(this)
    this.submit = this.handleSubmission.bind(this)
  }
  handleSelect(){
    this.setState({
      showModal: this.state.showModal ? false : true
    })
  }
  handleSubmission(name,quant,initPrice,currPrice,date,desc){
    
    let jsonToSend= {
      name:name,
      quantity:quant,
      dateAdded: "11/5/2020",
      purchasePrice: initPrice,
      currentPrice: currPrice,
      description: desc,
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
        this.setState({
          showModal:false
        })
      })
      .catch(err => {
        alert("error :3")
      });
  }
    render () {
    return (
      <div style={{width: "200px", padding: "20px"}}>
        <div class="card" >
          <img class="card-img-top" src=".." alt="userImagge.jpg"></img>
          <ul class="list-group list-group-flush">
    <li class="list-group-item">steve </li>
            <li class="list-group-item">User Email</li> 
          </ul>
          <div className="card-body">
            <p>badge</p>
            <p>badge</p>
            <p>badge</p>
            <p>badge</p>
            <AddItemModal show={this.state.showModal} hide= {this.toggleModal} submission={this.submit}></AddItemModal>
            <button onClick={this.toggleModal}>Add Item</button>
          </div>
        </div>
      </div>
      );
    }
}



export default UserInfo;