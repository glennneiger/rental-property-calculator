import * as React from 'react';
import PropTypes from 'prop-types';

const css = require('./blueButton.css');

const BlueButton = props =>
  <button className={css.blueButton} {...props}>
    {props.children}
  </button>;

// BlueButton.propTypes = {
//   children: PropTypes.string
// };

export default BlueButton;