import React from 'react'

import './result.css'
import YearResult from '../YearResult'

const Result = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear,
  getEquityAfterYears,
  getInvestmentAfterYears
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { getInvestmentAfterYears(0) }</p>
    <p>Initial Equity: { getEquityAfterYears(0) }</p>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 1 }/>
  </div>
)

export default Result