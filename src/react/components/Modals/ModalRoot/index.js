import { connect } from 'react-redux'

import ModalRoot from './ModalRoot'

export default connect(
  state => state.modal
)(ModalRoot)