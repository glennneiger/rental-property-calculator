import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaTrashO from 'react-icons/lib/fa/trash-o'

import { MODAL_SAVE_CHANGES } from '../../../constants'
import './listCalculation.css'

class ListCalculation extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    if (this.props.changesMade) {
      this.props.showModal(MODAL_SAVE_CHANGES, {
        currentTitle: this.props.currentTitle,
        idToGet: this.props.id,
        calculation: this.props.calculation
      })
    } else {
      this.props.getCalculationById(this.props.id)
    }
  }
  handleTrashIconClick = event => {
    event.stopPropagation()
    console.log('CLICKED')
  }
  render() {
    return (
      <div className='listCalculation'
        onClick={this.handleClick}>
        {this.props.title}
        <FaTrashO
          className='trashIcon'
          onClick={this.handleTrashIconClick}
        />
      </div>
    )
  }
}

ListCalculation.propTypes = {
  calculation: PropTypes.object,
  changesMade: PropTypes.bool.isRequired,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ListCalculation