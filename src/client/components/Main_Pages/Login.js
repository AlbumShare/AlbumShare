import React, { Component } from 'react';
import '../css/form.css'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Name: 'Name',
    Password:'Password'};
  
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangepw = this.handleChangepw.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangename(event) {
    this.setState({Name: event.target.value});

  }
  handleChangepw(event){
    this.setState({Password: event.target.value});
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
            <input type="text" value={this.state.Name} onChange={this.handleChangename} />
            <input type="text" value={this.state.Password} onChange={this.handleChangepw} />

          <input className="button" type="submit" value="Submit" />
          <Link  id="SignUpButton" to="/SignUp">Sign up</Link>  
             

        </form>
      </div>
    );
  }
}

export default NameForm;
