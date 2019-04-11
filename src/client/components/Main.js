import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import Home from './Home';
import Search from './Search';
import User from './User';

// import store from '../../store';

export default class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Search" component={Search}/>
            <Route path="/User" component={User}/>

          </Switch>
        </Router>

    )
  }
}