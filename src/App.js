import React, { Component } from 'react';

import { Link, Route} from 'react-router-dom';

import logo1 from './img/mainpage/Logo1.svg'

import Login from './Login/Login.js'
import Signup from './Signup/Signup.js'
import posed from 'react-pose';

import Logoanim , {Rotator} from './Animation/Animation'

import './App.css'

const Home= () =>(
  <div>
    <h2>Welcome !!</h2>
  </div>
)

class App extends Component {

  state= {isnormal: true,rotatorpos: 0};
  
  
  componentDidMount() {
    setInterval(() => {
      this.setState(
        { isnormal: !this.state.isnormal ,
          rotatorpos: this.state.rotatorpos==3? this.state.rotatorpos=0: this.state.rotatorpos+1
         });
    }, 3000);
  }


  render() {
    const { isnormal} = this.state;
    const { rotatorpos} = this.state;
    return (
      <div className="App">
        <header className="App-header">

        <Rotator className="rotator" pose= {'p' + rotatorpos.toString()}></Rotator>

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
