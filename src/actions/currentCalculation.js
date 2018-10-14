import {
  SET_CHANGES_MADE,
  SET_CURRENT_TITLE
} from './constants';

export const setChangesMade = changesMade => ({
  type: SET_CHANGES_MADE,
  payload: changesMade
});

export const setCurrentTitle = currentTitle => ({
  type: SET_CURRENT_TITLE,
  payload: currentTitle
});