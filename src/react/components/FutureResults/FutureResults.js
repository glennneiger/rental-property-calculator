import React from 'react'
import PropTypes from 'prop-types'

import './futureResults.css'
import YearResult from '../YearResult'
import {
  INTERVAL_YEAR_RESULTS
} from '../../../constants'

const FutureResults = ({
  amortizationPeriod,
  calculateCashFlowForYear,
  calculateCashOnCashReturnForYear,
  calculatePropertyValueForYear
}) => {
  const getYearsToShowResults = () => {
    let yearsToShowResults = [1]
    for (
      let i = INTERVAL_YEAR_RESULTS;
      i <= amortizationPeriod;
      i = i + INTERVAL_YEAR_RESULTS
    ) {
      yearsToShowResults.push(i)
    }
    /* To show the year after amortization period, when debt is paid off */
    if (amortizationPeriod) {
      yearsToShowResults.push(amortizationPeriod + 1)
    }
    return yearsToShowResults
  }
  return (
    <div className='futureResults'>
      { getYearsToShowResults().length === 1
        ? <p className='enterAmortization'>
          Enter an amortization period to see your results.
        </p>
        : getYearsToShowResults().map(year => (
          <YearResult
            key={ year }
            calculateCashFlowForYear={ calculateCashFlowForYear }
            calculateCashOnCashReturnForYear={ calculateCashOnCashReturnForYear }
            calculatePropertyValueForYear= { calculatePropertyValueForYear }
            year={ year }/>
        )) }
    </div>
  )
}

FutureResults.propTypes = {
  amortizationPeriod: PropTypes.number.isRequired,
  calculateCashFlowForYear: PropTypes.func.isRequired,
  calculateCashOnCashReturnForYear: PropTypes.func.isRequired,
  calculatePropertyValueForYear: PropTypes.func.isRequired
}

export default FutureResults