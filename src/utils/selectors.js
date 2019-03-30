import { createSelector } from 'reselect';

import * as constants from '../constants';

export const getCalculator = state => state.calculator;

export const getFutureProjections = createSelector(
  getCalculator,
  calculator => calculator[constants.TITLE_FUTURE_PROJECTIONS]
);

export const getFutureProjectionsInputs = createSelector(
  getFutureProjections,
  futureProjections => futureProjections.inputs
);

export const getAnnualConstantExpensesGrowth = createSelector(
  getFutureProjectionsInputs,
  futureProjectionsInputs => {
    const annualConstantExpensesGrowth = futureProjectionsInputs[
      constants.INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
    ];

    return annualConstantExpensesGrowth
      ? parseFloat(annualConstantExpensesGrowth)
      : 0;
  }
);