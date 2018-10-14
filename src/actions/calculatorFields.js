import {
  CLEAR_ALL_FIELDS,
  UPDATE_INPUT
} from './constants';

export const updateInput = (value, section, inputId) => ({
  type: UPDATE_INPUT,
  payload: {
    value,
    section,
    inputId
  }
});

export const clearAllCalculatorFields = () => ({
  type: CLEAR_ALL_FIELDS
});