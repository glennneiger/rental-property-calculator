import { connect } from 'react-redux'

import {
  getCalculationById
} from '../../../actions/calculationList'
import ListCalculation from './ListCalculation'
import { showModal } from '../../../actions/modal'

const mapStateToProps = state => ({
  calculation: state.calculator,
  changesMade: state.currentCalculation.changesMade,
  currentTitle: state.currentCalculation.title
})

const mapDispatchToProps = dispatch => ({
  getCalculationById: calculationId => {
    dispatch(getCalculationById(calculationId))
  },
  showModal: (modalType, modalProps) => dispatch(
    showModal(modalType, modalProps)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCalculation)