import {
  CALCULATOR_INPUT_WIDTH_DEFAULT,
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
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
  INPUT_ID_PROPERTY_VALUE_GROWTH,
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
  TITLE_FUTURE_PROJECTIONS,
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
    textInputWidth: 210
  },
  {
    inputId: INPUT_ID_UNIT_NUMBER,
    inputType: 'text',
    label: 'Unit Number',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
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
    label: 'Province/State',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
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
    label: 'Postal/Zip Code',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_SQUARE_FEET,
    inputType: 'number',
    label: 'Square Feet',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
]

const initialPurchaseInputProps = [
  {
    inputId: INPUT_ID_PURCHASE_PRICE,
    inputType: 'number',
    label: 'Purchase Price',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_DOWN_PAYMENT,
    inputType: 'number',
    label: 'Down Payment',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_LOAN_AMOUNT,
    inputType: 'number',
    label: 'Loan Amount',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_INTEREST_RATE,
    inputType: 'number',
    label: 'Interest Rate (%)',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_AMORTIZATION_PERIOD,
    inputType: 'number',
    label: 'Amortization Period (years)',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_AFTER_REPAIR_VALUE,
    inputType: 'number',
    label: 'After Repair Value',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_REPAIR_COSTS,
    inputType: 'number',
    label: 'Repair Costs',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_CLOSING_COSTS,
    inputType: 'number',
    label: 'Closing Costs',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_OTHER_INITIAL_COSTS,
    inputType: 'number',
    label: 'Other Initial Costs',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
]

/* Only add stuff here to calculate income */
export const incomeInputProps = [
  {
    inputId: INPUT_ID_RENTAL_INCOME,
    inputType: 'number',
    label: 'Rental Income',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_OTHER_INCOME,
    inputType: 'number',
    label: 'Other Income',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
]

/* Only add stuff here to calculate expenses */
export const expensesInputProps = [
  {
    inputId: INPUT_ID_MORTGAGE,
    inputType: 'number',
    label: 'Mortgage',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ELECTRICITY,
    inputType: 'number',
    label: 'Electricity',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_WATER_AND_SEWER,
    inputType: 'number',
    label: 'Water and Sewer',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
    inputType: 'number',
    label: 'Private Mortgage Insurance',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_GARBAGE,
    inputType: 'number',
    label: 'Garbage',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_HOA,
    inputType: 'number',
    label: 'HOA Fees',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_INSURANCE,
    inputType: 'number',
    label: 'Insurance',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_PROPERTY_TAX,
    inputType: 'number',
    label: 'Property Tax (%)',
    percentOfPropertyValue: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_VACANCY,
    inputType: 'number',
    label: 'Vacancy (%)',
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_REPAIRS_AND_MAINTENANCE,
    inputType: 'number',
    label: 'Repairs & Maintenance (%)',
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_CAP_EX,
    inputType: 'number',
    label: 'Cap. Ex. (%)',
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_MANAGEMENT,
    inputType: 'number',
    label: 'Management (%)',
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_OTHER_EXPENSES,
    inputType: 'number',
    label: 'Other Expenses',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
]

export const futureProjectionsInputProps = [
  {
    inputId: INPUT_ID_PROPERTY_VALUE_GROWTH,
    inputType: 'number',
    label: 'Annual Property Value Growth (%)',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ANNUAL_INCOME_GROWTH,
    inputType: 'number',
    label: 'Annual Income Growth (%)',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
    inputType: 'number',
    label: 'Annual Constant Expenses Growth (%)',
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
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
  },
  {
    title: TITLE_FUTURE_PROJECTIONS,
    childProps: futureProjectionsInputProps
  }
]