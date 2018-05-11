import React from 'react'
import PropTypes from 'prop-types'

import './yearResult.css'
import {
  RESULTS_CASH_FLOW,
  RESULTS_CASH_ON_CASH_RETURN,
  RESULTS_EQUITY,
  RESULTS_PROPERTY_VALUE,
  RESULTS_RETURN_ON_EQUITY,
  RESULTS_RETURN_ON_INVESTMENT
} from '../../../constants'

const YearResult = ({
  result,
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      <p>Cash Flow: ${ result[RESULTS_CASH_FLOW] }</p>
      <p>Cash on Cash Return: { result[RESULTS_CASH_ON_CASH_RETURN] }%</p>
      <p>Property Value: ${ result[RESULTS_PROPERTY_VALUE] }</p>
      <p>Equity: ${ result[RESULTS_EQUITY] }</p>
      <p>Return on Equity: { result[RESULTS_RETURN_ON_EQUITY] }%</p>
      <p>Return on Investment: { result[RESULTS_RETURN_ON_INVESTMENT] }%</p>
    </div>
  )
}

YearResult.propTypes = {
  result: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

export default YearResult