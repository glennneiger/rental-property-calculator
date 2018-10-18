import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './calculatorInput.css';
import TextInput from '../TextInput';
import { INPUT_ID_AMORTIZATION_PERIOD } from '../../../constants';

class CalculatorInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      inputId,
      inputType,
      section,
      setChangesMade,
      updateInput
    } = this.props;

    const value = event.target.value;
    if (inputType === 'number' && !value.match(/^\d*\.?\d{0,2}$/)) {
      return;
    }
    if (inputId === INPUT_ID_AMORTIZATION_PERIOD && value.length > 3) {
      return;
    }
    updateInput(value, section, inputId);
    setChangesMade(true);
  }

  render() {
    const {
      content,
      inputId,
      label,
      sidebarVisible,
      textInputWidth
    } = this.props;
    return (
      <div className={classNames({
        [css.calculatorInput]: true,
        [css.calculatorInputNoSidebar]: !sidebarVisible,
        [css.calculatorInputWithSidebar]: sidebarVisible
      })}>
        <label htmlFor={inputId}>{label}</label>
        <TextInput type={'text'}
          id={inputId}
          style={{ width: textInputWidth }}
          value={content}
          onChange={this.handleChange}
          width={textInputWidth}
        />
      </div>
    );
  }
}

CalculatorInput.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  setChangesMade: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
  textInputWidth: PropTypes.number,
  updateInput: PropTypes.func.isRequired
};

export default CalculatorInput;