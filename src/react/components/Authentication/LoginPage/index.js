import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import {
  clearErrors,
  loginUser
} from '../../../../actions/auth'

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  clearErrors: () => {
    dispatch(clearErrors())
  },
  loginUser: userData => {
    dispatch(loginUser(userData))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)