import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import '../modal.css'
import BlueButton from '../../BlueButton'

class DeleteCalculationModal extends Component {
  handleDeleteClick = () => {
    // TODO: destructure props
    if (this.props.idToDelete === this.props.currentlySelectedId) {
      this.props.setChangesMade(false)
      this.props.setCurrentTitle(null)
      this.props.clearAllCalculatorFields()
    }
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
        className='modal'
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
  clearAllCalculatorFields: PropTypes.func.isRequired,
  currentlySelectedId: PropTypes.string,
  deleteCalculationWithId: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToDelete: PropTypes.string.isRequired,
  setChangesMade: PropTypes.func.isRequired,
  setCurrentTitle: PropTypes.func.isRequired,
  titleToDelete: PropTypes.string.isRequired
}

export default DeleteCalculationModal