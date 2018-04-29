import React, { Component } from 'react'
import './app.css'

import InputSection from '../InputSection'
import NumericInput from '../NumericInput'

const generalInfoInputProps = [
  {
    inputId: 'neighborhoodInput',
    label: 'Neighborhood'
  },
  {
    inputId: 'addressInput',
    label: 'Address'
  },
  {
    inputId: 'sqftInput',
    label: 'Square Feet'
  }
]

const initialPurchaseInputProps = [
  {
    inputId: 'purchasePriceInput',
    label: 'Purchase Price'
  },
  {
    inputId:'downPaymentInput',
    label:'Down Payment'
  },
  {
    inputId:'loanAmountInput',
    label:'Loan Amount'
  },
  {
    inputId:'arvInput',
    label:'After Repair Value'
  },
  {
    inputId:'repairCostsInput',
    label:'Repair Costs'
  },
  {
    inputId:'closingCostsInput',
    label:'Closing Costs'
  }
]

const operatingIncomeInputProps = [
  {
    inputId:'rentInput',
    label:'Rental Income'
  },
  {
    inputId:'otherIncomeInput',
    label:'Other Income'
  }
]

const operatingExpensesInputProps = [
  {
    inputId: 'mortgageInput',
    label: 'Mortgage'
  },
  {
    inputId: 'electricityInput',
    label: 'Electricity'
  },
  {
    inputId: 'waterAndSewerInput',
    label: 'Water and Sewer'
  },
  {
    inputId: 'PMIInput',
    label: 'Private Mortgage Insurance'
  },
  {
    inputId: 'garbageInput',
    label: 'Garbage'
  },
  {
    inputId: 'hoaInput',
    label: 'HOA Fees'
  },
  {
    inputId: 'insuranceInput',
    label: 'Insurance'
  },
  {
    inputId: 'propertyTaxInput',
    label: 'Property Tax'
  },
  {
    inputId: 'vacancyInput',
    label: 'Vacancy (%)'
  },
  {
    inputId: 'r&mInput',
    label: 'Repairs & Maintenance (%)'
  },
  {
    inputId: 'capExInput',
    label: 'Cap. Ex. (%)'
  },
  {
    inputId: 'managementInput',
    label: 'Management (%)'
  },
]

const inputSectionData = [
  {
    title: "Initial Purchase",
    childProps: initialPurchaseInputProps
  },
  {
    title: "Operating Income",
    childProps: operatingIncomeInputProps
  },
  {
    title: "Operating Expenses",
    childProps: operatingExpensesInputProps
  }
]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <InputSection title='General Info'>
          { generalInfoInputProps.map(props => (
            <NumericInput key={ props.inputId } { ...props }/>
          )) }
        </InputSection>

        { inputSectionData.map(data => (
          <InputSection title={ data.title }>
            { data.childProps.map(props => (
              <NumericInput key={ props.inputId } { ...props }/>
            )) }
          </InputSection>
        )) }
      </div>
    )
  }
}

export default App
