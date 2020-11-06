import React from 'react';

class UserInfo extends React.Component {

    render () {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div class="card" >
          <img class="card-img-top" src=".." alt="userImagge.jpg"></img>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">User Name</li>
            <li class="list-group-item">User Email</li> 
          </ul>
          <div className="card-body">
            <p>badge</p>
            <p>badge</p>
            <p>badge</p>
            <p>badge</p>
            <p>badge</p>
          </div>
        </div>
      </div>
      );
    }
}



export default UserInfo;