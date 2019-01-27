import FutureResults from './FutureResults';

import { connect } from 'react-redux';

import { getYearsForResults } from '../../../utils/resultsUtils';
import {
  INPUT_ID_AMORTIZATION_PERIOD,
  TITLE_INITIAL_PURCHASE
} from '../../../constants';

export const mapStateToProps = state => ({
  yearsForResults: getYearsForResults(
    state.calculator[TITLE_INITIAL_PURCHASE].inputs[INPUT_ID_AMORTIZATION_PERIOD]
  )
});

export default connect(
  mapStateToProps
)(FutureResults);