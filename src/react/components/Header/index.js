import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import { logoutUser } from '../../../actions/auth'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))