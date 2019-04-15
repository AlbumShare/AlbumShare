import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../css/Search.css'
import axios from 'axios';
import navigation from './nav'


class objects extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            searching: navigation.state.nav
        };
        
      }
    
    render() {
        return (
        <div  id = "feed" >

        </div>
        );
    }

}
export default objects