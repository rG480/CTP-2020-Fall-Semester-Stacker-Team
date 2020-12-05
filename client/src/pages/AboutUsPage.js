import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink,
  generatePath
} from 'react-router-dom';
function AboutUsPage(props) {
  return (
    <div >
      {/* Center All */}
      {/* Bold , Larger Font*/}
      <h2 className="about-header"> <b>Welcome to Cellar</b></h2>
      <br></br>
      {/* Bold, Large Font */}
      <h3 className="about-sub-header"><b>What  is Cellar?</b></h3>
      <p>
      <div style={{padding:"20px"}}>
      Cellar is an easy to use inventory management system allowing you to track your collections and their details, including quantity, the price an item was purchased for, and the price of the item at the time it was added to your collection.
      <br></br>
      Cellar is a great way to track your items, with its simple, user friendly interface.
      <br></br>
      Users can also browse the  <Link to={{pathname:'/displayUsers'}}> collections of other users. </Link>
      <br></br>
      </div>
      
      
      </p>
    </div>
    
  );
}


export default AboutUsPage;