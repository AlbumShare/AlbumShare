import React, { Component } from 'react';

import ReactDom from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';

import logo1 from './img/mainpage/Logo1.svg'

import Login from './Login/Login.js'
import Signup from './Signup/Signup.js'
import posed from 'react-pose';

import './App.css'
import { scale } from 'style-value-types';

const Home= () =>(
  <div>
    <h2>Welcome !!</h2>
  </div>
)

const Logoanim = posed.div({
  normal: { transform:'scale(4)'},
  big: { transform:'scale(4.5)'},
  transition:{ease:'easeIn'}
});
class App extends Component {

  state= {isnormal: true};
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ isnormal: !this.state.isnormal });
    }, 4000);
  }

  render() {
    const { isnormal} = this.state;

    return (
      <div className="App">
        <header className="App-header">

        <Logoanim className="logoanim" pose={isnormal ? 'normal' : 'big'} >
        <img id="icon" src={logo1} alt="" /></Logoanim>
  
        <p id="logo_disc">Make sharing meaningful</p>  
          
        </header>

        <div className="Forms">

        

        <li><Link to="/">Home</Link></li>
        <Route exact path="/" component={Home}/>

        <li><Link to="/Login/Login">Login</Link></li>
        <Route path="/Login/Login" component={Login}/>

        <li><Link to="/Signup/Signup">Sign up</Link></li>
        <Route path="/Signup/Signup" component={Signup}/>

        </div>
      </div>
    );
  }
}

export default App;
