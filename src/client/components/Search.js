

import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';

import navigation from './Search_Pages/nav'
import object from './Search_Pages/object'

import './css/Main.css'
import './css/Search.css'
export default class Home extends Component {
  

  render() {

    return (
      <div className="App">
        <Router>
        <Switch>

        <div >
            <Route path="/" component={navigation}/>
            <Route path="/" component={object}/>

        </div>
        
        </Switch>
      </Router>
      </div>
    );
  }
}