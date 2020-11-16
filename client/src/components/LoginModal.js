import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import auth from '../services/auth'
class LoginModal extends React.Component{
    constructor(props){
         super(props)
         this.state={
          activeTab:0,
          username:"",
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
            localStorage.setItem('email',user.userEmail)
          })
          .catch((err) => {
            this.setState({ failed: true });
          });
       
      }
      signup=(e)=>{
        let{username,email,password} =this.state;
        auth.signin(username, email, password)
        .then((user) => {
          this.setState({ redirectToReferrer: true });
          this.props.hide();
          localStorage.setItem('email',user.userEmail)
        })
        .catch((err) => {
          this.setState({ failed: true });
        });
      }
    render(){
        let renderThis
        if (this.state.activeTab===0){
          renderThis=(<div>
          <Modal.Body>
            
            <form>
              Email Address:
              <br/>
              <input type="text" onChange={e=>this.setState({email:e.target.value})} />
              <br/>
             
              Password:
              <br/>
              <input type="text" onChange={e=>this.setState({password:e.target.value})}/>
              <br/>
             
            </form>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
            <Button variant="primary" onClick={e=>this.login()} >Login</Button>
          </Modal.Footer>
          </div>
        )
        }
      else if (this.state.activeTab===1){
       
        renderThis=(
        <div>
          <Modal.Body>
            <form>
              Username:
              <br/>
              <input type="text" onChange={e=>this.setState({username:e.target.value})} />
              <br/>

              Email Address:
              <br/>
              <input type="text" onChange={e=>this.setState({email:e.target.value})} />
              <br/>
             
              Password:
              <br/>
              <input type="text" onChange={e=>this.setState({password:e.target.value})}/>
              <br/>
             
            </form>
         </Modal.Body>
         <Modal.Footer>
         <Button variant="secondary" onClick={e=>this.props.hide()}>Close</Button>
         <Button variant="primary" onClick={e=>this.signup()} >Login</Button>
       </Modal.Footer>
       </div>)
      }
    return( 
      <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            <Button onClick={e=>{this.setState({activeTab:0})}}>login</Button>
            <Button onClick={e=>{this.setState({activeTab:1})}}>sign up</Button>
          </Modal.Header>
          {renderThis}
      </Modal>
      
     
    );}
  }
  export default LoginModal;