import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer } from './reducers'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store