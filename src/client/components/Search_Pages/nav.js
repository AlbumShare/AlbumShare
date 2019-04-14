import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/Search.css'
import axios from 'axios';



class navigation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          nav:"Search Anything ( Username , Album tag, etc... ) "
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Search = this.Search.bind(this);

      }
      
      handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        },() => {console.log(this.state)});
      }

      handleSubmit(event) {
        alert('Searching ' + this.state.nav);

        event.preventDefault();
        this.Search();
      }

      async Search() {

        await axios.get('http://localhost:5000/api/users/', {
                params:{
                    firstname: this.state.nav
                }
            })
            .then(function(response){
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
      }
          


    render() {
        return (
        <div id = "navbar" >
                <form onSubmit={this.handleSubmit}>

                <input 
                    id="searchbar" 
                    name="nav"
                    type="text" 
                    value={this.state.nav}
                    onChange={this.handleChange}
                    />
                <button id="Search" type="submit">Search !</button>
                </form>
        </div>
        );
    }
}
export default navigation