import {
  SET_CHANGES_MADE,
  SET_CURRENT_TITLE
} from '../actions/constants';

const initialState = {
  changesMade: false,
  title: null
};

const currentCalculation = (state = initialState, action) => {
  switch (action.type) {
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
  default:
    return state;
  }
};

export default currentCalculation;