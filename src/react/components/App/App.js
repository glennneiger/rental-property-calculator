import React, { Component } from 'react'
import './app.css'

import InputSection from '../InputSection'
import Input from '../Input'

const generalInfoInputProps = [
  {
    inputId: 'neighborhoodInput',
    inputType: 'text',
    label: 'Neighborhood'
  },
  {
    inputId: 'addressInput',
    inputType: 'text',
    label: 'Address'
  },
  {
    inputId: 'sqftInput',
    inputType: 'number',
    label: 'Square Feet'
  }
]

const initialPurchaseInputProps = [
  {
    inputId: 'purchasePriceInput',
    inputType: 'number',
    label: 'Purchase Price'
  },
  {
    inputId:'downPaymentInput',
    inputType:'number',
    label:'Down Payment'
  },
  {
    inputId:'loanAmountInput',
    inputType:'number',
    label:'Loan Amount'
  },
  {
    inputId:'arvInput',
    inputType:'number',
    label:'After Repair Value'
  },
  {
    inputId:'repairCostsInput',
    inputType:'number',
    label:'Repair Costs'
  },
  {
    inputId:'closingCostsInput',
    inputType:'number',
    label:'Closing Costs'
  }
]

const operatingIncomeInputProps = [
  {
    inputId:'rentInput',
    inputType:'number',
    label:'Rental Income'
  },
  {
    inputId:'otherIncomeInput',
    inputType:'number',
    label:'Other Income'
  }
]

const operatingExpensesInputProps = [
  {
    inputId: 'mortgageInput',
    inputType: 'number',
    label: 'Mortgage'
  },
  {
    inputId: 'electricityInput',
    inputType: 'number',
    label: 'Electricity'
  },
  {
    inputId: 'waterAndSewerInput',
    inputType: 'number',
    label: 'Water and Sewer'
  },
  {
    inputId: 'PMIInput',
    inputType: 'number',
    label: 'Private Mortgage Insurance'
  },
  {
    inputId: 'garbageInput',
    inputType: 'number',
    label: 'Garbage'
  },
  {
    inputId: 'hoaInput',
    inputType: 'number',
    label: 'HOA Fees'
  },
  {
    inputId: 'insuranceInput',
    inputType: 'number',
    label: 'Insurance'
  },
  {
    inputId: 'propertyTaxInput',
    inputType: 'number',
    label: 'Property Tax'
  },
  {
    inputId: 'vacancyInput',
    inputType: 'number',
    label: 'Vacancy (%)'
  },
  {
    inputId: 'r&mInput',
    inputType: 'number',
    label: 'Repairs & Maintenance (%)'
  },
  {
    inputId: 'capExInput',
    inputType: 'number',
    label: 'Cap. Ex. (%)'
  },
  {
    inputId: 'managementInput',
    inputType: 'number',
    label: 'Management (%)'
  },
]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <InputSection title='General Info'>
          { generalInfoInputProps.map(props => (
            <Input key={ props.inputId } { ...props }/>
          )) }
        </InputSection>
        <InputSection title='Initial Purchase'>
          { initialPurchaseInputProps.map(props => (
            <Input key={ props.inputId } { ...props }/>
          )) }
        </InputSection>
        <InputSection title='Monthly Operating Income'>
          { operatingIncomeInputProps.map(props => (
            <Input key={ props.inputId } { ...props }/>
          )) }
        </InputSection>
        <InputSection title='Monthly Operating Expenses'>
          { operatingExpensesInputProps.map(props => (
            <Input key={ props.inputId } { ...props }/>
          )) }
        </InputSection>
      </div>
    )
  }
}

export default App
