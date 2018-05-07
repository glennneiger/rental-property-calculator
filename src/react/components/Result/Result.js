import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
  amortizationPeriod,
  calculateCashFlowForYear,
  getCashOnCashReturnForYear,
  calculateEquityAfterYears,
  calculateInitialInvestment,
  calculatePropertyValueForYear
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { calculateInitialInvestment() }</p>
    <p>Initial Equity: { calculateEquityAfterYears(0) }</p>
    <FutureResults
      amortizationPeriod={ amortizationPeriod }
      calculateCashFlowForYear={ calculateCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      calculatePropertyValueForYear={ calculatePropertyValueForYear }/>
  </div>
)

Result.propTypes = {
  amortizationPeriod: PropTypes.number.isRequired,
  calculateCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired,
  calculateEquityAfterYears: PropTypes.func.isRequired,
  calculateInitialInvestment: PropTypes.func.isRequired,
  calculatePropertyValueForYear: PropTypes.func.isRequired
}

export default Result