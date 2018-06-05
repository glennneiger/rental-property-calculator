import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import '../modal.css'
import BlueButton from '../../BlueButton'
import { MODAL_SAVE_AS } from '../../../../constants'

/* Modal used when navigating away from a calculation with unsaved changes.
 * Examples: getCalculationById, pressing new calculation button */
class SaveChangesModal extends Component {
  handleSaveClick = () => {
    const {
      calculation,
      creatingNewCalculation,
      currentTitle,
      getCalculationById,
      hideModal,
      idToGet,
      saveCalculation,
      showModal
    } = this.props
    let changesMade = false
    let setTitle = true
    let newCurrentTitle = currentTitle
    if (!currentTitle) {
      showModal(MODAL_SAVE_AS, {
        calculationToSave: calculation,
        idToGet,
        creatingNewCalculation
      })
    } else {
      if (idToGet) {
        getCalculationById(idToGet)
        changesMade = null
        setTitle = false
      }
      if (creatingNewCalculation) {
        changesMade = null
        setTitle = false
      }
      saveCalculation(
        currentTitle,
        calculation,
        changesMade,
        setTitle,
        newCurrentTitle
      )
      hideModal()
    }
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
        className='modal'
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
  creatingNewCalculation: PropTypes.bool,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToGet: PropTypes.string,
  saveCalculation: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

export default SaveChangesModal