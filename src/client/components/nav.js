import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/Search.css'
import axios from 'axios';
import './css/nav.css'

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

        this.toHome = this.toHome.bind(this);
        this.toProfile= this.toProfile.bind(this);
        this.toSearch= this.toSearch.bind(this);

      }
      
      toHome() {
        this.props.history.replace('')    ;
        window.location.reload();
    
      }
      
      toProfile() {
        this.props.history.replace('Profile')    ;
        window.location.reload();
    
      }

      toSearch() {
        this.props.history.replace('Search')    ;
        window.location.reload();
    
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
                <div id="buttonlist">
                  <button class="Search" type="submit">Search !</button>
                  <button class="Search" onClick={this.toProfile}>To profiles</button>
                  <button class="Search" onClick={this.toSearch}>To Feed</button>
                  <button class="Search" onClick={this.toHome}>To Log in / Sign up</button>
                </div>
                </form>
           

        </div>
        );
    }
}




