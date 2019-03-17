import * as React from 'react';
import PropTypes from 'prop-types';

const css = require('./yearResult.css');
import * as css from './yearResult.css';
import DisplayEntry from '../DisplayEntry';

const YearResult = ({
  displayEntries,
  year
}) => {
  return (
    <div className={css.yearResult}>
      <h3>Year {year}</h3>
      {
        displayEntries.map(entry => (
          <DisplayEntry
            key={entry.title}
            {...entry}
          />
        ))
      }
    </div>
  );
};

// YearResult.propTypes = {
//   displayEntries: PropTypes.array.isRequired,
//   year: PropTypes.number.isRequired
// };

export default YearResult;