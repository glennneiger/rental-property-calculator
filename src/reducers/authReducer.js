import {
  REGISTER_USER
} from '../actions/constants'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_USER:
    return {
      ...state,
      user: action.payload
    }
  default:
    return state
  }
}

export default authReducer