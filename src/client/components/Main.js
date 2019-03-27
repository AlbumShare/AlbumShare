import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from './Home';
import Placeholder from './Main_Pages/Placeholder';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Placeholder" component={Placeholder}/>
        </Switch>
      </Router>
    )
  }
}