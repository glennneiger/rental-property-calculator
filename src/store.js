import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { screenResize } from './actions/ui'
import { reducer } from './reducers'

window.addEventListener('resize', () => {
  store.dispatch(screenResize(window.innerWidth))
})

const initialState = {}

// TODO: only enable redux dev tools in DEV mode
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store