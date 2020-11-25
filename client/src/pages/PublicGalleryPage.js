import React from 'react';
import GalleryItemBox from '../components/GalleryItemBox';
class PublicGalleryPage extends React.Component {
    constructor(props){
      super(props)
      this.state={
        itemsList:''
      }
     
    }
  componentDidMount(){
    fetch("/api/inv/"+this.props.location.state.params.id2)
    .then(res=>{ return res.json()})
    .then(ans=>this.setState({itemsList:ans}))
  }
  render(){
     let renderedContent;
     if(this.state.itemsList.length){
       renderedContent= (<div><GalleryItemBox list={this.state.itemsList}></GalleryItemBox></div>)
     }
    else{
        renderedContent= ( <div>Yo buddy</div>)
    }
    return (
     renderedContent
    );
    
  }
}
  export default PublicGalleryPage;