import {
  MONTHS_PER_YEAR,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_MONTHLY_EXPENSES
} from '../constants'
import {
  expensesInputProps,
  incomeInputProps
} from '../react/components/App/childProps'
import {
  getAnnualConstantExpensesGrowth, getAnnualPropertyValueGrowth
} from './stateGetters'

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

export const calculateInitialYearlyConstantExpenses = monthlyExpenses => {
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

export const calculateConstantExpensesForYear = (
  annualConstantExpensesGrowth,
  monthlyExpenses,
  year
) => {
  const initialConstantExpenses = calculateInitialYearlyConstantExpenses(
    monthlyExpenses
  )
  const constantExpensesForYear = getCompoundedValue(
    initialConstantExpenses,
    annualConstantExpensesGrowth,
    year
  )
  return parseInt(constantExpensesForYear, NUMBER_SYSTEM_DECIMAL)
}

export const calculatePropertyValueForYear = (
  initialPropertyValue,
  annualPVGrowth,
  year
) => {
  return getCompoundedValue(
    initialPropertyValue,
    annualPVGrowth,
    year
  )
}

export const calculatePercentageExpensesForYear = (
  annualIncomeGrowth,
  annualPVGrowth,
  monthlyIncome,
  monthlyExpenses,
  initialPropertyValue,
  year
) => {
  const percentageExpensesForYear = expensesInputProps
    .reduce((total, current) => {
      let expense = 0
      if (current.percentOfRent) {
        expense = calculatePercentOfRentalIncomeMonthly(
          monthlyExpenses[current.inputId],
          calculateIncomeForYear(year, monthlyIncome, annualIncomeGrowth)
        )
      } else if (current.percentOfPropertyValue) {
        expense = calculatePercentOfPropertyValueMonthly(
          monthlyExpenses[current.inputId],
          calculatePropertyValueForYear(initialPropertyValue, annualPVGrowth, year)
        )
      }
      return total + +expense
    }, 0)
  return parseInt(percentageExpensesForYear, NUMBER_SYSTEM_DECIMAL)
}