import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import { logoutUser } from '../../../actions/auth'
import {
  hideSidebar,
  showSidebar
} from '../../../actions/sidebarVisible'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  sidebarVisible: state.sidebarVisible
})

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => {
    dispatch(hideSidebar())
  },
  logoutUser: () => {
    dispatch(logoutUser())
  },
  showSidebar: () => {
    dispatch(showSidebar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))