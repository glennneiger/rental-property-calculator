import { connect } from 'react-redux'

import SaveChangesModal from './SaveChangesModal'
import {
  getCalculationById,
  saveCalculation
} from '../../../../actions/calculationList'
import {
  hideModal,
  showModal
} from '../../../../actions/modal'
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields'
import {
  setChangesMade,
  setCurrentTitle
} from '../../../../actions/currentCalculation'

const mapDispatchToProps = dispatch => ({
  setChangesMade: changesMade => {
    dispatch(setChangesMade(changesMade))
  },
  setCurrentTitle: newCurrentTitle => {
    dispatch(setCurrentTitle(newCurrentTitle))
  },
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields())
  },
  getCalculationById: calculationId => {
    dispatch(getCalculationById(calculationId))
  },
  hideModal: () => {
    dispatch(hideModal())
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
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SaveChangesModal)