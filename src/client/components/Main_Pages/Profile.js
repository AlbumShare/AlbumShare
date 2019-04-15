import React, { Component } from 'react';
import '../css/prof.css'
import NewWindow from 'react-new-window';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Profile extends Component {
    render() {
      return (
    <NewWindow>
    <div id = "profile2">
        <h2>Profile stuff</h2>
      </div> 
      </NewWindow>
      )
    }
  }

  export default Profile;