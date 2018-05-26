import {

} from '../actions/constants'
import {
  TITLE_FUTURE_PROJECTIONS,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../constants'

const initialState = {
  [TITLE_GENERAL_INFO]: {},
  [TITLE_INITIAL_PURCHASE]: {},
  [TITLE_MONTHLY_INCOME]: {},
  [TITLE_MONTHLY_EXPENSES]: {},
  [TITLE_FUTURE_PROJECTIONS]: {}
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state
  }
}

export default calculatorReducer