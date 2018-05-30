import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import { logoutUser } from '../../../actions/auth'
import { getAllCalculations } from '../../../actions/calculationList'

export default connect(
  null,
  { logoutUser,
    getAllCalculations }
)(UserSidebar)