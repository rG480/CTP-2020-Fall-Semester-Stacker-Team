import React from 'react';
import ItemList from '../components/ItemList';
import UserInfo from '../components/UserInfo';
import ItemListBox from '../components/ItemListBox';
import LandingPageBox from '../components/LandingPageItemBox';


class LandingPage extends React.Component {
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
     alert(post.length)
      this.setState({itemsList:post}) 
    })
  }

  render () {
      return (
          <div>
            <LandingPageBox list={ this.state.itemsList } />
          </div>
      )
  }



}

export default LandingPage;