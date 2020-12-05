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
      login:'',
    }
    this.topPrice = this.topPrice.bind(this);
    this.recentAdded = this.recentAdded.bind(this);
  }

 topPrice () {
   if (this.state.buttonPressed !== 'topPrice') {
    fetch('/api/topPrice/')
    .then(res => res.json())
    .then(post => {
  
      this.setState({itemsList:post, buttonPressed: 'topPrice'}) 
  })
  }
 }

 recentAdded () {
   if (this.state.buttonPressed !== 'recentAdded') {
    fetch('/api/recentAdded/')
    .then(res => res.json())
    .then(post => {
    this.setState({itemsList:post, buttonPressed: 'recentAdded'}) 
    })
  }
 }

 componentDidMount() {
 
  this.setState({
    login:this.props.login,
    itemsList:''
  })
  this.recentAdded();
   
}
componentDidUpdate(prevProps) {
 
  if(prevProps.login !== this.props.login) {
    alert("yes")
   this.componentDidMount();
  }
}

  render () {
   
      return (
      
          <div style={{padding: "25px"}}>
        
            <LandingPageBox list={ this.state.itemsList } />
            <div style={{padding: "0px"}}>
              <button onClick={(e) => this.topPrice()} className="btn btn-primary" style={{margin: "5px"}}>Top Price</button>
              <button onClick={(e) => this.recentAdded()} className="btn btn-primary" style={{margin: "5px"}}>Recent Added</button>
            </div>
          </div>
      )
  }
}

export default LandingPage;