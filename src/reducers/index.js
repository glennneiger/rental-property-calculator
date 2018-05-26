import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorsReducer from './errorsReducer'

export const reducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer
})