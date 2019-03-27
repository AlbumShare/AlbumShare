import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Placeholder = () =>(
  <Router>
  <div id="selections">
    <Link to={'/what'}><h3>What is PICO?</h3></Link>
    <Link to={'/why'}><h3>Why is PICO?</h3></Link>
    <Link to={'/how'}><h3>How is PICO?</h3></Link>

    <Route path={'/what'} component={what} />
    <Route path={'/why'} component={why} />
    <Route path={'/How'} component={how} />


  </div>
  </Router>
)


function how() {
  return (
    <div>
      <h4>this is about how</h4>
    </div>
  );
}

function why() {
  return (
    <div>
      <h4>this is about why</h4>
    </div>
  );
}

function what() {
  return (
    <div>
      <h4>this is about what</h4>
    </div>
  );
}

export default Placeholder;
