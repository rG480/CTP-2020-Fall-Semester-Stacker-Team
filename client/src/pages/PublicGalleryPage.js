class PublicGalleryPage extends React.Component {
    constructor(props){
      super(props)
      this.state={
        showModal:false
      }
      this.toggler = this.toggleModal.bind(this)
    }
  render(){
    return (
      <div>Yo buddy </div>
    );
    
  }
}
  export default PublicGalleryPage;