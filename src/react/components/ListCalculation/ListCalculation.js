import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MODAL_SAVE_CHANGES } from '../../../constants'
import './listCalculation.css'

class ListCalculation extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    if (this.props.changesMade) {
      this.props.showModal(MODAL_SAVE_CHANGES, {})
    }
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
  changesMade: PropTypes.bool.isRequired,
  getCalculationById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  // onLoadListCalculation: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ListCalculation