import React, { Component } from 'react';
import posed from 'react-pose';

const Logoanim = posed.div({
    normal: { transform:'scale(4)'},
    big: { transform:'scale(4.5)'},
    transition:{ease:'easeIn'}
  });

const Rotator = posed.div({
    transition:{type:'‘easeInOut'},
    p0:{transform: 'translate(-250px,-150px)'},
    p1:{transform: 'translate(250px,-150px)'},
    p2:{transform: 'translate(250px,150px)'},
    p3:{transform: 'translate(-250px,150px)'}
  });
export default Logoanim;
export{Logoanim,Rotator}
