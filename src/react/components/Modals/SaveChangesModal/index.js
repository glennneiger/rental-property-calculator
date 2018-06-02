import { connect } from 'react-redux'

import SaveChangesModal from './SaveChangesModal'
import {
  saveCalculation,
  getCalculationById
} from '../../../../actions/calculationList'
import { hideModal } from '../../../../actions/modal'

// const mapDispatchToProps = dispatch => ({
//   hideModal: () => dispatch(
//     hideModal()
//   ),
//   saveCalculation: (title, calculation) => {
//     saveCalculation(title, calculation)(dispatch)
//   }
// })

export default connect(
  null,
  { hideModal,
    saveCalculation,
    getCalculationById }
)(SaveChangesModal)