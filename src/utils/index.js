import {
  MONTHS_PER_YEAR,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL
} from '../constants'

export const getCompoundedValue = (initialValue, annualGrowthRate, years) => (
  Math.round(initialValue *
    Math.pow(
      1 + (annualGrowthRate / 100),
      years
    )
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