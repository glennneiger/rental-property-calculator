import { connect } from 'react-redux'

import YearResult from './YearResult'
import {
  CALCULATOR_FIELDS,
  RESULTS_CASH_FLOW,
  RESULTS_CASH_ON_CASH_RETURN,
  RESULTS_PROPERTY_VALUE,
  RESULTS_EQUITY,
  RESULTS_RETURN_ON_EQUITY,
  RESULTS_RETURN_ON_INVESTMENT,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  TITLE_MONTHLY_EXPENSES,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_MONTHLY_INCOME,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_INTEREST_RATE
} from '../../../constants'
import {
  calculateYearCashFlow as calculateYearCashFlowUtil,
  calculateMortgageForYear as calculateMortgageForYearUtil,
  calculateIncomeForYear as calculateIncomeForYearUtil,
  calculatePercentageExpensesForYear as calculatePercentageExpensesForYearUtil,
  calculateConstantExpensesForYear as calculateConstantExpensesForYearUtil,
  calculateExpensesForYear as calculateExpensesForYearUtil,
  calculateCashOnCashReturn as calculateCashOnCashReturnUtil,
  calculateInitialInvestment as calculateInitialInvestmentUtil,
  calculatePropertyValueForYear as calculatePropertyValueForYearUtil,
  calculateEquityForYear as calculateEquityForYearUtil,
  calculateRemainingLoanBalanceForYear as calculateRemainingLoanBalanceForYearUtil,
  calculateInitialEquity as calculateInitialEquityUtil,
  calculateReturnOnEquityForYear as calculateReturnOnEquityForYearUtil,
  calculateReturnOnInvestmentForYear as calculateReturnOnInvestmentForYearUtil
} from '../../../utils/calculationUtils'

const calculatePercentageExpensesForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const futureProjections = calculatorFields[TITLE_FUTURE_PROJECTIONS]
  const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
  const annualPVGrowth = futureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
  const monthlyIncome = calculatorFields[TITLE_MONTHLY_INCOME]
  const monthlyExpenses = calculatorFields[TITLE_MONTHLY_EXPENSES]
  const propertyValue = calculatorFields[
    TITLE_INITIAL_PURCHASE
  ][INPUT_ID_AFTER_REPAIR_VALUE]
  return calculatePercentageExpensesForYearUtil(
    annualIncomeGrowth,
    annualPVGrowth,
    monthlyIncome,
    monthlyExpenses,
    propertyValue,
    year
  )
}

const calculateConstantExpensesForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const futureProjections = calculatorFields[TITLE_FUTURE_PROJECTIONS]

  const monthlyExpenses = calculatorFields[TITLE_MONTHLY_EXPENSES]
  const annualConstantExpensesGrowth = futureProjections[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ]
  return calculateConstantExpensesForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  )
}

const calculateExpensesForYear = (state, year) => {
  const percentageExpensesForYear = calculatePercentageExpensesForYear(
    state,
    year
  )
  const constantExpensesForYear = calculateConstantExpensesForYear(
    state,
    year
  )
  return calculateExpensesForYearUtil(
    constantExpensesForYear,
    percentageExpensesForYear
  )
}

const calculateIncomeForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const monthlyIncome = calculatorFields[TITLE_MONTHLY_INCOME]
  const annualIncomeGrowth = calculatorFields[
    TITLE_FUTURE_PROJECTIONS
  ][INPUT_ID_ANNUAL_INCOME_GROWTH]
  return calculateIncomeForYearUtil(
    year,
    monthlyIncome,
    annualIncomeGrowth
  )
}

const calculateMortgageForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const annualConstantExpensesGrowth = calculatorFields[
    TITLE_FUTURE_PROJECTIONS
  ][INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]
  const monthlyExpenses = calculatorFields[TITLE_MONTHLY_EXPENSES]
  return calculateMortgageForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  )
}

/* Cash flow = Income - Expenses */
const calculateCashFlowForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const amortizationPeriod = calculatorFields[
    TITLE_INITIAL_PURCHASE
  ][INPUT_ID_AMORTIZATION_PERIOD]
  const incomeForYear = calculateIncomeForYear(state, year)
  const expensesForYear = calculateExpensesForYear(state, year)

  let yearCashFlow = calculateYearCashFlowUtil(
    incomeForYear,
    expensesForYear
  )
  if (year > amortizationPeriod) {
    yearCashFlow += calculateMortgageForYear(state, year)
  }
  return yearCashFlow
}

/* Initial investment =
  down payment + repair costs + closing costs + other initial costs */
