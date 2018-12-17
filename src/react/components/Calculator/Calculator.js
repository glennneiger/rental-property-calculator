import React from 'react';
import PropTypes from 'prop-types';

import Result from '../Result';
import CalculatorInputSection from '../CalculatorInputSection';
import CalculatorInput from '../CalculatorInput';
import {
  inputSectionData
} from './childProps';
import css from './calculator.css';
import classNames from 'classnames';

const Calculator = ({
  sidebarVisible
}) => (
  <div className={classNames({
    [css.calculator]: true,
    [css.calculatorWithSidebar]: sidebarVisible
  })}>
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
  sidebarVisible: PropTypes.bool.isRequired
};

export default Calculator;