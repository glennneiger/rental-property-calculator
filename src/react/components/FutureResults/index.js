import FutureResults from './FutureResults'

import { connect } from 'react-redux'

import { getYearsForResults } from '../../../utils/resultsUtils'
import {
  CALCULATOR_FIELDS,
  INPUT_ID_AMORTIZATION_PERIOD,
  TITLE_INITIAL_PURCHASE
} from '../../../constants'

const mapStateToProps = state => ({
  yearsForResults: getYearsForResults(
    state[
      CALCULATOR_FIELDS
    ][TITLE_INITIAL_PURCHASE][INPUT_ID_AMORTIZATION_PERIOD]
  )
})

export default connect(
  mapStateToProps
)(FutureResults)