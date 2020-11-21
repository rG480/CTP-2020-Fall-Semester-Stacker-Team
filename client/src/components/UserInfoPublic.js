import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink,
  generatePath
} from 'react-router-dom';
class UserInfoPublic extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
       // const link=  generatePath("/userGallery/:user",{user:this.props.list.userName})
       return (
         <div style={{minWidth: "225px", padding: "15px"}}>
           <div className="card" >
             <div className="card-body">
             <Link to={{pathname:'/userGallery/',state: { params: {id1: this.props.list.userName, id2: this.props.list.userEmail} }}} className="btn btn-lite"><img className="card-img-top" src=".." alt="userImage.jpg"></img></Link>
            
             </div>
             <div className="card-footer small text-muted text-right">
               <h5> {this.props.list.userName }</h5>
            </div> 
           </div>
         </div>
         );
       }
}

export default UserInfoPublic;