import React, {Component} from 'react';
import { Link, Route} from 'react-router-dom';

import logo1 from './Logo1.svg';
import Logoanim, {Rotator} from './Animation';
import style from '../styles.css';


export default class Home extends Component {
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(
  //       { isnormal: !this.state.isnormal ,
  //         rotatorpos: this.state.rotatorpos==3? this.state.rotatorpos=0: this.state.rotatorpos+1
  //        });
  //   }, 3000);
  // }

  render() {
    // const { isnormal} = this.state;
    // const { rotatorpos} = this.state;
    return (
      <div className="App">
        <header className="App-header">

        {/* <Rotator className="rotator" pose= {'p' + rotatorpos.toString()}></Rotator> */}
        <Rotator className="rotator" pose= {'p1'}></Rotator>
       
        {/* <Logoanim className="logoanim" pose={isnormal ? 'normal' : 'big'} > */}
        <Logoanim className="logoanim" pose={'big'} >
        <img id="icon" src={logo1} alt="" /></Logoanim>
  
        <p id="logo_disc">Make sharing meaningful</p>  
          
        </header>

        <div className="Forms">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login/">Login</Link></li>
          <li><Link to="/Signup/">Sign up</Link></li>
        </div>
      </div>
    );
  }
}