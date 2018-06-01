import { connect } from 'react-redux'

import {
  getCalculationById
} from '../../../actions/calculationList'
import ListCalculation from './ListCalculation'

export default connect(
  null,
  { getCalculationById }
)(ListCalculation)