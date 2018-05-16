import React, { Component } from 'react'

import Calculator from '../Calculator'
import Sidebar from '../Sidebar'
import './calculatorPage.css'

class CalculatorPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div className='calculatorPage'>
        <Sidebar isLoggedIn={ this.state.isLoggedIn }/>
        <Calculator />
      </div>
    )
  }
}

export default CalculatorPage