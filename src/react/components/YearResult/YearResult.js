import React from 'react'
import PropTypes from 'prop-types'

import './yearResult.css'

const YearResult = ({
  calculateCashFlowForYear,
  getCashOnCashReturnForYear,
  calculatePropertyValueForYear,
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      <p>Cash Flow: ${ calculateCashFlowForYear(year) }</p>
      <p>Cash on Cash Return: { getCashOnCashReturnForYear(year) }%</p>
      <p>Property Value: ${ calculatePropertyValueForYear(year) }</p>
    </div>
  )
}

YearResult.propTypes = {
  calculateCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired,
  calculatePropertyValueForYear: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired
}

export default YearResult