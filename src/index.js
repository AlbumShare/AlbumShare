import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './client/components/Main';
import store from './client/store/index.js';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('main'));
