import React from 'react'
import PropTypes from 'prop-types'

import css from './calculatorInput.css'
import TextInput from '../TextInput'
import { INPUT_ID_AMORTIZATION_PERIOD } from '../../../constants'

const CalculatorInput = ({
  content,
  inputId,
  inputType = 'number',
  label,
  section,
  setChangesMade,
  textInputWidth,
  updateInput
}) => {
  const handleChange = event => {
    const value = event.target.value
    if (inputType === 'number' && !value.match(/^\d*\.?\d{0,2}$/)) {
      return
    }
    if (inputId === INPUT_ID_AMORTIZATION_PERIOD && value.length > 3) {
      return
    }
    updateInput(value, section, inputId)
    setChangesMade(true)
  }
  return (
    <div className={css.calculatorInput}>
      <label htmlFor={inputId}>{label}</label>
      <TextInput type={'text'}
        id={inputId}
        style={{ width: textInputWidth }}
        value={content}
        onChange={handleChange}
        width={textInputWidth}
      />
    </div>
  )
}

CalculatorInput.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  setChangesMade: PropTypes.func.isRequired,
  textInputWidth: PropTypes.number,
  updateInput: PropTypes.func.isRequired
}

export default CalculatorInput