import React, { Component } from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  inputSectionData
} from './childProps'
import './app.css'
import {
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME,
  TITLE_FUTURE_PROJECTIONS
} from '../../../constants'
import {
  calculateIncomeForYear,
  calculateConstantExpensesForYear,
  calculatePropertyValueForYear,
  calculatePercentageExpensesForYear,
  calculateExpensesForYear,
  calculateYearCashFlow,
  calculateCashOnCashReturn,
  calculateInitialInvestment,
  calculateInitialEquity
} from '../../../utils/calculationUtils'
import {
  getAnnualConstantExpensesGrowth,
  getAfterRepairValue,
  getAnnualPropertyValueGrowth,
  getAnnualIncomeGrowth,
  getAmortizationPeriod,
  getDownPayment,
  getRepairCosts,
  getClosingCosts,
  getOtherCosts,
  getPurchasePrice
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
    const propertyValue = getAfterRepairValue(inputContent)
    const annualPVGrowth = getAnnualPropertyValueGrowth(inputContent)
    return calculatePropertyValueForYear(
      propertyValue,
      annualPVGrowth,
      year
    )
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
    const incomeForYear = this.calculateIncomeForYear(year)
    const expensesForYear = this.calculateExpensesForYear(year)
    return Math.round(calculateYearCashFlow(incomeForYear, expensesForYear))
  }
  /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  getCashOnCashReturnForYear = year => {
    const yearCashFlow = this.calculateCashFlowForYear(year)
    const initialInvestment = this.calculateInitialInvestment()
    return parseFloat(
      calculateCashOnCashReturn(yearCashFlow, initialInvestment).toFixed(2)
    )
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
    const otherCosts = getOtherCosts(inputContent)

    return calculateInitialInvestment(
      downPayment,
      repairCosts,
      closingCosts,
      otherCosts
    )
  }
  // TODO: calculate equity for years that aren't 0
  calculateEquityAfterYears = years => {
    let equity = this.calculateInitialEquity()
    if (years === 0) {
      return equity
    }
    return equity
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
          calculateCashFlowForYear={ this.calculateCashFlowForYear }
          getCashOnCashReturnForYear={ this.getCashOnCashReturnForYear }
          calculateEquityAfterYears={ this.calculateEquityAfterYears }
          calculateInitialInvestment={ this.calculateInitialInvestment }
          calculatePropertyValueForYear={ this.calculatePropertyValueForYear }
        />
      </div>
    )
  }
}

export default App