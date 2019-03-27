

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

          <p id="footer">Minyoung Na/Mrigank Saksena/Ray Lee/Iris Huang  </p>
        </div>


          
        </header>
        <div className="Forms">
          
          <div id ="user_info">

            <Route exact path="/" component={Login}/>
            <Route path="/Login" component={Login}/>
            <Route path ="/SignUp" component={SignUp}/> 


          </div>
        </div>

      </div>
      </Router>

    );
  }
}