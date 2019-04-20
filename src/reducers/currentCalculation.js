import {
  CLEAR_SAVE_CALCULATION_ERRORS,
  SET_CHANGES_MADE,
  SET_CURRENT_TITLE,
  SET_SAVE_CALCULATION_ERRORS
} from '../actions/constants';

const initialState = {
  changesMade: false,
  title: null,
  saveCalculationErrors: {}
};

const currentCalculation = (state = initialState, action) => {
  switch (action.type) {
  case CLEAR_SAVE_CALCULATION_ERRORS:
    return {
      ...state,
      saveCalculationErrors: {}
    };
  case SET_CHANGES_MADE:
    return {
      ...state,
      changesMade: action.payload
    };
  case SET_CURRENT_TITLE:
    return {
      ...state,
      title: action.payload
    };
  case SET_SAVE_CALCULATION_ERRORS:
    return {
      ...state,
      saveCalculationErrors: action.payload
    };
  default:
    return state;
  }
};

export default currentCalculation;