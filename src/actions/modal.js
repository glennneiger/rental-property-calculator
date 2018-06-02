import {
  HIDE_MODAL,
  SHOW_MODAL
} from './constants'

// TODO: make this just an action creator, don't actually dispatch
export const showModal = (modalType, modalProps) => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    modalType,
    modalProps
  })
}

// TODO: make this just an action creator, don't actually dispatch
export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  })
}