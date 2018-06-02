import { connect } from 'react-redux'

import SaveChangesModal from './SaveChangesModal'
import {
  saveCalculation,
  getCalculationById
} from '../../../../actions/calculationList'
import { hideModal } from '../../../../actions/modal'

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(
    hideModal()
  ),
  saveCalculation: (title, calculation) => {
    dispatch(saveCalculation(title, calculation))
  },
  getCalculationById: calculationId => {
    dispatch(getCalculationById(calculationId))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SaveChangesModal)