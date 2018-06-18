import { SCREEN_WIDTH_RESIZE } from './constants'

export const screenResize = width => ({
  type: SCREEN_WIDTH_RESIZE,
  screenWidth: width
})