const generalInfoInputProps = [
  {
    inputId: 'neighborhoodInput',
    inputType: 'text',
    label: 'Neighborhood',
    textInputWidth: 200
  },
  {
    inputId: 'streetAddressInput',
    inputType: 'text',
    label: 'Street Address',
    textInputWidth: 300
  },
  {
    inputId: 'unitNumberInput',
    inputType: 'text',
    label: 'Unit',
  },
  {
    inputId: 'cityInput',
    inputType: 'text',
    label: 'City',
    textInputWidth: 200
  },
  {
    inputId: 'provinceOrStateInput',
    inputType: 'text',
    label: 'Province/State'
  },
  {
    inputId: 'countryInput',
    inputType: 'text',
    label: 'Country',
    textInputWidth: 200
  },
  {
    inputId: 'postalOrZipCodeInput',
    inputType: 'text',
    label: 'Postal/Zip Code'
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
    inputId: 'downPaymentInput',
    label: 'Down Payment'
  },
  {
    inputId: 'loanAmountInput',
    label: 'Loan Amount'
  },
  {
    inputId: 'interestRateInput',
    label: 'Interest Rate (%)'
  },
  {
    inputId: 'amortizationPeriodInput',
    label: 'Amortization Period (years)'
  },
  {
    inputId: 'arvInput',
    label: 'After Repair Value'
  },
  {
    inputId: 'repairCostsInput',
    label: 'Repair Costs'
  },
  {
    inputId: 'closingCostsInput',
    label: 'Closing Costs'
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
  {
    inputId: 'otherExpensestInput',
    label: 'Other Expenses'
  },
]

export const inputSectionData = [
  {
    title: 'General Info',
    childProps: generalInfoInputProps
  },
  {
    title: "Initial Purchase",
    childProps: initialPurchaseInputProps
  },
  {
    title: "Monthly Operating Income",
    childProps: operatingIncomeInputProps
  },
  {
    title: "Monthly Operating Expenses",
    childProps: operatingExpensesInputProps
  }
]