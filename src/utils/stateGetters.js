import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_INTEREST_RATE,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_MORTGAGE,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../constants';

export const getAnnualConstantExpensesGrowth = state => {
  const futureProjections = state.calculator[TITLE_FUTURE_PROJECTIONS];
  const annualConstantExpensesGrowth = futureProjections.inputs[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ];
  return annualConstantExpensesGrowth
    ? parseFloat(annualConstantExpensesGrowth)
    : 0;
};

export const getAfterRepairValue = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const propertyValue = initialPurchase.inputs[INPUT_ID_AFTER_REPAIR_VALUE];
  return propertyValue
    ? parseFloat(propertyValue, NUMBER_SYSTEM_DECIMAL)
    : 0;
};

export const getAnnualPropertyValueGrowth = state => {
  const futureProjections = state.calculator[TITLE_FUTURE_PROJECTIONS];

  const annualPropertyValueGrowth = futureProjections.inputs[
    INPUT_ID_PROPERTY_VALUE_GROWTH
  ];
  return annualPropertyValueGrowth
    ? parseFloat(annualPropertyValueGrowth)
    : 0;
};

export const getAnnualIncomeGrowth = state => {
  const futureProjections = state.calculator[TITLE_FUTURE_PROJECTIONS];

  const annualIncomeGrowth = futureProjections.inputs[INPUT_ID_ANNUAL_INCOME_GROWTH];
  return annualIncomeGrowth
    ? parseFloat(annualIncomeGrowth)
    : 0;
};

export const getAmortizationPeriod = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const amortizationPeriod = initialPurchase.inputs[INPUT_ID_AMORTIZATION_PERIOD];
  return amortizationPeriod
    ? parseInt(amortizationPeriod)
    : 0;
};

export const getDownPayment = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const downPayment = initialPurchase.inputs[INPUT_ID_DOWN_PAYMENT];
  return downPayment
    ? parseFloat(downPayment)
    : 0;
};

export const getRepairCosts = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const repairCosts = initialPurchase.inputs[INPUT_ID_REPAIR_COSTS];
  return repairCosts
    ? parseFloat(repairCosts)
    : 0;
};

export const getClosingCosts = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const closingCosts = initialPurchase.inputs[INPUT_ID_CLOSING_COSTS];
  return closingCosts
    ? parseFloat(closingCosts)
    : 0;
};

export const getOtherInitialCosts = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const otherCosts = initialPurchase.inputs[INPUT_ID_OTHER_INITIAL_COSTS];
  return otherCosts
    ? parseFloat(otherCosts)
    : 0;
};

export const getInitialPurchasePrice = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const purchasePrice = initialPurchase.inputs[INPUT_ID_PURCHASE_PRICE];
  return purchasePrice
    ? parseFloat(purchasePrice)
    : 0;
};

export const getMonthlyMortgage = state => {
  const monthlyExpenses = state.calculator[TITLE_MONTHLY_EXPENSES];

  const monthlyMortgage = monthlyExpenses.inputs[INPUT_ID_MORTGAGE];
  return monthlyMortgage
    ? parseFloat(monthlyMortgage)
    : 0;
};

export const getInterestRate = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const interestRate = initialPurchase.inputs[INPUT_ID_INTEREST_RATE];
  return interestRate
    ? parseFloat(interestRate)
    : 0;
};

export const getInitialLoanAmount = state => {
  const initialPurchase = state.calculator[TITLE_INITIAL_PURCHASE];

  const initialLoanAmount = initialPurchase.inputs[INPUT_ID_LOAN_AMOUNT];
  return initialLoanAmount
    ? parseFloat(initialLoanAmount)
    : 0;
};

export const getMonthlyIncome = state => (
  state.calculator[TITLE_MONTHLY_INCOME]
);

export const getMonthlyExpenses = state => (
  state.calculator[TITLE_MONTHLY_EXPENSES]
);