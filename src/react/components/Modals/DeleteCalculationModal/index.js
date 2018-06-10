import { connect } from 'react-redux'

import DeleteCalculationModal from './DeleteCalculationModal'
import { hideModal } from '../../../../actions/modal'
import {
  deleteCalculationWithId
} from '../../../../actions/calculationList'
import {
  setChangesMade,
  setCurrentTitle
} from '../../../../actions/currentCalculation'
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields'

const getCurrentlySelectedId = state => {
  const calculationList = state.calculationList
  const currentTitle = state.currentCalculation.title
  let currentId
  if (currentTitle) {
    currentId = (calculationList.find(calc => calc.title === currentTitle)).id
  }
  return currentId
}

const mapStateToProps = state => ({
  currentlySelectedId: getCurrentlySelectedId(state)
})

const mapDispatchToProps = dispatch => ({
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields())
  },
  deleteCalculationWithId: idToDelete => {
    dispatch(deleteCalculationWithId(idToDelete))
  },
  hideModal: () => {
    dispatch(hideModal())
  },
  setChangesMade: changesMade => {
    dispatch(setChangesMade(changesMade))
  },
  setCurrentTitle: newCurrentTitle => {
    dispatch(setCurrentTitle(newCurrentTitle))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCalculationModal)