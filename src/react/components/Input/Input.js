import React from 'react'
import './input.css'

const DEFAULT_TOTAL_WIDTH = 100
const LABEL_WIDTH = 185

const Input = ({
  content,
  handleKeyDown,
  inputId,
  inputType='number',
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
        onChange={ handleChange }/>
    </div>
  )
}

export default Input