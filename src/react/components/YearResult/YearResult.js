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
  const displayEntries = [
    {
      title: 'Cash Flow',
      content: result[RESULTS_CASH_FLOW],
      prefix: '$',
      suffix: ''
    },
    {
      title: 'Cash on Cash Return',
      content: result[RESULTS_CASH_ON_CASH_RETURN],
      prefix: '',
      suffix: '%'
    },
    {
      title: 'Property Value',
      content: result[RESULTS_PROPERTY_VALUE],
      prefix: '$',
      suffix: ''
    },
    {
      title: 'Equity',
      content: result[RESULTS_EQUITY],
      prefix: '$',
      suffix: ''
    },
    {
      title: 'Return on Equity',
      content: result[RESULTS_RETURN_ON_EQUITY],
      prefix: '',
      suffix: '%'
    },
    {
      title: 'Return on Investment',
      content: result[RESULTS_RETURN_ON_INVESTMENT],
      prefix: '',
      suffix: '%'
    }
  ]
  const formatDisplayEntry = ({
    title,
    content,
    prefix,
    suffix
  }) => (
    <p>
      {
        `${ title }:
        ${ prefix }${ content.toFixed(NUMBER_PRECISION_DISPLAY) }${ suffix }`
      }
    </p>
  )
  return (
    <div className='yearResult'>
      <h3>Year { year }</h3>
      {
        displayEntries.map(entry => (
          formatDisplayEntry(entry)
        ))
      }
    </div>
  )
}

YearResult.propTypes = {
  result: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

export default YearResult