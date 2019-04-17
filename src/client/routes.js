import React, {Component} from 'react'
import {BrowserRouter ,Router, Route, Switch} from 'react-router-dom'

// import {
//   Home, Login, Main, nav, objecto, Placeholder, Profile, Search, SignUp, User
// } from './components';

import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();   

export default class Routes extends Component {

  render() {
    const {isLoggedIn} = this.props
    return(
      <Router history={history} >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path="/Search" component={Search}/>
        </Switch>
      </Router>
  )}
}
