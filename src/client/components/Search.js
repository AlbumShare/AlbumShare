

import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';

import navigation from './Search_Pages/nav'

import './css/Main.css'
export default class Home extends Component {
  render() {

    return (
      <div className="App">
        <div id = "navbar">
        <Router>
          <Switch>
            <Route path="/" component={navigation}/>
          </Switch>
        </Router>
        </div>
        
        <div id = "feed">
            bunch of picsk

        </div>
      </div>

    );
  }
}