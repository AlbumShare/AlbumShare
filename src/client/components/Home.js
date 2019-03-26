import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import logo1 from './Logo1.svg';
import Logoanim, { Rotator } from './Animation';
import style from '../public/styles.css';

import Login from './Login';
import SignUp from './SignUp';

export default class Home extends Component {

  /* // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(
  //       { isnormal: !this.state.isnormal ,
  //         rotatorpos: this.state.rotatorpos==3? this.state.rotatorpos=0: this.state.rotatorpos+1
  //        });
  //   }, 3000);
  // } */

  render() {
    // const { isnormal} = this.state;
    // const { rotatorpos} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <button id="signButton2"><li><Link to="/SignUp">Sign up</Link></li></button>
          <Route path="/SignUp" component={SignUp} />
          {/* <Rotator className="rotator" pose= {'p' + rotatorpos.toString()}></Rotator> */}
          <Rotator className="rotator" pose={'p1'}></Rotator>

          {/* <Logoanim className="logoanim" pose={isnormal ? 'normal' : 'big'} > */}


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