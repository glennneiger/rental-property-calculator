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
  TITLE_MONTHLY_EXPENSES
} from '../constants'

export const getAnnualConstantExpensesGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]
  const annualConstantExpensesGrowth = futureProjections[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ]
  return annualConstantExpensesGrowth
    ? parseFloat(annualConstantExpensesGrowth)
    : 0
}

export const getAfterRepairValue = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  return propertyValue
    ? parseFloat(propertyValue, NUMBER_SYSTEM_DECIMAL)
    : 0
}

export const getAnnualPropertyValueGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualPropertyValueGrowth = futureProjections[
    INPUT_ID_PROPERTY_VALUE_GROWTH
  ]
  return annualPropertyValueGrowth
    ? parseFloat(annualPropertyValueGrowth)
    : 0
}

export const getAnnualIncomeGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
  return annualIncomeGrowth
    ? parseFloat(annualIncomeGrowth)
    : 0
}

export const getAmortizationPeriod = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const amortizationPeriod = initialPurchase[INPUT_ID_AMORTIZATION_PERIOD]
  return amortizationPeriod
    ? parseInt(amortizationPeriod)
    : 0
}

export const getDownPayment = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
  return downPayment
    ? parseFloat(downPayment)
    : 0
}

export const getRepairCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const repairCosts = initialPurchase[INPUT_ID_REPAIR_COSTS]
  return repairCosts
    ? parseFloat(repairCosts)
    : 0
}

export const getClosingCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const closingCosts = initialPurchase[INPUT_ID_CLOSING_COSTS]
  return closingCosts
    ? parseFloat(closingCosts)
    : 0
}

export const getOtherInitialCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const otherCosts = initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]
  return otherCosts
    ? parseFloat(otherCosts)
    : 0
}

export const getPurchasePrice = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]
  return purchasePrice
    ? parseFloat(purchasePrice)
    : 0
}

export const getMonthlyMortgage = inputContent => {
  const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]

  const monthlyMortgage = monthlyExpenses[INPUT_ID_MORTGAGE]
  return monthlyMortgage
    ? parseFloat(monthlyMortgage)
    : 0
}

export const getInterestRate = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const interestRate = initialPurchase[INPUT_ID_INTEREST_RATE]
  return interestRate
    ? parseFloat(interestRate)
    : 0
}

export const getInitialLoanAmount = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const initialLoanAmount = initialPurchase[INPUT_ID_LOAN_AMOUNT]
  return initialLoanAmount
    ? parseFloat(initialLoanAmount)
    : 0
}