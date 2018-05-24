import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RegisterPage from './RegisterPage'
import { registerUser } from '../../../../actions/auth'

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterPage))