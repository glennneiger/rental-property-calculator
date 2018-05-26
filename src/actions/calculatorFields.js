import {
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