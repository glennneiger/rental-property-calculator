import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './listCalculation.css'

class ListCalculation extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    this.props.onLoadListCalculation()
    this.props.getCalculationById(this.props.id)
  }
  render() {
    return (
      <div className='listCalculation'
        onClick={this.handleClick}>
        {this.props.title}
      </div>
    )
  }
}

ListCalculation.propTypes = {
  getCalculationById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onLoadListCalculation: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ListCalculation