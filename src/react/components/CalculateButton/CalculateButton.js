import React from 'react'

import './calculateButton.css'

const CalculateButton = ({
  handleClick
}) => (
  <button
    className='calculateButton'
    onClick={ handleClick }>
    Calculate
  </button>
)

export default CalculateButton