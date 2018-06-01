import { combineReducers } from 'redux'
import auth from './auth'
import errors from './errors'
import calculator from './calculator'
import calculationList from './calculationList'
import currentCalculation from './currentCalculation'

export const reducer = combineReducers({
  auth,
  errors,
  calculator,
  calculationList,
  currentCalculation
})