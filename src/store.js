import {
  applyMiddleware,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { screenResize } from './actions/ui';
import { reducer } from './reducers';

window.addEventListener('resize', () => {
  store.dispatch(screenResize(window.innerWidth));
});

const initialState = {};

// TODO: only enable redux dev tools in DEV mode
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);

export default store;