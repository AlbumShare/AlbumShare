import React, { Component } from 'react';
import {addUser} from '../../../reducer/userReducer';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/form.css'

class SignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: 'Email',
      FirstName:'First Name',
      LastName:'Last Name',
      Password:'Password'};
  
      this.handleChangefn = this.handleChangefn.bind(this);
      this.handleChangeln = this.handleChangeln.bind(this);
      this.handleChangemail = this.handleChangemail.bind(this);
      this.handleChangepw = this.handleChangepw.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangefn(event) {
    this.setState({FirstName: event.target.value});

  }
  handleChangeln(event){
    this.setState({LastName: event.target.value});
  }

  handleChangemail(event){
    this.setState({Email: event.target.value});
  }

  handleChangepw(event){
    this.setState({Password: event.target.value});
  }

  handleSubmit(event) {
    alert('Sign in as ' + this.state.Name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Welcome to Pico !</h4>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.FirstName} onChange={this.handleChangefname} />
            <input type="text" value={this.state.LastName} onChange={this.handleChangelname} />
            <input type="text" value={this.state.Email} onChange={this.handleChangemail} />
            <input type="text" value={this.state.Password} onChange={this.handleChangepw} />

          <input className="button" type="submit" value="Submit" />
          <Link id="LoginUpButton" to="/Login">Login</Link>      

        </form>
      </div>
    );
  }
}

export default SignForm;
