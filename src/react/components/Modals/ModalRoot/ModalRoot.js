import React from 'react'
import PropTypes from 'prop-types'

import {
  MODAL_CONFIRM_DELETE_CALCULATION,
  MODAL_SAVE_CHANGES
} from '../../../../constants'
import SaveChangesModal from '../SaveChangesModal'
import DeleteCalculationModal from '../DeleteCalculationModal'
import './modalRoot.css'

const MODAL_COMPONENTS = {
  [MODAL_SAVE_CHANGES]: SaveChangesModal,
  [MODAL_CONFIRM_DELETE_CALCULATION]: DeleteCalculationModal
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