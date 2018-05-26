import React from 'react'
import PropTypes from 'prop-types'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  inputSectionData
} from './childProps'
import './calculator.css'
import {
  RESULTS_CASH_FLOW,
  RESULTS_CASH_ON_CASH_RETURN,
  RESULTS_EQUITY,
  RESULTS_PROPERTY_VALUE,
  RESULTS_RETURN_ON_EQUITY,
  RESULTS_RETURN_ON_INVESTMENT,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../../constants'
import {
  calculateCashOnCashReturn as calculateCashOnCashReturnUtil,
  calculateConstantExpensesForYear as calculateConstantExpensesForYearUtil,
  calculateEquityForYear as calculateEquityForYearUtil,
  calculateExpensesForYear as calculateExpensesForYearUtil,
  calculateIncomeForYear as calculateIncomeForYearUtil,
  calculateInitialEquity as calculateInitialEquityUtil,
  calculateInitialInvestment as calculateInitialInvestmentUtil,
  calculateMonthlyMortgagePayment as calculateMonthlyMortgagePaymentUtil,
  calculateMortgageForYear as calculateMortgageForYearUtil,
  calculatePercentageExpensesForYear as calculatePercentageExpensesForYearUtil,
  calculatePropertyValueForYear as calculatePropertyValueForYearUtil,
  calculateRemainingLoanBalanceForYear as calculateRemainingLoanBalanceForYearUtil,
  calculateReturnOnEquityForYear as calculateReturnOnEquityForYearUtil,
  calculateReturnOnInvestmentForYear as calculateReturnOnInvestmentForYearUtil,
  calculateYearCashFlow as calculateYearCashFlowUtil
} from '../../../utils/calculationUtils'
import {
  getAfterRepairValue,
  getAmortizationPeriod,
  getAnnualConstantExpensesGrowth,
  getAnnualIncomeGrowth,
  getAnnualPropertyValueGrowth,
  getClosingCosts,
  getDownPayment,
  getInitialLoanAmount,
  getInterestRate,
  getOtherInitialCosts,
  getPurchasePrice,
  getRepairCosts
} from '../../../utils/stateGetters'
import {
  getYearsForResults
} from '../../../utils/resultsUtils'

const Calculator = ({

}) => {
  // const calculateResults = () => {
  //   let results = {}
  //   const yearsToShow = getYearsForResults(
  //     getAmortizationPeriod(this.state.inputContent)
  //   )
  //   yearsToShow.map(year => {
  //     results[year] = {
  //       [RESULTS_CASH_FLOW]: calculateCashFlowForYear(year),
  //       [RESULTS_CASH_ON_CASH_RETURN]: calculateCashOnCashReturnForYear(
  //         year
  //       ),
  //       [RESULTS_PROPERTY_VALUE]: calculatePropertyValueForYear(year),
  //       [RESULTS_EQUITY]: calculateEquityForYear(year),
  //       [RESULTS_RETURN_ON_EQUITY]: calculateReturnOnEquityForYear(year),
  //       [RESULTS_RETURN_ON_INVESTMENT]: calculateReturnOnInvestmentForYear(
  //         year
  //       )
  //     }
  //   })
  //   return results
  // }
  // const calculateMortgageForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(
  //     inputContent
  //   )
  //   const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
  //   return calculateMortgageForYearUtil(
  //     annualConstantExpensesGrowth,
  //     monthlyExpenses,
  //     year
  //   )
  // }
  // const calculateMonthlyMortgagePayment = () => {
  //   const inputContent = this.state.inputContent
  //   const amortizationPeriod = getAmortizationPeriod(inputContent)
  //   const interestRate = getInterestRate(inputContent)
  //   const loanAmount = getInitialLoanAmount(inputContent)

  //   return calculateMonthlyMortgagePaymentUtil(
  //     amortizationPeriod,
  //     interestRate,
  //     loanAmount
  //   )
  // }
  // const calculatePropertyValueForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const propertyValue = getAfterRepairValue(inputContent)
  //   const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
  //   return calculatePropertyValueForYearUtil(
  //     propertyValue,
  //     annualPVGrowth,
  //     year
  //   )
  // }
  // const calculateIncomeForYear = year => {
  //   const { inputContent } = this.state
  //   const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
  //   const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
  //   return calculateIncomeForYearUtil(year, monthlyIncome, annualIncomeGrowth)
  // }

  // const calculatePercentageExpensesForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
  //   const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
  //   const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
  //   const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
  //   const propertyValue = getAfterRepairValue(inputContent)
  //   return calculatePercentageExpensesForYearUtil(
  //     annualIncomeGrowth,
  //     annualPVGrowth,
  //     monthlyIncome,
  //     monthlyExpenses,
  //     propertyValue,
  //     year
  //   )
  // }
  // const calculateConstantExpensesForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
  //   const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(
  //     inputContent
  //   )
  //   return calculateConstantExpensesForYearUtil(
  //     annualConstantExpensesGrowth,
  //     monthlyExpenses,
  //     year
  //   )
  // }
  // const calculateExpensesForYear = year => {
  //   const percentageExpensesForYear = calculatePercentageExpensesForYear(
  //     year
  //   )
  //   const constantExpensesForYear = calculateConstantExpensesForYear(
  //     year
  //   )
  //   return calculateExpensesForYearUtil(
  //     constantExpensesForYear,
  //     percentageExpensesForYear
  //   )
  // }
  // /* Cash flow = Income - Expenses */
  // const calculateCashFlowForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const amortizationPeriod = getAmortizationPeriod(inputContent)
  //   const incomeForYear = calculateIncomeForYear(year)
  //   const expensesForYear = calculateExpensesForYear(year)

  //   let yearCashFlow = calculateYearCashFlowUtil(
  //     incomeForYear,
  //     expensesForYear
  //   )
  //   if (year > amortizationPeriod) {
  //     yearCashFlow += calculateMortgageForYear(year)
  //   }
  //   return yearCashFlow
  // }
  // /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  // const calculateCashOnCashReturnForYear = year => {
  //   const yearCashFlow = calculateCashFlowForYear(year)
  //   const initialInvestment = calculateInitialInvestment()
  //   return calculateCashOnCashReturnUtil(
  //     yearCashFlow,
  //     initialInvestment
  //   )
  // }
  // /* Initial equity = down payment + after repair value + purchase price */
  // const calculateInitialEquity = () => {
  //   const inputContent = this.state.inputContent

  //   const downPayment = getDownPayment(inputContent)
  //   const afterRepairValue = getAfterRepairValue(inputContent)
  //   const purchasePrice = getPurchasePrice(inputContent)

  //   return calculateInitialEquityUtil(downPayment, afterRepairValue, purchasePrice)
  // }
  // /* Initial investment =
  //   down payment + repair costs + closing costs + other initial costs */
  // const calculateInitialInvestment = () => {
  //   const inputContent = this.state.inputContent

  //   const downPayment = getDownPayment(inputContent)
  //   const repairCosts = getRepairCosts(inputContent)
  //   const closingCosts = getClosingCosts(inputContent)
  //   const otherCosts = getOtherInitialCosts(inputContent)

  //   return calculateInitialInvestmentUtil(
  //     downPayment,
  //     repairCosts,
  //     closingCosts,
  //     otherCosts
  //   )
  // }
  // const calculateRemainingLoanBalanceForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const initialLoanAmount = getInitialLoanAmount(inputContent)
  //   const interestRate = getInterestRate(inputContent)
  //   const amortizationPeriod = getAmortizationPeriod(inputContent)

  //   return calculateRemainingLoanBalanceForYearUtil(
  //     initialLoanAmount,
  //     interestRate,
  //     amortizationPeriod,
  //     year
  //   )
  // }
  // const calculateEquityForYear = year => {
  //   const inputContent = this.state.inputContent
  //   const initialEquity = calculateInitialEquity()
  //   const amortizationPeriod = getAmortizationPeriod(inputContent)
  //   if (year === 0) {
  //     return initialEquity
  //   }
  //   if (year >= amortizationPeriod) {
  //     return calculatePropertyValueForYear(year)
  //   }
  //   const propertyValueForYear = calculatePropertyValueForYear(year)
  //   const initialPropertyValue = getAfterRepairValue(inputContent)
  //   const loanAmount = getInitialLoanAmount(inputContent)
  //   const remainingBalance = calculateRemainingLoanBalanceForYear(year)

  //   return calculateEquityForYearUtil(
  //     initialEquity,
  //     propertyValueForYear,
  //     initialPropertyValue,
  //     loanAmount,
  //     remainingBalance
  //   )
  // }
  // const calculateReturnOnEquityForYear = year => {
  //   const cashFlowForYear = calculateCashFlowForYear(year)
  //   const equityForYear = calculateEquityForYear(year)

  //   return calculateReturnOnEquityForYearUtil(
  //     cashFlowForYear,
  //     equityForYear
  //   )
  // }
  // const calculateReturnOnInvestmentForYear = year => {
  //   const cashFlowForYear = parseFloat(calculateCashFlowForYear(year))
  //   const equityCurrentYear = parseFloat(calculateEquityForYear(year))
  //   const equityPreviousYear = parseFloat(calculateEquityForYear(year - 1))
  //   const equityGainedForYear = equityCurrentYear - equityPreviousYear
  //   const initialInvestment = parseFloat(calculateInitialInvestment())

  //   return calculateReturnOnInvestmentForYearUtil(
  //     cashFlowForYear,
  //     equityGainedForYear,
  //     initialInvestment
  //   )
  // }
  const updateValueForInput = (value, section, inputId) => {
    let inputContent = this.state.inputContent
    inputContent[section][inputId] = value
    this.forceUpdate()
  }
  return (
    <div className='calculator'>
      {inputSectionData.map(section => (
        <InputSection key={section.title}
          title={section.title}>
          {section.childProps.map(props => (
            <Input
              key={props.inputId}
              {...props}
              // updateValueForInput={updateValueForInput} // TODO: action
              section={section.title}
            />
          ))}
        </InputSection>
      ))}
      <Result />
    </div>
  )
}

export default Calculator