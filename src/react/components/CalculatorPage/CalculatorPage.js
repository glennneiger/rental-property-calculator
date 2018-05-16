import React from 'react'

import Calculator from '../Calculator'
import SideBar from '../SideBar'
import './calculatorPage.css'

const CalculatorPage = ({}) => (
  <div className='calculatorPage'>
    <SideBar />
    <Calculator />
  </div>
)

export default CalculatorPage