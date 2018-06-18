import { connect } from 'react-redux'

import LogoutModal from './LogoutModal'
import { hideModal } from '../../../../actions/modal'

const mapDispatchToProps = dispatch => ({
  hideModal: () => {
    dispatch(hideModal())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(LogoutModal)