import * as React from 'react';
import PropTypes from 'prop-types';

const css = require('./result.css');
import FutureResults from '../FutureResults';

const Result = ({
  initialEquity,
  initialInvestment
}) => (
    <div className={css.result}>
      <h2>Live Results</h2>
      <p>Initial Investment: {initialInvestment}</p>
      <p>Initial Equity: {initialEquity}</p>
      <FutureResults />
    </div>
  );

// Result.propTypes = {
//   initialEquity: PropTypes.number.isRequired,
//   initialInvestment: PropTypes.number.isRequired
// };

export default Result;