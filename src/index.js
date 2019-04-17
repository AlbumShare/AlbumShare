import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import Main from './client/components/Main';
import App from './client/app'
import store from './client/store/index.js';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
