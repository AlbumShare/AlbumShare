import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import logo1 from './img/mainpage/Logo1.svg'

import Login from './Login/Login.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <img id="icon" src={logo1} alt="" />

    
          
        <p id="logo_disc">Make sharing meaningful</p>  
          
        </header>

        <div className="Forms">
        <li><Link to="/Login/Login">Login</Link></li>
        <Route path="/Login/Login" component={Login}/>

        </div>
      </div>
    );
  }
}

export default App;
