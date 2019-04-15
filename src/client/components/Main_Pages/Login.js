import React, { Component } from 'react';
import '../css/form.css'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Name: 'Name',
    Password:'Password'};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChangename(event) {
  //   this.setState({Name: event.target.value});

  // }
  // handleChangepw(event){
  //   this.setState({Password: event.target.value});
  // }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    }, () => {console.log(this.state)})
  }

  handleSubmit(event) {
    alert('Login in as ' + this.state.Name);
    event.preventDefault();
  }

 

  render() {
    return (
      <div>
        <h4>Welcome Back to PICO!</h4>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} />
            <input type="text" name="Password" value={this.state.Password} onChange={this.handleChange} />

          <input className="button" type="submit" value="Log In" />
          <Link  id="SignUpButton" to="/SignUp">Sign up</Link>      

        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logIn: 
//   }
// }
export default NameForm;
