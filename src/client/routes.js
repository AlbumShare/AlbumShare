import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {me} from './store/userReducer';

// import {
//   Home, Login, Main, nav, objecto, Placeholder, Profile, Search, SignUp, User
// } from './components';

import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';

class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    console.log(this.props);
    const {isLoggedIn} = this.props
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Profile' component={Profile} />
          <Route path="/Search" component={Search}/>
        </Switch>
      </Router>
  )}
}

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: !!state.userReducer.id
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadInitialData: () => {
      dispatch(me())
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Routes);