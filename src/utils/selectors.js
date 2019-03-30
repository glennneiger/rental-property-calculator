import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

import * as constants from '../constants';

export const getCalculator = state => state.calculator;

const calculatorFieldsSelectorFactory = createSelector(
  getCalculator,
  calculator => memoize(
    (sectionId, inputId, parseFunc = parseFloat) => {
      const section = calculator[sectionId];
      const inputVal = section.inputs[inputId];

      return inputVal
        ? parseFunc(inputVal)
        : 0;
    }, (...args) => {
      const [sectionId, inputId] = args;
      const cacheKey = sectionId + '-' + inputId;
      return cacheKey;
    }
  )
);

export const getAnnualConstantExpensesGrowth = state =>
  calculatorFieldsSelectorFactory(
    state
  )(
    constants.TITLE_FUTURE_PROJECTIONS,
    constants.INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  );

export const getAfterRepairValue = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_AFTER_REPAIR_VALUE,
  val => parseFloat(val, constants.NUMBER_SYSTEM_DECIMAL)
);

export const getAnnualPropertyValueGrowth = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_FUTURE_PROJECTIONS,
  constants.INPUT_ID_PROPERTY_VALUE_GROWTH
);

export const getAnnualIncomeGrowth = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_FUTURE_PROJECTIONS,
  constants.INPUT_ID_ANNUAL_INCOME_GROWTH
);

export const getAmortizationPeriod = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_AMORTIZATION_PERIOD,
  parseInt
);

export const getDownPayment = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_DOWN_PAYMENT
);