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

export default connect(
  mapStateToProps,
  { clearErrors,
    registerUser }
)(withRouter(RegisterPage))