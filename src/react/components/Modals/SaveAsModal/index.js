import { connect } from 'react-redux'

import {
  getCalculationById,
  saveCalculation
} from '../../../../actions/calculationList'
import { hideModal } from '../../../../actions/modal'
import SaveAsModal from './SaveAsModal'
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields'

const mapDispatchToProps = dispatch => ({
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields())
  },
  getCalculationById: idToGet => {
    dispatch(getCalculationById(idToGet))
  },
  hideModal: () => {
    dispatch(hideModal())
  },
  saveCalculation: (
    title,
    calculationToSave,
    changesMade, setTitle,
    newCurrentTitle
  ) => {
    dispatch(saveCalculation(
      title,
      calculationToSave,
      changesMade,
      setTitle,
      newCurrentTitle
    ))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SaveAsModal)