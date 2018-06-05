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
      calculationToSave,
      clearAllCalculatorFields,
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
        calculationToSave,
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
        changesMade = false
        setTitle = true
        newCurrentTitle = null
        clearAllCalculatorFields()
      }
      saveCalculation(
        currentTitle,
        calculationToSave,
        changesMade,
        setTitle,
        newCurrentTitle
      )
      hideModal()
    }
  }

  handleDontSaveClick = () => {
    const {
      clearAllCalculatorFields,
      creatingNewCalculation,
      getCalculationById,
      hideModal,
      idToGet,
      setChangesMade,
      setCurrentTitle
    } = this.props
    if (idToGet) {
      getCalculationById(idToGet)
    }
    if (creatingNewCalculation) {
      clearAllCalculatorFields()
      setCurrentTitle(null)
      setChangesMade(false)
    }
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
  calculationToSave: PropTypes.object.isRequired,
  clearAllCalculatorFields: PropTypes.func.isRequired,
  creatingNewCalculation: PropTypes.bool,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToGet: PropTypes.string,
  saveCalculation: PropTypes.func.isRequired,
  setChangesMade: PropTypes.func.isRequired,
  setCurrentTitle: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

export default SaveChangesModal