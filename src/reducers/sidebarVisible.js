import {
  HIDE_SIDEBAR,
  SHOW_SIDEBAR
} from '../actions/constants'

const initialState = false

const sidebarVisible = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_SIDEBAR:
    return true
  case HIDE_SIDEBAR:
    return false
  default:
    return state
  }
}

export default sidebarVisible