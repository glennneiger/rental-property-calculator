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
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  MONTHS_PER_YEAR,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME,
  TITLE_FUTURE_PROJECTIONS
} from '../../../constants'
import {
  calculateIncomeForYear,
  getCompoundedValue,
  calculatePercentOfRentalIncomeMonthly,
  calculatePercentOfPropertyValueMonthly,
  calculateConstantExpensesForYear,
  calculatePropertyValueForYear,
  calculatePercentageExpensesForYear
} from '../../../utils/calculationUtils'
import {
  getAnnualConstantExpensesGrowth,
  getInitialPropertyValue,
  getAnnualPropertyValueGrowth,
  getAnnualIncomeGrowth,
  getAmortizationPeriod
} from '../../../utils/stateGetters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  calculatePropertyValueForYear = year => {
    const inputContent = this.state.inputContent
    const propertyValue = getInitialPropertyValue(inputContent)
    const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    return calculatePropertyValueForYear(
      propertyValue,
      annualPVGrowth,
      year
    )
  }
  calculateIncomeForYear = year => {
    const { inputContent } = this.state
    const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
    return calculateIncomeForYear(year, monthlyIncome, annualIncomeGrowth)
  }

  calculatePercentageExpensesForYear = year => {
    const inputContent = this.state.inputContent
    const annualIncomeGrowth = getAnnualIncomeGrowth(inputContent)
    const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
    const propertyValue = getInitialPropertyValue(inputContent)
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
  getExpensesForYear = year => {
    const percentageExpensesForYear = this.calculatePercentageExpensesForYear(year)
    const constantExpensesForYear = this.calculateConstantExpensesForYear(year)
    return constantExpensesForYear + percentageExpensesForYear
  }
  /* Cash flow = Income - Expenses */
  getCashFlowForYear = year => {
    const incomeForYear = this.calculateIncomeForYear(year)
    const expensesForYear = this.getExpensesForYear(year)
    return Math.round((incomeForYear - expensesForYear) * MONTHS_PER_YEAR)
  }
  /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  getCashOnCashReturnForYear = year => {
    const cashFlow = this.getCashFlowForYear(year)
    const initialInvestment = this.getInitialInvestment()
    if (initialInvestment === 0) {
      return 0
    }

    return parseFloat(cashFlow / initialInvestment * 100).toFixed(2)
  }
  /* Initial equity = down payment + after repair value + purchase price */
  getInitialEquity = () => {
    const inputContent = this.state.inputContent
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

    const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
    const afterRepairValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
    const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]

    return +downPayment + (+afterRepairValue - +purchasePrice)
  }
  /* Initial investment =
    down payment + repair costs + closing costs + other initial costs */
  getInitialInvestment = () => {
    const inputContent = this.state.inputContent
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

    const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
    const repairCosts = initialPurchase[INPUT_ID_REPAIR_COSTS]
    const closingCosts = initialPurchase[INPUT_ID_CLOSING_COSTS]
    const otherCosts = initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]

    return +downPayment + +repairCosts + +closingCosts + +otherCosts
  }
  getEquityAfterYears = years => {
    let equity = this.getInitialEquity()
    // TODO: deal with all numbers of years that aren't 0
    if (years === 0) {
      return equity
    }
    return equity
  }
  getInvestmentAfterYears = years => {
    let investment = this.getInitialInvestment()
    // TODO: deal with all numbers of years that aren't 0
    if (years === 0) {
      return investment
    }
    return investment
  }
  handleKeyDown = (event, section, inputId) => {
    let inputContent = this.state.inputContent
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
          // intialInvestment={ }
          // initialEquity={ }
          // results={ this.calculateResults() }
          // // map years to their results { 1: {...}, 5: {...}, ... }

          amortizationPeriod={ getAmortizationPeriod(this.state.inputContent) }
          getCashFlowForYear={ this.getCashFlowForYear }
          getCashOnCashReturnForYear={ this.getCashOnCashReturnForYear }
          getEquityAfterYears={ this.getEquityAfterYears }
          getInvestmentAfterYears={ this.getInvestmentAfterYears }
          calculatePropertyValueForYear={ this.calculatePropertyValueForYear }
        />
      </div>
    )
  }
}

export default App