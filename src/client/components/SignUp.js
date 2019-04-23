import React, { Component } from 'react';
// import {addUser} from '../../../reducer/userReducer';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/form.css'
import axios from 'axios';

class SignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: 'User Name',
      Email: 'Email',
      FirstName:'First Name',
      LastName:'Last Name',
      Password:'Password'
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addUser = this.addUser.bind(this);
  }

  async addUser() {
    try {
      await axios.post('http://localhost:5000/api/users', {
        userName: this.state.UserName,
        firstName: this.state.FirstName,
        lastName: this.state.LastName,
        email: this.state.Email,
        password: this.state.Password
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    },() => {console.log(this.state)});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addUser(this.state);
    alert("Successfully Signed up as "+this.state.UserName)

  }

  render() {
    return (
      <div>
        <h4>Welcome to Pico !</h4>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
            name='UserName'
            placeholder="User Name" 
            onChange={this.handleChange}/>
          <input type='text' 
            name='FirstName'
            placeholder="First Name"
            onChange={this.handleChange}/>
          <input type='text' 
            name='LastName'
            placeholder="Last Name"
            onChange={this.handleChange}/>
          <input type='text' 
            name='Email'
            placeholder="Email"
            onChange={this.handleChange}/>
          <input type='text' 
            name='Password'
            placeholder="Password"
            onChange={this.handleChange}/>
          <button className="button" type="submit">Sign-Up</button>
        </form>
        <Link id="LoginUpButton" to="/Login">Login</Link>      
      </div>
    );
  }
}

export default SignForm;
