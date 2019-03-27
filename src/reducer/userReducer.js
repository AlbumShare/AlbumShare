const axios = require('axios');

//initial state
const initialState = [];

const GET_ALL_USERS = "GET_ALL_USERS";
const GET_SINGLE_USER = "GET_SINGLE_USER";
const ADD_NEW_USER = "ADD_NEW_USER";

// action creators
export const getAllUsersCreator = (allUsers) => {
  return {
    type: GET_ALL_USERS,
    allUsers
  }
}

export const getSingleUserCreator = (user) => {
  return {
    type: GET_SINGLE_USER,
    user
  }
}

export const addNewUserCreator = (newUser) => {
  return {
    type: ADD_NEW_USER,
    newUser
  }
}

// Thunk Creator
export const getAllUsers = () => {
  return async dispatch => {
    const res = axios.get('/api/users');
    const users = res.data;
    dispatch(getAllUsersCreator(users));
  }
}

export const getSingleUser = (userId) => {
  return async dispatch => {
    const res = axios.get(`/api/users/${userId}`);
    const user = res.data;
    dispatch(getSingleUserCreator(user));
  }
}

export const addUser = (userInfo) => {
  return async dispatch => {
    const res = axios.post('/api/users', userInfo);
    const newUser = res.data;
    dispatch(addNewUserCreator(newUser));
  }
}


//Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
    case GET_ALL_USERS:
      return action.getAllUsers;
    case GET_SINGLE_USER:
      return action.getSingleUser;
  }
}

export default reducer;