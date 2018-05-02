import React from 'react'
import PropTypes from 'prop-types'

import './yearResult.css'

const YearResult = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear,
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      <p>Cash Flow: { getCashFlowForYear(year) }</p>
      <p>Cash on Cash Return: { getCashOnCashReturnForYear(year) }%</p>
    </div>
  )
}

YearResult.propTypes = {
  getCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired
}

export default YearResult