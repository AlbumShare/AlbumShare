import React, { Component } from 'react';
import backg from './backg.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        

          <p>
            PICO is an online album sharing app you can use.
          </p>


          <a
            className="App-link"
            href="https://github.com/AlbumShare/AlbumShare"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on git !
          </a>
        </header>
      </div>
    );
  }
}

export default App;
