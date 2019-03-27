import React, { Component } from 'react';
import {addUser} from '../../reducer/userReducer';
import {connect} from 'react-redux';
// const Signup= () =>(
//   <div>
//     <h2>Sign up shit</h2>
//   </div>
// )

class SignUp extends Component {

  constructor(){
    super();
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    },() => {console.log(this.state)});
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.add(this.state);
  }
  render() {

    return (
      <div>
        <h2>
          Sign Up Here!
        </h2>
        <form onSubmit={this.props.handleSubmit}>
          <p>User Name</p>
          <input type='text' 
            name='userName'
            value={this.state.userName}
            onChange={this.handleChange}/>
          <p>First Name</p>
          <input type='text' 
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}/>
          <p>Last Name</p>
          <input type='text' 
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}/>
          <p>E-mail</p>
          <input type='text' 
            name='email'
            value={this.state.email}
            onChange={this.handleChange}/>
          <p>Password</p>
          <input type='password' 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}/>
            <div>
              <button type='submit'>Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (userInfo) => {
      dispatch(addUser(userInfo));
    }
  }
}

const connectedSignUpPage = connect(null, mapDispatchToProps);

export default connectedSignUpPage(SignUp);
