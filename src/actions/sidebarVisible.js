import {
  HIDE_SIDEBAR,
  SHOW_SIDEBAR
} from './constants'

export const showSidebar = () => ({
  type: SHOW_SIDEBAR
})

export const hideSidebar = () => ({
  type: HIDE_SIDEBAR
})