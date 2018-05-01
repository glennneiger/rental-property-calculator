import React from 'react'

import './yearResult.css'

const YearResult = ({
  getCashFlowForYear,
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      <p>Cash Flow: { getCashFlowForYear(year) }</p>
    </div>
  )
}

export default YearResult