import React from 'react'
import './input.css'
import PropTypes from 'prop-types'

const DEFAULT_TOTAL_WIDTH = 100
const LABEL_WIDTH = 185

const Input = ({
  content,
  handleKeyDown,
  inputId,
  inputType = 'number',
  label,
  section,
  textInputWidth = DEFAULT_TOTAL_WIDTH
}) => {
  const handleChange = event => {
    handleKeyDown(event, section, inputId)
  }
  const totalWidth = textInputWidth + LABEL_WIDTH
  return (
    <div className='input' style={ { width: totalWidth } }>
      <label htmlFor={ inputId }>{ label }:</label>
      <input type={ inputType }
        id={ inputId }
        style={ { width: textInputWidth } }
        value={ content }
        onChange={ handleChange }
      />
    </div>
  )
}

Input.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  textInputWidth: PropTypes.number
}

export default Input