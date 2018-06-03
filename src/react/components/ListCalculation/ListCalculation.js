import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import classNames from 'classnames'

import {
  MODAL_CONFIRM_DELETE_CALCULATION,
  MODAL_SAVE_CHANGES
} from '../../../constants'
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
    this.props.showModal(MODAL_CONFIRM_DELETE_CALCULATION, {
      titleToDelete: this.props.title,
      idToDelete: this.props.id
    })
  }
  render() {
    const { currentTitle, title } = this.props
    const selected = (currentTitle === title) ? true : false
    return (
      <div
        onClick={this.handleClick}
        className={classNames({
          listCalculation: true,
          isSelected: selected
        })}>
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