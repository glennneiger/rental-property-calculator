import React from 'react'
import PropTypes from 'prop-types'

import './futureResults.css'
import YearResult from '../YearResult'

const FutureResults = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear
}) => (
  <div className='futureResults'>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 1 }/>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 5 }/>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 10 }/>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 15 }/>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 20 }/>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 25 }/>
  </div>
)

FutureResults.propTypes = {
  getCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired
}

export default FutureResults