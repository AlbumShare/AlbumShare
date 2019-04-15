import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

import userReducer from './userReducer';
// import * as thunk from 'redux-thunk';
var thunkMiddleware = require('redux-thunk').default

const reducer = combineReducers({userReducer});
const middleware = function() {
  return composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));
} 
const store = createStore(reducer, middleware())

export default store
// export * from './user'
