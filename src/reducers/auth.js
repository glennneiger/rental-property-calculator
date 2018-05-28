import {
  SET_CURRENT_USER
} from '../actions/constants'
import { isEmpty } from '../utils/validationUtils'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const auth = (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
    }
  default:
    return state
  }
}

export default auth