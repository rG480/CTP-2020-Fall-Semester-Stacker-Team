import React from "react";

class UserInfoPublic extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        
       return (
         <div style={{minWidth: "225px", padding: "15px"}}>
           <div className="card" >
             <div className="card-body">
             <button className="btn btn-lite" onClick={(e)=>{alert("clicked me!")}}><img className="card-img-top" src=".." alt="userImage.jpg"></img></button> 
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