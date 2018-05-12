import React, { Component } from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  inputSectionData
} from './childProps'
import './app.css'
import {
  NUMBER_PRECISION_DISPLAY,
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
  calculateCashOnCashReturn,
  calculateConstantExpensesForYear,
  calculateEquityForYear,
  calculateExpensesForYear,
  calculateIncomeForYear,
  calculateInitialEquity,
  calculateInitialInvestment,
  calculateMonthlyMortgagePayment,
  calculateMortgageForYear,
  calculatePercentageExpensesForYear,
  calculatePropertyValueForYear,
  calculateRemainingLoanBalanceForYear,
  calculateReturnOnEquityForYear,
  calculateReturnOnInvestmentForYear,
  calculateYearCashFlow
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  calculateResults = () => {
    let results = {}
    const yearsToShow = getYearsForResults(
      getAmortizationPeriod(this.state.inputContent)
    )
    yearsToShow.map(year => {
      results[year] = {
        [RESULTS_CASH_FLOW]: this.calculateCashFlowForYear(year),
        [RESULTS_CASH_ON_CASH_RETURN]: this.calculateCashOnCashReturnForYear(
          year
        ),
        [RESULTS_PROPERTY_VALUE]: this.calculatePropertyValueForYear(year),
        [RESULTS_EQUITY]: this.calculateEquityForYear(year),
        [RESULTS_RETURN_ON_EQUITY]: this.calculateReturnOnEquityForYear(year),
        [RESULTS_RETURN_ON_INVESTMENT]: this.calculateReturnOnInvestmentForYear(
          year
        )
      }
    })
    return results
  }
  calculateMortgageForYear = year => {
    const inputContent = this.state.inputContent
    const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(
      inputContent
    )
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
    return calculateMortgageForYear(
      annualConstantExpensesGrowth,
      monthlyExpenses,
      year
    )
  }
  calculateMonthlyMortgagePayment = () => {
    const inputContent = this.state.inputContent
    const amortizationPeriod = getAmortizationPeriod(inputContent)
    const interestRate = getInterestRate(inputContent)
    const loanAmount = getInitialLoanAmount(inputContent)

    return calculateMonthlyMortgagePayment(
      amortizationPeriod,
      interestRate,
      loanAmount
    )
  }
  calculatePropertyValueForYear = year => {
    const inputContent = this.state.inputContent
    const propertyValue = getAfterRepairValue(inputContent)
    const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    return calculatePropertyValueForYear(
      propertyValue,
      annualPVGrowth,
      year
    ).toFixed(NUMBER_PRECISION_DISPLAY)
  }
  calculateIncomeForYear = year => {
    const { inputContent } = this.state
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
    return calculateIncomeForYear(year, monthlyIncome, annualIncomeGrowth)
  }

  calculatePercentageExpensesForYear = year => {
    const inputContent = this.state.inputContent
    const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
    const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
    const propertyValue = getAfterRepairValue(inputContent)
    return calculatePercentageExpensesForYear(
      annualIncomeGrowth,
      annualPVGrowth,
      monthlyIncome,
      monthlyExpenses,
      propertyValue,
      year
    )
  }
  calculateConstantExpensesForYear = year => {
    const inputContent = this.state.inputContent
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
    const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(
      inputContent
    )
    return calculateConstantExpensesForYear(
      annualConstantExpensesGrowth,
      monthlyExpenses,
      year
    )
  }
  calculateExpensesForYear = year => {
    const percentageExpensesForYear = this.calculatePercentageExpensesForYear(
      year
    )
    const constantExpensesForYear = this.calculateConstantExpensesForYear(
      year
    )
    return calculateExpensesForYear(
      constantExpensesForYear,
      percentageExpensesForYear
    )
  }
  /* Cash flow = Income - Expenses */
  calculateCashFlowForYear = year => {
    const inputContent = this.state.inputContent
    const amortizationPeriod = getAmortizationPeriod(inputContent)
    const incomeForYear = this.calculateIncomeForYear(year)
    const expensesForYear = this.calculateExpensesForYear(year)

    let yearCashFlow = calculateYearCashFlow(
      incomeForYear,
      expensesForYear
    )
    if (year > amortizationPeriod) {
      yearCashFlow += this.calculateMortgageForYear(year)
    }
    return yearCashFlow.toFixed(NUMBER_PRECISION_DISPLAY)
  }
  /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  calculateCashOnCashReturnForYear = year => {
    const yearCashFlow = this.calculateCashFlowForYear(year)
    const initialInvestment = this.calculateInitialInvestment()
    return calculateCashOnCashReturn(
      yearCashFlow,
      initialInvestment
    ).toFixed(NUMBER_PRECISION_DISPLAY)
  }
  /* Initial equity = down payment + after repair value + purchase price */
  calculateInitialEquity = () => {
    const inputContent = this.state.inputContent

    const downPayment = getDownPayment(inputContent)
    const afterRepairValue = getAfterRepairValue(inputContent)
    const purchasePrice = getPurchasePrice(inputContent)

    return calculateInitialEquity(downPayment, afterRepairValue, purchasePrice)
  }
  /* Initial investment =
    down payment + repair costs + closing costs + other initial costs */
  calculateInitialInvestment = () => {
    const inputContent = this.state.inputContent

    const downPayment = getDownPayment(inputContent)
    const repairCosts = getRepairCosts(inputContent)
    const closingCosts = getClosingCosts(inputContent)
    const otherCosts = getOtherInitialCosts(inputContent)

    return calculateInitialInvestment(
      downPayment,
      repairCosts,
      closingCosts,
      otherCosts
    )
  }
  calculateRemainingLoanBalanceForYear = year => {
    const inputContent = this.state.inputContent
    const initialLoanAmount = getInitialLoanAmount(inputContent)
    const interestRate = getInterestRate(inputContent)
    const amortizationPeriod = getAmortizationPeriod(inputContent)

    return calculateRemainingLoanBalanceForYear(
      initialLoanAmount,
      interestRate,
      amortizationPeriod,
      year
    )
  }
  calculateEquityForYear = year => {
    const inputContent = this.state.inputContent
    const initialEquity = this.calculateInitialEquity()
    const amortizationPeriod = getAmortizationPeriod(inputContent)
    if (year === 0) {
      return initialEquity
    }
    if (year >= amortizationPeriod) {
      return this.calculatePropertyValueForYear(year)
    }
    const propertyValueForYear = this.calculatePropertyValueForYear(year)
    const initialPropertyValue = getAfterRepairValue(inputContent)
    const loanAmount = getInitialLoanAmount(inputContent)
    const remainingBalance = this.calculateRemainingLoanBalanceForYear(year)

    return calculateEquityForYear(
      initialEquity,
      propertyValueForYear,
      initialPropertyValue,
      loanAmount,
      remainingBalance
    ).toFixed(NUMBER_PRECISION_DISPLAY)
  }
  calculateReturnOnEquityForYear = year => {
    const cashFlowForYear = this.calculateCashFlowForYear(year)
    const equityForYear = this.calculateEquityForYear(year)

    return calculateReturnOnEquityForYear(
      cashFlowForYear,
      equityForYear
    ).toFixed(NUMBER_PRECISION_DISPLAY)
  }
  calculateReturnOnInvestmentForYear = year => {
    const cashFlowForYear = parseFloat(this.calculateCashFlowForYear(year))
    const equityCurrentYear = parseFloat(this.calculateEquityForYear(year))
    const equityPreviousYear = parseFloat(this.calculateEquityForYear(year - 1))
    const equityGainedForYear = equityCurrentYear - equityPreviousYear
    const initialInvestment = parseFloat(this.calculateInitialInvestment())

    return calculateReturnOnInvestmentForYear(
      cashFlowForYear,
      equityGainedForYear,
      initialInvestment
    ).toFixed(NUMBER_PRECISION_DISPLAY)
  }
  updateValueForInput = (value, section, inputId) => {
    let inputContent = this.state.inputContent
    inputContent[section][inputId] = value
    this.forceUpdate()
  }
  getInputState = () => {
    let inputContent = {}
    inputSectionData.forEach(inputSection => {
      const section = inputSection.title
      inputSection.childProps.forEach(props => {
        const input = props.inputId
        if (!inputContent[section]) {
          inputContent[section] = {}
        }
        inputContent[section][input] = ''
      })
    })
    return inputContent
  }
  render() {
    return (
      <div className='app'>
        { inputSectionData.map(section => (
          <InputSection key={ section.title }
            title={ section.title }>
            { section.childProps.map(props => (
              <Input
                content={
                  this.state.inputContent[section.title][props.inputId]
                }
                key={ props.inputId }
                { ...props }
                updateValueForInput={ this.updateValueForInput }
                section={ section.title }
                inputType={ props.inputType }
              />
            )) }
          </InputSection>
        )) }
        <Result
          initialEquity={ this.calculateInitialEquity() }
          initialInvestment={ this.calculateInitialInvestment() }
          results={ this.calculateResults() }
          yearsForResults={ getYearsForResults(
            getAmortizationPeriod(this.state.inputContent)
          ) }
        />
      </div>
    )
  }
}

export default App