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
  changesMade: state.currentCalculation.changesMade,
  currentTitle: state.currentCalculation.title
})

const mapDispatchToProps = dispatch => ({
  saveCalculation: (title, calculation) => {
    dispatch(saveCalculation(title, calculation))
  },
  logoutUser: () => {
    dispatch(logoutUser())
  },
  getAllCalculations: () => {
    dispatch(getAllCalculations())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSidebar)