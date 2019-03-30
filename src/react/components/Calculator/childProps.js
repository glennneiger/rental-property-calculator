import {
  CALCULATOR_INPUT_WIDTH_DEFAULT,
  INPUT_DESCRIPTION_DOWN_PAYMENT,
  INPUT_DESCRIPTION_LOAN_AMOUNT,
  INPUT_DESCRIPTION_PURCHASE_PRICE,
  INPUT_DESCRIPTION_AFTER_REPAIR_VALUE,
  INPUT_DESCRIPTION_CLOSING_COSTS,
  INPUT_DESCRIPTION_INTEREST_RATE,
  INPUT_DESCRIPTION_AMORTIZATION_PERIOD,
  INPUT_DESCRIPTION_OTHER_INCOME,
  INPUT_DESCRIPTION_OTHER_INITIAL_COSTS,
  INPUT_DESCRIPTION_RENTAL_INCOME,
  INPUT_DESCRIPTION_REPAIR_COSTS,
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
  LABEL_AFTER_REPAIR_VALUE,
  LABEL_AMORTIZATION_PERIOD,
  LABEL_CAP_EX,
  LABEL_CITY,
  LABEL_CLOSING_COSTS,
  LABEL_CONSTANT_EXPENSES_GROWTH,
  LABEL_COUNTRY,
  LABEL_DOWN_PAYMENT,
  LABEL_ELECTRICITY,
  LABEL_GARBAGE,
  LABEL_HOA,
  LABEL_INCOME_GROWTH,
  LABEL_INSURANCE,
  LABEL_INTEREST_RATE,
  LABEL_LOAN_AMOUNT,
  LABEL_MANAGEMENT,
  LABEL_MORTGAGE,
  LABEL_NEIGHBORHOOD,
  LABEL_OTHER_EXPENSES,
  LABEL_OTHER_INCOME,
  LABEL_OTHER_INITIAL_COSTS,
  LABEL_POSTAL_OR_ZIP_CODE,
  LABEL_PRIVATE_MORTGAGE_INSURANCE,
  LABEL_PROPERTY_TAX,
  LABEL_PROPERTY_VALUE_GROWTH,
  LABEL_PROVINCE_OR_STATE,
  LABEL_PURCHASE_PRICE,
  LABEL_RENTAL_INCOME,
  LABEL_REPAIR_COSTS,
  LABEL_REPAIRS_AND_MAINTENANCE,
  LABEL_SQUARE_FEET,
  LABEL_STREET_ADDRESS,
  LABEL_UNIT_NUMBER,
  LABEL_VACANCY,
  LABEL_WATER_AND_SEWER,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../../constants';

const generalInfoInputProps = [
  {
    inputId: INPUT_ID_NEIGHBORHOOD,
    inputType: 'text',
    label: LABEL_NEIGHBORHOOD,
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_STREET_ADDRESS,
    inputType: 'text',
    label: LABEL_STREET_ADDRESS,
    textInputWidth: 210
  },
  {
    inputId: INPUT_ID_UNIT_NUMBER,
    inputType: 'text',
    label: LABEL_UNIT_NUMBER,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_CITY,
    inputType: 'text',
    label: LABEL_CITY,
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_PROVINCE_OR_STATE,
    inputType: 'text',
    label: LABEL_PROVINCE_OR_STATE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_COUNTRY,
    inputType: 'text',
    label: LABEL_COUNTRY,
    textInputWidth: 200
  },
  {
    inputId: INPUT_ID_POSTAL_OR_ZIP_CODE,
    inputType: 'text',
    label: LABEL_POSTAL_OR_ZIP_CODE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_SQUARE_FEET,
    inputType: 'number',
    label: LABEL_SQUARE_FEET,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
];

const initialPurchaseInputProps = [
  {
    inputDescription: INPUT_DESCRIPTION_PURCHASE_PRICE,
    inputId: INPUT_ID_PURCHASE_PRICE,
    inputType: 'number',
    label: LABEL_PURCHASE_PRICE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_DOWN_PAYMENT,
    inputId: INPUT_ID_DOWN_PAYMENT,
    inputType: 'number',
    label: LABEL_DOWN_PAYMENT,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_LOAN_AMOUNT,
    inputId: INPUT_ID_LOAN_AMOUNT,
    inputType: 'number',
    label: LABEL_LOAN_AMOUNT,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_INTEREST_RATE,
    inputId: INPUT_ID_INTEREST_RATE,
    inputType: 'number',
    label: LABEL_INTEREST_RATE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_AMORTIZATION_PERIOD,
    inputId: INPUT_ID_AMORTIZATION_PERIOD,
    inputType: 'number',
    label: LABEL_AMORTIZATION_PERIOD,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_AFTER_REPAIR_VALUE,
    inputId: INPUT_ID_AFTER_REPAIR_VALUE,
    inputType: 'number',
    label: LABEL_AFTER_REPAIR_VALUE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_REPAIR_COSTS,
    inputId: INPUT_ID_REPAIR_COSTS,
    inputType: 'number',
    label: LABEL_REPAIR_COSTS,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_CLOSING_COSTS,
    inputId: INPUT_ID_CLOSING_COSTS,
    inputType: 'number',
    label: LABEL_CLOSING_COSTS,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_OTHER_INITIAL_COSTS,
    inputId: INPUT_ID_OTHER_INITIAL_COSTS,
    inputType: 'number',
    label: LABEL_OTHER_INITIAL_COSTS,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
];

/* Only add stuff here to calculate income */
export const incomeInputProps = [
  {
    inputDescription: INPUT_DESCRIPTION_RENTAL_INCOME,
    inputId: INPUT_ID_RENTAL_INCOME,
    inputType: 'number',
    label: LABEL_RENTAL_INCOME,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputDescription: INPUT_DESCRIPTION_OTHER_INCOME,
    inputId: INPUT_ID_OTHER_INCOME,
    inputType: 'number',
    label: LABEL_OTHER_INCOME,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
];

/* Only add stuff here to calculate expenses */
export const expensesInputProps = [
  {
    inputId: INPUT_ID_MORTGAGE,
    inputType: 'number',
    label: LABEL_MORTGAGE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ELECTRICITY,
    inputType: 'number',
    label: LABEL_ELECTRICITY,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_WATER_AND_SEWER,
    inputType: 'number',
    label: LABEL_WATER_AND_SEWER,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
    inputType: 'number',
    label: LABEL_PRIVATE_MORTGAGE_INSURANCE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_GARBAGE,
    inputType: 'number',
    label: LABEL_GARBAGE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_HOA,
    inputType: 'number',
    label: LABEL_HOA,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_INSURANCE,
    inputType: 'number',
    label: LABEL_INSURANCE,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_PROPERTY_TAX,
    inputType: 'number',
    label: LABEL_PROPERTY_TAX,
    percentOfPropertyValue: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_VACANCY,
    inputType: 'number',
    label: LABEL_VACANCY,
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_REPAIRS_AND_MAINTENANCE,
    inputType: 'number',
    label: LABEL_REPAIRS_AND_MAINTENANCE,
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_CAP_EX,
    inputType: 'number',
    label: LABEL_CAP_EX,
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_MANAGEMENT,
    inputType: 'number',
    label: LABEL_MANAGEMENT,
    percentOfRent: true,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_OTHER_EXPENSES,
    inputType: 'number',
    label: LABEL_OTHER_EXPENSES,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
];

export const futureProjectionsInputProps = [
  {
    inputId: INPUT_ID_PROPERTY_VALUE_GROWTH,
    inputType: 'number',
    label: LABEL_PROPERTY_VALUE_GROWTH,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ANNUAL_INCOME_GROWTH,
    inputType: 'number',
    label: LABEL_INCOME_GROWTH,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  },
  {
    inputId: INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
    inputType: 'number',
    label: LABEL_CONSTANT_EXPENSES_GROWTH,
    textInputWidth: CALCULATOR_INPUT_WIDTH_DEFAULT
  }
];

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
];
