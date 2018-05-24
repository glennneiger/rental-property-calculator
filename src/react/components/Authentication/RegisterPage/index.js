import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RegisterPage from './RegisterPage'
import { registerUser } from '../../../../actions/auth'

const mapStateToProps = state => ({
  auth: state.auth
})

// const mapDispatchToProps = dispatch => ({
//   registerUser(userData) {
//     dispatch(
//       registerUser(userData)
//     )
//   }
// })

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterPage)