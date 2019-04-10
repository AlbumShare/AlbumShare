import React, { Component } from 'react';
// import {addUser} from '../../../reducer/userReducer';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/form.css'
import axios from 'axios';

class SignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Email: '',
      FirstName:'',
      LastName:'',
      Password:''
    };
  
      // this.handleChangefn = this.handleChangefn.bind(this);
      // this.handleChangeln = this.handleChangeln.bind(this);
      // this.handleChangemail = this.handleChangemail.bind(this);
      // this.handleChangepw = this.handleChangepw.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addUser = this.addUser.bind(this);
  }

  async addUser() {
    try {
      await axios.post('http://localhost:5000/api/users/', {
        userName: this.state.userName,
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
    alert('Sign in as ' + this.state.Name);
    event.preventDefault();
    this.addUser(this.state);
  }



  render() {
    return (
      <div>
        <h4>Welcome to Pico !</h4>
        <form onSubmit={this.handleSubmit}>
          <p>User Name</p>
          <input type='text' 
            name='userName'
            value={this.state.userName} 
            onChange={this.handleChange}/>
          <p>First Name</p>
          <input type='text' 
            name='FirstName'
            value={this.state.FirstName}
            onChange={this.handleChange}/>
          <p>Last Name</p>
          <input type='text' 
            name='LastName'
            value={this.state.LastName}
            onChange={this.handleChange}/>
          <p>E-mail</p>
          <input type='text' 
            name='Email'
            value={this.state.Email}
            onChange={this.handleChange}/>
          <p>Password</p>
          <input type='password' 
            name='Password'
            value={this.state.Password}
            onChange={this.handleChange}/>
          <button type="submit">Sign-Up</button>
        </form>
        <Link id="LoginUpButton" to="/Login">Login</Link>      
      </div>
    );
  }
}

export default SignForm;
