import {
  MONTHS_PER_YEAR,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  NUMBER_SYSTEM_DECIMAL
} from '../constants'
import { incomeInputProps } from '../react/components/App/childProps'

export const getCompoundedValue = (initialValue, annualGrowthRate, years) => (
  Math.round(initialValue *
    Math.pow(
      1 + (annualGrowthRate / 100),
      years
    )
  )
)

export const calculatePercentOfPropertyValueMonthly = (
  percent,
  propertyValue
) =>
  percent * propertyValue / (100 * MONTHS_PER_YEAR)

export const calculatePercentOfRentalIncomeMonthly = (
  percent,
  monthlyRentalIncome
) =>
  percent * monthlyRentalIncome / 100

export const getInitialPropertyValue = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  let propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  return propertyValue ? parseInt(propertyValue, NUMBER_SYSTEM_DECIMAL) : 0
}

//* ******************** */
const calculateInitialYearlyIncome = monthlyIncome => {
  const initialYearlyIncome = incomeInputProps.reduce((total, current) => {
    const income = monthlyIncome[current.inputId]
    return total + +income
  }, 0)
  return parseInt(initialYearlyIncome, NUMBER_SYSTEM_DECIMAL)
}

const calculateAnnualIncomeGrowth = futureProjections => {
  const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
  return annualIncomeGrowth
    ? parseInt(annualIncomeGrowth, NUMBER_SYSTEM_DECIMAL)
    : 0
}

export const calculateIncomeForYear = (
  year,
  monthlyIncome,
  futureProjections
) => {
  let incomeForYear = calculateInitialYearlyIncome(monthlyIncome)

  const annualIncomeGrowth = calculateAnnualIncomeGrowth(futureProjections)
  return getCompoundedValue(
    incomeForYear,
    annualIncomeGrowth,
    year
  )
}