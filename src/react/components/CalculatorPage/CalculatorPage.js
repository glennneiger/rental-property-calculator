import React from 'react'
import PropTypes from 'prop-types'

import Calculator from '../Calculator'
import Sidebar from '../Sidebar'
import css from './calculatorPage.css'

const CalculatorPage = ({
  isLoggedIn
}) => {
  return (
    <div className={css.calculatorPage}>
      <Sidebar isLoggedIn={isLoggedIn} />
      <Calculator />
    </div>
  )
}

CalculatorPage.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default CalculatorPage