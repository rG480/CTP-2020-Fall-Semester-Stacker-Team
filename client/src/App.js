import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <button onClick={props.toggler}>login</button>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
    this.toggleModal = this.handleSelect.bind(this)
  }
  handleSelect(){
    console.log(this.state.showModal)
    this.setState({
      showModal: this.state.showModal ? false : true
    }

    )
    console.log(this.state.showModal)
    if (this.state.showModal===true){
      alert("Nice")
    }
  }
  render() {
    return (
        <Router>
          <Navigation toggler={this.toggleModal}/>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
