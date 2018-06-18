import { connect } from 'react-redux'

import CalculatorPage from './CalculatorPage'

const mapStateToProps = state => ({
  screenWidth: state.ui.screenWidth,
  sidebarVisible: state.sidebarVisible
})

export default connect(
  mapStateToProps
)(CalculatorPage)