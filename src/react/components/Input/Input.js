import React from 'react'
import './input.css'
import PropTypes from 'prop-types'

const DEFAULT_TOTAL_WIDTH = 100
const LABEL_WIDTH = 185

const Input = ({
  content,
  inputId,
  inputType = 'number',
  label,
  section,
  textInputWidth = DEFAULT_TOTAL_WIDTH,
  updateValueForInput
}) => {
  const handleChange = event => {
    const value = event.target.value
    if (inputType === 'number' && !value.match(/^\d*\.?\d{0,2}$/)) {
      return
    }
    updateValueForInput(value, section, inputId)
  }
  const totalWidth = textInputWidth + LABEL_WIDTH
  return (
    <div className='input' style={{ width: totalWidth }}>
      <label htmlFor={inputId}>{label}:</label>
      <input type={'text'}
        id={inputId}
        style={{ width: textInputWidth }}
        value={content}
        onChange={handleChange}
      />
    </div>
  )
}

Input.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  textInputWidth: PropTypes.number,
  updateValueForInput: PropTypes.func.isRequired
}

export default Input