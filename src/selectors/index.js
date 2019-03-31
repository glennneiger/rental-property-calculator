import {
  calculatorFieldsSelectorFactory,
  calculatorSectionsSelectorFactory
} from './selectorFactories';
import * as constants from '../constants';

export const getMonthlyIncome = state => calculatorSectionsSelectorFactory(
  constants.TITLE_MONTHLY_INCOME
)(
  state
);

export const getMonthlyExpenses = state => calculatorSectionsSelectorFactory(
  constants.TITLE_MONTHLY_EXPENSES
)(
  state
);

export const getAnnualConstantExpensesGrowth = state =>
  calculatorFieldsSelectorFactory(
    constants.TITLE_FUTURE_PROJECTIONS,
    constants.INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  )(
    state
  );

export const getAfterRepairValue = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_AFTER_REPAIR_VALUE,
  val => parseFloat(val, constants.NUMBER_SYSTEM_DECIMAL)
)(
  state
);

export const getAnnualPropertyValueGrowth = state => calculatorFieldsSelectorFactory(
  constants.TITLE_FUTURE_PROJECTIONS,
  constants.INPUT_ID_PROPERTY_VALUE_GROWTH
)(
  state
);

export const getAnnualIncomeGrowth = state => calculatorFieldsSelectorFactory(
  constants.TITLE_FUTURE_PROJECTIONS,
  constants.INPUT_ID_ANNUAL_INCOME_GROWTH
)(
  state
);

export const getAmortizationPeriod = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_AMORTIZATION_PERIOD,
  parseInt
)(
  state
);

export const getDownPayment = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_DOWN_PAYMENT
)(
  state
);

export const getRepairCosts = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_REPAIR_COSTS
)(
  state
);

export const getClosingCosts = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_CLOSING_COSTS
)(
  state
);

export const getOtherInitialCosts = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_OTHER_INITIAL_COSTS
)(
  state
);

export const getInitialPurchasePrice = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_PURCHASE_PRICE
)(
  state
);

export const getMonthlyMortgage = state => calculatorFieldsSelectorFactory(
  constants.TITLE_MONTHLY_EXPENSES,
  constants.INPUT_ID_MORTGAGE
)(
  state
);

export const getInterestRate = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_INTEREST_RATE
)(
  state
);

export const getInitialLoanAmount = state => calculatorFieldsSelectorFactory(
  constants.TITLE_INITIAL_PURCHASE,
  constants.INPUT_ID_LOAN_AMOUNT
)(
  state
);
