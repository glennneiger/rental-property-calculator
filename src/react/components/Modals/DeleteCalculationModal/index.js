import { connect } from 'react-redux'

import DeleteCalculationModal from './DeleteCalculationModal'
import { hideModal } from '../../../../actions/modal'
import {
  deleteCalculationWithId
} from '../../../../actions/calculationList'

const mapDispatchToProps = dispatch => ({
  deleteCalculationWithId: idToDelete => {
    dispatch(deleteCalculationWithId(idToDelete))
  },
  hideModal: () => {
    dispatch(hideModal())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(DeleteCalculationModal)