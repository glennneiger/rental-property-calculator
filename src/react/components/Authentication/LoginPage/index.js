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

export default connect(
  mapStateToProps,
  { clearErrors,
    loginUser }
)(LoginPage)