const calculateInitialInvestment = state => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const initialPurchase = calculatorFields[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
  const repairCosts = initialPurchase[INPUT_ID_REPAIR_COSTS]
  const closingCosts = initialPurchase[INPUT_ID_CLOSING_COSTS]
  const otherCosts = initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]

  return calculateInitialInvestmentUtil(
    downPayment,
    repairCosts,
    closingCosts,
    otherCosts
  )
}

/* Cash on cash return = (cash flow / initialInvestment) * 100% */
const calculateCashOnCashReturnForYear = (state, year) => {
  const yearCashFlow = calculateCashFlowForYear(state, year)
  const initialInvestment = calculateInitialInvestment(state)
  return calculateCashOnCashReturnUtil(
    yearCashFlow,
    initialInvestment
  )
}

const calculatePropertyValueForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]

  const propertyValue = calculatorFields[
    TITLE_INITIAL_PURCHASE
  ][INPUT_ID_AFTER_REPAIR_VALUE]
  const annualPVGrowth = calculatorFields[
    TITLE_FUTURE_PROJECTIONS
  ][INPUT_ID_PROPERTY_VALUE_GROWTH]
  return calculatePropertyValueForYearUtil(
    propertyValue,
    annualPVGrowth,
    year
  )
}

const calculateRemainingLoanBalanceForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const initialPurchase = calculatorFields[TITLE_INITIAL_PURCHASE]

  const initialLoanAmount = initialPurchase[INPUT_ID_LOAN_AMOUNT]
  const interestRate = initialPurchase[INPUT_ID_INTEREST_RATE]
  const amortizationPeriod = initialPurchase[INPUT_ID_AMORTIZATION_PERIOD]

  return calculateRemainingLoanBalanceForYearUtil(
    initialLoanAmount,
    interestRate,
    amortizationPeriod,
    year
  )
}

/* Initial equity = down payment + after repair value + purchase price */
const calculateInitialEquity = state => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const initialPurchase = calculatorFields[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
  const afterRepairValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]

  return calculateInitialEquityUtil(
    downPayment,
    afterRepairValue,
    purchasePrice
  )
}

const calculateEquityForYear = (state, year) => {
  const calculatorFields = state[CALCULATOR_FIELDS]
  const initialPurchase = calculatorFields[TITLE_INITIAL_PURCHASE]
  const initialEquity = calculateInitialEquity(state)
  const amortizationPeriod = initialPurchase[INPUT_ID_AMORTIZATION_PERIOD]
  if (year === 0) {
    return initialEquity
  }
  if (year >= amortizationPeriod) {
    return calculatePropertyValueForYear(state, year)
  }
  const propertyValueForYear = calculatePropertyValueForYear(state, year)
  const initialPropertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  const loanAmount = initialPurchase[INPUT_ID_LOAN_AMOUNT]
  const remainingBalance = calculateRemainingLoanBalanceForYear(state, year)

  return calculateEquityForYearUtil(
    initialEquity,
    propertyValueForYear,
    initialPropertyValue,
    loanAmount,
    remainingBalance
  )
}

const calculateReturnOnEquityForYear = (state, year) => {
  const cashFlowForYear = calculateCashFlowForYear(state, year)
  const equityForYear = calculateEquityForYear(state, year)

  return calculateReturnOnEquityForYearUtil(
    cashFlowForYear,
    equityForYear
  )
}

const calculateReturnOnInvestmentForYear = (state, year) => {
  const cashFlowForYear = parseFloat(calculateCashFlowForYear(state, year))
  const equityCurrentYear = parseFloat(calculateEquityForYear(state, year))
  const equityPreviousYear = parseFloat(calculateEquityForYear(state, year - 1))
  const equityGainedForYear = equityCurrentYear - equityPreviousYear
  const initialInvestment = parseFloat(calculateInitialInvestment(state))

  return calculateReturnOnInvestmentForYearUtil(
    cashFlowForYear,
    equityGainedForYear,
    initialInvestment
  )
}

const mapStateToProps = (state, ownProps) => {
  const year = ownProps.year
  return {
    result: {
      [RESULTS_CASH_FLOW]: calculateCashFlowForYear(state, year),
      [RESULTS_CASH_ON_CASH_RETURN]: calculateCashOnCashReturnForYear(
        state,
        year
      ),
      [RESULTS_PROPERTY_VALUE]: calculatePropertyValueForYear(state, year),
      [RESULTS_EQUITY]: calculateEquityForYear(state, year),
      [RESULTS_RETURN_ON_EQUITY]: calculateReturnOnEquityForYear(state, year),
      [RESULTS_RETURN_ON_INVESTMENT]: calculateReturnOnInvestmentForYear(
        state,
        year
      )
    }
  }
}

export default connect(
  mapStateToProps
)(YearResult)