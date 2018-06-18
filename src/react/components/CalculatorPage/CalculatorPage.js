import React from 'react'
import PropTypes from 'prop-types'

import Calculator from '../Calculator'
import Sidebar from '../Sidebar'
import css from './calculatorPage.css'

const CalculatorPage = ({
  sidebarVisible
}) => {
  return (
    <div className={css.calculatorPage}>
      {sidebarVisible
        ? <Sidebar />
        : null
      }
      <Calculator />
    </div>
  )
}

CalculatorPage.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired
}

export default CalculatorPage