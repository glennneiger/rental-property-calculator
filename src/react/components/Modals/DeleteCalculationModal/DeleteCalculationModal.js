import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import '../confirmModal.css'
import BlueButton from '../../BlueButton'

class DeleteCalculationModal extends Component {
  handleDeleteClick = () => {
    this.props.deleteCalculationWithId(this.props.idToDelete)
    this.props.hideModal()
  }

  handleKeepClick = () => {
    this.props.hideModal()
  }

  render() {
    return (
      <Modal
        isOpen={true}
        className='confirmModal'
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.hideModal}
      >
        <p>
          Are you sure you want to delete "{this.props.titleToDelete}"?
        </p>
        <div className='buttons'>
          <BlueButton onClick={this.handleDeleteClick}>Delete</BlueButton>
          <BlueButton onClick={this.handleKeepClick}>Keep</BlueButton>
        </div>
      </Modal>
    )
  }
}

DeleteCalculationModal.propTypes = {
  deleteCalculationWithId: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToDelete: PropTypes.string.isRequired,
  titleToDelete: PropTypes.string.isRequired
}

export default DeleteCalculationModal