import React, { Component } from 'react'

import Result from '../Result'
import CalculateButton from '../CalculateButton'
import InputSection from '../InputSection'
import Input from '../Input'
import { inputSectionData, operatingExpensesInputProps } from './childProps'
import './app.css'
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_OPERATING_EXPENSES,
  TITLE_MONTHLY_OPERATING_INCOME,
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
  INPUT_ID_OTHER_EXPENSES
} from '../../../constants'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  calculateResult = () => {
    // TODO: delete because using live updating
  }
  getCashFlowForYear = year => {
    /* (rental income + other income) - (mortgage + electricity + water and sewer +
      PMI + garbage + hoa + insurance + property tax + vacancy + repairs and maintenance + cap ex
      + management + other expenses */
    const inputContent = this.state.inputContent
    const monthlyOperatingIncome = inputContent[TITLE_MONTHLY_OPERATING_INCOME]
    const monthlyOperatingExpenses = inputContent[TITLE_MONTHLY_OPERATING_EXPENSES]

    let incomes = [];
    incomes.push(monthlyOperatingIncome[INPUT_ID_RENTAL_INCOME])
    incomes.push(monthlyOperatingIncome[INPUT_ID_OTHER_INCOME])

    let incomesSum = incomes.reduce((acc, current) => +acc + +current)

    const expensesSum = operatingExpensesInputProps.reduce((total, current) => {
      const expense = monthlyOperatingExpenses[current.inputId]
      return total + +expense
    }, 0)

    return (incomesSum - expensesSum) * 12

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
        <CalculateButton handleClick={ this.calculateResult } />
        <Result
          getCashFlowForYear={ this.getCashFlowForYear }
          getInvestmentAfterYears={ this.getInvestmentAfterYears }
          getEquityAfterYears={ this.getEquityAfterYears }/>
      </div>
    )
  }
}

export default App
