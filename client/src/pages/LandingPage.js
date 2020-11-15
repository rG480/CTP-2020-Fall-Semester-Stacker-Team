import React from 'react';
import LandingPageBox from '../components/LandingPageItemBox';


class LandingPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemsList:'',
      test: 'recentAdded'
    }
    this.topPrice = this.topPrice.bind(this);
    this.recentAdded = this.recentAdded.bind(this);
  }
  
 topPrice () {
  fetch(`/api/topPrice/`)
  .then(res => res.json())
  .then(post => {
   alert(post.length)
    this.setState({itemsList:post}) 
  })
 }

 recentAdded () {
  fetch(`/api/recentAdded/`)
  .then(res => res.json())
  .then(post => {
   alert(post.length)
    this.setState({itemsList:post}) 
  })
 }

 componentDidMount() {
  fetch(`/api/recentAdded/`)
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
            <button onClick={this.topPrice} className="btn btn-primary" style={{margin: "5px"}}>Top Price</button>
            <button onClick={this.recentAdded} className="btn btn-primary" style={{margin: "5px"}}>Recent Added</button>
          </div>
      )
  }



}

export default LandingPage;