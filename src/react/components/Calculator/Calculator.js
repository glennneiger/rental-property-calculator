import React from 'react';

import Result from '../Result';
import CalculatorInputSection from '../CalculatorInputSection';
import CalculatorInput from '../CalculatorInput';
import {
  inputSectionData
} from './childProps';
import css from './calculator.css';

const Calculator = () => (
  <div className={css.calculator}>
    {inputSectionData.map((section, index) => (
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
        {
          index !== section.childProps.length - 1
            ? <div className={css.divider} />
            : null
        }
      </div>
    ))}
    <Result />
  </div>
);

export default Calculator;