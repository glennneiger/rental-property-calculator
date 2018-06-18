import React from 'react'
import PropTypes from 'prop-types'

import {
  MODAL_CONFIRM_DELETE_CALCULATION,
  MODAL_CONFIRM_LOGOUT,
  MODAL_SAVE_AS,
  MODAL_SAVE_CHANGES
} from '../../../../constants'
import SaveAsModal from '../SaveAsModal'
import SaveChangesModal from '../SaveChangesModal'
import DeleteCalculationModal from '../DeleteCalculationModal'
import LogoutModal from '../LogoutModal'

const MODAL_COMPONENTS = {
  [MODAL_CONFIRM_DELETE_CALCULATION]: DeleteCalculationModal,
  [MODAL_CONFIRM_LOGOUT]: LogoutModal,
  [MODAL_SAVE_AS]: SaveAsModal,
  [MODAL_SAVE_CHANGES]: SaveChangesModal
}

const ModalRoot = ({
  modalType,
  modalProps
}) => {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object
}

export default ModalRoot