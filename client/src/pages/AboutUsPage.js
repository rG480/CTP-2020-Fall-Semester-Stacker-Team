import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import LoginModal from '../components/LoginModal'
import auth from '../services/auth'
class AboutUsPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false,
      file:''
    }
    this.toggler = this.toggleModal.bind(this)
  }
  toggleModal(){
    
     this.setState({
      showModal:this.state.showModal ? false : true
     });
  }
  uploadImg(file){
    const url = "https://api.cloudinary.com/v1_1/dmn7aui2f/image/upload";
//const form = document.querySelector("form");
console.log(this.state.file)
/*
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //const files = document.querySelector("[type=file]").files;*/
  const formData = new FormData();
  console.log(this.state.file[0])
  formData.append("image", this.state.file[0]);
  fetch('/api/imgs',{
    method:"POST",
    body:formData
  })
 
  //CLOUDINARY_URL=cloudinary://924855337244827:N968qSrw_2hobcB7KwmUs20uYaU@dmn7aui2f
    //formData.append("file", this.state.file[0]);
    //formData.append("upload_preset", "");
    //formData.append("api_key")
   /* fetch(url, {
      method: "POST",
      body: formData
    })
      .then((response) => {
       return response.url;
      })
      .then((data) => {
        console.log(data)
      });*/
  
//});
  }
  render(){
    if( localStorage.getItem("email") !== 'undefined'){
      auth.user = localStorage.getItem('email')
    }
  return (
    <div> Welcome, {auth.user}
    <button onClick={this.toggler}>Add Item</button>
    <LoginModal show={this.state.showModal} hide={this.toggler}></LoginModal>

    <input type="file" name="files" onChange={e=>{this.setState({file:e.target.files})}} ></input>
    <Button onClick={e=>this.uploadImg()}>Upload img</Button>
    </div>
  );
  }
}

export default AboutUsPage;