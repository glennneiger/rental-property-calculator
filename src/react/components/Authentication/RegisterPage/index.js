import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RegisterPage from './RegisterPage'
import {
  clearErrors,
  registerUser
} from '../../../../actions/auth'

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  clearErrors: () => {
    dispatch(clearErrors())
  },
  registerUser: (userData, history) => {
    dispatch(registerUser(userData, history))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterPage))