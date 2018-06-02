import { connect } from 'react-redux'

import SaveChangesModal from './SaveChangesModal'
import { saveCalculation } from '../../../../actions/calculationList'
import { hideModal } from '../../../../actions/modal'

const mapStateToProps = state => ({
  currentTitle: state.currentCalculation.title
})

export default connect(
  mapStateToProps,
  { saveCalculation,
    hideModal }
)(SaveChangesModal)