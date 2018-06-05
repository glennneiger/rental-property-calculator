import {
  SET_CHANGES_MADE,
  UPDATE_INPUT
} from './constants'

export const updateInput = (value, section, inputId) => ({
  type: UPDATE_INPUT,
  payload: {
    value,
    section,
    inputId
  }
})

// export const setChangesMade = changesMade => ({
//   type: SET_CHANGES_MADE,
//   payload: changesMade
// })