import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import {
  getAllCalculations,
  saveCalculation
} from '../../../actions/calculationList'
import {
  setChangesMade,
  setCurrentTitle
} from '../../../actions/currentCalculation'
import { clearAllCalculatorFields } from '../../../actions/calculatorFields'
import { showModal } from '../../../actions/modal'
import { logoutUser } from '../../../actions/auth'

const mapStateToProps = state => ({
  calculation: state.calculator,
  calculationList: state.calculationList,
  changesMade: state.currentCalculation.changesMade,
  currentTitle: state.currentCalculation.title
})

const mapDispatchToProps = dispatch => ({
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields())
  },
  logoutUser: () => {
    dispatch(logoutUser())
  },
  saveCalculation: (
    title,
    calculation,
    changesMade,
    setTitle,
    newCurrentTitle
  ) => {
    dispatch(saveCalculation(
      title,
      calculation,
      changesMade,
      setTitle,
      newCurrentTitle
    ))
  },
  setChangesMade: changesMade => {
    dispatch(setChangesMade(changesMade))
  },
  setCurrentTitle: currentTitle => {
    dispatch(setCurrentTitle(currentTitle))
  },
  getAllCalculations: () => {
    dispatch(getAllCalculations())
  },
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSidebar)