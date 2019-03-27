import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// import logo1 from './Logo1.svg';
// import Logoanim, { Rotator } from './Animation';
// import style from '../public/styles.css';

import Login from './Login';
import SignUp from './SignUp';

require('../public/styles.css')

export default class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button id="signButton2"><li><Link to="/SignUp">Sign up</Link></li></button>
          <Route path="/SignUp" component={SignUp} />
        </header>
        <Router>
          <div className="Forms">

            <button id="logButton"><li><Link to="/Login">Login</Link></li></button>
            <Route path="/Login" component={Login} />

            <button id="signButton"><li><Link to="/SignUp">Sign up</Link></li></button>
            <Route path="/SignUp" component={SignUp} />

          </div>
        </Router>

      </div>


    );
  }
}