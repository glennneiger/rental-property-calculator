import React from 'react';
import PropTypes from 'prop-types';

import Result from '../Result';
import CalculatorInputSection from '../CalculatorInputSection';
import CalculatorInput from '../CalculatorInput';
import {
  inputSectionData
} from './childProps';
import css from './calculator.css';

const Calculator = () => (
  <div className={css.calculator}>
    {inputSectionData.map(section => (
      <div key={section.title}>
        <CalculatorInputSection
          title={section.title}>
          {section.childProps.map(props => (
            <CalculatorInput
              key={props.inputId}
              {...props}
              section={section.title}
            />
          ))}
        </CalculatorInputSection>
        {<div className={css.divider} />}
      </div>
    ))}
    <Result />
  </div>
);

Calculator.propTypes = {
  sidebarVisible: PropTypes.sidebarVisible
};

export default Calculator;