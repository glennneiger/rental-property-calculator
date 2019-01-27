import { connect } from 'react-redux';

import CalculatorInputSection from './CalculatorInputSection';
import {
  setNotesContent,
  toggleNotesEditorCollapsed
} from '../../../actions/calculatorFields';

const actions = {
  setNotesContent,
  toggleNotesEditorCollapsed
};

export const mapStateToProps = (state, ownProps) => ({
  notesEditorCollapsed: state.calculator[ownProps.title].notes.editorCollapsed,
  notesText: state.calculator[ownProps.title].notes.text
});

export default connect(
  mapStateToProps,
  actions
)(CalculatorInputSection);