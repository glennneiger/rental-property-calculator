import {
  SET_CHANGES_MADE,
  SET_CURRENT_TITLE,
  SET_SAVE_CALCULATION_ERRORS
} from './constants';

export const setChangesMade = changesMade => ({
  type: SET_CHANGES_MADE,
  payload: changesMade
});

export const setCurrentTitle = currentTitle => ({
  type: SET_CURRENT_TITLE,
  payload: currentTitle
});

export const setSaveCalculationErrors = errors => ({
  type: SET_SAVE_CALCULATION_ERRORS,
  payload: errors
});