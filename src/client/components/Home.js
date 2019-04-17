

import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import logo1 from './img/Logo1.svg';
import style from '../public/styles.css';

import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import './css/Main.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push('/Profile');
  }
  render() {

    return (
      <Router>

      <div className="App">
        <header className="App-header">

        <div className="Iconhold">
          <Link to="/"><img id="icon" src={logo1} alt="" /></Link>
          <p id="logo_disc">Make sharing meaningful</p>  
            {/* <Link  id="temp" onclick={this.onClick}> Profile</Link>  */}
            <button onClick={this.onClick}>Profile</button>
        </div>

        
          
        </header>

        <div className="Forms">
          
          <div id ="user_info">

            <Route exact path="/" component={Login}/>
            <Route path="/Login" component={Login}/>
            <Route path ="/SignUp" component={SignUp}/> 
            {/* <Route path ="/Profile" component={Profile}/> */}
 

          </div>
        </div>

      </div>
      </Router>

    );
  }
}