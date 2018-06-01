import {
  SET_CHANGES_MADE,
  SET_SAVED_CALCULATION
} from '../actions/constants'

const initialState = {
  changesMade: false,
  savedCalculation: false
}

const currentCalculation = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHANGES_MADE:
    return {
      ...state,
      changesMade: action.payload
    }
  case SET_SAVED_CALCULATION:
    return {
      ...state,
      savedCalculation: action.payload
    }
  default:
    return state
  }
}

export default currentCalculation