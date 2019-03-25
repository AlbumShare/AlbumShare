import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Signup" component={SignUp}/>
        </Switch>
      </Router>
    )
  }
}