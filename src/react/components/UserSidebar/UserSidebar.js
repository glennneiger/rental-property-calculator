import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Infinite from 'react-infinite'

import ListCalculation from '../ListCalculation'
import './userSidebar.css'
import BlueButton from '../BlueButton'
import { MODAL_SAVE_AS } from '../../../constants'

class UserSidebar extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllCalculations()
  }
  handleSaveClick = () => {
    if (!this.props.changesMade) {
      // do nothing
    } else if (!this.props.currentTitle) {
      this.handleSaveAsClick()
    } else {
      this.props.saveCalculation(
        this.props.currentTitle,
        this.props.calculation
      )
    }
  }
  handleSaveAsClick = () => {
    this.props.showModal(MODAL_SAVE_AS, {
      calculationToSave: this.props.calculation
    })
  }
  render() {
    const { logoutUser, calculationList } = this.props
    return (
      <div className='userSidebar'>
        <BlueButton onClick={logoutUser}>Logout</BlueButton>
        <h2>Saved Calculations</h2>
        {calculationList.length !== 0
          ? <ul>
            {calculationList.map(calculation => (
              <ListCalculation
                key={calculation.id}
                id={calculation.id}
                title={calculation.title}
                onLoadListCalculation={this.onLoadListCalculation}
              />
            ))}
          </ul>
          : <div>No calculations to display</div>}
        <div className='saveButtons'>
          <BlueButton onClick={this.handleSaveClick}>Save</BlueButton>
          <BlueButton onClick={this.handleSaveAsClick}>Save As...</BlueButton>
        </div>
      </div>
    )
  }
}

UserSidebar.propTypes = {
  calculation: PropTypes.object.isRequired,
  calculationList: PropTypes.array.isRequired,
  changesMade: PropTypes.bool.isRequired,
  currentTitle: PropTypes.string,
  getAllCalculations: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  saveCalculation: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

export default UserSidebar