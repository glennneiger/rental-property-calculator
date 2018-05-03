import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  MONTHS_PER_YEAR,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../constants'

import {
  expensesInputProps,
  incomeInputProps
} from '../react/components/App/childProps'

export const getCompoundedValue = (initialValue, annualGrowthRate, years) => {
  if (typeof initialValue !== 'number'
    || typeof annualGrowthRate !== 'number'
    || typeof years !== 'number'
    ) {
    throw new TypeError(`${ getCompoundedValue.name } requires numbers as inputs.`)
  }
  return Math.round(initialValue *
    Math.pow(
      1 + (annualGrowthRate / 100),
      years
    )
  )
}

export const getPercentOfPropertyValueMonthly = (percent, propertyValue) => {
  if (percent.constructor === Array
    || percent === null
    || propertyValue.constructor === Array
    || propertyValue === null
  ) {
    throw new TypeError(`${ getPercentOfPropertyValueMonthly.name } requires numbers as inputs.`)
  }
  if (percent != parseInt(percent, NUMBER_SYSTEM_DECIMAL) || propertyValue != parseInt(propertyValue, NUMBER_SYSTEM_DECIMAL)) {
    throw new TypeError(`${ getPercentOfPropertyValueMonthly.name } requires numbers as inputs.`)
  }
  if (percent <= 0 || propertyValue <= 0) {
    return 0
  }
  return parseFloat((percent * propertyValue / (100 * MONTHS_PER_YEAR)).toFixed(2))
}

export const getPercentOfRentalIncomeMonthly = (percent, monthlyRentalIncome) => {
  if (percent.constructor === Array
    || percent === null
    || monthlyRentalIncome.constructor === Array
    || monthlyRentalIncome === null
  ) {
    throw new TypeError(`${ getPercentOfRentalIncomeMonthly.name } requires numbers as inputs.`)
  }
  if (percent != parseInt(percent, NUMBER_SYSTEM_DECIMAL) || monthlyRentalIncome != parseInt(monthlyRentalIncome, NUMBER_SYSTEM_DECIMAL)) {
    throw new TypeError(`${ getPercentOfRentalIncomeMonthly.name } requires numbers as inputs.`)
  }
  if (percent <= 0 || monthlyRentalIncome <= 0) {
    return 0
  }
  return parseFloat((percent * monthlyRentalIncome / 100).toFixed(2))
}

export const getInitialPropertyValue = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  let propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  return propertyValue ? parseInt(propertyValue, NUMBER_SYSTEM_DECIMAL) : 0
}

export const getAnnualPropertyValueGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualPVGrowth = futureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
  return annualPVGrowth ? parseInt(annualPVGrowth, NUMBER_SYSTEM_DECIMAL) : 0
}

export const getAnnualIncomeGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
  return annualIncomeGrowth
    ? parseInt(annualIncomeGrowth, NUMBER_SYSTEM_DECIMAL)
    : 0
}

export const getInitialYearlyIncome = inputContent => {
  const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]

  const initialYearlyIncome = incomeInputProps.reduce((total, current) => {
    const income = monthlyIncome[current.inputId]
    return total + +income
  }, 0)
  return parseInt(initialYearlyIncome, NUMBER_SYSTEM_DECIMAL)
}

export const getIncomeForYear = (inputContent, year) => {
  let incomeForYear = getInitialYearlyIncome(inputContent)

  const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
  return getCompoundedValue(
    incomeForYear,
    annualIncomeGrowth,
    year
  )
}

export const getAnnualConstantExpensesGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualConstantExpensesGrowth = futureProjections[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ]
  return annualConstantExpensesGrowth ?
    parseInt(annualConstantExpensesGrowth, NUMBER_SYSTEM_DECIMAL)
    : 0
}

export const getInitialYearlyConstantExpenses = inputContent => {
  const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]

  const constantExpensesForYear = expensesInputProps
    .reduce((total, current) => {
      let expense = monthlyExpenses[current.inputId]
      if (current.percentOfRent || current.percentOfPropertyValue) {
        expense = 0
      }
      return total + +expense
    }, 0)
  return parseInt(constantExpensesForYear, NUMBER_SYSTEM_DECIMAL)
}

/* Initial equity = down payment + after repair value + purchase price */
export const getInitialEquity = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
  const afterRepairValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]

  return +downPayment + (+afterRepairValue - +purchasePrice)
}

/* Initial investment =
    down payment + repair costs + closing costs + other initial costs */
export const getInitialInvestment = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
  const repairCosts = initialPurchase[INPUT_ID_REPAIR_COSTS]
  const closingCosts = initialPurchase[INPUT_ID_CLOSING_COSTS]
  const otherCosts = initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]

  return +downPayment + +repairCosts + +closingCosts + +otherCosts
}