import { connect } from 'react-redux'

import UserSidebar from './UserSidebar'
import {
  getAllCalculations,
  saveCalculation
} from '../../../actions/calculationList'
import { showModal } from '../../../actions/modal'

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
  getAllCalculations: () => {
    dispatch(getAllCalculations())
  },
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSidebar)