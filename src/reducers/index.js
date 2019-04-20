import { combineReducers } from 'redux';
import auth from './auth';
import authErrors from './authErrors';
import calculator from './calculator';
import calculationList from './calculationList';
import currentCalculation from './currentCalculation';
import modal from './modal';
import sidebarVisible from './sidebarVisible';
import ui from './ui';

export const reducer = combineReducers({
  auth,
  authErrors,
  calculationList,
  calculator,
  currentCalculation,
  modal,
  sidebarVisible,
  ui
});