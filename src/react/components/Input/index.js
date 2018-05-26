import { connect } from 'react-redux'

import Input from './Input'
import { CALCULATOR_FIELDS } from '../../../constants'
import { updateInput } from '../../../actions/calculatorFields'

const mapStateToProps = (state, ownProps) => ({
  content: state[CALCULATOR_FIELDS][ownProps.section][ownProps.inputId]
})

const mapDispatchToProps = dispatch => ({
  updateInput(value, section, inputId) {
    dispatch(updateInput(value, section, inputId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)