import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';

// INITIAL STATE
const defaultUser = {};

// ACTION CREATORS
const getUser = user => ({type: GET_USER, user});

// THUNK CREATOR
export const fetchSingleUser = userID => async dispatch => {
  try{
    const res = await axios.get(`/api/users/${userID}`);
    const user = res.data;
    dispatch(getUser(user));
  } catch (error) {
    console.log(error);
  }
}

export const authLogin = (email, password) => async dispatch => {
  let res;
  try {
    res = await axios.post(`http://localhost:5000/api/auth/login`, {email, password});
  } catch (error) {
    console.log("ERROR LOGGING IN");
  }
    dispatch(getUser(res.data)); 
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/auth/me');
    dispatch(getUser(res.data));
  } catch (error) {
    console.error(error);
  }
}

// REDUCER
export default function (state = defaultUser, action) {
  switch(action.type) {
    default:
      return state;
    case GET_USER:
      return action.user;
  }
}

