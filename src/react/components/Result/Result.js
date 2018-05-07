import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import FutureResults from '../FutureResults'

const Result = ({
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
      yearsForResults={ yearsForResults }
      results={ results }
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