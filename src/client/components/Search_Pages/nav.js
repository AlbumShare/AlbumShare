import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/Search.css'
import axios from 'axios';

export default class navigation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          nav:"Search Anything ( Username , Album tag, etc... ) ",
          persons: []

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

        event.preventDefault();
        return this.Search();
      }

      async Search() {
        var url ='http://localhost:5000/api/users';
        var i ;

        await axios.get(url)
        .then(function (response) {
          var flyToTheMoon = function() {
          }()
        }).catch(function (error) {
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
                <objecto nav={this.state.nav}/>

        </div>
        );
    }
}




