import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
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
      Cellar is a basic inventory management system allowing you to track your collections and their details, including quantity, the price an item was purchased for, and the price of the item at the time it was added to your collection.
      <br></br>
      Cellar is a great way to track your items, with its simple, user friendly interface.
      <br></br>
      Users can also browse the <a href="/users">collections of other users</a>.
      <br></br>
      
      
      
      </p>
    </div>
    
  );
}


export default AboutUsPage;