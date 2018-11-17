import { connect } from 'react-redux';

import UserSidebar from './UserSidebar';
import {
  getAllCalculations,
  saveCalculation
} from '../../../actions/calculationList';
import {
  setChangesMade,
  setCurrentTitle
} from '../../../actions/currentCalculation';
import { clearAllCalculatorFields } from '../../../actions/calculatorFields';
import { showModal } from '../../../actions/modal';

const actions = {
  clearAllCalculatorFields,
  getAllCalculations,
  saveCalculation,
  setChangesMade,
  setCurrentTitle,
  showModal
};

export const mapStateToProps = state => ({
  calculation: state.calculator,
  calculationList: state.calculationList,
  changesMade: state.currentCalculation.changesMade,
  currentTitle: state.currentCalculation.title
});

export default connect(
  mapStateToProps,
  actions
)(UserSidebar);