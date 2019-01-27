import { connect } from 'react-redux';

import CalculatorInput from './CalculatorInput';
import {
  updateInput
} from '../../../actions/calculatorFields';
import {
  setChangesMade
} from '../../../actions/currentCalculation';

const actions = {
  setChangesMade,
  updateInput
};

export const mapStateToProps = (state, ownProps) => ({
  content: state.calculator[ownProps.section].inputs[ownProps.inputId],
  sidebarVisible: state.sidebarVisible
});

export default connect(
  mapStateToProps,
  actions
)(CalculatorInput);