import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorsReducer from './errorsReducer'
import calculatorReducer from './calculatorReducer'
import {
  CALCULATOR_FIELDS
} from '../constants'

export const reducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  [CALCULATOR_FIELDS]: calculatorReducer
})