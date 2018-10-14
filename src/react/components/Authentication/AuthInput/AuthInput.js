import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../authentication.css';

const AuthInput = ({
  error,
  handleChange,
  label,
  name,
  placeholder,
  type,
  value
}) => {
  return (
    <div className={css.authInput}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={classNames({
          isInvalid: error
        })} />
      {
        error &&
          (<div className={css.invalidMessage}>{error}</div>)
      }
    </div>
  );
};

AuthInput.propTypes = {
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

AuthInput.defaultProps = {
  type: 'text'
};

export default AuthInput;