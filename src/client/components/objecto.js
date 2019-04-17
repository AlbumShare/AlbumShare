import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './css/Search.css'
import axios from 'axios';

var navigation = require('./nav')

class objecto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          something:'kawaaa'
        };
        this.displayhandler = this.displayhandler.bind();
    }
    
    changeName(value){
        return(
             this.setState({
                     something: value
             }))
     }
     
    async displayhandler(){
        await axios.get('http://localhost:5000/api/users')
        .then(function(response){
            for (var i = 0; i < response.data.length; i++) {
                var smth = document.createElement("h2");
                smth.setAttribute("id", "demo"+i);
                document.getElementById("testlist").appendChild(smth);
                document.getElementById("demo"+i).innerHTML= response.data[i].userName + '\n' +response.data[i].email ;
            }
            
        });
    }
    
    componentDidMount(){
        this.displayhandler();
    }
    

    render() {
        return (
        <div  id = "feed" >
            <ul id ="testlist">
           

            </ul>
            filler filler
            <navigation changeName={this.changeName}/>
        </div>
        );
    }

}
export default objecto