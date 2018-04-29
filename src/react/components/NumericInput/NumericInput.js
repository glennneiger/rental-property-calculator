import React from 'react'
import './numericInput.css'

const NumericInput = ({
  inputId,
  label
}) => (
  <div className='numericInput'>
    <label htmlFor={ inputId }>{ label }:</label>
    <input type='number' id={ inputId }/>
  </div>
)

export default NumericInput