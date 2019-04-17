import React, { Component } from 'react';
import '../css/prof.css'
import ImageUploader from 'react-images-upload';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Axios from 'axios';

class Profile extends Component {
/*
  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
   });
}
  // If input file doesn't work out use this shit
  <ImageUploader id="upload" withIcon={true}
  buttonText='Upload Profile Picture'
  withPreview = {true}
  onChange={this.onDrop}
  imgExtension={['.jpg', '.gif', '.png', '.gif']}
  maxFileSize={5242880}
/>
*/

state = {
  selectedFile: null
}
onDrop = event => {
  console.log(event.target.files[0]);
  this.setState({
    selectedFile: event.target.files[0]
  })
}

fileUploadHandler = () => {
  Axios.post('')
}


    render() {
      return (
    <div id = "profile2">
        <h2>Firstname Lastname</h2> 
        <input type="file" onChange={this.onDrop}/> 
        <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" id="profpic"/>
        <button onClick={this.fileUploadHandler}>Upload</button> 
        <button onClick ={this.viewAlbums}> View Your Albums</button>
        <h3> Your Albums </h3>
        {albums}
      </div> 
      )
     
    }
  }

  for(var j in albums){
    document.getElementById('profile2').innerHTML = j;
  }
  // populate with album id's
  var albums = ["album1 ", "album2 ", "album3 "]
 
  export default Profile;