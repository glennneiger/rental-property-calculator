import { connect } from 'react-redux'

import CalculatorPage from './CalculatorPage'

const mapStateToProps = state => ({
  sidebarVisible: state.sidebarVisible
})

export default connect(
  mapStateToProps
)(CalculatorPage)