import React from 'react';
import Loading from '../components/Loading';
import UserInfo from '../components/UserInfo';

class AllUsersDisplayPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usersList:'',
        }
    }

    componentDidMount(){
        fetch('/api/userspage/').then(res=>{return res.json()}).then(
            users=>{this.setState({usersList:users})
            console.log(this.state.usersList)}
        )
    }

    render(){

       let renderedContent;
       if(!this.state.usersList.length){
          renderedContent= (<div><Loading/></div>)
       } 
       else{
          let userList = []
          for(let i=0;i<this.state.usersList.length;i++){
             userList.push(<UserInfo list={ this.state.usersList[i] }/>)
          }
          renderedContent= (userList)
       }


       return(<div>{renderedContent}</div>);
    }
}

export default AllUsersDisplayPage;