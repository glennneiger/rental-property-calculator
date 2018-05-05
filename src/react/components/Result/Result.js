import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
  amortizationPeriod,
  calculateCashFlowForYear,
  getCashOnCashReturnForYear,
  getEquityAfterYears,
  getInvestmentAfterYears,
  calculatePropertyValueForYear
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { getInvestmentAfterYears(0) }</p>
    <p>Initial Equity: { getEquityAfterYears(0) }</p>
    <FutureResults
      amortizationPeriod={ amortizationPeriod }
      calculateCashFlowForYear={ calculateCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      calculatePropertyValueForYear={ calculatePropertyValueForYear }/>
  </div>
)

Result.propTypes = {
  amortizationPeriod: PropTypes.string.isRequired,
  calculateCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired,
  getEquityAfterYears: PropTypes.func.isRequired,
  getInvestmentAfterYears: PropTypes.func.isRequired,
  calculatePropertyValueForYear: PropTypes.func.isRequired
}

export default Result