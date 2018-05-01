import React from 'react'

import './result.css'

const Result = ({
  getInvestmentAfterYears
}) => (
  <div className='result'>
    <h2>Results</h2>
    <p>Initial Investment: { getInvestmentAfterYears(0) }</p>
  </div>
)

export default Result