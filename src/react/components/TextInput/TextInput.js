import * as React from 'react';
import PropTypes from 'prop-types';

const css = require('./textInput.css');

const TextInput = props => {
  const width = props.width ? props.width : null;
  return (
    <input className={css.textInput} {...props} style={{ width }} />
  );
};

// TextInput.propTypes = {
//   width: PropTypes.number
// };

export default TextInput;