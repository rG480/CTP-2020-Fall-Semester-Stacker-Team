import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import InventoryPage from './pages/InventoryPage';
import InventoryGridPage from './pages/InventoryGridPage';
import LoginModal from './components/LoginModal'
import PrivateRoute from './components/PrivateRoute';
import auth from './services/auth'
import AllUsersDisplayPage from './pages/AllUsersDisplayPage';
import PublicGalleryPage from './pages/PublicGalleryPage'
import{ Redirect } from 'react-router-dom';
 class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false,
      auth:false
    }
    this.toggler = this.toggleModal.bind(this)
    this.setAuthen= this.setAuth.bind(this)
  }
  toggleModal(){
   
     this.setState({
      showModal:this.state.showModal ? false : true
     });
  }
signout(){
  auth.signout();
  this.setAuth(false);
  
}
setAuth(login){
  console.log(login)
  if(login===true){
  this.setState({
    auth:true
  })
  auth.isAuthenticated=true;
  console.log(this.state.auth)
  }
  else if (login===false){
    this.setState({
      auth:false
    })
    auth.isAuthenticated=false;
    //window.location.reload(false);
  }
  
}
componentDidMount(){
  console.log(auth.isAuthenticated)
  if (!this.state.auth){
    fetch('/api/amILoggedIn/').then((response) => {
      console.log(true);
      this.setAuth(true);
      }
    )
  }
}
render(){
  let button;
  let inv;
  if(this.state.auth){
     button = <button className="btn btn-dark" onClick={ e=>this.signout(e)}>Logout</button>
     inv =( <li className="nav-item">
     <NavLink className="nav-link btn btn-dark" exact to="/inventoryGridPage">
       Your Inventory
     </NavLink>
     </li>)
   }
  else{
    button=   <button className="btn btn-dark" onClick={this.toggler}>Login</button>;
    inv=(<span></span>);
  }
  
  return (<div>
      <LoginModal setAuth={this.setAuthen} show={this.state.showModal} hide={this.toggler}></LoginModal>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand btn btn-dark" exact to="/landing">Home</Link>
      {/* Might change this to the site's name later.*/}
      <ul className="navbar-nav mr-auto">
        {inv}
        <li className="nav-item">
          <NavLink className="nav-link btn btn-dark" exact to="/displayUsers">
           Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link btn btn-dark" exact to="/aboutUs">
            About Us
          </NavLink>
        </li>
       
      </ul>
      <ul className="navbar-nav">
        <li className="nov-item">
          {button}
        </li>
      </ul>
    </nav>
    </div>
  );
}
}


class App extends React.Component {

  render() {
    return (
      <div>
       
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/landing" component={LandingPage} />
                <Route path="/yourCollection" component={InventoryPage}/>
                <Route path="/aboutUs" component={AboutUsPage} />
                <PrivateRoute path="/inventoryGridPage" component={InventoryGridPage}/>
                <Route path="/displayUsers" component={AllUsersDisplayPage}/>
                <Route path="/userGallery/" component={PublicGalleryPage}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
