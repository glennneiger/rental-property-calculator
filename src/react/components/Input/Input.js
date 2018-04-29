import React from 'react'
import './input.css'

const Input = ({
  inputId,
  inputType='number',
  label
}) => (
  <div className='input'>
    <label htmlFor={ inputId }>{ label }:</label>
    <input type={ inputType } id={ inputId }/>
  </div>
)

export default Input