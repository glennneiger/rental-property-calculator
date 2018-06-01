import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import { logoutUser } from '../../../actions/auth'
import {
  getAllCalculations,
  saveCalculation
} from '../../../actions/calculationList'

const mapStateToProps = state => ({
  calculation: state.calculator,
  calculationList: state.calculationList
})

export default connect(
  mapStateToProps,
  { saveCalculation,
    logoutUser,
    getAllCalculations }
)(UserSidebar)