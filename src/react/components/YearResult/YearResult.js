import React from 'react'

import './yearResult.css'

const YearResult = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear,
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      <p>Cash Flow: { getCashFlowForYear(year) }</p>
      <p>Cash on Cash Return: { getCashOnCashReturnForYear(year) }%</p>
    </div>
  )
}

export default YearResult