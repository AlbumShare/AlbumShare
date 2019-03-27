import { createStore, applyMiddleware, compose } from "redux";
import axios from "axios";
import rootReducer from "./reducer/index";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk


// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware.withExtraArgument({axios})),
//   loggingMiddleware
// ) 



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  
    applyMiddleware(thunkMiddleware, loggingMiddleware),
  
);

export default store;