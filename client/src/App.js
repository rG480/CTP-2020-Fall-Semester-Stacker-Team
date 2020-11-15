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
import auth from './services/auth'
auth.amILoggedIn();
function Navigation(props) {
  return (
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
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/inventoryGridPage">
            Inventory Grid
          </NavLink>
        </li>
      </ul>
    </nav>
  );
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
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/inventoryGridPage" component={InventoryGridPage}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
