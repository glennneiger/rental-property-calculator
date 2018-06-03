import { connect } from 'react-redux'

import { saveCalculation } from '../../../../actions/calculationList'
import { hideModal } from '../../../../actions/modal'
import SaveAsModal from './SaveAsModal'

const mapDispatchToProps = dispatch => ({
  hideModal: () => {
    dispatch(hideModal())
  },
  saveCalculation: (title, calculationToSave) => {
    dispatch(saveCalculation(title, calculationToSave))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SaveAsModal)