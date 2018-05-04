import {
  MONTHS_PER_YEAR,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL
} from '../constants'
import { incomeInputProps } from '../react/components/App/childProps'

const makeValidGrowthRate = growthRate => (
  growthRate
    ? parseInt(growthRate, NUMBER_SYSTEM_DECIMAL)
    : 0
)

export const getCompoundedValue = (initialValue, annualGrowthRate, years) => {
  const validatedAnnualGrowthRate = makeValidGrowthRate(annualGrowthRate)
  return Math.round(initialValue *
    Math.pow(
      1 + (validatedAnnualGrowthRate / 100),
      years
    )
  )
}

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

export const calculateInitialPropertyValue = inputContent => {
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

export const calculateIncomeForYear = (
  year,
  monthlyIncome,
  annualIncomeGrowth
) => {
  let incomeForYear = calculateInitialYearlyIncome(monthlyIncome)
  incomeForYear = getCompoundedValue(
    incomeForYear,
    annualIncomeGrowth,
    year
  )
  return incomeForYear
}