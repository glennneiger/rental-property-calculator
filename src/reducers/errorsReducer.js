import {
  CLEAR_ERRORS,
  GET_ERRORS
} from '../actions/constants'

const initialState = {}

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ERRORS:
    return action.payload
  case CLEAR_ERRORS:
    return {}
  default:
    return state
  }
}

export default errorsReducer