import React from 'react'
import PropTypes from 'prop-types'

import './yearResult.css'
import {
  NUMBER_PRECISION_DISPLAY,
  RESULTS_CASH_FLOW,
  RESULTS_CASH_ON_CASH_RETURN,
  RESULTS_EQUITY,
  RESULTS_PROPERTY_VALUE,
  RESULTS_RETURN_ON_EQUITY,
  RESULTS_RETURN_ON_INVESTMENT
} from '../../../constants'

const YearResult = ({
  result,
  year
}) => {
  const formatDisplayEntry = (entryTitle, entry, prefix = '', suffix = '') => (
    <p>
      {
        `${ entryTitle }:
        ${ prefix }${ entry.toFixed(NUMBER_PRECISION_DISPLAY) }${ suffix }`
      }
    </p>
  )
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      { formatDisplayEntry(
        'Cash Flow',
        result[RESULTS_CASH_FLOW],
        '$'
      ) }
      { formatDisplayEntry(
        'Cash on Cash Return',
        result[RESULTS_CASH_ON_CASH_RETURN],
        '',
        '%'
      ) }
      { formatDisplayEntry(
        'Property Value',
        result[RESULTS_PROPERTY_VALUE],
        '$'
      ) }
      { formatDisplayEntry(
        'Equity',
        result[RESULTS_EQUITY],
        '$'
      ) }
      { formatDisplayEntry(
        'Return on Equity',
        result[RESULTS_RETURN_ON_EQUITY],
        '',
        '%'
      ) }
      { formatDisplayEntry(
        'Return on Investment',
        result[RESULTS_RETURN_ON_INVESTMENT],
        '',
        '%'
      ) }
    </div>
  )
}

YearResult.propTypes = {
  result: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

export default YearResult