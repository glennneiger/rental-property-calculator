import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import { loginUser } from '../../../../actions/auth'

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginPage)