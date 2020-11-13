import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import auth from '../services/auth'
class LoginModal extends React.Component{
    constructor(props){
         super(props)
         this.state={
         
          email:"",
          passWord:"",
         
        }

    }
    login = (e) => {
       
        let { email, password } = this.state;
        auth.authenticate(email, password)
          .then((user) => {
            this.setState({ redirectToReferrer: true });
            this.props.hide();
          })
          .catch((err) => {
            this.setState({ failed: true });
          });
       
      }
   
    render(){
        if (auth.isAuthenticated===true){
            alert("Nice")
        }
    return(<Modal show={this.props.show} onHide={this.props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Modal body text goes here.</p>
        <form>
          Item Name:
          <br/>
          <input type="text" onChange={e=>this.setState({email:e.target.value})} />
          <br/>
         
          Current Price:
          <br/>
          <input type="text" onChange={e=>this.setState({password:e.target.value})}/>
          <br/>
         
        </form>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
        <Button variant="primary" onClick={e=>this.login()} >Login</Button>
      </Modal.Footer>
    </Modal>
    );}
  }
  export default LoginModal;