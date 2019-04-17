

import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import logo1 from './img/Logo1.svg';
import style from '../public/styles.css';

import Login from './Main_Pages/Login';
import SignUp from './Main_Pages/SignUp';

import './css/Main.css'
export default class Home extends Component {
  render() {

    return (
      <Router>

      <div className="App">
        <header className="App-header">

        <div className="Iconhold">
          <Link to="/"><img id="icon" src={logo1} alt="" /></Link>
          <p id="logo_disc">Make sharing meaningful</p>  
            this is gonna be user page
        </div>


          
        </header>
      

      </div>
      </Router>

    );
  }
}