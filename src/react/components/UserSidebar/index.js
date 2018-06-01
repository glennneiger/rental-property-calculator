import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import { logoutUser } from '../../../actions/auth'
import { getAllCalculations } from '../../../actions/calculationList'

const mapStateToProps = state => ({
  calculationList: state.calculationList
})

export default connect(
  mapStateToProps,
  { logoutUser,
    getAllCalculations }
)(UserSidebar)