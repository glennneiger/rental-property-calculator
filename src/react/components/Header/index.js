import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import { logoutUser } from '../../../actions/auth'
import {
  hideSidebar,
  showSidebar
} from '../../../actions/sidebarVisible'
import { showModal } from '../../../actions/modal'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.user.name,
  screenWidth: state.ui.screenWidth,
  sidebarVisible: state.sidebarVisible
})

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => {
    dispatch(hideSidebar())
  },
  logoutUser: () => {
    dispatch(logoutUser())
  },
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps))
  },
  showSidebar: () => {
    dispatch(showSidebar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))