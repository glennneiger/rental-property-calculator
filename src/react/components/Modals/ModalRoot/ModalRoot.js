import React from 'react'
import PropTypes from 'prop-types'

import { MODAL_SAVE_CHANGES } from '../../../../constants'
import SaveChangesModal from '../SaveChangesModal'
import './modalRoot.css'

const MODAL_COMPONENTS = {
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