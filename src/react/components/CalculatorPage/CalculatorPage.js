import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Calculator from '../Calculator'
import Sidebar from '../Sidebar'
import css from './calculatorPage.css'

class CalculatorPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateWidth)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWidth)
  }
  componentWillMount = () => {
    this.updateWidth()
  }
  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    })
  }
  render() {
    return (
      <div className={css.calculatorPage}>
        {this.props.sidebarVisible
          ? <Sidebar />
          : null
        }
        {this.state.width < 600 && this.props.sidebarVisible
          ? null
          : <Calculator />
        }
      </div>
    )
  }
}

CalculatorPage.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired
}

export default CalculatorPage