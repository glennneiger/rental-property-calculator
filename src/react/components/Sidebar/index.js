import { connect } from 'react-redux'

import Sidebar from './Sidebar'

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Sidebar)