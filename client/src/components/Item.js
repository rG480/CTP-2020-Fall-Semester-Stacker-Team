import React from 'react';
import ItemExpanded from './ItemExpanded';




class Item extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showItemExpanded: false,
        }
        this.toggleModal = this.handleSelect.bind(this)
    }
    handleSelect(){
        this.setState({
          showModal: this.state.showModal ? false : true
        })
      }
    
    render () {
      //  console.log(this.props.itemContent.dateAdded)
        return (
      
            <div className="" style={{minWidth: "225px", padding: "10px"}}>
            <div className="shadow" >
                <div className="card-body card-text">
                    <h5> {this.props.itemContent.name} </h5> 
                    <button onClick={this.toggleModal} className="btn btn-lite">  <img alt="castle.jpg"></img> </button>
                </div>
                <div className="card-footer small text-muted text-right">
                    <p> {this.props.itemContent.currentPrice }</p>
                    <ItemExpanded list={this.props.itemContent} show={this.state.showModal} hide= {this.toggleModal} user={this.props.user} ></ItemExpanded>
                </div>  
            </div>
            </div>
          
            
        );
    }
}

export default Item;