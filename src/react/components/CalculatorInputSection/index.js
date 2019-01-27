import { connect } from 'react-redux';

import CalculatorInputSection from './CalculatorInputSection';
import {
  setNotesContent,
  toggleNotesEditorCollapsed
} from '../../../actions/calculatorFields';
import {
  setChangesMade
} from '../../../actions/currentCalculation';

const actions = {
  setChangesMade,
  setNotesContent,
  toggleNotesEditorCollapsed
};

export const mapStateToProps = (state, ownProps) => {
  return {
    notesEditorCollapsed: state.calculator[ownProps.title].notes.editorCollapsed,
    notesText: state.calculator[ownProps.title].notes.text
  };
};

export default connect(
  mapStateToProps,
  actions
)(CalculatorInputSection);