import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './blueButton.css';

const BlueButton = props =>
  <button className={classNames({
    [css.blueButton]: true,
    [css.disabledButton]: props.disabled
  })} {...props}>
    {props.children}
  </button>;

BlueButton.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool
};

export default BlueButton;