import React from 'react';
import LandingPageBox from '../components/LandingPageItemBox';
import auth from '../services/auth';


class LandingPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemsList:'',
      test: 'recentAdded',
      buttonPressed: '',
    }
    this.topPrice = this.topPrice.bind(this);
    this.recentAdded = this.recentAdded.bind(this);
  }
  
 topPrice (isLoggedIn) {
   if (this.state.buttonPressed !== 'topPrice') {
    fetch(`/api/topPrice/` + isLoggedIn)
    .then(res => res.json())
    .then(post => {
     alert(post.length)
      this.setState({itemsList:post, buttonPressed: 'topPrice'}) 
  })
  }
 }

 recentAdded (isLoggedIn) {
   if (this.state.buttonPressed !== 'recentAdded') {
    fetch(`/api/recentAdded/`+ isLoggedIn)
    .then(res => res.json())
    .then(post => {
    alert(post.length)
      this.setState({itemsList:post, buttonPressed: 'recentAdded'}) 
    })
  }
 }

 componentDidMount() {
  this.recentAdded();
}


  render () {
      return (
          <div>
            <LandingPageBox list={ this.state.itemsList } />
            <button onClick={(e) => this.topPrice(auth.isAuthenticated) } className="btn btn-primary" style={{margin: "5px"}}>Top Price</button>
            <button onClick={(e) => this.recentAdded()} className="btn btn-primary" style={{margin: "5px"}}>Recent Added</button>
          </div>
      )
  }



}

export default LandingPage;