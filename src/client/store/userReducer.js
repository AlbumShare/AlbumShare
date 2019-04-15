import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';

// INITIAL STATE
const defaultUser = {};

// ACTION CREATORS
const getUser = user => ({type: GET_USER, user});

// THUNK CREATOR
export const fetchSingleUser = userID => async dispatch => {
  const res = await axios.get(`/api/users/${userID}`);
  const user = res.data;
  dispatch(getUser(user));
}