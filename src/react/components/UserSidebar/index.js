import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import { logoutUser } from '../../../actions/auth'

export default connect(
  null,
  { logoutUser }
)(UserSidebar)