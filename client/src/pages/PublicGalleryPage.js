import React from 'react';
import { useParams } from "react-router-dom";
class PublicGalleryPage extends React.Component {
    constructor(props){
      super(props)
      this.state={
        
      }
     
    }
  componentDidMount(){
    fetch("/api/inv/"+this.props.location.state.params.id2)
    .then(res=>{ return res.json()})
    .then(ans=>console.log(ans))
  }
  render(){
   
    alert(this.props.location.state.params.id1)
    alert( this.props.location.state.params.id2)
    
    return (
      <div>Yo buddy</div>
    );
    
  }
}
  export default PublicGalleryPage;