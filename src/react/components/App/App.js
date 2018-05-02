import React, { Component } from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  expensesInputProps,
  incomeInputProps,
  inputSectionData
} from './childProps'
import './app.css'
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_REPAIR_COSTS,
  MONTHS_PER_YEAR,
  NUMBER_SYSTEM_DECIMAL,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME,
  TITLE_FUTURE_PROJECTIONS
} from '../../../constants'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  getCompoundedValue = (initialValue, annualGrowthRate, years) => (
    Math.round(initialValue *
      Math.pow(
        1 + (annualGrowthRate / 100),
        years
      )
    )
  )
  getPercentOfPropertyValueMonthly = (percent, propertyValue) => (
    percent * propertyValue / (100 * MONTHS_PER_YEAR)
  )
  getPercentOfRentalIncomeMonthly = (percent, monthlyRentalIncome) => (
    percent * monthlyRentalIncome / 100
  )
  getInitialPropertyValue = () => {
    const inputContent = this.state.inputContent
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

    let propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
    if (!propertyValue) {
      propertyValue = 0
    }
    return parseInt(propertyValue, NUMBER_SYSTEM_DECIMAL)
  }
  getAnnualPropertyValueGrowth = () => {
    const inputContent = this.state.inputContent
    const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

    const annualPVGrowth = futureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
    return annualPVGrowth ? parseInt(annualPVGrowth, NUMBER_SYSTEM_DECIMAL) : 0
  }
  getPropertyValueForYear = year => {
    let propertyValue = this.getInitialPropertyValue()

    let annualPVGrowth = this.getAnnualPropertyValueGrowth()
    return this.getCompoundedValue(
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
  getAnnualIncomeGrowth = () => {
    const inputContent = this.state.inputContent
    const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

    const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
    return annualIncomeGrowth
      ? parseInt(annualIncomeGrowth, NUMBER_SYSTEM_DECIMAL)
      : 0
  }
  getInitialYearlyIncome = () => {
    const inputContent = this.state.inputContent
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]

    const initialYearlyIncome = incomeInputProps.reduce((total, current) => {
      const income = monthlyIncome[current.inputId]
      return total + +income
    }, 0)
    return parseInt(initialYearlyIncome, NUMBER_SYSTEM_DECIMAL)
  }
  getIncomeForYear = year => {
    let incomeForYear = this.getInitialYearlyIncome()

    const annualIncomeGrowth = this.getAnnualIncomeGrowth()
    return this.getCompoundedValue(
      incomeForYear,
      annualIncomeGrowth,
      year
    )
  }
  getAnnualExpensesGrowth = () => {
    const inputContent = this.state.inputContent
    const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

    const annualExpensesGrowth = futureProjections[
      INPUT_ID_ANNUAL_EXPENSES_GROWTH
    ]
    return annualExpensesGrowth ?
      parseInt(annualExpensesGrowth, NUMBER_SYSTEM_DECIMAL)
      : 0
  }
  getInitialYearlyExpenses = () => {
    const inputContent = this.state.inputContent
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

    let expensesForYear = expensesInputProps.reduce((total, current) => {
      let expense = monthlyExpenses[current.inputId]
      if (current.percentOfRent) {
        expense = this.getPercentOfRentalIncomeMonthly(
          expense,
          monthlyIncome[INPUT_ID_RENTAL_INCOME]
        )
      } else if (current.percentOfPropertyValue) {
        expense = this.getPercentOfPropertyValueMonthly(
          expense,
          initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
        )
      }
      return total + +expense
    }, 0)
    return parseInt(expensesForYear, NUMBER_SYSTEM_DECIMAL)
  }
  getExpensesForYear = year => {
    let expensesForYear = this.getInitialYearlyExpenses()

    const annualExpensesGrowth = this.getAnnualExpensesGrowth()
    return this.getCompoundedValue(
      expensesForYear,
      annualExpensesGrowth,
      year
    )
  }
  /* Cash flow = Income - Expenses */
  getCashFlowForYear = year => {
    const incomeForYear = this.getIncomeForYear(year)
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
          getInvestmentAfterYears={ this.getInvestmentAfterYears }
          getEquityAfterYears={ this.getEquityAfterYears }
          getPropertyValueForYear={ this.getPropertyValueForYear }/>
      </div>
    )
  }
}

export default App