import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import TextInput from '../../TextInput'
import css from '../modal.css'
import BlueButton from '../../BlueButton'

class SaveAsModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSaveClick = () => {
    const {
      calculationToSave,
      creatingNewCalculation,
      getCalculationById,
      hideModal,
      idToGet,
      saveCalculation
    } = this.props

    let changesMade = false
    let setTitle = true
    let newCurrentTitle = this.state.value
    if (idToGet) {
      getCalculationById(idToGet)
      changesMade = null
      setTitle = false
    }
    if (creatingNewCalculation) {
      changesMade = false
      setTitle = false
      this.props.clearAllCalculatorFields()
    }
    saveCalculation(
      this.state.value,
      calculationToSave,
      changesMade,
      setTitle,
      newCurrentTitle
    )
    hideModal()
  }
  handleCancelClick = () => {
    this.props.hideModal()
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <Modal
        isOpen={true}
        className={css.modal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.hideModal}
      >
        <p>
          Enter a title for your new calculation.
        </p>
        <TextInput type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={css.buttons}>
          <BlueButton onClick={this.handleSaveClick}>Save</BlueButton>
          <BlueButton onClick={this.handleCancelClick}>Cancel</BlueButton>
        </div>
      </Modal>
    )
  }
}

SaveAsModal.propTypes = {
  calculationToSave: PropTypes.object.isRequired,
  clearAllCalculatorFields: PropTypes.func.isRequired,
  creatingNewCalculation: PropTypes.bool,
  getCalculationById: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  idToGet: PropTypes.string,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveAsModal