import { connect } from 'react-redux'

import Header from './Header'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps
)(Header)