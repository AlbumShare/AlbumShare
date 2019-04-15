import React, { Component } from 'react';
import '../css/prof.css'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Profile extends Component {
  // Your name is user's name and src= is profile picture
    render() {
      return (
    <div id = "profile2">
        <h2>Your name</h2> 
        <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" id="profpic"/>
        <h3>Your albums</h3>
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