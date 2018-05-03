import React, { Component } from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  expensesInputProps,
  inputSectionData
} from './childProps'
import './app.css'
import {
  INPUT_ID_AMORTIZATION_PERIOD,
  MONTHS_PER_YEAR,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES
} from '../../../constants'
import {
  getAnnualConstantExpensesGrowth,
  getAnnualPropertyValueGrowth,
  getCompoundedValue,
  getIncomeForYear,
  getInitialEquity,
  getInitialInvestment,
  getInitialPropertyValue,
  getInitialYearlyConstantExpenses,
  getPercentOfPropertyValueMonthly,
  getPercentOfRentalIncomeMonthly
} from '../../../utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  getPropertyValueForYear = year => {
    const inputContent = this.state.inputContent
    let propertyValue = getInitialPropertyValue(inputContent)

    let annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    return getCompoundedValue(
      propertyValue,
      annualPVGrowth,
      year
    )
  }
  getAmortizationPeriod = () => {
    const inputContent = this.state.inputContent
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]
    return parseInt(
      initialPurchase[INPUT_ID_AMORTIZATION_PERIOD],
      NUMBER_SYSTEM_DECIMAL
    )
  }
  getPercentageExpensesForYear = year => {
    const inputContent = this.state.inputContent
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]

    const percentageExpensesForYear = expensesInputProps
      .reduce((total, current) => {
        let expense = 0
        if (current.percentOfRent) {
          expense = getPercentOfRentalIncomeMonthly(
            monthlyExpenses[current.inputId],
            getIncomeForYear(inputContent, year)
          )
        } else if (current.percentOfPropertyValue) {
          expense = getPercentOfPropertyValueMonthly(
            monthlyExpenses[current.inputId],
            this.getPropertyValueForYear(year)
          )
        }
        return total + +expense
      }, 0)
    return parseInt(percentageExpensesForYear, NUMBER_SYSTEM_DECIMAL)
  }
  getConstantExpensesForYear = (inputContent, year) => {
    const initialConstantExpenses = getInitialYearlyConstantExpenses(
      this.state.inputContent
    )

    const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(
      this.state.inputContent
    )
    const constantExpensesForYear = getCompoundedValue(
      initialConstantExpenses,
      annualConstantExpensesGrowth,
      year
    )
    return parseInt(constantExpensesForYear, NUMBER_SYSTEM_DECIMAL)
  }
  getExpensesForYear = year => {
    const percentageExpensesForYear = this.getPercentageExpensesForYear(year)
    const constantExpensesForYear = this.getConstantExpensesForYear(year)
    return constantExpensesForYear + percentageExpensesForYear
  }
  /* Cash flow = Income - Expenses */
  getCashFlowForYear = year => {
    const incomeForYear = getIncomeForYear(this.state.inputContent, year)
    const expensesForYear = this.getExpensesForYear(year)
    return Math.round((incomeForYear - expensesForYear) * MONTHS_PER_YEAR)
  }
  /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  getCashOnCashReturnForYear = year => {
    const inputContent = this.state.inputContent
    const cashFlow = this.getCashFlowForYear(year)
    const initialInvestment = getInitialInvestment(inputContent)

    return initialInvestment !== 0
      ? parseFloat(cashFlow / initialInvestment * 100).toFixed(2)
      : 0
  }
  getEquityAfterYears = years => {
    const inputContent = this.state.inputContent
    let equity = getInitialEquity(inputContent)
    // TODO: deal with all numbers of years that aren't 0
    if (years === 0) {
      return equity
    }
    return equity
  }
  getInvestmentAfterYears = years => {
    const inputContent = this.state.inputContent
    let investment = getInitialInvestment(inputContent)
    // TODO: deal with all numbers of years that aren't 0
    if (years === 0) {
      return investment
    }
    return investment
  }
  handleKeyDown = (event, section, inputId) => {
    const inputContent = this.state.inputContent
    inputContent[section][inputId] = event.target.value
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
                handleKeyDown={ this.handleKeyDown }
                section={ section.title }/>
            )) }
          </InputSection>
        )) }
        <Result
          amortizationPeriod={ this.getAmortizationPeriod() }
          getCashFlowForYear={ this.getCashFlowForYear }
          getCashOnCashReturnForYear={ this.getCashOnCashReturnForYear }
          getEquityAfterYears={ this.getEquityAfterYears }
          getInvestmentAfterYears={ this.getInvestmentAfterYears }
          getPropertyValueForYear={ this.getPropertyValueForYear }
        />
      </div>
    )
  }
}

export default App