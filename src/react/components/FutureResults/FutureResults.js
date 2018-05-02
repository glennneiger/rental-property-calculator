import React from 'react'
import PropTypes from 'prop-types'

import './futureResults.css'
import YearResult from '../YearResult'

const FutureResults = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear
}) => {
  const yearsToShowResults = [1, 5, 10, 15, 20, 25]
  return (
    <div className='futureResults'>
      { yearsToShowResults.map(year => (
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
  getCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired
}

export default FutureResults