import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListCalculation from '../ListCalculation'
import css from './userSidebar.css'
import BlueButton from '../BlueButton'
import {
  MODAL_CONFIRM_LOGOUT,
  MODAL_SAVE_AS,
  MODAL_SAVE_CHANGES
} from '../../../constants'

class UserSidebar extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllCalculations()
  }
  handleLogoutClick = () => {
    this.props.showModal(MODAL_CONFIRM_LOGOUT)
  }
  handleNewCalcClick = () => {
    const {
      calculation,
      changesMade,
      clearAllCalculatorFields,
      currentTitle,
      setCurrentTitle,
      showModal
    } = this.props

    if (!changesMade) {
      setCurrentTitle(null)
      clearAllCalculatorFields()
    } else {
      showModal(MODAL_SAVE_CHANGES, {
        calculationToSave: calculation,
        currentTitle: currentTitle,
        creatingNewCalculation: true
      })
    }
  }
  handleSaveClick = () => {
    const {
      calculation,
      changesMade,
      currentTitle,
      saveCalculation
    } = this.props

    if (!changesMade) {
      // do nothing
    } else if (!currentTitle) {
      this.handleSaveAsClick()
    } else {
      saveCalculation(
        currentTitle,
        calculation,
        false
      )
    }
  }
  handleSaveAsClick = () => {
    this.props.showModal(MODAL_SAVE_AS, {
      calculationToSave: this.props.calculation
    })
  }
  render() {
    const { calculationList } = this.props
    return (
      <div className={css.userSidebar}>
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
        <div className={css.saveButtons}>
          <BlueButton onClick={this.handleSaveClick}>Save</BlueButton>
          <BlueButton onClick={this.handleSaveAsClick}>Save As...</BlueButton>
        </div>
        <BlueButton id={css.newCalcButton}
          onClick={this.handleNewCalcClick}>
          New Calculation
        </BlueButton>
        <BlueButton id={css.logoutButton}
          onClick={this.handleLogoutClick}>
          Logout
        </BlueButton>
      </div>
    )
  }
}

UserSidebar.propTypes = {
  calculation: PropTypes.object.isRequired,
  calculationList: PropTypes.array.isRequired,
  changesMade: PropTypes.bool.isRequired,
  clearAllCalculatorFields: PropTypes.func.isRequired,
  currentTitle: PropTypes.string,
  getAllCalculations: PropTypes.func.isRequired,
  saveCalculation: PropTypes.func.isRequired,
  setCurrentTitle: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

export default UserSidebar