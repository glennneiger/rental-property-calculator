import React from 'react'
import './numericInput.css'

const NumericInput = ({
  inputId,
  inputType,
  label
}) => (
  <div className='numericInput'>
    <label htmlFor={ inputId }>{ label }:</label>
    <input type={ inputType } id={ inputId }/>
  </div>
)

export default NumericInput