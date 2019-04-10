import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import Home from './Home';


// import store from '../../store';

export default class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
  
          </Switch>
        </Router>

    )
  }
}