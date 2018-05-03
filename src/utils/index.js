import {
  MONTHS_PER_YEAR,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_FUTURE_PROJECTIONS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  TITLE_MONTHLY_INCOME
} from '../constants'

import {
  incomeInputProps
} from '../react/components/App/childProps'

export const getCompoundedValue = (initialValue, annualGrowthRate, years) =>
  Math.round(initialValue *
    Math.pow(
      1 + (annualGrowthRate / 100),
      years
    )
  )

export const getPercentOfPropertyValueMonthly = (percent, propertyValue) =>
  percent * propertyValue / (100 * MONTHS_PER_YEAR)

export const getPercentOfRentalIncomeMonthly = (percent, monthlyRentalIncome) =>
  percent * monthlyRentalIncome / 100

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