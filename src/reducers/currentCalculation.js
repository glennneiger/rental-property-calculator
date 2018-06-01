import {
  SET_CHANGES_MADE,
  SET_IS_SAVED
} from '../actions/constants'

const initialState = {
  changesMade: false,
  isSaved: false
}

const currentCalculation = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHANGES_MADE:
    return {
      ...state,
      changesMade: action.payload
    }
  case SET_IS_SAVED:
    return {
      ...state,
      isSaved: action.payload
    }
  default:
    return state
  }
}

export default currentCalculation