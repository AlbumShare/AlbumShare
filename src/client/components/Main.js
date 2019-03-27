import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

import store from '../../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={SignUp}/>
          </Switch>
        </Router>
      </Provider>  
    )
  }
}