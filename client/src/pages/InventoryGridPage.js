import React from 'react';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';


class InventoryGridPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemsList:''
    }
  }
  componentDidMount() {
    fetch("/api/inv/")
    .then(res => res.json())
    .then(post => {
    //alert(post.length)
      this.setState({itemsList:post}) 
    })
  }

  
    render(){
      let renderedContent
      if(!this.state.itemsList.length){
        renderedContent= (<span><UserInfo /></span>)
      }
      else{
        renderedContent=  (  
        <div className="row flex-nowrap justify-content-md-center">
        <div className="justify-left">
            <UserInfo />
        </div>
        <div style={{maxWidth: "1000px"}}>
  
            <ItemListBox list={this.state.itemsList}/>

        </div>
    </div>
    )
    
      }
  
    
    
  
  return (
    renderedContent
    

  );
  }
}

export default InventoryGridPage;