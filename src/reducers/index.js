import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorsReducer from './errorsReducer'
import calculatorReducer from './calculatorReducer'

export const reducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  calculatorFields: calculatorReducer
})