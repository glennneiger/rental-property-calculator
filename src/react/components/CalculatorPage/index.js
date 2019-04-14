import { connect } from 'react-redux';

import CalculatorPage from './CalculatorPage';

export const mapStateToProps = state => ({
  changesMade: state.currentCalculation.changesMade,
  screenWidth: state.ui.screenWidth,
  sidebarVisible: state.sidebarVisible
});

export default connect(
  mapStateToProps
)(CalculatorPage);