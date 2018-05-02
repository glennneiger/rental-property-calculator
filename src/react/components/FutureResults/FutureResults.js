import React from 'react'
import PropTypes from 'prop-types'

import './futureResults.css'
import YearResult from '../YearResult'
import {
  INTERVAL_YEAR_RESULTS,
  NUMBER_SYSTEM_DECIMAL
} from '../../../constants'

const FutureResults = ({
  amortizationPeriod,
  getCashFlowForYear,
  getCashOnCashReturnForYear
}) => {
  const getYearsToShowResults = () => {
    let yearsToShowResults = [1]
    const numYears = parseInt(amortizationPeriod, NUMBER_SYSTEM_DECIMAL)
    for (
      let i = INTERVAL_YEAR_RESULTS;
      i <= numYears;
      i = i + INTERVAL_YEAR_RESULTS
    ) {
      yearsToShowResults.push(i)
    }
    /* To show the year after amortization period, when debt is paid off */
    if (numYears) {
      yearsToShowResults.push(numYears + 1)
    }
    return yearsToShowResults
  }
  return (
    <div className='futureResults'>
      { getYearsToShowResults().map(year => (
        <YearResult
          key={ year }
          getCashFlowForYear={ getCashFlowForYear }
          getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
          year={ year }/>
      )) }
    </div>
  )
}

FutureResults.propTypes = {
  amortizationPeriod: PropTypes.string.isRequired,
  getCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired
}

export default FutureResults