import React from 'react'

import './result.css'

const Result = ({
  getEquityAfterYears,
  getInvestmentAfterYears
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { getInvestmentAfterYears(0) }</p>
    <p>Initial Equity: { getEquityAfterYears(0) }</p>
  </div>
)

export default Result