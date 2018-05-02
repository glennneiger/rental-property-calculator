import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_CAP_EX,
  INPUT_ID_CITY,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_COUNTRY,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_INTEREST_RATE,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_MORTGAGE,
  INPUT_ID_NEIGHBORHOOD,
  INPUT_ID_OTHER_EXPENSES,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_POSTAL_OR_ZIP_CODE,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_PROVINCE_OR_STATE,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_SQUARE_FEET,
  INPUT_ID_STREET_ADDRESS,
  INPUT_ID_UNIT_NUMBER,
  INPUT_ID_VACANCY,
  INPUT_ID_WATER_AND_SEWER,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../../constants'

const generalInfoInputProps = [
  {
    inputId: INPUT_ID_NEIGHBORHOOD,
    inputType: 'text',
    label: 'Neighborhood',
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_STREET_ADDRESS,
    inputType: 'text',
    label: 'Street Address',
    textInputWidth: 300
  },
  {
    inputId: INPUT_ID_UNIT_NUMBER,
    inputType: 'text',
    label: 'Unit'
  },
  {
    inputId: INPUT_ID_CITY,
    inputType: 'text',
    label: 'City',
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_PROVINCE_OR_STATE,
    inputType: 'text',
    label: 'Province/State'
  },
  {
    inputId: INPUT_ID_COUNTRY,
    inputType: 'text',
    label: 'Country',
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_POSTAL_OR_ZIP_CODE,
    inputType: 'text',
    label: 'Postal/Zip Code'
  },
  {
    inputId: INPUT_ID_SQUARE_FEET,
    label: 'Square Feet'
  }
]

const initialPurchaseInputProps = [
  {
    inputId: INPUT_ID_PURCHASE_PRICE,
    label: 'Purchase Price'
  },
  {
    inputId: INPUT_ID_DOWN_PAYMENT,
    label: 'Down Payment'
  },
  {
    inputId: INPUT_ID_LOAN_AMOUNT,
    label: 'Loan Amount'
  },
  {
    inputId: INPUT_ID_INTEREST_RATE,
    label: 'Interest Rate (%)'
  },
  {
    inputId: INPUT_ID_AMORTIZATION_PERIOD,
    label: 'Amortization Period (years)'
  },
  {
    inputId: INPUT_ID_AFTER_REPAIR_VALUE,
    label: 'After Repair Value'
  },
  {
    inputId: INPUT_ID_REPAIR_COSTS,
    label: 'Repair Costs'
  },
  {
    inputId: INPUT_ID_CLOSING_COSTS,
    label: 'Closing Costs'
  },
  {
    inputId: INPUT_ID_OTHER_INITIAL_COSTS,
    label: 'Other Initial Costs'
  }
]

/* Only add stuff here to calculate income */
export const incomeInputProps = [
  {
    inputId: INPUT_ID_RENTAL_INCOME,
    label: 'Rental Income'
  },
  {
    inputId: INPUT_ID_OTHER_INCOME,
    label: 'Other Income'
  }
]

/* Only add stuff here to calculate expenses */
export const expensesInputProps = [
  {
    inputId: INPUT_ID_MORTGAGE,
    label: 'Mortgage'
  },
  {
    inputId: INPUT_ID_ELECTRICITY,
    label: 'Electricity'
  },
  {
    inputId: INPUT_ID_WATER_AND_SEWER,
    label: 'Water and Sewer'
  },
  {
    inputId: INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
    label: 'Private Mortgage Insurance'
  },
  {
    inputId: INPUT_ID_GARBAGE,
    label: 'Garbage'
  },
  {
    inputId: INPUT_ID_HOA,
    label: 'HOA Fees'
  },
  {
    inputId: INPUT_ID_INSURANCE,
    label: 'Insurance'
  },
  {
    inputId: INPUT_ID_PROPERTY_TAX,
    label: 'Property Tax'
  },
  {
    inputId: INPUT_ID_VACANCY,
    label: 'Vacancy (%)',
    percent: true
  },
  {
    inputId: INPUT_ID_REPAIRS_AND_MAINTENANCE,
    label: 'Repairs & Maintenance (%)',
    percent: true
  },
  {
    inputId: INPUT_ID_CAP_EX,
    label: 'Cap. Ex. (%)',
    percent: true
  },
  {
    inputId: INPUT_ID_MANAGEMENT,
    label: 'Management (%)',
    percent: true
  },
  {
    inputId: INPUT_ID_OTHER_EXPENSES,
    label: 'Other Expenses'
  }
]

export const inputSectionData = [
  {
    title: TITLE_GENERAL_INFO,
    childProps: generalInfoInputProps
  },
  {
    title: TITLE_INITIAL_PURCHASE,
    childProps: initialPurchaseInputProps
  },
  {
    title: TITLE_MONTHLY_INCOME,
    childProps: incomeInputProps
  },
  {
    title: TITLE_MONTHLY_EXPENSES,
    childProps: expensesInputProps
  }
]