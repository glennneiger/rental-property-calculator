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
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../../constants'
import {
  calculateCashOnCashReturn,
  calculateConstantExpensesForYear,
  calculateExpensesForYear,
  calculateIncomeForYear,
  calculateInitialEquity,
  calculateInitialInvestment,
  calculatePercentageExpensesForYear,
  calculatePropertyValueForYear,
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
        [RESULTS_EQUITY]: this.calculateEquityAfterYears(year)
      }
    })
    return results
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
    const incomeForYear = this.calculateIncomeForYear(year)
    const expensesForYear = this.calculateExpensesForYear(year)
    return parseFloat(
      calculateYearCashFlow(
        incomeForYear,
        expensesForYear
      ).toFixed(NUMBER_PRECISION_DISPLAY)
    )
  }
  /* Cash on cash return = (cash flow / initialInvestment) * 100% */
  calculateCashOnCashReturnForYear = year => {
    const yearCashFlow = this.calculateCashFlowForYear(year)
    const initialInvestment = this.calculateInitialInvestment()
    return parseFloat(
      calculateCashOnCashReturn(
        yearCashFlow,
        initialInvestment
      ).toFixed(NUMBER_PRECISION_DISPLAY)
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
    const otherCosts = getOtherInitialCosts(inputContent)

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