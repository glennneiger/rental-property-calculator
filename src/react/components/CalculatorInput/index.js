import { connect } from 'react-redux';

import CalculatorInput from './CalculatorInput';
import {
  updateInput
} from '../../../actions/calculatorFields';
import {
  setChangesMade
} from '../../../actions/currentCalculation';

export const mapStateToProps = (state, ownProps) => ({
  content: state.calculator[ownProps.section][ownProps.inputId],
  sidebarVisible: state.sidebarVisible
});

const mapDispatchToProps = dispatch => ({
  updateInput(value, section, inputId) {
    dispatch(updateInput(value, section, inputId));
  },
  setChangesMade(changesMade) {
    dispatch(setChangesMade(changesMade));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorInput);