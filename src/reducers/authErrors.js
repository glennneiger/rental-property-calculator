import {
  CLEAR_ERRORS,
  GET_AUTH_ERRORS
} from '../actions/constants';

const initialState = {};

const authErrors = (state = initialState, action) => {
  switch (action.type) {
  case GET_AUTH_ERRORS:
    return action.payload;
  case CLEAR_ERRORS:
    return {};
  default:
    return state;
  }
};

export default authErrors;