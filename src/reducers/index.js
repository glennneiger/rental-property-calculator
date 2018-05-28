import { combineReducers } from 'redux'
import auth from './auth'
import errors from './errors'
import calculator from './calculator'

export const reducer = combineReducers({
  auth,
  errors,
  calculator
})