import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import Home from './Home';
import Profile from './Main_Pages/Profile';

import store from '../../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/" component={Profile}/>
          </Switch>
        </Router>
      </Provider>  
    )
  }
}