import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
  initialEquity,
  initialInvestment,
  results,
  yearsForResults
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: {initialInvestment}</p>
    <p>Initial Equity: {initialEquity}</p>
    <FutureResults
      results={results}
      yearsForResults={yearsForResults}
    />
  </div>
)

Result.propTypes = {
  initialEquity: PropTypes.number.isRequired,
  initialInvestment: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
  yearsForResults: PropTypes.array.isRequired
}

export default Result