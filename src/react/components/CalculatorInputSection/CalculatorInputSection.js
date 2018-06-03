import React from 'react'
import PropTypes from 'prop-types'

import './calculatorInputSection.css'

const CalculatorInputSection = ({
  children,
  title
}) => (
  <div className='calculatorInputSection' >
    <h2>{title}</h2>
    <div className='inputs'>
      {children}
    </div>
  </div>
)

CalculatorInputSection.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default CalculatorInputSection