import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import '../confirmModal.css'
import BlueButton from '../../BlueButton'

class SaveChangesModal extends Component {
  handleSaveClick = () => {
    const {
      calculation,
      currentTitle,
      getCalculationById,
      hideModal,
      idToGet,
      saveCalculation
    } = this.props

    let title = currentTitle
    if (!currentTitle) {
      title = prompt('Enter a title for your calculation')
      if (title === '') {
        hideModal()
        return
      }
    }
    saveCalculation(title, calculation)
    getCalculationById(idToGet)
    hideModal()
  }

  handleDontSaveClick = () => {
    const {
      getCalculationById,
      hideModal,
      idToGet
    } = this.props

    getCalculationById(idToGet)
    hideModal()
  }

  handleCancelClick = () => {
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
        {this.props.currentTitle
          ? <p>
            You have unsaved changes to "{ this.props.currentTitle }".
            Would you like to save?
          </p>
          : <p>You have unsaved changes.
            Would you like to save these as a new calculation?
          </p>
        }
        <div className='buttons'>
          <BlueButton onClick={this.handleSaveClick}>Save</BlueButton>
          <BlueButton onClick={this.handleDontSaveClick}>Don't Save</BlueButton>
          <BlueButton onClick={this.handleCancelClick}>Cancel</BlueButton>
        </div>
      </Modal>
    )
  }
}

SaveChangesModal.propTypes = {
  calculation: PropTypes.object.isRequired,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToGet: PropTypes.string.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveChangesModal