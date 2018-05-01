import React from 'react'

import './yearResult.css'

const YearResult = ({
  year
}) => {
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
    </div>
  )
}

export default YearResult