import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import { logoutUser } from '../../../actions/auth'
import {
  getAllCalculations,
  saveCalculation
} from '../../../actions/calculationList'

const mapStateToProps = state => ({
  calculation: state.calculator,
  calculationList: state.calculationList,
  currentTitle: state.currentCalculation.title
})

export default connect(
  mapStateToProps,
  { saveCalculation,
    logoutUser,
    getAllCalculations }
)(UserSidebar)