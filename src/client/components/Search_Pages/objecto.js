import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/Search.css'
import axios from 'axios';

var navigation = require('./nav')

class objecto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          something:'kawaaa'
        };
    }
    
    changeName(value){
        return(
             this.setState({
                     something: value
             }))
     }
      
      
    render() {
        return (
        <div  id = "feed" >
            <h2>Hello {this.state.something}</h2>
            <navigation changeName={this.changeName}/>
        </div>
        );
    }

}
export default objecto