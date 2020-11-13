import React from 'react';
import LoginModal from '../components/LoginModal'
import auth from '../services/auth'
class AboutUsPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
    this.toggler = this.toggleModal.bind(this)
  }
  toggleModal(){
    
     this.setState({
      showModal:this.state.showModal ? false : true
     });
  }
  render(){
  return (
    <div> Welcome, {auth.user}
    <button onClick={this.toggler}>Add Item</button>
    <LoginModal show={this.state.showModal} hide={this.toggler}></LoginModal>
    </div>
  );
  }
}

export default AboutUsPage;