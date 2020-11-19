import React from 'react';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';
import auth from '../services/auth';
import ItemExpanded from '../components/ItemExpanded';

class InventoryGridPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemsList:'',
      userList: '',
    }
  }
  // componentDidMount() {
  //   fetch("/api/inv/")
  //   .then(res => res.json())
  //   .then(post => {
  //   //alert(post.length)
  //     this.setState({itemsList:post}) 
  //   })

  // }

  componentDidMount() {
    Promise.all([fetch("/api/inv/"), fetch('/api/loggedInUser/')])
      .then(([inv, user]) => { return Promise.all([inv.json(), user.json()]) })
      .then(([inv, user]) => {
        this.setState({itemsList: inv, userList: user})
 
      });
}


  
    render(){
      let renderedContent
      if(!this.state.itemsList.length && !this.state.userList.length){
        renderedContent= (<span></span>)
      }
      else {
        renderedContent=  (  
        <div className="row flex-nowrap justify-content-md-center">
        <div className="justify-left">
            <UserInfo list={ this.state.userList[0] }/>
        </div>
        <div style={{maxWidth: "1000px"}}>
  
            <ItemListBox list={this.state.itemsList}/>
            <ItemExpanded list={this.state.itemsList[0]}/>
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