import {
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_OTHER_INITIAL_COSTS
} from '../constants'

export const getAnnualConstantExpensesGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualConstantExpensesGrowth = futureProjections[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ]
  return annualConstantExpensesGrowth
}

export const getInitialPropertyValue = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  return propertyValue ? parseInt(propertyValue, NUMBER_SYSTEM_DECIMAL) : 0
}

export const getAnnualPropertyValueGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  return futureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
}

export const getAnnualIncomeGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  return futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
}

export const getAmortizationPeriod = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  return initialPurchase[INPUT_ID_AMORTIZATION_PERIOD]
}

export const getDownPayment = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]
  return initialPurchase[INPUT_ID_DOWN_PAYMENT]
}

export const getRepairCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]
  return initialPurchase[INPUT_ID_REPAIR_COSTS]
}

export const getClosingCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]
  return initialPurchase[INPUT_ID_CLOSING_COSTS]
}

export const getOtherCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]
  return initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]
}