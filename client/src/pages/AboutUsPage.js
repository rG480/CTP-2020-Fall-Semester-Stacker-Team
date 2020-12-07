import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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
    <div style={{padding: "50px"}}>
      {/* Center All */}
      {/* Bold , Larger Font*/}
      <h2 className="about-header"> <b>Welcome to Cellar</b></h2>
      <br></br>
      {/* Bold, Large Font */}
      <h3 className="about-sub-header"><b>What  is Cellar?</b></h3>
      
      <div style={{padding:"20px"}}>
      Cellar is an easy to use inventory management system allowing you to track your collections and their details, including quantity,
      <br></br>
      the price an item was purchased for, and the price of the item at the time it was added to your collection. Cellar is a great way  to
      <br></br>
      track your items, with its simple, user friendly interface. Users can also browse the  <Link to={{pathname:'/users'}}> collections of other users. </Link>
      <br></br>
      </div>
      <div>
      <h3 className="about-sub-header"> <b>The Team</b></h3><Container>
        <br/>
        <Row>
          <Col>
            <h4>Chris Chromak</h4>
            <img className="about-image" src={require('../chrisChromakSmall.jpg')}></img>
            <p>I'm a Computer Science major at <br></br>Queens College. Go knights! <br>
            </br>(confusing, right?) I'm Graduating <br></br>Fall, 2021 - hire me!</p>
          </Col>
          <Col>
            <h4>Roberto Garcia</h4>
            <img className="about-image" src={require('../chrisChromakSmall.jpg')}></img>
          </Col>
          <Col>
           <h4>Kenneth Hill</h4>
            <img className="about-image" src={require('../chrisChromakSmall.jpg')}></img>
          </Col>
        </Row>
      </Container>
    
      </div>
      
      
    
    </div>
    
  );
}


export default AboutUsPage;