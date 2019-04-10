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
      UserName: 'User Name',
      Email: 'Email',
      FirstName:'First name',
      LastName:'Last Name',
      Password:'Password'
    };
  
      // this.handleChangefn = this.handleChangefn.bind(this);
      // this.handleChangeln = this.handleChangeln.bind(this);
      // this.handleChangemail = this.handleChangemail.bind(this);
      // this.handleChangepw = this.handleChangepw.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addUser = this.addUser.bind(this);
  }

  async addUser(userInfo) {
    try {
      await axios.post('http://localhost:5000/api/users/', {
        userName: "userName",
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
    alert('Sign in as ' + this.state.UserName);
    event.preventDefault();
    this.addUser(this.state);
  }



  render() {
    return (
      <div>
        <h4>Welcome to Pico !</h4>
        <form onSubmit={this.handleSubmit}>

          <input type='text' 
            name='FirstName'
            value={this.state.FirstName}
            onChange={this.handleChange}/>
          <input type='text' 
            name='LastName'
            value={this.state.LastName}
            onChange={this.handleChange}/>
          <input type='text' 
            name='Email'
            value={this.state.Email}
            onChange={this.handleChange}/>
          <input type='text' 
            name='UserName'
            value={this.state.UserName}
            onChange={this.handleChange}/>
          <input type='text' 
            name='Password'
            value={this.state.Password}
            onChange={this.handleChange}/>
          <input className="button" type="submit" value="Submit" />
        </form>
        <Link id="LoginUpButton" to="/Login">Login</Link>      
      </div>
    );
  }
}

export default SignForm;
