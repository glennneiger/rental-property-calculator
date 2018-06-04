import { connect } from 'react-redux'

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
)(Header)