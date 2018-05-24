import {
  REGISTER_USER
} from './constants'

export const registerUser = userData => ({
  type: REGISTER_USER,
  payload: userData
})