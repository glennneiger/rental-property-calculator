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

const mapDispatchToProps = dispatch => ({
  getCalculationById: calculationId => {
    dispatch(getCalculationById(calculationId))
  },
  hideModal: () => {
    dispatch(hideModal())
  },
  saveCalculation: (title, calculation, setToCurrentCalculation) => {
    dispatch(saveCalculation(title, calculation, setToCurrentCalculation))
  },
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SaveChangesModal)