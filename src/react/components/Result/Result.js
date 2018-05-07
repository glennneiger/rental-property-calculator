import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
  amortizationPeriod,
  calculateCashFlowForYear,
  calculateCashOnCashReturnForYear,
  calculateEquityAfterYears,
  calculateInitialInvestment,
  calculatePropertyValueForYear,
  results
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { calculateInitialInvestment() }</p>
    <p>Initial Equity: { calculateEquityAfterYears(0) }</p>
    { console.log(results) }
    <FutureResults
      amortizationPeriod={ amortizationPeriod }
      calculateCashFlowForYear={ calculateCashFlowForYear }
      calculateCashOnCashReturnForYear={ calculateCashOnCashReturnForYear }
      calculatePropertyValueForYear={ calculatePropertyValueForYear }/>
  </div>
)

Result.propTypes = {
  amortizationPeriod: PropTypes.number.isRequired,
  calculateCashFlowForYear: PropTypes.func.isRequired,
  calculateCashOnCashReturnForYear: PropTypes.func.isRequired,
  calculateEquityAfterYears: PropTypes.func.isRequired,
  calculateInitialInvestment: PropTypes.func.isRequired,
  calculatePropertyValueForYear: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired
}

export default Result