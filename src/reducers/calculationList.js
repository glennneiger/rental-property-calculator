import {
  DELETE_CALCULATION_WITH_ID,
  GET_ALL_CALCULATIONS
} from '../actions/constants';

const calculationList = (state = [], action) => {
  switch (action.type) {
  case GET_ALL_CALCULATIONS:
    return action.payload;
  case DELETE_CALCULATION_WITH_ID:
    return state.filter(calc =>
      calc.id !== action.payload.calculationId
    );
  default:
    return state;
  }
};

export default calculationList;