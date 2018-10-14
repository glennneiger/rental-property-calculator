import React from 'react';
import PropTypes from 'prop-types';

import css from './calculatorInputSection.css';

const CalculatorInputSection = ({
  children,
  title
}) => (
  <div className={css.calculatorInputSection} >
    <h2>{title}</h2>
    <div className={css.inputs}>
      {children}
    </div>
  </div>
);

CalculatorInputSection.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default CalculatorInputSection;