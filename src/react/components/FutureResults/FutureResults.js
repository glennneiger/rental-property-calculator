import React from 'react'
import PropTypes from 'prop-types'

import './futureResults.css'
import YearResult from '../YearResult'

const FutureResults = ({
  yearsForResults
}) => {
  return (
    <div className='futureResults'>
      {yearsForResults.length === 1
        ? <p className='enterAmortization'>
          Enter an amortization period to see your results.
        </p>
        : yearsForResults.map(year => (
          <YearResult
            key={year}
            year={year} />
        ))}
    </div>
  )
}

FutureResults.propTypes = {
  yearsForResults: PropTypes.array.isRequired
}

export default FutureResults