import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
  // amortizationPeriod,
  // calculateCashFlowForYear,
  // calculateCashOnCashReturnForYear,
  // calculatePropertyValueForYear,
  yearsForResults,
  initialEquity,
  initialInvestment,
  results
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { initialInvestment }</p>
    <p>Initial Equity: { initialEquity }</p>
    <FutureResults
      // amortizationPeriod={ amortizationPeriod }
      yearsForResults={ yearsForResults }
      results={ results }
      // calculateCashFlowForYear={ calculateCashFlowForYear }
      // calculateCashOnCashReturnForYear={ calculateCashOnCashReturnForYear }
      // calculatePropertyValueForYear={ calculatePropertyValueForYear }
    />
  </div>
)

Result.propTypes = {
  // amortizationPeriod: PropTypes.number.isRequired,
  // calculateCashFlowForYear: PropTypes.func.isRequired,
  // calculateCashOnCashReturnForYear: PropTypes.func.isRequired,
  // calculatePropertyValueForYear: PropTypes.func.isRequired,
  initialEquity: PropTypes.number.isRequired,
  initialInvestment: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
  yearsForResults: PropTypes.array.isRequired
}

export default Result