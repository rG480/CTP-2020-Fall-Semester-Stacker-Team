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
import auth from './services/auth'
import AllUsersDisplayPage from './pages/AllUsersDisplayPage';
//auth.amILoggedIn();
 class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false,
      auth:false
    }
    this.toggler = this.toggleModal.bind(this)
  }
  toggleModal(){
   
     this.setState({
      showModal:this.state.showModal ? false : true
     });
  }
componentDidMount(){
  console.log(auth.isAuthenticated)
  if (!this.state.auth){
    fetch('/api/amILoggedIn/').then((response) => {
      if(response.ok) {
        this.setState({
          auth:true
        })
      }
      

    })
  }
}
render(){
  let button;
  if(this.state.auth){
     button = <button onClick={ auth.signout}>Logout</button>
   
   }
  else{
    button=   <button onClick={this.toggler}>Login</button>
  }
  return (<div>
      <LoginModal show={this.state.showModal} hide={this.toggler}></LoginModal>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" exact to="/landing">Home</Link>
      {/* Might change this to the site's name later.*/}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/collection">
            Inventory
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="#">
            Local
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="#">
            Worldwide
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/aboutUs">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/inventoryGridPage">
            Inventory Grid
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/displayUsers">
           Users
          </NavLink>
        </li>
        <li>
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
                <Route path="/collection" component={InventoryPage}/>
                <Route path="/aboutUs" component={AboutUsPage} />
                <Route path="/inventoryGridPage" component={InventoryGridPage}/>
                <Route path="/displayUsers" component={AllUsersDisplayPage}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
