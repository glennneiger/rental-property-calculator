import React from 'react'
import PropTypes from 'prop-types'

import css from './calculatorInput.css'
import TextInput from '../TextInput'
import { INPUT_ID_AMORTIZATION_PERIOD } from '../../../constants'

const DEFAULT_TOTAL_WIDTH = 100
const LABEL_WIDTH = 185

const CalculatorInput = ({
  content,
  inputId,
  inputType = 'number',
  label,
  section,
  setChangesMade,
  textInputWidth = DEFAULT_TOTAL_WIDTH,
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
  const totalWidth = textInputWidth + LABEL_WIDTH
  return (
    <div className={css.calculatorInput} style={{ width: totalWidth }}>
      <label htmlFor={inputId}>{label}:</label>
      <TextInput type={'text'}
        id={inputId}
        style={{ width: textInputWidth }}
        value={content}
        onChange={handleChange}
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