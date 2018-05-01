import React, { Component } from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  inputSectionData,
  expensesInputProps,
  incomeInputProps
} from './childProps'
import './app.css'
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_MORTGAGE,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_WATER_AND_SEWER,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_VACANCY,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_CAP_EX,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_OTHER_EXPENSES,
  MONTHS_PER_YEAR
} from '../../../constants'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  /* Cash flow = Income - Expenses */
  getCashFlowForYear = year => {
    const inputContent = this.state.inputContent
    const monthlyIncome = inputContent[TITLE_MONTHLY_INCOME]
    const monthlyExpenses = inputContent[TITLE_MONTHLY_EXPENSES]

    const incomesSum = incomeInputProps.reduce((total, current) => {
      const income = monthlyIncome[current.inputId]
      return total + +income
    }, 0)

    const expensesSum = expensesInputProps.reduce((total, current) => {
      const expense = monthlyExpenses[current.inputId]
      return total + +expense
    }, 0)

    return (incomesSum - expensesSum) * MONTHS_PER_YEAR

  }
  getInitialEquity = () => {
    const inputContent = this.state.inputContent
    const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

    const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]
    const afterRepairValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
    const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]

    return +downPayment + (+afterRepairValue - +purchasePrice)
  }
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

    if (years === 0) {
      return equity
    }
    return equity
  }
  getInvestmentAfterYears = years => {
    let investment = this.getInitialInvestment()

    if (years === 0) {
      return investment;
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
                content={ this.state.inputContent[section.title][props.inputId] }
                key={ props.inputId }
                { ...props }
                handleKeyDown={ this.handleKeyDown }
                section={ section.title }/>
            )) }
          </InputSection>
        )) }
        <Result
          getCashFlowForYear={ this.getCashFlowForYear }
          getInvestmentAfterYears={ this.getInvestmentAfterYears }
          getEquityAfterYears={ this.getEquityAfterYears }/>
      </div>
    )
  }
}

export default App
