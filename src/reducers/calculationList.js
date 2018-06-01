import {
  GET_ALL_CALCULATIONS
} from '../actions/constants'

const calculationList = (state = [], action) => {
  switch (action.type) {
  case GET_ALL_CALCULATIONS:
    return action.payload
  default:
    return state
  }
}

export default calculationList