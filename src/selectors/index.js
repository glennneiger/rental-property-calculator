import {
  calculatorFieldsSelectorFactory,
  calculatorSectionsSelectorFactory
} from './selectorFactory';
import * as constants from '../constants';

export const getMonthlyIncome = state => calculatorSectionsSelectorFactory(
  state
)(
  constants.TITLE_MONTHLY_INCOME
);

export const getMonthlyExpenses = state => calculatorSectionsSelectorFactory(
  state
)(
  constants.TITLE_MONTHLY_EXPENSES
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

export const getRepairCosts = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_REPAIR_COSTS
);

export const getClosingCosts = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_CLOSING_COSTS
);

export const getOtherInitialCosts = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_OTHER_INITIAL_COSTS
);

export const getInitialPurchasePrice = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_PURCHASE_PRICE
);

export const getMonthlyMortgage = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_MONTHLY_EXPENSES,
  constants.INPUT_ID_MORTGAGE
);

export const getInterestRate = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_INTEREST_RATE
);

export const getInitialLoanAmount = state => calculatorFieldsSelectorFactory(
  state
)(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_LOAN_AMOUNT
);
