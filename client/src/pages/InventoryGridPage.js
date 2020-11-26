import React from 'react';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';
import Loading from '../components/Loading'
import ItemExpanded from '../components/ItemExpanded';

class InventoryGridPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemsList:'',
      userList: '',
    }
    this.refreshPage = this.refreshPage.bind(this)
  }
  
 refreshPage(){
   console.log("reload")
   this.componentDidMount()
  
 }
  componentDidMount() {
    Promise.all([fetch("/api/inv/"), fetch('/api/loggedInUser/')])
      .then(([inv, user]) => { return Promise.all([inv.json(), user.json()]) })
      .then(([inv, user]) => {
        this.setState({itemsList: inv, userList: user})
 
      })
      .catch(err => {
        console.log("error")
      });
}


  
    render(){
      let renderedContent
      if(!this.state.itemsList.length && !this.state.userList.length){
        renderedContent= (<span><Loading/></span>)
      }
      else if (this.state.itemsList.length ===0){
        renderedContent=  (  
          <div className="row flex-nowrap justify-content-md-center">
          <div className="justify-left">
              <UserInfo list={ this.state.userList[0] }/>
          </div>
          <div style={{maxWidth: "1000px"}}>
    
             
          </div>
      </div>
      )
      }
      else {
        renderedContent=  (  
        <div className="row flex-nowrap justify-content-md-center">
        <div className="justify-left">
            <UserInfo reloadContent ={this.refreshPage} list={ this.state.userList[0] }/>
        </div>
        <div style={{maxWidth: "1000px"}}>
  
            <ItemListBox reloadContent={this.refreshPage} list={this.state.itemsList} user={this.state.userList} refreshPage ={this.refreshPage}/>
         {/*    <ItemExpanded list={this.state.itemsList[0]}/> */}
        </div>
    </div>
    )
    
      }
  
    
    
  
  return (
    <div style={{padding: "50px"}}>
      { renderedContent }
    </div>
  );
  }
}

export default InventoryGridPage;