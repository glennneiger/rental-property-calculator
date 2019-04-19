import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {
  CLEAR_ERRORS,
  GET_AUTH_ERRORS,
  SET_CURRENT_USER
} from './constants';
import { setAuthToken } from '../utils/authUtils';

export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(() => {
      history.push('/login');
    })
    .catch(err =>
      dispatch({
        type: GET_AUTH_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decodedToken = jwt_decode(token);
      dispatch(setCurrentUser(decodedToken));
    })
    .catch(err =>
      dispatch({
        type: GET_AUTH_ERRORS,
        payload: err.response.data
      })
    );
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  // TODO: remove profile from state?
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = decodedToken => ({
  type: SET_CURRENT_USER,
  payload: decodedToken
});

export const clearAuthErrors = () => ({
  type: CLEAR_ERRORS
});