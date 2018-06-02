import { connect } from 'react-redux'

import {
  getCalculationById
} from '../../../actions/calculationList'
import ListCalculation from './ListCalculation'
import { showModal } from '../../../actions/modal'

const mapStateToProps = state => ({
  changesMade: state.currentCalculation.changesMade
})

export default connect(
  mapStateToProps,
  { getCalculationById,
    showModal }
)(ListCalculation)