import React from 'react'
import './input.css'

const DEFAULT_WIDTH = 100
const WIDTH_DIFF = 185

const Input = ({
  inputId,
  inputType='number',
  label,
  textInputWidth = DEFAULT_WIDTH
}) => {
  const totalWidth = textInputWidth + WIDTH_DIFF
  return (
    <div className='input' style={ { width: totalWidth } }>
      <label htmlFor={ inputId }>{ label }:</label>
      <input type={ inputType }
        id={ inputId }
        style={ { width: textInputWidth } }/>
    </div>
  )
}

export default Input