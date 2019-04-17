import React, { Component } from 'react';
import {connect} from 'react-redux'
import './css/form.css'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {authLogin} from '../store/userReducer';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: 'Email',
    password:'Password'};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    }, () => {console.log(this.state)})
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    this.props.history.push('/');
  }

 

  render() {
    return (
      <div>
        <h4>Welcome Back to PICO!</h4>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />

          <input className="button" type="submit" value="Submit" />
          <Link  id="SignUpButton" to="/SignUp">Sign up</Link>  

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => (dispatch(authLogin(email, password)))
  }
}


export default connect(null, mapDispatchToProps)(NameForm);
